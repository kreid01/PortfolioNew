import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {" "}
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="hover:text-slate-700"
        color="rgb(71 85 105)"
        size="2x"
      />
    </div>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {" "}
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="hover:text-slate-700"
        color="rgb(71 85 105)"
        size="2x"
      />
    </div>
  );
}

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};
