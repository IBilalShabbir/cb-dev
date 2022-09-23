import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

export default function ScrollCards() {
  const child = { width: `30em`, height: `100%` };
  const parent = { width: `60em`, height: `100%` };
  return (
    <>
      <div style={parent}>
        <HorizontalScroll>
          <div style={child}>helo</div>
          <div style={child}>helo</div>
          <div style={child}>helo</div>
        </HorizontalScroll>
      </div>
    </>
  );
}
