import { Link } from "react-router-dom";
import DiscordLogo from "../assets/imgs/DiscordLogo.png";
import OpenseaLogo from "../assets/imgs/OpenseaLogo.png";
import SpatialLogo from "../assets/imgs/SpatialLogo.png";
import TwitterLogo from "../assets/imgs/TwitterLogo.png";

function Community() {
  const ContentTable = [
    {
      logo: DiscordLogo,
      link: "https://discord.gg/WKd3d2BT",
      alt: "Join us on Discord",
      description:
        "Join our Discord server to engage in daily discussions with our community.",
    },
    {
      logo: SpatialLogo,
      link: "https://www.spatial.io/s/Landz-Museum-333-63891ea7d5dd1c0001aad9d1",
      alt: "Visit our Spatial Exposition",
      description: "Immerse yourself in our 3D art museum on Spatial.",
      isSmaller: true,
    },
    {
      logo: OpenseaLogo,
      link: "https://opensea.io/collection/a-glitch-in-the-origin-story",
      alt: "Visit our collection on Opensea",
      description: "Explore and purchase our unique NFTs on Opensea.",
    },
    {
      logo: TwitterLogo,
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fthe_newroyals",
      alt: "Follow us on Twitter",
      description: "Stay updated with our latest news and updates on Twitter.",
      isSmaller: true,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center mt-6">
        Welcome to our Community
      </h1>
      <p className="text-center mb-10 px-4 md:px-0">
        Join us on our various platforms to stay updated and engage with fellow
        art enthusiasts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center ">
        {ContentTable.map(
          ({ logo, link, alt, description, isSmaller }, index) => (
            <Link
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div key={index} className="relative group mt-6 p-4">
                <a href={link} target="_blank" rel="noreferrer">
                  <img
                    src={logo}
                    alt={alt}
                    className={`w-36 h-36 md:w-44 md:h-44 object-contain transform group-hover:scale-110 transition-transform duration-200 ${
                      isSmaller ? "md:w-28 md:mx-8" : ""
                    }`}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-800 bg-black bg-opacity-30 px-2 text-white text-sm">
                  <p>{description}</p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Community;
