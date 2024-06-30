// src/components/TimedForm.js
import { useState, useRef, useEffect } from "react";

const TimedForm = () => {
  const [resetTime, setResetTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (submitted && resetTime !== null) {
      // Устанавливаем таймер для сброса формы
      timerRef.current = setTimeout(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
        setSubmitted(false); // Сбрасываем состояние отправки
      }, resetTime);
    }
    // Очистка таймера при размонтировании компонента
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [submitted, resetTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(resetTime);
  };

  const handleTimeSelect = (time) => {
    setResetTime(time);
  };

  return (
    <div>
      <h1>Форма с отложенным сбросом</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>
            Имя: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Электронная почта: <input type="email" name="email" />
          </label>
        </div>
        <button type="submit">Отправить</button>
      </form>
      <div>
        <h2>Выберите время сброса:</h2>
        <button onClick={() => handleTimeSelect(5000)}>5 секунд</button>
        <button onClick={() => handleTimeSelect(10000)}>10 секунд</button>
        <button onClick={() => handleTimeSelect(15000)}>15 секунд</button>
      </div>
    </div>
  );
};

export default TimedForm;
