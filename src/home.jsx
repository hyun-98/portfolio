import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Header */}
      <header className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl font-bold">조현우</h1>
        <p className="text-lg mt-2">Frontend Developer Portfolio</p>
      </header>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <p className="leading-relaxed">
            안녕하세요. 새로운 기술을 배우고 협업을 통해 성장하는 개발자입니다.
            다양한 프로젝트 경험을 통해 문제 해결 능력과 협업 능력을 키워왔습니다.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>

        <div className="bg-white p-8 rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="font-medium">HTML</div>
          <div className="font-medium">CSS</div>
          <div className="font-medium">JavaScript</div>
          <div className="font-medium">React</div>
          <div className="font-medium">Node.js</div>
          <div className="font-medium">Git</div>
          <div className="font-medium">GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="mb-3 text-gray-600">
              프로젝트 설명을 작성하세요.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="mb-3 text-gray-600">
              프로젝트 설명을 작성하세요.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>

        <div className="bg-white p-8 rounded-2xl shadow-md space-y-2">
          <p>Email: coudfd@naver.com</p>
          <p>
            GitHub:
            <a href="#" className="text-blue-600 hover:underline ml-2">
              github.com/hyun-98
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 Portfolio</p>
      </footer>

    </div>
  );
};

export default Home;