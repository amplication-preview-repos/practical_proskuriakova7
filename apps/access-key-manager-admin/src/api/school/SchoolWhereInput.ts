import { AccessKeyListRelationFilter } from "../accessKey/AccessKeyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SchoolWhereInput = {
  accessKeys?: AccessKeyListRelationFilter;
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
