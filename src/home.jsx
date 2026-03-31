import React from "react";

const skills = {
  frontend: ["React","Next.js","TypeScript","Vue","Tailwind","HTML/CSS"],
  backend: ["Node.js","Express","Spring","Python","FastAPI"],
  infra: ["PostgreSQL","MySQL","MongoDB","Redis","Docker","AWS"],
  tools: ["Git","GitHub","Figma","Jira","Linux"]
};

const projects = [
  { title: "프로젝트 1", year: "2024", desc: "설명입니다.", stack:["React","Node.js"] },
  { title: "프로젝트 2", year: "2024", desc: "설명입니다.", stack:["Next.js","AWS"] },
  { title: "프로젝트 3", year: "2023", desc: "설명입니다.", stack:["Vue","Docker"] }
];

export default function Home(){
  return (
    <div className="bg-[#0a0a0f] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full flex justify-between px-8 py-4 bg-black/70 backdrop-blur border-b border-white/10 z-50">
        <div className="font-bold text-green-300">DEV.PORT</div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-24">
        <p className="text-green-300 mb-3">// hyun.w 포트폴리오</p>
        <h1 className="text-7xl font-extrabold">hyun.w <span className=" text-2xl text-green-300"> 조현우 </span></h1>
        <p className="text-gray-400 mt-2">Full Stack Developer</p>
        <p className="max-w-xl mt-6 text-gray-400">
          사용자 경험 중심의 웹 개발을 합니다.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#projects" className="bg-green-300 text-black px-6 py-2">프로젝트</a>
          <a href="#contact" className="border px-6 py-2">연락</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#12121a] px-8 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-[#1c1c28] h-80 flex items-center justify-center">사진</div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-400">소개글 작성</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-8 py-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {Object.entries(skills).map(([key,list]) => (
            <div key={key} className="border border-white/10 p-4">
              <h3 className="mb-3 font-bold">{key}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map(item=> (
                  <span key={item} className="text-sm border px-2 py-1">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#12121a] px-8 py-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className="border p-4">
              <div className="h-40 bg-[#1c1c28] mb-3" />
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
              <div className="flex gap-2 mt-2">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-8 py-20 space-y-5">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400">2018 ~ 2025</p>
            <h3 className="font-bold">홍익대학교</h3>
            <p className="text-gray-400">컴퓨터공학과 졸업</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-400">2025.05 ~ 2025.11</p>
            <h3 className="font-bold">멋쟁이사자처럼 백엔드 17기</h3>
            <p className="text-gray-400">KDT 프로그램 수료</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center px-8 py-20 bg-[#12121a]">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 mb-6">연락 주세요</p>
        <a href="mailto:test@test.com" className="bg-green-300 text-black px-6 py-3">메일</a>
      </section>

      <footer className="text-center py-6 border-t border-white/10 text-gray-500">
        © 2025
      </footer>
    </div>
  );
}