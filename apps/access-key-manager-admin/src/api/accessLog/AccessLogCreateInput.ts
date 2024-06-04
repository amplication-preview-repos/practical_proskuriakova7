import { AccessKeyWhereUniqueInput } from "../accessKey/AccessKeyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessLogCreateInput = {
  accessKey?: AccessKeyWhereUniqueInput | null;
  action?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
