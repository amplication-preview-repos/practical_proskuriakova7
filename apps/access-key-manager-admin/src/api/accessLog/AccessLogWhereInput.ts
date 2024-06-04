import { AccessKeyWhereUniqueInput } from "../accessKey/AccessKeyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessLogWhereInput = {
  accessKey?: AccessKeyWhereUniqueInput;
  action?: "Option1";
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
