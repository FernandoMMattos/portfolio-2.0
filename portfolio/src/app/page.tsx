import Image from "next/image";

const Home = () => {
  return (
    <main className="flex-grow content-center select-none">
      <section className="flex p-8 justify-around items-center flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-3 w-fit">
          <h1 className="text-4xl">
            <strong className="text-[var(--accent)]">Fernando</strong>{" "}
            portfolio.
          </h1>
          <p className="text-xl whitespace-pre-line leading-relaxed">
            {`Hi, I’m Fernando Mattos
            A Full Stack Developer with a degree in Computer Science and +2,000 hours of hands-on practice in React, Next.js, TypeScript, NestJS, Express.js and Node.js. Passionate about building clean and user-friendly web applications.`}
          </p>
        </div>
        <Image
          src="https://github.com/FernandoMMattos.png"
          alt="A photo of Fernando"
          width={350}
          height={350}
          className="rounded-2xl w-56 h-56 md:w-[350px] md:h-[350px]"
        />
      </section>
    </main>
  );
};

export default Home;
