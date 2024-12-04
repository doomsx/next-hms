import { getUsers } from "@/lib/db";
import React from "react";
import Datatable from "./iv_table";
import { columns } from "./columns";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

async function fetchIVData() {
  const employees = await getUsers();

  const ivData = await fetch(`${LINK}/influenza-vaccination`).then((res) =>
    res.json()
  );

  const ivMap = new Map(
    ivData.map((iv: { user_id: number }) => [iv.user_id, iv])
  );

  const data = employees.map((e) => ({
    id: e.id,
    employee_id: e.employee_id,
    name: e.name,
    age: e.age,
    sex: e.sex,
    iv: ivMap.has(e.id) ? "Yes" : "No",
  }));

  return data;
}
async function page() {
  const data = await fetchIVData();

  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl font-bold">
        Influenza Vaccine
      </h1>
      <div className="container mx-auto py-10">
        <Datatable columns={columns} data={data} />
      </div>
    </>
  );
}

export default page;
