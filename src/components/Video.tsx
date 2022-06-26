import { gql, useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  CircleNotch,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { Footer } from "./Footer";

const GET_LESSONS_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      id
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(
    GET_LESSONS_BY_SLUG_QUERY,
    {
      variables: { slug: props.lessonSlug },
    }
  );

  if (!data) {
    return (
      <div className="flex flex-1 bg-gray-700 justify-center items-center">
        <p className="text-2xl flex font-bold items-center">
          Carregando <CircleNotch className="animate-spin ml-4" />
        </p>
      </div>
    );
  }

  function Button() {
    return (
      <>
        <a
          href=""
          className="p-4 text-sm bg-red-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-red-700 transition-colors"
        >
          <DiscordLogo size={24} /> Discord Commnity
        </a>
        <a
          href=""
          className="p-4 text-sm border-red-500 border-2 text-red-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-red-700 hover:text-gray-700 transition-colors"
        >
          <Lightning size={24} /> Acess the challenge
        </a>
      </>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 bg-gray-700 mx-auto">
        <div className="lg:flex items-start gap-16 lg:flex-row flex-col">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
          </div>

          <div className="lg:flex flex-col gap-4 hidden">
            <Button />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <img
            className="h-16 w-16 rounded-full border-2 border-red-500"
            src={data.lesson.teacher.avatarURL}
            alt=""
          ></img>

          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">
              {data.lesson.teacher.name}
            </strong>
            <span className="text-gray-200 text-sm block">
              {data.lesson.teacher.bio}
            </span>
          </div>
        </div>

        <div className="lg:hidden flex-col gap-4 flex mt-4">
          <Button />
        </div>

        <div className="gap-8 mt-20 grid md:grid-cols-2 grid-cols-1">
          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href=""
          >
            <div className="bg-red-700 justify-center p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acess the material to boost you developement
              </p>
            </div>

            <div className="p-6 justify-center flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href=""
          >
            <div className="bg-red-700 justify-center p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Exclusive Wallpapers</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acess the material to boost you developement
              </p>
            </div>

            <div className="p-6 justify-center flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
