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

interface AddApeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newApe: Ape) => void;
}

export interface Ape {
  year: string;
  date: string;
  urinalysis?: boolean;
  cbc?: boolean;
  lipid_profile?: boolean;
  fbs?: boolean;
  hba1c?: boolean;
  bua?: boolean;
  bun?: boolean;
  creatinine?: boolean;
  sgot?: boolean;
  sgpt?: boolean;
  chest_x_ray?: boolean;
  ecg?: boolean;
  wau?: boolean;
  pse?: boolean;
  psa?: boolean;
  breast_ultrasound?: boolean;
  hscrp?: boolean;
  random_drug_testing?: boolean;
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
            <div className="flex items-center">
              <label>Year: </label>
              <Input
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
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
                checked={formData.urinalysis}
                onChange={handleInputChange}
              />
              <label>Urinalysis</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="cbc"
                checked={formData.cbc}
                onChange={handleInputChange}
              />
              <label>CBC</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lipid_profile"
                checked={formData.lipid_profile}
                onChange={handleInputChange}
              />
              <label>Lipid Profile</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="fbs"
                checked={formData.fbs}
                onChange={handleInputChange}
              />
              <label>FBS</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hba1c"
                checked={formData.hba1c}
                onChange={handleInputChange}
              />
              <label>HbA1c</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="bua"
                checked={formData.bua}
                onChange={handleInputChange}
              />
              <label>BUA</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="bun"
                checked={formData.bun}
                onChange={handleInputChange}
              />
              <label>BUN</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="creatinine"
                checked={formData.creatinine}
                onChange={handleInputChange}
              />
              <label>Creatinine</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sgot"
                checked={formData.sgot}
                onChange={handleInputChange}
              />
              <label>SGOT</label>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sgpt"
                checked={formData.sgpt}
                onChange={handleInputChange}
              />
              <label>SGPT</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="chest_x_ray"
                checked={formData.chest_x_ray}
                onChange={handleInputChange}
              />
              <label>Chest X-Ray</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="ecg"
                checked={formData.ecg}
                onChange={handleInputChange}
              />
              <label>ECG</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="wau"
                checked={formData.wau}
                onChange={handleInputChange}
              />
              <label>WAU</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="pse"
                checked={formData.pse}
                onChange={handleInputChange}
              />
              <label>PSE</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="psa"
                checked={formData.psa}
                onChange={handleInputChange}
              />
              <label>PSA</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="breast_ultrasound"
                checked={formData.breast_ultrasound}
                onChange={handleInputChange}
              />
              <label>Breast Ultrasound</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hscrp"
                checked={formData.hscrp}
                onChange={handleInputChange}
              />
              <label>HsCRP</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="random_drug_testing"
                checked={formData.random_drug_testing}
                onChange={handleInputChange}
              />
              <label>Random Drug Testing</label>
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
