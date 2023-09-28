"use client"
import { useLayoutEffect } from "react";

function Pointer() {
  const cursor = {
    PointerEvent: "none",
    position: "fixed",
    display: "block",
    borderRadius: "0",
    top: "0",
    left: "0",
    mixBlendMode: "difference",
    zIndex: "9999999999999999",
  };
  const circle = {
    position: "absolute",
    borderRadius: "30px",
    height: "10px",
    width: "10px",
  };

  useLayoutEffect(() => {
    const cursor = document.querySelector(".cursor");
    const circles = document.querySelectorAll(".circle");
    let [x, y] = [0, 0];

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });
    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    function Animation() {
      let x1 = x;
      let y1 = y;
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";

      circles.forEach((circle, index) => {
        circle.style.left = x1 - x + 12 + "px";
        circle.style.top = y1 - y - 3  + "px";

        circle.style.scale = 1 - index / circles.length;

        circle.x = x1;
        circle.y = y1;

        const nextCircle = circles[index + 1] || circles[0];
        x1 += (nextCircle.x - x1) * 0.3;
        y1 += (nextCircle.y - y1) * 0.3;
      });

      requestAnimationFrame(Animation);
    }

    Animation();
  });

  return (
    <div style={cursor} className="cursor">
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
      <div style={circle} className="circle"></div>
    </div>
  );
}

export default Pointer;