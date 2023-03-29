import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillsCard.js";

import react from "../assets/logo/react.svg";
import next from "../assets/logo/next-js.svg";
import redux from "../assets/logo/redux.svg";
import laravel from "../assets/logo/laravel.svg";
import wordpress from "../assets/logo/wordpress.svg";
import bootstrap from "../assets/logo/bootstrap.svg";
import gitlab from "../assets/logo/gitlab.svg";
import github from "../assets/logo/github.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="py-8 text-slate-700">
      <h1 className="text-2xl text-white font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="React Js" experience="2 years" img={react} />
          <SkillCard name="Next Js" experience="1 years" img={next} />
          <SkillCard name="Redux" experience="1 years" img={redux} />
          <SkillCard name="Laravel" experience="1 years" img={laravel} />
          <SkillCard name="Wordpress" experience="1 years" img={wordpress} />
          <SkillCard name="Bootstrap" experience="2 years" img={bootstrap} />
          <SkillCard name="gitlab" experience="2 years" img={gitlab} />
          <SkillCard name="github" experience="2 years" img={github} />
        </Slider>
      </div>
    </div>
  );
}
