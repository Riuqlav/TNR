import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(".about-image", {
      delay: 300,
      distance: "50px",
      duration: 500,
      easing: "ease-in-out",
      origin: "left",
      reset: true,
    });

    ScrollReveal().reveal(".about-content", {
      delay: 500,
      distance: "50px",
      duration: 400,
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12 md:my-16 ">
      <div className="flex flex-wrap justify-center" ref={containerRef}>
        <div className="m-10 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103">
          <div className="w-full md:w-3/5 about-image my-10">
            <img
              alt="About Placeholder"
                className="w-full object-cover h-96"
              src="https://images.unsplash.com/photo-1529154166925-574a0236a4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            />
          </div>
          <div className="w-full md:w-3/5 about-content">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">About</div>
              <p className="text-grey-darker text-lg">
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