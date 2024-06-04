import { AccessKey as TAccessKey } from "../api/accessKey/AccessKey";

export const ACCESSKEY_TITLE_FIELD = "id";

export const AccessKeyTitle = (record: TAccessKey): string => {
  return record.id?.toString() || String(record.id);
};
