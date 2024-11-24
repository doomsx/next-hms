import Link from "next/link";
import React from "react";

function page() {
    return <>
        <h1 className="text-center text-2xl md:text-5xl font-bold">Employees</h1>
        <Link href="/employees/1/">User 1</Link>
    </>;


}

export default page;
