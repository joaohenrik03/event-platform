import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-3/5 flex flex-col items-center">
                <h1 className="text-blue-500 font-bold text-9xl">
                    404...
                </h1>
                <p className="text-gray-200 w-2/4 mb-8 text-center">
                    Acho que você chegou ao limite do universo. A página que você requisitou não foi encontrada.
                </p>
                <Link to="/event" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                    Voltar ao inicio
                </Link>
            </div>
        </div>
    )
}