import Section from './layout/Section/Section';
import Description from './Description/Description.jsx';
import Options from './Options/Options.jsx';
import Feedback from './Feedback/Feedback.jsx';
import { useEffect, useState } from 'react';
import Notification from './Notification/Notification.jsx';

export default function App() {
  const defaultValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('feedback-values');

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }

    return defaultValues;
  });

  useEffect(() => {
    localStorage.setItem('feedback-values', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues(defaultValues);
  };

  const total = values.good + values.neutral + values.bad;
  const positivePercentage = total === 0 ? 0 : Math.round((values.good / total) * 100);

  return (
    <>
      <Section className="section-test">
        <Description />
        <Options
          total={total}
          onClickHandle={updateFeedback}
          onResetHandle={resetFeedback}
        />
        {total > 0 ?
          <Feedback
            total={total}
            values={values}
            positivePercentage={positivePercentage}
          /> :
          <Notification />
        }
      </Section>
    </>
  );
}