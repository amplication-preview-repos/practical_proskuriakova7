import { AccessLogUpdateManyWithoutAccessKeysInput } from "./AccessLogUpdateManyWithoutAccessKeysInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AccessKeyUpdateInput = {
  accessLogs?: AccessLogUpdateManyWithoutAccessKeysInput;
  expiryDate?: Date | null;
  procurementDate?: Date | null;
  school?: SchoolWhereUniqueInput | null;
  status?: "Option1" | null;
};
