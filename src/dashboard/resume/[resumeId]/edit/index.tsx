import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditResumePage = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params.resumeId);
  }, []);
  return <div>Edit Resume Page</div>;
};

export default EditResumePage;
