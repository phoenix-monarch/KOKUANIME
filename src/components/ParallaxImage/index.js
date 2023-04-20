import { memo } from "react";

const ParallaxImage = ({ image, alt }) => (
  <div className="flex justify-center">
    <img
      src={image}
      alt={alt}
      className="rounded shadow shadow-slate-800 w-[100%]"
    />
  </div>
);

export default memo(ParallaxImage);
