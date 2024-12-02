"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
const LINK = process.env.NEXT_PUBLIC_API_LINK;

export function Dialog_Component({ id }: { id: string }) {
  const [data, setData] = useState({
    date: "",
    diagnosis: "",
    diagDetails: "",
    treatmentPlan: "",
    nurseNote: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // New state to control Popover visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (selectedDate: Date) => {
    if (selectedDate) {
      setData((prev) => ({
        ...prev,
        date: format(selectedDate, "yyyy-MM-dd"),
      }));
      setIsPopoverOpen(false);
    }
  };

  const handleSubmit = async (dataID: string) => {
    await fetch(`${LINK}/users/${dataID}/diagnosis-and-treatment-plan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setIsDialogOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)}>Add Data</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Diagnosis and Treatment Plan Data</DialogTitle>
          <DialogDescription>
            Add your diagnosis and treatment plan data here. Please ensure to
            provide all of the fields here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline">{data.date || "Pick a date"} </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={data.date ? new Date(data.date) : undefined}
                  onSelect={(selectedDate) => handleDateChange(selectedDate!)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="diagnosis" className="text-right">
              Diagnosis
            </Label>
            <Input
              id="diagnosis"
              name="diagnosis"
              value={data.diagnosis}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter diagnosis"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="diagDetails" className="text-right">
              Diagnosis Details
            </Label>
            <Input
              id="diagDetails"
              name="diagDetails"
              value={data.diagDetails}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter diagnosis details"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="treatmentPlan" className="text-right">
              Treatment Plan
            </Label>
            <Input
              id="treatmentPlan"
              name="treatmentPlan"
              value={data.treatmentPlan}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter treatment plan "
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nurseNote" className="text-right">
              Nurse's Note
            </Label>
            <Input
              id="nurseNote"
              name="nurseNote"
              value={data.nurseNote}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter nurse's note "
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => handleSubmit(id)}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
