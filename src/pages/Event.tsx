import { Header } from "../components/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { SideBar } from "../components/SideBar";

export function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <VideoPlayer />
                <SideBar />
            </main>
        </div>
    )
}