import { redirect } from "next/navigation";

import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shortUrl } = await params;
  const client = await clientPromise;
  const db = client.db("shortner");
  const collection = db.collection("urls");
  const  doc=  await collection.findOne({shortUrl: shortUrl})
  if(doc){
    redirect(doc.url)
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
  }



  return <div>My Post: {shortUrl}</div>;
}
