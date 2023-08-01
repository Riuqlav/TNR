import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Articles = () => {


  const ContentTable = [
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
    },
    {
      id: 3,
      title: "Meet the Team",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt4.jpg",
      content: 'Our team is an international and diverse group of professionals passionate about our mission. <br /><br />' + 
                '<strong>JÔNATAS</strong> - Co-Founder and Art Director, France/USA <br />' +
                '<strong>EROS GONZALES</strong> - Co-Founder and Marketing Director, USA <br />' +
                '<strong>DANA BLICKENSDERFER</strong> - Partner & Co-Founder of JADA, USA <br />' +
                '<strong>ALEX RICHETIN</strong> - Partner & Head of Growth, France <br />' +
                '<strong>PAOULINA BOUROVA</strong> - Partner & Legal Consultant, USA <br />' +
                '<strong>ORAN AVIV</strong> - Partner & Marketing Consultant, USA <br />' +
                '<strong>SAMUEL LOETSCHER</strong> - Partner & Communications Director, USA <br />' +
                '<strong>EMERSON</strong> - Partner & Development Consultant, Brazil/USA <br />' +
                '<strong>HUGO KLEINSINGER</strong> - Partner & Development, France <br />' +
                '<strong>IVAN VETROV</strong> - Designer, France <br /><br />' +
                'Each member brings their unique skillset and perspective to our collective effort. Together, we strive to achieve our vision.',
    },
    {
      id: 4,
      title: "The New Royals",
      // img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt9.jpg",
      content: "<strong>The Origin Story</strong><br/><br/><strong>I.</strong><br/><br/>I was once told that I should write it all down. The man who told me so, was viewed as a hero by many, a survivor of a great war, who came for the rescue of his long – lost brethren. This hero is long gone now, but his words never allowed me to rest.<br/><br/><strong>II.</strong><br/><br/>Likewise, the love, the pride, and the sense of hope that I carry within me, are what raise my spirit today. For I see the end of my exile, and with it, the re-edification of my throne, my House, and my People – which is necessary to happen in this exact order.<br/><br/><strong>III.</strong><br/><br/>Yes, I do believe it is no accident that you have come across this manuscript, as this was also foretold by the Elders (or so I remember).<br/><br/><strong>IV.</strong><br/><br/>I don’t know who or where you are, but I was assured that whoever reads this, does have a share in the Kingdom of the Greater Realm.<br/><br/><strong>V.</strong><br/><br/>As I bring up certain words, such as those in reference to a past kingdom, please do not think of me as anyone of any might or power today; as my current condition is one of exile, distress, and solitude. I have no shelter from the elements, no security of body, and no surplus of any kind. Today, I simply wander through the ruins of what once was…<br/><br/><strong>VI.</strong><br/><br/>As I wander through the ruins, memories of a glorious past flood my mind. I see the grand halls and towering spires that once stood proud, now reduced to rubble and decay. The echoes of laughter and music that once filled these halls are replaced by the haunting silence of abandonment.<br/><br/><strong>VII.</strong><br/><br/>The path ahead is treacherous, filled with danger and uncertainty. But I am no longer the naïve prince who was banished from his throne. I have witnessed the depths of despair and the resilience of the human spirit. I have learned that true power lies not in the hands of a single ruler, but in the collective will of a united people.<br/><br/><strong>VIII.</strong><br/><br/>(To be continued...)"

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
          <div className="m-8 max-w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103" key={i}>
            <div className={`w-full md:w-4/6 about-image-${post.id} my-8 md:my-20`} data-aos-duration="1000" data-aos-delay="0">
              {post.img ? <img
                alt="About Placeholder"
                className="w-full h-auto"
                src={post.img}
              /> : null}
            </div>
            <div className={`${post.img ?
              "w-full md:w-3/5" :
              null} about-content-${post.id}`} data-aos-duration="1000" data-aos-delay="0">
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

export default Articles;
