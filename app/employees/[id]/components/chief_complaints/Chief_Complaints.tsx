import React from "react";
import Chief_Table from "./chief_table";
const LINK = process.env.NEXT_PUBLIC_API_LINK;
import { complaint } from "./columns";

const Chief_Complaints = async ({ id }: { id: string }) => {
  const data = await fetch(`${LINK}/users/${id}/chief-complaints`).then(
    (response) => response.json()
  );

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-black">
        Chief Complaints
      </h1>
      <Chief_Table columns={complaint} data={data} />
    </div>
  );
};

export default Chief_Complaints;
