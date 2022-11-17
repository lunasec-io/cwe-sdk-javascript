'use strict'

import CweMembershipsData from './cwe-data/cwe-memberships.json';
import CweDictionaryData from './cwe-data/cwe-dictionary.json';
import CweHierarchyData from './cwe-data/cwe-hierarchy.json';
import {CweDictionary} from "./CweDictionary";
import {CweMemberships} from "./CweMemberships";
import {CweHierarchy} from "./CweHierarchy";

interface CweManagerOptions {
  cweDictionary?: CweDictionary[];
  cweMemberships?: CweMemberships[];
  cweHierarchy?: CweHierarchy[];
}

export class CweManager {
  private cweDictionary: CweDictionary[];
  private cweMemberships: CweMemberships[];
  private cweHierarchy: CweHierarchy[];

  constructor(options?: CweManagerOptions) {
    this.cweDictionary = options?.cweDictionary ? options.cweDictionary : CweDictionaryData as CweDictionary[];
    this.cweMemberships = options?.cweMemberships ? options.cweMemberships : CweMembershipsData  as CweMemberships[];
    this.cweHierarchy = options?.cweHierarchy ? options.cweHierarchy : CweHierarchyData as CweHierarchy[];
  }

  getName(weaknessId: string) {
    const cwe = this.cweDictionary.find(c => c.attr.ID === weaknessId);
    return cwe?.attr.Name;
  }

  getMemberships(weaknessId: string) {
    const weakness = this.cweMemberships.find(weakness => weakness.weaknessId === weaknessId)
    if (!weakness) {
      return null
    }
    return weakness.memberships
  }

  isChildOf(weaknessId: string, parentId: string, options?: { indirect: boolean }) {
    if (options?.indirect) {
      return this.isChildOfIndirect(weaknessId, parentId)
    }

    return this.cweHierarchy.some(weakness => {
      return weakness.weaknessId === weaknessId && weakness.parentId === parentId
    })
  }

  isChildOfIndirect(weaknessId: string, parentId: string): boolean {
    return this.cweHierarchy.some(weakness => {
      if (weakness.weaknessId === weaknessId) {
        if (weakness.parentId === parentId) {
          return true
        } else {
          return this.isChildOfIndirect(weakness.parentId, parentId)
        }
      }
    })
  }
}
