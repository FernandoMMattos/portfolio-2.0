import Link from "next/link";

const Certificates = () => {
  return (
    <main className="flex grow flex-col justify-center items-center gap-8 p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Certificates & Documents</h1>

      <section>
        <h2 className="text-xl font-semibold">Bachelors Diploma</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Issued by Wyden Uniruy University Center (2024).
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="https://drive.google.com/file/d/1rdYoxWl-0LJo0mGn_XCqwrNjv1_KQw26/view?usp=drive_link"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            target="_blank"
          >
            English
          </Link>
          <Link
            href="https://drive.google.com/file/d/1iGsDVCGqJf6cXPr6v2xrISP--aZ1SMzA/view?usp=drive_link"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            target="_blank"
          >
            Portuguese
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Academic Transcript</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Full list of completed courses and grades.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="https://drive.google.com/file/d/1qOSzDF_JV-ZclF4OSNlwT-kKsTCvZb5e/view?usp=drive_link"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            target="_blank"
          >
            English
          </Link>
          <Link
            href="https://drive.google.com/file/d/1_l3fePykfLiVFtPyWdURCszp8yxeGObq/view?usp=drive_link"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            target="_blank"
          >
            Portuguese
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Alura Courses</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Over 2,000 hours of certified training in modern web development.
        </p>
        <Link
          href="https://cursos.alura.com.br/user/f-manfrinm/fullCertificate/f09ee96e7afc347e936539bc88ee9870"
          className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
          target="_blank"
        >
          View Certificates (Portuguese only)
        </Link>
      </section>
    </main>
  );
};

export default Certificates;
