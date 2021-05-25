import React, { useState } from "react";
import axios from "axios"
const port = require('../../../../serve/serveConfig.json').port

import "tailwindcss/tailwind.css"
import Step1 from "../pages/step1"
import Step2 from "../pages/step2"
import Step3 from "../pages/step3"
import Step4 from "../pages/step4"
import json1 from "../../config/rely"

let config = {
  type: "",
  instructions: [],
  instructionsName: [],
  extends: {
    name: "",
    description: "",
    author: "",
    license: "",
  },
}
const Home = ()=>{
  const [json] = useState(json1)
  const names = json.map(e => {
    return e.name
  })
  const [step1Data] = useState(names)
  const [step2Data, setStep2Data] = useState()
  const [step4Data, setStep4Data] = useState(config)
  const [currStep, setCurrStep] = useState(1)
  const [language, setLanguage] = useState("en")

  return (
    <div className="absolute w-full h-full">
      <span className="absolute left-1/2 top-10 font-mono text-4xl transform -translate-x-1/2 -translate-y-1/2">
        ibag
      </span>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/12 h-3/5 bg-gray-200 rounded-xl shadow" />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3 w-7/12 h-3/5 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-300 shadow rounded-xl" />
      <div className="overflow-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/12 h-3/5 p-9 pb-0 bg-opacity-0 border-opacity-0 rounded-xl">
        {currStep === 1 && (
          <Step1 data={step1Data} lang={language} onClick={onClickOnStep1} />
        )}
        {currStep === 2 && (
          <Step2 data={step2Data} lang={language} onClick={onClickOnStep2} />
        )}
        {currStep === 3 &&
        <Step3 lang={language} onClick={onClickOnStep3} />
        }
        {currStep === 4 && (
          <Step4 data={step4Data} lang={language} onClick={onClickOnStep4} />
        )}

      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 p-3 text-9xl text-gray-400 cursor-pointer hover:text-gray-800"
        onClick={onClickLastStep}
      >
        &lt;
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-9xl text-gray-400 cursor-pointer hover:text-gray-800"
        onClick={onClickNextStep}
      >
        &gt;
      </div>
      <div className="absolute top-0 right-0 p-1 text-xl text-gray-400 cursor-pointer">
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="zh">简体中文</option>
        </select>
      </div>
    </div>
  )

  function onClickOnStep1(data) {
    console.log('step1 click');
    config.type = data
    let result
    json.forEach(e => {
      if (e.name === data) {
        result = e
      }
    })
    setStep2Data(result)
    setCurrStep(2)

  }

  function onClickOnStep2(data) {
    config.instructions = data.map(e => e.instruction)
    config.instructionsName = data.map(e => e.name)
    // console.log(config);
  }

  function onClickOnStep3(data) {
    config.extends = data
    // console.log(config);
    setStep4Data(config)
  }

  function onClickOnStep4() {
    console.log(config)
    axios
      .post("http://localhost:"+port+"/start", config)
      .then(function (res) {
      alert('Succeed! Please check if the output folder exists in the current directory.')
      console.log("web触发", res)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  //上一步按钮
  function onClickLastStep() {
    if (currStep > 1) {
      setCurrStep(currStep - 1)
    }
  }

  //下一步按钮
  function onClickNextStep() {
    if (currStep===1){
      alert('Please select a framework.')
      return
    }
    if (currStep < 4) {
      setCurrStep(currStep + 1)
    }
  }

  function handleLanguageChange(e) {
    setLanguage(e.target.value)
  }
}

export default  Home
