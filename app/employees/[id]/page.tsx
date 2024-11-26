import React from "react";
const LINK = process.env.API_LINK;

const page = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`${LINK}/users/${params.id}`);
  const data = await response.json();

  const emergency_data = await fetch(
    `${LINK}/users/${params.id}/emergency-contacts`
  );
  const eData = await emergency_data.json();

  return (
    <div>
      <p>Employee ID: {data.employee_id}</p>
      <p>
        Name: {data.last_name}, {data.first_name} {data.middle_name}{" "}
        {data.name_extn === "N/A" ? "" : data.name_extn}
      </p>
      <p>Birthdate: {data.birthdate}</p>
      <p>Age: {data.age} years old</p>
      <p>Sex: {data.sex}</p>
      <p>Contact Number: {data.mobile_no}</p>
      <p>
        Emergency Contact Person:{" "}
        {eData.length === 0 ? "N/A" : eData[0].fullname}
        {eData.length === 0 ? "" : ` (${eData[0].relationship})`}
      </p>
      <p>
        Emergency Contact Number:{" "}
        {eData.length === 0 ? "N/A" : eData.contact_no}
      </p>

      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </div>
  );
};

export default page;
