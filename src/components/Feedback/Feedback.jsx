export default function Feedback({ values, total }) {
  const { good, neutral, bad } = values;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <>
      {total > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positivePercentage}%</li>
        </ul>
      ) : <p>No feedback yet</p>
      }
    </>
  );
}