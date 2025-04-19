"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const Sortner = () => {
  const [url, seturl] = useState("")
  const [shortUrl, setsetshortUrl] = useState("")
  const [generated, setgenerated] = useState("")

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {

        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        console.log(`url ${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        seturl("")
        setsetshortUrl("")


        console.log(result)
        // alert(result.message)


      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='min-h-[85vh]      '>
      <div className="min-h-[85vh]  flex flex-col items-center   ">
        <h1 className="font-bold text-3xl my-3 text-green-600">Shortner URL</h1>
        <p className="text-gray-500 font-mono my-2">
          Easily shorten your long URLs into manageable links with just one click.
        </p>
       <div className="flex flex-col gap-5 justify-center items-center bg-slate-100 p-20 rounded-2xl">
          <div className="flex   justify-center items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => seturl(e.target.value)}
              className="h-10 p-2 bg-slate-200 rounded-2xl w-2xl focus:outline-blue-300"
              id="url"
              name="url"
              placeholder="Enter URL"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              value={shortUrl}
              onChange={(e) => { setsetshortUrl(e.target.value) }}
              className="h-10 p-2 bg-slate-200 rounded-2xl w-2xl focus:outline-blue-300"
              type="sortnerURL"
              name="sortnerURL"
              placeholder="Sorten URL"
              required
            />
          </div>


          <button onClick={handleSubmit}
            className="h-10 p-2 bg-violet-500 rounded-2xl w-2xl focus:outline-blue-300"
            type="submit"
          >
            Generate
          </button>
          <div>

            {generated && <span>Your Link : <code> <Link target="_blank" href={generated}>{generated}</Link>
            </code>
            </span> 
            }
          </div>
          </div>

      </div>

    </div>
  )
}

export default Sortner