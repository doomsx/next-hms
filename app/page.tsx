"use client";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/db";
import ProtectedRoute from "../components/ProtectedRoute";
import { Employees, totalMhs } from "@/lib/types";
import Loading from "./annual-physical-examination/loading";
const LINK = process.env.NEXT_PUBLIC_API_LINK;

export default function Home() {
    const [data, setData] = useState<Employees[]>([]); // Explicitly define Employee[] as the type
    const [mhs, setMhs] = useState([]);
    const [apeData, setApeData] = useState([]);
    const [ivData, setIvData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch initial data
        const fetchData = async () => {
            try {
                const users = await getUsers();
                setData(users);

                const mhsRes = await fetch(`${LINK}/medical-health-status`);
                const mhsData = await mhsRes.json();
                setMhs(mhsData);

                const apeRes = await fetch(`${LINK}/annual-physical-examination`);
                const apeResData = await apeRes.json();
                setApeData(apeResData);

                const ivRes = await fetch(`${LINK}/influenza-vaccination`);
                const ivResData = await ivRes.json();
                setIvData(ivResData);

                setLoading(false); // Data is loaded, stop loading
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <Loading />;

    const male = data.filter((d) => d.sex.toUpperCase() === "MALE");
    const female = data.filter((d) => d.sex.toUpperCase() === "FEMALE");

    const totalMhsCount = mhs.filter(
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

    const currentYear = new Date().getFullYear();
    const apeLength = apeData.filter(
        (data: { year: string }) => data.year === String(currentYear)
    );

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
                <div className="container mt-5 flex justify-center items-center gap-10">
                    <p className="box bg-red-500 text-center">
                        Employees with Medical Health Condition
                        <span>{totalMhsCount.length}</span>
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
