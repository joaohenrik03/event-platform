import { LogoRocket } from "./LogoRocket";

export function Footer() {
    return (
        <footer className="mx-6 pb-5 pt-6 flex items-center justify-between border-t border-gray-600 w-[calc(100%-3rem)] bg-black">
            <div className="flex items-center gap-6">
                <LogoRocket />
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