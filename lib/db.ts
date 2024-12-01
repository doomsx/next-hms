const LINK = process.env.NEXT_PUBLIC_API_LINK
import { complaint_type } from "@/app/employees/[id]/components/chief_complaints/columns";
import { covid_type } from "@/app/employees/[id]/components/covid_vaccines/columns";
import { diag_type } from "@/app/employees/[id]/components/diagnosis_and_treatment_plan/columns.";
import { haw_type } from "@/app/employees/[id]/components/height_and_weight/columns";
import { others_type } from "@/app/employees/[id]/components/other_vaccines/columns";
import { vital_type } from "@/app/employees/[id]/components/vital_signs/columns";
import { Employees } from "@/app/employees/columns"

export type Data = {
    id: number;
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
    const response = await fetch(`${LINK}/users`)

    if (!response.ok) {
        throw new Error("Error fetching data")
    }
    const data = await response.json()

    const filteredData = data.filter(
        (data: { status_remarks: "ACTIVE" | "INACTIVE" }) =>
            data.status_remarks === "ACTIVE"
    );

    return filteredData.map((data: Data) => {
        return {
            id: data.id,
            employee_id: data.employee_id,
            name: `${data.last_name}, ${data.first_name} ${data.middle_name === "N/A" ? "" : data.middle_name
                } ${data.name_extn === "N/A" ? "" : data.name_extn}`,
            age: calculateAge(data.birthdate),
            sex: data.sex,
        };
    });
}

export const getUserID = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}

export const getUserEmergencyContact = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}/emergency-contacts`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}

export const getUserMedicalHealthStatus = async (id: string) => {
    const res = await fetch(`${LINK}/users/${id}/medical-health-status`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}

export const getCovidVaccines = async (id: string): Promise<covid_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/covid-vaccines`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}

export const getOtherVaccines = async (id: string): Promise<others_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/other-vaccines`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}
export const getChiefComplaints = async (id: string): Promise<complaint_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/chief-complaints`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}
export const getVitalSigns = async (id: string): Promise<vital_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/vital-signs`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}
export const Vital_Signs = async ({ id }: { id: string }): Promise<vital_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/vital-signs`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    const response = await res.json()

    return response.map(
        (data: {
            id: number;
            date: string;
            bloodPressureSystolic: number;
            bloodPressureDiastolic: number;
            heartRate: number;
            oxygenSaturation: number;
            respiratoryRate: number;
            temperature: number;
        }) => {
            return {
                id: data.id,
                date: data.date,
                bloodPressure: `${data.bloodPressureSystolic}/${data.bloodPressureDiastolic}`,
                heartRate: data.heartRate,
                oxygenSaturation: data.oxygenSaturation,
                respiratoryRate: data.respiratoryRate,
                temperature: data.temperature,
            };
        }
    );
}

export const getHeightAndWeight = async (id: string, sex: string, birthdate: string): Promise<haw_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/height-and-weight`)

    if (!res.ok) {
        throw new Error("Error Fetching Data")
    }

    const response = await res.json()

    return response.map(
        (d: { id: number; date: string; height: number; weight: number }) => {
            const { bmi, classification } = bmiConverter(
                d.height,
                d.weight,
                calculateAge(birthdate),
                sex
            );

            return {
                id: d.id,
                date: d.date,
                height: d.height,
                weight: d.weight,
                bmi: `${bmi} (${classification})`,
            };
        }
    );
}

export const getDiagnosisAndTreatmentPlan = async (id: string): Promise<diag_type[]> => {
    const res = await fetch(`${LINK}/users/${id}/diagnosis-and-treatment-plan`)

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return await res.json()
}
