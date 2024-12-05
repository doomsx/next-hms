// components/EditApeDialog.tsx
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ape } from "./ape_data_client";

type EditApeDialogProps = {
  item: Ape;
  onSave: (updatedItem: Ape) => void;
  onCancel: () => void;
};

const EditApeDialog: React.FC<EditApeDialogProps> = ({
  item,
  onSave,
  onCancel,
}) => {
  const [editedItem, setEditedItem] = useState<Ape>(item);

  const handleSave = () => {
    onSave(editedItem);
  };

  return (
    <Dialog open={true}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-2">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Data</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Date</label>
            <Input
              type="text"
              value={editedItem.date}
              onChange={(e) =>
                setEditedItem({
                  ...editedItem,
                  date: e.target.value,
                })
              }
            />
          </div>
          {/* Add additional editable fields here */}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditApeDialog;
