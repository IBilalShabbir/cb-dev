import React from "react";

export default function Home() {
  return (
    <div className="homepage__container">
      <div className="homepage__container__wrapper">
        <div className="homepage__container__wrapper__entry">
          <div className="homepage__container__wrapper__entry__content">Di</div>
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
              connecting the dots between users’ needs and the client’s business
              model.
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
  );
}
