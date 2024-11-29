import React from "react";
const LINK = process.env.NEXT_PUBLIC_API_LINK;
import { diag } from "./columns.";
import Diag_Table from "./diag_table";

const Diagnosis_and_Treatment_Plan = async ({ id }: { id: string }) => {
  const data = await fetch(
    `${LINK}/users/${id}/diagnosis-and-treatment-plan`
  ).then((response) => response.json());

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
