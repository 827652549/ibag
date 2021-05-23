import React from "react";

const NoPage = ()=>{
  if (typeof window !== 'undefined') {
    window.location = '/';
  }
  return (<div>
    404! please check!
  </div>)
}

export default NoPage
