import { Plus } from "lucide-react";
import React, { useState } from "react";
import ResumeAddModal from "./ResumeAddModal";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import { useToast } from "@/components/ui/use-toast";
import useApiResponse from "@/hooks/useApiResponse";
import GlobalApi from "@/service/ApiMethod";
const AddResume = () => {
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const { user } = useUser();
  const { isLoading, handleApiResponse } = useApiResponse();

  const handleConfirm = async () => {
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeName,
        resume_id: uuid,
        user_email: user?.emailAddresses[0].emailAddress ?? "",
        user_name: user?.fullName ?? "",
      },
    };

    const apiCall = () => GlobalApi.createNewResume(data);
    const successMessage = "Resume created successfully";
    await handleApiResponse(apiCall, successMessage);
    setOpenDialog(false);
    setResumeName("");
  };
  return (
    <div>
      <div
        className=" p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg mt-10 h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dotted"
        onClick={() => setOpenDialog(true)}
      >
        <Plus />
      </div>
      {openDialog && (
        <ResumeAddModal
          isOpen={openDialog}
          onClose={() => setOpenDialog(false)}
          onInputChange={(e) => setResumeName(e.target.value)}
          onConfirm={handleConfirm}
          resumeName={resumeName}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default AddResume;
