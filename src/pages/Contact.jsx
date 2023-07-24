import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from '../components/NavBar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
   <div className="bg-[#25262a] text-white overflow-hidden">
  <Navbar/>
   <div className="bg-[#25262a] text-white flex items-center justify-center pr-52 flex-wrap overflow-hidden ">
        <div className="flex flex-row-reverse ">
          <div className="isolate px-6 pt-20 lg:px-8 mr-52">
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-2 text-lg leading-8 text-white-600">
                Drop All your Queries here, I will Respond you as soon as
                possible.
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-white-900"
                  >
                    Full Name
                  </label>
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center"></div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      id="name"
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                      className="block w-full rounded-md border-0 px-3.5 py-2  text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white rounded-xl h-12 bg-[#25262a]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white rounded-xl h-12 bg-[#25262a]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      placeholder="Message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white rounded-xl bg-[#25262a]"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10" onClick={clickHandler}>
                <Link to={"/"}>
                  {" "}
                  <Button title={"Send To Me"} />
                </Link>
              </div>
            </form>
          </div>
          <div className="w-[26rem] mr-40 mt-60">
            <h1 className="text-4xl font-bold mb-10">Get In Touch With Me</h1>
            <p className="text-xl fony-normal">
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert Factual knowledge is less
              prized when everything you ever need to know can be found at doing
              everything.
            </p>
          </div>
        </div>

        <Footer />
      </div>
   </div>
  );
};

export default Contact;
