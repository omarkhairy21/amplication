import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteFavArgs } from "./DeleteFavArgs";
import { FavFindManyArgs } from "./FavFindManyArgs";
import { FavFindUniqueArgs } from "./FavFindUniqueArgs";
import { Fav } from "./Fav";
import { FavService } from "../fav.service";

@graphql.Resolver(() => Fav)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class FavResolverBase {
  constructor(
    protected readonly service: FavService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Fav",
    action: "read",
    possession: "any",
  })
  async _favsMeta(
    @graphql.Args() args: FavFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Fav])
  @nestAccessControl.UseRoles({
    resource: "Fav",
    action: "read",
    possession: "any",
  })
  async favs(
    @graphql.Args() args: FavFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Fav[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Fav",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Fav, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Fav",
    action: "read",
    possession: "own",
  })
  async fav(
    @graphql.Args() args: FavFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Fav | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Fav",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Fav)
  @nestAccessControl.UseRoles({
    resource: "Fav",
    action: "delete",
    possession: "any",
  })
  async deleteFav(@graphql.Args() args: DeleteFavArgs): Promise<Fav | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
