import { getUsers } from "@/lib/db";
import ProtectedRoute from "../components/ProtectedRoute";
import { totalMhs } from "@/lib/types";
const LINK = process.env.NEXT_PUBLIC_API_LINK;

export default async function Home() {
  const data = await getUsers();
  const male = data.filter((d) => d.sex.toUpperCase() === "MALE");
  const female = data.filter((d) => d.sex.toUpperCase() === "FEMALE");
  const mhs = await fetch(`${LINK}/medical-health-status`).then((res) =>
    res.json()
  );

  const totalMhs = mhs.filter(
    (data: totalMhs) =>
      data.asthma === true ||
      data.arthritis === true ||
      data.bladderProblem === true ||
      data.diabetes === true ||
      data.heartProblem === true ||
      data.hepatitis === true ||
      data.hiv === true ||
      data.hypertension === true ||
      data.kidneyProblem === true ||
      data.liverProblem === true ||
      data.thyroid === true ||
      data.tuberculosis === true ||
      data.cancer === true ||
      data.others === true ||
      data.allergies === "yes" ||
      data.maintenance === "yes" ||
      data.mentalProblem === "yes" ||
      data.surgery === "yes"
  );

  const apeRes = await fetch(`${LINK}/annual-physical-examination`);
  if (!apeRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const currentYear = new Date().getFullYear();
  const apeData = await apeRes.json();

  const apeLength = apeData.filter(
    (data: { year: string }) => data.year === String(currentYear)
  );

  const ivRes = await fetch(`${LINK}/influenza-vaccination`);
  if (!ivRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const ivData = await ivRes.json();

  const IvLength = ivData.filter(
    (data: { year: string }) => data.year === String(currentYear)
  );

  return (
    <ProtectedRoute>
      <section className="mt-[60px]">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Health Management System
        </h1>
        <div className="container mt-10 flex justify-center items-center gap-10">
          <p className="bg-green-500 box">
            Total Active Employees <span>{data.length}</span>
          </p>
          <p className="bg-blue-500 box">
            Male Employees
            <span>{male.length}</span>
          </p>
          <p className="bg-pink-500 box">
            Female Employees
            <span>{female.length}</span>
          </p>
        </div>
        <div className="container mt-5 flex  justify-center items-center gap-10">
          <p className="box bg-red-500 text-center">
            Employees with Medical Health Condition
            <span>{totalMhs.length}</span>
          </p>
          <p className="box bg-yellow-500 text-center">
            Annual Physical Examination ({currentYear})
            <span>{apeLength.length}</span>
          </p>
          <p className="box bg-green-500 text-center">
            Influenza Vaccination ({currentYear})<span>{IvLength.length}</span>
          </p>
        </div>
      </section>
    </ProtectedRoute>
  );
}
