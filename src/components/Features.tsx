import React from 'react';

const Features = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-200 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Asim Hussain : Navigating the Secrets of Technology Chronicles Blog!
        </h2>

        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100 md:text-lg'>
          Asim Hussain is a dedicated learner and passionate web developer currently advancing his skills in Next.js at GIAIC. With a strong foundation in TypeScript and expertise in UI/UX design, he has successfully built and deployed multiple projects, including a dynamic resume builder and a portfolio website. Asim thrives on challenges, as seen in his active participation in Hackathons, where he has tackled complex marketplace models and E-Commerce solutions. His commitment to continuous learning extends to exploring Sanity CMS and mastering responsive design with Tailwind CSS. Beyond coding, Asim, a master's degree holder in International Relations, also contributes to education as a Headmaster, demonstrating his leadership and adaptability. His enthusiasm for technology and innovation is further reflected in his YouTube channel, Innovate with Asim, where he shares valuable insights to help fellow learners.
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
            Explore Our Categories
          </h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 animate-fade-in-up delay-100'>
            {[
              "Technology",
              "Artificial Intelligence",
              "International Relations",
              "Next Js",
              "Web Development",
              "Tailwind CSS"
            ].map((category, index) => (
              <div
                key={index}
                className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'
              >
                <p className='text-center text-lg font-semibold'>{category}</p>

                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-4'></div>
              </div>
            ))}
          </div>
        </div>

        <p className='text-sm md:text-lg text-black mb-6 px-4 animate-fade-in-down delay-100 mt-100'>
          Welcome to our blog website! Here, you'll find a diverse collection of engaging and insightful articles, each paired with captivating images to enhance your reading experience. Whether you're exploring technology, lifestyle, education, or creative topics, there's something for everyone. Take your time, browse through the blogs, and discover new ideas and perspectives. Happy reading!
        </p>
      </section>
    </div>
  );
};

export default Features;
