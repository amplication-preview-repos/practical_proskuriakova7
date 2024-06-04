import { AccessLog } from "../accessLog/AccessLog";
import { JsonValue } from "type-fest";

export type User = {
  accessLogs?: Array<AccessLog>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
