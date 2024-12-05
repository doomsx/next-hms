import React from "react";
import ApeDataClient from "./ape_data_client";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

export default async function ApeDataServer({ id }: { id: string }) {
  const response = await fetch(
    `${LINK}/users/${id}/annual-physical-examination`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return <ApeDataClient data={data} />;
}
