import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const useApiResponse = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleApiResponse = async <T>(
    apiCall: () => Promise<T>,
    successMessage: string
  ): Promise<T> => {
    setIsLoading(true);
    try {
      const result = await apiCall();
      toast({
        title: "Success",
        description: successMessage,
        variant: "success",
      });
      return result;
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        //@ts-expect-error - error.message is not always a string
        description: error.message || "An error occurred",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleApiResponse };
};

export default useApiResponse;
