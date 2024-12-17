import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";

function page() {
  return (
    <ProtectedRoute>
      <section className="mt-[60px]">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Medicines
        </h1>
      </section>
    </ProtectedRoute>
  );
}

export default page;
