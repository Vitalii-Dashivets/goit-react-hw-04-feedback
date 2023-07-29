import React from 'react';
import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Message/Message';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositivePercentage(total !== 0 ? Math.round((good / total) * 100) : 0);
  }, [good, neutral, bad, total]);

  const options = [
    { name: 'good', value: good, update: setGood },
    { name: 'neutral', value: neutral, update: setNeutral },
    { name: 'bad', value: bad, update: setBad },
  ];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} />
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
