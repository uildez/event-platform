import { WarningCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-6">
      <WarningCircle size={80} weight="bold" />
      <p className="text-2xl font-bold">Page not found | Error 404</p>
      <Link
        to={"/event"}
        className="p-4 text-sm bg-red-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-red-700 transition-colors"
      >
        Go back
      </Link>
    </div>
  );
};
