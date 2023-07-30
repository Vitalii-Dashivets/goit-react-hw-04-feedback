import React from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Message/Message';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  };

  const options = { good, neutral, bad };

  function countTotal(options) {
    const total = Object.values(options).reduce((acumulator, number) => {
      return acumulator + number;
    }, 0);

    return total;
  }

  function countPositiveFeedbackPercentage(good, total) {
    let positivePercentage = total !== 0 ? Math.round((good / total) * 100) : 0;
    return positivePercentage;
  }
  let total = countTotal(options);
  let positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClickBtn={onClickBtn} />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
