import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const ContentTable = [
    { id: 1, title: "Artwork 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 2, title: "Artwork 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 3, title: "Artwork 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 4, title: "Artwork 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 5, title: "Artwork 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 6, title: "Artwork 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" }, { id: 1, title: "Artwork 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 2, title: "Artwork 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 3, title: "Artwork 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 4, title: "Artwork 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 5, title: "Artwork 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 6, title: "Artwork 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" }, { id: 1, title: "Artwork 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 2, title: "Artwork 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 3, title: "Artwork 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 4, title: "Artwork 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 5, title: "Artwork 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
    { id: 6, title: "Artwork 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://place-hold.it/600x400" },
  ];

  useEffect(() => {
    ContentTable.forEach((post, i) => {
      const direction = i % 2 === 0 ? "left" : "right";

      ScrollReveal().reveal(`.image-${post.id}`, {
        delay: 300,
        distance: "50px",
        duration: 800,
        easing: "ease-in-out",
        origin: direction,
        reset: true,
      });

      ScrollReveal().reveal(`.content-${post.id}`, {
        delay: 500,
        distance: "50px",
        duration: 800,
        easing: "ease-in-out",
        origin: direction === "left" ? "right" : "left",
        reset: true,
      });
    });
  }, [ContentTable]);

  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex flex-wrap justify-center">
        {ContentTable.map((post, i) => (
          <div key={post.id} className="m-10 max-w-md flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-110">
            <div className={i % 2 === 0 ? `w-full md:w-1/2 image-${post.id}` : `w-full md:w-1/2 order-last md:order-first content-${post.id}`}>
              <img alt="Placeholder" className="w-full h-64 object-cover" src={post.img} />
            </div>
            <div className={i % 2 === 0 ? `w-full md:w-1/2 content-${post.id}` : `w-full md:w-1/2 order-first md:order-last image-${post.id}`}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
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
