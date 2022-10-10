import React from "react";
import AllCasesCards from "../components/AllCasesCards";
import card1 from "../video/card1.mp4";
import card2 from "../video/card2.mp4";
import card3 from "../video/card3.mp4";
import { Fade } from "react-reveal";
import cardimg1 from "../video/cardimg1.mp4";

export default function Ourpastprojectsection() {
  return (
    <>
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
    </>
  );
}
