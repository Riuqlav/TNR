import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import NFT1 from "../assets/imgs/NFT1.jpg"
import NFT2 from "../assets/imgs/NFT2.jpg";
import NFT3 from "../assets/imgs/NFT3.jpg";
import NFT4 from "../assets/imgs/NFT4.jpg";
import NFT5 from "../assets/imgs/NFT5.jpg";
import NFT6 from "../assets/imgs/NFT6.jpg";
import NFT7 from "../assets/imgs/NFT7.jpg";
import NFT8 from "../assets/imgs/NFT8.jpg";
import NFT9 from "../assets/imgs/NFT9.jpg";

const Home = () => {

  const ContentTable = useMemo(() => [
    {
      id: 1,
      title: "About",
      content: "We are a team of passionate developers who love building amazing web applications. Our goal is to create software that is not only functional but also beautiful and intuitive. We believe that technology should be accessible to everyone, and we strive to make our products easy to use for people of all skill levels.",
      img: NFT1,
      link: "/about"
    },
    {
      id: 2,
      title: "Projects",
      content: "We have worked on a variety of projects, ranging from small websites to large-scale web applications. Our team has experience with a wide range of technologies, including React, Node.js, and MongoDB. We are always looking for new and exciting projects to work on, so if you have an idea for a web application, we would love to hear from you!",
      img: NFT2,
      link: "/projects"
    },
    {
      id: 3,
      title: "Ranks",
      content: "We are proud to have some of our projects ranked among the top web applications in the world. Our team has won several awards for our work, and we are constantly striving to improve our skills and create even better software. We believe that our success is due to our commitment to quality and our passion for what we do.",
      img: NFT3,
      link: "/ranks"
    },
    {
      id: 4,
      title: "David and God",
      content: "This striking piece portrays the seminal moment of divine connection between David and God. Its vivid colors and intricate detail illustrate the artist's skillful representation of this revered biblical event.",
      img: NFT4,
      link: "/artwork4"
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


  const containerRef = useRef(null);

  useEffect(() => {
    ContentTable.forEach((post, i) => {
      const direction = i % 2 === 0 ? "left" : "right";

      ScrollReveal().reveal(`.image-${post.id}`, {
        delay: 300,
        distance: "50px",
        duration: 300,
        easing: "ease-in-out",
        origin: direction,
        reset: true,
      });

      ScrollReveal().reveal(`.content-${post.id}`, {
        delay: 500,
        distance: "50px",
        duration: 400,
        easing: "ease-in-out",
        origin: direction === "left" ? "right" : "left",
        reset: true,
      });
    });

    const adjustLayout = () => {
      const posts = Array.from(containerRef.current.children);
      posts.forEach(post => {
        const imgContainer = post.children[0];
        const textContainer = post.children[1];
        if (textContainer.offsetHeight > imgContainer.offsetHeight) {
          post.classList.remove('md:flex-row');
          post.classList.add('md:flex-col');
          imgContainer.style.order = '1';
          textContainer.style.order = '2';
        } else {
          post.classList.remove('md:flex-col');
          post.classList.add('md:flex-row');
          imgContainer.style.order = '';
          textContainer.style.order = '';
        }
      });
    };

    const resizeObserver = new ResizeObserver(adjustLayout);
    ContentTable.forEach((post) => {
      const textContainer = document.querySelector(`.content-${post.id}`);
      resizeObserver.observe(textContainer);
    });

    return () => resizeObserver.disconnect();
  }, [ContentTable]);

  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex flex-wrap justify-center" ref={containerRef}>
        {ContentTable.map((post, i) => (
          <div key={post.id} className="m-10 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103">
            <div className={i % 2 === 0 ? `w-full md:w-2/5 image-${post.id}` : `w-full md:w-2/5 md:order-last image-${post.id}`}>
            <Link to={post.link}>
            <img alt="Placeholder" className="w-full object-cover" src={post.img} />
            </Link>
            </div>
            <div className={i % 2 === 0 ? `w-full md:w-3/5 content-${post.id}` : `w-full md:w-3/5 md:order-first content-${post.id}`}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {i < 3 ? <Link to={post.link}>{post.title}</Link> : post.title}
                </div>
                <p className="text-grey-darker text-base">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;