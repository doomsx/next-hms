"use client"; // Mark as client-side for React hooks

import React, { useState, useEffect } from "react";
import Datatable from "./iv_table";
import { columns } from "./columns";
import { getUsers } from "@/lib/db";
import ProtectedRoute from "../../components/ProtectedRoute";
import Loading from "./loading";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

async function fetchIVData() {
    try {
        const employees = await getUsers();
        const bulkIVData = await fetch(`${LINK}/influenza-vaccination`).then(
            (res) => res.json()
        );

        const ivMap = new Map(
            bulkIVData.map((iv: { user_id: number }) => [iv.user_id, iv])
        );

        const data = await Promise.all(
            employees.map(async (e) => {
                let iv = ivMap.has(e.id);

                if (!iv) {
                    const individualIV = await fetch(
                        `${LINK}/users/${e.id}/influenza-vaccination`
                    )
                        .then((res) => res.json())
                        .catch(() => null);
                    iv = individualIV && individualIV.length > 0;
                }

                return {
                    id: String(e.id),
                    employee_id: e.employee_id,
                    name: e.name,
                    age: e.age,
                    sex: e.sex,
                    iv: iv ? "Yes" : "No",
                };
            })
        );

        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

type fetchedData = {
    id: string;
    employee_id: string;
    name: string;
    age: number;
    sex: string;
    iv: string;
};
const Page = () => {
    const [data, setData] = useState<fetchedData[]>([]); // Use state to store the data
    const [loading, setLoading] = useState(true);

    // Fetch the data when the component mounts
    useEffect(() => {
        const getData = async () => {
            setLoading(true); // Show loading message while fetching data
            const fetchedData = await fetchIVData();
            setData(fetchedData); // Update state with fetched data
            setLoading(false); // Stop loading once data is fetched
        };

        getData();
    }, []); // Empty array ensures this runs once on component mount

    if (loading) return <Loading />; // Show loading message while data is being fetched

    return (
        <ProtectedRoute>
            <section className="mt-[60px]">
                <h1 className="text-center text-2xl md:text-5xl font-bold">
                    Influenza Vaccine
                </h1>
                <div className="container mx-auto py-10">
                    <Datatable columns={columns} data={data} />
                </div>
            </section>
        </ProtectedRoute>
    );
};

export default Page;
