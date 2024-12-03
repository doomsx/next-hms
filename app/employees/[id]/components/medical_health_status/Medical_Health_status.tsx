import React from "react";
import Medical_Status_Data from "./Medical_Status_Data";

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
};

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
      allergies: "",
      foodAllergy: "",
      medicineAllergy: "",
      maintenance: "",
      maintenanceDesc: "",
      mentalProblem: "",
      mentalDesc: "",
      surgery: "",
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
