import clientPromise from "@/lib/mongodb"



export async function POST(req) {
  const body = await req.json()
  const client = await clientPromise;
  const db = client.db("shortner");
  const collection = db.collection("urls");

  const  doc=  await collection.findOne({shortUrl: body.shortUrl})
  if(doc){
    return Response.json({success:false,error:true, message: 'Url already exists' })
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
    createdAt: new Date(),

  })



  return Response.json({success:true,error:false, message: 'Url generated' , result: result })
}