export default function Feedback({ values, total, positivePercentage }) {
  const { good, neutral, bad } = values;

  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </>
  );
}