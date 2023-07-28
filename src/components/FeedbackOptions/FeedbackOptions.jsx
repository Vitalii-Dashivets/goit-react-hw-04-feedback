import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

export const FeedbackOptions = ({ options }) => {
  return (
    <div className={css.feedback__box}>
      {options.map(({ name, value, update }) => {
        return (
          <button
            className={css.button}
            type="button"
            onClick={() => update(value + 1)}
          >
            {name}
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
