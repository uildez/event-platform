import { Lesson } from "./Lesson";

import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      slug
      title
      availableAt
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export function Nav() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  return (
    <>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Class Schedule
      </span>
      <div className="flex flex-col xl:gap-8 gap-2">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 xl:block hidden">
      <Nav />
    </aside>
  );
}
