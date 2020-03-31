import React from "react";
import axios from "axios";
import { GoStar, GoRepoForked } from "react-icons/go";

import {
  Header,
  Label,
  Box,
  Input,
  Container,
  Content,
  Button,
  Card,
  CardTitle,
  CardDescription,
  CardDetails,
  CardRightSide,
  CardLeftSide,
  ShowLabelResult
} from "./styles";

export default class Home extends React.Component {
  REPO_URL = "https://api.github.com/search/repositories?q=";
  state = {
    search: "",
    loading: true,
    repositories: []
  };

  handleEnter = event => {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = () => {
    const { search } = this.state;

    this.setState({ loading: true });

    this.getUrl(`${this.REPO_URL}${search}`).then(repositories => {
      this.setState({ loading: false });
      this.setState({ repositories: repositories.data.items });
    });
  };

  getUrl(url) {
    return new Promise(resolve => {
      axios.get(url).then(repositories => {
        this.setState({ loading: false });
        resolve(repositories);
      });
    });
  }

  componentDidMount() {
    this.getUrl(`${this.REPO_URL}react`).then(repositories => {
      this.setState({ repositories: repositories.data.items });
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Label>Repositórios </Label>
        </Header>
        <Content>
          <Box mb={30}>
            <Input
              placeholder="Pesquisar..."
              onChange={this.handleChange}
              onKeyDown={this.handleEnter}
            />
            <Button onClick={this.handleSubmit}>Pesquisar</Button>
          </Box>

          {this.state.loading ? (
            <Box>
              <Card>
                <CardLeftSide>
                  <CardTitle>Buscando...</CardTitle>
                </CardLeftSide>
              </Card>
            </Box>
          ) : (
            ""
          )}

          {!this.state.loading ? (
            <ShowLabelResult>
              Exibindo <b>10</b> primeiros resultados
            </ShowLabelResult>
          ) : (
            ""
          )}

          {!this.state.loading &&
            this.state.repositories.slice(0, 10).map(repository => {
              return (
                <Box key={repository.id}>
                  <Card>
                    <CardLeftSide>
                      <CardTitle target="_blank" href={repository.html_url}>
                        {repository.full_name}
                      </CardTitle>
                      <CardDescription>
                        {repository.description}
                      </CardDescription>
                    </CardLeftSide>
                    <CardRightSide>
                      <CardDetails>
                        <GoStar /> {repository.stargazers_count}
                      </CardDetails>
                      <CardDetails>
                        <GoRepoForked /> {repository.forks}
                      </CardDetails>
                    </CardRightSide>
                  </Card>
                </Box>
              );
            })}
        </Content>
      </Container>
    );
  }
}
