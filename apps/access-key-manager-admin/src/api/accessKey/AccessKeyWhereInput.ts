import { AccessLogListRelationFilter } from "../accessLog/AccessLogListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AccessKeyWhereInput = {
  accessLogs?: AccessLogListRelationFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  procurementDate?: DateTimeNullableFilter;
  school?: SchoolWhereUniqueInput;
  status?: "Option1";
};
