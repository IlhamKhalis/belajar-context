import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function About() {
    return (
        <Section2 isFancy={true}>
            <Heading>Halaman Tentang Saya</Heading>
            <Post title="Saya Ilham!" body="Halo" />
            <AllPosts />
        </Section2>
    );
}