import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "cl00things",
    description:
      "A clothing wishlist app where users can save, filter, and organize fashion items.",
    tech: ["React", "Firebase", "TypeScript"],
    demo: "https://cl00things.vercel.app",
    github: "https://github.com/f-manfrinm/cl00things",
    desktopImage: "/projects/cl00things-desktop.png",
    mobileImage: "/projects/cl00things-mobile.png",
    responsive: true,
  },
  // {
  //   title: "Tasks Tracker App",
  //   description:
  //     "A dashboard built with Next.js and Firebase to manage and filter tasks applications.",
  //   tech: ["Next.js", "Firebase", "TypeScript"],
  //   demo: "#",
  //   github: "https://github.com/f-manfrinm/job-tracker",
  //   desktopImage: "/projects/taskstracker.png",
  //   responsive: false,
  // },
  // {
  //   title: "To Do App",
  //   description: "A simple and clean to do app to track your duties.",
  //   tech: ["Next.js", "TypeScript", "MongoDB", "Style Components"],
  //   demo: "https://to-do-list-five-brown-80.vercel.app/login",
  //   github: "https://github.com/FernandoMMattos/to-do-list",
  //   desktopImage: "/projects/todo-desktop.png",
  //   mobileImage: "/projects/todo-mobile.png",
  //   responsive: true,
  // },
  // {
  //   title: "Melodia",
  //   description:
  //     "A Spotify tracker where you can see your favorite songs and artists in a fun and simple way.",
  //   tech: ["Next.js", "TypeScript", "TailwindCSS"],
  //   demo: "https://github.com/FernandoMMattos/melodia/blob/main/README.md",
  //   github: "https://github.com/FernandoMMattos/melodia",
  //   desktopImage: "/projects/melodia-desktop.png",
  //   mobileImage: "/projects/melodia-mobile.png",
  //   responsive: true,
  // },
];

const Projects = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        The projects below represent my hands-on experience in web development.
        They showcase not only the technologies I’ve studied{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Firebase, Vue.js, MongoDB, TailwindCSS
        </span>{" "}
        but also how I apply them to solve real problems. My goal with every
        project is to learn, improve, and deliver something functional and
        meaningful.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col"
          >
            <div className="flex gap-4 mb-4">
              <div className="flex-1 bg-gray-900 rounded-lg shadow-lg">
                <div className="bg-gray-800 rounded-t-lg h-6 flex items-center px-3 gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="relative w-full h-40">
                  <Image
                    src={project.desktopImage}
                    alt={`${project.title} desktop`}
                    fill
                    className="object-cover rounded-b-lg"
                  />
                </div>
              </div>

              {project.responsive && (
                <div className="w-28 bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative w-full h-40">
                    <Image
                      src={project.mobileImage}
                      alt={`${project.title} mobile`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Tech: </span>
              {project.tech.join(", ")}
            </p>

            <div className="flex gap-4 mt-auto">
              {project.demo !== "#" && (
                <Link
                  href={project.demo}
                  className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
                  target="_blank"
                >
                  Live Demo
                </Link>
              )}
              <Link
                href={project.github}
                className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
