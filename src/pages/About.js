import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });

    document.querySelector(".about-image").setAttribute("data-aos", "fade-right");
    document.querySelector(".about-content").setAttribute("data-aos", "fade-left");
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex flex-wrap justify-center" ref={containerRef}>
        <div className="m-10 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103">
          <div className="w-full md:w-2/5 about-image my-8 md:my-20" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">
            <img
              alt="About Placeholder"
              className="w-full h-auto"
              src="https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt16.jpg"
            />
          </div>
          <div className="w-full md:w-3/5 about-content" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">About</div>
              <p className="text-grey-darker ">
                We are a team of passionate developers who love building amazing
                web applications. Our goal is to create software that is not
                only functional but also beautiful and intuitive. We believe
                that technology should be accessible to everyone, and we strive
                to make our products easy to use for people of all skill levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
