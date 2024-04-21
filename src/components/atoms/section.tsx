import { LevelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";

export default function Section({ children }: { children: any }) {
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value= {level + 1} >
                {children}
            </LevelContext.Provider>
        </section>
    );
}