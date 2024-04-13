import { createRoom, joinRoom } from "./lib/action";

export default function Index() {
  return (
    <div className="flex bg-purple-700 h-screen w-screen items-center justify-center">
      <div className="flex shadow-md rounded-md h-[60vh] w-[40vw] bg-yellow-400 items-center justify-center">
        <div className="flex flex-col bg-yellow-400 border-2 h-[58vh] w-[39vw] border-purple-700 rounded-md items-center justify-center">
          <h1 className="flex text-white text-[7vh] mb-[35vh] font-bold">
            Peer Review
          </h1>
          <div className="flex items-center justify-center absolute mt-[15vh]">

            <form
              className="flex flex-col absolute ml-[15vw]"
              action={joinRoom}
            >
              <input
                type="text"
                name="name"
                placeholder="Nickname"
                className="input "
              ></input>
              <input
                type="text"
                name="code"
                placeholder="Class Code"
                className="mt-[2.5vh] input"
              ></input>
              <button
                type="submit"
                className="rounded-md w-[10vw] h-[5vh] mt-[3vh] ml-[1vw] shadow-lg hover:bg-purple-700 transition-colors ease-in hover:text-white"
              >
                Join
              </button>
            </form>

            <form
              className="flex flex-col absolute mr-[15vw]"
              action={createRoom}
            >
              <input
                type="text"
                name="name"
                placeholder="Teacher Name"
                className="input "
              ></input>
              <input
                type="text"
                name="question"
                placeholder="Question"
                className="mt-[2.5vh] input"
              ></input>
              <button
                type="submit"
                className="btn"
              >
                Start Class
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
