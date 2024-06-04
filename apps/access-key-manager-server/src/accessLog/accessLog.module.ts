import { Module } from "@nestjs/common";
import { AccessLogModuleBase } from "./base/accessLog.module.base";
import { AccessLogService } from "./accessLog.service";
import { AccessLogController } from "./accessLog.controller";
import { AccessLogResolver } from "./accessLog.resolver";

@Module({
  imports: [AccessLogModuleBase],
  controllers: [AccessLogController],
  providers: [AccessLogService, AccessLogResolver],
  exports: [AccessLogService],
})
export class AccessLogModule {}
