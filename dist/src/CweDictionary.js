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
    return cast(JSON.parse(json), a(r('CweDictionary')))
  }
  static cweDictionaryToJson(value) {
    return JSON.stringify(uncast(value, a(r('CweDictionary'))), null, 2)
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
        json: 'Extended_Description',
        js: 'Extended_Description',
        typ: u(undefined, u(r('ExtendedDescriptionClass'), ''))
      },
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
        json: 'Background_Details',
        js: 'Background_Details',
        typ: u(undefined, r('BackgroundDetails'))
      },
      {
        json: 'Modes_Of_Introduction',
        js: 'Modes_Of_Introduction',
        typ: u(undefined, r('ModesOfIntroduction'))
      },
      {
        json: 'Likelihood_Of_Exploit',
        js: 'Likelihood_Of_Exploit',
        typ: u(undefined, r('Likelihood'))
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
        json: 'Demonstrative_Examples',
        js: 'Demonstrative_Examples',
        typ: u(undefined, r('DemonstrativeExamples'))
      },
      {
        json: 'Observed_Examples',
        js: 'Observed_Examples',
        typ: u(undefined, r('ObservedExamples'))
      },
      { json: 'References', js: 'References', typ: u(undefined, r('CweDictionaryReferences')) },
      { json: 'Content_History', js: 'Content_History', typ: r('ContentHistory') },
      {
        json: 'Weakness_Ordinalities',
        js: 'Weakness_Ordinalities',
        typ: u(undefined, r('WeaknessOrdinalities'))
      },
      { json: 'Alternate_Terms', js: 'Alternate_Terms', typ: u(undefined, r('AlternateTerms')) },
      {
        json: 'Detection_Methods',
        js: 'Detection_Methods',
        typ: u(undefined, r('DetectionMethods'))
      },
      {
        json: 'Taxonomy_Mappings',
        js: 'Taxonomy_Mappings',
        typ: u(undefined, r('TaxonomyMappings'))
      },
      {
        json: 'Related_Attack_Patterns',
        js: 'Related_Attack_Patterns',
        typ: u(undefined, r('RelatedAttackPatterns'))
      },
      { json: 'Notes', js: 'Notes', typ: u(undefined, r('Notes')) },
      {
        json: 'Affected_Resources',
        js: 'Affected_Resources',
        typ: u(undefined, r('AffectedResources'))
      },
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
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('BackgroundDetailXHTMLDiv')) },
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
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a('')) }
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
      { json: 'Contribution_Date', js: 'Contribution_Date', typ: u(undefined, '') },
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
      { json: 'Modification_Date', js: 'Modification_Date', typ: u(undefined, '') },
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
  PreviousEntryNameAttr: o([{ json: '@_Date', js: '@_Date', typ: u(undefined, '') }], false),
  Submission: o(
    [
      { json: 'Submission_Name', js: 'Submission_Name', typ: u(undefined, '') },
      {
        json: 'Submission_Organization',
        js: 'Submission_Organization',
        typ: u(undefined, r('SubmissionOrganization'))
      },
      { json: 'Submission_Date', js: 'Submission_Date', typ: u(undefined, '') },
      { json: 'Submission_Comment', js: 'Submission_Comment', typ: u(undefined, '') }
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
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      { json: 'xhtml:ol', js: 'xhtml:ol', typ: u(undefined, r('PurpleXHTML')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('PurpleXHTMLDiv')) }
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
      { json: 'xhtml:table', js: 'xhtml:table', typ: u(undefined, r('XHTMLTableXHTMLTable')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, '') },
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('XHTMLOlElement')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
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
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(u(r('HilariousXHTMLDiv'), '')), r('AmbitiousXHTMLDiv')))
      }
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
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv12')), r('XHTMLDiv18')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
    ],
    false
  ),
  XHTMLDiv12: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv13')), r('XHTMLDiv17')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv13: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, '') },
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
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('FluffyXHTMLDiv')), r('StickyXHTMLDiv')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv18: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv19')), r('XHTMLDiv20')))
      },
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
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv21')), r('FluffyXHTMLDiv')))
      },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
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
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('FluffyXHTMLDiv')))
      },
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
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv24')), r('XHTMLDiv27')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
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
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('FluffyXHTMLDiv'))) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, a('')) }
    ],
    false
  ),
  XHTMLDiv26: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('IndecentXHTMLDiv')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv27: o(
    [
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv28')), r('XHTMLDiv29')))
      },
      { json: '#text', js: '#text', typ: u(undefined, '') },
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
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, a(r('FluffyXHTMLDiv'))) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, '') }
    ],
    false
  ),
  XHTMLDiv29: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('FluffyXHTMLDiv')), r('XHTMLDiv30')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) }
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
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv32')), r('IndecentXHTMLDiv')))
      },
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
      { json: 'Intro_Text', js: 'Intro_Text', typ: u(r('FluffyIntroText'), '') },
      {
        json: 'Body_Text',
        js: 'Body_Text',
        typ: u(undefined, u(a(u(r('FluffyBodyText'), '')), r('BackgroundDetail'), ''))
      },
      {
        json: 'Example_Code',
        js: 'Example_Code',
        typ: u(undefined, u(a(r('TentacledExampleCode')), r('StickyExampleCode')))
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
  FluffyBodyText: o(
    [
      { json: 'xhtml:ul', js: 'xhtml:ul', typ: u(undefined, r('BodyTextXHTMLUL')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:table', js: 'xhtml:table', typ: u(undefined, r('BodyTextXHTMLTable')) },
      { json: 'xhtml:p', js: 'xhtml:p', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLDiv34')) }
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
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
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
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv39')), r('XHTMLDiv44')))
      },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
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
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv36')), r('XHTMLDiv49')))
      },
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
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: r('XHTMLDivAttr') },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('XHTMLDiv12')), r('XHTMLDiv52')))
      },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) }
    ],
    false
  ),
  XHTMLDiv52: o(
    [
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('XHTMLDivAttr')) },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, u(a(''), '')) },
      { json: 'xhtml:i', js: 'xhtml:i', typ: u(undefined, u(a(''), '')) },
      {
        json: 'xhtml:div',
        js: 'xhtml:div',
        typ: u(undefined, u(a(r('IndecentXHTMLDiv')), r('StickyXHTMLDiv')))
      }
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
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') },
      { json: 'attr', js: 'attr', typ: u(undefined, r('DetectionMethodAttr')) }
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
      { json: 'xhtml:ol', js: 'xhtml:ol', typ: u(undefined, r('XHTMLOlElement')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:br', js: 'xhtml:br', typ: u(undefined, a('')) },
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('ExtendedDescriptionXHTMLDiv')) }
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
      { json: 'xhtml:div', js: 'xhtml:div', typ: u(undefined, r('XHTMLLiClass')) },
      { json: '#text', js: '#text', typ: u(undefined, '') },
      { json: 'xhtml:b', js: 'xhtml:b', typ: u(undefined, '') }
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
      { json: 'Strategy', js: 'Strategy', typ: u(undefined, r('Strategy')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('MitigationAttr')) },
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') },
      { json: 'Effectiveness', js: 'Effectiveness', typ: u(undefined, r('PurpleEffectiveness')) }
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
      {
        json: 'Effectiveness',
        js: 'Effectiveness',
        typ: u(undefined, r('DetectionMethodEffectiveness'))
      },
      { json: 'Effectiveness_Notes', js: 'Effectiveness_Notes', typ: u(undefined, '') },
      { json: 'Strategy', js: 'Strategy', typ: u(undefined, r('Strategy')) },
      { json: 'attr', js: 'attr', typ: u(undefined, r('MitigationAttr')) }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3dlRGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Dd2VEaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQkFBc0I7QUFDdEIsRUFBRTtBQUNGLHNDQUFzQztBQUN0QyxFQUFFO0FBQ0YseURBQXlEO0FBQ3pELEVBQUU7QUFDRiwwREFBMEQ7QUFDMUQsMkRBQTJEOzs7QUErQjNELElBQVksdUJBS1g7QUFMRCxXQUFZLHVCQUF1QjtJQUMvQixzQ0FBVyxDQUFBO0lBQ1gsZ0VBQXFDLENBQUE7SUFDckMsNENBQWlCLENBQUE7SUFDakIsMkRBQWdDLENBQUE7QUFDcEMsQ0FBQyxFQUxXLHVCQUF1QixHQUF2QiwrQkFBdUIsS0FBdkIsK0JBQXVCLFFBS2xDO0FBcUNELElBQVksV0FvQlg7QUFwQkQsV0FBWSxXQUFXO0lBQ25CLG9DQUFxQixDQUFBO0lBQ3JCLDZDQUE4QixDQUFBO0lBQzlCLGlEQUFrQyxDQUFBO0lBQ2xDLG9DQUFxQixDQUFBO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLDRFQUE2RCxDQUFBO0lBQzdELCtCQUFnQixDQUFBO0lBQ2hCLDBDQUEyQixDQUFBO0lBQzNCLDhCQUFlLENBQUE7SUFDZiw4Q0FBK0IsQ0FBQTtJQUMvQixnQ0FBaUIsQ0FBQTtJQUNqQiw0REFBNkMsQ0FBQTtJQUM3QyxnREFBaUMsQ0FBQTtJQUNqQyxnRUFBaUQsQ0FBQTtJQUNqRCw4Q0FBK0IsQ0FBQTtJQUMvQiw0QkFBYSxDQUFBO0lBQ2IscUNBQXNCLENBQUE7SUFDdEIsa0NBQW1CLENBQUE7SUFDbkIsMENBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQXBCVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQW9CdEI7QUFFRCxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDbEIsNkJBQWUsQ0FBQTtJQUNmLCtCQUFpQixDQUFBO0lBQ2pCLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0FB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RTtLQUM5RCxFQUFFLEtBQUssQ0FBQztJQUNULFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDWCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTtRQUNsRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQy9GLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtLQUN0RSxFQUFFLEtBQUssQ0FBQztJQUNULFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDWCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxD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RUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNuRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFO0tBQ3JFLEVBQUUsS0FBSyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFO1FBQ2xFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNqRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7S0FDNUQsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUU7UUFDbEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDM0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7S0FDN0UsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDOUQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDekQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7UUFDMUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUU7S0FDckUsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNwRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7S0FDN0UsRUFBRSxLQUFLLENBQUM7SUFD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SUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDdkMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNwRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDN0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7S0FDNUQsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3JFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFB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QUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7S0FDL0QsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUU7UUFDbEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3JFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDN0csRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO0tBQ3RFLEVBQUUsS0FBSyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNaLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDcEQs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QUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUM1RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7S0FDeEUsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDOUQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMs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LEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNwRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRTtLQUNwRixFQUFFLEtBQUssQ0FBQztJQUNULFlBQVksRUFBRSxDQUFDLENBQUM7UUFDWixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTtRQUNsRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMs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RUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNqRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ25FLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0tBQzVELEVBQUUsS0FBSyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDdkMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3JFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNqRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTtRQUNsRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7S0FDdEUsRUFBRSxLQUFLLENBQUM7SUFDVCxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO0tBQzdFLEVBQUUsS0FBSyxDQUFDO0lBQ1QsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNSLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRTtLQUN0RSxFQUFFLEtBQUssQ0FBQztJQUNULGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDZixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN4RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDdkYsRUFBRSxLQUFLLENBQUM7SUFDVCxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUN2QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMzRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtLQUM1RCxFQUFFLEtBQUssQ0FBQztJQUNULGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDZixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtLQUN4RSxFQUFFLEtBQUssQ0FBQztJQUNULG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNuQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDdkQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNoSCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0tBQ2pFLEVBQUUsS0FBSyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDdkMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN4RyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDckUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO0tBQ3RFLEVBQUUsS0FBSyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3JELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDcEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNyRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7S0FDdEUsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FB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
