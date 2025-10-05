// Dropdown types
export type ClientType = 'Individual' | 'Company' | 'Partnership' | 'NonResident';
export type ResidencyStatus = 'Florida' | 'Delaware' | 'Other';
export type MaritalStatus = 'Single' | 'Married' | 'HOH' | 'Widow';
export type DeductionType = 'Standard' | 'Itemized';

// General client data
export interface GeneralClientData {
    clientType: ClientType;
    firstName: string;
    lastName: string;
    companyName?: string; // Only for companies
    ssn?: string;
    identificationNumber?: string; // Alternative if no SSN
    address: string;
    residencyStatus: ResidencyStatus;
    email?: string;
    phone?: string;
    birthDate?: string; // For individuals
    incorporationDate?: string; // For companies
    maritalStatus?: MaritalStatus;
    hasDisability?: boolean;
    clientFlag?: string;
    label?: string;
}

// Client income
export interface Income {
    salary: number;
    interestIncome: number;
    dividends: number;
    selfEmployedIncome: number;
    foreignInvestments: number;
    otherIncome: number;
    label?: string;
}

// Deductions and credits
export interface DeductionsAndCredits {
    deductionType: DeductionType;
    childAndDependentCareCredit: number;
    earnedIncomeTaxCredit: number;
    saverCredit: number;
    premiumTaxCredit: number;
    retirementContribution: number; // IRA, Roth
    employerRetirementPlan: number; // 401(k), 403(b), etc.
    label?: string;
}

// Payments and retention
export interface PaymentsAndRetention {
    estimatedPayments: number;
    retention: number;
    balanceOrRefund: number;
    label?: string;
}

// Forms and attached documents
export interface FormsAndDocuments {
    w2?: File;
    form1099?: File;
    form1095?: File;
    form5498_1099R?: File;
    form2441_W10?: File;
    otherForms?: File[];
    label?: string;
}

// Compliance and important dates
export interface ComplianceAndDates {
    fiscalYear: number;
    dueDate: Date;
    complianceStatus: boolean;
    label?: string;
}

// Additional observations
export interface Observations {
    text: string;
    label?: string;
}

// ----------------------------------------
// Full client interface
export interface Client {
    generalData?: Partial<GeneralClientData>;
    income?: Partial<Income>;
    deductionsAndCredits?: Partial<DeductionsAndCredits>;
    paymentsAndRetention?: Partial<PaymentsAndRetention>;
    documents?: Partial<FormsAndDocuments>;
    complianceRecords?: ComplianceAndDates[];
    observations?: Observations[];
}

