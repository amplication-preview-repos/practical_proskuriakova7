import { AccessLog as TAccessLog } from "../api/accessLog/AccessLog";

export const ACCESSLOG_TITLE_FIELD = "id";

export const AccessLogTitle = (record: TAccessLog): string => {
  return record.id?.toString() || String(record.id);
};
