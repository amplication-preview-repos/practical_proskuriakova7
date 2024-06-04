import * as graphql from "@nestjs/graphql";
import { AccessLogResolverBase } from "./base/accessLog.resolver.base";
import { AccessLog } from "./base/AccessLog";
import { AccessLogService } from "./accessLog.service";

@graphql.Resolver(() => AccessLog)
export class AccessLogResolver extends AccessLogResolverBase {
  constructor(protected readonly service: AccessLogService) {
    super(service);
  }
}
