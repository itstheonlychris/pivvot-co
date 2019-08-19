import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import logo from "../assets/pivvot_logo_animation.gif"
import logovideo from "../assets/pivvot_logo_animation.mp4"

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Pivvot</title>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
    <div className="container mx-auto px-4 max-w-3xl lg:max-w-4xl font-sans flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="flex flex-col justify-center text-center md:text-left">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-64 h-64 mt-20 mx-auto md:mx-0"
          >
            <source src={logovideo} type="video/mp4" />>
          </video>
          {/* <img
            src={logo}
            alt="pivvot logo"
            className="w-64 h-64 mt-20 mx-auto md:mx-0"
          /> */}
          <div className="mt-10 mb-10">
            <h1 className="text-indigo-700 text-5xl font-bold">
              Pivvot.co is changing...
            </h1>
          </div>
        </div>

        <p className="pb-10 text-xl">
          <span className="italic">It's not going away, </span>
          but we aren't taking any new client work for now.
        </p>
        <p className="font-bold">
          In the meantime, here's where to find Chris:
        </p>
        <ul className="list-disc ml-10 py-5">
          <li className="py-2">
            <a
              href="itstheonlychris.com"
              className="underline text-indigo-700 hover:text-indigo-500 "
            >
              itstheonlyChris.com
            </a>
          </li>
          <li className="py-2">
            <a
              href="twitter.com/itstheonlychris"
              className="underline text-indigo-700 hover:text-indigo-500 "
            >
              @itstheonlychris
            </a>
          </li>
          <li className="py-2">
            <a
              href="authorsprojects.com"
              className="underline text-indigo-700 hover:text-indigo-500 "
            >
              Authors
            </a>
          </li>
        </ul>
      </div>

      <footer className="w-full border-t border-grey p-4 pin-b">
        &copy; 2019 Chris Zachary
      </footer>
    </div>
  </Fragment>
)
