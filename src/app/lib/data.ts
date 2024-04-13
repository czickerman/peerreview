import { unstable_noStore } from "next/cache";
import { client as database } from "./database";

export const getRoomData = async (code: string) => {
  unstable_noStore();

  const room = await database.room.findUnique({
    where: { code: code },
    select: {
      responses: { select: { answer: true, poster: true, replies: true, id: true } },
      question: true,
      timestamp: true,
    },
  });

  return room;
};
