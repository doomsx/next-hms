"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type DeleteDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  itemName: string;
};

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  onClose,
  onDelete,
  itemName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Delete {itemName}?</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-4">
          <Button
            variant="default"
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-400"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
