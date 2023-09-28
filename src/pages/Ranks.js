import React, { useState } from "react";

import ImageModal from "../components/ImageModal";

import Rank11 from "../assets/imgs/tnr coa 1.jpg";
import Rank12 from "../assets/imgs/tnr coa 2.jpg";
import Rank13 from "../assets/imgs/tnr coa 3.jpg";
import Rank14 from "../assets/imgs/tnr coa 4.jpg";
import Rank15 from "../assets/imgs/tnr coa 5.jpg";
import Rank16 from "../assets/imgs/tnr coa 6.jpg";
import Rank17 from "../assets/imgs/tnr coa 7.jpg";
import Rank18 from "../assets/imgs/tnr coa 8.jpg";
import Rank19 from "../assets/imgs/tnr coa 9.jpg";
import Rank21 from "../assets/imgs/2rank1.png";
import Rank22 from "../assets/imgs/2rank2.png";
import Rank23 from "../assets/imgs/2rank3.png";
import Rank24 from "../assets/imgs/2rank4.png";
import Rank25 from "../assets/imgs/2rank5.png";
import Rank26 from "../assets/imgs/2rank6.png";
import Rank27 from "../assets/imgs/2rank7.png";
import Rank28 from "../assets/imgs/2rank8.png";
import Rank29 from "../assets/imgs/2rank9.png";
import Rank31 from "../assets/imgs/3rank1.jpg";
import Rank32 from "../assets/imgs/3rank2.jpg";
import Rank33 from "../assets/imgs/3rank3.jpg";
import Rank51 from "../assets/imgs/5rank1.jpg";
import Rank52 from "../assets/imgs/5rank2.jpg";
import Rank53 from "../assets/imgs/5rank3.jpg";
import Rank54 from "../assets/imgs/5rank4.jpg";
import Rank55 from "../assets/imgs/5rank5.jpg";
import Rank56 from "../assets/imgs/5rank6.jpg";
import Rank57 from "../assets/imgs/5rank7.jpg";
import Rank58 from "../assets/imgs/5rank8.jpg";
import Rank59 from "../assets/imgs/5rank9.jpg";
import Merch1 from "../assets/imgs/merch1.jpg";
import Merch2 from "../assets/imgs/merch2.jpg";
import Merch3 from "../assets/imgs/merch3.jpg";
import Merch4 from "../assets/imgs/merch4.jpg";

const Ranks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [descriptionModalIsOpen, setDescriptionModalIsOpen] = useState(false);
  const [currentDescription, setCurrentDescription] = useState("");

  const openDescriptionModal = (description) => {
    setCurrentDescription(description);
    setDescriptionModalIsOpen(true);
  };

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
        Rank11,
        Rank12,
        Rank13,
        Rank14,
        Rank15,
        Rank16,
        Rank17,
        Rank18,
        Rank19,
      ],
    },
    {
      id: 2,
      title: "RANK 2 (Citizen of the Royal Realm)",
      description:
        "Get your POLISHED ARMS - SHOW PERSONAL PRIDE! Register your heraldic emblem and take your first steps towards embodying the spirit of true nobility. Choose from our three tiers of digital registration to begin your journey.",
      images: [
        Rank21,
        Rank22,
        Rank23,
        Rank24,
        Rank25,
        Rank26,
        Rank27,
        Rank28,
        Rank29,
      ],
    },
    {
      id: 3,
      title: "RANK 3 (Elite of the Royal Realm)",
      description:
        "CREATE your FULL HERALDIC ACHIEVEMENT - Create using coamaker.com (Coat of Arms, Flag, and Badge) + Digital Royal Stamp. Become a Noble of the Royal Realm, with your own fine art physical heraldic assets handmade by our Heraldic Officer. Register them digitally to make them officially yours, and embody the spirit of true nobility.",
      images: [Rank31, Rank32, Rank33],
    },
    {
      id: 4,
      title: "RANK 4 (Lord/Lady of the Royal Realm)",
      description:
        "Premium Fine Art & NFT 1:1. Get this exclusive piece of fine art or WIN IT with our Royal Challenges. This is a museum-level piece of fine art, matched with an NFT of it, 1:1. This artwork is part of our Origin Story, which you can own and show off your status to the world. Embody the spirit of true nobility with this exclusive piece of art.",
      images: [
        Rank11,
        Rank12,
        Rank13,
        Rank14,
        Rank15,
        Rank16,
        Rank17,
        Rank18,
        Rank19,
      ],
    },
    {
      id: 5,
      title: "RANK 5 (Ruler of the Royal Realm)",
      description:
        "Finally, become a Ruler of the Royal Realm, a character in our Origin Story, with your personal handmade Royal Bust and matching NFT 1:1. This is the ultimate way to show the world your royal status and embody the spirit of true nobility.",
      images: [
        Rank51,
        Rank52,
        Rank53,
        Rank54,
        Rank55,
        Rank56,
        Rank57,
        Rank58,
        Rank59,
      ],
    },
    {
      id: 6,
      title: "TNR Merch (Noble Rank Boost)",
      description:
        "Show your ROYAL PRIDE with our exclusive merchandise. Gain rank-leveling points by wearing the TNR merch and sharing it on social media!",
      images: [Merch1, Merch2, Merch3, Merch4],
    },
  ];
  return (
    <div className="my-8 mb-8">
      <ImageModal
        images={currentImages}
        description={currentDescription}
        isOpen={modalIsOpen || descriptionModalIsOpen}
        onClose={() => {
          closeModal();
          setDescriptionModalIsOpen(false);
        }}
        showDescription={descriptionModalIsOpen}
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
              className={`w-full h-full object-cover ${
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
                    onClick={() => openDescriptionModal(item.description)}
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
