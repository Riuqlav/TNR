import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NFT16 from "../assets/imgs/NFT16.jpg";
import NFT8 from "../assets/imgs/NFT8.jpg";
import NFT9 from "../assets/imgs/NFT9.jpg";
import NFT4 from "../assets/imgs/NFT4.jpg";

const Articles = () => {
  const ContentTable = useMemo(
    () => [
      {
        id: 1,
        title: "About The New Royals",
        img: NFT16,
        content:
          "The New Royals NFT Club is an international club that understands the power of symbolism, purpose, and a sense of belonging. <br /><br /> Embark on an extraordinary journey to become a New Royal, a strong personality capable of conquering new realms, ideas, and ideals.<br /> Claim your place among legends through personal heraldry, fine art NFTs, and by entering our Original Story.<br /><br /> Forge a new era marked by conquests of the mind, heart, and soul. <br />The world awaits the rise of The New Royals!",
      },
      {
        id: 2,
        title: "The Exilarch Manifesto",
        img: NFT8,
        content:
          "There is life, potential, and greatness <br /><br />WITHIN ME<br />There is glory, joy, and strength<br />IN MY BLOOD<br />Although I am in darkness, weak,and lost<br />IN EXILE<br />Although in my lamp there is fire no moreI.<br />I. SHALL. RISE. AGAIN!<br />From rubble to might<br />From shame to glory<br />From weakness to strength<br />I. SHALL. RISE. AGAIN!<br />For my sword and my shield<br />For my throne and my staff<br />For my House and my People<br />I AM THE EXILARCH<br />In my return there is redemption<br />In my name there is pride<br />In my reign there is peace<br />I AM THE EXILARCH<br />As I roar you tremble<br />As I smile you rejoice<br />As I cheer you drink<br />I AM THE MONARCH<br />The Exilarch of old<br />The Sovereign of this Realm<br />For the Here, Now, and Forever!",
      },
      {
        id: 3,
        title: "Meet the Team",
        img: NFT4,
        content:
          "Our team is an international and diverse group of professionals passionate about our mission. <br /><br />" +
          "<strong>JÔNATAS</strong> - Co-Founder and Art Director, France/USA <br />" +
          "<strong>EROS GONZALES</strong> - Co-Founder and Marketing Director, USA <br />" +
          "<strong>DANA BLICKENSDERFER</strong> - Partner & Co-Founder of JADA, USA <br />" +
          "<strong>ALEX RICHETIN</strong> - Partner & Head of Growth, France <br />" +
          "<strong>PAOULINA BOUROVA</strong> - Partner & Legal Consultant, USA <br />" +
          "<strong>ORAN AVIV</strong> - Partner & Marketing Consultant, USA <br />" +
          "<strong>SAMUEL LOETSCHER</strong> - Partner & Communications Director, USA <br />" +
          "<strong>EMERSON</strong> - Partner & Development Consultant, Brazil/USA <br />" +
          "<strong>HUGO KLEINSINGER</strong> - Partner & Development, France <br />" +
          "<strong>IVAN VETROV</strong> - Designer, France <br /><br />" +
          "Each member brings their unique skillset and perspective to our collective effort. Together, we strive to achieve our vision.",
      },
      {
        id: 4,
        title: "The Exilarch Manifesto",
        img: NFT9,
        content:
          "There is life, potential, and greatness <br /><br />WITHIN ME<br />There is glory, joy, and strength<br />IN MY BLOOD<br />Although I am in darkness, weak,and lost<br />IN EXILE<br />Although in my lamp there is fire no moreI.<br />I. SHALL. RISE. AGAIN!<br />From rubble to might<br />From shame to glory<br />From weakness to strength<br />I. SHALL. RISE. AGAIN!<br />For my sword and my shield<br />For my throne and my staff<br />For my House and my People<br />I AM THE EXILARCH<br />In my return there is redemption<br />In my name there is pride<br />In my reign there is peace<br />I AM THE EXILARCH<br />As I roar you tremble<br />As I smile you rejoice<br />As I cheer you drink<br />I AM THE MONARCH<br />The Exilarch of old<br />The Sovereign of this Realm<br />For the Here, Now, and Forever!",
      },
      {
        id: 5,
        title: "The New Royals",
        content:
          "There is life, potential, and greatness <br /><br />WITHIN ME<br />There is glory, joy, and strength<br />IN MY BLOOD<br />Although I am in darkness, weak,and lost<br />IN EXILE<br />Although in my lamp there is fire no moreI.<br />I. SHALL. RISE. AGAIN!<br />From rubble to might<br />From shame to glory<br />From weakness to strength<br />I. SHALL. RISE. AGAIN!<br />For my sword and my shield<br />For my throne and my staff<br />For my House and my People<br />I AM THE EXILARCH<br />In my return there is redemption<br />In my name there is pride<br />In my reign there is peace<br />I AM THE EXILARCH<br />As I roar you tremble<br />As I smile you rejoice<br />As I cheer you drink<br />I AM THE MONARCH<br />The Exilarch of old<br />The Sovereign of this Realm<br />For the Here, Now, and Forever!",
      },
    ],
    []
  );

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    let images = ContentTable.map((item) => item.img).filter(Boolean);
    Promise.all(
      images.map(
        (src) =>
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
    <div
      className={`flex flex-col items-center justify-center w-full py-4 px-4 md:px-0 ${
        imagesLoaded
          ? "opacity-100 transition-opacity duration-700"
          : "opacity-0"
      }`}
    >
      {ContentTable.map((item, index) => (
        <div
          className={`flex flex-col md:flex-row w-full my-5 items-center justify-center py-8 ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
          key={item.id}
          data-aos="fade-right"
        >
          {item.img && (
            <div className="md:w-3/5 w-full md:px-10">
              <div className="flex flex-col items-center md:items-start py-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover "
                />
              </div>
            </div>
          )}
          <div
            className={`md:w-3/5 w-full mt-5 md:mt-0 md:px-10 py-4 ${
              item.img
                ? index % 2 === 0
                  ? "md:text-left"
                  : "md:text-right"
                : "md:text-center"
            }`}
          >
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Articles;
