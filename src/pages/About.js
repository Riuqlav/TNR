import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import NFT16 from "../assets/imgs/NFT16.jpg"


const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(".about-image", {
      delay: 300,
      distance: "50px",
      duration: 300,
      easing: "ease-in-out",
      origin: "left",
      reset: true,
    });

    ScrollReveal().reveal(".about-content", {
      delay: 500,
      distance: "50px",
      duration: 300,
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex flex-wrap justify-center" ref={containerRef}>
        <div className="m-10 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103">
          <div className="w-full md:w-3/5 about-image my-10 md:my-24">
            <img
              alt="About Placeholder"
                className="w-full object-cover h-96"
                src={NFT16}
                />
          </div>
          <div className="w-full md:w-3/5 about-content">
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