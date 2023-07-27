import React, { useEffect, useMemo, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  const ContentTable = useMemo(() => [
    {
      id: 1,
      title: "Artwork 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius diam vitae purus pulvinar, sed ultricies enim sagittis. Curabitur id semper ex. Vivamus a lacinia tellus. Quisque nec rutrum dui. Fusce accumsan eleifend purus, sit amet porttitor risus tristique sed.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt1.jpg"
    },
    {
      id: 2,
      title: "Artwork 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt2.jpg"
    },
    {
      id: 3,
      title: "Artwork 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt3.jpg"
    },
    {
      id: 4,
      title: "Artwork 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt4.jpg"
    },
    {
      id: 5,
      title: "Artwork 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt5.jpg"
    },
    {
      id: 6,
      title: "Artwork 6",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt6.jpg"
    },
    {
      id: 7,
      title: "Artwork 7",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt7.jpg"
    },
    {
      id: 8,
      title: "Artwork 8",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt8.jpg"
    },
    {
      id: 9,
      title: "Artwork 9",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/NFt9.jpg"
    }
], []);

  const containerRef = useRef(null);

 useEffect(() => {
    AOS.init({
      once: true, // here
    });

    ContentTable.forEach((post, i) => {
      const direction = i % 2 === 0 ? "fade-left" : "fade-right";

      document.querySelector(`.image-${post.id}`).setAttribute("data-aos", direction);
      document.querySelector(`.content-${post.id}`).setAttribute("data-aos", direction === "fade-left" ? "fade-right" : "fade-left");
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
    <div className="container mx-auto px-4 sm:px-2 md:px-12">
      <img
        alt="Placeholder"
        className="w-full object-cover py-8 sm:py-8 md:py-14"
        src="https://raw.githubusercontent.com/Riuqlav/calendar-dual/master/src/assets/imgs/WideLogo.png"
      />
      <div className="flex flex-wrap justify-center py-4 sm:py-8 md:py-14 overflow-hidden" ref={containerRef}>
      {ContentTable.map((post, i) => (
  <div
    key={post.id}
    className="m-1 sm:m-3 py-10 md:m-5 w-full flex flex-col md:flex-row items-center transform transition duration-500 ease-in-out hover:scale-103 overflow-hidden box-content"
    data-aos="ease-in"
    data-aos-duration="500"
    data-aos-delay="0"
  >
    <div
      className={`w-full md:w-2/5 image-${post.id} overflow-hidden box-content ${i % 2 === 0 ? "md:order-first" : "md:order-last"}`}
      data-aos="ease-in"
      data-aos-duration="500"
      data-aos-delay="0"
    >
      <img alt="Placeholder" className="w-full object-cover flex-shrink-0" src={post.img} />
    </div>
    <div
      className={`w-full md:w-3/5 content-${post.id} overflow-hidden box-content ${i % 2 === 0 ? "md:order-last" : "md:order-first"}`}
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{post.title}</div>
        <p className="text-grey-darker text-sm sm:text-base md:text-lg">{post.content}</p>
      </div>
    </div>
  </div>
))}
      </div>
    </div>
  );

};

export default Home;