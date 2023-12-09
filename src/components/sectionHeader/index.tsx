import MonitorIcon from '@mui/icons-material/Monitor';
import AppsIcon from '@mui/icons-material/Apps';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { SectionStyled, IconImage, Title, SubTitle, CardSection } from './style';

export function Section() {
    return (
        <SectionStyled>
            <CardSection>
            <IconImage as={MonitorIcon} />
            <Title>Somente para desktop</Title>
            <SubTitle>Vamos aprender como utilizar um framework</SubTitle>
            </CardSection>

            <CardSection>
            <IconImage as={AppsIcon} />
            <Title>Criando um componente</Title>
            <SubTitle>Utilizando Styled Componentes</SubTitle>
            </CardSection>

            <CardSection>
            <IconImage as={CheckCircleOutlineIcon} />
            <Title>Fácil aproveitamento</Title>
            <SubTitle>Estamos no caminho</SubTitle>
            </CardSection>
        </SectionStyled>
    );
}
