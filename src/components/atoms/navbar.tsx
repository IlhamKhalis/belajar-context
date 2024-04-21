import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/utilities/context/mycontext";
import { themes } from "@/utilities/themes/mythemes";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const newThemeName = theme === themes.dark? 'Light' : 'Dark';
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25,
            }}>
            <div>
                <Link href="/">Home </Link>
                <Link href="/about">About </Link>
                <Link href="/contacts">Contacts </Link>
                <Link href="/profile">Profile </Link>
                <button onClick={toggleTheme}>{newThemeName} Theme</button>
            </div>
        </div>
    );
}