// Hooks
import { useState } from "react";

//Components
import styles from "./HomepageTemplate.module.css";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../basics/button/Button";
import Availability from "../../basics/availability/Availability";
import TechStackList from "../../cards/techstack/TechStackList";
import Profile from "../../cards/profile/Profile";
import ProjectsList from "../../cards/projects/ProjectsList";
import Footer from "../../components/footer/Footer";
import FormModal from "../../modal/FormModal";

//Images & Plugins
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Intro from "/png/intro.png";
import Signup from "/png/signup.png";
import Overview from "/png/overview.png";
import Detail from "/png/detail.png";
import Checkout from "/png/checkout.png";

export default function HomepageTemplate() {
  const [isOpen, setIsOpen] = useState(false);
  const btnStyle = {
    width: "286px",
    height: "70px",
  };

  const sliderSettingsLeft = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 5000,
  };

  const sliderSettingsRight = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: -1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 5000,
  };

  return (
    <>
      {isOpen && <FormModal setIsOpen={setIsOpen} />}
      <div className={styles.homepage}>
        <header>
          <Navbar setIsOpen={setIsOpen} />
        </header>
        <section className={styles.hero__container}>
          <h1 className={styles.hero__title}>Full Stack Developer</h1>
          <h2 className={styles.hero__subtitle}>
            Crafting Innovative Solutions Across the Full Technology Stack for
            web and mobile applications
          </h2>
          <div className={styles.hero__btn__availability}>
            <Button style={btnStyle} setIsOpen={setIsOpen}>
              Get in touch
            </Button>
            <Availability />
          </div>
        </section>
        <section id="full__stack" className={styles.tech__stack__container}>
          <h2 className={styles.tech__stack}>Tech Stack</h2>
          <p className={styles.tech__stack__text}>
            My technology stack is a versatile blend of front-end and back-end
            technologies, meticulously chosen to build efficient, scalable and
            responsive applications.
          </p>
          <TechStackList />
        </section>
        <section className={styles.announcement__container}>
          <div className={styles.announcement__images__left}>
            <Slider {...sliderSettingsLeft}>
              <div className={styles["announcement--image"]}>
                <img src={Intro} alt="intro" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Signup} alt="signup" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Overview} alt="overview" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Detail} alt="detail" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Checkout} alt="checkout" loading="lazy" />
              </div>
            </Slider>
          </div>
          <h2 className={styles.announcement__title}>
            From Design to Deployment
          </h2>
          <p className={styles.announcement__text}>
            Expertly navigating the journey from initial design to final
            deployment, I deliver comprehensive software solutions that
            encapsulate the essence of both form and function.
          </p>
          <div className={styles.announcement__images__right}>
            <Slider {...sliderSettingsRight}>
              <div className={styles["announcement--image"]}>
                <img src={Checkout} alt="checkout" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Detail} alt="detail" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Overview} alt="overview" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Signup} alt="signup" loading="lazy" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Intro} alt="intro" loading="lazy" />
              </div>
            </Slider>
          </div>
        </section>
        <section id="about">
          <Profile />
        </section>
        <section id="projects">
          <ProjectsList setIsOpen={setIsOpen} />
        </section>
        <footer>
          <Footer setIsOpen={setIsOpen} />
        </footer>
      </div>
    </>
  );
}
