import { CaretRight, CheckCircle, Lock } from "phosphor-react";
import { Footer } from "./Footer";

export const SelectedLesson = () => {
  return (
    <div className="flex flex-1 bg-gray-700 items-center justify-center flex-col">
      <h1 className="text-2xl items-center mx-20 mb-8 hidden lg:flex">
        Select one of the lessons in the side tab{" "}
        <CaretRight weight="bold" className="animate-pulse" />
      </h1>
      <h1 className="text-2xl items-center mx-20 mb-8 block lg:hidden">
        Select one of the lessons in top menu
      </h1>
    </div>
  );
};
