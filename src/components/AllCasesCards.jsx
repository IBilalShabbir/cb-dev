import React from "react";

export default function AllCasesCards({
  active,
  heading,
  notification,
  text,
  bottomheading,
  video,
}) {
  return (
    <div
      className={
        active
          ? "all__cases__cards__right__entry__active"
          : "all__cases__cards__right__entry"
      }
    >
      <div
        className={
          active
            ? "all__cases__cards__right__entry__container__active"
            : "all__cases__cards__right__entry__container"
        }
      >
        <div className="all__cases__cards__right__entry__data">
          <div className="all__cases__cards__right__entry__data__first">
            <div className="all__cases__cards__right__entry__data__first__text">
              {heading} <span>{notification}</span>
            </div>
            <div className="all__cases__cards__right__entry__data__first">
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
          </div>
          <div className="all__cases__cards__right__entry__data__middle__text">
            {text}
          </div>
        </div>
        <div className="all__cases__cards__right__entry__data__bottom__entry">
          {bottomheading}
        </div>
      </div>
      <div className="all__cases__cards__right__entry__card__contant">
        <video
          autoPlay
          loop
          muted
          width="100%"
          className="all__cases__cards__right__entry__card__video"
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}
