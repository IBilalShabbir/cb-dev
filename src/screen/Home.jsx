import React, { useEffect, useState } from "react";
import bg3 from "../video/bg3.mp4";
import { Fade } from "react-reveal";
import AboutUsButton from "../components/AboutUSButton";
import AllCasesCards from "../components/AllCasesCards";
import cardimg1 from "../video/cardimg1.mp4";
import card1 from "../video/card1.mp4";
import card2 from "../video/card2.mp4";
import card3 from "../video/card3.mp4";

export default function Home() {
  const [isBackToTop, setIsBackToTop] = useState(false);
  useEffect(() => {
    if (window.scrollY < 500) {
      setIsBackToTop(true);
    } else {
      setIsBackToTop(false);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY < 500) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    });
  }, [window.scrollY]);

  return (
    <div className="homepage__container">
      <div className="homepage__container__wrapper__background">
        <div className="homepage__container__wrapper">
          <Fade spy={isBackToTop} appear left distance="10%">
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
          </Fade>
          <Fade spy={isBackToTop} appear right distance="10%">
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
          </Fade>
          <Fade spy={isBackToTop} appear left distance="10%">
            <div className="homepage__container__wrapper__entry">
              <div className="homepage__container__wrapper__entry__content">
                company
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="homepage__start__main">
        <div className="homepage__start__main__vid">
          <video autoPlay loop muted width="100%">
            <source src={bg3} type="video/mp4" className="video"></source>
          </video>
        </div>
      </div>
      <div className="more__about__us__section">
        <div className="more__about__us__section___container">
          <AboutUsButton text="About Us" />

          <div className="more__about__us__section__right">
            <div className="more__about__us__section__right__content">
              <span className="more__about__us__section__right__content__entry">
                Agency{" "}
              </span>{" "}
              <span className="more__about__us__section__right__content__entry__last">
                We're a team of UX strategists, UI/UX, Product & Motion
              </span>
              designers,and business analysts, working closely to capture
              untapped business opportunities.
            </div>
          </div>
        </div>
      </div>
      <div className="our__past__projects">
        <div className="our__past__projects__container">
          <Fade bottom fraction="0.5">
            <div className="our__past__projects__container__top">OUR PAST</div>
          </Fade>
          <div className="our__past__projects__container__bottom">
            <Fade bottom>
              <div className="our__past__projects__container__top">
                PROJECTS
              </div>
            </Fade>
            <div className="our__past__projects__container__bottom__right">
              <Fade bottom fraction="0.8" distance="40%">
                500+ PROJECTS
              </Fade>
              <Fade right distance="10%">
                <div className="our__past__projects__container__bottom__right__line"></div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="all__cases__cards__section">
        <div className="all__cases__cards__section__container">
          <div className="all__cases__cards__left__entry">
            <button className="all__cases__cards__left__entry__button">
              All Cases
              <img
                src="https://assets.website-files.com/5ff17468919ea6609324630f/5ff1975e823a56d0bd715246_cta-ico_white.svg"
                alt=""
                className="all__cases__cards__left__entry__button__img"
              />
            </button>
          </div>
          <div className="all__cases__cards__right__content">
            <AllCasesCards
              active={false}
              heading="Metastaq"
              notification="'22"
              text="The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse."
              bottomheading="ITERFACE & WEBSITE"
              video={cardimg1}
            />
            <AllCasesCards
              active={true}
              heading="Nodo"
              notification="'22"
              text="Inertia Wheels MAX - the first digital camera controller designed to change the daunting operating experience. The wheels have a brand-new type of technology: circuit-board motors."
              bottomheading="PROMO WEBSITE"
              video={card1}
            />
            <AllCasesCards
              active={false}
              heading="11Sight"
              notification="'22"
              text="A new inbound video call and customer engagement platform designed for revenue acceleration. It connects prospect with companies in one click from anywhere on the web."
              bottomheading="PROMO WEBSITE"
              video={card2}
            />
            <AllCasesCards
              active={true}
              heading="Mozayix"
              notification="'20"
              text="An innovative risk assessment tool for companies planning to open or secure a new office. It encompasses cloud-based computing and real-time risk analysis and suggests preventive measures to enhance building security."
              bottomheading="INTERFACE"
              video={card3}
            />
            <AllCasesCards
              active={false}
              heading="Teachchain"
              notification="'20"
              text="A unique e-learning community built on a beneficial token system to motivate the educational process. The platform unites e-learners around the world."
              bottomheading="INTERFACE&WEBSITE"
              video={card1}
            />
            <AllCasesCards
              active={true}
              heading="Boel_It"
              notification="'20"
              text="Boel IT supplies highly specialized software solutions for the maritime industry. The software encompasses meaningful financial analysis and modeling of ship investments that contribute to better management of risks and hence better risk-adjusted returns."
              bottomheading="INTERFACE & APP"
              video={card2}
            />
            <AllCasesCards
              active={false}
              heading="Ukrainian Power"
              notification="'22"
              text="Ukrainian Power is a showcase of Ukrainian creative agencies of various specializations."
              bottomheading="PROMO WEBSITE"
              video={card3}
            />
            <AllCasesCards
              active={true}
              heading="GoPingu"
              notification="'20"
              text="A clever project management tool for any project in any niche. The easiest, fastest, most affordable way to use the systems and processes that help businesses run smoothly and grow."
              bottomheading="INTERFACE"
              video={cardimg1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
