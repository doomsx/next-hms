import React from "react";
const LINK = process.env.NEXT_PUBLIC_API_LINK;
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

export type ape = {
  year: string;
  date: string;
  urinalysis: boolean;
  cbc: boolean;
  lipid_profile: boolean;
  fbs: boolean;
  hba1c: boolean;
  bua: boolean;
  bun: boolean;
  creatinine: boolean;
  sgot: boolean;
  sgpt: boolean;
  chest_x_ray: boolean;
  ecg: boolean;
  wau: boolean;
  pse: boolean;
  psa: boolean;
  breast_ultrasound: boolean;
  hscrp: boolean;
  random_drug_testing: boolean;
};
async function Ape_Data({ id }: { id: string }) {
  const response = await fetch(
    `${LINK}/users/${id}/annual-physical-examination`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (!data || data.length < 1) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {data.map((data: ape, index: number) => (
        <div key={index} className="my-10 border p-3 rounded-sm">
          <p>Year: {data.year}</p>
          <p>Date: {data.date}</p>

          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center gap-1">
                {data.urinalysis ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Urinalisis</span>
              </div>

              <div className="flex items-center gap-1">
                {data.cbc ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>CBC</span>
              </div>

              <div className="flex items-center gap-1">
                {data.lipid_profile ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Lipid Profile</span>
              </div>

              <div className="flex items-center gap-1">
                {data.fbs ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Fasting Blood Sugar</span>
              </div>

              <div className="flex items-center gap-1">
                {data.hba1c ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>HBA1C</span>
              </div>

              <div className="flex items-center gap-1">
                {data.bua ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Blood Uric Acid</span>
              </div>

              <div className="flex items-center gap-1">
                {data.bun ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Blood Urea Nitrogen</span>
              </div>

              <div className="flex items-center gap-1">
                {data.creatinine ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Creatinine</span>
              </div>

              <div className="flex items-center gap-1">
                {data.sgot ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>SGOT</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {data.sgpt ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>SGPT</span>
              </div>

              <div className="flex items-center gap-1">
                {data.chest_x_ray ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Chest X-Ray</span>
              </div>

              <div className="flex items-center gap-1">
                {data.ecg ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>ECG (12 leads)</span>
              </div>

              <div className="flex items-center gap-1">
                {data.wau ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Whole Abdominal Ultrasound</span>
              </div>

              <div className="flex items-center gap-1">
                {data.pse ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Pap Smear Examination</span>
              </div>

              <div className="flex items-center gap-1">
                {data.psa ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Prostate Specific Anitgen</span>
              </div>

              <div className="flex items-center gap-1">
                {data.breast_ultrasound ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Breast Ultrasound</span>
              </div>

              <div className="flex items-center gap-1">
                {data.hscrp ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>HSCRP</span>
              </div>

              <div className="flex items-center gap-1">
                {data.random_drug_testing ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-green-400 text-lg" />
                  </span>
                )}
                <span>Random Drug Testing</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ape_Data;
