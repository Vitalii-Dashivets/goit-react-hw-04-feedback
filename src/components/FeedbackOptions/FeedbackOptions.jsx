import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

export const FeedbackOptions = ({ options, onClickBtn }) => {
  return (
    <div className={css.feedback__box}>
      {Object.keys(options).map(name => {
        return (
          <button
            key={name}
            className={css.button}
            type="button"
            name={name}
            onClick={onClickBtn}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape(
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ),
  onClickBtn: PropTypes.func.isRequired,
};
