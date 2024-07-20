import { Header } from "../../components/Header/index";
import { Card, Title, Followers, Container,Tecnologia } from "./style";
import { DiAtom } from "react-icons/di";
import { useEffect, useState } from "react";
import axios from "axios";

export const GitHubCard = () => {
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState(0);
  const username = 'rhuaannn'; 

  useEffect(() => {
    const fetchReposAndFollowers = async () => {
      try {
        const [reposResponse, userResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}/repos`),
          axios.get(`https://api.github.com/users/${username}`)
        ]);

        setRepos(reposResponse.data.slice(0, 10));
        setFollowers(userResponse.data.followers);
      } catch (error) {
        console.error('Erro ao buscar os dados do GitHub:', error);
      }
    };

    fetchReposAndFollowers();
  }, [username]);

  return (
    <>
      <Header />
      <Container>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <Card key={repo.id}>
            <Title>{repo.name}</Title>
            <Followers>Seguidores: {followers}</Followers>
          </Card>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
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
};
