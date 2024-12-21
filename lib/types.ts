export interface Ape {
    id?: number;
    year: string;
    date: string;
    urinalysis: boolean;
    cbc: boolean;
    lipid_profile: boolean;
    fbs: boolean;
    hba1c: boolean;
    bua: boolean;
    bun: boolean;
    creatinine: boolean;
    sgot: boolean;
    sgpt: boolean;
    chest_x_ray: boolean;
    ecg: boolean;
    wau: boolean;
    pse: boolean;
    psa: boolean;
    breast_ultrasound: boolean;
    hscrp: boolean;
    random_drug_testing: boolean;
}

export interface MHS {
    id: number;
    noCondition: boolean;
    arthritis: boolean;
    asthma: boolean;
    bladderProblem: boolean;
    diabetes: boolean;
    heartProblem: boolean;
    hepatitis: boolean;
    hiv: boolean;
    hypertension: boolean;
    kidneyProblem: boolean;
    liverProblem: boolean;
    thyroid: boolean;
    tuberculosis: boolean;
    cancer: boolean;
    cancerDesc: string;
    others: boolean;
    othersDesc: string;
    allergies: string;
    foodAllergy: string;
    medicineAllergy: string;
    maintenance: string;
    maintenanceDesc: string;
    mentalProblem: string;
    mentalDesc: string;
    surgery: string;
    surgeryDesc: string;
    surgeryDate: string;
}

export type totalMhs = {
    arthritis: boolean;
    asthma: boolean;
    bladderProblem: boolean;
    diabetes: boolean;
    heartProblem: boolean;
    hepatitis: boolean;
    hiv: boolean;
    hypertension: boolean;
    kidneyProblem: boolean;
    liverProblem: boolean;
    thyroid: boolean;
    tuberculosis: boolean;
    cancer: boolean;
    cancerDesc: string;
    others: boolean;
    othersDesc: string;
    allergies: "yes" | "no";
    foodAllergy: string;
    medicineAllergy: string;
    maintenance: "yes" | "no";
    maintenanceDesc: string;
    mentalProblem: "yes" | "no";
    mentalDesc: string;
    surgery: "yes" | "no";
    surgeryDesc: string;
    surgeryDate: string;
};

export type Vital = {
    id: number;
    date: string;
    bloodPressureSystolic: number;
    bloodPressureDiastolic: number;
    heartRate: number;
    oxygenSaturation: number;
    respiratoryRate: number;
    temperature: number;
};

export type Data = {
    id: string;
    employee_id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    name_extn: string;
    age: number;
    birthdate: string;
    sex: string;
    status_remarks: "ACTIVE" | "INACTIVE";
};

export type Employees = {
    id: string;
    employee_id: string;
    name: string;
    age: number;
    sex: string;
};

export type EmployeeData = {
    id: number;
    employee_id: number;
    last_name: string;
    first_name: string;
    middle_name: string;
    name_extn: string;
    birthdate: string;
    sex: string;
}

export type medDATA = {
    id: string | number | undefined;
    noCondition: boolean;
    arthritis: boolean;
    asthma: boolean;
    bladderProblem: boolean;
    diabetes: boolean;
    heartProblem: boolean;
    hepatitis: boolean;
    hiv: boolean;
    hypertension: boolean;
    kidneyProblem: boolean;
    liverProblem: boolean;
    thyroid: boolean;
    tuberculosis: boolean;
    cancer: boolean;
    cancerDesc: string;
    others: boolean;
    othersDesc: string;
    allergies: "yes" | "no";
    foodAllergy: string;
    medicineAllergy: string;
    maintenance: "yes" | "no";
    maintenanceDesc: string;
    mentalProblem: "yes" | "no";
    mentalDesc: string;
    surgery: "yes" | "no";
    surgeryDesc: string;
    surgeryDate: string;
};


export type covid_type = {
    id: number;
    date: string;
    brand: string;
};

export type others_type = {
    id: number;
    date: string;
    vaccine: string;
    brand: string;
};

export type PersonalInformation = {
    id: number;
    employee_id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    name_extn: string;
    birthdate: string;
    p_house_block_lot: string;
    p_street: string;
    p_subdivision_village: string;
    p_barangay: string;
    p_city_municipality: string;
    p_province: string;
    age: number;
    sex: string;
    mobile_no: string;
    height: number;
    weight: number;
    blood_type: string;
    civil_status: string;
};

export type EmergencyData = {
    length?: number;
    fullname: string;
    relationship: string;
    contact_no: string;
};

export type HAW = {
    height: number;
    weight: number;
    bmi: {
        bmi: number;
        classification: string;
    };
};
