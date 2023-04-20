import Link from "next/link";
import { memo } from "react";
import { RenderIfFalse, RenderIfTrue } from "../../utils";

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

export default memo(Card);
