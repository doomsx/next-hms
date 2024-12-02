"use client";

import React from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { medDATA } from "./Medical_Health_status";
function Medical_Status_Data({ medData }: { medData: medDATA }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div>
      <div className="mt-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              {medData.arthritis ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Arthritis</span>
            </div>

            <div className="flex gap-1 items-center">
              {medData.asthma ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Asthma</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.bladderProblem ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Bladder Problem</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.diabetes ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Diabetes</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.heartProblem ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Heart Problem</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.hepatitis ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Hepatitis</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1">
              {medData.hiv ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">HIV</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.hypertension ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Hypertension</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.kidneyProblem ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Kidney Problem</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.liverProblem ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Liver Problem</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.thyroid ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Thyroid</span>
            </div>

            <div className="flex items-center gap-1">
              {medData.tuberculosis ? (
                <span>
                  <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                </span>
              ) : (
                <span>
                  <IoIosCloseCircle className="text-red-500 text-lg" />
                </span>
              )}
              <span className="text-base">Tuberculosis</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
              <div className="flex items-center gap-1">
                {medData.cancer ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-red-500 text-lg" />
                  </span>
                )}
                <span className="text-base">Cancer</span>
              </div>
              {medData.cancer && (
                <ul className="ml-5 list-disc">
                  <li>{medData.cancerDesc}</li>
                </ul>
              )}
            </div>

            <div className="">
              <div className="flex items-center gap-1">
                {medData.others ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-red-500 text-lg" />
                  </span>
                )}
                <span className="text-base">Others</span>
              </div>
              {medData.others && (
                <ul className="ml-5 list-disc">
                  <li>{medData.othersDesc}</li>
                </ul>
              )}
            </div>

            <div className="">
              <div className="flex items-center gap-1">
                {medData.allergies === "yes" ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-red-500 text-lg" />
                  </span>
                )}
                <span className="text-base">Allergies</span>
              </div>
              <ul>
                {medData.allergies === "yes" && (
                  <>
                    {medData.foodAllergy && (
                      <li className="ml-5 list-disc">
                        Food Allergy: {medData.foodAllergy}
                      </li>
                    )}
                    {medData.medicineAllergy && (
                      <li className="ml-5 list-disc">
                        Medicine Allergy: {medData.medicineAllergy}
                      </li>
                    )}
                  </>
                )}
              </ul>
            </div>

            <div className="">
              <div className="flex items-center gap-1">
                {medData.maintenance === "yes" ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-red-500 text-lg" />
                  </span>
                )}
                <span className="text-base">Maintenance</span>
              </div>
              <ul>
                {medData.maintenance === "yes" && (
                  <>
                    {medData.maintenanceDesc && (
                      <li className="ml-5 list-disc">
                        {medData.maintenanceDesc}
                      </li>
                    )}
                  </>
                )}
              </ul>
            </div>

            <div className="">
              <div className="flex items-center gap-1">
                {medData.mentalProblem === "yes" ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-red-500 text-lg" />
                  </span>
                )}
                <span className="text-base">Mental Problem</span>
              </div>
              <ul>
                {medData.mentalProblem === "yes" && (
                  <>
                    {medData.mentalDesc && (
                      <li className="ml-5 list-disc">{medData.mentalDesc}</li>
                    )}
                  </>
                )}
              </ul>
            </div>

            <div className="">
              <div className="flex items-center gap-1">
                {medData.surgery === "yes" ? (
                  <span>
                    <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                  </span>
                ) : (
                  <span>
                    <IoIosCloseCircle className="text-red-500 text-lg" />
                  </span>
                )}
                <span className="text-base">Surgery</span>
              </div>
              <ul>
                {medData.surgery === "yes" && (
                  <>
                    <li className="ml-5 list-disc">{medData.surgeryDesc}</li>
                    <li className="ml-5 list-disc">
                      {formatDate(medData.surgeryDate)}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button
          className="px-3 py-2 rounded-md border"
          onClick={() => console.log("hello world")}
        >
          Edit Record
        </button>
      </div>
    </div>
  );
}

export default Medical_Status_Data;
