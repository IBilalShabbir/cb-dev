import React, { useEffect, useState } from "react";
import bg3 from "../video/bg3.mp4";
import { Fade } from "react-reveal";
import AboutUsButton from "../components/AboutUSButton";
import AllCasesCards from "../components/AllCasesCards";
import ScrollCards from "../components/ScrollCards";
import cardimg1 from "../video/cardimg1.mp4";
import card1 from "../video/card1.mp4";
import Ourpastprojectsection from "../components/Ourpastprojectsection";

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
                Agency
              </span>
              <span className="more__about__us__section__right__content__entry__last">
                We're a team of UX strategists, UI/UX, Product & Motion
              </span>
              designers,and business analysts, working closely to capture
              untapped business opportunities.
            </div>
          </div>
        </div>
      </div>
      <Ourpastprojectsection />
      <div className="our__services__card__section">
        <div className="our__services__card__section__container">
          <div className="our__services__card__section__left__entry">
            <button className="all__cases__cards__left__entry__button">
              Our Services
              <img
                src="https://assets.website-files.com/5ff17468919ea6609324630f/5ff1975e823a56d0bd715246_cta-ico_white.svg"
                alt=""
                className="all__cases__cards__left__entry__button__img"
              />
            </button>
          </div>
          <div className="our__services__card__right">
            <div className="our__services__us__card__right">
              <div className="more__about__us__section__right__content">
                <span className="more__about__us__section__right__content__entry">
                  SERVICES
                </span>
                <span className="more__about__us__section__right__content__entry__last">
                  We combine human empathy and intelligent data to provide
                </span>
                the highest level of satisfaction for our customers and their
                users.
              </div>
            </div>
            <div className="our__services__card__left">
              <div className="our__services__card__right__content__left__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    Web <br /> Development
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    We design intelligent web products that boost business
                    operations. Migrating your business processes into highly
                    efficient web apps, we facilitate daily work operations,
                    streamline collaboration and workflows, and increase user
                    productivity.
                  </div>
                </div>
              </div>
              <div className="our__services__card__right__content__right__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    SaaS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    Our SaaS design resonates with users across every touchpoint
                    and unlocks the true value of your digital solution right at
                    the onboarding. Taking users further, we address their
                    needs, thus safeguarding against churn rates and increasing
                    monthly recurring revenue (MRR).
                  </div>
                </div>
              </div>
            </div>
            <div className="our__services__card__left">
              <div className="our__services__card__right__content__left__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    Mobile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    We help companies supercharge their mobile products with a
                    truly convenient UI/UX design. Helping users smoothly
                    navigate through a mobile interface, we facilitate user
                    adoption and engagement, detour installations, and, thus,
                    drive businesses forward.
                  </div>
                </div>
              </div>
              <div className="our__services__card__right__content__right__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    Software To Cloud
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    We deliver maximum value when migrating your on-premise
                    desktop to a web app or SaaS by upgrading, refining, and
                    reinforcing the software design. Keeping product metrics in
                    focus, we help you shift to a cloud-based model in a way
                    that works for you and your users.
                  </div>
                </div>
              </div>
            </div>
            <div className="our__services__card__left">
              <div className="our__services__card__right__content__left__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    Fintech
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    We design smart, in-demand financial solutions, delighting
                    your audience with innovations in the finance sector.
                    Putting end-users at the forefront and creating a high-end
                    experience, we improve your business metrics.
                  </div>
                </div>
              </div>
              <div className="our__services__card__right__content__right__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    Edtech
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    We modernize the decades-old learning experience by
                    designing truly immersive digital products. Applying
                    data-driven design methodology, we forge solid ties between
                    EdTech innovations and end-users.
                  </div>
                </div>
              </div>
            </div>
            <div className="our__services__card__left">
              <div className="our__services__card__right__content__left__side">
                <div className="our__services__card__right__content__right__side__container">
                  <div className="our__services__card__elft__right__heading">
                    Fintech
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <div className="our__services__card__right__content__left__side__middle"></div>
                  <div className="our__services__card__right__content__left__side__bottom">
                    We design smart, in-demand financial solutions, delighting
                    your audience with innovations in the finance sector.
                    Putting end-users at the forefront and creating a high-end
                    experience, we improve your business metrics.
                  </div>
                </div>
              </div>
            </div>
            <div className="text"></div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            hic atque vitae consequatur alias! Magnam unde soluta molestiae
            aliquam maxime vel modi enim quas accusamus veniam quia laborum sed
            porro odio voluptatibus commodi, numquam hic assumenda blanditiis.
            Expedita itaque sunt ab maxime tempore quas similique! Eveniet
            molestiae accusantium, optio dignissimos nobis iste similique, unde
            sapiente hic, ipsa excepturi eum quibusdam! Dolorem rem, cumque
            assumenda voluptas porro dignissimos ex pariatur ipsa architecto
            accusamus blanditiis doloremque, delectus nam maxime vel reiciendis
            tempora quibusdam nulla error minima culpa nisi impedit qui at. A in
            fuga quis delectus laborum. Eaque, maiores? Facilis natus eligendi
            illum, suscipit vel esse voluptate dignissimos fugit, delectus
            perspiciatis ex consectetur. Sunt iste aliquid nulla, fugit
            repudiandae eligendi incidunt qui eaque possimus, consequuntur
            nostrum minus cumque tempora pariatur magnam ab quos quidem,
            officiis culpa! Ipsum commodi fugit, perferendis voluptatem ipsam ut
            reiciendis modi corporis, consequuntur facilis non ullam? Pariatur
            doloribus quae explicabo veniam sunt illo voluptatibus corrupti
            nostrum deleniti labore voluptatum quidem mollitia eos repudiandae,
            necessitatibus quaerat sed ducimus, voluptatem laborum magni minus
            cumque! Veritatis veniam fuga nihil iure odio libero, sequi saepe
            ducimus possimus ullam eveniet tempore eum excepturi quod deleniti
            dignissimos nesciunt in iusto molestiae provident? Eveniet, ea
            molestiae cum esse officia blanditiis accusantium numquam, nihil
            ipsum optio, aliquid quos debitis dolorum consequuntur natus!
            Deserunt doloremque magnam earum magni expedita ex? Necessitatibus
            perspiciatis quaerat beatae illum! Exercitationem odit impedit hic
            voluptatem. Dolores, quasi itaque! Totam quibusdam illo ad eius
            quasi quis. Magni nisi repellat saepe consequuntur nihil doloremque
            illum, sapiente earum? Aliquam quos reiciendis incidunt nobis eum
            atque porro nam, labore ipsum consequuntur, voluptas aspernatur
            doloremque corrupti quas molestiae deserunt laudantium aut quis hic.
            Quam facere assumenda quibusdam. Atque suscipit error ipsam expedita
            quod nisi, voluptate sequi quo, quaerat dolore harum nihil sunt vero
            provident. Perferendis unde similique aliquam iste obcaecati eaque
            velit aperiam, quod natus sit itaque quae dolorem quisquam quaerat
            tenetur voluptatibus eius! Ab architecto a asperiores repellat,
            delectus, voluptas placeat earum necessitatibus fugiat enim
            inventore libero perspiciatis ea dicta id consequuntur veniam
            mollitia quia impedit! Quaerat aliquam quas optio accusantium,
            repellat asperiores iste quidem soluta temporibus facilis architecto
            quasi, fugit, libero esse neque distinctio nobis nostrum consequatur
            nemo eos blanditiis molestias excepturi officia? Aliquam maiores
            quia ratione! Adipisci accusantium error ducimus? Ab tempora
            repellat vel ratione quasi eum hic, debitis odit facilis suscipit.
            Incidunt voluptates maiores soluta, nisi reprehenderit sed optio
            asperiores vero. Minima, quam excepturi? Deleniti error labore quam
            aut in odit! Nulla dolore atque cum sint ad aperiam in possimus
            magnam libero quibusdam deserunt quasi, temporibus deleniti
            perspiciatis amet, quod est dolorum illum a expedita incidunt.
            Quidem enim, cupiditate libero consequuntur, rem qui vero aut odio
            quos optio sed debitis odit eligendi minus consequatur, distinctio
            neque placeat eveniet aperiam. Repellendus ipsa hic doloribus
            molestiae harum perferendis, eligendi architecto doloremque
            consequatur cupiditate natus sapiente modi quas. Necessitatibus,
            sapiente? Reiciendis repellat assumenda nulla distinctio optio
            cupiditate, ducimus earum fugiat veritatis voluptates iure facere
            architecto nobis quis at consequuntur voluptate porro, ex, qui
            sapiente aut incidunt. Suscipit, laborum similique? Vero, provident
            quia non eum accusamus quasi voluptate minima, architecto tempore
            maiores possimus velit? Saepe ab eius molestias similique numquam
            consequuntur repudiandae modi blanditiis culpa perspiciatis
            reprehenderit nulla necessitatibus sit non veritatis, dicta
            reiciendis, error atque ipsum illum. Maxime itaque nobis quos
            perspiciatis aliquid ab hic exercitationem magni commodi,
            reprehenderit porro consectetur, deserunt dolor, placeat nostrum
            soluta dolorum cupiditate laudantium eveniet obcaecati et delectus
            tempore labore expedita. Soluta asperiores, quo quibusdam adipisci
            mollitia, nesciunt omnis eligendi ex consequuntur nobis fuga alias
            atque aperiam inventore tempora quod officia rem aut ad labore cum
            placeat animi, voluptatum repellat. Odio earum dolorum eos deserunt
            libero aspernatur velit sed, dolores nesciunt cumque totam ut iste
            cupiditate non officia ducimus nulla molestias sunt mollitia
            officiis, magni incidunt perferendis? Maiores voluptatem odio
            placeat facere totam consectetur blanditiis magni tempora mollitia,
            vel nemo nam deleniti. Incidunt dolore reprehenderit in delectus
            asperiores, dolorum eaque numquam maiores error velit reiciendis
            magni corporis obcaecati quia natus itaque! Dolore est voluptatibus,
            blanditiis quam laudantium hic suscipit nostrum quidem facilis odio
            neque dolorem quis illo mollitia eaque reiciendis nisi nam
            accusantium, sunt cum? Exercitationem eius veniam ea distinctio
            expedita iusto soluta illo eaque ab consequuntur dolorem nihil
            adipisci dolorum magni quibusdam illum debitis, magnam a minima
            reiciendis sed doloremque quam dignissimos. Exercitationem eum
            nostrum et pariatur magnam, iure nobis reprehenderit, animi tempore
            mollitia quisquam eligendi nulla aspernatur asperiores qui debitis
            repellat laudantium excepturi recusandae. Facilis sint
            necessitatibus animi nemo. Iusto, modi, eius quidem maxime
            doloremque qui ullam ipsam eos aperiam nesciunt rerum deserunt
            corporis fugit, ut quae quas sint dolor? Adipisci velit atque,
            excepturi vero dolor fugit, temporibus vitae deserunt nihil omnis
            vel officiis, impedit dolorum aperiam! Architecto dolor saepe
            accusantium voluptatibus in possimus expedita quibusdam labore aut
            commodi adipisci facilis voluptates harum non nulla beatae unde
            illum, necessitatibus esse. Fuga ex nostrum dignissimos, a veritatis
            delectus. Facilis praesentium doloribus eveniet, cupiditate beatae
            inventore enim laudantium quas perspiciatis tenetur accusantium
            nihil exercitationem! Dolorem quidem, excepturi nisi quod esse,
            magnam voluptate voluptatum recusandae quas atque veniam ratione
            laudantium vitae nesciunt quam ullam aperiam quae optio quo quasi
            exercitationem animi nobis? Excepturi porro tempore suscipit
            veritatis magni accusamus laborum nulla, earum voluptates illo
            facilis maxime id odit deleniti dolores delectus fuga ipsum soluta!
            Quidem impedit incidunt porro eius dolorum eaque ratione soluta ut
            nam, reprehenderit sed, doloremque animi nihil minus. Iure fugiat
            tempora possimus laboriosam nam, deserunt facere repellat odit
            cumque aliquid aspernatur laudantium adipisci in! Consectetur
            cupiditate officiis accusamus alias excepturi debitis, itaque
            delectus laboriosam dolorem illo, maiores dolorum adipisci laborum?
            Eius nesciunt a laboriosam esse velit fugit, natus molestias minima
            totam laborum iste reiciendis non nemo sed voluptates nostrum
            exercitationem vero repudiandae reprehenderit nihil nam fuga quidem.
            Corrupti, dolores quia. Voluptatum delectus nobis qui nulla, facilis
            repellendus. Voluptate quas sequi tenetur libero culpa obcaecati,
            sit cum repudiandae! Sunt, mollitia? Molestias unde omnis nam
            laudantium dicta blanditiis, accusamus temporibus aut sunt, nobis
            suscipit deserunt minus voluptatibus nulla numquam tenetur adipisci
            aperiam totam! Eum adipisci labore vel corporis a id earum.
          </div>
        </div>
      </div>
      <ScrollCards />
    </div>
  );
}
