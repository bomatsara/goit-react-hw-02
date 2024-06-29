import css from './Options.module.css';
import clsx from 'clsx';

export default function Options({ total, onClickHandle, onResetHandle }) {
  return (
    <>
      <div className={css.wrap}>
        <button
          className={clsx(css.button, css['button-good'])}
          onClick={() => {
            onClickHandle('good');
          }}
        >Good
        </button>
        <button
          className={clsx(css.button, css['button-neutral'])}
          onClick={() => {
            onClickHandle('neutral');
          }}
        >Neutral
        </button>
        <button
          className={clsx(css.button, css['button-bad'])}
          onClick={() => {
            onClickHandle('bad');
          }}
        >Bad
        </button>

        {total > 0 && (
          <button
            className={clsx(css.button, css['button-reset'])}
            onClick={onResetHandle}
          >Reset</button>
        )}
      </div>
    </>
  );
}
