import React from "react";
import Datatable from "./ape_table";
import { columns } from "./columns";
import { getUsers } from "@/lib/db";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

async function fetchAPEData() {
  try {
    const employees = await getUsers();

    const bulkAPEData = await fetch(`${LINK}/annual-physical-examination`).then(
      (res) => res.json()
    );

    const apeMap = new Map(
      bulkAPEData.map((ape: { user_id: number }) => [ape.user_id, ape])
    );

    const data = await Promise.all(
      employees.map(async (e) => {
        let ape = apeMap.has(e.id);

        if (!ape) {
          const individualAPE = await fetch(
            `${LINK}/users/${e.id}/annual-physical-examination`
          )
            .then((res) => res.json())
            .catch(() => null);
          ape = individualAPE && individualAPE.length > 0;
        }

        return {
          id: e.id,
          employee_id: e.employee_id,
          name: e.name,
          age: e.age,
          sex: e.sex,
          ape: ape ? "Yes" : "No",
        };
      })
    );

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
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
