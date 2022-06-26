import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SelectedLesson } from "../components/SelectedLesson";
import { Sidebar } from "../components/SideBar";
import { Video } from "../components/Video";


export function Event() {
  const { slug } = useParams<{ slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 lg:p-12 p-4 rounded overflow-hidden">
        {slug? <Video lessonSlug={slug}/> : <SelectedLesson/>}
        <Sidebar />
      </main>
    </div>
  );
}
