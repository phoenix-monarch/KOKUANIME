import { Children } from "react";

const For = ({ each, render }) => {
  return Children.toArray(each?.map((item, index) => render(item, index)));
};

export default For;
