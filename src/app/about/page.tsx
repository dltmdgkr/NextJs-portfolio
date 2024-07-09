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
              다양한 사람들과 소통하며 함께 작업하는 것을 즐깁니다. 함께 일하는
              동료들과의 긍정적인 관계를 유지하며, 서로에게 영감을 주고 받는
              것을 소중히 여깁니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              기술은 서비스를 위한 도구가 되어야한다고 생각합니다. 항상 서비스의
              품질, 안정성을 우선하는 FE 개발자가 되려고 노력합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              코드의 유지보수와 재사용 가능한 컴포넌트 개발을 선호합니다. 간혹
              일정이 빠듯하더라도 이를 염두하고 구현하려 합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              커뮤니케이션은 팀 게임에서 언제나 슈퍼스타 한명의 능력보다
              강합니다. 다양한 문서, 협업 툴을 통해 구성원들과 지속적으로 업무,
              지식 공유를 하여 문제를 해결해 나갑니다.
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
                <b>Next.js</b>
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
            2023.06 - 2024.01
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
            Deep Dive 자바스크립트 북스터디
          </h3>
          <p className="text-[14px] leading-4 text-slate-500 dark:text-slate-400">
            2023.08 - 2023.10
          </p>
          <ul className="prose prose-neutral dark:prose-invert flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>
                모던 자바스크립트 딥다이브 저자{" "}
                <b>이웅모 강사님 주관 북스터디</b> 참여
              </div>
            </li>
            <li className="flex">
              <div className="mr-2">{"•"}</div>
              <div>자바스크립트의 기본 개념과 동작 원리를 학습</div>
            </li>
          </ul>
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
