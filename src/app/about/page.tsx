"use client"
import MyApp from "@/components/atoms/myapp"
import About from "@/components/templates/about_page"

export default function Home() {
    return(
    <>
        <MyApp Component={About} pageProps={undefined} />
    </>
    )
}