export default function AboutPage() {
  return (
    <div className="container mx-auto p-5">
      <section className="flex flex-col gap-8">
        <h1 className="font-serif text-3xl font-bold text-black dark:text-white">
          About Me
        </h1>
        <h2 className="text-xl font-semibold">
          안녕하세요, 프론트엔드 개발자 이승학입니다.
        </h2>
        <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-2 text-neutral-800 dark:text-neutral-200">
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              주로 <b>리액트와 타입스크립트</b>를 기반으로 개발하며, 다양한
              사람들과 함께 <b>소통하며 작업하는 것</b>을 좋아합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              <b>주변의 다양한 문제를 능동적으로 해결하고 싶은 마음</b>에
              개발자가 되었습니다. 아이디어만 있다면 생각하는 모든것을 펼칠 수
              있는 이곳에서, 언젠가 저만의 세상을 그려내고 싶습니다.{" "}
              <b>좋은 기술로서 사람이 서로 돕는 문화를 만들어가는 것</b>이 제가
              꿈꾸는 개발자로서의 삶입니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              꾸준한 개발과 성장 습관을 만들기 위해 알고리즘 공부, 프로젝트
              리펙토링 등{" "}
              <b>
                학습 해야하는 환경과 성장할 수 있는 기회를 스스로 만들어갑니다.
              </b>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              <b>
                사용자에게 좋은 가치와 경험을 전달하는 일에 큰 보람을 느낍니다.
              </b>{" "}
              항상 사용자 경험에대해 중요히 생각하고, 더 나아가 그것이 우리의
              일상에 미칠 영향력까지 고려할 줄 아는 개발자가 되고자합니다.
            </div>
          </li>
        </ul>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">
            ⚒️ Dev Skills
          </h2>
          <hr />
          <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                <b>Javascript ES6+, TypeScript</b>
              </div>
            </li>
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                <b>React</b>
              </div>
            </li>
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                <div>Next.js</div>
              </div>
            </li>
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>Redux, Recoil</div>
            </li>
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>SCSS, StyledComponent, TailwindCSS</div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">
            🙋🏻‍♂️ Who am I?
          </h2>
          <hr />
          <h3 className="inline-block rounded-lg bg-slate-200 p-1 text-[18px] font-semibold text-black">
            공학적 사고를 겸비한 개발자입니다.
          </h3>
          <div className="flex flex-col gap-2">
            <p>
              저는 기계설계공학을 전공한 프론트엔드 개발자입니다. 기계설계공학을
              전공하면서 배운 <b>분석적 사고</b>와 <b>문제해결 능력</b>은
              개발자로서 중요한 역량으로 작용합니다.{" "}
            </p>
            <p>
              <b>분석적 사고</b>를 기반으로 복잡한 문제를 해결하기 위해
              체계적으로 접근하고, 다양한 요소들을 고려하여 여러가지 경우의 수를
              따져 최적의 해결책을 찾는 과정을 학습했습니다. 이러한 접근 방식은
              개발 과정과 많이 닮았다고 생각합니다. 공학적 사고를 바탕으로,
              사용자들에게 최상의 경험을 제공하기 위해 노력합니다.
            </p>
            <p>
              <b>창의적인 문제해결능력</b>은 개발자로서의 역량을 향상시키는 데
              큰 도움이 됩니다. 새로운 기술이나 정보를 습득하고, 이를 활용하여
              혁신적인 솔루션을 제공하는 것은 제가 추구하는 목표 중 하나입니다.
              변화가 빠른 프론트엔드 생태계에서 최적의 방법으로 사용자들의
              불편함을 해결하고, 그들의 요구를 충족시키는 창의적인 방법을
              개발하여, 더 나은 세상을 만들기 위해 노력하고 싶습니다.
            </p>
            <p>
              저의 습관처럼 자리잡은 이러한 관점을 개발자로서 저만의 장점으로
              만들어 적용해보려 합니다.{" "}
              <b>
                기술적인 사고와 더불어 더 깊고 의미있는 수준에서 사용자와 공감할
                수 있는 기술을 만드는 개발자로서 성장하고 싶습니다.
              </b>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">
            🔥 Experience
          </h2>
          <hr />
          <h3 className="text-[18px] font-semibold">
            제로베이스 프론트엔드 스쿨 16기
          </h3>
          <p className="text-[14px] leading-4 text-slate-500 dark:text-slate-400">
            2023.06 ~ 2024.01
          </p>
          <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                프론트엔드스쿨 16기 <b>우수 수강생 선정</b>
              </div>
            </li>
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                React, Typescript, Javascript, HTML5+CSS, SASS, 알고리즘, 컴퓨터
                과학 등 이수
              </div>
            </li>
          </ul>
          <br />
          <h3 className="text-[18px] font-semibold">
            딥다이브 모던 자바스크립트 저자 이웅모 강사님 주관 북스터디
          </h3>
          <p className="text-[14px] leading-4 text-slate-500 dark:text-slate-400">
            2023.08 ~ 2023.10
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-[22px] font-bold text-black dark:text-white">
            🎓 Education
          </h2>
          <hr />
          <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                <b>전북대학교 기계설계공학부, 졸업.</b>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
