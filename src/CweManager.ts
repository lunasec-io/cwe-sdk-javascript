'use strict'

import CweMembershipsData from './cwe-data/cwe-memberships.json';
import CweDictionaryData from './cwe-data/cwe-dictionary.json';
import CweHierarchyData from './cwe-data/cwe-hierarchy.json';
import {CweDictionary} from "./CweDictionary";

type CweMemberships = { [key: string]: string[] };
type CweHierarchy = { [key: string]: string[] };

interface CweManagerOptions {
  cweDictionary?: Record<string, CweDictionary>;
  cweMemberships?: CweMemberships;
  cweHierarchy?: CweHierarchy;
}

export function normalizeCweId(id: string) {
  return id.toLowerCase().replace("cwe-", "")
}

export class CweManager {
  private readonly cweDictionary: Record<string, CweDictionary>;
  private readonly cweMemberships: CweMemberships;
  private readonly cweHierarchy: CweHierarchy;

  constructor(options?: CweManagerOptions) {
    this.cweDictionary = options?.cweDictionary ? options.cweDictionary : CweDictionaryData as Record<string, CweDictionary>;
    this.cweMemberships = options?.cweMemberships ? options.cweMemberships : CweMembershipsData as CweMemberships;
    this.cweHierarchy = options?.cweHierarchy ? options.cweHierarchy : CweHierarchyData as CweHierarchy;
  }

  getName(weaknessId: string) {
    return this.cweDictionary[weaknessId].attr.Name;
  }

  getMemberships(weaknessId: string) {
    return this.cweMemberships[weaknessId];
  }

  isChildOf(weaknessId: string, parentId: string, options?: { indirect: boolean }) {
    if (options?.indirect) {
      return this.isChildOfIndirect(weaknessId, parentId)
    }

    return this.cweHierarchy[weaknessId].some(p => p === parentId);
  }

  isChildOfIndirect(weaknessId: string, parentId: string): boolean {
    const weaknessParents = this.cweHierarchy[weaknessId];
    if (!weaknessParents) {
      return false;
    }
    if (weaknessParents.some(p => p === parentId)) {
      return true;
    }
    return weaknessParents.some(p => this.isChildOfIndirect(p, parentId));
  }
}
