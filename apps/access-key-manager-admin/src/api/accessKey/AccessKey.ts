import { AccessLog } from "../accessLog/AccessLog";
import { School } from "../school/School";

export type AccessKey = {
  accessLogs?: Array<AccessLog>;
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  procurementDate: Date | null;
  school?: School | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
