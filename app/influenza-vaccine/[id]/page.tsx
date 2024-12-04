import { getUserEmergencyContact, getUserID } from "@/lib/db";
import React from "react";
import Personal_Information from "./Personal_Information";

async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const data = await getUserID(id);
  const eData = await getUserEmergencyContact(id);

  return (
    <div>
      <h1 className="text-center text-2xl md:text-5xl font-black">
        Influenza Vaccination Status
      </h1>
      <section className="container mx-10 md:mx-auto space-y-5 border my-5 md:my-10 rounded-md shadow-md">
        <Personal_Information data={data} eData={eData} />
      </section>
    </div>
  );
}

export default page;