import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessLogService } from "./accessLog.service";
import { AccessLogControllerBase } from "./base/accessLog.controller.base";

@swagger.ApiTags("accessLogs")
@common.Controller("accessLogs")
export class AccessLogController extends AccessLogControllerBase {
  constructor(protected readonly service: AccessLogService) {
    super(service);
  }
}
