import React from 'react';
import PropTypes from 'prop-types';

const AnswerOption = props => {
  return (
    <li className='answerOption'>
      <input
        type='radio'
        name='radioGroup'
        className='radioCustomButton'
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label htmlFor={props.answerType} className='radioCustomLabel'>
        {props.answerContent}
      </label>
    </li>
  );
};

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
