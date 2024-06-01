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
        Hi, I&apos;m John Paul, a {getAge()}-year-old web developer born in{" "}
        <span className="text-violet-500">India</span>. I am currently pursuing my Bachelor&apos;s degree in Computer Engineering at{" "}
        <a
          href="https://www.srmist.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300"
        >
          SRM Institute of Science and Technology
        </a>
        . With over{" "}
        <span className="text-violet-500">4+ years of study</span> in web development and design, and 2 years in app development, I have gained significant experience in creating digital solutions. My current focus is on exploring{" "}
        <span className="text-violet-500">design systems</span>, crafting{" "}
        <span className="text-violet-500">innovative interfaces</span>, and turning code into exceptional user experiences. I am presently a Technical Intern at{" "}
        <a
          href="https://cherrynetwork.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300"
        >
          Cherry+ Network
        </a>
        , where I have been helping to build custom websites with various frameworks and custom styling for over a year. Additionally, I am interning at{" "}
        <a href="https://www.liftoffclub.in/"
          target="_blank"
          rel="noopener noreferrer" className="cursor-pointer text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300">Liftoff</a> and{" "}
        <a href="https://www.srmist.edu.in/alumni-affairs/"
          target="_blank"
          rel="noopener noreferrer" className="cursor-pointer text-violet-500 underline decoration-violet-500/50 underline-offset-4 duration-300 hover:decoration-violet-300 hover:text-violet-300">SRM Alumni Affairs</a>. I strive to stay constantly updated with the latest market trends, demonstrating a commitment to making a difference in every project I am involved in. With 90+ repositories on my GitHub account and 50+ projects ranging from Python to React to C++, I showcase my diverse skills and expertise on my portfolio.
      </Typography>
    </div>
  );
};

export { Biography };