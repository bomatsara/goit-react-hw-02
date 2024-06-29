import css from './Description.module.css';

export default function Description() {
  return (
    <>
      <h1 className={css['h1']}>Sip Happens Café</h1>
      <p className={css['p']}>Please leave your feedback about our service by selecting one of the options below.</p>
    </>
  );
}