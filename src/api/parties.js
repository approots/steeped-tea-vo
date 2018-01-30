import { get } from "./index";

export const getParties = () => {
  const uri = "api/ConsultantPortal/GetPartiesToManage";
  return get(uri);
};
