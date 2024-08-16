import { Typography } from "./Typography";

const Biography = () => {
  const getAge = () => {
    const now = new Date();
    const dateOfBirth = new Date("2005-05-31");
    const yearOfBirth = dateOfBirth.getFullYear();
    const currentYear = now.getFullYear();

    let age = currentYear - yearOfBirth;
    if (
      now.getMonth() < dateOfBirth.getMonth() ||
      (now.getMonth() === dateOfBirth.getMonth() &&
        now.getDate() < dateOfBirth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="space-y-3">
      <Typography className="leading-relaxed">
        Hi, I&apos;m John Paul, a {getAge()}-year-old dedicated full stack developer born in{" "}
        <span className="text-violet-500">India</span>. I am currently pursuing my Bachelor&apos;s degree in Computer Engineering with Software Engineering at{" "}
        <a
          href="https://www.srmist.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300"
        >
          SRM Institute of Science and Technology
        </a>
        . With a strong academic foundation and hands-on experience, I have developed{" "}
        <span className="text-violet-500">proficiency in web and app development</span> using technologies like Next.js, React, and Tailwind CSS. My current roles include working as a{" "}
        <a
          href="https://www.tulips.technology/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300"
        >
          Fullstack Lead at Tendertulip
        </a>
        , where I build custom websites and CRMs for clients, and as a Technical Developer for the{" "}
        <a href="https://www.srmist.edu.in/alumni-affairs/"
          target="_blank"
          rel="noopener noreferrer" className="cursor-pointer text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300">
          Directorate of Alumni Affairs of SRM (DAA)
        </a>
        . I&apos;m also interning at{" "}
        <a href="https://www.liftoffclub.in/"
          target="_blank"
          rel="noopener noreferrer" className="cursor-pointer text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300">
          Liftoff
        </a>
        , where I contribute to various projects. My portfolio showcases 50+ projects, including AI tools like{" "}
        <a
          href="https://you-notes-rouge.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300"
        >
          YouNotes
        </a>
        , a note-taking app, and{" "}
        <a
          href="https://xtractai.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300"
        >
          XtractAI
        </a>
        , a summarizing tool. With 90+ repositories on GitHub, I continue to innovate and grow as a developer.
      </Typography>
    </div>
  );
};

export { Biography };
