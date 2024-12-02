import React from "react";
import Chief_Table from "./chief_table";
import { complaint } from "./columns";
import { getChiefComplaints } from "@/lib/db";

const Chief_Complaints = async ({ id }: { id: string }) => {
  const data = await getChiefComplaints(id);

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-black">
        Chief Complaints
      </h1>
      <Chief_Table columns={complaint} data={data} id={id} />
    </div>
  );
};

export default Chief_Complaints;
