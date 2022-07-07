import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

type SideBarProps = {
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function SideBar(props: SideBarProps) {
    const { data } = useGetLessonsQuery();

    return (
        <aside className={`w-full lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 ${props.modalIsOpen ? '' : 'hidden'} lg:block`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                            closeModal={props.closeModal}
                        />
                    )
                })}
            </div>
        </aside>
    )
}

//w-[348px] bg-gray-700 p-6 border-l border-gray-600 hidden