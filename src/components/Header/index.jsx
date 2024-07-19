import Typewriter from "typewriter-effect";
import { Container, HeaderContainer, LinksHeader, StyledLink } from "./style";

export function Header() {
  
  return (
    <Container>
      <HeaderContainer>
        <div>
        <StyledLink to="/">
          <Typewriter
            options={{
              strings: ["Rhuan Marques", "Desenvolvedor - FullStack"],
              autoStart: true,
              loop: true,
            }}
          />
          </StyledLink>
        </div>
        <LinksHeader>
          <ul>
            <li><StyledLink to="/profile">Quem sou</StyledLink></li>
            <li><StyledLink to="/">Home</StyledLink></li>
            <li>
              <StyledLink to="/case">Projetos</StyledLink>
            </li>
          </ul>
        </LinksHeader>
      </HeaderContainer>
    </Container>
  );
}
