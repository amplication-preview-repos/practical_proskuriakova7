import { AccessKeyWhereInput } from "./AccessKeyWhereInput";
import { AccessKeyOrderByInput } from "./AccessKeyOrderByInput";

export type AccessKeyFindManyArgs = {
  where?: AccessKeyWhereInput;
  orderBy?: Array<AccessKeyOrderByInput>;
  skip?: number;
  take?: number;
};
