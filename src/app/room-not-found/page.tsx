import Link from "next/link";

export default function RoomNotFound() {
    return (
        <div className="flex bg-slate-800 h-screen w-screen items-center justify-center">
            <div className="border-[1vh] border-red-400 h-[97vh] w-[97vw] flex  flex-col items-center justify-center rounded-md shadow-md">
                <h1 className=" text-[10vh] text-red-400">Error</h1>
                <h2 className=" text-[5vh]  text-red-400 mb-[3vh]">Room not found</h2>
                <Link href={"/"}>
                  <button className="errorBtn">Click here to return</button>
                </Link>
            </div>
            
        </div>
    );
}