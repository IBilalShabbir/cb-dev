import React from "react";
import { Fade } from "react-reveal";

export default function AboutUsButton({ text }) {
  return (
    <>
      <Fade left cascade distance="30%">
        <div className="more__about__us__section__left">
          <button>
            {text}
            <img
              src="https://assets.website-files.com/5ff17468919ea6609324630f/5ff1975e823a56d0bd715246_cta-ico_white.svg"
              alt=""
              className="more__about__us__section__left__button__img"
            />
          </button>
        </div>
      </Fade>
    </>
  );
}
