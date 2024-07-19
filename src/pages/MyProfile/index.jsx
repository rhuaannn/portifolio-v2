import { Container, Image } from "./style";
import { Header } from "../../components/Header/index";
import {Project} from "../../components/Project/index";
import img from "../../assets/Screenshot_1.png";


export function MyProfile() {
  return (
    <>
      <Header />
      <Container>
        <h3>
          Rhuan Marques, 29 anos, é um profissional formado em Sistemas de
          Informação. Com uma carreira diversificada, ele possui experiência
          tanto no suporte técnico quanto no desenvolvimento front-end. Sua
          jornada profissional começou com suporte técnico, onde desenvolveu
          habilidades sólidas na resolução de problemas e atendimento ao
          cliente. Posteriormente, Rhuan se especializou em desenvolvimento
          front-end, aplicando seu conhecimento em criar interfaces de usuário
          atraentes e funcionais. Seu conjunto de habilidades inclui uma forte
          compreensão das necessidades dos usuários finais, bem como a
          capacidade de traduzir essas necessidades em soluções técnicas
          eficazes.
        </h3>
        <div>
        <Image>

        <img src={img} alt="" />
        </Image>

        </div>
      </Container>
        <Project/>
    </>
  );
}
