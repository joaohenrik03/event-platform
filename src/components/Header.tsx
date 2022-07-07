import { Logo } from "./Logo";
import { HamburgerSvg } from './HamburgerSvg';
import { CloseSvg } from './CloseSvg';

type openModalProps = {
    openModal: () => void;
    closeModal: () => void;
    modalIsOpen: boolean;
}

export function Header({ openModal, closeModal, modalIsOpen }: openModalProps) {
    return (
        <header className="w-full bg-gray-700 border-b border-gray-600 py-5 flex justify-between items-center px-6 lg:justify-center">
            <i className="max-w-[170px] sm:max-w-[237px]"><Logo /></i>

            <i className="lg:hidden" onClick={modalIsOpen ? closeModal : openModal}>{modalIsOpen ? <CloseSvg /> : <HamburgerSvg />}</i>
        </header>      
    )
}

//