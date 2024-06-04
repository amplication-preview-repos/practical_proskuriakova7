import { AccessKeyCreateNestedManyWithoutSchoolsInput } from "./AccessKeyCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  accessKeys?: AccessKeyCreateNestedManyWithoutSchoolsInput;
  address?: string | null;
  contactEmail?: string | null;
  name?: string | null;
};
