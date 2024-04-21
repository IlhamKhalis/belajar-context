import Heading from "./heading";
import Section2 from "./section2";

export default function Post({ title, body }: { title: string, body: string }) {
    return (
        <div>
            {/* <p>Ilham Khalis Putra Agatha</p>
            <p><i>NIM : 2141720230</i></p> */}
            <Section2 isFancy={true}>
                <Heading>
                    {title}
                </Heading>
                <p><i>{body}</i></p>
            </Section2>
        </div>
    )
}