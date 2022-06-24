import { Header } from "../components/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { SideBar } from "../components/SideBar";
import { useParams } from "react-router-dom";

type Params = {
    slug: string;
}

export function Event() {
    const { slug } = useParams<Params>() 

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? <VideoPlayer lessonSlug={slug}/> : <div className="flex-1"></div>}
                <SideBar />
            </main>
        </div>
    )
}