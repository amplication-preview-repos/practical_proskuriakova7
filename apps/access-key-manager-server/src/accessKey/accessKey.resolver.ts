import * as graphql from "@nestjs/graphql";
import { AccessKeyResolverBase } from "./base/accessKey.resolver.base";
import { AccessKey } from "./base/AccessKey";
import { AccessKeyService } from "./accessKey.service";

@graphql.Resolver(() => AccessKey)
export class AccessKeyResolver extends AccessKeyResolverBase {
  constructor(protected readonly service: AccessKeyService) {
    super(service);
  }
}
