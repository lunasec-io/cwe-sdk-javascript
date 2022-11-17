// To parse this data:
//
//   import { Convert } from "./file";
//
//   const cweDictionary = Convert.toCweDictionary(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CweDictionary {
    attr:                     CweDictionaryAttr;
    Description:              string;
    Extended_Description?:    ExtendedDescriptionClass | string;
    Related_Weaknesses?:      RelatedWeaknesses;
    Applicable_Platforms?:    ApplicablePlatforms;
    Background_Details?:      BackgroundDetails;
    Modes_Of_Introduction?:   ModesOfIntroduction;
    Likelihood_Of_Exploit?:   Likelihood;
    Common_Consequences?:     CommonConsequences;
    Potential_Mitigations?:   PotentialMitigations;
    Demonstrative_Examples?:  DemonstrativeExamples;
    Observed_Examples?:       ObservedExamples;
    References?:              CweDictionaryReferences;
    Content_History:          ContentHistory;
    Weakness_Ordinalities?:   WeaknessOrdinalities;
    Alternate_Terms?:         AlternateTerms;
    Detection_Methods?:       DetectionMethods;
    Taxonomy_Mappings?:       TaxonomyMappings;
    Related_Attack_Patterns?: RelatedAttackPatterns;
    Notes?:                   Notes;
    Affected_Resources?:      AffectedResources;
    Functional_Areas?:        FunctionalAreas;
}

export interface AffectedResources {
    Affected_Resource: AffectedResourceElement[] | AffectedResourceElement;
}

export enum AffectedResourceElement {
    CPU = "CPU",
    FileOrDirectory = "File or Directory",
    Memory = "Memory",
    SystemProcess = "System Process",
}

export interface AlternateTerms {
    Alternate_Term: AlternateTermElement[] | PurpleAlternateTerm;
}

export interface AlternateTermElement {
    Term:         string;
    Description?: string;
}

export interface PurpleAlternateTerm {
    Term:         string;
    Description?: NoteClass | string;
}

export interface NoteClass {
    "xhtml:p": string[];
}

export interface ApplicablePlatforms {
    Language?:         LanguageElement[] | LanguageElement;
    Technology?:       LanguageElement[] | LanguageElement;
    Operating_System?: LanguageElement[] | LanguageElement;
    Architecture?:     LanguageElement[] | ArchitectureClass;
}

export interface LanguageElement {
    attr: LanguageAttr;
}

export interface LanguageAttr {
    "@_Class"?:     PurpleClass;
    "@_Prevalence": Prevalence;
    "@_Name"?:      string;
}

export enum PurpleClass {
    Assembly = "Assembly",
    ClientServer = "Client Server",
    CloudComputing = "Cloud Computing",
    Compiled = "Compiled",
    Embedded = "Embedded",
    HardwareDescriptionLanguage = "Hardware Description Language",
    ICSOt = "ICS/OT",
    Interpreted = "Interpreted",
    MACOS = "macOS",
    Microcomputer = "Microcomputer",
    Mobile = "Mobile",
    NotLanguageSpecific = "Not Language-Specific",
    NotOSSpecific = "Not OS-Specific",
    NotTechnologySpecific = "Not Technology-Specific",
    SystemOnChip = "System on Chip",
    Unix = "Unix",
    WebBased = "Web Based",
    Windows = "Windows",
    Workstation = "Workstation",
}

export enum Prevalence {
    Often = "Often",
    Rarely = "Rarely",
    Sometimes = "Sometimes",
    Undetermined = "Undetermined",
}

export interface ArchitectureClass {
    attr: PurpleAttr;
}

export interface PurpleAttr {
    "@_Class":      FluffyClass;
    "@_Prevalence": Prevalence;
}

export enum FluffyClass {
    NotArchitectureSpecific = "Not Architecture-Specific",
}

export interface BackgroundDetails {
    Background_Detail: string[] | BackgroundDetail | string;
}

export interface BackgroundDetail {
    "xhtml:p"?:   string[] | string;
    "#text"?:     string;
    "xhtml:ul"?:  XHTMLOlElement;
    "xhtml:div"?: BackgroundDetailXHTMLDiv;
    "xhtml:img"?: XHTMLImg;
    "xhtml:ol"?:  XHTMLOlElement;
    attr?:        BackgroundDetailAttr;
    "xhtml:br"?:  string[];
}

export interface BackgroundDetailAttr {
    "@_Type": Type;
}

export enum Type {
    ApplicablePlatform = "Applicable Platform",
    Content = "Content",
    Feedback = "Feedback",
    Maintenance = "Maintenance",
    Mapping = "Mapping",
    Other = "Other",
    Relationship = "Relationship",
    ResearchGap = "Research Gap",
    Terminology = "Terminology",
    Theoretical = "Theoretical",
}

export interface BackgroundDetailXHTMLDiv {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string;
    "xhtml:div"?: string[];
}

export interface XHTMLDivAttr {
    "@_style": Style;
}

export enum Style {
    MarginLeft1Em = "margin-left:1em;",
}

export interface XHTMLImg {
    attr: XHTMLImgAttr;
}

export interface XHTMLImgAttr {
    "@_src": string;
    "@_alt": string;
}

export interface XHTMLOlElement {
    "xhtml:li": string[];
}

export interface CommonConsequences {
    Consequence: ConsequenceElement[] | ConsequenceElement;
}

export interface ConsequenceElement {
    Scope:       ScopeElement[] | ScopeElement;
    Impact?:     ImpactElement[] | ImpactElement;
    Note?:       string;
    Likelihood?: Likelihood;
}

export enum ImpactElement {
    AlterExecutionLogic = "Alter Execution Logic",
    BypassProtectionMechanism = "Bypass Protection Mechanism",
    DoSAmplification = "DoS: Amplification",
    DoSCrashExitOrRestart = "DoS: Crash, Exit, or Restart",
    DoSInstability = "DoS: Instability",
    DoSResourceConsumptionCPU = "DoS: Resource Consumption (CPU)",
    DoSResourceConsumptionMemory = "DoS: Resource Consumption (Memory)",
    DoSResourceConsumptionOther = "DoS: Resource Consumption (Other)",
    ExecuteUnauthorizedCodeOrCommands = "Execute Unauthorized Code or Commands",
    GainPrivilegesOrAssumeIdentity = "Gain Privileges or Assume Identity",
    HideActivities = "Hide Activities",
    ModifyApplicationData = "Modify Application Data",
    ModifyFilesOrDirectories = "Modify Files or Directories",
    ModifyMemory = "Modify Memory",
    Other = "Other",
    QualityDegradation = "Quality Degradation",
    ReadApplicationData = "Read Application Data",
    ReadFilesOrDirectories = "Read Files or Directories",
    ReadMemory = "Read Memory",
    ReduceMaintainability = "Reduce Maintainability",
    ReducePerformance = "Reduce Performance",
    ReduceReliability = "Reduce Reliability",
    UnexpectedState = "Unexpected State",
    VariesByContext = "Varies by Context",
}

export enum Likelihood {
    High = "High",
    Low = "Low",
    Medium = "Medium",
    Unknown = "Unknown",
}

export enum ScopeElement {
    AccessControl = "Access Control",
    Accountability = "Accountability",
    Authentication = "Authentication",
    Authorization = "Authorization",
    Availability = "Availability",
    Confidentiality = "Confidentiality",
    Integrity = "Integrity",
    NonRepudiation = "Non-Repudiation",
    Other = "Other",
}

export interface ContentHistory {
    Submission:           Submission;
    Modification?:        ModificationElement[] | ModificationElement;
    Previous_Entry_Name?: PreviousEntryNameElement[] | PreviousEntryNameElement;
    Contribution?:        ContributionElement[] | ContributionElement;
}

export interface ContributionElement {
    attr:                       BackgroundDetailAttr;
    Contribution_Organization?: string;
    Contribution_Date:          string;
    Contribution_Comment:       string;
    Contribution_Name?:         string;
}

export interface ModificationElement {
    Modification_Name?:         ModificationName;
    Modification_Organization?: ModificationOrganization;
    Modification_Date:          string;
    Modification_Comment?:      string;
    Modification_Importance?:   ModificationImportance;
}

export enum ModificationImportance {
    Critical = "Critical",
}

export enum ModificationName {
    CWEContentTeam = "CWE Content Team",
    DavidRemahl = "David Remahl",
    EricDalci = "Eric Dalci",
    JasperVanWoudenberg = "Jasper van Woudenberg",
    KDMAnalytics = "KDM Analytics",
    SeanEidemiller = "Sean Eidemiller",
    TomStracener = "Tom Stracener",
}

export enum ModificationOrganization {
    Apple = "Apple",
    CWETeam = "CWE Team",
    Cigital = "Cigital",
    KDMAnalytics = "KDM Analytics",
    Mitre = "MITRE",
    Riscure = "Riscure",
    Veracode = "Veracode",
}

export interface PreviousEntryNameElement {
    "#text": string;
    attr:    PreviousEntryNameAttr;
}

export interface PreviousEntryNameAttr {
    "@_Date": string;
}

export interface Submission {
    Submission_Name?:         string;
    Submission_Organization?: SubmissionOrganization;
    Submission_Date:          string;
    Submission_Comment?:      string;
}

export enum SubmissionOrganization {
    AccelleraIPSecurityAssuranceIPSAWorkingGroup = "Accellera IP Security Assurance (IPSA) Working Group",
    AccelleraSystemsInitiative = "Accellera Systems Initiative",
    Bosch = "Bosch",
    CWEContentTeam = "CWE Content Team",
    Cigital = "Cigital",
    CloudSecurityAlliance = "Cloud Security Alliance",
    FortifySoftware = "Fortify Software",
    IntelCorporation = "Intel Corporation",
    Mitre = "MITRE",
    PurdueUniversity = "Purdue University",
    Riscure = "Riscure",
    SiliconValleyBank = "Silicon Valley Bank",
    TennesseeTechnologicalUniversity = "Tennessee Technological University",
    TheIntelCorporation = "The Intel Corporation",
    TortugaLogic = "Tortuga Logic",
    TrendMicro = "Trend Micro",
    Veracode = "Veracode",
    WellsFargo = "Wells Fargo",
}

export interface DemonstrativeExamples {
    Demonstrative_Example: DemonstrativeExampleElement[] | PurpleDemonstrativeExample;
}

export interface DemonstrativeExampleElement {
    Intro_Text:    PurpleIntroText | string;
    Example_Code?: PurpleExampleCode[] | FluffyExampleCode;
    Body_Text?:    Array<PurpleBodyText | string> | BackgroundDetail | string;
    attr?:         DemonstrativeExampleAttr;
    References?:   DemonstrativeExampleReferences;
}

export interface PurpleBodyText {
    "xhtml:ul"?:  PurpleXHTML;
    "xhtml:p"?:   string[] | string;
    "#text"?:     string;
    "xhtml:br"?:  string;
    "xhtml:ol"?:  PurpleXHTML;
    "xhtml:div"?: PurpleXHTMLDiv;
}

export interface PurpleXHTMLDiv {
    "xhtml:div": string[] | number | string;
}

export interface PurpleXHTML {
    "xhtml:li": XHTMLOlXHTMLLi[];
}

export interface XHTMLOlXHTMLLi {
    "xhtml:div": string;
}

export interface PurpleExampleCode {
    attr:           ExampleCodeAttr;
    "xhtml:div"?:   FluffyXHTMLDiv[] | XHTMLDiv11 | string;
    "xhtml:table"?: XHTMLTableXHTMLTable;
    "#text"?:       string;
    "xhtml:br"?:    string[] | string;
    "xhtml:p"?:     string;
    "xhtml:ul"?:    XHTMLOlElement;
    "xhtml:i"?:     string;
}

export interface ExampleCodeAttr {
    "@_Nature":    PurpleNature;
    "@_Language"?: Language;
}

export enum Language {
    ASPNet = "ASP.NET",
    C = "C",
    HTML = "HTML",
    JSP = "JSP",
    Java = "Java",
    JavaScript = "JavaScript",
    LanguageC = "C#",
    ObjectiveC = "Objective-C",
    Other = "Other",
    PERL = "Perl",
    PHP = "PHP",
    Pseudocode = "Pseudocode",
    PurpleC = "C++",
    Python = "Python",
    Rust = "Rust",
    SQL = "SQL",
    Shell = "Shell",
    Verilog = "Verilog",
    X86Assembly = "x86 Assembly",
    XML = "XML",
}

export enum PurpleNature {
    Attack = "Attack",
    Bad = "Bad",
    Good = "Good",
    Informative = "Informative",
    Mitigation = "Mitigation",
    NatureBad = "bad",
    Result = "Result",
}

export interface FluffyXHTMLDiv {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: TentacledXHTMLDiv[] | XHTMLDiv4;
}

export interface TentacledXHTMLDiv {
    "#text":      string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: StickyXHTMLDiv;
}

export interface XHTMLDiv3 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string;
    "xhtml:div"?: StickyXHTMLDiv;
}

export interface XHTMLDiv2 {
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
    "xhtml:div"?: XHTMLDiv3;
    attr?:        XHTMLDivAttr;
}

export interface StickyXHTMLDiv {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[];
    "xhtml:div"?: IndigoXHTMLDiv[] | XHTMLDiv2;
    "xhtml:i"?:   string;
}

export interface IndigoXHTMLDiv {
    "#text":      string;
    attr:         XHTMLDivAttr;
    "xhtml:div"?: IndecentXHTMLDiv;
    "xhtml:br"?:  string[] | string;
}

export interface XHTMLDiv1 {
    "#text":      string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string;
    "xhtml:div"?: IndecentXHTMLDiv;
}

export interface BraggadociousXHTMLDiv {
    "#text":      string;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[];
    "xhtml:div"?: XHTMLDiv1[];
    attr?:        XHTMLDivAttr;
}

export interface MischievousXHTMLDiv {
    attr:        XHTMLDivAttr;
    "xhtml:div": BraggadociousXHTMLDiv;
    "#text"?:    string;
}

export interface AmbitiousXHTMLDiv {
    "#text"?:     string;
    "xhtml:div"?: CunningXHTMLDiv[] | MischievousXHTMLDiv;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string;
    attr?:        XHTMLDivAttr;
}

export interface IndecentXHTMLDiv {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string;
    "xhtml:div"?: Array<HilariousXHTMLDiv | string> | AmbitiousXHTMLDiv;
}

export interface CunningXHTMLDiv {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:div"?: MagentaXHTMLDiv;
}

export interface MagentaXHTMLDiv {
    "#text":      string;
    "xhtml:br":   string[] | string;
    "xhtml:i"?:   string;
    "xhtml:div"?: FriskyXHTMLDiv;
}

export interface FriskyXHTMLDiv {
    attr:        XHTMLDivAttr;
    "xhtml:div": FluffyXHTML;
}

export interface FluffyXHTML {
    "#text":    string;
    "xhtml:br": string[];
}

export interface HilariousXHTMLDiv {
    "#text":     string;
    attr?:       XHTMLDivAttr;
    "xhtml:br"?: string;
}

export interface XHTMLDiv4 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv5[] | XHTMLDiv7;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv5 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string;
    "xhtml:div"?: XHTMLDiv6;
}

export interface XHTMLDiv6 {
    "xhtml:i":   string;
    "xhtml:br"?: string[];
    "#text"?:    string;
}

export interface XHTMLDiv7 {
    attr?:        XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv8[] | XHTMLDiv9;
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string;
}

export interface XHTMLDiv8 {
    "#text": string;
    attr:    XHTMLDivAttr;
}

export interface XHTMLDiv9 {
    "#text":      string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv10;
    "xhtml:i"?:   string;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLDiv10 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:div"?: StickyXHTMLDiv;
    "xhtml:br"?:  string[];
}

export interface XHTMLDiv11 {
    "#text":      string;
    "xhtml:i"?:   string[] | string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv12[] | XHTMLDiv18;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLDiv12 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv13[] | XHTMLDiv17;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string;
}

export interface XHTMLDiv13 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string;
    "xhtml:div"?: XHTMLDiv14;
}

export interface XHTMLDiv14 {
    "#text"?:     string;
    "xhtml:br"?:  string[];
    "xhtml:i"?:   string;
    "xhtml:div"?: XHTMLDiv15;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLDiv15 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv16;
}

export interface XHTMLDiv16 {
    "#text":    string;
    attr?:      XHTMLDivAttr;
    "xhtml:br": string[];
}

export interface XHTMLDiv17 {
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: FluffyXHTMLDiv[] | StickyXHTMLDiv;
    attr?:        XHTMLDivAttr;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv18 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
    "xhtml:div"?: XHTMLDiv19[] | XHTMLDiv20;
    "xhtml:b"?:   string;
}

export interface XHTMLDiv19 {
    "#text":      string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv14[];
    "xhtml:i"?:   string;
}

export interface XHTMLDiv20 {
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
    "xhtml:div"?: XHTMLDiv21[] | FluffyXHTMLDiv;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLDiv21 {
    attr:         XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv22;
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string;
}

export interface XHTMLDiv22 {
    "#text":      string;
    "xhtml:i"?:   string[] | string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: IndecentXHTMLDiv[] | FluffyXHTMLDiv;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLTableXHTMLTable {
    "xhtml:tr": PurpleXHTMLTr[];
}

export interface PurpleXHTMLTr {
    "xhtml:th"?: string[];
    "xhtml:td"?: Array<TentacledXHTML | string>;
}

export interface TentacledXHTML {
    "#text":    string;
    "xhtml:br": string;
}

export interface FluffyExampleCode {
    attr:         ExampleCodeAttr;
    "xhtml:div"?: XHTMLDiv23 | string;
    "#text"?:     string;
    "xhtml:br"?:  string[];
    "xhtml:b"?:   string[];
}

export interface XHTMLDiv23 {
    "#text":      string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv24[] | XHTMLDiv27;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv24 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv25[] | XHTMLDiv26;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv25 {
    "#text":      string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: FluffyXHTMLDiv[];
    "xhtml:i"?:   string[];
}

export interface XHTMLDiv26 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: IndecentXHTMLDiv[] | IndecentXHTMLDiv;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv27 {
    attr:         XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv28[] | XHTMLDiv29;
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string;
}

export interface XHTMLDiv28 {
    "#text":      string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: FluffyXHTMLDiv[];
    "xhtml:i"?:   string;
}

export interface XHTMLDiv29 {
    "#text"?:     string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: FluffyXHTMLDiv[] | XHTMLDiv30;
    "xhtml:i"?:   string[] | string;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLDiv30 {
    attr:         XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv8[] | XHTMLDiv31;
    "#text"?:     string;
    "xhtml:i"?:   string[];
    "xhtml:br"?:  string[] | string;
}

export interface XHTMLDiv31 {
    "#text"?:     string;
    "xhtml:br"?:  string[];
    "xhtml:div"?: XHTMLDiv32[] | IndecentXHTMLDiv;
    "xhtml:i"?:   string[] | string;
    attr?:        XHTMLDivAttr;
}

export interface XHTMLDiv32 {
    attr:         XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv33;
    "#text"?:     string;
}

export interface XHTMLDiv33 {
    "#text":      string;
    "xhtml:br":   string[];
    "xhtml:i":    string[] | string;
    "xhtml:div"?: XHTMLDiv13[];
}

export interface PurpleIntroText {
    "xhtml:p": string[] | string;
}

export interface DemonstrativeExampleReferences {
    Reference: ReferencesReferenceClass;
}

export interface ReferencesReferenceClass {
    attr: FluffyAttr;
}

export interface FluffyAttr {
    "@_External_Reference_ID": string;
}

export interface DemonstrativeExampleAttr {
    "@_Demonstrative_Example_ID": string;
}

export interface PurpleDemonstrativeExample {
    Intro_Text:    FluffyIntroText | string;
    Body_Text?:    Array<FluffyBodyText | string> | BackgroundDetail | string;
    Example_Code?: TentacledExampleCode[] | StickyExampleCode;
    attr?:         DemonstrativeExampleAttr;
    References?:   DemonstrativeExampleReferences;
}

export interface FluffyBodyText {
    "xhtml:ul"?:    BodyTextXHTMLUL;
    "#text"?:       string;
    "xhtml:table"?: BodyTextXHTMLTable;
    "xhtml:p"?:     string[] | string;
    "xhtml:div"?:   XHTMLDiv34;
}

export interface XHTMLDiv34 {
    "xhtml:div": string[];
}

export interface BodyTextXHTMLTable {
    "xhtml:tr": FluffyXHTMLTr[] | TentacledXHTMLTr;
}

export interface FluffyXHTMLTr {
    "xhtml:th"?: string[];
    "xhtml:td"?: Array<number | string>;
}

export interface TentacledXHTMLTr {
    "xhtml:td": string[];
}

export interface BodyTextXHTMLUL {
    "xhtml:li": XHTMLOlXHTMLLi[] | XHTMLOlXHTMLLi;
}

export interface TentacledExampleCode {
    attr:           ExampleCodeAttr;
    "xhtml:div"?:   Array<FluffyXHTMLDiv | string> | XHTMLDiv35 | string;
    "#text"?:       string;
    "xhtml:br"?:    string[] | string;
    "xhtml:p"?:     string[] | string;
    "xhtml:ul"?:    XHTMLOlElement;
    "xhtml:table"?: PurpleXHTMLTable;
}

export interface XHTMLDiv35 {
    "#text":      string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv36[] | XHTMLDiv48;
    attr?:        XHTMLDivAttr;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv36 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv37[] | XHTMLDiv38;
    "xhtml:br"?:  string[] | string;
}

export interface XHTMLDiv37 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: HilariousXHTMLDiv;
}

export interface XHTMLDiv38 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv39[] | XHTMLDiv44;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv39 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string;
    "xhtml:div"?: IndecentXHTMLDiv[] | XHTMLDiv40;
}

export interface XHTMLDiv40 {
    "#text":      string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv41[] | XHTMLDiv42;
}

export interface XHTMLDiv41 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:div"?: TentacledXHTML;
}

export interface XHTMLDiv42 {
    attr:        XHTMLDivAttr;
    "xhtml:div": XHTMLDiv43;
}

export interface XHTMLDiv43 {
    "#text":      string;
    "xhtml:div"?: IndecentXHTMLDiv[];
    "xhtml:br":   string[] | string;
    "xhtml:i"?:   string[];
}

export interface XHTMLDiv44 {
    attr?:        XHTMLDivAttr;
    "xhtml:div"?: IndecentXHTMLDiv[] | XHTMLDiv45;
    "#text"?:     string;
    "xhtml:br"?:  string[];
}

export interface XHTMLDiv45 {
    "#text":      string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv46[] | XHTMLDiv14;
    attr?:        XHTMLDivAttr;
    "xhtml:i"?:   string;
}

export interface XHTMLDiv46 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv47;
}

export interface XHTMLDiv47 {
    "#text":    string;
    attr?:      XHTMLDivAttr;
    "xhtml:br": string[] | string;
    "xhtml:i"?: string;
}

export interface XHTMLDiv48 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv36[] | XHTMLDiv49;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
    "xhtml:b"?:   string;
}

export interface XHTMLDiv49 {
    "#text":      string;
    "xhtml:br"?:  string[] | string;
    "xhtml:div"?: XHTMLDiv36[] | XHTMLDiv36;
    attr?:        XHTMLDivAttr;
    "xhtml:i"?:   string[] | string;
}

export interface PurpleXHTMLTable {
    "xhtml:tr"?:    StickyXHTMLTr[] | IndigoXHTMLTr;
    "xhtml:tbody"?: XHTMLT;
}

export interface XHTMLT {
    "xhtml:tr": TentacledXHTMLTr[];
}

export interface StickyXHTMLTr {
    "xhtml:th"?: XHTMLTh[];
    "xhtml:td"?: Array<XHTMLTdClass | string>;
}

export interface XHTMLTdClass {
    "#text":     string;
    "xhtml:br"?: string;
    "xhtml:p"?:  string;
}

export enum XHTMLTh {
    FieldDescription = "Field description",
    Register = "Register",
}

export interface IndigoXHTMLTr {
    "xhtml:td": Array<FluffyXHTML | string>;
}

export interface StickyExampleCode {
    attr:           ExampleCodeAttr;
    "xhtml:div"?:   Array<StickyXHTMLDiv | string> | XHTMLDiv50 | string;
    "xhtml:table"?: FluffyXHTMLTable[];
    "#text"?:       string;
    "xhtml:br"?:    string[];
}

export interface XHTMLDiv50 {
    "#text":      string;
    "xhtml:div"?: Array<XHTMLDiv36 | string> | XHTMLDiv51;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv51 {
    "#text"?:     string;
    attr:         XHTMLDivAttr;
    "xhtml:div"?: XHTMLDiv12[] | XHTMLDiv52;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
}

export interface XHTMLDiv52 {
    "#text"?:     string;
    attr?:        XHTMLDivAttr;
    "xhtml:br"?:  string[] | string;
    "xhtml:i"?:   string[] | string;
    "xhtml:div"?: IndecentXHTMLDiv[] | StickyXHTMLDiv;
}

export interface FluffyXHTMLTable {
    "xhtml:tbody": XHTMLTbody;
}

export interface XHTMLTbody {
    "xhtml:tr": FluffyXHTMLTr[];
}

export interface FluffyIntroText {
    "xhtml:p"?:     string[] | string;
    "#text"?:       string;
    "xhtml:br"?:    string;
    "xhtml:table"?: XHTMLTableXHTMLTable[] | XHTMLT;
    "xhtml:ul"?:    XHTMLOlElement[];
    "xhtml:div"?:   IntroTextXHTMLDiv;
}

export interface IntroTextXHTMLDiv {
    "#text":     string;
    "xhtml:br":  string[];
    "xhtml:div": XHTMLDiv8[];
}

export interface DetectionMethods {
    Detection_Method: DetectionMethodElement[] | PurpleDetectionMethod;
}

export interface DetectionMethodElement {
    Method:               Method;
    Description:          PurpleDescription | string;
    Effectiveness?:       DetectionMethodEffectiveness;
    attr?:                DetectionMethodAttr;
    Effectiveness_Notes?: string;
}

export interface PurpleDescription {
    "xhtml:p"?:   string[] | string;
    "xhtml:div"?: XHTMLDiv53;
    "xhtml:ul"?:  XHTMLOlElement;
}

export interface XHTMLDiv53 {
    attr:        XHTMLDivAttr;
    "xhtml:div": XHTMLDivEnum[] | XHTMLDivEnum;
    "xhtml:ul":  PurpleXHTMLUL[] | PurpleXHTMLUL;
}

export enum XHTMLDivEnum {
    CostEffectiveForPartialCoverage = "Cost effective for partial coverage:",
    HighlyCostEffective = "Highly cost effective:",
}

export interface PurpleXHTMLUL {
    "xhtml:li": string[] | string;
}

export enum DetectionMethodEffectiveness {
    High = "High",
    Limited = "Limited",
    Moderate = "Moderate",
    Opportunistic = "Opportunistic",
    SOARPartial = "SOAR Partial",
}

export enum Method {
    ArchitectureOrDesignReview = "Architecture or Design Review",
    AutomatedAnalysis = "Automated Analysis",
    AutomatedDynamicAnalysis = "Automated Dynamic Analysis",
    AutomatedStaticAnalysis = "Automated Static Analysis",
    AutomatedStaticAnalysisBinaryOrBytecode = "Automated Static Analysis - Binary or Bytecode",
    AutomatedStaticAnalysisSourceCode = "Automated Static Analysis - Source Code",
    BlackBox = "Black Box",
    DynamicAnalysisWithAutomatedResultsInterpretation = "Dynamic Analysis with Automated Results Interpretation",
    DynamicAnalysisWithManualResultsInterpretation = "Dynamic Analysis with Manual Results Interpretation",
    FormalVerification = "Formal Verification",
    Fuzzing = "Fuzzing",
    ManualAnalysis = "Manual Analysis",
    ManualDynamicAnalysis = "Manual Dynamic Analysis",
    ManualStaticAnalysis = "Manual Static Analysis",
    ManualStaticAnalysisBinaryOrBytecode = "Manual Static Analysis - Binary or Bytecode",
    ManualStaticAnalysisSourceCode = "Manual Static Analysis - Source Code",
    Other = "Other",
    SimulationEmulation = "Simulation / Emulation",
    WhiteBox = "White Box",
}

export interface DetectionMethodAttr {
    "@_Detection_Method_ID": string;
}

export interface PurpleDetectionMethod {
    Method:               Method;
    Description:          FluffyDescription | string;
    Effectiveness?:       DetectionMethodEffectiveness;
    Effectiveness_Notes?: string;
    attr?:                DetectionMethodAttr;
}

export interface FluffyDescription {
    "xhtml:p":    string[] | string;
    "xhtml:ul"?:  XHTMLOlElement;
    "xhtml:div"?: XHTMLDiv54;
}

export interface XHTMLDiv54 {
    attr:        XHTMLDivAttr;
    "xhtml:div": XHTMLDivEnum;
    "xhtml:ul":  XHTMLDivXHTMLULClass;
}

export interface XHTMLDivXHTMLULClass {
    "xhtml:li": string;
}

export interface ExtendedDescriptionClass {
    "xhtml:p":    string[] | string;
    "xhtml:ul"?:  FluffyXHTMLUL[] | TentacledXHTMLUL;
    "xhtml:ol"?:  XHTMLOlElement;
    "#text"?:     string;
    "xhtml:br"?:  string[];
    "xhtml:div"?: ExtendedDescriptionXHTMLDiv;
}

export interface ExtendedDescriptionXHTMLDiv {
    attr:        XHTMLDivAttr;
    "xhtml:div": string[];
}

export interface FluffyXHTMLUL {
    "xhtml:li": Array<XHTMLLiClass | string>;
}

export interface XHTMLLiClass {
    "#text"?:  string;
    "xhtml:b": string;
}

export interface TentacledXHTMLUL {
    "xhtml:li": Array<PurpleXHTMLLi | string>;
}

export interface PurpleXHTMLLi {
    "xhtml:div"?: XHTMLLiClass;
    "#text"?:     string;
    "xhtml:b"?:   string;
}

export interface FunctionalAreas {
    Functional_Area: string[] | string;
}

export interface ModesOfIntroduction {
    Introduction: IntroductionElement[] | PurpleIntroduction;
}

export interface IntroductionElement {
    Phase: PhaseElement;
    Note?: NoteNote | string;
}

export interface NoteNote {
    "xhtml:p":   string[] | string;
    "xhtml:ul"?: XHTMLOlElement;
}

export enum PhaseElement {
    ArchitectureAndDesign = "Architecture and Design",
    BuildAndCompilation = "Build and Compilation",
    Bundling = "Bundling",
    Distribution = "Distribution",
    Documentation = "Documentation",
    Implementation = "Implementation",
    Installation = "Installation",
    Integration = "Integration",
    Manufacturing = "Manufacturing",
    Operation = "Operation",
    PatchingAndMaintenance = "Patching and Maintenance",
    Policy = "Policy",
    Requirements = "Requirements",
    SystemConfiguration = "System Configuration",
    Testing = "Testing",
}

export interface PurpleIntroduction {
    Phase: PhaseElement;
    Note?: NoteClass | string;
}

export interface Notes {
    Note: BackgroundDetail[] | BackgroundDetail;
}

export interface ObservedExamples {
    Observed_Example: ObservedExampleElement[] | ObservedExampleElement;
}

export interface ObservedExampleElement {
    Reference:   string;
    Description: string;
    Link:        string;
}

export interface PotentialMitigations {
    Mitigation: MitigationElement[] | PurpleMitigation;
}

export interface MitigationElement {
    Phase?:               PhaseElement[] | PhaseElement;
    Description:          TentacledDescription | string;
    Strategy?:            Strategy;
    attr?:                MitigationAttr;
    Effectiveness_Notes?: string;
    Effectiveness?:       PurpleEffectiveness;
}

export interface TentacledDescription {
    "xhtml:p":    string[] | string;
    "xhtml:ul"?:  StickyXHTMLUL[] | XHTMLOlElement;
    "xhtml:div"?: ExtendedDescriptionXHTMLDiv;
}

export interface StickyXHTMLUL {
    "xhtml:li": Array<FluffyXHTMLLi | string>;
}

export interface FluffyXHTMLLi {
    "#text":    string;
    "xhtml:ul": XHTMLOlElement;
}

export enum PurpleEffectiveness {
    DefenseInDepth = "Defense in Depth",
    DiscouragedCommonPractice = "Discouraged Common Practice",
    High = "High",
    Limited = "Limited",
    Moderate = "Moderate",
    None = "None",
}

export enum Strategy {
    AttackSurfaceReduction = "Attack Surface Reduction",
    CompilationOrBuildHardening = "Compilation or Build Hardening",
    EnforcementByConversion = "Enforcement by Conversion",
    EnvironmentHardening = "Environment Hardening",
    Firewall = "Firewall",
    InputValidation = "Input Validation",
    LanguageSelection = "Language Selection",
    LibrariesOrFrameworks = "Libraries or Frameworks",
    OutputEncoding = "Output Encoding",
    Parameterization = "Parameterization",
    Refactoring = "Refactoring",
    ResourceLimitation = "Resource Limitation",
    SandboxOrJail = "Sandbox or Jail",
    SeparationOfPrivilege = "Separation of Privilege",
}

export interface MitigationAttr {
    "@_Mitigation_ID": string;
}

export interface PurpleMitigation {
    Phase?:               PhaseElement[] | PhaseElement;
    Description:          BackgroundDetail | string;
    Effectiveness?:       DetectionMethodEffectiveness;
    Effectiveness_Notes?: string;
    Strategy?:            Strategy;
    attr?:                MitigationAttr;
}

export interface CweDictionaryReferences {
    Reference: ReferenceElement[] | ReferenceElement;
}

export interface ReferenceElement {
    attr: TentacledAttr;
}

export interface TentacledAttr {
    "@_External_Reference_ID": string;
    "@_Section"?:              string;
}

export interface RelatedAttackPatterns {
    Related_Attack_Pattern: RelatedAttackPatternElement[] | RelatedAttackPatternElement;
}

export interface RelatedAttackPatternElement {
    attr: RelatedAttackPatternAttr;
}

export interface RelatedAttackPatternAttr {
    "@_CAPEC_ID": string;
}

export interface RelatedWeaknesses {
    Related_Weakness: RelatedWeaknessElement[] | RelatedWeaknessElement;
}

export interface RelatedWeaknessElement {
    attr: RelatedWeaknessAttr;
}

export interface RelatedWeaknessAttr {
    "@_Nature":    FluffyNature;
    "@_CWE_ID":    string;
    "@_View_ID":   string;
    "@_Ordinal"?:  Ordinal;
    "@_Chain_ID"?: string;
}

export enum FluffyNature {
    CanAlsoBe = "CanAlsoBe",
    CanPrecede = "CanPrecede",
    ChildOf = "ChildOf",
    PeerOf = "PeerOf",
    Requires = "Requires",
    StartsWith = "StartsWith",
}

export enum Ordinal {
    Indirect = "Indirect",
    Primary = "Primary",
    Resultant = "Resultant",
}

export interface TaxonomyMappings {
    Taxonomy_Mapping: TaxonomyMappingElement[] | TaxonomyMappingElement;
}

export interface TaxonomyMappingElement {
    attr:         TaxonomyMappingAttr;
    Entry_Name?:  string;
    Entry_ID?:    number | string;
    Mapping_Fit?: MappingFit;
}

export enum MappingFit {
    CWEMoreAbstract = "CWE More Abstract",
    CWEMoreSpecific = "CWE More Specific",
    Exact = "Exact",
    Imprecise = "Imprecise",
}

export interface TaxonomyMappingAttr {
    "@_Taxonomy_Name": TaxonomyName;
}

export enum TaxonomyName {
    CERTCSecureCoding = "CERT C Secure Coding",
    Clasp = "CLASP",
    Landwehr = "Landwehr",
    OMGAscmm = "OMG ASCMM",
    OMGAscpem = "OMG ASCPEM",
    OMGAscrm = "OMG ASCRM",
    OMGAscsm = "OMG ASCSM",
    OWASPTopTen2004 = "OWASP Top Ten 2004",
    OWASPTopTen2007 = "OWASP Top Ten 2007",
    Plover = "PLOVER",
    SEICERTOracleCodingStandardForJava = "SEI CERT Oracle Coding Standard for Java",
    SEICERTPERLCodingStandard = "SEI CERT Perl Coding Standard",
    SoftwareFaultPatterns = "Software Fault Patterns",
    The7PerniciousKingdoms = "7 Pernicious Kingdoms",
    TheCERTOracleSecureCodingStandardForJava2011 = "The CERT Oracle Secure Coding Standard for Java (2011)",
    Wasc = "WASC",
}

export interface WeaknessOrdinalities {
    Weakness_Ordinality: WeaknessOrdinalityElement[] | WeaknessOrdinalityElement;
}

export interface WeaknessOrdinalityElement {
    Ordinality:   Ordinal;
    Description?: string;
}

export interface CweDictionaryAttr {
    "@_Abstraction": Abstraction;
    "@_Structure":   Structure;
    "@_Status":      Status;
    ID:              string;
    Name:            string;
}

export enum Abstraction {
    Base = "Base",
    Class = "Class",
    Compound = "Compound",
    Pillar = "Pillar",
    Variant = "Variant",
}

export enum Status {
    Deprecated = "Deprecated",
    Draft = "Draft",
    Incomplete = "Incomplete",
    Stable = "Stable",
}

export enum Structure {
    Chain = "Chain",
    Composite = "Composite",
    Simple = "Simple",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCweDictionary(json: string): CweDictionary[] {
        return cast(JSON.parse(json), a(r("CweDictionary")));
    }

    public static cweDictionaryToJson(value: CweDictionary[]): string {
        return JSON.stringify(uncast(value, a(r("CweDictionary"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "CweDictionary": o([
        { json: "attr", js: "attr", typ: r("CweDictionaryAttr") },
        { json: "Description", js: "Description", typ: "" },
        { json: "Extended_Description", js: "Extended_Description", typ: u(undefined, u(r("ExtendedDescriptionClass"), "")) },
        { json: "Related_Weaknesses", js: "Related_Weaknesses", typ: u(undefined, r("RelatedWeaknesses")) },
        { json: "Applicable_Platforms", js: "Applicable_Platforms", typ: u(undefined, r("ApplicablePlatforms")) },
        { json: "Background_Details", js: "Background_Details", typ: u(undefined, r("BackgroundDetails")) },
        { json: "Modes_Of_Introduction", js: "Modes_Of_Introduction", typ: u(undefined, r("ModesOfIntroduction")) },
        { json: "Likelihood_Of_Exploit", js: "Likelihood_Of_Exploit", typ: u(undefined, r("Likelihood")) },
        { json: "Common_Consequences", js: "Common_Consequences", typ: u(undefined, r("CommonConsequences")) },
        { json: "Potential_Mitigations", js: "Potential_Mitigations", typ: u(undefined, r("PotentialMitigations")) },
        { json: "Demonstrative_Examples", js: "Demonstrative_Examples", typ: u(undefined, r("DemonstrativeExamples")) },
        { json: "Observed_Examples", js: "Observed_Examples", typ: u(undefined, r("ObservedExamples")) },
        { json: "References", js: "References", typ: u(undefined, r("CweDictionaryReferences")) },
        { json: "Content_History", js: "Content_History", typ: r("ContentHistory") },
        { json: "Weakness_Ordinalities", js: "Weakness_Ordinalities", typ: u(undefined, r("WeaknessOrdinalities")) },
        { json: "Alternate_Terms", js: "Alternate_Terms", typ: u(undefined, r("AlternateTerms")) },
        { json: "Detection_Methods", js: "Detection_Methods", typ: u(undefined, r("DetectionMethods")) },
        { json: "Taxonomy_Mappings", js: "Taxonomy_Mappings", typ: u(undefined, r("TaxonomyMappings")) },
        { json: "Related_Attack_Patterns", js: "Related_Attack_Patterns", typ: u(undefined, r("RelatedAttackPatterns")) },
        { json: "Notes", js: "Notes", typ: u(undefined, r("Notes")) },
        { json: "Affected_Resources", js: "Affected_Resources", typ: u(undefined, r("AffectedResources")) },
        { json: "Functional_Areas", js: "Functional_Areas", typ: u(undefined, r("FunctionalAreas")) },
    ], false),
    "AffectedResources": o([
        { json: "Affected_Resource", js: "Affected_Resource", typ: u(a(r("AffectedResourceElement")), r("AffectedResourceElement")) },
    ], false),
    "AlternateTerms": o([
        { json: "Alternate_Term", js: "Alternate_Term", typ: u(a(r("AlternateTermElement")), r("PurpleAlternateTerm")) },
    ], false),
    "AlternateTermElement": o([
        { json: "Term", js: "Term", typ: "" },
        { json: "Description", js: "Description", typ: u(undefined, "") },
    ], false),
    "PurpleAlternateTerm": o([
        { json: "Term", js: "Term", typ: "" },
        { json: "Description", js: "Description", typ: u(undefined, u(r("NoteClass"), "")) },
    ], false),
    "NoteClass": o([
        { json: "xhtml:p", js: "xhtml:p", typ: a("") },
    ], false),
    "ApplicablePlatforms": o([
        { json: "Language", js: "Language", typ: u(undefined, u(a(r("LanguageElement")), r("LanguageElement"))) },
        { json: "Technology", js: "Technology", typ: u(undefined, u(a(r("LanguageElement")), r("LanguageElement"))) },
        { json: "Operating_System", js: "Operating_System", typ: u(undefined, u(a(r("LanguageElement")), r("LanguageElement"))) },
        { json: "Architecture", js: "Architecture", typ: u(undefined, u(a(r("LanguageElement")), r("ArchitectureClass"))) },
    ], false),
    "LanguageElement": o([
        { json: "attr", js: "attr", typ: r("LanguageAttr") },
    ], false),
    "LanguageAttr": o([
        { json: "@_Class", js: "@_Class", typ: u(undefined, r("PurpleClass")) },
        { json: "@_Prevalence", js: "@_Prevalence", typ: r("Prevalence") },
        { json: "@_Name", js: "@_Name", typ: u(undefined, "") },
    ], false),
    "ArchitectureClass": o([
        { json: "attr", js: "attr", typ: r("PurpleAttr") },
    ], false),
    "PurpleAttr": o([
        { json: "@_Class", js: "@_Class", typ: r("FluffyClass") },
        { json: "@_Prevalence", js: "@_Prevalence", typ: r("Prevalence") },
    ], false),
    "BackgroundDetails": o([
        { json: "Background_Detail", js: "Background_Detail", typ: u(a(""), r("BackgroundDetail"), "") },
    ], false),
    "BackgroundDetail": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, u(a(""), "")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("XHTMLOlElement")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("BackgroundDetailXHTMLDiv")) },
        { json: "xhtml:img", js: "xhtml:img", typ: u(undefined, r("XHTMLImg")) },
        { json: "xhtml:ol", js: "xhtml:ol", typ: u(undefined, r("XHTMLOlElement")) },
        { json: "attr", js: "attr", typ: u(undefined, r("BackgroundDetailAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
    ], false),
    "BackgroundDetailAttr": o([
        { json: "@_Type", js: "@_Type", typ: r("Type") },
    ], false),
    "BackgroundDetailXHTMLDiv": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDivAttr": o([
        { json: "@_style", js: "@_style", typ: r("Style") },
    ], false),
    "XHTMLImg": o([
        { json: "attr", js: "attr", typ: r("XHTMLImgAttr") },
    ], false),
    "XHTMLImgAttr": o([
        { json: "@_src", js: "@_src", typ: "" },
        { json: "@_alt", js: "@_alt", typ: "" },
    ], false),
    "XHTMLOlElement": o([
        { json: "xhtml:li", js: "xhtml:li", typ: a("") },
    ], false),
    "CommonConsequences": o([
        { json: "Consequence", js: "Consequence", typ: u(a(r("ConsequenceElement")), r("ConsequenceElement")) },
    ], false),
    "ConsequenceElement": o([
        { json: "Scope", js: "Scope", typ: u(a(r("ScopeElement")), r("ScopeElement")) },
        { json: "Impact", js: "Impact", typ: u(undefined, u(a(r("ImpactElement")), r("ImpactElement"))) },
        { json: "Note", js: "Note", typ: u(undefined, "") },
        { json: "Likelihood", js: "Likelihood", typ: u(undefined, r("Likelihood")) },
    ], false),
    "ContentHistory": o([
        { json: "Submission", js: "Submission", typ: r("Submission") },
        { json: "Modification", js: "Modification", typ: u(undefined, u(a(r("ModificationElement")), r("ModificationElement"))) },
        { json: "Previous_Entry_Name", js: "Previous_Entry_Name", typ: u(undefined, u(a(r("PreviousEntryNameElement")), r("PreviousEntryNameElement"))) },
        { json: "Contribution", js: "Contribution", typ: u(undefined, u(a(r("ContributionElement")), r("ContributionElement"))) },
    ], false),
    "ContributionElement": o([
        { json: "attr", js: "attr", typ: r("BackgroundDetailAttr") },
        { json: "Contribution_Organization", js: "Contribution_Organization", typ: u(undefined, "") },
        { json: "Contribution_Date", js: "Contribution_Date", typ: u(undefined, "") },
        { json: "Contribution_Comment", js: "Contribution_Comment", typ: "" },
        { json: "Contribution_Name", js: "Contribution_Name", typ: u(undefined, "") },
    ], false),
    "ModificationElement": o([
        { json: "Modification_Name", js: "Modification_Name", typ: u(undefined, r("ModificationName")) },
        { json: "Modification_Organization", js: "Modification_Organization", typ: u(undefined, r("ModificationOrganization")) },
        { json: "Modification_Date", js: "Modification_Date", typ: u(undefined, "") },
        { json: "Modification_Comment", js: "Modification_Comment", typ: u(undefined, "") },
        { json: "Modification_Importance", js: "Modification_Importance", typ: u(undefined, r("ModificationImportance")) },
    ], false),
    "PreviousEntryNameElement": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("PreviousEntryNameAttr") },
    ], false),
    "PreviousEntryNameAttr": o([
        { json: "@_Date", js: "@_Date", typ: u(undefined, "") },
    ], false),
    "Submission": o([
        { json: "Submission_Name", js: "Submission_Name", typ: u(undefined, "") },
        { json: "Submission_Organization", js: "Submission_Organization", typ: u(undefined, r("SubmissionOrganization")) },
        { json: "Submission_Date", js: "Submission_Date", typ: u(undefined, "") },
        { json: "Submission_Comment", js: "Submission_Comment", typ: u(undefined, "") },
    ], false),
    "DemonstrativeExamples": o([
        { json: "Demonstrative_Example", js: "Demonstrative_Example", typ: u(a(r("DemonstrativeExampleElement")), r("PurpleDemonstrativeExample")) },
    ], false),
    "DemonstrativeExampleElement": o([
        { json: "Intro_Text", js: "Intro_Text", typ: u(r("PurpleIntroText"), "") },
        { json: "Example_Code", js: "Example_Code", typ: u(undefined, u(a(r("PurpleExampleCode")), r("FluffyExampleCode"))) },
        { json: "Body_Text", js: "Body_Text", typ: u(undefined, u(a(u(r("PurpleBodyText"), "")), r("BackgroundDetail"), "")) },
        { json: "attr", js: "attr", typ: u(undefined, r("DemonstrativeExampleAttr")) },
        { json: "References", js: "References", typ: u(undefined, r("DemonstrativeExampleReferences")) },
    ], false),
    "PurpleBodyText": o([
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("PurpleXHTML")) },
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, u(a(""), "")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:ol", js: "xhtml:ol", typ: u(undefined, r("PurpleXHTML")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("PurpleXHTMLDiv")) },
    ], false),
    "PurpleXHTMLDiv": o([
        { json: "xhtml:div", js: "xhtml:div", typ: u(a(""), 0, "") },
    ], false),
    "PurpleXHTML": o([
        { json: "xhtml:li", js: "xhtml:li", typ: a(r("XHTMLOlXHTMLLi")) },
    ], false),
    "XHTMLOlXHTMLLi": o([
        { json: "xhtml:div", js: "xhtml:div", typ: "" },
    ], false),
    "PurpleExampleCode": o([
        { json: "attr", js: "attr", typ: r("ExampleCodeAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("FluffyXHTMLDiv")), r("XHTMLDiv11"), "")) },
        { json: "xhtml:table", js: "xhtml:table", typ: u(undefined, r("XHTMLTableXHTMLTable")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, "") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("XHTMLOlElement")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "ExampleCodeAttr": o([
        { json: "@_Nature", js: "@_Nature", typ: r("PurpleNature") },
        { json: "@_Language", js: "@_Language", typ: u(undefined, r("Language")) },
    ], false),
    "FluffyXHTMLDiv": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("TentacledXHTMLDiv")), r("XHTMLDiv4"))) },
    ], false),
    "TentacledXHTMLDiv": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("StickyXHTMLDiv")) },
    ], false),
    "XHTMLDiv3": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("StickyXHTMLDiv")) },
    ], false),
    "XHTMLDiv2": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv3")) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "StickyXHTMLDiv": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("IndigoXHTMLDiv")), r("XHTMLDiv2"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "IndigoXHTMLDiv": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("IndecentXHTMLDiv")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv1": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("IndecentXHTMLDiv")) },
    ], false),
    "BraggadociousXHTMLDiv": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, a("")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a(r("XHTMLDiv1"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "MischievousXHTMLDiv": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: r("BraggadociousXHTMLDiv") },
        { json: "#text", js: "#text", typ: u(undefined, "") },
    ], false),
    "AmbitiousXHTMLDiv": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("CunningXHTMLDiv")), r("MischievousXHTMLDiv"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "IndecentXHTMLDiv": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(u(r("HilariousXHTMLDiv"), "")), r("AmbitiousXHTMLDiv"))) },
    ], false),
    "CunningXHTMLDiv": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("MagentaXHTMLDiv")) },
    ], false),
    "MagentaXHTMLDiv": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(a(""), "") },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("FriskyXHTMLDiv")) },
    ], false),
    "FriskyXHTMLDiv": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: r("FluffyXHTML") },
    ], false),
    "FluffyXHTML": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: a("") },
    ], false),
    "HilariousXHTMLDiv": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv4": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv5")), r("XHTMLDiv7"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv5": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv6")) },
    ], false),
    "XHTMLDiv6": o([
        { json: "xhtml:i", js: "xhtml:i", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv7": o([
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv8")), r("XHTMLDiv9"))) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv8": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
    ], false),
    "XHTMLDiv9": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv10")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLDiv10": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("StickyXHTMLDiv")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDiv11": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv12")), r("XHTMLDiv18"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLDiv12": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv13")), r("XHTMLDiv17"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv13": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv14")) },
    ], false),
    "XHTMLDiv14": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv15")) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLDiv15": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv16")) },
    ], false),
    "XHTMLDiv16": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: a("") },
    ], false),
    "XHTMLDiv17": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("FluffyXHTMLDiv")), r("StickyXHTMLDiv"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv18": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv19")), r("XHTMLDiv20"))) },
        { json: "xhtml:b", js: "xhtml:b", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv19": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a(r("XHTMLDiv14"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv20": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv21")), r("FluffyXHTMLDiv"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLDiv21": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv22")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv22": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("IndecentXHTMLDiv")), r("FluffyXHTMLDiv"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLTableXHTMLTable": o([
        { json: "xhtml:tr", js: "xhtml:tr", typ: a(r("PurpleXHTMLTr")) },
    ], false),
    "PurpleXHTMLTr": o([
        { json: "xhtml:th", js: "xhtml:th", typ: u(undefined, a("")) },
        { json: "xhtml:td", js: "xhtml:td", typ: u(undefined, a(u(r("TentacledXHTML"), ""))) },
    ], false),
    "TentacledXHTML": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: "" },
    ], false),
    "FluffyExampleCode": o([
        { json: "attr", js: "attr", typ: r("ExampleCodeAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(r("XHTMLDiv23"), "")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
        { json: "xhtml:b", js: "xhtml:b", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDiv23": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv24")), r("XHTMLDiv27"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv24": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv25")), r("XHTMLDiv26"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv25": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a(r("FluffyXHTMLDiv"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDiv26": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("IndecentXHTMLDiv")), r("IndecentXHTMLDiv"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv27": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv28")), r("XHTMLDiv29"))) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv28": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a(r("FluffyXHTMLDiv"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv29": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("FluffyXHTMLDiv")), r("XHTMLDiv30"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLDiv30": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv8")), r("XHTMLDiv31"))) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, a("")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv31": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv32")), r("IndecentXHTMLDiv"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
    ], false),
    "XHTMLDiv32": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv33")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv33": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: a("") },
        { json: "xhtml:i", js: "xhtml:i", typ: u(a(""), "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a(r("XHTMLDiv13"))) },
    ], false),
    "PurpleIntroText": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(a(""), "") },
    ], false),
    "DemonstrativeExampleReferences": o([
        { json: "Reference", js: "Reference", typ: r("ReferencesReferenceClass") },
    ], false),
    "ReferencesReferenceClass": o([
        { json: "attr", js: "attr", typ: r("FluffyAttr") },
    ], false),
    "FluffyAttr": o([
        { json: "@_External_Reference_ID", js: "@_External_Reference_ID", typ: "" },
    ], false),
    "DemonstrativeExampleAttr": o([
        { json: "@_Demonstrative_Example_ID", js: "@_Demonstrative_Example_ID", typ: "" },
    ], false),
    "PurpleDemonstrativeExample": o([
        { json: "Intro_Text", js: "Intro_Text", typ: u(r("FluffyIntroText"), "") },
        { json: "Body_Text", js: "Body_Text", typ: u(undefined, u(a(u(r("FluffyBodyText"), "")), r("BackgroundDetail"), "")) },
        { json: "Example_Code", js: "Example_Code", typ: u(undefined, u(a(r("TentacledExampleCode")), r("StickyExampleCode"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("DemonstrativeExampleAttr")) },
        { json: "References", js: "References", typ: u(undefined, r("DemonstrativeExampleReferences")) },
    ], false),
    "FluffyBodyText": o([
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("BodyTextXHTMLUL")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:table", js: "xhtml:table", typ: u(undefined, r("BodyTextXHTMLTable")) },
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv34")) },
    ], false),
    "XHTMLDiv34": o([
        { json: "xhtml:div", js: "xhtml:div", typ: a("") },
    ], false),
    "BodyTextXHTMLTable": o([
        { json: "xhtml:tr", js: "xhtml:tr", typ: u(a(r("FluffyXHTMLTr")), r("TentacledXHTMLTr")) },
    ], false),
    "FluffyXHTMLTr": o([
        { json: "xhtml:th", js: "xhtml:th", typ: u(undefined, a("")) },
        { json: "xhtml:td", js: "xhtml:td", typ: u(undefined, a(u(0, ""))) },
    ], false),
    "TentacledXHTMLTr": o([
        { json: "xhtml:td", js: "xhtml:td", typ: a("") },
    ], false),
    "BodyTextXHTMLUL": o([
        { json: "xhtml:li", js: "xhtml:li", typ: u(a(r("XHTMLOlXHTMLLi")), r("XHTMLOlXHTMLLi")) },
    ], false),
    "TentacledExampleCode": o([
        { json: "attr", js: "attr", typ: r("ExampleCodeAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(u(r("FluffyXHTMLDiv"), "")), r("XHTMLDiv35"), "")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("XHTMLOlElement")) },
        { json: "xhtml:table", js: "xhtml:table", typ: u(undefined, r("PurpleXHTMLTable")) },
    ], false),
    "XHTMLDiv35": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv36")), r("XHTMLDiv48"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv36": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv37")), r("XHTMLDiv38"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv37": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("HilariousXHTMLDiv")) },
    ], false),
    "XHTMLDiv38": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv39")), r("XHTMLDiv44"))) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv39": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("IndecentXHTMLDiv")), r("XHTMLDiv40"))) },
    ], false),
    "XHTMLDiv40": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv41")), r("XHTMLDiv42"))) },
    ], false),
    "XHTMLDiv41": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("TentacledXHTML")) },
    ], false),
    "XHTMLDiv42": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: r("XHTMLDiv43") },
    ], false),
    "XHTMLDiv43": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, a(r("IndecentXHTMLDiv"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(a(""), "") },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDiv44": o([
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("IndecentXHTMLDiv")), r("XHTMLDiv45"))) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDiv45": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv46")), r("XHTMLDiv14"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv46": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv47")) },
    ], false),
    "XHTMLDiv47": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(a(""), "") },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv48": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv36")), r("XHTMLDiv49"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:b", js: "xhtml:b", typ: u(undefined, "") },
    ], false),
    "XHTMLDiv49": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv36")), r("XHTMLDiv36"))) },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "PurpleXHTMLTable": o([
        { json: "xhtml:tr", js: "xhtml:tr", typ: u(undefined, u(a(r("StickyXHTMLTr")), r("IndigoXHTMLTr"))) },
        { json: "xhtml:tbody", js: "xhtml:tbody", typ: u(undefined, r("XHTMLT")) },
    ], false),
    "XHTMLT": o([
        { json: "xhtml:tr", js: "xhtml:tr", typ: a(r("TentacledXHTMLTr")) },
    ], false),
    "StickyXHTMLTr": o([
        { json: "xhtml:th", js: "xhtml:th", typ: u(undefined, a(r("XHTMLTh"))) },
        { json: "xhtml:td", js: "xhtml:td", typ: u(undefined, a(u(r("XHTMLTdClass"), ""))) },
    ], false),
    "XHTMLTdClass": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, "") },
    ], false),
    "IndigoXHTMLTr": o([
        { json: "xhtml:td", js: "xhtml:td", typ: a(u(r("FluffyXHTML"), "")) },
    ], false),
    "StickyExampleCode": o([
        { json: "attr", js: "attr", typ: r("ExampleCodeAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(u(r("StickyXHTMLDiv"), "")), r("XHTMLDiv50"), "")) },
        { json: "xhtml:table", js: "xhtml:table", typ: u(undefined, a(r("FluffyXHTMLTable"))) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
    ], false),
    "XHTMLDiv50": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(u(r("XHTMLDiv36"), "")), r("XHTMLDiv51"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv51": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("XHTMLDiv12")), r("XHTMLDiv52"))) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
    ], false),
    "XHTMLDiv52": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("XHTMLDivAttr")) },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:i", js: "xhtml:i", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, u(a(r("IndecentXHTMLDiv")), r("StickyXHTMLDiv"))) },
    ], false),
    "FluffyXHTMLTable": o([
        { json: "xhtml:tbody", js: "xhtml:tbody", typ: r("XHTMLTbody") },
    ], false),
    "XHTMLTbody": o([
        { json: "xhtml:tr", js: "xhtml:tr", typ: a(r("FluffyXHTMLTr")) },
    ], false),
    "FluffyIntroText": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, u(a(""), "")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, "") },
        { json: "xhtml:table", js: "xhtml:table", typ: u(undefined, u(a(r("XHTMLTableXHTMLTable")), r("XHTMLT"))) },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, a(r("XHTMLOlElement"))) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("IntroTextXHTMLDiv")) },
    ], false),
    "IntroTextXHTMLDiv": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:br", js: "xhtml:br", typ: a("") },
        { json: "xhtml:div", js: "xhtml:div", typ: a(r("XHTMLDiv8")) },
    ], false),
    "DetectionMethods": o([
        { json: "Detection_Method", js: "Detection_Method", typ: u(a(r("DetectionMethodElement")), r("PurpleDetectionMethod")) },
    ], false),
    "DetectionMethodElement": o([
        { json: "Method", js: "Method", typ: r("Method") },
        { json: "Description", js: "Description", typ: u(r("PurpleDescription"), "") },
        { json: "Effectiveness", js: "Effectiveness", typ: u(undefined, r("DetectionMethodEffectiveness")) },
        { json: "attr", js: "attr", typ: u(undefined, r("DetectionMethodAttr")) },
        { json: "Effectiveness_Notes", js: "Effectiveness_Notes", typ: u(undefined, "") },
    ], false),
    "PurpleDescription": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(undefined, u(a(""), "")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv53")) },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("XHTMLOlElement")) },
    ], false),
    "XHTMLDiv53": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: u(a(r("XHTMLDivEnum")), r("XHTMLDivEnum")) },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(a(r("PurpleXHTMLUL")), r("PurpleXHTMLUL")) },
    ], false),
    "PurpleXHTMLUL": o([
        { json: "xhtml:li", js: "xhtml:li", typ: u(a(""), "") },
    ], false),
    "DetectionMethodAttr": o([
        { json: "@_Detection_Method_ID", js: "@_Detection_Method_ID", typ: "" },
    ], false),
    "PurpleDetectionMethod": o([
        { json: "Method", js: "Method", typ: r("Method") },
        { json: "Description", js: "Description", typ: u(r("FluffyDescription"), "") },
        { json: "Effectiveness", js: "Effectiveness", typ: u(undefined, r("DetectionMethodEffectiveness")) },
        { json: "Effectiveness_Notes", js: "Effectiveness_Notes", typ: u(undefined, "") },
        { json: "attr", js: "attr", typ: u(undefined, r("DetectionMethodAttr")) },
    ], false),
    "FluffyDescription": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(a(""), "") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("XHTMLOlElement")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLDiv54")) },
    ], false),
    "XHTMLDiv54": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: r("XHTMLDivEnum") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: r("XHTMLDivXHTMLULClass") },
    ], false),
    "XHTMLDivXHTMLULClass": o([
        { json: "xhtml:li", js: "xhtml:li", typ: "" },
    ], false),
    "ExtendedDescriptionClass": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(a(""), "") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, u(a(r("FluffyXHTMLUL")), r("TentacledXHTMLUL"))) },
        { json: "xhtml:ol", js: "xhtml:ol", typ: u(undefined, r("XHTMLOlElement")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:br", js: "xhtml:br", typ: u(undefined, a("")) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("ExtendedDescriptionXHTMLDiv")) },
    ], false),
    "ExtendedDescriptionXHTMLDiv": o([
        { json: "attr", js: "attr", typ: r("XHTMLDivAttr") },
        { json: "xhtml:div", js: "xhtml:div", typ: a("") },
    ], false),
    "FluffyXHTMLUL": o([
        { json: "xhtml:li", js: "xhtml:li", typ: a(u(r("XHTMLLiClass"), "")) },
    ], false),
    "XHTMLLiClass": o([
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:b", js: "xhtml:b", typ: "" },
    ], false),
    "TentacledXHTMLUL": o([
        { json: "xhtml:li", js: "xhtml:li", typ: a(u(r("PurpleXHTMLLi"), "")) },
    ], false),
    "PurpleXHTMLLi": o([
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("XHTMLLiClass")) },
        { json: "#text", js: "#text", typ: u(undefined, "") },
        { json: "xhtml:b", js: "xhtml:b", typ: u(undefined, "") },
    ], false),
    "FunctionalAreas": o([
        { json: "Functional_Area", js: "Functional_Area", typ: u(a(""), "") },
    ], false),
    "ModesOfIntroduction": o([
        { json: "Introduction", js: "Introduction", typ: u(a(r("IntroductionElement")), r("PurpleIntroduction")) },
    ], false),
    "IntroductionElement": o([
        { json: "Phase", js: "Phase", typ: r("PhaseElement") },
        { json: "Note", js: "Note", typ: u(undefined, u(r("NoteNote"), "")) },
    ], false),
    "NoteNote": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(a(""), "") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, r("XHTMLOlElement")) },
    ], false),
    "PurpleIntroduction": o([
        { json: "Phase", js: "Phase", typ: r("PhaseElement") },
        { json: "Note", js: "Note", typ: u(undefined, u(r("NoteClass"), "")) },
    ], false),
    "Notes": o([
        { json: "Note", js: "Note", typ: u(a(r("BackgroundDetail")), r("BackgroundDetail")) },
    ], false),
    "ObservedExamples": o([
        { json: "Observed_Example", js: "Observed_Example", typ: u(a(r("ObservedExampleElement")), r("ObservedExampleElement")) },
    ], false),
    "ObservedExampleElement": o([
        { json: "Reference", js: "Reference", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "Link", js: "Link", typ: "" },
    ], false),
    "PotentialMitigations": o([
        { json: "Mitigation", js: "Mitigation", typ: u(a(r("MitigationElement")), r("PurpleMitigation")) },
    ], false),
    "MitigationElement": o([
        { json: "Phase", js: "Phase", typ: u(undefined, u(a(r("PhaseElement")), r("PhaseElement"))) },
        { json: "Description", js: "Description", typ: u(r("TentacledDescription"), "") },
        { json: "Strategy", js: "Strategy", typ: u(undefined, r("Strategy")) },
        { json: "attr", js: "attr", typ: u(undefined, r("MitigationAttr")) },
        { json: "Effectiveness_Notes", js: "Effectiveness_Notes", typ: u(undefined, "") },
        { json: "Effectiveness", js: "Effectiveness", typ: u(undefined, r("PurpleEffectiveness")) },
    ], false),
    "TentacledDescription": o([
        { json: "xhtml:p", js: "xhtml:p", typ: u(a(""), "") },
        { json: "xhtml:ul", js: "xhtml:ul", typ: u(undefined, u(a(r("StickyXHTMLUL")), r("XHTMLOlElement"))) },
        { json: "xhtml:div", js: "xhtml:div", typ: u(undefined, r("ExtendedDescriptionXHTMLDiv")) },
    ], false),
    "StickyXHTMLUL": o([
        { json: "xhtml:li", js: "xhtml:li", typ: a(u(r("FluffyXHTMLLi"), "")) },
    ], false),
    "FluffyXHTMLLi": o([
        { json: "#text", js: "#text", typ: "" },
        { json: "xhtml:ul", js: "xhtml:ul", typ: r("XHTMLOlElement") },
    ], false),
    "MitigationAttr": o([
        { json: "@_Mitigation_ID", js: "@_Mitigation_ID", typ: "" },
    ], false),
    "PurpleMitigation": o([
        { json: "Phase", js: "Phase", typ: u(undefined, u(a(r("PhaseElement")), r("PhaseElement"))) },
        { json: "Description", js: "Description", typ: u(r("BackgroundDetail"), "") },
        { json: "Effectiveness", js: "Effectiveness", typ: u(undefined, r("DetectionMethodEffectiveness")) },
        { json: "Effectiveness_Notes", js: "Effectiveness_Notes", typ: u(undefined, "") },
        { json: "Strategy", js: "Strategy", typ: u(undefined, r("Strategy")) },
        { json: "attr", js: "attr", typ: u(undefined, r("MitigationAttr")) },
    ], false),
    "CweDictionaryReferences": o([
        { json: "Reference", js: "Reference", typ: u(a(r("ReferenceElement")), r("ReferenceElement")) },
    ], false),
    "ReferenceElement": o([
        { json: "attr", js: "attr", typ: r("TentacledAttr") },
    ], false),
    "TentacledAttr": o([
        { json: "@_External_Reference_ID", js: "@_External_Reference_ID", typ: "" },
        { json: "@_Section", js: "@_Section", typ: u(undefined, "") },
    ], false),
    "RelatedAttackPatterns": o([
        { json: "Related_Attack_Pattern", js: "Related_Attack_Pattern", typ: u(a(r("RelatedAttackPatternElement")), r("RelatedAttackPatternElement")) },
    ], false),
    "RelatedAttackPatternElement": o([
        { json: "attr", js: "attr", typ: r("RelatedAttackPatternAttr") },
    ], false),
    "RelatedAttackPatternAttr": o([
        { json: "@_CAPEC_ID", js: "@_CAPEC_ID", typ: "" },
    ], false),
    "RelatedWeaknesses": o([
        { json: "Related_Weakness", js: "Related_Weakness", typ: u(a(r("RelatedWeaknessElement")), r("RelatedWeaknessElement")) },
    ], false),
    "RelatedWeaknessElement": o([
        { json: "attr", js: "attr", typ: r("RelatedWeaknessAttr") },
    ], false),
    "RelatedWeaknessAttr": o([
        { json: "@_Nature", js: "@_Nature", typ: r("FluffyNature") },
        { json: "@_CWE_ID", js: "@_CWE_ID", typ: "" },
        { json: "@_View_ID", js: "@_View_ID", typ: "" },
        { json: "@_Ordinal", js: "@_Ordinal", typ: u(undefined, r("Ordinal")) },
        { json: "@_Chain_ID", js: "@_Chain_ID", typ: u(undefined, "") },
    ], false),
    "TaxonomyMappings": o([
        { json: "Taxonomy_Mapping", js: "Taxonomy_Mapping", typ: u(a(r("TaxonomyMappingElement")), r("TaxonomyMappingElement")) },
    ], false),
    "TaxonomyMappingElement": o([
        { json: "attr", js: "attr", typ: r("TaxonomyMappingAttr") },
        { json: "Entry_Name", js: "Entry_Name", typ: u(undefined, "") },
        { json: "Entry_ID", js: "Entry_ID", typ: u(undefined, u(0, "")) },
        { json: "Mapping_Fit", js: "Mapping_Fit", typ: u(undefined, r("MappingFit")) },
    ], false),
    "TaxonomyMappingAttr": o([
        { json: "@_Taxonomy_Name", js: "@_Taxonomy_Name", typ: r("TaxonomyName") },
    ], false),
    "WeaknessOrdinalities": o([
        { json: "Weakness_Ordinality", js: "Weakness_Ordinality", typ: u(a(r("WeaknessOrdinalityElement")), r("WeaknessOrdinalityElement")) },
    ], false),
    "WeaknessOrdinalityElement": o([
        { json: "Ordinality", js: "Ordinality", typ: r("Ordinal") },
        { json: "Description", js: "Description", typ: u(undefined, "") },
    ], false),
    "CweDictionaryAttr": o([
        { json: "@_Abstraction", js: "@_Abstraction", typ: r("Abstraction") },
        { json: "@_Structure", js: "@_Structure", typ: r("Structure") },
        { json: "@_Status", js: "@_Status", typ: r("Status") },
        { json: "ID", js: "ID", typ: "" },
        { json: "Name", js: "Name", typ: "" },
    ], false),
    "AffectedResourceElement": [
        "CPU",
        "File or Directory",
        "Memory",
        "System Process",
    ],
    "PurpleClass": [
        "Assembly",
        "Client Server",
        "Cloud Computing",
        "Compiled",
        "Embedded",
        "Hardware Description Language",
        "ICS/OT",
        "Interpreted",
        "macOS",
        "Microcomputer",
        "Mobile",
        "Not Language-Specific",
        "Not OS-Specific",
        "Not Technology-Specific",
        "System on Chip",
        "Unix",
        "Web Based",
        "Windows",
        "Workstation",
    ],
    "Prevalence": [
        "Often",
        "Rarely",
        "Sometimes",
        "Undetermined",
    ],
    "FluffyClass": [
        "Not Architecture-Specific",
    ],
    "Type": [
        "Applicable Platform",
        "Content",
        "Feedback",
        "Maintenance",
        "Mapping",
        "Other",
        "Relationship",
        "Research Gap",
        "Terminology",
        "Theoretical",
    ],
    "Style": [
        "margin-left:1em;",
    ],
    "ImpactElement": [
        "Alter Execution Logic",
        "Bypass Protection Mechanism",
        "DoS: Amplification",
        "DoS: Crash, Exit, or Restart",
        "DoS: Instability",
        "DoS: Resource Consumption (CPU)",
        "DoS: Resource Consumption (Memory)",
        "DoS: Resource Consumption (Other)",
        "Execute Unauthorized Code or Commands",
        "Gain Privileges or Assume Identity",
        "Hide Activities",
        "Modify Application Data",
        "Modify Files or Directories",
        "Modify Memory",
        "Other",
        "Quality Degradation",
        "Read Application Data",
        "Read Files or Directories",
        "Read Memory",
        "Reduce Maintainability",
        "Reduce Performance",
        "Reduce Reliability",
        "Unexpected State",
        "Varies by Context",
    ],
    "Likelihood": [
        "High",
        "Low",
        "Medium",
        "Unknown",
    ],
    "ScopeElement": [
        "Access Control",
        "Accountability",
        "Authentication",
        "Authorization",
        "Availability",
        "Confidentiality",
        "Integrity",
        "Non-Repudiation",
        "Other",
    ],
    "ModificationImportance": [
        "Critical",
    ],
    "ModificationName": [
        "CWE Content Team",
        "David Remahl",
        "Eric Dalci",
        "Jasper van Woudenberg",
        "KDM Analytics",
        "Sean Eidemiller",
        "Tom Stracener",
    ],
    "ModificationOrganization": [
        "Apple",
        "CWE Team",
        "Cigital",
        "KDM Analytics",
        "MITRE",
        "Riscure",
        "Veracode",
    ],
    "SubmissionOrganization": [
        "Accellera IP Security Assurance (IPSA) Working Group",
        "Accellera Systems Initiative",
        "Bosch",
        "CWE Content Team",
        "Cigital",
        "Cloud Security Alliance",
        "Fortify Software",
        "Intel Corporation",
        "MITRE",
        "Purdue University",
        "Riscure",
        "Silicon Valley Bank",
        "Tennessee Technological University",
        "The Intel Corporation",
        "Tortuga Logic",
        "Trend Micro",
        "Veracode",
        "Wells Fargo",
    ],
    "Language": [
        "ASP.NET",
        "C",
        "HTML",
        "JSP",
        "Java",
        "JavaScript",
        "C#",
        "Objective-C",
        "Other",
        "Perl",
        "PHP",
        "Pseudocode",
        "C++",
        "Python",
        "Rust",
        "SQL",
        "Shell",
        "Verilog",
        "x86 Assembly",
        "XML",
    ],
    "PurpleNature": [
        "Attack",
        "Bad",
        "Good",
        "Informative",
        "Mitigation",
        "bad",
        "Result",
    ],
    "XHTMLTh": [
        "Field description",
        "Register",
    ],
    "XHTMLDivEnum": [
        "Cost effective for partial coverage:",
        "Highly cost effective:",
    ],
    "DetectionMethodEffectiveness": [
        "High",
        "Limited",
        "Moderate",
        "Opportunistic",
        "SOAR Partial",
    ],
    "Method": [
        "Architecture or Design Review",
        "Automated Analysis",
        "Automated Dynamic Analysis",
        "Automated Static Analysis",
        "Automated Static Analysis - Binary or Bytecode",
        "Automated Static Analysis - Source Code",
        "Black Box",
        "Dynamic Analysis with Automated Results Interpretation",
        "Dynamic Analysis with Manual Results Interpretation",
        "Formal Verification",
        "Fuzzing",
        "Manual Analysis",
        "Manual Dynamic Analysis",
        "Manual Static Analysis",
        "Manual Static Analysis - Binary or Bytecode",
        "Manual Static Analysis - Source Code",
        "Other",
        "Simulation / Emulation",
        "White Box",
    ],
    "PhaseElement": [
        "Architecture and Design",
        "Build and Compilation",
        "Bundling",
        "Distribution",
        "Documentation",
        "Implementation",
        "Installation",
        "Integration",
        "Manufacturing",
        "Operation",
        "Patching and Maintenance",
        "Policy",
        "Requirements",
        "System Configuration",
        "Testing",
    ],
    "PurpleEffectiveness": [
        "Defense in Depth",
        "Discouraged Common Practice",
        "High",
        "Limited",
        "Moderate",
        "None",
    ],
    "Strategy": [
        "Attack Surface Reduction",
        "Compilation or Build Hardening",
        "Enforcement by Conversion",
        "Environment Hardening",
        "Firewall",
        "Input Validation",
        "Language Selection",
        "Libraries or Frameworks",
        "Output Encoding",
        "Parameterization",
        "Refactoring",
        "Resource Limitation",
        "Sandbox or Jail",
        "Separation of Privilege",
    ],
    "FluffyNature": [
        "CanAlsoBe",
        "CanPrecede",
        "ChildOf",
        "PeerOf",
        "Requires",
        "StartsWith",
    ],
    "Ordinal": [
        "Indirect",
        "Primary",
        "Resultant",
    ],
    "MappingFit": [
        "CWE More Abstract",
        "CWE More Specific",
        "Exact",
        "Imprecise",
    ],
    "TaxonomyName": [
        "CERT C Secure Coding",
        "CLASP",
        "Landwehr",
        "OMG ASCMM",
        "OMG ASCPEM",
        "OMG ASCRM",
        "OMG ASCSM",
        "OWASP Top Ten 2004",
        "OWASP Top Ten 2007",
        "PLOVER",
        "SEI CERT Oracle Coding Standard for Java",
        "SEI CERT Perl Coding Standard",
        "Software Fault Patterns",
        "7 Pernicious Kingdoms",
        "The CERT Oracle Secure Coding Standard for Java (2011)",
        "WASC",
    ],
    "Abstraction": [
        "Base",
        "Class",
        "Compound",
        "Pillar",
        "Variant",
    ],
    "Status": [
        "Deprecated",
        "Draft",
        "Incomplete",
        "Stable",
    ],
    "Structure": [
        "Chain",
        "Composite",
        "Simple",
    ],
};
