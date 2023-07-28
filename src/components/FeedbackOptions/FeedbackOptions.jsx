import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback__box}>
      {options.map(elem => {
        return (
          <button
            className={css.button}
            type="button"
            onClick={() => onLeaveFeedback(elem)}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
