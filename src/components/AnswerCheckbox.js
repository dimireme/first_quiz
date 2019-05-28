import React from 'react';
import PropTypes from 'prop-types';

function AnswerCheckbox(props) {


  return (
    <li className="answerOption">
      <input
        type="checkbox"
        className="radioCustomButton"
        name="radioGroup"
      //  checked={props.answerType === props.answer}

        id={props.answerType}
        value={props.answerType}
        //disabled={props.answer}
        onChange={props.toggleCheckboxChange}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}




AnswerCheckbox.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  toggleCheckboxChange: PropTypes.func.isRequired
};

export default AnswerCheckbox;
