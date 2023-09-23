import React, { useState } from "react";

import ImageModal from "../components/ImageModal";

import COA1 from "../assets/imgs/tnr coa 1.jpg";
import COA2 from "../assets/imgs/tnr coa 2.jpg";
import COA3 from "../assets/imgs/tnr coa 3.jpg";
import COA4 from "../assets/imgs/tnr coa 4.jpg";
import COA5 from "../assets/imgs/tnr coa 5.jpg";
import COA6 from "../assets/imgs/tnr coa 6.jpg";
import COA7 from "../assets/imgs/tnr coa 7.jpg";
import COA8 from "../assets/imgs/tnr coa 8.jpg";
import COA9 from "../assets/imgs/tnr coa 9.jpg";
import COA10 from "../assets/imgs/tnr coa 10.jpg";
import COA11 from "../assets/imgs/tnr coa 11.jpg";
import COA12 from "../assets/imgs/tnr coa 12.jpg";
import COA13 from "../assets/imgs/tnr coa 13.jpg";
import COA14 from "../assets/imgs/tnr coa 14.jpg";
import COA15 from "../assets/imgs/tnr coa 15.jpg";

const Ranks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const openModal = (images) => {
    setCurrentImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const ContentTable = [
    {
      id: 1,
      title: "RANK 1 (Voyager of the Royal Realm)",
      description:
        "Choose Your PERSONAL HERALDIC SYMBOL. Start your journey in the Royal Realm by selecting your own unique heraldic emblem from the NEFTING Showcase labeled “RANK 1). This will be the symbol that represents you as a one who entered the Royal Realm as a voyager.",
      images: [
        COA1,
        COA2,
        COA3,
        COA4,
        COA5,
        COA6,
        COA7,
        COA8,
        COA9,
        COA10,
        COA11,
        COA12,
        COA13,
        COA14,
        COA15,
      ],
    },
    {
      id: 2,
      title: "RANK 2 (Citizen of the Royal Realm)",
      description:
        "Get your POLISHED ARMS - SHOW PERSONAL PRIDE! Register your heraldic emblem and take your first steps towards embodying the spirit of true nobility. Choose from our three tiers of digital registration to begin your journey.",
      images: [
        COA1,
        COA2,
        COA3,
        COA4,
        COA5,
        COA6,
        COA7,
        COA8,
        COA9,
        COA10,
        COA11,
        COA12,
        COA13,
        COA14,
        COA15,
      ],
    },
    {
      id: 3,
      title: "RANK 3 (Elite of the Royal Realm)",
      description:
        "CREATE your FULL HERALDIC ACHIEVEMENT - Create using coamaker.com (Coat of Arms, Flag, and Badge) + Digital Royal Stamp. Become a Noble of the Royal Realm, with your own fine art physical heraldic assets handmade by our Heraldic Officer. Register them digitally to make them officially yours, and embody the spirit of true nobility.",
      images: [
        COA1,
        COA2,
        COA3,
        COA4,
        COA5,
        COA6,
        COA7,
        COA8,
        COA9,
        COA10,
        COA11,
        COA12,
        COA13,
        COA14,
        COA15,
      ],
    },
    {
      id: 4,
      title: "RANK 4 (Lord/Lady of the Royal Realm)",
      description:
        "Premium Fine Art & NFT 1:1. Get this exclusive piece of fine art or WIN IT with our Royal Challenges. This is a museum-level piece of fine art, matched with an NFT of it, 1:1. This artwork is part of our Origin Story, which you can own and show off your status to the world. Embody the spirit of true nobility with this exclusive piece of art.",
      images: [
        COA1,
        COA2,
        COA3,
        COA4,
        COA5,
        COA6,
        COA7,
        COA8,
        COA9,
        COA10,
        COA11,
        COA12,
        COA13,
        COA14,
        COA15,
      ],
    },
    {
      id: 5,
      title: "RANK 5 (Ruler of the Royal Realm)",
      description:
        "Finally, become a Ruler of the Royal Realm, a character in our Origin Story, with your personal handmade Royal Bust and matching NFT 1:1. This is the ultimate way to show the world your royal status and embody the spirit of true nobility.",
      images: [
        COA1,
        COA2,
        COA3,
        COA4,
        COA5,
        COA6,
        COA7,
        COA8,
        COA9,
        COA10,
        COA11,
        COA12,
        COA13,
        COA14,
        COA15,
      ],
    },
    {
      id: 6,
      title: "TNR Merch (Noble Rank Boost)",
      description:
        "Show your ROYAL PRIDE with our exclusive merchandise. Gain rank-leveling points by wearing the TNR merch and sharing it on social media!",
      images: [
        COA1,
        COA2,
        COA3,
        COA4,
        COA5,
        COA6,
        COA7,
        COA8,
        COA9,
        COA10,
        COA11,
        COA12,
        COA13,
        COA14,
        COA15,
      ],
    },
  ];
  return (
    <div className="my-8 mb-8">
      <ImageModal
        images={currentImages}
        isOpen={modalIsOpen}
        onClose={closeModal}
      />

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
            onClick={() => openModal(item.images)}
          >
            <img
              onLoad={() => setImagesLoaded(true)}
              className={`w-full h-full object-fill ${
                imagesLoaded
                  ? "opacity-100 transition-opacity duration-700"
                  : "opacity-0"
              }`}
              src={item.images[0]}
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
