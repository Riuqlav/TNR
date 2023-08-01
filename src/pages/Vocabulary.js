import React, { useEffect, useMemo, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Vocabulary = () => {
  const ContentTable = [
    {
      id: 1,
      title: "TNR Vocabulary",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt1.jpg",
      content: '<br/><br/>“The New Royals” also known by the acronym TNR<br/><br/>“Royal Realm” or “The Kingdom” is the name of our community ecosystem<br/><br/>“TNR Collectible NFTs” - Variations of “Royal Busts” created with limited use of artificial intelligence and/or software use from the base of a fine art piece by JôNATAS.<br/><br/>“Royal Grants” are Collectible NFT giveaways.<br/><br/>“TNR Premium NFTs” - Fine art pieces minted from, and accompanied by a physical, one-of-a-kind, fine art piece by JôNATAS, with a certificate of authenticity mentioning current market value.<br/><br/>“Citizens of the Royal Realm” are non-collectors, participants of our social media channels, members of our general community.<br/><br/>“Nobles of the Realm” are those who own at least a Collectible NFT, who are generally referred to in our community by the title of Lord and Lady.<br/><br/>“Royals of the Realm” any noble who owns his or hers Royal Bust or owns 10% or more of a Premium Collection. A Royal is eligible to develop a Royal House.<br/><br/>“The Ministers of the Exilarch” are the greatest among the Royals of the Realm to achieve this status one must be a developer of The New Royals.<br/><br/>“Royals of the Realm” are heads of Royal Houses, meaning, the network from our main leaders and builders.<br/><br/>“The Exilarch” is the Great Monarch in exile.<br/><br/>“Royal Challenges” - Royal challenges is a communal event that allows Royal Realm members the opportunity to be granted a TNR Original Art when the challenge is won.<br/><br/>“Royal Summons” - is an official call from the Exilarch towards an individual.<br/><br/>“Royal Bust” - A Royal Bust is a personalized hand-drawn bust of yourself created by a Minister of the Exilarch Lord Jonatas<br/><br/>“Royal Builders” - Builders are members who contribute to community and project development.<br/><br/>',
    },
];
useEffect(() => {
  AOS.init({ once: true });

  ContentTable.forEach((post, i) => {
    const direction = i % 2 === 0 ? "fade-left" : "fade-right";

    document.querySelector(`.about-image-${post.id}`).setAttribute("data-aos", direction);
    document.querySelector(`.about-content-${post.id}`).setAttribute("data-aos", direction === "fade-left" ? "fade-right" : "fade-left");
  });
}, []);

return (
  <div className="container mx-auto px-4 md:px-12">
    <div className="flex flex-wrap justify-center">
      {ContentTable.map((post, i) => (
        <div className="m-10 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103" key={i}>
          <div className={` about-image-${post.id} my-8 md:my-20`} data-aos-duration="1000" data-aos-delay="0">
            {/* <img
              alt="About Placeholder"
              className="w-full h-auto"
              src={post.img}
            /> */}
          </div>
          <div className={`about-content-${post.id}`} data-aos-duration="1000" data-aos-delay="0">
            <div className="px-6 py-4">
                <div className="font-bold text-4xl mb-2">{post.title}</div>
                <p className="text-grey-darker"
                dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Vocabulary;
