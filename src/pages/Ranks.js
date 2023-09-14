import React, { useState } from "react";

import rank1Image from "../assets/imgs/tnr coa 1.jpg";
import rank2Image from "../assets/imgs/tnr coa 2.jpg";
import rank3Image from "../assets/imgs/tnr coa 3.jpg";
import rank4Image from "../assets/imgs/tnr coa 4.jpg";
import rank5Image from "../assets/imgs/tnr coa 5.jpg";
import merchImage from "../assets/imgs/tnr coa 6.jpg";

const Ranks = () => {
  const ContentTable = [
    {
      id: 1,
      title: "RANK 1 (Voyager of the Royal Realm)",
      description:
        "Choose Your PERSONAL HERALDIC SYMBOL. Start your journey in the Royal Realm by selecting your own unique heraldic emblem from the NEFTING Showcase labeled “RANK 1). This will be the symbol that represents you as a one who entered the Royal Realm as a voyager.",
      img: rank1Image,
    },
    {
      id: 2,
      title: "RANK 2 (Citizen of the Royal Realm)",
      description:
        "Get your POLISHED ARMS - SHOW PERSONAL PRIDE! Register your heraldic emblem and take your first steps towards embodying the spirit of true nobility. Choose from our three tiers of digital registration to begin your journey.",
      img: rank2Image,
    },
    {
      id: 3,
      title: "RANK 3 (Elite of the Royal Realm)",
      description:
        "CREATE your FULL HERALDIC ACHIEVEMENT - Create using coamaker.com (Coat of Arms, Flag, and Badge) + Digital Royal Stamp. Become a Noble of the Royal Realm, with your own fine art physical heraldic assets handmade by our Heraldic Officer. Register them digitally to make them officially yours, and embody the spirit of true nobility.",
      img: rank3Image,
    },
    {
      id: 4,
      title: "RANK 4 (Lord/Lady of the Royal Realm)",
      description:
        "Premium Fine Art & NFT 1:1. Get this exclusive piece of fine art or WIN IT with our Royal Challenges. This is a museum-level piece of fine art, matched with an NFT of it, 1:1. This artwork is part of our Origin Story, which you can own and show off your status to the world. Embody the spirit of true nobility with this exclusive piece of art.",
      img: rank4Image,
    },
    {
      id: 5,
      title: "RANK 5 (Ruler of the Royal Realm)",
      description:
        "Finally, become a Ruler of the Royal Realm, a character in our Origin Story, with your personal handmade Royal Bust and matching NFT 1:1. This is the ultimate way to show the world your royal status and embody the spirit of true nobility.",
      img: rank5Image,
    },
    {
      id: 6,
      title: "TNR Merch (Noble Rank Boost)",
      description:
        "Show your ROYAL PRIDE with our exclusive merchandise. Gain rank-leveling points by wearing the TNR merch and sharing it on social media!",
      img: merchImage,
    },
  ];
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <div className="my-8 mb-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center mt-6">
          Our Ranks
        </h1>
        <h2 className="text-xl text-gray-600">
          Explore the journey to the royal realm
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
        {ContentTable.map((item) => (
          <div
            key={item.id}
            className="card rounded-md overflow-hidden shadow-xl cursor-pointer transition-transform transform hover:scale-101 hover:shadow-2xl ease-in relative h-96"
          >
            <img
              onLoad={() => setImagesLoaded(true)}
              className={`w-full h-full object-fill ${
                imagesLoaded
                  ? "opacity-100 transition-opacity duration-700"
                  : "opacity-0"
              }`}
              src={item.img}
              alt={item.title}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm ${
                imagesLoaded
                  ? "opacity-100 transition-opacity duration-700"
                  : "opacity-0"
              }`}
            >
              <div className="px-6 py-4 h-full flex flex-col justify-between">
                <div className="font-bold text-xl mb-2 text-white line-clamp-3">
                  {item.title}
                </div>
                <div>
                  <p className="text-white text-base leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-gray-600 underline hover:text-gray-700 transition-colors duration-300 text-right ml-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {!imagesLoaded && (
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranks;
