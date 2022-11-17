'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CweManager = exports.normalizeCweId = void 0;
const cwe_memberships_json_1 = __importDefault(require("./cwe-data/cwe-memberships.json"));
const cwe_dictionary_json_1 = __importDefault(require("./cwe-data/cwe-dictionary.json"));
const cwe_hierarchy_json_1 = __importDefault(require("./cwe-data/cwe-hierarchy.json"));
function normalizeCweId(id) {
    return id.toLowerCase().replace("cwe-", "");
}
exports.normalizeCweId = normalizeCweId;
class CweManager {
    constructor(options) {
        this.cweDictionary = (options === null || options === void 0 ? void 0 : options.cweDictionary) ? options.cweDictionary : cwe_dictionary_json_1.default;
        this.cweMemberships = (options === null || options === void 0 ? void 0 : options.cweMemberships) ? options.cweMemberships : cwe_memberships_json_1.default;
        this.cweHierarchy = (options === null || options === void 0 ? void 0 : options.cweHierarchy) ? options.cweHierarchy : cwe_hierarchy_json_1.default;
    }
    getName(weaknessId) {
        return this.cweDictionary[weaknessId].attr.Name;
    }
    getMemberships(weaknessId) {
        return this.cweMemberships[weaknessId];
    }
    isChildOf(weaknessId, parentId, options) {
        if (options === null || options === void 0 ? void 0 : options.indirect) {
            return this.isChildOfIndirect(weaknessId, parentId);
        }
        return this.cweHierarchy[weaknessId].some(p => p === parentId);
    }
    isChildOfIndirect(weaknessId, parentId) {
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
exports.CweManager = CweManager;
//# sourceMappingURL=CweManager.js.map