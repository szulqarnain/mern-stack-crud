//Images
import ropstampIcon from "../../../images/fav.png";

//Style
import "./Image.css";

const Image = (props) => {
  const { src, alt, className, title } = props;
  return (
    <img
      className={className}
      src={
        src
          ? typeof src === "string" && src.includes("http")
            ? src
            : require(`../../../images/${src}`)
          : ropstampIcon
      }
      alt={alt}
      title={title}
    />
  );
};

Image.defaultProps = {
  alt: "icon",
  title: "image",
  className: "icon",
};

export default Image;
