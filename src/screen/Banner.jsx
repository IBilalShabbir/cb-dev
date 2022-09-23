import React, { useEffect, useState } from "react";
import AnimatedText from "react-animated-text-content";
import Fade from "react-reveal/Fade";
export default function Banner() {
  const [show, setShow] = useState(true);
  const array = ["PRODUCTS", "DESIGN", "LOVE"];
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShow(show + 1 < array.length ? show + 1 : 0);
    }, 1700);
  }, [show]);

  return (
    <div className="banner" style={{ animation: "banner_animation 0s" }}>
      <div className="banner__heading">
        <Fade bottom distance="200%" duration={2000}>
          <div className="banner__top">We</div>
        </Fade>

        <div className="banner__middle">
          {array
            .filter((item, i) => i === show)
            .map((item) => (
              <AnimatedText
                type="chars"
                interval={0.1}
                duration={0.5}
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
        <Fade bottom distance="200%" duration={2000}>
          <div className="banner__bottom">Products</div>
        </Fade>
      </div>
    </div>
  );
}
