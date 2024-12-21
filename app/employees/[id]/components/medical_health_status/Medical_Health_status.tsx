import React from "react";
import Medical_Status_Data from "./Medical_Status_Data";
import { medDATA } from "@/lib/types";


const Medical_Health_status = ({ medData }: { medData: medDATA }) => {
    if (!medData) {
        medData = {
            id: undefined,
            noCondition: false,
            arthritis: false,
            asthma: false,
            bladderProblem: false,
            diabetes: false,
            heartProblem: false,
            hepatitis: false,
            hiv: false,
            hypertension: false,
            kidneyProblem: false,
            liverProblem: false,
            thyroid: false,
            tuberculosis: false,
            cancer: false,
            cancerDesc: "",
            others: false,
            othersDesc: "",
            allergies: "no",
            foodAllergy: "",
            medicineAllergy: "",
            maintenance: "no",
            maintenanceDesc: "",
            mentalProblem: "no",
            mentalDesc: "",
            surgery: "no",
            surgeryDesc: "",
            surgeryDate: "",
        };
    }

    return (
        <>
            <h1 className="text-center text-xl md:text-2xl font-black">
                Medical Health Status
            </h1>
            <Medical_Status_Data medData={medData} />
        </>
    );
};

export default Medical_Health_status;
