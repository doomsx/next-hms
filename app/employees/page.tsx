import Datatable from "@/app/employees/Datatable";
import { columns, Employees } from "@/app/employees/columns";
import { calculateAge } from "@/lib/db";
import { ColumnDef } from "@tanstack/react-table";

const Page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/users?status_remarks=ACTIVE`);

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
    }

    const res = await response.json();

    const data: Employees[] = res.map((user: any) => ({
        id: String(user.id),
        employee_id: user.employee_id,
        name: `${user.last_name}, ${user.first_name} ${user.middle_name || ""} ${user.name_extn || ""}`,
        age: calculateAge(user.birthdate),
        sex: user.sex,
    }));

    return (
        <section className="mt-[60px]">
            <h1 className="text-center text-2xl md:text-5xl font-bold">Employees</h1>
            <div className="container mx-auto py-10">
                <Datatable columns={columns as ColumnDef<Employees>[]} data={data} />
            </div>
        </section>
    );
};

export default Page;
