"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export type Ape = {
  year: string;
  date: string;
  urinalysis: boolean;
  cbc: boolean;
  lipid_profile: boolean;
  fbs: boolean;
  hba1c: boolean;
  bua: boolean;
  bun: boolean;
  creatinine: boolean;
  sgot: boolean;
  sgpt: boolean;
  chest_x_ray: boolean;
  ecg: boolean;
  wau: boolean;
  pse: boolean;
  psa: boolean;
  breast_ultrasound: boolean;
  hscrp: boolean;
  random_drug_testing: boolean;
  id: number;
};

type EditApeDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedApe: Ape) => void;
  data: Ape;
};

const EditApeDialog: React.FC<EditApeDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  data,
}) => {
  const [formState, setFormState] = useState<Ape>(data);

  useEffect(() => {
    if (isOpen) {
      setFormState(data);
    }
  }, [isOpen, data]);

  const handleCheckboxChange = (field: keyof Ape) => {
    setFormState((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleYearChange = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      year: value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      date: e.target.value,
    }));
  };

  const handleSave = () => {
    onSave(formState);
    onClose();
  };

  const years = Array.from({ length: 5 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Ape Record</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <label htmlFor="year" className=" capitalize">
                year:
              </label>
              <Select value={formState.year} onValueChange={handleYearChange}>
                <SelectTrigger
                  id="year"
                  className="cursor-pointer border border-black px-3 rounded-md"
                >
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="date" className=" capitalize">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={formState.date}
                onChange={handleDateChange}
                className="cursor-pointer border border-black rounded-md px-3"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="urinalysis"
                checked={formState.urinalysis}
                onChange={() => handleCheckboxChange("urinalysis")}
                className="cursor-pointer"
              />
              <label htmlFor="urinalysis" className=" capitalize">
                Urinalysis
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="cbc"
                checked={formState.cbc}
                onChange={() => handleCheckboxChange("cbc")}
                className="cursor-pointer"
              />
              <label htmlFor="cbc" className=" capitalize">
                Complete Blood Count
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="lipid_profile"
                checked={formState.lipid_profile}
                onChange={() => handleCheckboxChange("lipid_profile")}
                className="cursor-pointer"
              />
              <label htmlFor="lipid_profile" className=" capitalize">
                Lipid Profile
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="fbs"
                checked={formState.fbs}
                onChange={() => handleCheckboxChange("fbs")}
                className="cursor-pointer"
              />
              <label htmlFor="fbs" className=" capitalize">
                Fasting Blood Sugar
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hba1c"
                checked={formState.hba1c}
                onChange={() => handleCheckboxChange("hba1c")}
                className="cursor-pointer"
              />
              <label htmlFor="hba1c" className=" capitalize">
                HBA1C
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="bua"
                checked={formState.bua}
                onChange={() => handleCheckboxChange("bua")}
                className="cursor-pointer"
              />
              <label htmlFor="bua" className=" capitalize">
                Blood Uric Acid
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="bun"
                checked={formState.bun}
                onChange={() => handleCheckboxChange("bun")}
                className="cursor-pointer"
              />
              <label htmlFor="bun" className=" capitalize">
                Blood Urea Nitrogen
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="creatinine"
                checked={formState.creatinine}
                onChange={() => handleCheckboxChange("creatinine")}
                className="cursor-pointer"
              />
              <label htmlFor="creatinine" className=" capitalize">
                Creatinine
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sgot"
                checked={formState.sgot}
                onChange={() => handleCheckboxChange("sgot")}
                className="cursor-pointer"
              />
              <label htmlFor="sgot" className=" capitalize">
                SGOT
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sgpt"
                checked={formState.sgpt}
                onChange={() => handleCheckboxChange("sgpt")}
                className="cursor-pointer"
              />
              <label htmlFor="sgpt" className=" capitalize">
                SGPT
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="chest_x_ray"
                checked={formState.chest_x_ray}
                onChange={() => handleCheckboxChange("chest_x_ray")}
                className="cursor-pointer"
              />
              <label htmlFor="chest_x_ray" className=" capitalize">
                Chest X Ray
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="ecg"
                checked={formState.ecg}
                onChange={() => handleCheckboxChange("ecg")}
                className="cursor-pointer"
              />
              <label htmlFor="ecg" className=" capitalize">
                ECG (12 leads)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="wau"
                checked={formState.wau}
                onChange={() => handleCheckboxChange("wau")}
                className="cursor-pointer"
              />
              <label htmlFor="wau" className=" capitalize">
                Whole Abdominal Ultrasound
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="pse"
                checked={formState.pse}
                onChange={() => handleCheckboxChange("pse")}
                className="cursor-pointer"
              />
              <label htmlFor="pse" className=" capitalize">
                Pap Smear Examination
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="psa"
                checked={formState.psa}
                onChange={() => handleCheckboxChange("psa")}
                className="cursor-pointer"
              />
              <label htmlFor="psa" className=" capitalize">
                Prostate Specific Antigen
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="breast_ultrasound"
                checked={formState.breast_ultrasound}
                onChange={() => handleCheckboxChange("breast_ultrasound")}
                className="cursor-pointer"
              />
              <label htmlFor="breast_ultrasound" className=" capitalize">
                Breast Ultrasound
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hscrp"
                checked={formState.hscrp}
                onChange={() => handleCheckboxChange("hscrp")}
                className="cursor-pointer"
              />
              <label htmlFor="hscrp" className=" capitalize">
                HSCRP
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="random_drug_testing"
                checked={formState.random_drug_testing}
                onChange={() => handleCheckboxChange("random_drug_testing")}
                className="cursor-pointer"
              />
              <label htmlFor="random_drug_testing" className=" capitalize">
                Random Drug Testing
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button onClick={onClose} className="bg-gray-200 text-gray-800">
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditApeDialog;
