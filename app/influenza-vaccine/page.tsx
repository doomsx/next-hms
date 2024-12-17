import { getUsers } from "@/lib/db";
import React from "react";
import Datatable from "./iv_table";
import { columns } from "./columns";
import ProtectedRoute from "../../components/ProtectedRoute";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

async function fetchIVData() {
  try {
    const employees = await getUsers();

    const bulkIVData = await fetch(`${LINK}/influenza-vaccination`).then(
      (res) => res.json()
    );

    const ivMap = new Map(
      bulkIVData.map((iv: { user_id: number }) => [iv.user_id, iv])
    );

    const data = await Promise.all(
      employees.map(async (e) => {
        let iv = ivMap.has(e.id);

        if (!iv) {
          const individualIV = await fetch(
            `${LINK}/users/${e.id}/influenza-vaccination`
          )
            .then((res) => res.json())
            .catch(() => null);
          iv = individualIV && individualIV.length > 0;
        }

        return {
          id: e.id,
          employee_id: e.employee_id,
          name: e.name,
          age: e.age,
          sex: e.sex,
          iv: iv ? "Yes" : "No",
        };
      })
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
async function page() {
  const data = await fetchIVData();

  return (
    <ProtectedRoute>
      <section className="mt-[60px]">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Influenza Vaccine
        </h1>
        <div className="container mx-auto py-10">
          <Datatable columns={columns} data={data} />
        </div>
      </section>
    </ProtectedRoute>
  );
}

export default page;
