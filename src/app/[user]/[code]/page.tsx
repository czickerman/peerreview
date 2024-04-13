import { notFound } from "next/navigation";
import { getRoomData } from "../../lib/data";
import relativeTime from "../../lib/relativeTime";
import { createResponse } from "../../lib/action";
import Comment from "../../lib/ui/Comment";

export default async function RoomView({ params }: { params: { user: string; code: string } }) {
  const roomData = await getRoomData(params.code);
  if (!roomData) notFound();

  return (
    <div className="flex flex-col bg-purple-700 min-h-screen w-screen items-center overflow-scroll">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-yellow-400 text-5xl font-semibold text-center">{roomData.question}</h1>
        <h2 className="text-gray-300 text-2xl">
          Asked by teacher {relativeTime(new Date(), new Date(roomData.timestamp))}
        </h2>
        <h2 className="text-gray-300 text-2xl">Code is <span className="font-extrabold">{params.code}</span></h2>
      </div>
      <div className="h-[15vh] w-[30vw] rounded-md bg-yellow-400 mt-24 shadow-2xl">
        <form className="flex flex-col relative h-full bg-yellow-400 shadow-lg rounded-md" action={createResponse}>
          <textarea
            name="response"
            className="w-[90%] h-[45%] mt-3 absolute ml-3 text-black placeholder:text-black bg-yellow-400 resize-none "
            placeholder="Enter Response"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white shadow-lg absolute left-3 bottom-3 w-20 h-11 rounded-lg hover:bg-purple-700 transition-colors ease-in"
          >
            Submit
          </button>
          <input type="hidden" name="displayName" value={params.user} />
          <input type="hidden" name="roomCode" value={params.code} />
        </form>
      </div>
      <div className="mt-12 flex flex-col space-y-8">
        {roomData.responses.map((r) => (
          <Comment
            user={r.poster}
            comment={r.answer}
            replies={r.replies}
            key={r.id}
            poster={params.user}
            responseId={r.id}
            roomCode={params.code}
          />
        ))}
      </div>
    </div>
  );
}
