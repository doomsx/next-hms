"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ape } from "@/lib/types";

interface AddApeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newApe: Ape) => Promise<void>;
}

const AddApeDialog: React.FC<AddApeDialogProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Ape>({
    year: "",
    date: "",
    urinalysis: false,
    cbc: false,
    lipid_profile: false,
    fbs: false,
    hba1c: false,
    bua: false,
    bun: false,
    creatinine: false,
    sgot: false,
    sgpt: false,
    chest_x_ray: false,
    ecg: false,
    wau: false,
    pse: false,
    psa: false,
    breast_ultrasound: false,
    hscrp: false,
    random_drug_testing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add APE Record</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <label>Year: </label>
              <Input
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center gap-1">
              <label>Date: </label>
              <Input
                type="date"
                name="date"
                placeholder="Date (YYYY-MM-DD)"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="urinalysis"
                id="urinalysis"
                checked={formData.urinalysis}
                onChange={handleInputChange}
              />
              <label htmlFor="urinalysis">Urinalysis</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="cbc"
                id="cbc"
                checked={formData.cbc}
                onChange={handleInputChange}
              />
              <label htmlFor="cbc">Complete Blood Count</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lipid_profile"
                id="lipid_profile"
                checked={formData.lipid_profile}
                onChange={handleInputChange}
              />
              <label htmlFor="lipid_profile">Lipid Profile</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="fbs"
                id="fbs"
                checked={formData.fbs}
                onChange={handleInputChange}
              />
              <label htmlFor="fbs">Fasting Blood Sugar</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hba1c"
                id="hba1c"
                checked={formData.hba1c}
                onChange={handleInputChange}
              />
              <label htmlFor="hba1c">HbA1c</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="bua"
                id="bua"
                checked={formData.bua}
                onChange={handleInputChange}
              />
              <label htmlFor="bua">Blood Uric Acid</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="bun"
                id="bun"
                checked={formData.bun}
                onChange={handleInputChange}
              />
              <label htmlFor="bun">Blood Urea Nitrogen</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="creatinine"
                id="creatinine"
                checked={formData.creatinine}
                onChange={handleInputChange}
              />
              <label htmlFor="creatinine">Creatinine</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sgot"
                id="sgot"
                checked={formData.sgot}
                onChange={handleInputChange}
              />
              <label htmlFor="sgot">SGOT</label>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sgpt"
                id="sgpt"
                checked={formData.sgpt}
                onChange={handleInputChange}
              />
              <label htmlFor="sgpt">SGPT</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="chest_x_ray"
                id="chest_x_ray"
                checked={formData.chest_x_ray}
                onChange={handleInputChange}
              />
              <label htmlFor="chest_x_ray">Chest X-Ray</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="ecg"
                id="ecg"
                checked={formData.ecg}
                onChange={handleInputChange}
              />
              <label htmlFor="ecg">ECG</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="wau"
                id="wau"
                checked={formData.wau}
                onChange={handleInputChange}
              />
              <label htmlFor="wau">Whole Abdominal Ultrasound</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="pse"
                id="pse"
                checked={formData.pse}
                onChange={handleInputChange}
              />
              <label htmlFor="pse">Pap Smear Examination</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="psa"
                id="psa"
                checked={formData.psa}
                onChange={handleInputChange}
              />
              <label htmlFor="psa">Prostate Specific Antigen</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="breast_ultrasound"
                id="breast_ultrasound"
                checked={formData.breast_ultrasound}
                onChange={handleInputChange}
              />
              <label htmlFor="breast_ultrasound">Breast Ultrasound</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hscrp"
                id="hscrp"
                checked={formData.hscrp}
                onChange={handleInputChange}
              />
              <label htmlFor="hscrp">HsCRP</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="random_drug_testing"
                id="random_drug_testing"
                checked={formData.random_drug_testing}
                onChange={handleInputChange}
              />
              <label htmlFor="random_drug_testing">Random Drug Testing</label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleSubmit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddApeDialog;
