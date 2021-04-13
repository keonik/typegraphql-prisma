import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Problem } from "../models/Problem";
import { CreatorCountOutputType } from "../resolvers/outputs/CreatorCountOutputType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Creator {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  likes?: Problem[];

  problems?: Problem[];

  @TypeGraphQL.Field(_type => CreatorCountOutputType, {
    nullable: true
  })
  _count?: CreatorCountOutputType | null;
}
