import { Module } from "@nestjs/common";
import { FavModuleBase } from "./base/fav.module.base";
import { FavService } from "./fav.service";
import { FavController } from "./fav.controller";
import { FavResolver } from "./fav.resolver";

@Module({
  imports: [FavModuleBase],
  controllers: [FavController],
  providers: [FavService, FavResolver],
  exports: [FavService],
})
export class FavModule {}
