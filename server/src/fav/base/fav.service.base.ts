import { PrismaService } from "nestjs-prisma";
import { Prisma, Fav } from "@prisma/client";

export class FavServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FavFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavFindManyArgs>
  ): Promise<number> {
    return this.prisma.fav.count(args);
  }

  async findMany<T extends Prisma.FavFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavFindManyArgs>
  ): Promise<Fav[]> {
    return this.prisma.fav.findMany(args);
  }
  async findOne<T extends Prisma.FavFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavFindUniqueArgs>
  ): Promise<Fav | null> {
    return this.prisma.fav.findUnique(args);
  }
  async create<T extends Prisma.FavCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavCreateArgs>
  ): Promise<Fav> {
    return this.prisma.fav.create<T>(args);
  }
  async update<T extends Prisma.FavUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavUpdateArgs>
  ): Promise<Fav> {
    return this.prisma.fav.update<T>(args);
  }
  async delete<T extends Prisma.FavDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavDeleteArgs>
  ): Promise<Fav> {
    return this.prisma.fav.delete(args);
  }
}
