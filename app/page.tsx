import { getUsers } from "@/lib/db";
import ProtectedRoute from "../components/ProtectedRoute";

export default async function Home() {
  const data = await getUsers();
  return (
    <ProtectedRoute>
      <section className="mt-[60px]">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Dashboard
        </h1>
        {/* charts */}
        <div className="container">
          <p>Total Active Employees : {data.length}</p>
        </div>
      </section>
    </ProtectedRoute>
  );
}
