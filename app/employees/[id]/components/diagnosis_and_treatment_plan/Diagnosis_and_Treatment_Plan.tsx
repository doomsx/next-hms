import React from "react";
import { diag } from "./columns.";
import Diag_Table from "./diag_table";
import { getDiagnosisAndTreatmentPlan } from "@/lib/db";

const Diagnosis_and_Treatment_Plan = async ({ id }: { id: string }) => {
    const data = await getDiagnosisAndTreatmentPlan(id)

    return (
        <div>
            <h1 className="text-center text-xl md:text-2xl font-black">
                Diagnosis and Treatment Plan
            </h1>
            <Diag_Table columns={diag} data={data} />
        </div>
    );
};

export default Diagnosis_and_Treatment_Plan;
