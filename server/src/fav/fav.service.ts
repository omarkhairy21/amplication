import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FavServiceBase } from "./base/fav.service.base";

@Injectable()
export class FavService extends FavServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
