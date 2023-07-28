import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.text}>Good : {good}</p>
      <p className={css.text}>Neutral : {neutral}</p>
      <p className={css.text}>Bad : {bad}</p>
      <p className={css.text}>Total : {total}</p>
      <p className={css.text}>Positive : {positivePercentage} %</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
