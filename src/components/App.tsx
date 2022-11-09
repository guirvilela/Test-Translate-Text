import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { initReactI18next, Trans } from 'react-i18next';
import { configureTranslate } from '../services/configureTranslate';
import { getText } from '../services/getTexts';
import './styles.css';
import { IAdviceProps } from './types';

const App: React.FC<any> = () => {
  const [text, setText] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    getAdviceText();
    configureTranslate();
  }, []);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((state) => state - 1);
      }, 1000);
    }
  }, [count]);

  const getAdviceText = async () => {
    if (count === 0) {
      const { slip }: IAdviceProps = await getText();
      setText(slip.advice);
      setId(slip.id);
      setCount(3);
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <h3>#{id}</h3>
      <Trans i18nKey="userMessagesUnread" count={count} t={t} className="text">
        <h1 className="text">{text}</h1>
      </Trans>

      <button
        className={count === 0 ? 'btn_load' : 'btn_load_loading'}
        onClick={getAdviceText}
      >
        {count === 0 ? t('Carregar outra') : count}
      </button>
    </div>
  );
};

export default App;
