import React, { useEffect, useState } from "react";
import AnimatedText from "react-animated-text-content";
export default function Banner() {
  const [show, setShow] = useState(0);
  const array = ["hello1", "hello2", "world1", "world2"];
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShow(show + 1 < array.length ? show + 1 : 0);
    }, 1200);
  }, [show]);

  return (
    <div
      className="banner"
      style={{ animation: show === 2 ? "banner_animation 500ms" : "" }}
    >
      <div className="banner__heading">
        <div className="banner__top">PRODUCT</div>

        <div className="banner__middle">
          {array
            .filter((item, i) => i === show)
            .map((item) => (
              <AnimatedText
                type="chars"
                interval={0.1}
                duration={0.7}
                animationType="wave"
                animation={{
                  x: "0px",
                  ease: "ease",
                  scale: 1,
                }}
              >
                {item}
              </AnimatedText>
            ))}
        </div>
        <div className="banner__bottom">PRODUCT</div>
      </div>
    </div>
  );
}
