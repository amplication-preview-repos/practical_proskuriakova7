import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessKeyServiceBase } from "./base/accessKey.service.base";

@Injectable()
export class AccessKeyService extends AccessKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
