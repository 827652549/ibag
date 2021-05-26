import Canvas from "../components/canvas"
import React, { Fragment } from "react";

const Step1 = props => {
  const { onClick, data=[], lang } = props
  const languagePackage = {
    title: {
      en: "Step1: What project do you want to build？",
      zh: "第一步: 您要搭建一个什么项目？",
    },
  }
  return (
    <Fragment>
      <h1 className="font-mono text-2xl">{languagePackage.title[lang]}</h1>
      <div className=" h-5/6 flex justify-around flex-wrap content-around ">
        {data.map(e => {
          return (
            <div
              key={e}
              className="group relative h-1/3 w-2/5 bg-center bg-no-repeat bg-contain rounded-3xl cursor-pointer border-2 border-black shadow hover:shadow-inner"
              id={e}
              onClick={event => clickButtonHandle(event)}
            >
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-mono">
                {e}
              </span>
              <Canvas />
            </div>
          )
        })}
      </div>
    </Fragment>
  )

  function clickButtonHandle(event) {
    onClick(event.currentTarget.id)
  }
}

export default Step1
