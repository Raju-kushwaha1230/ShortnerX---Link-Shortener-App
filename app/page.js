import Image from "next/image";
import Contact from "@/components/Contact";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-[50vh] grid grid-cols-2  ">
        <div className=" not-only: bg-slate-200   h-96">
          <h1 className="text-2xl font-bold text-center mt-10">Welcome to ShortenX</h1>
          <p className="text-center mt-4 text-gray-700">
            Simplify your links and track their performance.
          </p>
          <Link href="/sortner"><button  className="block mx-auto mt-6 px-4 py-2 hover:cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button></Link>
        </div>
        <div className=" relative h-96 bg-slate-200">
          <Image src={"/vector.jpg"} fill={true} className="object-cover  mix-blend-darken" alt="image" />
        </div>
      
      </div>
      <Contact/>
    </>
  );
}
