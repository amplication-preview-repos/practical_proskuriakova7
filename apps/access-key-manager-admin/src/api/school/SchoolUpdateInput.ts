import { AccessKeyUpdateManyWithoutSchoolsInput } from "./AccessKeyUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  accessKeys?: AccessKeyUpdateManyWithoutSchoolsInput;
  address?: string | null;
  contactEmail?: string | null;
  name?: string | null;
};
