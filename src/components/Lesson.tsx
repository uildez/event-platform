import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns"
import { Link, useParams } from "react-router-dom";
// import ptBR from "date-fns/locale/pt-BR"


interface LessonPros {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonPros) {
  const { slug } = useParams<{slug: string}>() 

  const isLessonAvailable = isPast(props.availableAt);
  const availableDataFormatted = format(props.availableAt, "EEEE ' • ' MMMM ', ' d ' • ' k'h'mm", 
  // {locale: ptBR,}
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDataFormatted}</span>

      <div className={`rounded border border-gray-500 p-4 mt-2  ${isLessonAvailable? 'group-hover:border-red-500':'cursor-default group-hover:border-gray-500'} ${isActiveLesson? 'bg-red-500 text-white' : ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson? 'text-white' : 'text-red-500'}`}>
              <CheckCircle size={28} />
              Content Released
            </span>
          ) : (
            <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson? 'text-white' : 'text-orange-500'}`}>
              <Lock size={28} />
              Soon
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white font-bold">
            {props.type === "live" ? "ON LIVE" : "PRATICE CLASS"}
          </span>
        </header>

        <strong className="text-gray mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
