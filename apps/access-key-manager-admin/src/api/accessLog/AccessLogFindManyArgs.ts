import { AccessLogWhereInput } from "./AccessLogWhereInput";
import { AccessLogOrderByInput } from "./AccessLogOrderByInput";

export type AccessLogFindManyArgs = {
  where?: AccessLogWhereInput;
  orderBy?: Array<AccessLogOrderByInput>;
  skip?: number;
  take?: number;
};
