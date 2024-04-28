import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
interface Skill {
  name: string;
  icon: string;
  category: string;
}
interface SkillsGroup {
  [category: string]: Skill[];
}

export default function Skills() {
  const skillslist: Skill[] = [
    {
      name: "Flutter",
      icon: "/images/flutter.png",
      category: "App Development",
    },
    {
      name: "Java",
      icon: "/images/java.png",
      category: "App Development",
    },
    {
      name: "Kotlin",
      icon: "/images/kotlin.png",
      category: "App Development",
    },
    {
      name: "Swift",
      icon: "/images/swift.png",
      category: "App Development",
    },
    {
      name: "React-Native",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
      category: "App Development",
    },
    {
      name: "Tensorflow",
      icon: "/images/tf.png",

      category: "App Development",
    },

    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
      category: "Web Development",
    },

    {
      name: "Javascript",
      icon: "https://img.icons8.com/fluency/48/000000/javascript.png",
      category: "Web Development",
    },

    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
      category: "Tools, Technology and Databases",
    },

    {
      name: "NextJs",
      icon: "/images/nextks.png",
      category: "Web Development",
    },
    {
      name: "Typescript",
      icon: "/images/ts.png",
      category: "Web Development",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
      category: "Web Development",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
      category: "Web Development",
    },

    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      category: "Web Development",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
      category: "Web Development",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      category: "Web Development",
    },

    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      category: "Tools, Technology and Databases",
    },

    {
      name: "VsCode",
      icon: "/images/vsc.png",
      category: "Tools, Technology and Databases",
    },

    {
      name: "Linux",
      icon: "/images/linux.png",
      category: "Tools, Technology and Databases",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/color/48/000000/docker.png",
      category: "Tools, Technology and Databases",
    },
    {
      name: "MongoDB",
      icon: "/images/mongoDB.png",
      category: "Tools, Technology and Databases",
    },

    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
      category: "Tools, Technology and Databases",
    },

    {
      name: "Git VCS",
      icon: "https://img.icons8.com/color/48/000000/git.png",
      category: "Tools, Technology and Databases",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
      category: "Tools, Technology and Databases",
    },
  ];
  const groupedSkills = skillslist.reduce((acc: SkillsGroup, curr: Skill) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});
  const renderSkills = () => {
    return Object.keys(groupedSkills).map((category: string, index: number) => (
      <div className="bg-gray-950  p-4 rounded-lg  " key={index}>
        <h6 className="text-2xl text-center font-bold my-8">{category}</h6>

        <div className="gap-2 grid lg:grid-cols-4  md:grid-cols-3  justify-center items-center ">
          {(groupedSkills[category] as any).map(
            (item: Skill, index: number) => (
              <Card
                key={index}
                shadow="sm"
                isPressable
                className="justify-center items-center  h-36 "
              >
                <CardBody
                  className="flex justify-center items-center  "
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    alt={item.name}
                    src={item.icon}
                    className="object-cover h-12"
                  />
                </CardBody>
                <CardFooter className="text-sm flex justify-center items-center">
                  <b>{item.name}</b>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
      // </section>
    ));
  };

  return (
    <section id="skills" style={{ zIndex: 10 }}>
      <h1 className="text-6xl text-center font-extrabold my-16">Skills </h1>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 ">
        {renderSkills()}
      </div>
    </section>
  );
}
