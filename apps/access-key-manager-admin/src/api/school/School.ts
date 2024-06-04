import { AccessKey } from "../accessKey/AccessKey";

export type School = {
  accessKeys?: Array<AccessKey>;
  address: string | null;
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
