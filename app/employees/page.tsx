import Datatable from "@/app/employees/Datatable";
import { columns } from "@/app/employees/columns";
import ProtectedRoute from "@/components/ProtectedRoute";
import { calculateAge } from "@/lib/db";
import { EmployeeData, Employees } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

const Page = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_LINK}/users?status_remarks=ACTIVE`
    );

    if (!response.ok) {
        throw new Error(
            `Error fetching data: ${response.status} ${response.statusText}`
        );
    }

    const res = await response.json();

    const data: Employees[] = res.map(
        (user: EmployeeData
        ) => ({
            id: String(user.id),
            employee_id: user.employee_id,
            name: `${user.last_name}, ${user.first_name} ${user.middle_name || ""} ${user.name_extn === "N/A" ? "" : user.name_extn
                }`,
            age: calculateAge(user.birthdate),
            sex: user.sex,
        })
    );

    return (
        <ProtectedRoute>
            <section className="mt-[60px]">
                <h1 className="text-center text-2xl md:text-5xl font-bold">
                    Employees
                </h1>
                <div className="container mx-auto py-10">
                    <Datatable columns={columns as ColumnDef<Employees>[]} data={data} />
                </div>
            </section>
        </ProtectedRoute>
    );
};

export default Page;
