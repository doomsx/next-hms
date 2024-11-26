import React from "react";
import Covid_Table from "./covid_table";
import { covid } from "./columns";
const LINK = process.env.API_LINK;

const Covid_Vaccines = async ({ id }: { id: string }) => {
  const data = await fetch(`${LINK}/users/${id}/covid-vaccines`).then(
    (response) => response.json()
  );

  console.log(data);

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-black">
        Covid Vaccines
      </h1>
      <Covid_Table columns={covid} data={data} />
    </div>
  );
};

export default Covid_Vaccines;
