"use client";

import React, { useState } from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

export type Ape = {
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

export default function ApeDataClient({ data }: { data: Ape[] }) {
  const [selectedYear, setSelectedYear] = useState<string | null>(
    data.length > 0 ? data[0].year : null
  );

  const years = Array.from(new Set(data.map((item) => item.year))).sort(
    (a, b) => b.localeCompare(a)
  );

  const filteredData = data.filter((item) => item.year === selectedYear);

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="year-select" className="mr-2 font-medium">
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear || ""}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div
            key={index}
            className="mb-10 mt-5 border py-5 px-10 rounded-sm shadow-md"
          >
            <p className="font-semibold">Year: {item.year}</p>
            <p>Date: {item.date}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="flex items-center gap-1">
                  {item.urinalysis ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Urinalysis</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.cbc ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>CBC</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.lipid_profile ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Lipid Profile</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.fbs ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Fasting Blood Sugar</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.hba1c ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>HBA1C</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.bua ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Blood Uric Acid</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.bun ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Blood Urea Nitrogen</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.creatinine ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Creatinine</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.sgot ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>SGOT</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {item.sgpt ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>SGPT</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.chest_x_ray ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Chest X-Ray</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.ecg ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>ECG</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.wau ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Whole Abdominal Ultrasound</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.pse ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Pap Smear Examination</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.psa ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Prostate Specific Antigen</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.breast_ultrasound ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Breast Ultrasound</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.hscrp ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>HSCRP</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.random_drug_testing ? (
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  ) : (
                    <IoIosCloseCircle className="text-red-400 text-lg" />
                  )}
                  <span>Random Drug Testing</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-500 text-lg font-semibold">
          No data available/recorded.
        </p>
      )}
    </div>
  );
}
