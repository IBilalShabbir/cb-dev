import React, { useEffect, useState } from "react";
import AnimatedText from "react-animated-text-content";
export default function Banner() {
  const [show, setShow] = useState(true);
  const array = ["to", "Crazy", "Biengs"];
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShow(show + 1 < array.length ? show + 1 : 0);
    }, 1500);
  }, [show]);

  return (
    <div
      className="banner"
      style={{ animation: show === 2 ? "banner_animation 800ms" : "" }}
    >
      <div className="banner__heading">
        <div className="banner__top">Welcome</div>

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
                  scale: 3,
                }}
              >
                {item}
              </AnimatedText>
            ))}
        </div>
        <div className="banner__bottom">Software House</div>
      </div>
    </div>
  );
}
