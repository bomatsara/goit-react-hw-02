import Section from './layout/Section/Section';
import Description from './Description/Description.jsx';
import Options from './Options/Options.jsx';
import Feedback from './Feedback/Feedback.jsx';
import { useEffect, useState } from 'react';

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

  const getTotal = () => {
    const { good, neutral, bad } = values;
    return good + neutral + bad;
  };

  return (
    <>
      <Section className="section-test">
        <Description />
        <Options total={getTotal()} onClickHandle={updateFeedback} onResetHandle={resetFeedback} />
        <Feedback total={getTotal()} values={values} />
      </Section>
    </>
  );
}