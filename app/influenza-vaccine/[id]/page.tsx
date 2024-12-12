import {
  getInfuenzaVaccinationById,
  getLatestHeightAndWeight,
  getUserEmergencyContact,
  getUserID,
} from "@/lib/db";
import React from "react";
import Personal_Information from "./Personal_Information";
import Iv_Table from "./iv_table";
import { iv } from "./columns";

async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const data = await getUserID(id);
  const eData = await getUserEmergencyContact(id);
  const latestHAW = await getLatestHeightAndWeight(
    id,
    data.sex,
    data.birthdate
  );

  const ivData = await getInfuenzaVaccinationById(id);

  return (
    <div className="mt-[60px]">
      <h1 className="text-center text-2xl md:text-5xl font-black">
        Influenza Vaccination Status
      </h1>
      <section className="container mx-10 md:mx-auto space-y-5 border my-5 md:my-10 rounded-md shadow-md">
        <Personal_Information data={data} eData={eData} latestHAW={latestHAW} />

        <Iv_Table columns={iv} data={ivData} id={id} />
      </section>
    </div>
  );
}

export default page;
