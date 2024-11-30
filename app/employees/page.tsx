import dynamic from "next/dynamic";
const Datatable = dynamic(() => import("@/app/employees/Datatable"));
import { columns } from "@/app/employees/columns";
import { getUsers } from "@/lib/db";


const Page = async () => {
    const data = await getUsers();
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
