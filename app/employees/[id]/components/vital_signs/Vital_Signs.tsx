import React from "react";
import { vital } from "./columns";
import Vital_Table from "./vital_table";
import { getVitalSigns } from "@/lib/db";

const Vital_Signs = async ({ id }: { id: string }) => {
    const data = await getVitalSigns(id)

    return (
        <div>
            <h1 className="text-center text-xl md:text-2xl font-black">
                Vital Signs
            </h1>
            <Vital_Table columns={vital} data={data} />
        </div>
    );
};

export default Vital_Signs;
