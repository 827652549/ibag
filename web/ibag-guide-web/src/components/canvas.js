import React from "react"
import { useEffect, useRef } from "react"

const Canvas = () => {
  const useRefCanvas = useRef()
  useEffect(() => {
    //render √
    let canvas = useRefCanvas.current,
      context = canvas.getContext("2d")

    context.strokeStyle = "#5dde30"

    context.shadowColor = "rgba(60,60,60,0.6)"
    context.shadowOffsetX = 3
    context.shadowOffsetY = 3
    context.shadowBlur = 4

    context.lineWidth = 10
    context.lineCap = "round"

    context.beginPath()
    context.moveTo(10.5, 35)
    context.quadraticCurveTo(25.8, 35, 30.6, 45.5)
    context.quadraticCurveTo(45, 94, 55.5, 50.5)
    context.quadraticCurveTo(70, 20.5, 95, 5.5)

    context.stroke()
  })
  return (
    <canvas
      ref={useRefCanvas}
      width={110}
      height={80}
      className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3 opacity-0 group-hover:opacity-100 "
    />
  )
}
export default Canvas
