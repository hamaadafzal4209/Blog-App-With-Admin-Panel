import { HiCode, HiLightningBolt, HiServer, HiUserGroup } from "react-icons/hi";

function About() {
  return (
    <div className="max-w-6xl mx-auto p-6 my-12 text-center text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to my blog!{" I'm"} a passionate MERN stack developer dedicated
        to sharing knowledge and insights on web development, software
        engineering, and programming languages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <HiUserGroup className="text-teal-500 text-6xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">Who I Am</h2>
          <p>
            I am a full-stack developer specializing in the MERN (MongoDB,
            Express, React, Node.js) stack. With several years of experience in
            the field, I have a deep understanding of both front-end and
            back-end technologies.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <HiCode className="text-indigo-500 text-6xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">My Skills</h2>
          <p>
            I am proficient in JavaScript, HTML, CSS, React, Node.js, Express,
            MongoDB, and more. My skills also extend to version control with
            Git, RESTful API development, and responsive web design.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <HiServer className="text-lime-500 text-6xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">
            Experience
          </h2>
          <p>
            Over the years, I have worked on numerous projects ranging from
            small business websites to large-scale web applications. My
            experience includes working with various development teams and
            contributing to open-source projects.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <HiLightningBolt className="text-yellow-500 text-6xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">
            My Mission
          </h2>
          <p>
            Through this blog, I aim to educate and inspire fellow developers by
            sharing my experiences, tutorials, and insights on the latest trends
            and best practices in web development.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Me on This Journey</h2>
        <p>
          Whether you are a beginner or an experienced developer, I hope you
          find my blog informative and engaging. Feel free to reach out if you
          have any questions or suggestions!
        </p>
      </div>
    </div>
  );
}

export default About;
