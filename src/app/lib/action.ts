"use server";

import { client as database } from "./database";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createRoom = async (data: FormData) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const question = (data.get("question") as string) ?? "Temp Question";
  const name = (data.get("name") as string) ?? "Teacher";

  await database.room.create({
    data: { code, question, timestamp: new Date() },
  });

  redirect(`/${name}/${code}`);
};

export const joinRoom = async (data: FormData) => {
  const displayName = data.get("name") as string;
  const code = data.get("code") as string;

  const room = await database.room.findFirst({ where: { code: code } });
  if (!room) redirect("/room-not-found");
  redirect(`/${displayName === "host" ? "random user" : displayName}/${code}`);
};

export const createResponse = async (data: FormData) => {
  const answer = data.get("response") as string;
  const displayName = data.get("displayName") as string;
  const roomCode = data.get("roomCode") as string;

  await database.response.create({
    data: { answer, poster: displayName, roomCode },
  });

  revalidatePath(`${displayName}/${roomCode}`);
};

export const createReply = async (data: FormData) => {
  const reply = data.get("reply") as string;
  const poster = data.get("poster") as string;
  const responseId = parseInt(data.get("responseId") as string);
  const roomCode = data.get("roomCode") as string;

  const randomNumber = Math.floor(Math.random() * 100000);

  await database.reply.create({
    data: { poster, reply, responseId, roomCode, id: randomNumber },
  });

  revalidatePath(`${poster}/${roomCode}`);
};
