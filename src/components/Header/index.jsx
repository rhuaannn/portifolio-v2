import Typewriter from "typewriter-effect";
import { Container, HeaderContainer, LinksHeader } from "./style";


export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <div>
          <Typewriter
            options={{
              strings: ["Rhuan Marques", "Desenvolvedor - FullStack"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <LinksHeader>
          <ul>
            <li>Quem sou </li>
            <li>Cases</li>
            <li>Contato</li>
          </ul>
        </LinksHeader>
      </HeaderContainer>
    </Container>
  );
}
