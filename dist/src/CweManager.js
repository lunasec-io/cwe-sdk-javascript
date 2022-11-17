'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CweManager = void 0
const cwe_memberships_json_1 = __importDefault(require('./cwe-data/cwe-memberships.json'))
const cwe_dictionary_json_1 = __importDefault(require('./cwe-data/cwe-dictionary.json'))
const cwe_hierarchy_json_1 = __importDefault(require('./cwe-data/cwe-hierarchy.json'))
class CweManager {
  constructor(options) {
    this.cweDictionary = (options === null || options === void 0
    ? void 0
    : options.cweDictionary)
      ? options.cweDictionary
      : cwe_dictionary_json_1.default
    this.cweMemberships = (options === null || options === void 0
    ? void 0
    : options.cweMemberships)
      ? options.cweMemberships
      : cwe_memberships_json_1.default
    this.cweHierarchy = (options === null || options === void 0
    ? void 0
    : options.cweHierarchy)
      ? options.cweHierarchy
      : cwe_hierarchy_json_1.default
  }
  getName(weaknessId) {
    const cwe = this.cweDictionary.find(c => c.attr.ID === weaknessId)
    return cwe === null || cwe === void 0 ? void 0 : cwe.attr.Name
  }
  getMemberships(weaknessId) {
    const weakness = this.cweMemberships.find(weakness => weakness.weaknessId === weaknessId)
    if (!weakness) {
      return null
    }
    return weakness.memberships
  }
  isChildOf(weaknessId, parentId, options) {
    if (options === null || options === void 0 ? void 0 : options.indirect) {
      return this.isChildOfIndirect(weaknessId, parentId)
    }
    return this.cweHierarchy.some(weakness => {
      return weakness.weaknessId === weaknessId && weakness.parentId === parentId
    })
  }
  isChildOfIndirect(weaknessId, parentId) {
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
exports.CweManager = CweManager
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3dlTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Dd2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7O0FBRVosMkZBQWlFO0FBQ2pFLHlGQUErRDtBQUMvRCx1RkFBNkQ7QUFXN0QsTUFBYSxVQUFVO0lBS3JCLFlBQVksT0FBMkI7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLDZCQUFvQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsY0FBYyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyw4QkFBdUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsNEJBQWtDLENBQUM7SUFDeEcsQ0FBQztJQUVELE9BQU8sQ0FBQyxVQUFrQjtRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFrQjtRQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUE7UUFDekYsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFDRCxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUE7SUFDN0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxVQUFrQixFQUFFLFFBQWdCLEVBQUUsT0FBK0I7UUFDN0UsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtTQUNwRDtRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsT0FBTyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQTtRQUM3RSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxVQUFrQixFQUFFLFFBQWdCO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDdEMsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtvQkFDbEMsT0FBTyxJQUFJLENBQUE7aUJBQ1o7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtpQkFDM0Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBN0NELGdDQTZDQyJ9
