"use server";

import prisma from "@/lib/prisma";
import { UserBoxes } from "@prisma/client";

/**
 * Get user boxes
 * @param userId User id
 * @returns User box model array
 */
const getUserBoxes = async (userId: string): Promise<UserBoxes[]> => {
  return await prisma.userBoxes.findMany({
    where: {
      userId: userId,
      amount: {
        gt: 0,
      },
    },
    orderBy: {
      box: "asc",
    },
  });
};

export { getUserBoxes };
