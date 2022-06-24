import { LogoRocketseat } from "./LogoRocketSeat";

export function Footer() {
    return (
        <footer className="mx-6 mb-5 pt-6 flex items-center justify-between border-t border-gray-600">
            <div className="flex items-center gap-6">
                <LogoRocketseat />
                <span className="text-base text-gray-300">Rocketseat - Todos os direitos reservados</span>
            </div>

            <div>
                <a href="#" className="text-base text-gray-300">
                    Políticas de privacidade
                </a>
            </div>
        </footer>  
    )    
}