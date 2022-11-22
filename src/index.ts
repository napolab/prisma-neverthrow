import { PrismaClient } from "@prisma/client";
import { fromPromise } from "neverthrow";

import { fromUnknownError } from "./errors/pattern";

const prisma = new PrismaClient();

void fromPromise(prisma.todo.findMany(), fromUnknownError).match(
  (t) => {
    console.log("success", t);
  },
  ({ type, error }) => {
    switch (type) {
      case "prisma":
        console.log("Prisma Error", error.name);
        break;
      case "unknown":
        console.log("Unknwon Error", error.name);
        break;
      case "base":
        console.log("Unhandle Error", error.name);
        break;
    }
  }
);
