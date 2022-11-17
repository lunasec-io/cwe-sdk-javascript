export interface CweDictionary {
  attr: CweDictionaryAttr
  Description: string
  Related_Weaknesses?: RelatedWeaknesses
  Applicable_Platforms?: ApplicablePlatforms
  Modes_Of_Introduction?: ModesOfIntroduction
  Common_Consequences?: CommonConsequences
  Potential_Mitigations?: PotentialMitigations
  Taxonomy_Mappings?: TaxonomyMappings
  References?: CweDictionaryReferences
  Notes?: Notes
  Content_History: ContentHistory
  Extended_Description?: ExtendedDescriptionClass | string
  Background_Details?: BackgroundDetails
  Demonstrative_Examples?: DemonstrativeExamples
  Related_Attack_Patterns?: RelatedAttackPatterns
  Detection_Methods?: DetectionMethods
  Affected_Resources?: AffectedResources
  Likelihood_Of_Exploit?: Likelihood
  Observed_Examples?: ObservedExamples
  Weakness_Ordinalities?: WeaknessOrdinalities
  Alternate_Terms?: AlternateTerms
  Functional_Areas?: FunctionalAreas
}
export interface AffectedResources {
  Affected_Resource: AffectedResourceElement[] | AffectedResourceElement
}
export declare enum AffectedResourceElement {
  CPU = 'CPU',
  FileOrDirectory = 'File or Directory',
  Memory = 'Memory',
  SystemProcess = 'System Process'
}
export interface AlternateTerms {
  Alternate_Term: AlternateTermElement[] | PurpleAlternateTerm
}
export interface AlternateTermElement {
  Term: string
  Description?: string
}
export interface PurpleAlternateTerm {
  Term: string
  Description?: NoteClass | string
}
export interface NoteClass {
  'xhtml:p': string[]
}
export interface ApplicablePlatforms {
  Language?: LanguageElement[] | LanguageElement
  Technology?: LanguageElement[] | LanguageElement
  Operating_System?: LanguageElement[] | LanguageElement
  Architecture?: LanguageElement[] | ArchitectureClass
}
export interface LanguageElement {
  attr: LanguageAttr
}
export interface LanguageAttr {
  '@_Class'?: PurpleClass
  '@_Prevalence': Prevalence
  '@_Name'?: string
}
export declare enum PurpleClass {
  Assembly = 'Assembly',
  ClientServer = 'Client Server',
  CloudComputing = 'Cloud Computing',
  Compiled = 'Compiled',
  Embedded = 'Embedded',
  HardwareDescriptionLanguage = 'Hardware Description Language',
  ICSOt = 'ICS/OT',
  Interpreted = 'Interpreted',
  MACOS = 'macOS',
  Microcomputer = 'Microcomputer',
  Mobile = 'Mobile',
  NotLanguageSpecific = 'Not Language-Specific',
  NotOSSpecific = 'Not OS-Specific',
  NotTechnologySpecific = 'Not Technology-Specific',
  SystemOnChip = 'System on Chip',
  Unix = 'Unix',
  WebBased = 'Web Based',
  Windows = 'Windows',
  Workstation = 'Workstation'
}
export declare enum Prevalence {
  Often = 'Often',
  Rarely = 'Rarely',
  Sometimes = 'Sometimes',
  Undetermined = 'Undetermined'
}
export interface ArchitectureClass {
  attr: PurpleAttr
}
export interface PurpleAttr {
  '@_Class': FluffyClass
  '@_Prevalence': Prevalence
}
export declare enum FluffyClass {
  NotArchitectureSpecific = 'Not Architecture-Specific'
}
export interface BackgroundDetails {
  Background_Detail: string[] | BackgroundDetail | string
}
export interface BackgroundDetail {
  'xhtml:p'?: string[] | string
  'xhtml:div'?: BackgroundDetailXHTMLDiv
  'xhtml:ul'?: XHTMLOlElement
  '#text'?: string
  'xhtml:img'?: XHTMLImg
  'xhtml:ol'?: XHTMLOlElement
  attr?: BackgroundDetailAttr
  'xhtml:br'?: string[]
}
export interface BackgroundDetailAttr {
  '@_Type': Type
}
export declare enum Type {
  ApplicablePlatform = 'Applicable Platform',
  Content = 'Content',
  Feedback = 'Feedback',
  Maintenance = 'Maintenance',
  Mapping = 'Mapping',
  Other = 'Other',
  Relationship = 'Relationship',
  ResearchGap = 'Research Gap',
  Terminology = 'Terminology',
  Theoretical = 'Theoretical'
}
export interface BackgroundDetailXHTMLDiv {
  attr: XHTMLDivAttr
  'xhtml:div'?: string[]
  '#text'?: string
  'xhtml:br'?: string
}
export interface XHTMLDivAttr {
  '@_style': Style
}
export declare enum Style {
  MarginLeft1Em = 'margin-left:1em;'
}
export interface XHTMLImg {
  attr: XHTMLImgAttr
}
export interface XHTMLImgAttr {
  '@_src': string
  '@_alt': string
}
export interface XHTMLOlElement {
  'xhtml:li': string[]
}
export interface CommonConsequences {
  Consequence: ConsequenceElement[] | ConsequenceElement
}
export interface ConsequenceElement {
  Scope: ScopeElement[] | ScopeElement
  Impact?: ImpactElement[] | ImpactElement
  Note?: string
  Likelihood?: Likelihood
}
export declare enum ImpactElement {
  AlterExecutionLogic = 'Alter Execution Logic',
  BypassProtectionMechanism = 'Bypass Protection Mechanism',
  DoSAmplification = 'DoS: Amplification',
  DoSCrashExitOrRestart = 'DoS: Crash, Exit, or Restart',
  DoSInstability = 'DoS: Instability',
  DoSResourceConsumptionCPU = 'DoS: Resource Consumption (CPU)',
  DoSResourceConsumptionMemory = 'DoS: Resource Consumption (Memory)',
  DoSResourceConsumptionOther = 'DoS: Resource Consumption (Other)',
  ExecuteUnauthorizedCodeOrCommands = 'Execute Unauthorized Code or Commands',
  GainPrivilegesOrAssumeIdentity = 'Gain Privileges or Assume Identity',
  HideActivities = 'Hide Activities',
  ModifyApplicationData = 'Modify Application Data',
  ModifyFilesOrDirectories = 'Modify Files or Directories',
  ModifyMemory = 'Modify Memory',
  Other = 'Other',
  QualityDegradation = 'Quality Degradation',
  ReadApplicationData = 'Read Application Data',
  ReadFilesOrDirectories = 'Read Files or Directories',
  ReadMemory = 'Read Memory',
  ReduceMaintainability = 'Reduce Maintainability',
  ReducePerformance = 'Reduce Performance',
  ReduceReliability = 'Reduce Reliability',
  UnexpectedState = 'Unexpected State',
  VariesByContext = 'Varies by Context'
}
export declare enum Likelihood {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium',
  Unknown = 'Unknown'
}
export declare enum ScopeElement {
  AccessControl = 'Access Control',
  Accountability = 'Accountability',
  Authentication = 'Authentication',
  Authorization = 'Authorization',
  Availability = 'Availability',
  Confidentiality = 'Confidentiality',
  Integrity = 'Integrity',
  NonRepudiation = 'Non-Repudiation',
  Other = 'Other'
}
export interface ContentHistory {
  Submission: Submission
  Modification?: ModificationElement[] | ModificationElement
  Previous_Entry_Name?: PreviousEntryNameElement[] | PreviousEntryNameElement
  Contribution?: ContributionElement[] | ContributionElement
}
export interface ContributionElement {
  attr: BackgroundDetailAttr
  Contribution_Organization?: string
  Contribution_Date: string
  Contribution_Comment: string
  Contribution_Name?: string
}
export interface ModificationElement {
  Modification_Name?: ModificationName
  Modification_Organization?: ModificationOrganization
  Modification_Date: string
  Modification_Comment?: string
  Modification_Importance?: ModificationImportance
}
export declare enum ModificationImportance {
  Critical = 'Critical'
}
export declare enum ModificationName {
  CWEContentTeam = 'CWE Content Team',
  DavidRemahl = 'David Remahl',
  EricDalci = 'Eric Dalci',
  JasperVanWoudenberg = 'Jasper van Woudenberg',
  KDMAnalytics = 'KDM Analytics',
  SeanEidemiller = 'Sean Eidemiller',
  TomStracener = 'Tom Stracener'
}
export declare enum ModificationOrganization {
  Apple = 'Apple',
  CWETeam = 'CWE Team',
  Cigital = 'Cigital',
  KDMAnalytics = 'KDM Analytics',
  Mitre = 'MITRE',
  Riscure = 'Riscure',
  Veracode = 'Veracode'
}
export interface PreviousEntryNameElement {
  '#text': string
  attr: PreviousEntryNameAttr
}
export interface PreviousEntryNameAttr {
  '@_Date': string
}
export interface Submission {
  Submission_Name?: string
  Submission_Date: string
  Submission_Comment?: string
  Submission_Organization?: SubmissionOrganization
}
export declare enum SubmissionOrganization {
  AccelleraIPSecurityAssuranceIPSAWorkingGroup = 'Accellera IP Security Assurance (IPSA) Working Group',
  AccelleraSystemsInitiative = 'Accellera Systems Initiative',
  Bosch = 'Bosch',
  CWEContentTeam = 'CWE Content Team',
  Cigital = 'Cigital',
  CloudSecurityAlliance = 'Cloud Security Alliance',
  FortifySoftware = 'Fortify Software',
  IntelCorporation = 'Intel Corporation',
  Mitre = 'MITRE',
  PurdueUniversity = 'Purdue University',
  Riscure = 'Riscure',
  SiliconValleyBank = 'Silicon Valley Bank',
  TennesseeTechnologicalUniversity = 'Tennessee Technological University',
  TheIntelCorporation = 'The Intel Corporation',
  TortugaLogic = 'Tortuga Logic',
  TrendMicro = 'Trend Micro',
  Veracode = 'Veracode',
  WellsFargo = 'Wells Fargo'
}
export interface DemonstrativeExamples {
  Demonstrative_Example: DemonstrativeExampleElement[] | PurpleDemonstrativeExample
}
export interface DemonstrativeExampleElement {
  Intro_Text: PurpleIntroText | string
  Example_Code?: PurpleExampleCode[] | FluffyExampleCode
  Body_Text?: Array<PurpleBodyText | string> | BackgroundDetail | string
  attr?: DemonstrativeExampleAttr
  References?: DemonstrativeExampleReferences
}
export interface PurpleBodyText {
  'xhtml:ul'?: PurpleXHTML
  'xhtml:ol'?: PurpleXHTML
  'xhtml:p'?: string[] | string
  'xhtml:div'?: PurpleXHTMLDiv
  '#text'?: string
  'xhtml:br'?: string
}
export interface PurpleXHTMLDiv {
  'xhtml:div': string[] | number | string
}
export interface PurpleXHTML {
  'xhtml:li': XHTMLOlXHTMLLi[]
}
export interface XHTMLOlXHTMLLi {
  'xhtml:div': string
}
export interface PurpleExampleCode {
  attr: ExampleCodeAttr
  'xhtml:div'?: FluffyXHTMLDiv[] | XHTMLDiv11 | string
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:p'?: string
  'xhtml:ul'?: XHTMLOlElement
  'xhtml:i'?: string
  'xhtml:table'?: XHTMLTableXHTMLTable
}
export interface ExampleCodeAttr {
  '@_Nature': PurpleNature
  '@_Language'?: Language
}
export declare enum Language {
  ASPNet = 'ASP.NET',
  C = 'C',
  HTML = 'HTML',
  JSP = 'JSP',
  Java = 'Java',
  JavaScript = 'JavaScript',
  LanguageC = 'C#',
  ObjectiveC = 'Objective-C',
  Other = 'Other',
  PERL = 'Perl',
  PHP = 'PHP',
  Pseudocode = 'Pseudocode',
  PurpleC = 'C++',
  Python = 'Python',
  Rust = 'Rust',
  SQL = 'SQL',
  Shell = 'Shell',
  Verilog = 'Verilog',
  X86Assembly = 'x86 Assembly',
  XML = 'XML'
}
export declare enum PurpleNature {
  Attack = 'Attack',
  Bad = 'Bad',
  Good = 'Good',
  Informative = 'Informative',
  Mitigation = 'Mitigation',
  NatureBad = 'bad',
  Result = 'Result'
}
export interface FluffyXHTMLDiv {
  '#text'?: string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: TentacledXHTMLDiv[] | XHTMLDiv4
}
export interface TentacledXHTMLDiv {
  '#text': string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: StickyXHTMLDiv
}
export interface XHTMLDiv3 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string
  'xhtml:div'?: StickyXHTMLDiv
}
export interface XHTMLDiv2 {
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[] | string
  'xhtml:div'?: XHTMLDiv3
  attr?: XHTMLDivAttr
}
export interface StickyXHTMLDiv {
  '#text'?: string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string[]
  'xhtml:div'?: IndigoXHTMLDiv[] | XHTMLDiv2
  'xhtml:i'?: string
}
export interface IndigoXHTMLDiv {
  '#text': string
  attr: XHTMLDivAttr
  'xhtml:div'?: IndecentXHTMLDiv
  'xhtml:br'?: string[] | string
}
export interface XHTMLDiv1 {
  '#text': string
  attr: XHTMLDivAttr
  'xhtml:br'?: string
  'xhtml:div'?: IndecentXHTMLDiv
}
export interface BraggadociousXHTMLDiv {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[]
  'xhtml:div'?: XHTMLDiv1[]
  attr?: XHTMLDivAttr
}
export interface MischievousXHTMLDiv {
  attr: XHTMLDivAttr
  'xhtml:div': BraggadociousXHTMLDiv
  '#text'?: string
}
export interface AmbitiousXHTMLDiv {
  '#text'?: string
  'xhtml:div'?: CunningXHTMLDiv[] | MischievousXHTMLDiv
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string
  attr?: XHTMLDivAttr
}
export interface IndecentXHTMLDiv {
  attr?: XHTMLDivAttr
  'xhtml:div'?: Array<HilariousXHTMLDiv | string> | AmbitiousXHTMLDiv
  '#text'?: string
  'xhtml:br'?: string
}
export interface CunningXHTMLDiv {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:div'?: MagentaXHTMLDiv
}
export interface MagentaXHTMLDiv {
  '#text': string
  'xhtml:br': string[] | string
  'xhtml:i'?: string
  'xhtml:div'?: FriskyXHTMLDiv
}
export interface FriskyXHTMLDiv {
  attr: XHTMLDivAttr
  'xhtml:div': FluffyXHTML
}
export interface FluffyXHTML {
  '#text': string
  'xhtml:br': string[]
}
export interface HilariousXHTMLDiv {
  '#text': string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string
}
export interface XHTMLDiv4 {
  '#text'?: string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv5[] | XHTMLDiv7
  'xhtml:i'?: string[] | string
}
export interface XHTMLDiv5 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string
  'xhtml:div'?: XHTMLDiv6
}
export interface XHTMLDiv6 {
  'xhtml:i': string
  'xhtml:br'?: string[]
  '#text'?: string
}
export interface XHTMLDiv7 {
  attr?: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv8[] | XHTMLDiv9
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string
}
export interface XHTMLDiv8 {
  '#text': string
  attr: XHTMLDivAttr
}
export interface XHTMLDiv9 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv10
  'xhtml:i'?: string
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv10 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:div'?: StickyXHTMLDiv
  'xhtml:br'?: string[]
}
export interface XHTMLDiv11 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv12[] | XHTMLDiv18
  'xhtml:i'?: string[] | string
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv12 {
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv13[] | XHTMLDiv17
  'xhtml:i'?: string
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv13 {
  '#text'?: string
  'xhtml:br'?: string
  attr?: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv14
}
export interface XHTMLDiv14 {
  '#text'?: string
  'xhtml:br'?: string[]
  'xhtml:i'?: string
  'xhtml:div'?: XHTMLDiv15
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv15 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv16
}
export interface XHTMLDiv16 {
  '#text': string
  attr?: XHTMLDivAttr
  'xhtml:br': string[]
}
export interface XHTMLDiv17 {
  '#text'?: string
  'xhtml:br'?: string[] | string
  attr?: XHTMLDivAttr
  'xhtml:i'?: string[] | string
  'xhtml:div'?: FluffyXHTMLDiv[] | StickyXHTMLDiv
}
export interface XHTMLDiv18 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv19[] | XHTMLDiv20
  'xhtml:i'?: string[] | string
  'xhtml:b'?: string
}
export interface XHTMLDiv19 {
  '#text': string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv14[]
  'xhtml:i'?: string
}
export interface XHTMLDiv20 {
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv21[] | FluffyXHTMLDiv
  attr?: XHTMLDivAttr
  'xhtml:i'?: string[] | string
}
export interface XHTMLDiv21 {
  attr: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv22
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string
}
export interface XHTMLDiv22 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: IndecentXHTMLDiv[] | FluffyXHTMLDiv
  'xhtml:i'?: string[] | string
  attr?: XHTMLDivAttr
}
export interface XHTMLTableXHTMLTable {
  'xhtml:tr': PurpleXHTMLTr[]
}
export interface PurpleXHTMLTr {
  'xhtml:th'?: string[]
  'xhtml:td'?: Array<TentacledXHTML | string>
}
export interface TentacledXHTML {
  '#text': string
  'xhtml:br': string
}
export interface FluffyExampleCode {
  attr: ExampleCodeAttr
  'xhtml:div'?: XHTMLDiv23 | string
  '#text'?: string
  'xhtml:br'?: string[]
  'xhtml:b'?: string[]
}
export interface XHTMLDiv23 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[] | string
  'xhtml:div'?: XHTMLDiv24[] | XHTMLDiv27
}
export interface XHTMLDiv24 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv25[] | XHTMLDiv26
  'xhtml:i'?: string[] | string
}
export interface XHTMLDiv25 {
  '#text': string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[]
  'xhtml:div'?: FluffyXHTMLDiv[]
}
export interface XHTMLDiv26 {
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: IndecentXHTMLDiv[] | IndecentXHTMLDiv
  'xhtml:i'?: string[] | string
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv27 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv28[] | XHTMLDiv29
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string
}
export interface XHTMLDiv28 {
  '#text': string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string
  'xhtml:div'?: FluffyXHTMLDiv[]
}
export interface XHTMLDiv29 {
  '#text'?: string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: FluffyXHTMLDiv[] | XHTMLDiv30
  'xhtml:i'?: string[] | string
}
export interface XHTMLDiv30 {
  attr: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv8[] | XHTMLDiv31
  '#text'?: string
  'xhtml:i'?: string[]
  'xhtml:br'?: string[] | string
}
export interface XHTMLDiv31 {
  '#text'?: string
  'xhtml:div'?: XHTMLDiv32[] | IndecentXHTMLDiv
  'xhtml:br'?: string[]
  'xhtml:i'?: string[] | string
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv32 {
  attr: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv33
  '#text'?: string
}
export interface XHTMLDiv33 {
  '#text': string
  'xhtml:br': string[]
  'xhtml:i': string[] | string
  'xhtml:div'?: XHTMLDiv13[]
}
export interface PurpleIntroText {
  'xhtml:p': string[] | string
}
export interface DemonstrativeExampleReferences {
  Reference: ReferencesReferenceClass
}
export interface ReferencesReferenceClass {
  attr: FluffyAttr
}
export interface FluffyAttr {
  '@_External_Reference_ID': string
}
export interface DemonstrativeExampleAttr {
  '@_Demonstrative_Example_ID': string
}
export interface PurpleDemonstrativeExample {
  attr?: DemonstrativeExampleAttr
  Intro_Text: FluffyIntroText | string
  Example_Code?: TentacledExampleCode[] | StickyExampleCode
  Body_Text?: Array<FluffyBodyText | string> | BackgroundDetail | string
  References?: DemonstrativeExampleReferences
}
export interface FluffyBodyText {
  'xhtml:ul'?: BodyTextXHTMLUL
  'xhtml:div'?: XHTMLDiv34
  '#text'?: string
  'xhtml:table'?: BodyTextXHTMLTable
  'xhtml:p'?: string[] | string
}
export interface XHTMLDiv34 {
  'xhtml:div': string[]
}
export interface BodyTextXHTMLTable {
  'xhtml:tr': FluffyXHTMLTr[] | TentacledXHTMLTr
}
export interface FluffyXHTMLTr {
  'xhtml:th'?: string[]
  'xhtml:td'?: Array<number | string>
}
export interface TentacledXHTMLTr {
  'xhtml:td': string[]
}
export interface BodyTextXHTMLUL {
  'xhtml:li': XHTMLOlXHTMLLi[] | XHTMLOlXHTMLLi
}
export interface TentacledExampleCode {
  attr: ExampleCodeAttr
  'xhtml:div'?: Array<FluffyXHTMLDiv | string> | XHTMLDiv35 | string
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:p'?: string[] | string
  'xhtml:ul'?: XHTMLOlElement
  'xhtml:table'?: PurpleXHTMLTable
}
export interface XHTMLDiv35 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv36[] | XHTMLDiv48
  'xhtml:i'?: string[] | string
  attr?: XHTMLDivAttr
}
export interface XHTMLDiv36 {
  '#text'?: string
  attr?: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv37[] | XHTMLDiv38
  'xhtml:br'?: string[] | string
}
export interface XHTMLDiv37 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: HilariousXHTMLDiv
}
export interface XHTMLDiv38 {
  '#text'?: string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[] | string
  'xhtml:div'?: XHTMLDiv39[] | XHTMLDiv44
}
export interface XHTMLDiv39 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string
  'xhtml:div'?: IndecentXHTMLDiv[] | XHTMLDiv40
}
export interface XHTMLDiv40 {
  '#text': string
  attr?: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv41[] | XHTMLDiv42
}
export interface XHTMLDiv41 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:div'?: TentacledXHTML
}
export interface XHTMLDiv42 {
  attr: XHTMLDivAttr
  'xhtml:div': XHTMLDiv43
}
export interface XHTMLDiv43 {
  '#text': string
  'xhtml:div'?: IndecentXHTMLDiv[]
  'xhtml:br': string[] | string
  'xhtml:i'?: string[]
}
export interface XHTMLDiv44 {
  attr?: XHTMLDivAttr
  'xhtml:div'?: IndecentXHTMLDiv[] | XHTMLDiv45
  '#text'?: string
  'xhtml:br'?: string[]
}
export interface XHTMLDiv45 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv46[] | XHTMLDiv14
  attr?: XHTMLDivAttr
  'xhtml:i'?: string
}
export interface XHTMLDiv46 {
  '#text'?: string
  attr: XHTMLDivAttr
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv47
}
export interface XHTMLDiv47 {
  '#text': string
  attr?: XHTMLDivAttr
  'xhtml:br': string[] | string
  'xhtml:i'?: string
}
export interface XHTMLDiv48 {
  attr: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv36[] | XHTMLDiv49
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[] | string
  'xhtml:b'?: string
}
export interface XHTMLDiv49 {
  '#text': string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: XHTMLDiv36[] | XHTMLDiv36
  attr?: XHTMLDivAttr
  'xhtml:i'?: string[] | string
}
export interface PurpleXHTMLTable {
  'xhtml:tr'?: StickyXHTMLTr[] | IndigoXHTMLTr
  'xhtml:tbody'?: XHTMLT
}
export interface XHTMLT {
  'xhtml:tr': TentacledXHTMLTr[]
}
export interface StickyXHTMLTr {
  'xhtml:th'?: XHTMLTh[]
  'xhtml:td'?: Array<XHTMLTdClass | string>
}
export interface XHTMLTdClass {
  '#text': string
  'xhtml:br'?: string
  'xhtml:p'?: string
}
export declare enum XHTMLTh {
  FieldDescription = 'Field description',
  Register = 'Register'
}
export interface IndigoXHTMLTr {
  'xhtml:td': Array<FluffyXHTML | string>
}
export interface StickyExampleCode {
  attr: ExampleCodeAttr
  'xhtml:div'?: Array<StickyXHTMLDiv | string> | XHTMLDiv50 | string
  'xhtml:table'?: FluffyXHTMLTable[]
  '#text'?: string
  'xhtml:br'?: string[]
}
export interface XHTMLDiv50 {
  '#text': string
  'xhtml:div'?: Array<XHTMLDiv36 | string> | XHTMLDiv51
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[] | string
}
export interface XHTMLDiv51 {
  attr: XHTMLDivAttr
  'xhtml:div'?: XHTMLDiv12[] | XHTMLDiv52
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:i'?: string[] | string
}
export interface XHTMLDiv52 {
  '#text'?: string
  'xhtml:br'?: string[] | string
  'xhtml:div'?: IndecentXHTMLDiv[] | StickyXHTMLDiv
  attr?: XHTMLDivAttr
  'xhtml:i'?: string[] | string
}
export interface FluffyXHTMLTable {
  'xhtml:tbody': XHTMLTbody
}
export interface XHTMLTbody {
  'xhtml:tr': FluffyXHTMLTr[]
}
export interface FluffyIntroText {
  'xhtml:p'?: string[] | string
  '#text'?: string
  'xhtml:br'?: string
  'xhtml:table'?: XHTMLTableXHTMLTable[] | XHTMLT
  'xhtml:ul'?: XHTMLOlElement[]
  'xhtml:div'?: IntroTextXHTMLDiv
}
export interface IntroTextXHTMLDiv {
  '#text': string
  'xhtml:br': string[]
  'xhtml:div': XHTMLDiv8[]
}
export interface DetectionMethods {
  Detection_Method: DetectionMethodElement[] | PurpleDetectionMethod
}
export interface DetectionMethodElement {
  Method: Method
  Description: PurpleDescription | string
  attr?: DetectionMethodAttr
  Effectiveness?: DetectionMethodEffectiveness
  Effectiveness_Notes?: string
}
export interface PurpleDescription {
  'xhtml:p'?: string[] | string
  'xhtml:div'?: XHTMLDiv53
  'xhtml:ul'?: XHTMLOlElement
}
export interface XHTMLDiv53 {
  attr: XHTMLDivAttr
  'xhtml:div': XHTMLDivEnum[] | XHTMLDivEnum
  'xhtml:ul': PurpleXHTMLUL[] | PurpleXHTMLUL
}
export declare enum XHTMLDivEnum {
  CostEffectiveForPartialCoverage = 'Cost effective for partial coverage:',
  HighlyCostEffective = 'Highly cost effective:'
}
export interface PurpleXHTMLUL {
  'xhtml:li': string[] | string
}
export declare enum DetectionMethodEffectiveness {
  High = 'High',
  Limited = 'Limited',
  Moderate = 'Moderate',
  Opportunistic = 'Opportunistic',
  SOARPartial = 'SOAR Partial'
}
export declare enum Method {
  ArchitectureOrDesignReview = 'Architecture or Design Review',
  AutomatedAnalysis = 'Automated Analysis',
  AutomatedDynamicAnalysis = 'Automated Dynamic Analysis',
  AutomatedStaticAnalysis = 'Automated Static Analysis',
  AutomatedStaticAnalysisBinaryOrBytecode = 'Automated Static Analysis - Binary or Bytecode',
  AutomatedStaticAnalysisSourceCode = 'Automated Static Analysis - Source Code',
  BlackBox = 'Black Box',
  DynamicAnalysisWithAutomatedResultsInterpretation = 'Dynamic Analysis with Automated Results Interpretation',
  DynamicAnalysisWithManualResultsInterpretation = 'Dynamic Analysis with Manual Results Interpretation',
  FormalVerification = 'Formal Verification',
  Fuzzing = 'Fuzzing',
  ManualAnalysis = 'Manual Analysis',
  ManualDynamicAnalysis = 'Manual Dynamic Analysis',
  ManualStaticAnalysis = 'Manual Static Analysis',
  ManualStaticAnalysisBinaryOrBytecode = 'Manual Static Analysis - Binary or Bytecode',
  ManualStaticAnalysisSourceCode = 'Manual Static Analysis - Source Code',
  Other = 'Other',
  SimulationEmulation = 'Simulation / Emulation',
  WhiteBox = 'White Box'
}
export interface DetectionMethodAttr {
  '@_Detection_Method_ID': string
}
export interface PurpleDetectionMethod {
  Method: Method
  Description: FluffyDescription | string
  Effectiveness?: DetectionMethodEffectiveness
  attr?: DetectionMethodAttr
  Effectiveness_Notes?: string
}
export interface FluffyDescription {
  'xhtml:p': string[] | string
  'xhtml:ul'?: XHTMLOlElement
  'xhtml:div'?: XHTMLDiv54
}
export interface XHTMLDiv54 {
  attr: XHTMLDivAttr
  'xhtml:div': XHTMLDivEnum
  'xhtml:ul': XHTMLDivXHTMLULClass
}
export interface XHTMLDivXHTMLULClass {
  'xhtml:li': string
}
export interface ExtendedDescriptionClass {
  'xhtml:p': string[] | string
  'xhtml:ul'?: FluffyXHTMLUL[] | TentacledXHTMLUL
  'xhtml:div'?: ExtendedDescriptionXHTMLDiv
  'xhtml:ol'?: XHTMLOlElement
  '#text'?: string
  'xhtml:br'?: string[]
}
export interface ExtendedDescriptionXHTMLDiv {
  attr: XHTMLDivAttr
  'xhtml:div': string[]
}
export interface FluffyXHTMLUL {
  'xhtml:li': Array<XHTMLLiClass | string>
}
export interface XHTMLLiClass {
  '#text'?: string
  'xhtml:b': string
}
export interface TentacledXHTMLUL {
  'xhtml:li': Array<PurpleXHTMLLi | string>
}
export interface PurpleXHTMLLi {
  '#text'?: string
  'xhtml:b'?: string
  'xhtml:div'?: XHTMLLiClass
}
export interface FunctionalAreas {
  Functional_Area: string[] | string
}
export interface ModesOfIntroduction {
  Introduction: IntroductionElement[] | PurpleIntroduction
}
export interface IntroductionElement {
  Phase: PhaseElement
  Note?: NoteNote | string
}
export interface NoteNote {
  'xhtml:p': string[] | string
  'xhtml:ul'?: XHTMLOlElement
}
export declare enum PhaseElement {
  ArchitectureAndDesign = 'Architecture and Design',
  BuildAndCompilation = 'Build and Compilation',
  Bundling = 'Bundling',
  Distribution = 'Distribution',
  Documentation = 'Documentation',
  Implementation = 'Implementation',
  Installation = 'Installation',
  Integration = 'Integration',
  Manufacturing = 'Manufacturing',
  Operation = 'Operation',
  PatchingAndMaintenance = 'Patching and Maintenance',
  Policy = 'Policy',
  Requirements = 'Requirements',
  SystemConfiguration = 'System Configuration',
  Testing = 'Testing'
}
export interface PurpleIntroduction {
  Phase: PhaseElement
  Note?: NoteClass | string
}
export interface Notes {
  Note: BackgroundDetail[] | BackgroundDetail
}
export interface ObservedExamples {
  Observed_Example: ObservedExampleElement[] | ObservedExampleElement
}
export interface ObservedExampleElement {
  Reference: string
  Description: string
  Link: string
}
export interface PotentialMitigations {
  Mitigation: MitigationElement[] | PurpleMitigation
}
export interface MitigationElement {
  Phase?: PhaseElement[] | PhaseElement
  Description: TentacledDescription | string
  attr?: MitigationAttr
  Strategy?: Strategy
  Effectiveness?: PurpleEffectiveness
  Effectiveness_Notes?: string
}
export interface TentacledDescription {
  'xhtml:p': string[] | string
  'xhtml:ul'?: StickyXHTMLUL[] | XHTMLOlElement
  'xhtml:div'?: ExtendedDescriptionXHTMLDiv
}
export interface StickyXHTMLUL {
  'xhtml:li': Array<FluffyXHTMLLi | string>
}
export interface FluffyXHTMLLi {
  '#text': string
  'xhtml:ul': XHTMLOlElement
}
export declare enum PurpleEffectiveness {
  DefenseInDepth = 'Defense in Depth',
  DiscouragedCommonPractice = 'Discouraged Common Practice',
  High = 'High',
  Limited = 'Limited',
  Moderate = 'Moderate',
  None = 'None'
}
export declare enum Strategy {
  AttackSurfaceReduction = 'Attack Surface Reduction',
  CompilationOrBuildHardening = 'Compilation or Build Hardening',
  EnforcementByConversion = 'Enforcement by Conversion',
  EnvironmentHardening = 'Environment Hardening',
  Firewall = 'Firewall',
  InputValidation = 'Input Validation',
  LanguageSelection = 'Language Selection',
  LibrariesOrFrameworks = 'Libraries or Frameworks',
  OutputEncoding = 'Output Encoding',
  Parameterization = 'Parameterization',
  Refactoring = 'Refactoring',
  ResourceLimitation = 'Resource Limitation',
  SandboxOrJail = 'Sandbox or Jail',
  SeparationOfPrivilege = 'Separation of Privilege'
}
export interface MitigationAttr {
  '@_Mitigation_ID': string
}
export interface PurpleMitigation {
  Phase?: PhaseElement[] | PhaseElement
  Description: BackgroundDetail | string
  attr?: MitigationAttr
  Strategy?: Strategy
  Effectiveness?: DetectionMethodEffectiveness
  Effectiveness_Notes?: string
}
export interface CweDictionaryReferences {
  Reference: ReferenceElement[] | ReferenceElement
}
export interface ReferenceElement {
  attr: TentacledAttr
}
export interface TentacledAttr {
  '@_External_Reference_ID': string
  '@_Section'?: string
}
export interface RelatedAttackPatterns {
  Related_Attack_Pattern: RelatedAttackPatternElement[] | RelatedAttackPatternElement
}
export interface RelatedAttackPatternElement {
  attr: RelatedAttackPatternAttr
}
export interface RelatedAttackPatternAttr {
  '@_CAPEC_ID': string
}
export interface RelatedWeaknesses {
  Related_Weakness: RelatedWeaknessElement[] | RelatedWeaknessElement
}
export interface RelatedWeaknessElement {
  attr: RelatedWeaknessAttr
}
export interface RelatedWeaknessAttr {
  '@_Nature': FluffyNature
  '@_CWE_ID': string
  '@_View_ID': string
  '@_Ordinal'?: Ordinal
  '@_Chain_ID'?: string
}
export declare enum FluffyNature {
  CanAlsoBe = 'CanAlsoBe',
  CanPrecede = 'CanPrecede',
  ChildOf = 'ChildOf',
  PeerOf = 'PeerOf',
  Requires = 'Requires',
  StartsWith = 'StartsWith'
}
export declare enum Ordinal {
  Indirect = 'Indirect',
  Primary = 'Primary',
  Resultant = 'Resultant'
}
export interface TaxonomyMappings {
  Taxonomy_Mapping: TaxonomyMappingElement[] | TaxonomyMappingElement
}
export interface TaxonomyMappingElement {
  attr: TaxonomyMappingAttr
  Entry_Name?: string
  Entry_ID?: number | string
  Mapping_Fit?: MappingFit
}
export declare enum MappingFit {
  CWEMoreAbstract = 'CWE More Abstract',
  CWEMoreSpecific = 'CWE More Specific',
  Exact = 'Exact',
  Imprecise = 'Imprecise'
}
export interface TaxonomyMappingAttr {
  '@_Taxonomy_Name': TaxonomyName
}
export declare enum TaxonomyName {
  CERTCSecureCoding = 'CERT C Secure Coding',
  Clasp = 'CLASP',
  Landwehr = 'Landwehr',
  OMGAscmm = 'OMG ASCMM',
  OMGAscpem = 'OMG ASCPEM',
  OMGAscrm = 'OMG ASCRM',
  OMGAscsm = 'OMG ASCSM',
  OWASPTopTen2004 = 'OWASP Top Ten 2004',
  OWASPTopTen2007 = 'OWASP Top Ten 2007',
  Plover = 'PLOVER',
  SEICERTOracleCodingStandardForJava = 'SEI CERT Oracle Coding Standard for Java',
  SEICERTPERLCodingStandard = 'SEI CERT Perl Coding Standard',
  SoftwareFaultPatterns = 'Software Fault Patterns',
  The7PerniciousKingdoms = '7 Pernicious Kingdoms',
  TheCERTOracleSecureCodingStandardForJava2011 = 'The CERT Oracle Secure Coding Standard for Java (2011)',
  Wasc = 'WASC'
}
export interface WeaknessOrdinalities {
  Weakness_Ordinality: WeaknessOrdinalityElement[] | WeaknessOrdinalityElement
}
export interface WeaknessOrdinalityElement {
  Ordinality: Ordinal
  Description?: string
}
export interface CweDictionaryAttr {
  '@_Abstraction': Abstraction
  '@_Structure': Structure
  '@_Status': Status
  ID: string
  Name: string
}
export declare enum Abstraction {
  Base = 'Base',
  Class = 'Class',
  Compound = 'Compound',
  Pillar = 'Pillar',
  Variant = 'Variant'
}
export declare enum Status {
  Deprecated = 'Deprecated',
  Draft = 'Draft',
  Incomplete = 'Incomplete',
  Stable = 'Stable'
}
export declare enum Structure {
  Chain = 'Chain',
  Composite = 'Composite',
  Simple = 'Simple'
}
export declare class Convert {
  static toCweDictionary(
    json: string
  ): {
    [key: string]: CweDictionary
  }
  static cweDictionaryToJson(value: { [key: string]: CweDictionary }): string
}
//# sourceMappingURL=CweDictionary.d.ts.map
