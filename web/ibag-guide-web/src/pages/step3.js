import React, { Fragment, useState } from "react"

const Step3 = props => {
  let extendsConfig = {
    name: "",
    description: "",
    author: "",
    license: "",
  }
  const [step3Config] = useState([
    { zh: "项目名", en: "name" },
    { zh: "描述", en: "description" },
    { zh: "作者", en: "author" },
    { zh: "许可证", en: "license" },
  ])
  const languagePackage = {
    title: {
      zh: "第三步: 其他配置.",
      en: "Step3: Other configuration.",
    },
  }
  const { onClick, lang } = props
  return (
    <Fragment>
      <h1 className="font-mono text-2xl">{languagePackage.title[lang]}</h1>
      <div className="text-xl font-mono">
        {step3Config.map(e => {
          return (
            <div className="m-6" key={e[lang]}>
              <label className="m-4">
                <span className="inline-block w-1/5 transform translate-y-2">
                  {e[lang]}:
                </span>
                <input
                  type="text"
                  className="m-0.5 bg-transparent outline-none border-b-2 border-black w-3/5"
                  onChange={onChange}
                  name={e["en"]}
                />
              </label>
            </div>
          )
        })}
      </div>
    </Fragment>
  )

  function onChange(e) {
    extendsConfig[e.target.name] = e.target.value
    onClick(extendsConfig)
  }
}
export default Step3
