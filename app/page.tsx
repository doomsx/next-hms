import { getUsers } from "@/lib/db";

export default async function Home() {
  const data = await getUsers();
  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl font-bold">Dashboard</h1>
      {/* charts */}
      <p>Total Active Employees : {data.length}</p>
    </>
  );
}
