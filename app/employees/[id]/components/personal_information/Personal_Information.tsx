import React from "react";

type Data = {
  id: number;
  employee_id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  name_extn: string;
  birthdate: string;
  p_house_block_lot: string;
  p_street: string;
  p_subdivision_village: string;
  p_barangay: string;
  p_city_municipality: string;
  p_province: string;
  age: number;
  sex: string;
  mobile_no: string;
  height: number;
  weight: number;
};

type EmergencyData = {
  length?: number;
  fullname: string;
  relationship: string;
  contact_no: string;
};

const Personal_Information = ({
  data,
  eData,
}: {
  data: Data;
  eData: EmergencyData;
}) => {
  if (eData === undefined) {
    eData = {
      length: 0,
      fullname: "N/A",
      relationship: "N/A",
      contact_no: "N/A",
    };
  }

  const calculateAge = (birthdate: string) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };
  return (
    <div className="space-y-3 md:space-y-10 py-3 md:py-10">
      <div className="data-divider">
        <div className="space-y-3 md:w-1/6">
          <p className="data-title">Employee ID: </p>
          <p className="data">{data.employee_id}</p>
        </div>

        <div className="space-y-3 md:w-full">
          <p className="data-title">Name: </p>
          <p className="data">
            {data.last_name}, {data.first_name} {data.middle_name}{" "}
            {data.name_extn === "N/A" ? "" : data.name_extn}
          </p>
        </div>
      </div>

      <div className="w-full md:px-10 space-y-3">
        <p className="data-title">Address: </p>
        <p className="data">
          {`${
            data.p_house_block_lot === undefined ||
            data.p_house_block_lot === "N/A"
              ? ""
              : data.p_house_block_lot
          } 
          ${
            data.p_street === "N/A" || data.p_street === undefined
              ? ""
              : data.p_street
          } 
          ${
            data.p_subdivision_village === "N/A" ||
            data.p_subdivision_village === undefined
              ? ""
              : data.p_subdivision_village
          } 
          ${
            data.p_barangay === "" || data.p_barangay === undefined
              ? ""
              : data.p_barangay
          } 
          ${
            data.p_city_municipality === "" ||
            data.p_city_municipality === undefined
              ? ""
              : data.p_city_municipality
          } 
          ${
            data.p_province === "" || data.p_province === undefined
              ? ""
              : data.p_province
          }`}
        </p>
      </div>

      <div className="data-divider justify-center">
        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Birthdate: </p>
          <p className="data">{data.birthdate}</p>
        </div>

        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Age: </p>
          <p className="data">{calculateAge(data.birthdate)} years old</p>
        </div>

        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Sex: </p>
          <p className="data">{data.sex}</p>
        </div>
      </div>

      <div className="data-divider">
        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Contact Number: </p>
          <p className="data">{data.mobile_no}</p>
        </div>

        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Emergency Contact Person: </p>
          <p className="data ">
            {eData === undefined || eData.length === 0
              ? "N/A"
              : eData.fullname === undefined || eData.fullname === "N/A"
              ? "N/A"
              : eData.fullname}
            {eData === undefined || eData.length === 0
              ? ""
              : ` ${
                  eData.relationship === "N/A" ? "" : `(${eData.relationship})`
                }`}
          </p>
        </div>

        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Emergency Contact Number: </p>
          <p className="border-b w-full inline md:block">
            {eData.length === 0 ? "N/A" : eData.contact_no ?? "N/A"}
          </p>
        </div>
      </div>

      <div className="data-divider justify-center">
        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Height: </p>
          <p className="data">
            {data.height > 3 ? data.height : data.height * 100} (cm)
          </p>
        </div>

        <div className="space-y-3 md:w-1/3">
          <p className="data-title">Weight: </p>
          <p className="data">{data.weight} kg</p>
        </div>

        <div className="space-y-3 md:w-1/3">
          <p className="data-title">BMI: </p>
          <p className="data">N/A</p>
        </div>
      </div>
    </div>
  );
};

export default Personal_Information;
