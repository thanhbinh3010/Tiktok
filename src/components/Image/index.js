import { useState, forwardRef } from "react";
import images from "../../assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss";
const Image = forwardRef(
  ({ src, alt, fallback = images.noImage, className, ...props }, ref) => {
    const [_fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(images.noImage);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        src={_fallback || src}
        ref={ref}
        {...props}
        alt={alt}
        onError={handleError}
      />
    );
  }
);

export default Image;
