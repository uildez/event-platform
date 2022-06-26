import { Link } from "react-router-dom";
import { Icon } from "./Logo";

export function Footer() {
  return (
    <footer className="flex w-full lg:px-12 p-8 py-6 items-center justify-between text-gray-300 bg-gray-700 border-b border-gray-600">
      <div className="flex items-center">
        <div className="w-8">
          <Icon />
        </div>
        <p className="ml-4">UIL.DEV • All rights reserved</p>
      </div>
      <Link to={"github.com/uildez"}>
        <p className="hover:text-gray-200 transition-colors">Privacy policies</p>
      </Link>
    </footer>
  );
}
