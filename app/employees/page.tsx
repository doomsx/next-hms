import React from "react";
import Datatable from "@/app/employees/Datatable";
import { columns, Employees } from "@/app/employees/columns";

async function getData(): Promise<Employees[]> {
  return [
    {
      id: 1,
      employeeId: 1,
      name: "Doe, John Smith Jr.",
      age: 21,
      sex: "Male",
    },
    {
      id: 2,
      employeeId: 2,
      name: "Doe, Mark Smith",
      age: 22,
      sex: "Male",
    },
    {
      id: 3,
      employeeId: 2,
      name: "Doe, Mark Smith",
      age: 22,
      sex: "Male",
    },
    {
      id: 4,
      employeeId: 2,
      name: "Doe, Mark Smith",
      age: 22,
      sex: "Male",
    },
    {
      id: 5,
      employeeId: 2,
      name: "Doe, Mark Smith",
      age: 22,
      sex: "Male",
    },
  ];
}

const page = async () => {
  const data = await getData();

  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl font-bold">Employees</h1>
      <div className="container mx-auto py-10">
        <Datatable columns={columns} data={data} />
      </div>
    </>
  );
};

export default page;
