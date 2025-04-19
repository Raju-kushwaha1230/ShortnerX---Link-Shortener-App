import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-[85vh]  flex flex-col items-center   ">
        <h1 className="font-bold text-3xl my-3">Contact Us</h1>
        <p className="text-gray-500 font-mono my-2">
          If you have any questions, feel free to reach out to us!
        </p>
        <form className="flex flex-col gap-5 justify-center items-center bg-slate-100 p-20 rounded-2xl">
          <div className="flex   justify-center items-center">
            <input
              type="text"
              className="h-10 p-2 bg-slate-200 rounded-2xl w-2xl focus:outline-blue-300"
              id="name"
              name="name"
              placeholder="Enter ur Name"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              className="h-10 p-2 bg-slate-200 rounded-2xl w-2xl focus:outline-blue-300"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <textarea
              className="h-36 p-2 bg-slate-200 rounded-2xl w-2xl focus:outline-blue-300"
              id="message"
              name="message"
              rows="4"
              placeholder="messages"
              required
            ></textarea>
          </div>
          <button
            className="h-10 p-2 bg-violet-500 rounded-2xl w-2xl focus:outline-blue-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
