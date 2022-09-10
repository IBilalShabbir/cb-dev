import React from "react";
import bg3 from "../video/bg3.mp4";
import CustomCursor from "custom-cursor-react";

export default function Home() {
  return (
    <div className="homepage__container">
      <div className="homepage__container__wrapper__background">
        <div className="homepage__container__wrapper">
          <div className="homepage__container__wrapper__entry">
            <div className="homepage__container__wrapper__entry__content">
              Di
            </div>
            <div className="homepage__container__wrapper__entry__content__middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-edit-2"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <div className="homepage__container__wrapper__entry__content">
              ital
            </div>
          </div>
          <div className="homepage__container__wrapper__entry__second">
            <div className="homepage__container__wrapper__entry__content">
              DESIGN
            </div>
            <div className="homepage__container__wrapper__entry__content__end">
              <span>
                We build engaging user experience for early-stage startups by
                connecting the dots between users’ needs and the client’s
                business model.
              </span>
            </div>
          </div>
          <div className="homepage__container__wrapper__entry">
            <div className="homepage__container__wrapper__entry__content">
              company
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__start__main">
        <div className="homepage__start__main__vid">
          <video autoPlay loop muted width="100%">
            <source src={bg3} type="video/mp4" className="video"></source>
          </video>
          <CustomCursor
            targets={[".homepage__start__main__vid"]}
            customClass="custom-cursor"
            dimensions={1}
            smoothness={{
              movement: 0.2,
              scale: 0.3,
              opacity: 1,
            }}
            targetOpacity={1}
            targetScale={150}
          />
        </div>
      </div>
      <div className="more__about__us__section">
        <div className="more__about__us__section___container">
          <div className="more__about__us__section__left">
            <button>
              About Us
              <img
                src="https://assets.website-files.com/5ff17468919ea6609324630f/5ff1975e823a56d0bd715246_cta-ico_white.svg"
                alt=""
              />
            </button>
          </div>
          <div className="more__about__us__section__right">
            <div className="more__about__us__section__right__content">
              <div className="more__about__us__section__right__content__entry">
                Agency{" "}
              </div>
              <p>
                {" "}
                We're a team of UX strategists, UI/UX, Product & Motion
                designers, and business analysts, working closely to capture
                untapped business opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
