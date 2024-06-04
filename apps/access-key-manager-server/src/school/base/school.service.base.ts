/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  School as PrismaSchool,
  AccessKey as PrismaAccessKey,
} from "@prisma/client";

export class SchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SchoolCountArgs, "select">): Promise<number> {
    return this.prisma.school.count(args);
  }

  async schools<T extends Prisma.SchoolFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SchoolFindManyArgs>
  ): Promise<PrismaSchool[]> {
    return this.prisma.school.findMany<Prisma.SchoolFindManyArgs>(args);
  }
  async school<T extends Prisma.SchoolFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SchoolFindUniqueArgs>
  ): Promise<PrismaSchool | null> {
    return this.prisma.school.findUnique(args);
  }
  async createSchool<T extends Prisma.SchoolCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SchoolCreateArgs>
  ): Promise<PrismaSchool> {
    return this.prisma.school.create<T>(args);
  }
  async updateSchool<T extends Prisma.SchoolUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SchoolUpdateArgs>
  ): Promise<PrismaSchool> {
    return this.prisma.school.update<T>(args);
  }
  async deleteSchool<T extends Prisma.SchoolDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SchoolDeleteArgs>
  ): Promise<PrismaSchool> {
    return this.prisma.school.delete(args);
  }

  async findAccessKeys(
    parentId: string,
    args: Prisma.AccessKeyFindManyArgs
  ): Promise<PrismaAccessKey[]> {
    return this.prisma.school
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accessKeys(args);
  }
}
