import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconImage, Icons, SectionFooter, DivText, Container, SectionFooterInfo } from './style';


export function Footer() {
    return (
        <>
            <Container>
                <SectionFooterInfo>
                    <DivText href="#" target='/' rel="noopener noreferrer">dieritos autorais</DivText>
                    <DivText href="#" target='/' rel="noopener noreferrer">Sobre mim</DivText>
                </SectionFooterInfo>
                <SectionFooter>
                    <Icons>
                        <IconImage as={FacebookIcon} />
                        <IconImage as={TwitterIcon} />
                        <IconImage as={InstagramIcon} />
                    </Icons>
                </SectionFooter>
            </Container>
        </>
    )
}