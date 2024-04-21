"use client"
import MyApp from "@/components/atoms/myapp"
import Contacts from "@/components/templates/contacts_page"

export default function Home() {
    return(
    <>
        <MyApp Component={Contacts} pageProps={undefined} />
    </>
    )
}