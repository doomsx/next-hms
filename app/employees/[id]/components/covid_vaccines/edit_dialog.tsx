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
    brand: "",
  });
  const [isDiaOpen, setIsDiaOPen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Fetch the existing data when the dialog opens
  useEffect(() => {
    if (isDiaOpen) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${LINK}/users/${userId}/covid-vaccines/${id}`
          );
          if (!response.ok) throw new Error("Failed to fetch data");
          const existingData = await response.json();
          setData({
            date: existingData.date,
            brand: existingData.brand,
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
        `${LINK}/users/${userId}/covid-vaccines/${id}`,
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
          className="w-full bg-blue-500 text-white"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Covid Vaccine Data</DialogTitle>
          <DialogDescription>
            Update the date and brand of the Covid vaccine.
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
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              id="brand"
              name="brand"
              value={data.brand}
              onChange={handleInputChange}
              className="col-span-3"
              placeholder="Enter brand name"
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
