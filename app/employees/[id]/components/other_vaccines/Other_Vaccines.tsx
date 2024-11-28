import React from "react";
const LINK = process.env.API_LINK;
import { others } from "./columns";
import Others_Table from "./others_table";

const Others_Vaccine = async ({ id }: { id: string }) => {
  const data = await fetch(`${LINK}/users/${id}/other-vaccines`).then(
    (response) => response.json()
  );

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
