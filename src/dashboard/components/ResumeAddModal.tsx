import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import { Loader2 } from "lucide-react";
import React from "react";

interface ResumerAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  resumeName?: string;
  isLoading?: boolean;
}
const ResumeAddModal = ({
  isOpen,
  onClose,
  onInputChange,
  onConfirm,
  resumeName,
  isLoading,
}: ResumerAddModalProps) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title="Create a new resume"
      description=" Add a title for your new resume"
    >
      <div>
        <Input onChange={onInputChange} value={resumeName} />
      </div>

      <div className=" flex justify-end mt-4">
        <Button variant={"ghost"} onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button onClick={onConfirm} className="ml-2" disabled={!resumeName}>
          {isLoading ? <Loader2 className=" h-4 w-4 animate-spin" /> : "Create"}
        </Button>
      </div>
    </Modal>
  );
};

export default ResumeAddModal;
