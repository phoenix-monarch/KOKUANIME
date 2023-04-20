import { memo } from "react";

const CardImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} width="100%" height="100%" className={className} />
);
export default memo(CardImage);
