import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {


  const AboutContent = [
    {
      id: 1,
      title: "About The New Royals",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt16.jpg",
      content: 'The New Royals NFT Club is an international club that understands the power of symbolism, purpose, and a sense of belonging. <br /><br /> Embark on an extraordinary journey to become a New Royal, a strong personality capable of conquering new realms, ideas, and ideals.<br /> Claim your place among legends through personal heraldry, fine art NFTs, and by entering our Original Story.<br /><br /> Forge a new era marked by conquests of the mind, heart, and soul. <br />The world awaits the rise of the New Royals!',
    },
    {
      id: 2,
      title: "The Exilarch Manifesto",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt8.jpg",
      content: 'There is life, potential, and greatness <br /><br />WITHIN ME<br />There is glory, joy, and strength<br />IN MY BLOOD<br />Although I am in darkness, weak,and lost<br />IN EXILE<br />Although in my lamp there is fire no moreI.<br />I. SHALL. RISE. AGAIN!<br />From rubble to might<br />From shame to glory<br />From weakness to strength<br />I. SHALL. RISE. AGAIN!<br />For my sword and my shield<br />For my throne and my staff<br />For my House and my People<br />I AM THE EXILARCH<br />In my return there is redemption<br />In my name there is pride<br />In my reign there is peace<br />I AM THE EXILARCH<br />As I roar you tremble<br />As I smile you rejoice<br />As I cheer you drink<br />I AM THE MONARCH<br />The Exilarch of old<br />The Sovereign of this Realm<br />For the Here, Now, and Forever!',
    }
  ];

  useEffect(() => {
    AOS.init({ once: true });

    AboutContent.forEach((post, i) => {
      const direction = i % 2 === 0 ? "fade-left" : "fade-right";

      document.querySelector(`.about-image-${post.id}`).setAttribute("data-aos", direction);
      document.querySelector(`.about-content-${post.id}`).setAttribute("data-aos", direction === "fade-left" ? "fade-right" : "fade-left");
    });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex flex-wrap justify-center">
        {AboutContent.map((post, i) => (
          <div className="m-10 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103" key={i}>
            <div className={`w-full md:w-4/6 about-image-${post.id} my-8 md:my-20`} data-aos-duration="1000" data-aos-delay="0">
              <img
                alt="About Placeholder"
                className="w-full h-auto"
                src={post.img}
              />
            </div>
            <div className={`w-full md:w-3/5 about-content-${post.id}`} data-aos-duration="1000" data-aos-delay="0">
              <div className="px-6 py-4">
                  <div className="font-bold text-4xl mb-2">{post.title}</div>
                  <p className="text-grey-darker" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
