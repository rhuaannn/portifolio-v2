import {
  ContainerProfile,
  Description,
  Title,
  ImageProfile,
  Tecnologia,
} from "./style";
import img from "../../assets/Screenshot_1.png";
import { DiAtom } from "react-icons/di";

export function Profile() {
  const name = "Hi I'm Rhuan Marques";
  const descriptionName = "Especialista em Desenvolvimento Web";

  return (
    <>
      <ContainerProfile>
        <Description>
          <Title>
            <p>{name}</p>
          </Title>
          <p>{descriptionName}</p>
          <span>
            Trabalhei em diversos projetos front-end, desde pequenos websites
            até grandes aplicações web. Essa experiência prática me permitiu
            desenvolver habilidades que me ajudam a criar soluções eficientes e
            eficazes.
          </span>
        </Description>
        <ImageProfile>
          <img src={img} alt="" />
        </ImageProfile>
      </ContainerProfile>
      <Tecnologia>
        <div>
          <button>Front-end</button>
          <button> <DiAtom />  Desenvolvimento</button>
          <button>Framework</button>
          <button>Back-end</button>
          <button><DiAtom /> Code</button>
        </div>
      </Tecnologia>
    </>
  );
}
