'use strict'
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const cweDictionary = Convert.toCweDictionary(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
Object.defineProperty(exports, '__esModule', { value: true })
exports.Convert = exports.Structure = exports.Status = exports.Abstraction = exports.TaxonomyName = exports.MappingFit = exports.Ordinal = exports.FluffyNature = exports.Strategy = exports.PurpleEffectiveness = exports.PhaseElement = exports.Method = exports.DetectionMethodEffectiveness = exports.XHTMLDivEnum = exports.XHTMLTh = exports.PurpleNature = exports.Language = exports.SubmissionOrganization = exports.ModificationOrganization = exports.ModificationName = exports.ModificationImportance = exports.ScopeElement = exports.Likelihood = exports.ImpactElement = exports.Style = exports.Type = exports.FluffyClass = exports.Prevalence = exports.PurpleClass = exports.AffectedResourceElement = void 0
var AffectedResourceElement
;(function(AffectedResourceElement) {
  AffectedResourceElement['CPU'] = 'CPU'
  AffectedResourceElement['FileOrDirectory'] = 'File or Directory'
  AffectedResourceElement['Memory'] = 'Memory'
  AffectedResourceElement['SystemProcess'] = 'System Process'
})(
  (AffectedResourceElement =
    exports.AffectedResourceElement || (exports.AffectedResourceElement = {}))
)
var PurpleClass
;(function(PurpleClass) {
  PurpleClass['Assembly'] = 'Assembly'
  PurpleClass['ClientServer'] = 'Client Server'
  PurpleClass['CloudComputing'] = 'Cloud Computing'
  PurpleClass['Compiled'] = 'Compiled'
  PurpleClass['Embedded'] = 'Embedded'
  PurpleClass['HardwareDescriptionLanguage'] = 'Hardware Description Language'
  PurpleClass['ICSOt'] = 'ICS/OT'
  PurpleClass['Interpreted'] = 'Interpreted'
  PurpleClass['MACOS'] = 'macOS'
  PurpleClass['Microcomputer'] = 'Microcomputer'
  PurpleClass['Mobile'] = 'Mobile'
  PurpleClass['NotLanguageSpecific'] = 'Not Language-Specific'
  PurpleClass['NotOSSpecific'] = 'Not OS-Specific'
  PurpleClass['NotTechnologySpecific'] = 'Not Technology-Specific'
  PurpleClass['SystemOnChip'] = 'System on Chip'
  PurpleClass['Unix'] = 'Unix'
  PurpleClass['WebBased'] = 'Web Based'
  PurpleClass['Windows'] = 'Windows'
  PurpleClass['Workstation'] = 'Workstation'
})((PurpleClass = exports.PurpleClass || (exports.PurpleClass = {})))
var Prevalence
;(function(Prevalence) {
  Prevalence['Often'] = 'Often'
  Prevalence['Rarely'] = 'Rarely'
  Prevalence['Sometimes'] = 'Sometimes'
  Prevalence['Undetermined'] = 'Undetermined'
})((Prevalence = exports.Prevalence || (exports.Prevalence = {})))
var FluffyClass
;(function(FluffyClass) {
  FluffyClass['NotArchitectureSpecific'] = 'Not Architecture-Specific'
})((FluffyClass = exports.FluffyClass || (exports.FluffyClass = {})))
var Type
;(function(Type) {
  Type['ApplicablePlatform'] = 'Applicable Platform'
  Type['Content'] = 'Content'
  Type['Feedback'] = 'Feedback'
  Type['Maintenance'] = 'Maintenance'
  Type['Mapping'] = 'Mapping'
  Type['Other'] = 'Other'
  Type['Relationship'] = 'Relationship'
  Type['ResearchGap'] = 'Research Gap'
  Type['Terminology'] = 'Terminology'
  Type['Theoretical'] = 'Theoretical'
})((Type = exports.Type || (exports.Type = {})))
var Style
;(function(Style) {
  Style['MarginLeft1Em'] = 'margin-left:1em;'
})((Style = exports.Style || (exports.Style = {})))
var ImpactElement
;(function(ImpactElement) {
  ImpactElement['AlterExecutionLogic'] = 'Alter Execution Logic'
  ImpactElement['BypassProtectionMechanism'] = 'Bypass Protection Mechanism'
  ImpactElement['DoSAmplification'] = 'DoS: Amplification'
  ImpactElement['DoSCrashExitOrRestart'] = 'DoS: Crash, Exit, or Restart'
  ImpactElement['DoSInstability'] = 'DoS: Instability'
  ImpactElement['DoSResourceConsumptionCPU'] = 'DoS: Resource Consumption (CPU)'
  ImpactElement['DoSResourceConsumptionMemory'] = 'DoS: Resource Consumption (Memory)'
  ImpactElement['DoSResourceConsumptionOther'] = 'DoS: Resource Consumption (Other)'
  ImpactElement['ExecuteUnauthorizedCodeOrCommands'] = 'Execute Unauthorized Code or Commands'
  ImpactElement['GainPrivilegesOrAssumeIdentity'] = 'Gain Privileges or Assume Identity'
  ImpactElement['HideActivities'] = 'Hide Activities'
  ImpactElement['ModifyApplicationData'] = 'Modify Application Data'
  ImpactElement['ModifyFilesOrDirectories'] = 'Modify Files or Directories'
  ImpactElement['ModifyMemory'] = 'Modify Memory'
  ImpactElement['Other'] = 'Other'
  ImpactElement['QualityDegradation'] = 'Quality Degradation'
  ImpactElement['ReadApplicationData'] = 'Read Application Data'
  ImpactElement['ReadFilesOrDirectories'] = 'Read Files or Directories'
  ImpactElement['ReadMemory'] = 'Read Memory'
  ImpactElement['ReduceMaintainability'] = 'Reduce Maintainability'
  ImpactElement['ReducePerformance'] = 'Reduce Performance'
  ImpactElement['ReduceReliability'] = 'Reduce Reliability'
  ImpactElement['UnexpectedState'] = 'Unexpected State'
  ImpactElement['VariesByContext'] = 'Varies by Context'
})((ImpactElement = exports.ImpactElement || (exports.ImpactElement = {})))
var Likelihood
;(function(Likelihood) {
  Likelihood['High'] = 'High'
  Likelihood['Low'] = 'Low'
  Likelihood['Medium'] = 'Medium'
  Likelihood['Unknown'] = 'Unknown'
})((Likelihood = exports.Likelihood || (exports.Likelihood = {})))
var ScopeElement
;(function(ScopeElement) {
  ScopeElement['AccessControl'] = 'Access Control'
  ScopeElement['Accountability'] = 'Accountability'
  ScopeElement['Authentication'] = 'Authentication'
  ScopeElement['Authorization'] = 'Authorization'
  ScopeElement['Availability'] = 'Availability'
  ScopeElement['Confidentiality'] = 'Confidentiality'
  ScopeElement['Integrity'] = 'Integrity'
  ScopeElement['NonRepudiation'] = 'Non-Repudiation'
  ScopeElement['Other'] = 'Other'
})((ScopeElement = exports.ScopeElement || (exports.ScopeElement = {})))
var ModificationImportance
;(function(ModificationImportance) {
  ModificationImportance['Critical'] = 'Critical'
})(
  (ModificationImportance = exports.ModificationImportance || (exports.ModificationImportance = {}))
)
var ModificationName
;(function(ModificationName) {
  ModificationName['CWEContentTeam'] = 'CWE Content Team'
  ModificationName['DavidRemahl'] = 'David Remahl'
  ModificationName['EricDalci'] = 'Eric Dalci'
  ModificationName['JasperVanWoudenberg'] = 'Jasper van Woudenberg'
  ModificationName['KDMAnalytics'] = 'KDM Analytics'
  ModificationName['SeanEidemiller'] = 'Sean Eidemiller'
  ModificationName['TomStracener'] = 'Tom Stracener'
})((ModificationName = exports.ModificationName || (exports.ModificationName = {})))
var ModificationOrganization
;(function(ModificationOrganization) {
  ModificationOrganization['Apple'] = 'Apple'
  ModificationOrganization['CWETeam'] = 'CWE Team'
  ModificationOrganization['Cigital'] = 'Cigital'
  ModificationOrganization['KDMAnalytics'] = 'KDM Analytics'
  ModificationOrganization['Mitre'] = 'MITRE'
  ModificationOrganization['Riscure'] = 'Riscure'
  ModificationOrganization['Veracode'] = 'Veracode'
})(
  (ModificationOrganization =
    exports.ModificationOrganization || (exports.ModificationOrganization = {}))
)
var SubmissionOrganization
;(function(SubmissionOrganization) {
  SubmissionOrganization['AccelleraIPSecurityAssuranceIPSAWorkingGroup'] =
    'Accellera IP Security Assurance (IPSA) Working Group'
  SubmissionOrganization['AccelleraSystemsInitiative'] = 'Accellera Systems Initiative'
  SubmissionOrganization['Bosch'] = 'Bosch'
  SubmissionOrganization['CWEContentTeam'] = 'CWE Content Team'
  SubmissionOrganization['Cigital'] = 'Cigital'
  SubmissionOrganization['CloudSecurityAlliance'] = 'Cloud Security Alliance'
  SubmissionOrganization['FortifySoftware'] = 'Fortify Software'
  SubmissionOrganization['IntelCorporation'] = 'Intel Corporation'
  SubmissionOrganization['Mitre'] = 'MITRE'
  SubmissionOrganization['PurdueUniversity'] = 'Purdue University'
  SubmissionOrganization['Riscure'] = 'Riscure'
  SubmissionOrganization['SiliconValleyBank'] = 'Silicon Valley Bank'
  SubmissionOrganization['TennesseeTechnologicalUniversity'] = 'Tennessee Technological University'
  SubmissionOrganization['TheIntelCorporation'] = 'The Intel Corporation'
  SubmissionOrganization['TortugaLogic'] = 'Tortuga Logic'
  SubmissionOrganization['TrendMicro'] = 'Trend Micro'
  SubmissionOrganization['Veracode'] = 'Veracode'
  SubmissionOrganization['WellsFargo'] = 'Wells Fargo'
})(
  (SubmissionOrganization = exports.SubmissionOrganization || (exports.SubmissionOrganization = {}))
)
var Language
;(function(Language) {
  Language['ASPNet'] = 'ASP.NET'
  Language['C'] = 'C'
  Language['HTML'] = 'HTML'
  Language['JSP'] = 'JSP'
  Language['Java'] = 'Java'
  Language['JavaScript'] = 'JavaScript'
  Language['LanguageC'] = 'C#'
  Language['ObjectiveC'] = 'Objective-C'
  Language['Other'] = 'Other'
  Language['PERL'] = 'Perl'
  Language['PHP'] = 'PHP'
  Language['Pseudocode'] = 'Pseudocode'
  Language['PurpleC'] = 'C++'
  Language['Python'] = 'Python'
  Language['Rust'] = 'Rust'
  Language['SQL'] = 'SQL'
  Language['Shell'] = 'Shell'
  Language['Verilog'] = 'Verilog'
  Language['X86Assembly'] = 'x86 Assembly'
  Language['XML'] = 'XML'
})((Language = exports.Language || (exports.Language = {})))
var PurpleNature
;(function(PurpleNature) {
  PurpleNature['Attack'] = 'Attack'
  PurpleNature['Bad'] = 'Bad'
  PurpleNature['Good'] = 'Good'
  PurpleNature['Informative'] = 'Informative'
  PurpleNature['Mitigation'] = 'Mitigation'
  PurpleNature['NatureBad'] = 'bad'
  PurpleNature['Result'] = 'Result'
})((PurpleNature = exports.PurpleNature || (exports.PurpleNature = {})))
var XHTMLTh
;(function(XHTMLTh) {
  XHTMLTh['FieldDescription'] = 'Field description'
  XHTMLTh['Register'] = 'Register'
})((XHTMLTh = exports.XHTMLTh || (exports.XHTMLTh = {})))
var XHTMLDivEnum
;(function(XHTMLDivEnum) {
  XHTMLDivEnum['CostEffectiveForPartialCoverage'] = 'Cost effective for partial coverage:'
  XHTMLDivEnum['HighlyCostEffective'] = 'Highly cost effective:'
})((XHTMLDivEnum = exports.XHTMLDivEnum || (exports.XHTMLDivEnum = {})))
var DetectionMethodEffectiveness
;(function(DetectionMethodEffectiveness) {
  DetectionMethodEffectiveness['High'] = 'High'
  DetectionMethodEffectiveness['Limited'] = 'Limited'
  DetectionMethodEffectiveness['Moderate'] = 'Moderate'
  DetectionMethodEffectiveness['Opportunistic'] = 'Opportunistic'
  DetectionMethodEffectiveness['SOARPartial'] = 'SOAR Partial'
})(
  (DetectionMethodEffectiveness =
    exports.DetectionMethodEffectiveness || (exports.DetectionMethodEffectiveness = {}))
)
var Method
;(function(Method) {
  Method['ArchitectureOrDesignReview'] = 'Architecture or Design Review'
  Method['AutomatedAnalysis'] = 'Automated Analysis'
  Method['AutomatedDynamicAnalysis'] = 'Automated Dynamic Analysis'
  Method['AutomatedStaticAnalysis'] = 'Automated Static Analysis'
  Method['AutomatedStaticAnalysisBinaryOrBytecode'] =
    'Automated Static Analysis - Binary or Bytecode'
  Method['AutomatedStaticAnalysisSourceCode'] = 'Automated Static Analysis - Source Code'
  Method['BlackBox'] = 'Black Box'
  Method['DynamicAnalysisWithAutomatedResultsInterpretation'] =
    'Dynamic Analysis with Automated Results Interpretation'
  Method['DynamicAnalysisWithManualResultsInterpretation'] =
    'Dynamic Analysis with Manual Results Interpretation'
  Method['FormalVerification'] = 'Formal Verification'
  Method['Fuzzing'] = 'Fuzzing'
  Method['ManualAnalysis'] = 'Manual Analysis'
  Method['ManualDynamicAnalysis'] = 'Manual Dynamic Analysis'
  Method['ManualStaticAnalysis'] = 'Manual Static Analysis'
  Method['ManualStaticAnalysisBinaryOrBytecode'] = 'Manual Static Analysis - Binary or Bytecode'
  Method['ManualStaticAnalysisSourceCode'] = 'Manual Static Analysis - Source Code'
  Method['Other'] = 'Other'
  Method['SimulationEmulation'] = 'Simulation / Emulation'
  Method['WhiteBox'] = 'White Box'
})((Method = exports.Method || (exports.Method = {})))
var PhaseElement
;(function(PhaseElement) {
  PhaseElement['ArchitectureAndDesign'] = 'Architecture and Design'
  PhaseElement['BuildAndCompilation'] = 'Build and Compilation'
  PhaseElement['Bundling'] = 'Bundling'
  PhaseElement['Distribution'] = 'Distribution'
  PhaseElement['Documentation'] = 'Documentation'
  PhaseElement['Implementation'] = 'Implementation'
  PhaseElement['Installation'] = 'Installation'
  PhaseElement['Integration'] = 'Integration'
  PhaseElement['Manufacturing'] = 'Manufacturing'
  PhaseElement['Operation'] = 'Operation'
  PhaseElement['PatchingAndMaintenance'] = 'Patching and Maintenance'
  PhaseElement['Policy'] = 'Policy'
  PhaseElement['Requirements'] = 'Requirements'
  PhaseElement['SystemConfiguration'] = 'System Configuration'
  PhaseElement['Testing'] = 'Testing'
})((PhaseElement = exports.PhaseElement || (exports.PhaseElement = {})))
var PurpleEffectiveness
;(function(PurpleEffectiveness) {
  PurpleEffectiveness['DefenseInDepth'] = 'Defense in Depth'
  PurpleEffectiveness['DiscouragedCommonPractice'] = 'Discouraged Common Practice'
  PurpleEffectiveness['High'] = 'High'
  PurpleEffectiveness['Limited'] = 'Limited'
  PurpleEffectiveness['Moderate'] = 'Moderate'
  PurpleEffectiveness['None'] = 'None'
})((PurpleEffectiveness = exports.PurpleEffectiveness || (exports.PurpleEffectiveness = {})))
var Strategy
;(function(Strategy) {
  Strategy['AttackSurfaceReduction'] = 'Attack Surface Reduction'
  Strategy['CompilationOrBuildHardening'] = 'Compilation or Build Hardening'
  Strategy['EnforcementByConversion'] = 'Enforcement by Conversion'
  Strategy['EnvironmentHardening'] = 'Environment Hardening'
  Strategy['Firewall'] = 'Firewall'
  Strategy['InputValidation'] = 'Input Validation'
  Strategy['LanguageSelection'] = 'Language Selection'
  Strategy['LibrariesOrFrameworks'] = 'Libraries or Frameworks'
  Strategy['OutputEncoding'] = 'Output Encoding'
  Strategy['Parameterization'] = 'Parameterization'
  Strategy['Refactoring'] = 'Refactoring'
  Strategy['ResourceLimitation'] = 'Resource Limitation'
  Strategy['SandboxOrJail'] = 'Sandbox or Jail'
  Strategy['SeparationOfPrivilege'] = 'Separation of Privilege'
})((Strategy = exports.Strategy || (exports.Strategy = {})))
var FluffyNature
;(function(FluffyNature) {
  FluffyNature['CanAlsoBe'] = 'CanAlsoBe'
  FluffyNature['CanPrecede'] = 'CanPrecede'
  FluffyNature['ChildOf'] = 'ChildOf'
  FluffyNature['PeerOf'] = 'PeerOf'
  FluffyNature['Requires'] = 'Requires'
  FluffyNature['StartsWith'] = 'StartsWith'
})((FluffyNature = exports.FluffyNature || (exports.FluffyNature = {})))
var Ordinal
;(function(Ordinal) {
  Ordinal['Indirect'] = 'Indirect'
  Ordinal['Primary'] = 'Primary'
  Ordinal['Resultant'] = 'Resultant'
})((Ordinal = exports.Ordinal || (exports.Ordinal = {})))
var MappingFit
;(function(MappingFit) {
  MappingFit['CWEMoreAbstract'] = 'CWE More Abstract'
  MappingFit['CWEMoreSpecific'] = 'CWE More Specific'
  MappingFit['Exact'] = 'Exact'
  MappingFit['Imprecise'] = 'Imprecise'
})((MappingFit = exports.MappingFit || (exports.MappingFit = {})))
var TaxonomyName
;(function(TaxonomyName) {
  TaxonomyName['CERTCSecureCoding'] = 'CERT C Secure Coding'
  TaxonomyName['Clasp'] = 'CLASP'
  TaxonomyName['Landwehr'] = 'Landwehr'
  TaxonomyName['OMGAscmm'] = 'OMG ASCMM'
  TaxonomyName['OMGAscpem'] = 'OMG ASCPEM'
  TaxonomyName['OMGAscrm'] = 'OMG ASCRM'
  TaxonomyName['OMGAscsm'] = 'OMG ASCSM'
  TaxonomyName['OWASPTopTen2004'] = 'OWASP Top Ten 2004'
  TaxonomyName['OWASPTopTen2007'] = 'OWASP Top Ten 2007'
  TaxonomyName['Plover'] = 'PLOVER'
  TaxonomyName['SEICERTOracleCodingStandardForJava'] = 'SEI CERT Oracle Coding Standard for Java'
  TaxonomyName['SEICERTPERLCodingStandard'] = 'SEI CERT Perl Coding Standard'
  TaxonomyName['SoftwareFaultPatterns'] = 'Software Fault Patterns'
  TaxonomyName['The7PerniciousKingdoms'] = '7 Pernicious Kingdoms'
  TaxonomyName['TheCERTOracleSecureCodingStandardForJava2011'] =
    'The CERT Oracle Secure Coding Standard for Java (2011)'
  TaxonomyName['Wasc'] = 'WASC'
})((TaxonomyName = exports.TaxonomyName || (exports.TaxonomyName = {})))
var Abstraction
;(function(Abstraction) {
  Abstraction['Base'] = 'Base'
  Abstraction['Class'] = 'Class'
  Abstraction['Compound'] = 'Compound'
  Abstraction['Pillar'] = 'Pillar'
  Abstraction['Variant'] = 'Variant'
})((Abstraction = exports.Abstraction || (exports.Abstraction = {})))
var Status
;(function(Status) {
  Status['Deprecated'] = 'Deprecated'
  Status['Draft'] = 'Draft'
  Status['Incomplete'] = 'Incomplete'
  Status['Stable'] = 'Stable'
})((Status = exports.Status || (exports.Status = {})))
var Structure
;(function(Structure) {
  Structure['Chain'] = 'Chain'
  Structure['Composite'] = 'Composite'
  Structure['Simple'] = 'Simple'
})((Structure = exports.Structure || (exports.Structure = {})))
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
class Convert {
  static toCweDictionary(json) {
    return cast(JSON.parse(json), m(r('CweDictionary')))
  }
  static cweDictionaryToJson(value) {
    return JSON.stringify(uncast(value, m(r('CweDictionary'))), null, 2)
  }
}
exports.Convert = Convert
function invalidValue(typ, val, key = '') {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    )
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`)
}
function jsonToJSProps(typ) {
  if (typ.jsonToJS === undefined) {
    const map = {}
    typ.props.forEach(p => (map[p.json] = { key: p.js, typ: p.typ }))
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}
function jsToJSONProps(typ) {
  if (typ.jsToJSON === undefined) {
    const map = {}
    typ.props.forEach(p => (map[p.js] = { key: p.json, typ: p.typ }))
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}
function transform(val, typ, getProps, key = '') {
  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val
    return invalidValue(typ, val, key)
  }
  function transformUnion(typs, val) {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      } catch (_) {}
    }
    return invalidValue(typs, val)
  }
  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val
    return invalidValue(cases, val)
  }
  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val)
    return val.map(el => transform(el, typ, getProps))
  }
  function transformDate(val) {
    if (val === null) {
      return null
    }
    const d = new Date(val)
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val)
    }
    return d
  }
  function transformObject(props, additional, val) {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val)
    }
    const result = {}
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined
      result[prop.key] = transform(v, prop.typ, getProps, prop.key)
    })
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key)
      }
    })
    return result
  }
  if (typ === 'any') return val
  if (typ === null) {
    if (val === null) return val
    return invalidValue(typ, val)
  }
  if (typ === false) return invalidValue(typ, val)
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref]
  }
  if (Array.isArray(typ)) return transformEnum(typ, val)
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val)
  return transformPrimitive(typ, val)
}
function cast(val, typ) {
  return transform(val, typ, jsonToJSProps)
}
function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps)
}
function a(typ) {
  return { arrayItems: typ }
}
function u(...typs) {
  return { unionMembers: typs }
}
function o(props, additional) {
  return { props, additional }
}
function m(additional) {
  return { props: [], additional }
}
function r(name) {
  return { ref: name }
}
const typeMap = {
  CweDictionary: o(
    [
      { json: 'attr', js: 'attr', typ: r('CweDictionaryAttr') },
      { json: 'Description', js: 'Description', typ: '' },
      {
        json: 'Related_Weaknesses',
        js: 'Related_Weaknesses',
        typ: u(undefined, r('RelatedWeaknesses'))
      },
      {
        json: 'Applicable_Platforms',
        js: 'Applicable_Platforms',
        typ: u(undefined, r('ApplicablePlatforms'))
      },
      {
        json: 'Modes_Of_Introduction',
        js: 'Modes_Of_Introduction',
        typ: u(undefined, r('ModesOfIntroduction'))
      },
      {
        json: 'Common_Consequences',
        js: 'Common_Consequences',
        typ: u(undefined, r('CommonConsequences'))
      },
      {
        json: 'Potential_Mitigations',
        js: 'Potential_Mitigations',
        typ: u(undefined, r('PotentialMitigations'))
      },
      {
        json: 'Taxonomy_Mappings',
        js: 'Taxonomy_Mappings',
        typ: u(undefined, r('TaxonomyMappings'))
      },
      { json: 'References', js: 'References', typ: u(undefined, r('CweDictionaryReferences')) },
      { json: 'Notes', js: 'Notes', typ: u(undefined, r('Notes')) },
      { json: 'Content_History', js: 'Content_History', typ: r('ContentHistory') },
      {
        json: 'Extended_Description',
        js: 'Extended_Description',
        typ: u(undefined, u(r('ExtendedDescriptionClass'), ''))
      },
      {
        json: 'Background_Details',
        js: 'Background_Details',
        typ: u(undefined, r('BackgroundDetails'))
      },
      {
        json: 'Demonstrative_Examples',
        js: 'Demonstrative_Examples',
        typ: u(undefined, r('DemonstrativeExamples'))
      },
      {
        json: 'Related_Attack_Patterns',
        js: 'Related_Attack_Patterns',
        typ: u(undefined, r('RelatedAttackPatterns'))
      },
      {
        json: 'Detection_Methods',
        js: 'Detection_Methods',
        typ: u(undefined, r('DetectionMethods'))
      },
      {
        json: 'Affected_Resources',
        js: 'Affected_Resources',
        typ: u(undefined, r('AffectedResources'))
      },
      {
        json: 'Likelihood_Of_Exploit',
        js: 'Likelihood_Of_Exploit',
        typ: u(undefined, r('Likelihood'))
      },
      {
        json: 'Observed_Examples',
        js: 'Observed_Examples',
        typ: u(undefined, r('ObservedExamples'))
      },
      {
        json: 'Weakness_Ordinalities',
        js: 'Weakness_Ordinalities',
        typ: u(undefined, r('WeaknessOrdinalities'))
      },
      { json: 'Alternate_Terms', js: 'Alternate_Terms', typ: u(undefined, r('AlternateTerms')) },
      { json: 'Functional_Areas', js: 'Functional_Areas', typ: u(undefined, r('FunctionalAreas')) }
    ],
    false
  ),
  AffectedResources: o(
    [
      {
        json: 'Affected_Resource',
        js: 'Affected_Resource',
        typ: u(a(r('AffectedResourceElement')), r('AffectedResourceElement'))
      }
    ],
    false
  ),
  AlternateTerms: o(
    [
      {
        json: 'Alternate_Term',
        js: 'Alternate_Term',
        typ: u(a(r('AlternateTermElement')), r('PurpleAlternateTerm'))
      }
    ],
    false
  ),
  AlternateTermElement: o(
    [
      { json: 'Term', js: 'Term', typ: '' },
      { json: 'Description', js: 'Description', typ: u(undefined, '') }
    ],
    false
  ),
  PurpleAlternateTerm: o(
    [
      { json: 'Term', js: 'Term', typ: '' },
      { json: 'Description', js: 'Description', typ: u(undefined, u(r('NoteClass'), '')) }
    ],
    false
  ),
  NoteClass: o([{ json: 'xhtml:p', js: 'xhtml:p', typ: a('') }], false),
  ApplicablePlatforms: o(
    [
      {
        json: 'Language',
        js: 'Language',
        typ: u(undefined, u(a(r('LanguageElement')), r('LanguageElement')))
      },
      {
        json: 'Technology',
        js: 'Technology',
        typ: u(undefined, u(a(r('LanguageElement')), r('LanguageElement')))
      },
      {
        json: 'Operating_System',
        js: 'Operating_System',
        typ: u(undefined, u(a(r('LanguageElement')), r('LanguageElement')))
      },
      {
        json: 'Architecture',
        js: 'Architecture',
        typ: u(undefined, u(a(r('LanguageElement')), r('ArchitectureClass')))
      }
    ],
    false
  ),
  LanguageElement: o([{ json: 'attr', js: 'attr', typ: r('LanguageAttr') }], false),
  LanguageAttr: o(
    [
      { json: '@_Class', js: '@_Class', typ: u(undefined, r('PurpleClass')) },
      { json: '@_Prevalence', js: '@_Prevalence', typ: r('Prevalence') },
      { json: '@_Name', js: '@_Name', typ: u(undefined, '') }
    ],
    false
  ),
  ArchitectureClass: o([{ json: 'attr', js: 'attr', typ: r('PurpleAttr') }], false),
  PurpleAttr: o(
    [
      { json: '@_Class', js: '@_Class', typ: r('FluffyClass') },
      { json: '@_Prevalence', js: '@_Prevalence', typ: r('Prevalence') }
    ],
    false
  ),
  BackgroundDetails: o(
    [
      {
        json: 'Background_Detail',
        js: 'Background_Detail',
        typ: u(a(''), r('BackgroundDetail'), '')
      }
    ],
    false
  ),
  BackgroundDetail: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('BackgroundDetailXHTMLDiv')) },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:img', js: 'xhtml:img', typ: u(undefined, r('XHTMLImg')) },
      { json: 'xhtml:ol', js: 'xhtml:ol', typ: u(undefined, r('XHTMLOlElement')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('BackgroundDetailAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) }
    ],
    false
  ),
  BackgroundDetailAttr: o([{ json: '@_Type', js: '@_Type', typ: r('Type') }], false),
  BackgroundDetailXHTMLDiv: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a('')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDivAttr: o([{ json: '@_style', js: '@_style', typ: r('Style') }], false),
  XHTMLImg: o([{ json: 'attr', js: 'attr', typ: r('XHTMLImgAttr') }], false),
  XHTMLImgAttr: o(
    [
      { json: '@_src', js: '@_src', typ: '' },
      { json: '@_alt', js: '@_alt', typ: '' }
    ],
    false
  ),
  XHTMLOlElement: o([{ json: 'xhtml:li', js: 'xhtml:li', typ: a('') }], false),
  CommonConsequences: o(
    [
      {
        json: 'Consequence',
        js: 'Consequence',
        typ: u(a(r('ConsequenceElement')), r('ConsequenceElement'))
      }
    ],
    false
  ),
  ConsequenceElement: o(
    [
      { json: 'Scope', js: 'Scope', typ: u(a(r('ScopeElement')), r('ScopeElement')) },
      {
        json: 'Impact',
        js: 'Impact',
        typ: u(undefined, u(a(r('ImpactElement')), r('ImpactElement')))
      },
      { json: 'Note', js: 'Note', typ: u(undefined, '') },
      { json: 'Likelihood', js: 'Likelihood', typ: u(undefined, r('Likelihood')) }
    ],
    false
  ),
  ContentHistory: o(
    [
      { json: 'Submission', js: 'Submission', typ: r('Submission') },
      {
        json: 'Modification',
        js: 'Modification',
        typ: u(undefined, u(a(r('ModificationElement')), r('ModificationElement')))
      },
      {
        json: 'Previous_Entry_Name',
        js: 'Previous_Entry_Name',
        typ: u(undefined, u(a(r('PreviousEntryNameElement')), r('PreviousEntryNameElement')))
      },
      {
        json: 'Contribution',
        js: 'Contribution',
        typ: u(undefined, u(a(r('ContributionElement')), r('ContributionElement')))
      }
    ],
    false
  ),
  ContributionElement: o(
    [
      { json: 'attr', js: 'attr', typ: r('BackgroundDetailAttr') },
      { json: 'Contribution_Organization', js: 'Contribution_Organization', typ: u(undefined, '') },
      { json: 'Contribution_Date', js: 'Contribution_Date', typ: Date },
      { json: 'Contribution_Comment', js: 'Contribution_Comment', typ: '' },
      { json: 'Contribution_Name', js: 'Contribution_Name', typ: u(undefined, '') }
    ],
    false
  ),
  ModificationElement: o(
    [
      {
        json: 'Modification_Name',
        js: 'Modification_Name',
        typ: u(undefined, r('ModificationName'))
      },
      {
        json: 'Modification_Organization',
        js: 'Modification_Organization',
        typ: u(undefined, r('ModificationOrganization'))
      },
      { json: 'Modification_Date', js: 'Modification_Date', typ: Date },
      { json: 'Modification_Comment', js: 'Modification_Comment', typ: u(undefined, '') },
      {
        json: 'Modification_Importance',
        js: 'Modification_Importance',
        typ: u(undefined, r('ModificationImportance'))
      }
    ],
    false
  ),
  PreviousEntryNameElement: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('PreviousEntryNameAttr') }
    ],
    false
  ),
  PreviousEntryNameAttr: o([{ json: '@_Date', js: '@_Date', typ: Date }], false),
  Submission: o(
    [
      { json: 'Submission_Name', js: 'Submission_Name', typ: u(undefined, '') },
      { json: 'Submission_Date', js: 'Submission_Date', typ: Date },
      { json: 'Submission_Comment', js: 'Submission_Comment', typ: u(undefined, '') },
      {
        json: 'Submission_Organization',
        js: 'Submission_Organization',
        typ: u(undefined, r('SubmissionOrganization'))
      }
    ],
    false
  ),
  DemonstrativeExamples: o(
    [
      {
        json: 'Demonstrative_Example',
        js: 'Demonstrative_Example',
        typ: u(a(r('DemonstrativeExampleElement')), r('PurpleDemonstrativeExample'))
      }
    ],
    false
  ),
  DemonstrativeExampleElement: o(
    [
      { json: 'Intro_Text', js: 'Intro_Text', typ: u(r('PurpleIntroText'), '') },
      {
        json: 'Example_Code',
        js: 'Example_Code',
        typ: u(undefined, u(a(r('PurpleExampleCode')), r('FluffyExampleCode')))
      },
      {
        json: 'Body_Text',
        js: 'Body_Text',
        typ: u(undefined, u(a(u(r('PurpleBodyText'), '')), r('BackgroundDetail'), ''))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('DemonstrativeExampleAttr')) },
      {
        json: 'References',
        js: 'References',
        typ: u(undefined, r('DemonstrativeExampleReferences'))
      }
    ],
    false
  ),
  PurpleBodyText: o(
    [
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('PurpleXHTML')) },
      { json: 'xhtml:ol', js: 'xhtml:ol', typ: u(undefined, r('PurpleXHTML')) },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('PurpleXHTMLDiv')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') }
    ],
    false
  ),
  PurpleXHTMLDiv: o([{ json: 'xhtml:div', js: 'xhtml:div', typ: u(a(''), 0, '') }], false),
  PurpleXHTML: o([{ json: 'xhtml:li', js: 'xhtml:li', typ: a(r('XHTMLOlXHTMLLi')) }], false),
  XHTMLOlXHTMLLi: o([{ json: 'xhtml:div', js: 'xhtml:div', typ: '' }], false),
  PurpleExampleCode: o(
    [
      { json: 'attr', js: 'attr', typ: r('ExampleCodeAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('FluffyXHTMLDiv')), r('XHTMLDiv11'), ''))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, '') },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'xhtml:table', js: 'xhtml:table', typ: u(undefined, r('XHTMLTableXHTMLTable')) }
    ],
    false
  ),
  ExampleCodeAttr: o(
    [
      { json: '@_Nature', js: '@_Nature', typ: r('PurpleNature') },
      { json: '@_Language', js: '@_Language', typ: u(undefined, r('Language')) }
    ],
    false
  ),
  FluffyXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('TentacledXHTMLDiv')), r('XHTMLDiv4')))
      }
    ],
    false
  ),
  TentacledXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('StickyXHTMLDiv')) }
    ],
    false
  ),
  XHTMLDiv3: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('StickyXHTMLDiv')) }
    ],
    false
  ),
  XHTMLDiv2: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv3')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  StickyXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndigoXHTMLDiv')), r('XHTMLDiv2')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  IndigoXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('IndecentXHTMLDiv')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv1: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('IndecentXHTMLDiv')) }
    ],
    false
  ),
  BraggadociousXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, a('')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('XHTMLDiv1'))) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  MischievousXHTMLDiv: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: r('BraggadociousXHTMLDiv') },
      { json: '#text', js: '#text', typ: u(undefined, '') }
    ],
    false
  ),
  AmbitiousXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('CunningXHTMLDiv')), r('MischievousXHTMLDiv')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  IndecentXHTMLDiv: o(
    [
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(u(r('HilariousXHTMLDiv'), '')), r('AmbitiousXHTMLDiv')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') }
    ],
    false
  ),
  CunningXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('MagentaXHTMLDiv')) }
    ],
    false
  ),
  MagentaXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(a(''), '') },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('FriskyXHTMLDiv')) }
    ],
    false
  ),
  FriskyXHTMLDiv: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: r('FluffyXHTML') }
    ],
    false
  ),
  FluffyXHTML: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: a('') }
    ],
    false
  ),
  HilariousXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv4: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv5')), r('XHTMLDiv7')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv5: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv6')) }
    ],
    false
  ),
  XHTMLDiv6: o(
    [
      { json: 'xhtml:i', js: 'xhtml:i', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      { json: '#text', js: '#text', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv7: o(
    [
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv8')), r('XHTMLDiv9')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv8: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') }
    ],
    false
  ),
  XHTMLDiv9: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv10')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv10: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('StickyXHTMLDiv')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) }
    ],
    false
  ),
  XHTMLDiv11: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv12')), r('XHTMLDiv18')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv12: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv13')), r('XHTMLDiv17')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv13: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv14')) }
    ],
    false
  ),
  XHTMLDiv14: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv15')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv15: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv16')) }
    ],
    false
  ),
  XHTMLDiv16: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: a('') }
    ],
    false
  ),
  XHTMLDiv17: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('FluffyXHTMLDiv')), r('StickyXHTMLDiv')))
      }
    ],
    false
  ),
  XHTMLDiv18: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv19')), r('XHTMLDiv20')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:b', js: 'xhtml:b', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv19: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('XHTMLDiv14'))) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv20: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv21')), r('FluffyXHTMLDiv')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv21: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv22')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv22: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('FluffyXHTMLDiv')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLTableXHTMLTable: o(
    [{ json: 'xhtml:tr', js: 'xhtml:tr', typ: a(r('PurpleXHTMLTr')) }],
    false
  ),
  PurpleXHTMLTr: o(
    [
      { json: 'xhtml:th', js: 'xhtml:th', typ: u(undefined, a('')) },
      { json: 'xhtml:td', js: 'xhtml:td', typ: u(undefined, a(u(r('TentacledXHTML'), ''))) }
    ],
    false
  ),
  TentacledXHTML: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: '' }
    ],
    false
  ),
  FluffyExampleCode: o(
    [
      { json: 'attr', js: 'attr', typ: r('ExampleCodeAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, u(r('XHTMLDiv23'), '')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      { json: 'xhtml:b', js: 'xhtml:b', typ: u(undefined, a('')) }
    ],
    false
  ),
  XHTMLDiv23: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv24')), r('XHTMLDiv27')))
      }
    ],
    false
  ),
  XHTMLDiv24: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv25')), r('XHTMLDiv26')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv25: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, a('')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('FluffyXHTMLDiv'))) }
    ],
    false
  ),
  XHTMLDiv26: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('IndecentXHTMLDiv')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv27: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv28')), r('XHTMLDiv29')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv28: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('FluffyXHTMLDiv'))) }
    ],
    false
  ),
  XHTMLDiv29: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('FluffyXHTMLDiv')), r('XHTMLDiv30')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv30: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv8')), r('XHTMLDiv31')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, a('')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv31: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv32')), r('IndecentXHTMLDiv')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv32: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv33')) },
      { json: '#text', js: '#text', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv33: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: a('') },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(a(''), '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('XHTMLDiv13'))) }
    ],
    false
  ),
  PurpleIntroText: o([{ json: 'xhtml:p', js: 'xhtml:p', typ: u(a(''), '') }], false),
  DemonstrativeExampleReferences: o(
    [{ json: 'Reference', js: 'Reference', typ: r('ReferencesReferenceClass') }],
    false
  ),
  ReferencesReferenceClass: o([{ json: 'attr', js: 'attr', typ: r('FluffyAttr') }], false),
  FluffyAttr: o(
    [{ json: '@_External_Reference_ID', js: '@_External_Reference_ID', typ: '' }],
    false
  ),
  DemonstrativeExampleAttr: o(
    [{ json: '@_Demonstrative_Example_ID', js: '@_Demonstrative_Example_ID', typ: '' }],
    false
  ),
  PurpleDemonstrativeExample: o(
    [
      { json: 'attr', js: 'attr', typ: u(undefined, r('DemonstrativeExampleAttr')) },
      { json: 'Intro_Text', js: 'Intro_Text', typ: u(r('FluffyIntroText'), '') },
      {
        json: 'Example_Code',
        js: 'Example_Code',
        typ: u(undefined, u(a(r('TentacledExampleCode')), r('StickyExampleCode')))
      },
      {
        json: 'Body_Text',
        js: 'Body_Text',
        typ: u(undefined, u(a(u(r('FluffyBodyText'), '')), r('BackgroundDetail'), ''))
      },
      {
        json: 'References',
        js: 'References',
        typ: u(undefined, r('DemonstrativeExampleReferences'))
      }
    ],
    false
  ),
  FluffyBodyText: o(
    [
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('BodyTextXHTMLUL')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv34')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:table', js: 'xhtml:table', typ: u(undefined, r('BodyTextXHTMLTable')) },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv34: o([{ json: 'xhtml:div', js: 'xhtml:div', typ: a('') }], false),
  BodyTextXHTMLTable: o(
    [{ json: 'xhtml:tr', js: 'xhtml:tr', typ: u(a(r('FluffyXHTMLTr')), r('TentacledXHTMLTr')) }],
    false
  ),
  FluffyXHTMLTr: o(
    [
      { json: 'xhtml:th', js: 'xhtml:th', typ: u(undefined, a('')) },
      { json: 'xhtml:td', js: 'xhtml:td', typ: u(undefined, a(u(0, ''))) }
    ],
    false
  ),
  TentacledXHTMLTr: o([{ json: 'xhtml:td', js: 'xhtml:td', typ: a('') }], false),
  BodyTextXHTMLUL: o(
    [{ json: 'xhtml:li', js: 'xhtml:li', typ: u(a(r('XHTMLOlXHTMLLi')), r('XHTMLOlXHTMLLi')) }],
    false
  ),
  TentacledExampleCode: o(
    [
      { json: 'attr', js: 'attr', typ: r('ExampleCodeAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(u(r('FluffyXHTMLDiv'), '')), r('XHTMLDiv35'), ''))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) },
      { json: 'xhtml:table', js: 'xhtml:table', typ: u(undefined, r('PurpleXHTMLTable')) }
    ],
    false
  ),
  XHTMLDiv35: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv36')), r('XHTMLDiv48')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv36: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv37')), r('XHTMLDiv38')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv37: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('HilariousXHTMLDiv')) }
    ],
    false
  ),
  XHTMLDiv38: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv39')), r('XHTMLDiv44')))
      }
    ],
    false
  ),
  XHTMLDiv39: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('XHTMLDiv40')))
      }
    ],
    false
  ),
  XHTMLDiv40: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv41')), r('XHTMLDiv42')))
      }
    ],
    false
  ),
  XHTMLDiv41: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('TentacledXHTML')) }
    ],
    false
  ),
  XHTMLDiv42: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: r('XHTMLDiv43') }
    ],
    false
  ),
  XHTMLDiv43: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('IndecentXHTMLDiv'))) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(a(''), '') },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, a('')) }
    ],
    false
  ),
  XHTMLDiv44: o(
    [
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('XHTMLDiv45')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) }
    ],
    false
  ),
  XHTMLDiv45: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv46')), r('XHTMLDiv14')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv46: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv47')) }
    ],
    false
  ),
  XHTMLDiv47: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(a(''), '') },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv48: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv36')), r('XHTMLDiv49')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:b', js: 'xhtml:b', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv49: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv36')), r('XHTMLDiv36')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  PurpleXHTMLTable: o(
    [
      {
        json: 'xhtml:tr',
        js: 'xhtml:tr',
        typ: u(undefined, u(a(r('StickyXHTMLTr')), r('IndigoXHTMLTr')))
      },
      { json: 'xhtml:tbody', js: 'xhtml:tbody', typ: u(undefined, r('XHTMLT')) }
    ],
    false
  ),
  XHTMLT: o([{ json: 'xhtml:tr', js: 'xhtml:tr', typ: a(r('TentacledXHTMLTr')) }], false),
  StickyXHTMLTr: o(
    [
      { json: 'xhtml:th', js: 'xhtml:th', typ: u(undefined, a(r('XHTMLTh'))) },
      { json: 'xhtml:td', js: 'xhtml:td', typ: u(undefined, a(u(r('XHTMLTdClass'), ''))) }
    ],
    false
  ),
  XHTMLTdClass: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, '') }
    ],
    false
  ),
  IndigoXHTMLTr: o([{ json: 'xhtml:td', js: 'xhtml:td', typ: a(u(r('FluffyXHTML'), '')) }], false),
  StickyExampleCode: o(
    [
      { json: 'attr', js: 'attr', typ: r('ExampleCodeAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(u(r('StickyXHTMLDiv'), '')), r('XHTMLDiv50'), ''))
      },
      { json: 'xhtml:table', js: 'xhtml:table', typ: u(undefined, a(r('FluffyXHTMLTable'))) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) }
    ],
    false
  ),
  XHTMLDiv50: o(
    [
      { json: '#text', js: '#text', typ: '' },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(u(r('XHTMLDiv36'), '')), r('XHTMLDiv51')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv51: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv12')), r('XHTMLDiv52')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv52: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('StickyXHTMLDiv')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  FluffyXHTMLTable: o([{ json: 'xhtml:tbody', js: 'xhtml:tbody', typ: r('XHTMLTbody') }], false),
  XHTMLTbody: o([{ json: 'xhtml:tr', js: 'xhtml:tr', typ: a(r('FluffyXHTMLTr')) }], false),
  FluffyIntroText: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      {
        json: 'xhtml:table',
        js: 'xhtml:table',
        typ: u(undefined, u(a(r('XHTMLTableXHTMLTable')), r('XHTMLT')))
      },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, a(r('XHTMLOlElement'))) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('IntroTextXHTMLDiv')) }
    ],
    false
  ),
  IntroTextXHTMLDiv: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:br', js: 'xhtml:br', typ: a('') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: a(r('XHTMLDiv8')) }
    ],
    false
  ),
  DetectionMethods: o(
    [
      {
        json: 'Detection_Method',
        js: 'Detection_Method',
        typ: u(a(r('DetectionMethodElement')), r('PurpleDetectionMethod'))
      }
    ],
    false
  ),
  DetectionMethodElement: o(
    [
      { json: 'Method', js: 'Method', typ: r('Method') },
      { json: 'Description', js: 'Description', typ: u(r('PurpleDescription'), '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('DetectionMethodAttr')) },
      {
        json: 'Effectiveness',
        js: 'Effectiveness',
        typ: u(undefined, r('DetectionMethodEffectiveness'))
      },
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') }
    ],
    false
  ),
  PurpleDescription: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv53')) },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) }
    ],
    false
  ),
  XHTMLDiv53: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(a(r('XHTMLDivEnum')), r('XHTMLDivEnum')) },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(a(r('PurpleXHTMLUL')), r('PurpleXHTMLUL')) }
    ],
    false
  ),
  PurpleXHTMLUL: o([{ json: 'xhtml:li', js: 'xhtml:li', typ: u(a(''), '') }], false),
  DetectionMethodAttr: o(
    [{ json: '@_Detection_Method_ID', js: '@_Detection_Method_ID', typ: '' }],
    false
  ),
  PurpleDetectionMethod: o(
    [
      { json: 'Method', js: 'Method', typ: r('Method') },
      { json: 'Description', js: 'Description', typ: u(r('FluffyDescription'), '') },
      {
        json: 'Effectiveness',
        js: 'Effectiveness',
        typ: u(undefined, r('DetectionMethodEffectiveness'))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('DetectionMethodAttr')) },
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') }
    ],
    false
  ),
  FluffyDescription: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(a(''), '') },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv54')) }
    ],
    false
  ),
  XHTMLDiv54: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: r('XHTMLDivEnum') },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: r('XHTMLDivXHTMLULClass') }
    ],
    false
  ),
  XHTMLDivXHTMLULClass: o([{ json: 'xhtml:li', js: 'xhtml:li', typ: '' }], false),
  ExtendedDescriptionClass: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(a(''), '') },
      {
        json: 'xhtml:ul',
        js: 'xhtml:ul',
        typ: u(undefined, u(a(r('FluffyXHTMLUL')), r('TentacledXHTMLUL')))
      },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('ExtendedDescriptionXHTMLDiv')) },
      { json: 'xhtml:ol', js: 'xhtml:ol', typ: u(undefined, r('XHTMLOlElement')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) }
    ],
    false
  ),
  ExtendedDescriptionXHTMLDiv: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: a('') }
    ],
    false
  ),
  FluffyXHTMLUL: o([{ json: 'xhtml:li', js: 'xhtml:li', typ: a(u(r('XHTMLLiClass'), '')) }], false),
  XHTMLLiClass: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:b', js: 'xhtml:b', typ: '' }
    ],
    false
  ),
  TentacledXHTMLUL: o(
    [{ json: 'xhtml:li', js: 'xhtml:li', typ: a(u(r('PurpleXHTMLLi'), '')) }],
    false
  ),
  PurpleXHTMLLi: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:b', js: 'xhtml:b', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLLiClass')) }
    ],
    false
  ),
  FunctionalAreas: o(
    [{ json: 'Functional_Area', js: 'Functional_Area', typ: u(a(''), '') }],
    false
  ),
  ModesOfIntroduction: o(
    [
      {
        json: 'Introduction',
        js: 'Introduction',
        typ: u(a(r('IntroductionElement')), r('PurpleIntroduction'))
      }
    ],
    false
  ),
  IntroductionElement: o(
    [
      { json: 'Phase', js: 'Phase', typ: r('PhaseElement') },
      { json: 'Note', js: 'Note', typ: u(undefined, u(r('NoteNote'), '')) }
    ],
    false
  ),
  NoteNote: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(a(''), '') },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) }
    ],
    false
  ),
  PurpleIntroduction: o(
    [
      { json: 'Phase', js: 'Phase', typ: r('PhaseElement') },
      { json: 'Note', js: 'Note', typ: u(undefined, u(r('NoteClass'), '')) }
    ],
    false
  ),
  Notes: o(
    [{ json: 'Note', js: 'Note', typ: u(a(r('BackgroundDetail')), r('BackgroundDetail')) }],
    false
  ),
  ObservedExamples: o(
    [
      {
        json: 'Observed_Example',
        js: 'Observed_Example',
        typ: u(a(r('ObservedExampleElement')), r('ObservedExampleElement'))
      }
    ],
    false
  ),
  ObservedExampleElement: o(
    [
      { json: 'Reference', js: 'Reference', typ: '' },
      { json: 'Description', js: 'Description', typ: '' },
      { json: 'Link', js: 'Link', typ: '' }
    ],
    false
  ),
  PotentialMitigations: o(
    [
      {
        json: 'Mitigation',
        js: 'Mitigation',
        typ: u(a(r('MitigationElement')), r('PurpleMitigation'))
      }
    ],
    false
  ),
  MitigationElement: o(
    [
      { json: 'Phase', js: 'Phase', typ: u(undefined, u(a(r('PhaseElement')), r('PhaseElement'))) },
      { json: 'Description', js: 'Description', typ: u(r('TentacledDescription'), '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('MitigationAttr')) },
      { json: 'Strategy', js: 'Strategy', typ: u(undefined, r('Strategy')) },
      { json: 'Effectiveness', js: 'Effectiveness', typ: u(undefined, r('PurpleEffectiveness')) },
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') }
    ],
    false
  ),
  TentacledDescription: o(
    [
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(a(''), '') },
      {
        json: 'xhtml:ul',
        js: 'xhtml:ul',
        typ: u(undefined, u(a(r('StickyXHTMLUL')), r('XHTMLOlElement')))
      },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('ExtendedDescriptionXHTMLDiv')) }
    ],
    false
  ),
  StickyXHTMLUL: o(
    [{ json: 'xhtml:li', js: 'xhtml:li', typ: a(u(r('FluffyXHTMLLi'), '')) }],
    false
  ),
  FluffyXHTMLLi: o(
    [
      { json: '#text', js: '#text', typ: '' },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: r('XHTMLOlElement') }
    ],
    false
  ),
  MitigationAttr: o([{ json: '@_Mitigation_ID', js: '@_Mitigation_ID', typ: '' }], false),
  PurpleMitigation: o(
    [
      { json: 'Phase', js: 'Phase', typ: u(undefined, u(a(r('PhaseElement')), r('PhaseElement'))) },
      { json: 'Description', js: 'Description', typ: u(r('BackgroundDetail'), '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('MitigationAttr')) },
      { json: 'Strategy', js: 'Strategy', typ: u(undefined, r('Strategy')) },
      {
        json: 'Effectiveness',
        js: 'Effectiveness',
        typ: u(undefined, r('DetectionMethodEffectiveness'))
      },
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') }
    ],
    false
  ),
  CweDictionaryReferences: o(
    [
      {
        json: 'Reference',
        js: 'Reference',
        typ: u(a(r('ReferenceElement')), r('ReferenceElement'))
      }
    ],
    false
  ),
  ReferenceElement: o([{ json: 'attr', js: 'attr', typ: r('TentacledAttr') }], false),
  TentacledAttr: o(
    [
      { json: '@_External_Reference_ID', js: '@_External_Reference_ID', typ: '' },
      { json: '@_Section', js: '@_Section', typ: u(undefined, '') }
    ],
    false
  ),
  RelatedAttackPatterns: o(
    [
      {
        json: 'Related_Attack_Pattern',
        js: 'Related_Attack_Pattern',
        typ: u(a(r('RelatedAttackPatternElement')), r('RelatedAttackPatternElement'))
      }
    ],
    false
  ),
  RelatedAttackPatternElement: o(
    [{ json: 'attr', js: 'attr', typ: r('RelatedAttackPatternAttr') }],
    false
  ),
  RelatedAttackPatternAttr: o([{ json: '@_CAPEC_ID', js: '@_CAPEC_ID', typ: '' }], false),
  RelatedWeaknesses: o(
    [
      {
        json: 'Related_Weakness',
        js: 'Related_Weakness',
        typ: u(a(r('RelatedWeaknessElement')), r('RelatedWeaknessElement'))
      }
    ],
    false
  ),
  RelatedWeaknessElement: o([{ json: 'attr', js: 'attr', typ: r('RelatedWeaknessAttr') }], false),
  RelatedWeaknessAttr: o(
    [
      { json: '@_Nature', js: '@_Nature', typ: r('FluffyNature') },
      { json: '@_CWE_ID', js: '@_CWE_ID', typ: '' },
      { json: '@_View_ID', js: '@_View_ID', typ: '' },
      { json: '@_Ordinal', js: '@_Ordinal', typ: u(undefined, r('Ordinal')) },
      { json: '@_Chain_ID', js: '@_Chain_ID', typ: u(undefined, '') }
    ],
    false
  ),
  TaxonomyMappings: o(
    [
      {
        json: 'Taxonomy_Mapping',
        js: 'Taxonomy_Mapping',
        typ: u(a(r('TaxonomyMappingElement')), r('TaxonomyMappingElement'))
      }
    ],
    false
  ),
  TaxonomyMappingElement: o(
    [
      { json: 'attr', js: 'attr', typ: r('TaxonomyMappingAttr') },
      { json: 'Entry_Name', js: 'Entry_Name', typ: u(undefined, '') },
      { json: 'Entry_ID', js: 'Entry_ID', typ: u(undefined, u(0, '')) },
      { json: 'Mapping_Fit', js: 'Mapping_Fit', typ: u(undefined, r('MappingFit')) }
    ],
    false
  ),
  TaxonomyMappingAttr: o(
    [{ json: '@_Taxonomy_Name', js: '@_Taxonomy_Name', typ: r('TaxonomyName') }],
    false
  ),
  WeaknessOrdinalities: o(
    [
      {
        json: 'Weakness_Ordinality',
        js: 'Weakness_Ordinality',
        typ: u(a(r('WeaknessOrdinalityElement')), r('WeaknessOrdinalityElement'))
      }
    ],
    false
  ),
  WeaknessOrdinalityElement: o(
    [
      { json: 'Ordinality', js: 'Ordinality', typ: r('Ordinal') },
      { json: 'Description', js: 'Description', typ: u(undefined, '') }
    ],
    false
  ),
  CweDictionaryAttr: o(
    [
      { json: '@_Abstraction', js: '@_Abstraction', typ: r('Abstraction') },
      { json: '@_Structure', js: '@_Structure', typ: r('Structure') },
      { json: '@_Status', js: '@_Status', typ: r('Status') },
      { json: 'ID', js: 'ID', typ: '' },
      { json: 'Name', js: 'Name', typ: '' }
    ],
    false
  ),
  AffectedResourceElement: ['CPU', 'File or Directory', 'Memory', 'System Process'],
  PurpleClass: [
    'Assembly',
    'Client Server',
    'Cloud Computing',
    'Compiled',
    'Embedded',
    'Hardware Description Language',
    'ICS/OT',
    'Interpreted',
    'macOS',
    'Microcomputer',
    'Mobile',
    'Not Language-Specific',
    'Not OS-Specific',
    'Not Technology-Specific',
    'System on Chip',
    'Unix',
    'Web Based',
    'Windows',
    'Workstation'
  ],
  Prevalence: ['Often', 'Rarely', 'Sometimes', 'Undetermined'],
  FluffyClass: ['Not Architecture-Specific'],
  Type: [
    'Applicable Platform',
    'Content',
    'Feedback',
    'Maintenance',
    'Mapping',
    'Other',
    'Relationship',
    'Research Gap',
    'Terminology',
    'Theoretical'
  ],
  Style: ['margin-left:1em;'],
  ImpactElement: [
    'Alter Execution Logic',
    'Bypass Protection Mechanism',
    'DoS: Amplification',
    'DoS: Crash, Exit, or Restart',
    'DoS: Instability',
    'DoS: Resource Consumption (CPU)',
    'DoS: Resource Consumption (Memory)',
    'DoS: Resource Consumption (Other)',
    'Execute Unauthorized Code or Commands',
    'Gain Privileges or Assume Identity',
    'Hide Activities',
    'Modify Application Data',
    'Modify Files or Directories',
    'Modify Memory',
    'Other',
    'Quality Degradation',
    'Read Application Data',
    'Read Files or Directories',
    'Read Memory',
    'Reduce Maintainability',
    'Reduce Performance',
    'Reduce Reliability',
    'Unexpected State',
    'Varies by Context'
  ],
  Likelihood: ['High', 'Low', 'Medium', 'Unknown'],
  ScopeElement: [
    'Access Control',
    'Accountability',
    'Authentication',
    'Authorization',
    'Availability',
    'Confidentiality',
    'Integrity',
    'Non-Repudiation',
    'Other'
  ],
  ModificationImportance: ['Critical'],
  ModificationName: [
    'CWE Content Team',
    'David Remahl',
    'Eric Dalci',
    'Jasper van Woudenberg',
    'KDM Analytics',
    'Sean Eidemiller',
    'Tom Stracener'
  ],
  ModificationOrganization: [
    'Apple',
    'CWE Team',
    'Cigital',
    'KDM Analytics',
    'MITRE',
    'Riscure',
    'Veracode'
  ],
  SubmissionOrganization: [
    'Accellera IP Security Assurance (IPSA) Working Group',
    'Accellera Systems Initiative',
    'Bosch',
    'CWE Content Team',
    'Cigital',
    'Cloud Security Alliance',
    'Fortify Software',
    'Intel Corporation',
    'MITRE',
    'Purdue University',
    'Riscure',
    'Silicon Valley Bank',
    'Tennessee Technological University',
    'The Intel Corporation',
    'Tortuga Logic',
    'Trend Micro',
    'Veracode',
    'Wells Fargo'
  ],
  Language: [
    'ASP.NET',
    'C',
    'HTML',
    'JSP',
    'Java',
    'JavaScript',
    'C#',
    'Objective-C',
    'Other',
    'Perl',
    'PHP',
    'Pseudocode',
    'C++',
    'Python',
    'Rust',
    'SQL',
    'Shell',
    'Verilog',
    'x86 Assembly',
    'XML'
  ],
  PurpleNature: ['Attack', 'Bad', 'Good', 'Informative', 'Mitigation', 'bad', 'Result'],
  XHTMLTh: ['Field description', 'Register'],
  XHTMLDivEnum: ['Cost effective for partial coverage:', 'Highly cost effective:'],
  DetectionMethodEffectiveness: ['High', 'Limited', 'Moderate', 'Opportunistic', 'SOAR Partial'],
  Method: [
    'Architecture or Design Review',
    'Automated Analysis',
    'Automated Dynamic Analysis',
    'Automated Static Analysis',
    'Automated Static Analysis - Binary or Bytecode',
    'Automated Static Analysis - Source Code',
    'Black Box',
    'Dynamic Analysis with Automated Results Interpretation',
    'Dynamic Analysis with Manual Results Interpretation',
    'Formal Verification',
    'Fuzzing',
    'Manual Analysis',
    'Manual Dynamic Analysis',
    'Manual Static Analysis',
    'Manual Static Analysis - Binary or Bytecode',
    'Manual Static Analysis - Source Code',
    'Other',
    'Simulation / Emulation',
    'White Box'
  ],
  PhaseElement: [
    'Architecture and Design',
    'Build and Compilation',
    'Bundling',
    'Distribution',
    'Documentation',
    'Implementation',
    'Installation',
    'Integration',
    'Manufacturing',
    'Operation',
    'Patching and Maintenance',
    'Policy',
    'Requirements',
    'System Configuration',
    'Testing'
  ],
  PurpleEffectiveness: [
    'Defense in Depth',
    'Discouraged Common Practice',
    'High',
    'Limited',
    'Moderate',
    'None'
  ],
  Strategy: [
    'Attack Surface Reduction',
    'Compilation or Build Hardening',
    'Enforcement by Conversion',
    'Environment Hardening',
    'Firewall',
    'Input Validation',
    'Language Selection',
    'Libraries or Frameworks',
    'Output Encoding',
    'Parameterization',
    'Refactoring',
    'Resource Limitation',
    'Sandbox or Jail',
    'Separation of Privilege'
  ],
  FluffyNature: ['CanAlsoBe', 'CanPrecede', 'ChildOf', 'PeerOf', 'Requires', 'StartsWith'],
  Ordinal: ['Indirect', 'Primary', 'Resultant'],
  MappingFit: ['CWE More Abstract', 'CWE More Specific', 'Exact', 'Imprecise'],
  TaxonomyName: [
    'CERT C Secure Coding',
    'CLASP',
    'Landwehr',
    'OMG ASCMM',
    'OMG ASCPEM',
    'OMG ASCRM',
    'OMG ASCSM',
    'OWASP Top Ten 2004',
    'OWASP Top Ten 2007',
    'PLOVER',
    'SEI CERT Oracle Coding Standard for Java',
    'SEI CERT Perl Coding Standard',
    'Software Fault Patterns',
    '7 Pernicious Kingdoms',
    'The CERT Oracle Secure Coding Standard for Java (2011)',
    'WASC'
  ],
  Abstraction: ['Base', 'Class', 'Compound', 'Pillar', 'Variant'],
  Status: ['Deprecated', 'Draft', 'Incomplete', 'Stable'],
  Structure: ['Chain', 'Composite', 'Simple']
}
//# sourceMappingURL=CweDictionary.js.map
