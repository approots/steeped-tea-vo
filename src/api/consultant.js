import { get } from "./index";

export const getConsultant = () => {
  const uri = "api/ConsultantPortal/GetConsultantForEdit";
  return get(uri);
};
