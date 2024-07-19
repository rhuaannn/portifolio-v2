import { Container,SkillContainer } from "./style";
import MonitorImg from "../../assets/monitor-code.png";
import ReactImg from "../../assets/atom.png";
import NodeImg from "../../assets/Group.png";


export function Project() {
  return (
    <Container>
      <section>
        <h1>Meus diferenciais:</h1>
        <span>Transformo design em páginas para a web com agilidade, qualidade e ALTA PERFOMACE
        </span>
      </section>
      <SkillContainer>
        <section>
        <div>
         <img src={MonitorImg} alt="" />
          <h2>Styled Components</h2>
        </div>
        <div>
         <img src={ReactImg} alt="" />
          <h2>ReactJs</h2>
        </div>
        <div>
         <img src={NodeImg} alt="" />
          <h2>NodeJs</h2>
        </div>
        <div>
         <img src={NodeImg} alt="" />
          <h2>SQL</h2>
        </div>
        </section>
      </SkillContainer>
    </Container>
  );
}
