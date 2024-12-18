import { FaLongArrowAltRight } from "react-icons/fa";


export const HeroSection = () => {
  return (
    <>
      <main className="hero-sectioin main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the world,One Country at a time.
            </h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              pariatur cumque cum, tenetur asperiores libero illum
              necessitatibus
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />{" "}
            </button>
          </div>
          <div className="hero-image">
            <img
              className="banner-image"
              src="/images/world.png"
              alt="World Photo"
            />
          </div>
        </div>
      </main>
    </>
  );
};
