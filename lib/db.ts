const LINK = process.env.NEXT_PUBLIC_API_LINK;
import { complaint_type } from "@/app/employees/[id]/components/chief_complaints/columns";
import { covid_type } from "@/app/employees/[id]/components/covid_vaccines/columns";
import { diag_type } from "@/app/employees/[id]/components/diagnosis_and_treatment_plan/columns.";
import { haw_type } from "@/app/employees/[id]/components/height_and_weight/columns";
import { others_type } from "@/app/employees/[id]/components/other_vaccines/columns";
import { Data, Employees, MHS, Vital } from "./types";

export const calculateAge = (birthdate: string) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
};

export const bmiConverter = (
    height: number,
    weight: number,
    age: number,
    sex: string
) => {
    const hm = height / 100;
    const bmi = (weight / (hm * hm)).toFixed(2);
    let classification = "";

    // Classify for minors
    if (age < 18) {
        classification = "Refer to pediatrics";
    } else if (age >= 18 && age < 65) {
        // Classify based on sex for adults
        if (sex === "MALE") {
            if (Number(bmi) < 20) {
                classification = "Underweight";
            } else if (Number(bmi) >= 20 && Number(bmi) < 25) {
                classification = "Normal";
            } else if (Number(bmi) >= 25 && Number(bmi) < 30) {
                classification = "Overweight";
            } else if (Number(bmi) >= 30) {
                classification = "Obese";
            }
        } else if (sex === "FEMALE") {
            if (Number(bmi) < 19) {
                classification = "Underweight";
            } else if (Number(bmi) >= 19 && Number(bmi) < 25) {
                classification = "Normal";
            } else if (Number(bmi) >= 25 && Number(bmi) < 30) {
                classification = "Overweight";
            } else if (Number(bmi) >= 30) {
                classification = "Obese";
            }
        }
    } else {
        // For seniors (age >= 65)
        if (sex === "MALE") {
            if (Number(bmi) < 22) {
                classification = "Underweight";
            } else if (Number(bmi) >= 22 && Number(bmi) < 28) {
                classification = "Normal";
            } else if (Number(bmi) >= 28 && Number(bmi) < 32) {
                classification = "Overweight";
            } else if (Number(bmi) >= 32) {
                classification = "Obese";
            }
        } else if (sex === "FEMALE") {
            if (Number(bmi) < 22) {
                classification = "Underweight";
            } else if (Number(bmi) >= 22 && Number(bmi) < 28) {
                classification = "Normal";
            } else if (Number(bmi) >= 28 && Number(bmi) < 32) {
                classification = "Overweight";
            } else if (Number(bmi) >= 32) {
                classification = "Obese";
            }
        }
    }
    return { bmi, classification };
};

export const getUsers = async (): Promise<Employees[]> => {
    const response = await fetch(`${LINK}/users?status_remarks=ACTIVE`);

    if (!response.ok) {
        throw new Error(
            `Error fetching data: ${response.status} ${response.statusText}`
        );
    }

    const data = await response.json();

    return data.map((user: Data) => ({
        id: user.id.toString(),
        employee_id: user.employee_id,
        name: formatName(
            user.last_name,
            user.first_name,
            user.middle_name,
            user.name_extn
        ),
        age: calculateAge(user.birthdate),
        sex: user.sex,
    }));
};

export function formatName(
    lastName: string,
    firstName: string,
    middleName: string,
    nameExtn: string
): string {
    return `${lastName}, ${firstName}${middleName && middleName !== "N/A" ? ` ${middleName}` : ""
        }${nameExtn && nameExtn !== "N/A" ? ` ${nameExtn}` : ""}`;
}

export const getUserID = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    return await res.json();
};

export const getUserEmergencyContact = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}/emergency-contacts`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    return await res.json();
};

export const getUserMedicalHealthStatus = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}/medical-health-status`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response.map((d: MHS) => {
        return {
            id: d.id,
            noCondition: d.noCondition,
            arthritis: d.arthritis,
            asthma: d.asthma,
            bladderProblem: d.bladderProblem,
            diabetes: d.diabetes,
            heartProblem: d.heartProblem,
            hepatitis: d.hepatitis,
            hiv: d.hiv,
            hypertension: d.hypertension,
            kidneyProblem: d.kidneyProblem,
            liverProblem: d.liverProblem,
            thyroid: d.thyroid,
            tuberculosis: d.tuberculosis,
            cancer: d.cancer,
            cancerDesc: d.cancerDesc,
            others: d.others,
            othersDesc: d.othersDesc,
            allergies: d.allergies,
            foodAllergy: d.foodAllergy,
            medicineAllergy: d.medicineAllergy,
            maintenance: d.maintenance,
            maintenanceDesc: d.maintenanceDesc,
            mentalProblem: d.mentalProblem,
            mentalDesc: d.mentalDesc,
            surgery: d.surgery,
            surgeryDesc: d.surgeryDesc,
            surgeryDate: d.surgeryDate,
        };
    });
};

export const getCovidVaccines = async (id: string): Promise<covid_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/covid-vaccines`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((d: { id: number; date: string; brand: string }) => {
            return {
                id: d.id,
                date: formatDate(d.date),
                brand: d.brand,
            };
        });
};

export const getOtherVaccines = async (id: string): Promise<others_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/other-vaccines`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((d: { id: number; date: string; vaccine: string; brand: string }) => {
            return {
                id: d.id,
                date: formatDate(d.date),
                vaccine: d.vaccine,
                brand: d.brand,
            };
        });
};

export const getChiefComplaints = async (
    id: string
): Promise<complaint_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/chief-complaints`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((d: { id: number; date: string; complaint: string }) => {
            return {
                id: d.id,
                date: formatDate(d.date),
                complaint: d.complaint,
            };
        });
};

export const getVitalSigns = async (id: string): Promise<Vital[]> => {
    const res = await fetch(`${LINK}/users/${id}/vital-signs`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map(
            (d: {
                id: number;
                date: string;
                heartRate: number;
                bloodPressureSystolic: number;
                bloodPressureDiastolic: number;
                respiratoryRate: number;
                temperature: number;
                oxygenSaturation: number;
            }) => {
                return {
                    id: d.id,
                    date: formatDate(d.date),
                    heartRate: d.heartRate,
                    bloodPressureSystolic: d.bloodPressureSystolic,
                    bloodPressureDiastolic: d.bloodPressureDiastolic,
                    respiratoryRate: d.respiratoryRate,
                    temperature: d.temperature,
                    oxygenSaturation: d.oxygenSaturation,
                };
            }
        );
};

const calculateNormalWeightRange = (height: number, sex: string) => {
    const hm = (height / 100) * (height / 100);
    let minWeight, maxWeight;
    if (sex === "MALE") {
        minWeight = (20 * hm).toFixed(1);
        maxWeight = (24.9 * hm).toFixed(1);
    } else if (sex === "FEMALE") {
        minWeight = (19 * hm).toFixed(1);
        maxWeight = (24.9 * hm).toFixed(1);
    }
    return `${minWeight} kg - ${maxWeight} kg`;
};

export const getHeightAndWeight = async (
    id: string,
    sex: string,
    birthdate: string
): Promise<haw_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/height-and-weight`);

    if (!res.ok) {
        throw new Error("Error Fetching Data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        ) // Sort by date descending
        .map((d: { id: number; date: string; height: number; weight: number }) => {
            const { bmi, classification } = bmiConverter(
                d.height,
                d.weight,
                calculateAge(birthdate),
                sex
            );

            const recommendedWeight = calculateNormalWeightRange(d.height, sex);

            return {
                id: d.id,
                date: formatDate(d.date),
                height: d.height,
                weight: d.weight,
                bmi: `${bmi} (${classification})`,
                recommendedWeight: recommendedWeight,
            };
        });
};

export const getLatestHeightAndWeight = async (
    id: string,
    sex: string,
    birthdate: string
): Promise<haw_type | null> => {
    const res = await fetch(`${LINK}/users/${id}/height-and-weight`);
    const data = await getUserID(id);
    if (!res.ok) {
        throw new Error("Error Fetching Data");
    }

    const response = await res.json();

    if (!response || response.length === 0) {
        return null; // No data available
    }

    // Find the latest data by sorting by date descending and picking the first item
    const latest = response.sort(
        (a: { date: string }, b: { date: string }) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];

    const { bmi, classification } = bmiConverter(
        latest.height ?? data.height,
        latest.weight ?? data.weight,
        calculateAge(birthdate),
        sex
    );

    return {
        id: latest.id,
        date: latest.date,
        height: latest.height ?? data.height,
        weight: latest.weight ?? data.weight,
        bmi: {
            bmi: Number(bmi), // Pass the numeric BMI value
            classification: classification, // Pass the classification string
        },
    };
};

export const getDiagnosisAndTreatmentPlan = async (
    id: string
): Promise<diag_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/diagnosis-and-treatment-plan`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map(
            (d: {
                id: number;
                date: string;
                diagnosis: string;
                diagDetails: string;
                treatmentPlan: string;
                nurseNote: string;
            }) => {
                return {
                    id: d.id,
                    date: formatDate(d.date),
                    diagnosis: d.diagnosis,
                    diagDetails: d.diagDetails,
                    treatmentPlan: d.treatmentPlan,
                    nurseNote: d.nurseNote,
                };
            }
        );
};

export const getInfuenzaVaccinationById = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}/influenza-vaccination`);

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const response = await res.json();

    return response
        .sort(
            (a: { date: string }, b: { date: string }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((d: { id: number; year: string; date: string; brand: string }) => {
            return {
                id: d.id,
                year: d.year,
                date: d.date,
                brand: d.brand,
            };
        });
};
