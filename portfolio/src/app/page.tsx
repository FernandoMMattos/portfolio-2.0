import Image from "next/image";

const Home = () => {
  return (
    <main className="flex-grow content-center">
      <section className="flex p-8 justify-around items-center">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl">
            <strong className="text-(--accent)">Fernando's</strong> portfolio.
          </h1>
          <p className="text-xl whitespace-pre-line leading-relaxed;">
            {`Hi, I’m Fernando Mattos
            A Front-End Developer with a degree in Computer Science and +2,000 hours of hands-on practice in React, Next.js, TypeScript, and Firebase. Passionate about building clean and user-friendly web applications.`}
          </p>

          <span>Use the nav bar to navigate on the website!</span>
        </div>
        <Image
          src="https://github.com/FernandoMMattos.png"
          alt="A photo of Fernando"
          width={350}
          height={350}
          className="rounded-2xl"
        />
      </section>
    </main>
  );
};

export default Home;
