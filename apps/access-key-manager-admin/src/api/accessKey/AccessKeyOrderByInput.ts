import { SortOrder } from "../../util/SortOrder";

export type AccessKeyOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  procurementDate?: SortOrder;
  schoolId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
