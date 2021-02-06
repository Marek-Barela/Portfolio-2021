import React, { FC } from "react";
import styles from "./ImageContainer.module.css";

const { container, img } = styles;

interface Image {
  image: string;
}

const ImageContainer: FC<Image> = ({ image }) => {
  return (
    <div className={container}>
      <img className={img} src={image} alt="Project" />
    </div>
  );
};

export default ImageContainer;
