import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavService } from "./fav.service";
import { FavControllerBase } from "./base/fav.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("favs")
@common.Controller("favs")
export class FavController extends FavControllerBase {
  constructor(
    protected readonly service: FavService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
