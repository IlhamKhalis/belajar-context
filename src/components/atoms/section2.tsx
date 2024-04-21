import { LevelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";

export default function Section2({ children, isFancy }: { children: any, isFancy: boolean }) {
    const level = useContext(LevelContext);
    return (
        <section className={
            'section ' +
            (isFancy ? 'fancy ' : '')
        }>
            <LevelContext.Provider value={ level + 1 }>
                {children}
            </LevelContext.Provider>
        </section>
    )
}