import { AccessKey } from "../accessKey/AccessKey";
import { User } from "../user/User";

export type AccessLog = {
  accessKey?: AccessKey | null;
  action?: "Option1" | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
