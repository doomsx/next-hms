import React from "react";
import Personal_Information from "./Personal_Information";
const LINK = process.env.API_LINK;

const page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
  const response = await fetch(`${LINK}/users/${id}`);
  const data = await response.json();

  const emergency_data = await fetch(`${LINK}/users/${id}/emergency-contacts`);
  const eData = await emergency_data.json();

  return (
    <div>
      <h1 className="text-center text-2xl md:text-5xl font-black">
        Health Status Record
      </h1>
      <section className="container mx-10 md:mx-auto space-y-5 border my-5 md:my-10 rounded-md shadow-md">
        <Personal_Information data={data} eData={eData[0]} />
      </section>
    </div>
  );
};

export default page;
