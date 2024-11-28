import React from "react";
const LINK = process.env.API_LINK;
import { vital } from "./columns";
import Vital_Table from "./vital_table";

const Vital_Signs = async ({ id }: { id: string }) => {
  const response = await fetch(`${LINK}/users/${id}/vital-signs`).then(
    (response) => response.json()
  );

  const data = response.map(
    (d: {
      id: number;
      date: string;
      bloodPressureSystolic: number;
      bloodPressureDiastolic: number;
      heartRate: number;
      oxygenSaturation: number;
      respiratoryRate: number;
      temperature: number;
    }) => {
      return {
        id: d.id,
        date: d.date,
        bloodPressure: `${d.bloodPressureSystolic}/${d.bloodPressureDiastolic}`,
        heartRate: d.heartRate,
        oxygenSaturation: d.oxygenSaturation,
        respiratoryRate: d.respiratoryRate,
        temperature: d.temperature,
      };
    }
  );
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
