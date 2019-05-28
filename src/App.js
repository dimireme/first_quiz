import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import QuizCheckbox from './components/QuizCheckbox';

import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: '',

        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        const shuffledAnswerOptions = quizQuestions.map(question =>
            this.shuffleArray(question.answers)
        );
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    handleSetQuestionId = (id) => {
        console.log('ID: ', id);
        this.setState({
            questionId: id,
        })
    };



    shuffleArray(array) {
     /*   var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
*/


        return array;
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        /*
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }


         */
    }

    setUserAnswer = (answer) => {

        //console.log(this.state.questionId);

        const { questionId } = this.state;

        console.log('asd: ', answer);
        this.setState((state, props) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer,

            answers: {
                    ...this.state.answers,
                    [questionId]: answer,
                },

        }));


    }


    setQuestion = (qId) => {

        const counter = qId - 1;
        const questionId = qId;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });

    }


    setNextQuestion = () => {

        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;


        if (this.state.questionId >= quizQuestions.length) {

            setTimeout(() => this.setResults(this.getResults()), 300);
            console.log (this.state);

        } else {

            this.setState({
                counter: counter,
                questionId: questionId,
                question: quizQuestions[counter].question,
                answerOptions: quizQuestions[counter].answers,
                answer: ''
            });

        }
    };



    setPrevQuestion = () => {

        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    };

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'Undetermined' });
        }
    }



    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;




        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));




        handleCheckboxChange(label);
    }




    render() {

        // Закостылим опросник для чекбокса, потом вытащим его в отдельный рендер

        if (quizQuestions[this.state.counter].type == "Checkbox") {

            return (
                <div className="App">

                    {this.state.result
                        ? <Result quizResult={this.state.result} />
                        : (
                            <QuizCheckbox
                                answer={this.state.answer}
                                answerOptions={this.state.answerOptions}
                                questionId={this.state.questionId}
                                question={this.state.question}
                                questionTotal={quizQuestions.length}
                                onAnswerSelected={this.handleAnswerSelected}
                                goBack={this.setPrevQuestion}
                                goNext={this.setNextQuestion}
                                setQuestionId={this.handleSetQuestionId}
                                quizQuestions={quizQuestions}
                                setQuestion={this.setQuestion}
                                setQuestion={this.setQuestion}
                                toggleCheckboxChange={this.toggleCheckboxChange}

                            />
                        )
                    }
                </div>
            );


        } else {

            return (

                <div className="App">

                    {this.state.result
                        ? <Result quizResult={this.state.result} />
                        : (
                            <Quiz
                                answer={this.state.answer}
                                answerOptions={this.state.answerOptions}
                                questionId={this.state.questionId}
                                question={this.state.question}
                                questionTotal={quizQuestions.length}
                                onAnswerSelected={this.handleAnswerSelected}
                                goBack={this.setPrevQuestion}
                                goNext={this.setNextQuestion}
                                setQuestionId={this.handleSetQuestionId}
                                quizQuestions={quizQuestions}
                                setQuestion={this.setQuestion}

                            />
                        )
                    }
                </div>
            );

        }


        return (
            <div className="App">
                <div className="App-header">
                    <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    <h2>Опросник!</h2>
                </div>

                {this.state.result
                    ? <Result quizResult={this.state.result} />
                    : (
                        <Quiz
                            answer={this.state.answer}
                            answerOptions={this.state.answerOptions}
                            questionId={this.state.questionId}
                            question={this.state.question}
                            questionTotal={quizQuestions.length}
                            onAnswerSelected={this.handleAnswerSelected}
                            goBack={this.setPrevQuestion}
                            goNext={this.setNextQuestion}
                            setQuestionId={this.handleSetQuestionId}
                            quizQuestions={quizQuestions}
                            setQuestion={this.setQuestion}

                        />
                    )
                }
            </div>
        );
    }
}

export default App;
