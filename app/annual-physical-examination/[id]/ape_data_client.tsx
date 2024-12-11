"use client";

import React, { useState } from "react";
import EditApeDialog, { Ape } from "./edit_dialog";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import AddApeDialog from "./add_dialog";
import DeleteDialog from "./delete_dialog";
const LINK = process.env.NEXT_PUBLIC_API_LINK;

export default function ApeDataClient({ data }: { data: Ape[] }) {
  const { id: id } = useParams();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Ape | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(
    data.length > 0
      ? Array.from(new Set(data.map((item) => item.year))).sort((a, b) =>
          b.localeCompare(a)
        )[0]
      : null
  );
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedApe, setSelectedApe] = useState<Ape | null>(null); // Track selected record for editing
  const years = Array.from(new Set(data.map((item) => item.year))).sort(
    (a, b) => b.localeCompare(a)
  );

  const filteredData = data.filter((item) => item.year === selectedYear);

  const handleEdit = (ape: Ape) => {
    setSelectedApe(ape);
    setIsEditOpen(true);
  };

  const handleSave = async (updatedApe: Ape) => {
    console.log("Updated Ape:", updatedApe);
    const response = await fetch(
      `${LINK}/users/${id}/annual-physical-examination/${updatedApe.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedApe),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update Data");
    }

    setIsEditOpen(false);
    window.location.reload();
    setSelectedApe(null);
  };

  const handleAdd = async (newApe: Ape) => {
    const response = await fetch(
      `${LINK}/users/${id}/annual-physical-examination`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApe),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add Data");
    }

    setIsAddOpen(false); // Close the add dialog
    window.location.reload(); // Reload the page
  };

  const handleDeleteClick = (ape: Ape) => {
    setItemToDelete(ape);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete) return;

    const response = await fetch(
      `${LINK}/users/${id}/annual-physical-examination/${itemToDelete.id}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      console.error("Failed to delete item");
      return;
    }

    setIsDeleteOpen(false);
    setItemToDelete(null);
    window.location.reload(); // Optionally, handle state update without reloading
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="year-select" className="mr-2 font-medium">
            Select Year:
          </label>
          <select
            id="year-select"
            value={selectedYear || ""}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border p-2 rounded"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Button onClick={() => setIsAddOpen(true)}>Add New Data</Button>
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div
            key={item.year}
            className="container mb-6 p-4 border rounded shadow"
          >
            <p className="font-semibold">Year: {item.year}</p>
            <p>Date: {item.date}</p>
            <div className=" container grid grid-cols-1 md:grid-cols-2">
              <div className="space-y-1 mb-5">
                <div className="flex items-center gap-1">
                  {item.urinalysis ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Urinalysis</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.cbc ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Complete Blood Count</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.lipid_profile ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Lipid Profile</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.fbs ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Fasting Blood Sugar</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.hba1c ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>HBA1C</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.bua ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Blood Uric Acid</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.bun ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Blood Urea Nitrogen</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.creatinine ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Creatinine</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.sgot ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>SGOT</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  {item.sgpt ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>SGPT</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.chest_x_ray ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Chest X Ray</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.ecg ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>ECG (12 leads)</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.wau ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Whole Abdominal Ultrasound</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.pse ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Pap Smear Examination</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.psa ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Prostate Specific Antigen</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.breast_ultrasound ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Breast Ultrasound</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.hscrp ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>HSCRP</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.random_drug_testing ? (
                    <span>
                      <IoIosCheckmarkCircle className="text-green-400 text-lg" />
                    </span>
                  ) : (
                    <span>
                      <IoIosCloseCircle className="text-red-500 text-lg" />
                    </span>
                  )}
                  <span>Random Drug Testing</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end gap-2">
              <Button
                variant="destructive"
                onClick={() => handleDeleteClick(item)}
              >
                Delete
              </Button>
              <Button
                variant="default"
                onClick={() => handleEdit(item)}
                className="bg-blue-500 hover:bg-blue-400"
              >
                Edit
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-500">No data available.</p>
      )}

      {selectedApe && (
        <EditApeDialog
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSave}
          data={selectedApe}
        />
      )}

      {isAddOpen && (
        <AddApeDialog
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          onSave={handleAdd}
        />
      )}

      {isDeleteOpen && itemToDelete && (
        <DeleteDialog
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onDelete={handleDeleteConfirm}
          itemName={itemToDelete.year}
        />
      )}
    </div>
  );
}
