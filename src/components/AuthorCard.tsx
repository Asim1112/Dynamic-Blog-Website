import Image from "next/image";
import React from "react";

const AuthorCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          src={"/images/profile3.png"}
          alt={"Author-image"}
          width={200}
          height={200}
          className="rounded-full mr-4 object-cover border-2 border-gray-400"
        />

        <div>
          <h3 className="text-xl font-bold">Asim Hussain</h3>
          <p className="text-slate-500">
            Web Developer | AI & E-Commerce Enthusiast
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed text-sm sm:text-base md:text-lg">
        Asim Hussain is a dedicated web developer with a strong foundation in
        Next.js, TypeScript, and Tailwind CSS. He is currently advancing his
        expertise in Sanity CMS and mastering the intricacies of responsive
        design. Passionate about building scalable and visually appealing web
        applications, Asim has successfully completed multiple Hackathons,
        showcasing his ability to transform UI/UX concepts into fully functional
        digital platforms. In addition to his technical pursuits, Asim holds a
        Master&apos;s degree in International Relations, reflecting his diverse
        academic background. He also runs a YouTube channel, &quot;Innovate with
        Asim,&quot; where he shares educational content to help aspiring developers
        and students. With a keen eye for detail, a passion for innovation, and
        a drive to solve real-world challenges, Asim continues to push
        boundaries in the digital space.
      </p>

        <div className="mt-4 flex space-x-3">
        

        <a href="https://linkedin.com/in/asim-hussain-5429252b8" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 text-white">
            LinkedIn
        </a>

        <a href="https://github.com/Asim1112?tab=repositories" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 text-white">
            GitHub
        </a>

        <a href="#" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 text-white">
            Twitter
        </a>

        </div>
    </div>

  );
};

export default AuthorCard;
