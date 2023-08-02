import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import NFT1 from "../assets/imgs/NFT1.jpg";
import NFT2 from "../assets/imgs/NFT2.jpg";
import NFT3 from "../assets/imgs/NFT3.jpg";
import NFT4 from "../assets/imgs/NFT4.jpg";
import NFT5 from "../assets/imgs/NFT5.jpg";
import NFT6 from "../assets/imgs/NFT6.jpg";
import NFT7 from "../assets/imgs/NFT7.jpg";
import NFT8 from "../assets/imgs/NFT8.jpg";
import NFT9 from "../assets/imgs/NFT9.jpg";
import WideLogo from "../assets/imgs/WideLogo.png";

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const ContentTable = useMemo(() => [{
      id: 1,
      title: "Articles",
      content: "We are a team of passionate developers who love building amazing web applications. Our goal is to create software that is not only functional but also beautiful and intuitive. We believe that technology should be accessible to everyone, and we strive to make our products easy to use for people of all skill levels.",
      img: NFT1,
      link: "/TNR/articles"
    },
    {
      id: 2,
      title: "Ranks",
      content: "We have worked on a variety of projects, ranging from small websites to large-scale web applications. Our team has experience with a wide range of technologies, including React, Node.js, and MongoDB. We are always looking for new and exciting projects to work on, so if you have an idea for a web application, we would love to hear from you!",
      img: NFT2,
      link: "/TNR/ranks"
    },
    {
      id: 3,
      title: "Ranks",
      content: "We are proud to have some of our projects ranked among the top web applications in the world. Our team has won several awards for our work, and we are constantly striving to improve our skills and create even better software. We believe that our success is due to our commitment to quality and our passion for what we do.",
      img: NFT3,
      link: "/TNR/ranks"
    },
    {
      id: 4,
      title: "Vocabulary",
      content: "We are a team of passionate developers who love building amazing web applications. Our goal is to create software that is not only functional but also beautiful and intuitive. We believe that technology should be accessible to everyone, and we strive to make our products easy to use for people of all skill levels.",
      img: NFT4,
      link: "/TNR/Vocabulary"
    },
    {
      id: 5,
      title: "Battle Scene",
      content: "A striking representation of a Renaissance battle, this painting captures the chaos and bravery of the time. The artist's skill is evident in the intricate detailing of the soldiers and the dynamic portrayal of action.",
      img: NFT5,
      link: "/artwork5"
    },
    {
      id: 6,
      title: "Heavenly Ascension",
      content: "This Renaissance painting beautifully depicts the heavenly ascension with serene and ethereal imagery. The intricate detailing of the celestial beings showcases the artist's skill and devotion.",
      img: NFT6,
      link: "/artwork6"
    },
    {
      id: 7,
      title: "Still Life with Skull",
      content: "This still life painting features a hauntingly beautiful skull. The artist has brought a raw and morbid beauty to the forefront, emphasizing the transient nature of life.",
      img: NFT7,
      link: "/artwork7"
    },
    {
      id: 8,
      title: "Church Interior",
      content: "This baroque painting beautifully depicts the interior of a grand church. The artist's use of light and shadow brings depth to the image, and the intricate details highlight the architectural beauty of the era.",
      img: NFT8,
      link: "/artwork8"
    },
    {
      id: 9,
      title: "Heavenly Vision",
      content: "Another beautiful representation of the heavens from the Renaissance era, this painting embodies the spiritual aspiration and religious devotion of the time, with celestial beings painted with fine detailing.",
      img: NFT9,
      link: "/artwork9"
    },
    ], []);

    useEffect(() => {
      AOS.init({
        duration: 1000
      });
    }, []);
  
    useEffect(() => {
      let images = ContentTable.map((item) => item.img);
      Promise.all(
        images.map((src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          })
        )
      ).then(() => {
        setImagesLoaded(true);
      });
    }, []);
  
    return (
      <div className={`flex flex-col items-center justify-center w-full py-4 px-4 md:px-0 ${imagesLoaded ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full py-12 px-4 md:px-4">
        <img src={WideLogo} alt="Wide Logo" className="w-full " />
        </div>
        {ContentTable.map((item, index) => (
          <div
            className={`flex flex-col md:flex-row w-full my-5 items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            key={item.id}
            data-aos="fade-right"
          >
            <Link to={item.link} className="md:w-3/5 w-full md:px-10">
              <div className="flex flex-col items-center md:items-start py-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover "
                />
              </div>
            </Link>
            <div className="md:w-3/5 w-full text-center md:text-left mt-5 md:mt-0 md:px-10 py-4">
              <div className="font-bold text-xl mb-2">
                <Link to={item.link}>{item.title}</Link>
              </div>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  
  };
  export default Home;