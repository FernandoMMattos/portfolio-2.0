import Link from "next/link";

const AboutMe = () => {
  return (
    <main className="flex-grow max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="whitespace-pre-line leading-relaxed text-lg">
        {`Hello once again
          My name is Fernando Mattos, a Brazilian–Italian Front-End Developer based in Dublin, Ireland.

          I hold a degree in Computer Science (2022–2024) and have completed over 2,000 hours of practical training in modern web technologies such as React, Next.js, TypeScript, and Firebase. My main focus is building clean, responsive, and user-friendly applications.

          Some of my recent projects include:
          - cl00things → a clothing wishlist app built with React + Firebase.
          - Job Tracker App → a Next.js dashboard to help users organize job applications.
          - Melodia → a Spotify info tracker tp help you visualize your most liked songs and artists.
          - To Do List → a simple and clean to do list.

          I’m passionate about combining creativity and logic to deliver digital experiences that are both functional and delightful. I’m currently seeking opportunities to grow as a developer and contribute to impactful projects.
          `}
      </p>
      <span className="text-lg">
        Feel free to connect with me on{" "}
        <Link href="https://www.linkedin.com/in/fernandommattos/">
          LinkedIn
        </Link>{" "}
        or check out my work on{" "}
        <Link href="https://github.com/FernandoMMattos">GitHub</Link>.
      </span>
    </main>
  );
};

export default AboutMe;
