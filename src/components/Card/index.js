import Link from "next/link";
import PropTypes from "prop-types";
import { memo } from "react";
import { RenderIfTrue, RenderIfFalse } from "../../utils";

const Card = ({ path, children }) => (
  <div className="bg-cover bg-center h-full bg-no-repeat selection:bg-violet-500 rounded overflow-hidden bg-slate-700">
    <div className="min-w-full h-full py-4">
      <RenderIfTrue isTrue={path}>
        <Link href={path}>
          <div className="cursor-pointer group px-3 relative min-h-full">
            {children}
          </div>
        </Link>
      </RenderIfTrue>
      <RenderIfFalse isFalse={path}>
        <div className="group px-3 relative min-h-full">{children}</div>
      </RenderIfFalse>
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bgimage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  shadowColor: PropTypes.string,
};

export default memo(Card);
