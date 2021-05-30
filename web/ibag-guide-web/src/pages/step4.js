import React, { Fragment, useState } from "react"

const Step4 = props => {
  const {
    onClick,
    data = { instructions: [], instructionsName: [], extends: [] },
    lang,
  } = props
  const languagePackage = {
    title: {
      zh: "第四步: 预生成配置。",
      en: "Step4: Pre-build configuration.",
    },
    go: {
      zh: "开始生成",
      en: "Start Build",
    },
  }
  const [step4Config] = useState([
    { zh: "项目类型", en: "Project Type" },
    { zh: "拓展工具", en: "Extends Tools" },
    { zh: "项目名", en: "Project Name" },
    { zh: "描述", en: "Description" },
    { zh: "作者", en: "Author" },
    { zh: "许可证", en: "License" },
  ])
  return (
    <Fragment>
      <h1 className="font-mono text-2xl">{languagePackage.title[lang]}</h1>
      <div className="text-xl font-mono">
        <div className="text-xl font-mono">
          <span className="font-semibold">{step4Config[0][lang]}：</span>
          <label>{data.type}</label>
        </div>
        <div className="text-xl font-mono">
          <span className="font-semibold">{step4Config[1][lang]}：</span>
          <label>
            {data.instructionsName.map(e => (
              <label
                className="m-2 inline-block	border-b-2 border-current"
                key={e}
              >
                {e}
              </label>
            ))}
          </label>
        </div>
        <div className="text-xl font-mono">
          <span className="font-semibold">{step4Config[2][lang]}：</span>
          <label className="m-2">{data.extends.name}</label>
        </div>
        <div className="text-xl font-mono">
          <span className="font-semibold">{step4Config[3][lang]}：</span>
          <label className="m-2">{data.extends.description}</label>
        </div>
        <div className="text-xl font-mono">
          <span className="font-semibold">{step4Config[4][lang]}：</span>
          <label className="m-2">{data.extends.author}</label>
        </div>
        <div className="text-xl font-mono">
          <span className="font-semibold">{step4Config[5][lang]}：</span>
          <label className="m-2">{data.extends.license}</label>
        </div>
        <div className="text-xl font-mono flex justify-center">
          <button
            className="w-2/5 h-12 bg-center bg-no-repeat bg-contain rounded-3xl cursor-pointer border-2 border-black shadow outline-none focus:outline-none hover:shadow-inner hover:bg-black hover:bg-opacity-10"
            onClick={HandleButtonClick}
          >
            {languagePackage.go[lang]}
          </button>
        </div>
      </div>
    </Fragment>
  )

  /**
   * 开始生成
   * @constructor
   */
  function HandleButtonClick() {
    onClick()
  }
}

export default Step4
