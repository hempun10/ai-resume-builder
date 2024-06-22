import { ResumeData } from "@/interface";
import apiClient from "./ApiClient";

const createNewResume = (data: ResumeData) =>
  apiClient.post<ResumeData>("user-resumes", data);

export default {
  createNewResume,
};
