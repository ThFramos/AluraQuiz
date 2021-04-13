import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Quizlogo from '../src/components/QuizLogo/index';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>
            Quiz-Alura
          </title>
        </Head>
        <Quizlogo />
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit="">
              <input placeholder="Digite o seu nome " />
              <button type="submit">
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Título</h1>
          </Widget.Header>
          <Widget.Content>
            <h2>Descrição</h2>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thframos" />
    </QuizBackground>
  );
}
