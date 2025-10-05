// mocks/ClientMocks.ts
import {
    GeneralClientData,
    Income,
    DeductionsAndCredits,
    PaymentsAndRetention,
    FormsAndDocuments,
    ComplianceAndDates,
    Observations,
    Client
} from '../../types/GeneralClient.types';

// -----------------------------
// Mock GeneralClientData
export const mockGeneralClientData: GeneralClientData = {
    clientType: 'Individual',
    firstName: 'Agustin',
    lastName: 'Cardozo',
    companyName: 'OnEnergy',
    ssn: '123-45-6789',
    address: '123 Main St, Miami, FL 33101',
    residencyStatus: 'Florida',
    email: 'agustin@example.com',
    phone: '+1-305-555-1234',
    birthDate: '1990-05-15',
    maritalStatus: 'Single',
    hasDisability: false,
    clientFlag: 'A person with family problems',
    label: 'Datos Generales del Cliente'
};

// -----------------------------
// Mock Income
export const mockIncome: Income = {
    salary: 55000,
    interestIncome: 200,
    dividends: 500,
    selfEmployedIncome: 15000,
    foreignInvestments: 0,
    otherIncome: 1000,
    label: 'Datos de Gestion'
};

// -----------------------------
// Mock Deductions and Credits
export const mockDeductionsAndCredits: DeductionsAndCredits = {
    deductionType: 'Standard',
    childAndDependentCareCredit: 0,
    earnedIncomeTaxCredit: 0,
    saverCredit: 200,
    premiumTaxCredit: 0,
    retirementContribution: 6000,
    employerRetirementPlan: 5000,
    label: 'C'
};

// -----------------------------
// Mock Payments and Retention
export const mockPaymentsAndRetention: PaymentsAndRetention = {
    estimatedPayments: 0,
    retention: 8000,
    balanceOrRefund: 500,
    label: 'D'
};

// -----------------------------
// Mock Forms and Documents
export const mockFormsAndDocuments: FormsAndDocuments = {
    w2: new File([], "w2.pdf"),
    form1099: new File([], "1099.pdf"),
    form1095: new File([], "1095A.pdf"),
    form5498_1099R: new File([], "5498_1099R.pdf"),
    form2441_W10: new File([], "2441_W10.pdf"),
    otherForms: [new File([], "other_form.pdf")],
    label: 'E'
};

// -----------------------------
// Mock Compliance and Dates
export const mockComplianceRecords: ComplianceAndDates[] = [
    {
        fiscalYear: 2024,
        dueDate: new Date('2025-04-15'),
        complianceStatus: false,
    },
    {
        fiscalYear: 2023,
        dueDate: new Date('2024-04-15'),
        complianceStatus: true,
    },
];

// -----------------------------
// Mock Observations
export const mockObservations: Observations[] = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",

    },
];

// -----------------------------
// Mock Full Client
export const mockClient: Client = {
    generalData: mockGeneralClientData,
    income: mockIncome,
    deductionsAndCredits: mockDeductionsAndCredits,
    paymentsAndRetention: mockPaymentsAndRetention,
    documents: mockFormsAndDocuments,
    complianceRecords: mockComplianceRecords,
    observations: mockObservations
};
