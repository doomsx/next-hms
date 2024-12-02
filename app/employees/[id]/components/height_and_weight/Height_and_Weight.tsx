import React from "react";
import { haw } from "./columns";
import Haw_Table from "./haw_table";
import { getHeightAndWeight } from "@/lib/db";

const Height_and_Weight = async ({
  id,
  birthdate,
  sex,
}: {
  id: string;
  birthdate: string;
  sex: string;
}) => {
  const data = await getHeightAndWeight(id, sex, birthdate);

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-black">
        Height and Weight
      </h1>
      <Haw_Table data={data} columns={haw} id={id} />
    </div>
  );
};

export default Height_and_Weight;
