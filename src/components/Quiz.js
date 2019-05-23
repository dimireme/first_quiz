import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Button from '../components/Button';
import Head from '../components/Head';

const Quiz = ({ goBack, goNext, setQuestionId, ...props }) => {

    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div key={props.questionId}>
                <Head>
                    <QuestionCount counter={props.questionId} total={props.questionTotal}/>
                    <ul className="question-ul">
                        {props.quizQuestions.map((_, i) => (
                            <li className={i+1 === props.questionId ? 'active' : ''} onClick={() => setQuestionId(i+1)}>{i+1}</li>
                        ))}
                    </ul>
                    <Question content={props.question}/>
                </Head>
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
                <Button text="Back" className="button_back" onClick={goBack}/>
                <Button text="Next" className="button_next" onClick={goNext}/>
            </div>
        </CSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goNext: PropTypes.func.isRequired,
    setQuestionId: PropTypes.func.isRequired,
    quizQuestions: PropTypes.array,
};

export default Quiz;
