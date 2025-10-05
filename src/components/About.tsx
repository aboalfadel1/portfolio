
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Technical skills grouped by category
const skills = {
  "Frontend": ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Sass"],
  "Backend": ["Node.js", "Express","PHP","Laravel","Symfony","JAVA","Spring"],
  "Databases & APIs": ["RESTful APIs", "GraphQL","MySQL","PostgreSQl","MongoDB"],
  "Collaboration Tools & Versioning": ["Git", "GitHub", "gitLab","Docker","Atlassian Jira","Confluence","Miro", "CI/CD"]
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#607CCD] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#607CCD]">Professional Profile</h3>
            <p className="text-gray-700 leading-relaxed">
              I am experienced in both front-end and back-end development, with a passion for creating modern, user-centric web applications. I’m always eager to take on new challenges that help me grow as a developer and contribute to meaningful projects. I’m open to opportunities that allow me to work across the full development stack.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong attention to detail and a commitment to writing clean, maintainable code, I strive to deliver high-quality
              solutions that meet both user needs and business requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey as a developer has equipped me with the ability to quickly adapt to new technologies and methodologies,
              making me effective in dynamic team environments.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-[#607CCD] mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/aboalfadel1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#607CCD] text-white hover:bg-[#4a62a3] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mouayad-saad-eddin-79478a281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#607CCD] text-white hover:bg-[#4a62a3] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a
                  href="https://www.xing.com/profile/Mouayad_Saadeddin/web_profiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#607CCD] text-white hover:bg-[#4a62a3] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-current w-6 h-6"
                  >
                    <path d="M333.3 64h60.5L271.6 256 452 448h-60.7L210.7 256zM60 64h60.5l90.7 128-90.7 128H60l90.6-128L60 64z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#607CCD]">Technical Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="border border-gray-200 hover:border-[#607CCD]/30 transition-colors shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-3 text-[#607CCD]">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
