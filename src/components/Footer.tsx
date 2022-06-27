import { LogoRocket } from "./LogoRocket";

export function Footer() {
    return (
        <footer className="mx-2 md:mx-6 pb-5 pt-6 flex items-center justify-between border-t border-gray-600 w-[calc(100%-1rem)] md:w-[calc(100%-3rem)] bg-black">
            <div className="flex flex-col md:flex-row items-left gap-2 md:gap-6">
                <LogoRocket />
                <span className="text-xs md:text-base text-gray-300">Rocketseat - Todos os direitos reservados</span>
            </div>

            <div>
                <a href="#" className="text-xs md:text-base text-gray-300">
                    Políticas de privacidade
                </a>
            </div>
        </footer>  
    )    
}