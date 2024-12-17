import dynamic from "next/dynamic";
const Datatable = dynamic(() => import("@/app/employees/Datatable"));
import { columns, Employees } from "@/app/employees/columns";
import { calculateAge, Data, formatName } from "@/lib/db";
import ProtectedRoute from "../../components/ProtectedRoute";
const LINK = process.env.NEXT_PUBLIC_API_LINK;

const Page = async () => {
  const response = await fetch(`${LINK}/users?status_remarks=ACTIVE`);

  if (!response.ok) {
    throw new Error(
      `Error fetching data: ${response.status} ${response.statusText}`
    );
  }

  const res = await response.json();

  const data = res.map((user: Data) => ({
    id: String(user.id),
    employee_id: user.employee_id,
    name: formatName(
      user.last_name,
      user.first_name,
      user.middle_name,
      user.name_extn
    ),
    age: calculateAge(user.birthdate),
    sex: user.sex,
  }));

  console.log(data);
  return (
    <ProtectedRoute>
      <section className="mt-[60px]">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Employees
        </h1>
        <div className="container mx-auto py-10">
          <Datatable columns={columns} data={data} />
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Page;
