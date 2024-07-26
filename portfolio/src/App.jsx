import "./App.css"
import Profile from "./assets/Photo.png";
import Five from "./assets/5star.png"
import Four from "./assets/4star.png"
import Sus from "./assets/suspendu.png"
import ProfileFond from "./assets/Fond.png"
import Project1 from "./assets/Project1.png"
import Project2 from "./assets/Project2.png"
import About from "./About"

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl"> Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">Project</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">Technologie</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">A propos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/*banner section*/}
        <section>
          <div className="container m-auto px-4 py-10 flex gap-6">
            <div>
              <h2 className="font-bold text-4xl">Salut , je suis Mehdi Koucha,</h2>
              <h2 className="font-bold text-4xl gradiant-text">Developper Frontend</h2>
              <p className="mt-4 text-gray-400">En tant qu'intégrateur web passionné, je mets mes compétences de développeur au service de collaborations enrichissantes qui stimulent à la fois ma créativité et la vôtre. Mon objectif est de transformer vos idées en expériences web fluides et captivantes, tout en veillant à ce que chaque projet soit une aventure collaborative réussie.</p>
            </div>
            <div className="relative">
              <img src={Profile} width={460} className="relative z-10 " />
              <img src={ProfileFond} className="absolute top-0 left-12 -z-0" />
            </div>
          </div>
        </section>
        {/*projetct*/}
        <section>
          <div className="container m-auto px-4 py-12">
            <h2 className="text-2xl font-semibold">Project</h2>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project1} />
                <h3 className="text-2xl font-semibold mt-8"> location d’appartements </h3>
                <p className="text-gray-400 text-sm mt-4">Responsive HTML/CSS, React</p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-800 rounded-full to-purple-800 hover:from-blue-900 hover:to-purple-900">live preview</button>
                  <button className="px-6 py-3 border rounded-full hover:border-purple-600 hover:text-purple-600">GitHub</button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project2} />
                <h3 className="text-2xl font-semibold mt-8">Site de design d'intérieur </h3>
                <p className="text-gray-400 text-sm mt-4">Responsive HTML/CSS,</p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-800 rounded-full to-purple-800 hover:from-blue-900 hover:to-purple-900">live preview</button>
                  <button className="px-6 py-3 border rounded-full hover:border-purple-600 hover:text-purple-600">GitHub</button>
                </div>
              </div>

            </div>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project1} />
                <h3 className="text-2xl font-semibold mt-8"> location d’appartements </h3>
                <p className="text-gray-400 text-sm mt-4">Responsive HTML/CSS, React</p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-800 rounded-full to-purple-800 hover:from-blue-900 hover:to-purple-900">live preview</button>
                  <button className="px-6 py-3 border rounded-full hover:border-purple-600 hover:text-purple-600">GitHub</button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project2} />
                <h3 className="text-2xl font-semibold mt-8">Site de design d'intérieur </h3>
                <p className="text-gray-400 text-sm mt-4">Responsive HTML/CSS,</p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-800 rounded-full to-purple-800 hover:from-blue-900 hover:to-purple-900">live preview</button>
                  <button className="px-6 py-3 border rounded-full hover:border-purple-600 hover:text-purple-600">GitHub</button>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/*technologie*/}
        <section className="p-10">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologie</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <img src={Five} width={52} alt="HTML" />
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-purple-500 to-purple-800 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Css, Sass & Tailwind</h2>
                  <img src={Four} width={52} alt="CSS" />
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-purple-500 to-purple-800 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Javascript</h2>
                  <img src={Four} width={52} alt="JavaScript" />
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-purple-500 to-purple-800 block rounded-md" />
              </div>
              <div className="relative mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <img src={Five} className="w-10 h-auto sm:w-12 md:w-14 lg:w-16 xl:w-20" alt="React" />
                </div>
                <div className="relative mt-2">
                  <span className="w-full h-2 bg-gradient-to-t from-purple-500 to-purple-800 block rounded-md custom-react-bar" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* compétance supp*/}
        <section section >
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Skills & Compétence</h2>
            <div className="flex justify-between mt-12 ">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-purple-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">Git</p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-purple-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">Workpress</p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-purple-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">English</p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-purple-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">Travail d'équipe</p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-purple-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">Apprentissage Rapide</p>
              </div>
            </div>
          </div>
          {/* c'est moiiii*/}
        </section >
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Parcours</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-0 before:w-1 before:bg-white">
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-600 before:to-purple-500 before:block before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>Diplômer d'un BTS comptabilité général à Nice</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-600 before:to-purple-500 before:block before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>Travailler dans différent secteur comme le social ou la manutention</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-600 before:to-purple-500 before:block before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>Diplômer d'un bac+2 en tant que intégrateur Web</p>
              </div>
            </div>
          </div>
        </section>
        {/* a propos de moi */}
        <About />


      </main >
      <footer>
        <div className="container py-8 m-auto flex justify-center px-4">
          <div>
            <p className="text-gray-300 text-sm">Copy right @ 2024</p>
          </div>
        </div>
      </footer >
    </>
  )
}

export default App
