import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  return (
    <>
      <div className="flex justify-between rounded p-4 border border-slate-300 my-3 gap-5 items-start ">
        <div>
          <h2 className="font-bold text-2xl">Title</h2>
          <p>Topic Description</p>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}
