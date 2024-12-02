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
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

export function Edit_Dialog_Component({ id }: { id: number }) {
  const { id: userId } = useParams();
  const [data, setData] = useState({
    date: "",
    diagnosis: "",
    diagDetails: "",
    treatmentPlan: "",
    nurseNote: "",
  });
  const [isDiaOpen, setIsDiaOPen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Fetch the existing data when the dialog opens
  useEffect(() => {
    if (isDiaOpen) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${LINK}/users/${userId}/diagnosis-and-treatment-plan/${id}`
          );
          if (!response.ok) throw new Error("Failed to fetch data");
          const existingData = await response.json();
          setData({
            date: existingData.date,
            diagnosis: existingData.diagnosis,
            diagDetails: existingData.diagDetails,
            treatmentPlan: existingData.treatmentPlan,
            nurseNote: existingData.nurseNote,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [isDiaOpen, id, userId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${LINK}/users/${userId}/diagnosis-and-treatment-plan/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      setIsDiaOPen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <Dialog open={isDiaOpen} onOpenChange={setIsDiaOPen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          onClick={() => setIsDiaOPen(true)}
          className="w-full"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Covid Vaccine Data</DialogTitle>
          <DialogDescription>
            Update the date and complaint of the Covid vaccine.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline">{data.date || "Pick a date"}</Button>
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

          {/* Diagnosis */}
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

          {/* Diagnosis Details */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="diagDetails" className="text-right">
              Diagnosis Details
            </Label>
            <Textarea
              id="diagDetails"
              name="diagDetails"
              value={data.diagDetails}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter diagnosis details"
              required
            />
          </div>

          {/* Treatment Plan */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="treatmentPlan" className="text-right">
              Treatment Plan
            </Label>
            <Textarea
              id="treatmentPlan"
              name="treatmentPlan"
              value={data.treatmentPlan}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter treatment plan"
              required
            />
          </div>

          {/* Nurse's Note */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nurseNote" className="text-right">
              {"Nurse's Note"}
            </Label>
            <Textarea
              id="nurseNote"
              name="nurseNote"
              value={data.nurseNote}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter nurse's note"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}