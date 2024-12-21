"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"; // Import ShadCN Checkbox
import { useParams } from "next/navigation";
import { medDATA } from "@/lib/types";
const LINK = process.env.NEXT_PUBLIC_API_LINK;


const EditDialog = ({ medData }: { medData: medDATA }) => {
    const { id: id } = useParams();
    const [isDiaOpen, setIsDiaOPen] = useState(false);
    const [formData, setFormData] = useState({
        ...medData,
    });

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = async () => {
        if (!medData.id) {
            const response = await fetch(
                `${LINK}/users/${id}/medical-health-status`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to save data");
            }
            setIsDiaOPen(false);
            window.location.reload();
        } else {
            const response = await fetch(
                `${LINK}/users/${id}/medical-health-status/${medData.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update data");
            }
            setIsDiaOPen(false);
            window.location.reload();
        }
    };

    return (
        <Dialog open={isDiaOpen} onOpenChange={setIsDiaOPen}>
            <DialogTrigger asChild>
                <Button onClick={() => setIsDiaOPen(true)}>Edit Medical Status</Button>
            </DialogTrigger>
            <DialogContent className="overflow-auto">
                <DialogHeader>
                    <DialogTitle>Edit Medical Status</DialogTitle>
                    <DialogDescription>
                        Update the medical conditions and save the changes.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.arthritis}
                                onCheckedChange={(checked) =>
                                    handleChange("arthritis", checked)
                                }
                            />
                            <Label>Arthritis</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.asthma}
                                onCheckedChange={(checked) => handleChange("asthma", checked)}
                            />
                            <Label>Asthma</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.bladderProblem}
                                onCheckedChange={(checked) =>
                                    handleChange("bladderProblem", checked)
                                }
                            />
                            <Label>Bladder Problem</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.diabetes}
                                onCheckedChange={(checked) => handleChange("diabetes", checked)}
                            />
                            <Label>Diabetes</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.heartProblem}
                                onCheckedChange={(checked) =>
                                    handleChange("heartProblem", checked)
                                }
                            />
                            <Label>Heart Problem</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.hepatitis}
                                onCheckedChange={(checked) =>
                                    handleChange("hepatitis", checked)
                                }
                            />
                            <Label>Hepatits</Label>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.hiv}
                                onCheckedChange={(checked) => handleChange("hiv", checked)}
                            />
                            <Label>HIV</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.hypertension}
                                onCheckedChange={(checked) =>
                                    handleChange("hypertension", checked)
                                }
                            />
                            <Label>Hypertension</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.kidneyProblem}
                                onCheckedChange={(checked) =>
                                    handleChange("kidneyProblem", checked)
                                }
                            />
                            <Label>Kidney Problem</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.liverProblem}
                                onCheckedChange={(checked) =>
                                    handleChange("liverProblem", checked)
                                }
                            />
                            <Label>Liver Problem</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.thyroid}
                                onCheckedChange={(checked) => handleChange("thyroid", checked)}
                            />
                            <Label>Thyroid</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={formData.tuberculosis}
                                onCheckedChange={(checked) =>
                                    handleChange("tuberculosis", checked)
                                }
                            />
                            <Label>Tuberculosis</Label>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Checkbox
                            checked={formData.cancer}
                            onCheckedChange={(checked) => handleChange("cancer", checked)}
                            id="cancer-checkbox"
                        />
                        <Label>Cancer:</Label>

                        {formData.cancer && (
                            <Input
                                className="mt-2"
                                placeholder="Cancer Description"
                                value={formData.cancerDesc}
                                onChange={(e) => handleChange("cancerDesc", e.target.value)}
                            />
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <Checkbox
                            checked={formData.others}
                            onCheckedChange={(checked) => handleChange("others", checked)}
                            id="otherConditions-checkbox"
                        />
                        <Label>Other Conditions:</Label>

                        {formData.others && (
                            <Input
                                className="mt-2"
                                placeholder="Other Conditions Description"
                                value={formData.othersDesc}
                                onChange={(e) => handleChange("othersDesc", e.target.value)}
                            />
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <div>
                                <Label>Allergies:</Label>
                                <RadioGroup
                                    value={formData.allergies}
                                    onValueChange={(value) => handleChange("allergies", value)}
                                    className="flex space-x-4"
                                >
                                    <RadioGroupItem value="yes" id="allergies-yes" />
                                    <Label htmlFor="allergies-yes">Yes</Label>
                                    <RadioGroupItem value="no" id="allergies-no" />
                                    <Label htmlFor="allergies-no">No</Label>
                                </RadioGroup>
                                {formData.allergies === "yes" && (
                                    <div className="space-y-2 mt-2">
                                        <Input
                                            placeholder="Food Allergies"
                                            value={formData.foodAllergy ?? ""}
                                            onChange={(e) =>
                                                handleChange("foodAllergy", e.target.value)
                                            }
                                        />
                                        <Input
                                            placeholder="Medicine Allergies"
                                            value={formData.medicineAllergy ?? ""}
                                            onChange={(e) =>
                                                handleChange("medicineAllergy", e.target.value)
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                            <div>
                                <Label>Maintenance:</Label>
                                <RadioGroup
                                    value={formData.maintenance}
                                    onValueChange={(value) => handleChange("maintenance", value)}
                                    className="flex space-x-4"
                                >
                                    <RadioGroupItem value="yes" id="maintenance-yes" />
                                    <Label htmlFor="maintenance-yes">Yes</Label>
                                    <RadioGroupItem value="no" id="maintenance-no" />
                                    <Label htmlFor="maintenance-no">No</Label>
                                </RadioGroup>
                                {formData.maintenance === "yes" && (
                                    <Input
                                        className="mt-2"
                                        placeholder="Maintenance Description"
                                        value={formData.maintenanceDesc ?? ""}
                                        onChange={(e) =>
                                            handleChange("maintenanceDesc", e.target.value)
                                        }
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            <div>
                                <Label>Mental Problem:</Label>
                                <RadioGroup
                                    value={formData.mentalProblem}
                                    onValueChange={(value) =>
                                        handleChange("mentalProblem", value)
                                    }
                                    className="flex space-x-4"
                                >
                                    <RadioGroupItem value="yes" id="mental-yes" />
                                    <Label htmlFor="mental-yes">Yes</Label>
                                    <RadioGroupItem value="no" id="mental-no" />
                                    <Label htmlFor="mental-no">No</Label>
                                </RadioGroup>
                                {formData.mentalProblem === "yes" && (
                                    <Input
                                        className="mt-2"
                                        placeholder="Mental Problem Description"
                                        value={formData.mentalDesc ?? ""}
                                        onChange={(e) => handleChange("mentalDesc", e.target.value)}
                                    />
                                )}
                            </div>

                            <div>
                                <Label>Surgery:</Label>
                                <RadioGroup
                                    value={formData.surgery}
                                    onValueChange={(value) => handleChange("surgery", value)}
                                    className="flex space-x-4"
                                >
                                    <RadioGroupItem value="yes" id="surgery-yes" />
                                    <Label htmlFor="surgery-yes">Yes</Label>
                                    <RadioGroupItem value="no" id="surgery-no" />
                                    <Label htmlFor="surgery-no">No</Label>
                                </RadioGroup>
                                {formData.surgery === "yes" && (
                                    <div className="space-y-2 mt-2">
                                        <Input
                                            placeholder="Surgery Description"
                                            value={formData.surgeryDesc ?? ""}
                                            onChange={(e) =>
                                                handleChange("surgeryDesc", e.target.value)
                                            }
                                        />
                                        <Input
                                            type="date"
                                            placeholder="Surgery Date"
                                            value={formData.surgeryDate ?? ""}
                                            onChange={(e) =>
                                                handleChange("surgeryDate", e.target.value)
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDiaOPen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditDialog;
