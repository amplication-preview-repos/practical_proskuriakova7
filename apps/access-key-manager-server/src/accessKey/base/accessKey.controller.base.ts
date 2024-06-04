/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AccessKeyService } from "../accessKey.service";
import { AccessKeyCreateInput } from "./AccessKeyCreateInput";
import { AccessKey } from "./AccessKey";
import { AccessKeyFindManyArgs } from "./AccessKeyFindManyArgs";
import { AccessKeyWhereUniqueInput } from "./AccessKeyWhereUniqueInput";
import { AccessKeyUpdateInput } from "./AccessKeyUpdateInput";
import { AccessLogFindManyArgs } from "../../accessLog/base/AccessLogFindManyArgs";
import { AccessLog } from "../../accessLog/base/AccessLog";
import { AccessLogWhereUniqueInput } from "../../accessLog/base/AccessLogWhereUniqueInput";

export class AccessKeyControllerBase {
  constructor(protected readonly service: AccessKeyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AccessKey })
  async createAccessKey(
    @common.Body() data: AccessKeyCreateInput
  ): Promise<AccessKey> {
    return await this.service.createAccessKey({
      data: {
        ...data,

        school: data.school
          ? {
              connect: data.school,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        procurementDate: true,

        school: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AccessKey] })
  @ApiNestedQuery(AccessKeyFindManyArgs)
  async accessKeys(@common.Req() request: Request): Promise<AccessKey[]> {
    const args = plainToClass(AccessKeyFindManyArgs, request.query);
    return this.service.accessKeys({
      ...args,
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        procurementDate: true,

        school: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AccessKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async accessKey(
    @common.Param() params: AccessKeyWhereUniqueInput
  ): Promise<AccessKey | null> {
    const result = await this.service.accessKey({
      where: params,
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        procurementDate: true,

        school: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AccessKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAccessKey(
    @common.Param() params: AccessKeyWhereUniqueInput,
    @common.Body() data: AccessKeyUpdateInput
  ): Promise<AccessKey | null> {
    try {
      return await this.service.updateAccessKey({
        where: params,
        data: {
          ...data,

          school: data.school
            ? {
                connect: data.school,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          expiryDate: true,
          id: true,
          procurementDate: true,

          school: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AccessKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAccessKey(
    @common.Param() params: AccessKeyWhereUniqueInput
  ): Promise<AccessKey | null> {
    try {
      return await this.service.deleteAccessKey({
        where: params,
        select: {
          createdAt: true,
          expiryDate: true,
          id: true,
          procurementDate: true,

          school: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/accessLogs")
  @ApiNestedQuery(AccessLogFindManyArgs)
  async findAccessLogs(
    @common.Req() request: Request,
    @common.Param() params: AccessKeyWhereUniqueInput
  ): Promise<AccessLog[]> {
    const query = plainToClass(AccessLogFindManyArgs, request.query);
    const results = await this.service.findAccessLogs(params.id, {
      ...query,
      select: {
        accessKey: {
          select: {
            id: true,
          },
        },

        action: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/accessLogs")
  async connectAccessLogs(
    @common.Param() params: AccessKeyWhereUniqueInput,
    @common.Body() body: AccessLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessLogs: {
        connect: body,
      },
    };
    await this.service.updateAccessKey({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accessLogs")
  async updateAccessLogs(
    @common.Param() params: AccessKeyWhereUniqueInput,
    @common.Body() body: AccessLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessLogs: {
        set: body,
      },
    };
    await this.service.updateAccessKey({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accessLogs")
  async disconnectAccessLogs(
    @common.Param() params: AccessKeyWhereUniqueInput,
    @common.Body() body: AccessLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessLogs: {
        disconnect: body,
      },
    };
    await this.service.updateAccessKey({
      where: params,
      data,
      select: { id: true },
    });
  }
}
