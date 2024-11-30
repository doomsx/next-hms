import React from "react";
import { others } from "./columns";
import Others_Table from "./others_table";
import { getOtherVaccines } from "@/lib/db";

const Others_Vaccine = async ({ id }: { id: string }) => {
    const data = await getOtherVaccines(id)

    return (
        <div>
            <h1 className="text-center text-xl md:text-2xl font-black">
                Other Vaccines
            </h1>
            <Others_Table columns={others} data={data} />
        </div>
    );
};

export default Others_Vaccine;
