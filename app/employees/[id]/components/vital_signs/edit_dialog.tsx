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
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const LINK = process.env.NEXT_PUBLIC_API_LINK;

export function Edit_Dialog_Component({ id }: { id: number }) {
  const { id: userId } = useParams();
  const [data, setData] = useState({
    date: "",
    bloodPressureSystolic: "",
    bloodPressureDiastolic: "",
    heartRate: "",
    oxygenSaturation: "",
    respiratoryRate: "",
    temperature: "",
  });
  const [isDiaOpen, setIsDiaOPen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Fetch the existing data when the dialog opens
  useEffect(() => {
    if (isDiaOpen) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${LINK}/users/${userId}/vital-signs/${id}`
          );
          if (!response.ok) throw new Error("Failed to fetch data");
          const existingData = await response.json();
          setData({
            date: existingData.date,
            bloodPressureSystolic: existingData.bloodPressureSystolic,
            bloodPressureDiastolic: existingData.bloodPressureDiastolic,
            heartRate: existingData.heartRate,
            oxygenSaturation: existingData.oxygenSaturation,
            respiratoryRate: existingData.respiratoryRate,
            temperature: existingData.temperature,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [isDiaOpen, id, userId]);

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

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${LINK}/users/${userId}/vital-signs/${id}`,
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

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="vaccine" className="text-right">
              Blood Pressure Systolic
            </Label>
            <Input
              id="bloodPressureSystolic"
              name="bloodPressureSystolic"
              value={data.bloodPressureSystolic}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter Blood Pressure Systolic"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bloodPressureDiastolic" className="text-right">
              Blood Pressure Diastolic
            </Label>
            <Input
              id="bloodPressureDiastolic"
              name="bloodPressureDiastolic"
              value={data.bloodPressureDiastolic}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter Blood Pressure Diastolic "
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="heartRate" className="text-right">
              Heart Rate
            </Label>
            <Input
              id="heartRate"
              name="heartRate"
              value={data.heartRate}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter heartRate name"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="oxygenSaturation" className="text-right">
              Oxygen Saturation
            </Label>
            <Input
              id="oxygenSaturation"
              name="oxygenSaturation"
              value={data.oxygenSaturation}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter Oxygen Saturation"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="respiratoryRate" className="text-right">
              Respiratory Rate
            </Label>
            <Input
              id="respiratoryRate"
              name="respiratoryRate"
              value={data.respiratoryRate}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter Respiratory Rate"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="temperature" className="text-right">
              Temperature
            </Label>
            <Input
              id="temperature"
              name="temperature"
              value={data.temperature}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter temperature"
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
