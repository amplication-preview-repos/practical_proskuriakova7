import { SortOrder } from "../../util/SortOrder";

export type AccessLogOrderByInput = {
  accessKeyId?: SortOrder;
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
