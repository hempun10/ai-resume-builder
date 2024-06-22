import apiClient from "./ApiClient";

interface ResumeData {
  data: {
    title: string;
    resume_id: string;
    user_email: string;
    user_name: string;
  };
}

const createNewResume = (data: ResumeData) =>
  apiClient.post<ResumeData>("user-resumes", data);

export default {
  createNewResume,
  // You can add more API methods here
};
