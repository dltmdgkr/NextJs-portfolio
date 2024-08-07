import Image from "next/image";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { SiVelog } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center md:py-24">
        <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center md:rounded-full"
            alt="profile"
            src="/images/profile.jpeg"
            width={400}
            height={400}
            layout="responsive"
            style={{ maxWidth: "400px", maxHeight: "400px" }}
            priority
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            이승학 | 프론트엔드 개발자
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            서비스의 품질 향상을 위해, 여러가지 기술을 알맞은 도구로서 사용하는
            FE 개발자가 되고 싶습니다.
          </p>
          <div>
            <Link
              href="https://github.com/dltmdgkr"
              target="_blank"
              className="flex items-center gap-2 mb-4 hover:underline"
            >
              <ImGithub />
              <b>Gihub: </b>
              <span>{"https://github.com/dltmdgkr"}</span>
            </Link>
            <Link
              href="https://velog.io/@dltmdgkr"
              target="_blank"
              className="flex items-center gap-2 mb-4 hover:underline"
            >
              <SiVelog />
              <b>Blog: </b>
              <span>{"https://velog.io/@dltmdgkr"}</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:underline"
            >
              <MdOutlineMailOutline />
              <b>Contact: </b>
              <span>lseunghak1301@gmail.com</span>
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/projects">
              <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <span>프로젝트 보러가기</span>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
