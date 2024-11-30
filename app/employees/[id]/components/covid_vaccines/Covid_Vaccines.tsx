import React from "react";
import Covid_Table from "./covid_table";
import { covid } from "./columns";
import { getCovidVaccines } from "@/lib/db";

const Covid_Vaccines = async ({ id }: { id: string }) => {
    const data = await getCovidVaccines(id)

    return (
        <div>
            <h1 className="text-center text-xl md:text-2xl font-black">
                Covid Vaccines
            </h1>
            <Covid_Table columns={covid} data={data} id={id} />
        </div>
    );
};

export default Covid_Vaccines;
