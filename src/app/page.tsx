'use client';

import MainPage from "@/components/templates/main_page";
import MyApp from "@/components/atoms/myapp"

export default function Home() {
    return(
      <>
        <MyApp Component={MainPage} pageProps={undefined} />
      </>
    )
}