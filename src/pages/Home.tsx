import { Header } from "../components/reader";
import { Main } from "../components/main/Index";
import { Section } from "../components/sectionHeader";
import { Footer } from "../components/footer/Index";
import { SectionFooter } from "../components/sectionFooter/Index";


export function Home(){
    return(
        <>
            <Header />
            <Section />
            <Main />
            <SectionFooter />
            <Footer />
        </>
    )
}