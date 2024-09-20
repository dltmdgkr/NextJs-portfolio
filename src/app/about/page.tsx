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
              저는 협업에서 <b>효율적이고 의미 있는 소통</b>을 중시합니다.
              동료들과
              <b>의견을 존중하고 아이디어를 공유</b>하며, 더 나은 사용자 경험을
              만들기 위해 협력합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              기술은 <b>서비스 가치를 높이는 수단</b>이라 믿습니다. 사용자의
              관점에서 <b>품질과 안정성</b>을 우선시하며,{" "}
              <b>신뢰성 있는 코드</b>를 작성하는 것을 목표로 합니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              <b>유지보수성</b>이 뛰어나고 <b>재사용 가능한 컴포넌트</b>를
              설계하는 데 집중합니다. 일정이 빠듯해도 <b>확장성</b>을 고려한
              시스템 구축이 우선입니다.
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">{"•"}</div>
            <div>
              <b>커뮤니케이션</b>은 프로젝트 성공의 열쇠라 생각합니다.{" "}
              <b>문서화와 협업 툴</b>을 활용해 팀 내{" "}
              <b>정보 공유와 문제 해결</b>을 원활하게 이끌어 갑니다.
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
              저는 기계설계공학을 전공한 프론트엔드 개발자로, 공학적 사고를
              기반으로 한 <b>분석적 문제 해결 능력</b>을 개발 과정에 적극적으로
              적용하고 있습니다. 기계 설계 과정에서 다양한 요소를 고려하며
              문제를 체계적으로 분석하고 해결책을 도출하는 방법을 배웠습니다.
              이러한 경험은 사용자 인터페이스(UI)에서 발생하는 복잡한 문제들을
              해결하는 데 큰 도움이 되고 있으며, 사용자의 불편함을 최소화하고 더
              나은 경험을 제공하는 데 기여하고 있습니다.{" "}
            </p>
            <p>
              프론트엔드 개발자로서 <b>창의적인 문제 해결 능력</b>은 특히
              중요합니다. 저는 새로운 기술을 적극적으로 습득하고 이를 바탕으로
              사용자들이 겪는 문제를 해결하는 데 집중합니다. 예를 들어, 성능
              최적화를 통해 느린 페이지 로딩 시간을 개선하거나, 직관적인 UI
              디자인을 통해 사용자가 쉽게 원하는 정보를 찾을 수 있도록 돕는 등의
              작업을 해왔습니다. 이처럼 변화가 빠른 프론트엔드 생태계에서
              기술적인 방법을 사용해 문제를 해결하는 동시에, 사용자 입장에서
              느끼는 불편함을 해소하기 위한 창의적인 솔루션을 제시하는 것을
              목표로 삼고 있습니다.
            </p>
            <p>
              저는 <b>기술적 문제 해결</b>을 넘어서, 사용자뿐만 아니라{" "}
              <b>함께 일하는 동료들과도 깊이 공감할 수 있는 개발자</b>로
              성장하고자 합니다. 사용자들이 실제로 필요로 하는 기능과 개선
              사항을 발견하는 것뿐만 아니라, <b>팀원들과의 소통</b>을 통해 함께
              더 나은 결과를 만들어가는 과정에 가치를 둡니다. 이를 통해 더 나은
              세상을 만드는 데 기여하고 싶습니다.
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
