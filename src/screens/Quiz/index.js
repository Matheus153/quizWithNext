/* eslint-disable react/prop-types */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import Widget from '../../components/Widget';
import db from '../../../db.json'
 
import QuizBackground from '../../components/quizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import AlternativeMessage from '../../components/AlternativeMessage';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

<<<<<<< HEAD
import correctAnim from './animations/right.json';
import incorrectAnim from './animations/error.json';
import loadingAnimation from './animations/load.json';
import { ThemeConsumer } from 'styled-components';
=======
import correctAnim from './animations/correctAnim';
import incorrectAnim from './animations/incorrectAnim';
import loadingAnimation from './animations/Bts.json';
>>>>>>> 642b262f5f5f4e4399b93bd97e20e1656ba865b1

import Right from '../../assets/audio/right.mp3'
import Wrong from '../../assets/audio/wrong.mp3'

function ResultWidget({ results }) {

  const router = useRouter()
  const name = router.query.name 
  let score = results.filter((result) => result).length;

  return (
    <Widget as={motion.section}
    transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
    variants={{
      show: {opacity: 1, y:'0'},
      hidden: {opacity: 0, y:'50%'}
    }}
    initial="hidden"
    animate="show">
      <Widget.Header>
        <h4>Resultado:</h4>
      </Widget.Header>
<<<<<<< HEAD
          {score >= 8 && <img
=======
          {score >= 6 && <img
>>>>>>> 642b262f5f5f4e4399b93bd97e20e1656ba865b1
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={db.resultImage}
          /> }

<<<<<<< HEAD
          {score > 3 && score < 8 && <img
=======
          {score > 3 && score < 6 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={db.resultImage1st}
          /> }

          {score <=3 && <img
>>>>>>> 642b262f5f5f4e4399b93bd97e20e1656ba865b1
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={db.resultImage2st}
          /> }

        {score <=3 && <img
          alt="final"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
          src={db.resultImage3st}
          /> }
      <Widget.Content> 
         
        <h5 style= {{
          marginBottom: '25px',
          lineHeight: '1.1em',
          textAlign: 'center'
        }}>
<<<<<<< HEAD
          { score >= 8 && `Boa ${name}, você não só sobreviveria como daria um show nessa aventura, arranjando os melhores itens e desbravando os lugares mas desafiadores de todos! Parabéns!! :)`}
          { score > 3 && score < 8 && `Você está com um ferimento exposto, risco de gangrena. Você vai sobreviver? Não sabemos.`}
          {score <= 3 && `Opa!! Você acabou perdendo seus membros e foi morto por seu colega de equipe com uma forte dilaceração de orgão internos, morrendo em agonia intensa.`}
=======
          { score >= 6 && `Boa ${name}, você é um mestre quando o assunto é BTS, provou que realmente manja e realmente faz parte do fandom! Parabéns!! :)`}
          { score > 3 && score < 6 && `Eh... você conhece, mas não o suficiente para ser um Army. Sorte na próxima!`}
          {score <= 3 && score > 1 && `Ops!! Apenas ${score} acertos, tenho certeza que na próxima se sairá melhor! :)`}
          {score <=1 && `Essa foi péssima hein, mas na próxima você vai saber mais! Sorte!! :)`}
>>>>>>> 642b262f5f5f4e4399b93bd97e20e1656ba865b1
          
        </h5>
        
        {/* <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              # 
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? ' Mandou bem!'
                : ' Poxa, vacilou'}
            </li>
          ))}
        </ul> */}

        <Button type="button" onClick={() => router.push('/')}>
						Jogar novamente
				</Button>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h5>carregando...</h5>
      </Widget.Header>

      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const audioTrack = React.useRef();

  return (
    <Widget  as={motion.section}
      transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      variants={{
        show: {opacity: 1, y:'0'},
        hidden: {opacity: 0, y:'25%'}
      }}
      initial="hidden"
      animate="show">
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show">
        <h4>
          {question.title}
        </h4>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);

            if (audioTrack.current) {
              audioTrack.current.play();
            }

            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map(
            (alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect 
                ? 'SUCCESS' 
                : 'ERROR';
                
              const isSelected = selectedAlternative === alternativeIndex;
              return (
                <Widget.Topic
                  as={motion.label}
                  
                  key={alternativeId}
                  htmlFor={alternativeId}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && alternativeStatus}
                  transition={{
                    delay:0.5,
                    duration:0.4,
                  }}
                  variants={{
                    show: { opacity: 1},
                    hidden: { opacity: 0 },
                  }}
                >
                  <input
                    style={{ display: 'none' }}
                    id={alternativeId}
                    name={questionId}
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                    type="radio"
                    checked={selectedAlternative === alternativeIndex}
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}

          <audio
            ref={audioTrack}
            src={isCorrect ? Right : Wrong}
            preload="auto"
          />

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          {!isQuestionSubmited &&
            <Button 
              type="submit" 
              disabled={!hasAlternativeSelected}
              as={motion.button}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.05}
              }}
              whileTap={{ scale: 0.95 }}
            >
              Confirmar
            </Button>
          }

<<<<<<< HEAD
          {isQuestionSubmited && isCorrect && <AlternativeMessage><Lottie config={{ animationData: correctAnim, loop: false, autoplay: true }} height={70} width={70} margin-top="20px"/></AlternativeMessage>}
          {isQuestionSubmited && !isCorrect && <AlternativeMessage><Lottie config={{ animationData: incorrectAnim, loop: false, autoplay: true }} height={50} width={50} margin-top="20px"/>
=======
          {isQuestionSubmited && isCorrect && <AlternativeMessage><Lottie config={{ animationData: correctAnim, loop: false, autoplay: true }} height={100} width={100} margin-top="10px"/></AlternativeMessage>}
          {isQuestionSubmited && !isCorrect && <AlternativeMessage><Lottie config={{ animationData: incorrectAnim, loop: false, autoplay: true }} height={100} width={100} margin-top="10px"/>
>>>>>>> 642b262f5f5f4e4399b93bd97e20e1656ba865b1
          <p as={motion.p}  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}>{question.correct}</p></AlternativeMessage>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <img src={db.theme.quizlogo2} width="100px" margin="auto" />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
