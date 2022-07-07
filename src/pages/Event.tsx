import { Header } from "../components/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { SideBar } from "../components/SideBar";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { StartJourney } from "../components/StartJourney";
import { useState } from "react";

type Params = {
    slug: string;
}

export function Event() {
    const { slug } = useParams<Params>() 

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenModal() {
        setModalIsOpen(true)
    }

    function handleCloseModal() {
        setModalIsOpen(false)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header 
                openModal={handleOpenModal}
                closeModal={handleCloseModal}
                modalIsOpen={modalIsOpen}
            />
            <main className="flex flex-1">
                {slug ? <VideoPlayer lessonSlug={slug} modalIsOpen={modalIsOpen}/> : <StartJourney modalIsOpen={modalIsOpen} />}
                <SideBar 
                    modalIsOpen={modalIsOpen}
                    closeModal={handleCloseModal}
                />          
            </main>
        </div>
    )
}