import { memo } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import CardImage from "../CardImage";
import CardLink from "../CardLink";
import { RenderIfTrue } from "../../utils";

const MainCard = ({ image, title, path, px, py, fontsize, centerText }) => (
  <Card path={path}>
    <CardImage src={image} alt={title ? title : "Gambar"} className="rounded" />
    <RenderIfTrue isTrue={title}>
      <CardLink py={py} px={px} fontsize={fontsize} centerText={centerText}>
        {title}
      </CardLink>
    </RenderIfTrue>
  </Card>
);

export default memo(MainCard);
