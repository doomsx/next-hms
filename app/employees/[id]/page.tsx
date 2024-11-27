import React from "react";
import { Separator } from "@radix-ui/react-separator";
import Personal_Information from "./Personal_Information";
import Medical_Health_status from "./Medical_Health_status";
import Covid_Vaccines from "./Covid_Vaccines";
import Other_Vaccines from "./Other_Vaccines";
import Chief_Complaints from "./Chief_Complaints";
import Vital_Signs from "./Vital_Signs";
import Height_and_Weight from "./Height_and_Weight";
import Diagnosis_and_Treatment_Plan from "./Diagnosis_and_Treatment_Plan";
const LINK = process.env.API_LINK;

const page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
  const response = await fetch(`${LINK}/users/${id}`);
  const data = await response.json();
  const emergency_data = await fetch(`${LINK}/users/${id}/emergency-contacts`);
  const eData = await emergency_data.json();
  const medData = await fetch(`${LINK}/users/${id}/medical-health-status`).then(
    (response) => response.json()
  );

  return (
    <div>
      <h1 className="text-center text-2xl md:text-5xl font-black">
        Health Status Record
      </h1>
      <section className="container mx-10 md:mx-auto space-y-5 border my-5 md:my-10 rounded-md shadow-md">
        <Personal_Information data={data} eData={eData[0]} />
        <Separator orientation="vertical" />
        <Medical_Health_status medData={medData} />
        <Separator orientation="vertical" />
        <Covid_Vaccines />
        <Separator orientation="vertical" />
        <Other_Vaccines />
        <Separator orientation="vertical" />
        <Chief_Complaints />
        <Separator orientation="vertical" />
        <Vital_Signs />
        <Separator orientation="vertical" />
        <Height_and_Weight />
        <Separator orientation="vertical" />
        <Diagnosis_and_Treatment_Plan />
      </section>
    </div>
  );
};

export default page;
