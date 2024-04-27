import { useState } from "react";

import styles from "./HomepageTemplate.module.css";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../basics/button/Button";
import Availability from "../../basics/availability/Availability";
import TechStackList from "../../cards/techstack/TechStackList";
import Profile from "../../cards/profile/Profile";
import ProjectsList from "../../cards/projects/ProjectsList";
import Footer from "../../components/footer/Footer";
import FormModal from "../../modal/FormModal";
import { translations } from "../../translations/en-GB/en-GB";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Intro from "/png/intro.png";
import Signup from "/png/signup.png";
import Overview from "/png/overview.png";
import Detail from "/png/detail.png";
import Checkout from "/png/checkout.png";

type HomepageTemplateState = {
  isOpen: boolean;
};

const HomepageTemplate: React.FC = () => {
  const [isOpen, setIsOpen] = useState<HomepageTemplateState["isOpen"]>(false);
  const btnStyle = {
    width: "286px",
    height: "70px",
  };

  const sliderSettingsLeft: Settings = {
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

  const sliderSettingsRight: Settings = {
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
          <h1 className={styles.hero__title}>{translations.hero.title}</h1>
          <h2 className={styles.hero__subtitle}>
            {translations.hero.subtitle}
          </h2>
          <div className={styles.hero__btn__availability}>
            <Button style={btnStyle} setIsOpen={setIsOpen}>
              {translations.hero.btn}
            </Button>
            <Availability />
          </div>
        </section>
        <section id="full__stack" className={styles.tech__stack__container}>
          <h2 className={styles.tech__stack}>{translations.techStack.title}</h2>
          <p className={styles.tech__stack__text}>
            {translations.techStack.subtitle}
          </p>
          <TechStackList />
        </section>
        <section className={styles.announcement__container}>
          <div className={styles.announcement__images__left}>
            <Slider {...sliderSettingsLeft}>
              <div className={styles["announcement--image"]}>
                <img src={Intro} alt="intro" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Signup} alt="signup" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Overview} alt="overview" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Detail} alt="detail" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Checkout} alt="checkout" />
              </div>
            </Slider>
          </div>
          <h2 className={styles.announcement__title}>
            {translations.announcement.title}
          </h2>
          <p className={styles.announcement__text}>
            {translations.announcement.subtitle}
          </p>
          <div className={styles.announcement__images__right}>
            <Slider {...sliderSettingsRight}>
              <div className={styles["announcement--image"]}>
                <img src={Checkout} alt="checkout" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Detail} alt="detail" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Overview} alt="overview" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Signup} alt="signup" />
              </div>
              <div className={styles["announcement--image"]}>
                <img src={Intro} alt="intro" />
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
};

export default HomepageTemplate;
