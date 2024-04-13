import { createReply } from "../action";

interface Reply {
  poster: string;
  reply: string;
  id: number;
}

export default function Comment({
  user,
  comment,
  replies,
  roomCode,
  responseId,
  poster
}: {
  user: string;
  comment: string;
  responseId: number;
  roomCode: string;
  replies: Reply[];
  poster: string;
}) {
  return (
    <div className="min-h-32 w-[30vw] flex flex-col bg-white border-gray-400 border-[1px] rounded-md shadow-xl overflow-x-hidden overflow-y-visible">
      <h2 className="text-black mt-2 ml-2 font-bold">{user}</h2>
      <p className="text-xs mt-2 ml-2">{comment}</p>
      {replies.length > 0 && (
        <div className="mt-2 ml-8 min-w-full min-h-12 flex flex-col">
          <h1 className="font-bold">Replies</h1>
          <div className="flex flex-col space-y-3">
            {replies.map((r) => (
              <div key={r.id} className="flex flex-col mt-2">
                <h1 className="text-black text-xs font-bold">{r.poster}</h1>
                <p className="text-xs">{r.reply}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <form className="flex w-full h-10 relative bottom-0 mt-8 mb-1" action={createReply}>
        <input
          type="text"
          className="h-full w-[80%] ml-2 bottom-0 rounded-full border-gray-400 border-[1px] text-center shadow-xl placeholder:text-center"
          placeholder={"Reply..."}
          name="reply"
        />
        <button className="absolute right-0 bottom-0 mr-3 w-[15%] h-full rounded-md bg-purple-500 text-white">
          Reply
        </button>
        <input type="hidden" name="roomCode" value={roomCode}/>
        <input type="hidden" name="poster" value={poster}/>
        <input type="hidden" name="responseId" value={responseId}/>

      </form>
    </div>
  );
}
