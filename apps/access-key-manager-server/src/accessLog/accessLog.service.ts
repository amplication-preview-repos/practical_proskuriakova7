import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessLogServiceBase } from "./base/accessLog.service.base";

@Injectable()
export class AccessLogService extends AccessLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
