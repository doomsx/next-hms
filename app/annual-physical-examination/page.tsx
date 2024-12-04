import React from "react";
import Datatable from "./ape_table";
import { columns } from "./columns";
import { getUsers } from "@/lib/db";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

async function fetchAPEData() {
  // Fetch all users
  const employees = await getUsers();

  // Fetch all APE data in a single API call
  const apeData = await fetch(`${LINK}/annual-physical-examination`).then(
    (res) => res.json()
  );

  // Create a map of user ID to APE data for faster lookup
  const apeMap = new Map(
    apeData.map((ape: { user_id: number }) => [ape.user_id, ape])
  );

  // Process employee data
  const data = employees.map((e) => ({
    id: e.id,
    employee_id: e.employee_id,
    name: e.name,
    age: e.age,
    sex: e.sex,
    ape: apeMap.has(e.id) ? "Yes" : "No",
  }));

  return data;
}

const Page = async () => {
  const data = await fetchAPEData();

  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl font-bold">
        Annual Physical Examination
      </h1>
      <div className="container mx-auto py-10">
        <Datatable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Page;
