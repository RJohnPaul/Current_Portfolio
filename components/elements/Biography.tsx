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
        Hi I&apos;m John Paul, i am a {" "}
        <span className="text-primary/80">web developer. I am currently</span>{" "}
        <span className="text-primary/80">{getAge()} years old</span>&nbsp;.&nbsp;i was born in
        <span className="text-primary/80">&nbsp;India</span>. i
        am currently pursuing my Bachelor&apos;s degree in Computer Engineering at{" "}
        <a
          href="https://www.srmist.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/80 underline decoration-primary/50 underline-offset-4 duration-300 hover:decoration-primary/80"
        >
         SRM Institute of Science and Technology
        </a>
        .
      </Typography>
      <Typography className="leading-relaxed">
        Over more than{" "}
        <span className="text-primary/80">3+ years of study</span> in the field of
        web development,design and 2 years in app development I have gained significant experience in creating digital
        solutions. My current focus is on exploring{" "}
        <span className="text-primary/80">design systems</span>, crafting{" "}
        <span className="text-primary/80">innovative interfaces</span>, and the ability
        to turn code into truly exceptional user experiences.
      </Typography>
      <Typography className="leading-relaxed">
        <span className="text-primary/80">
          I strive to stay constantly updated
        </span>{" "}
        with the latest market trends, demonstrating a commitment to making a
        difference in every project I am involved in.I currently have 50+ reposistories on my github account and 20+ projects from python to react to C etc on my portfolio.
      </Typography>

    </div>
  );
};

export { Biography };
