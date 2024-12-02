import React from "react";
import { vital } from "./columns";
import Vital_Table from "./vital_table";
import { getVitalSigns } from "@/lib/db";

const Vital_Signs = async ({ id }: { id: string }) => {
  const res = await getVitalSigns(id);

  const data = res.map((data) => {
    return {
      id: data.id,
      date: data.date,
      bloodPressure: `${data.bloodPressureSystolic}/${data.bloodPressureDiastolic}`,
      heartRate: data.heartRate,
      oxygenSaturation: data.oxygenSaturation,
      respiratoryRate: data.respiratoryRate,
      temperature: data.temperature,
    };
  });

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-black">
        Vital Signs
      </h1>
      <Vital_Table columns={vital} data={data} id={id} />
    </div>
  );
};

export default Vital_Signs;
