import { Module } from "@nestjs/common";
import { AccessKeyModuleBase } from "./base/accessKey.module.base";
import { AccessKeyService } from "./accessKey.service";
import { AccessKeyController } from "./accessKey.controller";
import { AccessKeyResolver } from "./accessKey.resolver";

@Module({
  imports: [AccessKeyModuleBase],
  controllers: [AccessKeyController],
  providers: [AccessKeyService, AccessKeyResolver],
  exports: [AccessKeyService],
})
export class AccessKeyModule {}
