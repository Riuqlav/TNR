import React, { useEffect, useMemo, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const ContentTable = useMemo(() => [
    { id: 1, title: "Artwork 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam varius diam vitae purus pulvinar, sed ultricies enim sagittis. Curabitur id semper ex. Vivamus a lacinia tellus. Quisque nec rutrum dui. Fusce accumsan eleifend purus, sit amet porttitor risus tristique sed.", img: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    { id: 2, title: "Artwork 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
    { id: 3, title: "Artwork 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://renaissancereframed.files.wordpress.com/2021/05/b6e5d-fireintheborgo.jpg" },
    { id: 4, title: "Artwork 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://blog.artsper.com/wp-content/uploads/2022/04/New-Featured-Image-1200-x-675-6.jpg" },
    { id: 5, title: "Artwork 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Integer posuere erat a ante.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Battle_of_the_Milvian_Bridge_by_Giulio_Romano%2C_1520-24.jpg/2880px-Battle_of_the_Milvian_Bridge_by_Giulio_Romano%2C_1520-24.jpg" },
    { id: 6, title: "Artwork 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" },
    { id: 7, title: "Artwork 7", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://images.unsplash.com/photo-1582561833407-b95380302a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80" },
    { id: 8, title: "Artwork 8", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://images.unsplash.com/photo-1551963423-0632e8a6977b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
    { id: 9, title: "Artwork 9", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", img: "https://images.unsplash.com/photo-1602422701241-7ba4f6fc1712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" },
  
  ], []);

  const containerRef = useRef(null);

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
              <img alt="Placeholder" className="w-full object-cover" src={post.img} />
            </div>
            <div className={i % 2 === 0 ? `w-full md:w-3/5 content-${post.id}` : `w-full md:w-3/5 md:order-first content-${post.id}`}>
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