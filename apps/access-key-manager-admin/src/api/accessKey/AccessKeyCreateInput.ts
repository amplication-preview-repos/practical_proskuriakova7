import { AccessLogCreateNestedManyWithoutAccessKeysInput } from "./AccessLogCreateNestedManyWithoutAccessKeysInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AccessKeyCreateInput = {
  accessLogs?: AccessLogCreateNestedManyWithoutAccessKeysInput;
  expiryDate?: Date | null;
  procurementDate?: Date | null;
  school?: SchoolWhereUniqueInput | null;
  status?: "Option1" | null;
};
