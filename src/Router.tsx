import { Route, Routes } from "react-router-dom";
import { Page404 } from "./components/Page404";
import { Acess } from "./pages/Acess";
import { Event } from "./pages/Event";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Acess/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/event/lesson/:slug" element={<Event/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}
