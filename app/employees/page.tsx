import dynamic from "next/dynamic";
const Datatable = dynamic(() => import("@/app/employees/Datatable"));
import { columns, Employees } from "@/app/employees/columns";
const LINK = process.env.API_LINK;

type Data = {
  id: number;
  employee_id: number;
  first_name: string;
  last_name: string;
middle_name: string;
  name_extn: string;
  age: number;
  sex: string;
  status_remarks: "ACTIVE" | "INACTIVE";
};

export async function getData(): Promise<Employees[]> {
  const result = await fetch(`${LINK}/users`);
  const data = await result.json();

  const filteredData = data.filter(
    (data: { status_remarks: "ACTIVE" | "INACTIVE" }) =>
      data.status_remarks === "ACTIVE"
  );

  return filteredData.map((data: Data) => {
    return {
      id: data.id,
      employee_id: data.employee_id,
      name: `${data.last_name}, ${data.first_name} ${
        data.middle_name === "N/A" ? "" : data.middle_name
      } ${data.name_extn === "N/A" ? "" : data.name_extn}`,
      age: data.age,
      sex: data.sex,
    };
  });
}

const Page = async () => {
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

export default Page;
