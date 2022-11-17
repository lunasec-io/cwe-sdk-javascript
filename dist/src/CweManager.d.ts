import { CweDictionary } from './CweDictionary'
type CweMemberships = {
  [key: string]: string[]
}
type CweHierarchy = {
  [key: string]: string[]
}
interface CweManagerOptions {
  cweDictionary?: Record<string, CweDictionary>
  cweMemberships?: CweMemberships
  cweHierarchy?: CweHierarchy
}
export declare function normalizeCweId(id: string): string
export declare class CweManager {
  private readonly cweDictionary
  private readonly cweMemberships
  private readonly cweHierarchy
  constructor(options?: CweManagerOptions)
  getName(weaknessId: string): string
  getMemberships(weaknessId: string): string[]
  isChildOf(
    weaknessId: string,
    parentId: string,
    options?: {
      indirect: boolean
    }
  ): boolean
  isChildOfIndirect(weaknessId: string, parentId: string): boolean
}
export {}
//# sourceMappingURL=CweManager.d.ts.map
