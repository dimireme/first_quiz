import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import logo from "../svg/logo.svg";

function Result(props) {
  return (


      <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >

        <div className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <h2>Опросник!</h2>
        </div>


        <div>
        You prefer <strong>{props.quizResult}</strong>!
        </div>



    </CSSTransitionGroup>

  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
