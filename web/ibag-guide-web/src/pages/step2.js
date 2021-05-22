import React, { Fragment, useEffect, useRef } from "react";

const Step2 = props => {
  const { onClick, data=[], lang } = props;
  const toolsRef = useRef();
  const languagePackage = {
    title: {
      zh: "第二步: 选择您的拓展工具。",
      en: "Step2: Choose your extends tools."
    }
  };
  useEffect(()=>{
    console.log('props');
  },[props.data])
  return (
    <Fragment>
      <h1 className="font-mono text-2xl">{languagePackage.title[lang]}</h1>
      <div ref={toolsRef}>
        {
              //生成每一组工具
              data.instructions &&
                data.instructions.map(e => {
                  return (
                    <div key={e.type[lang]} className="text-xl font-mono">
                      <span className="font-semibold">{e.type[lang]}:</span>
                      <div>
                        {e.items.map(item => {
                          return (
                            <label
                              className="m-4"
                              title={item.description[lang]}
                              key={item.module}
                            >
                              <input
                                type={e.isRadio ? "radio" : "checkbox"}
                                name={e.type[lang]}
                                data-instruction={item.module}
                                data-instruction-name={item.name}
                                className="m-0.5"
                                onChange={onChange}
                              />
                              {item.name}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })



        }
      </div>
    </Fragment>
  );

  function onChange (e) {
    onClick(
      Array.from(toolsRef.current.querySelectorAll("input:checked")).map(e => {
        return {
          instruction: e.dataset.instruction,
          name: e.dataset.instructionName
        };
      })
    );
    // console.log(toolsRef.current)
  }
};
export default Step2;
