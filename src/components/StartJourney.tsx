import { Footer } from "./Footer";
import { Logo } from "./Logo";

export function StartJourney() {
    return (
        <div className="flex-1 relative">
            <div className="flex flex-col items-center justify-center gap-8 h-[60vh] w-full max-w-[1100px]">
                <div className="flex flex-col items-center gap-4">
                    <span className="font-bold text-xl text-gray-50">
                        Bem vindo ao
                    </span>
                    <Logo />
                </div>
                <div className="text-center px-10">
                    <strong className="text-blue-500 text-2xl mb-2 block">
                        Selecione uma aula e inicie sua jornada rumo a especialização em React.
                    </strong>
                    <p className="text-base text-gray-200">
                        Desenvolva uma aplicação do zero em uma semana, usando as tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado, bora codar? &#x1F680;
                    </p>
                </div>
            </div>

            <footer className="absolute bottom-0 w-full">
                <Footer />
            </footer>
        </div>
    )
}