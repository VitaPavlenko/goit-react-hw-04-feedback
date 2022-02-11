// import s from "./App.css";
import { useState } from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/Feedback/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const handelClick = event => {
    const target = event.target.name;
    setState(prevState => ({ ...prevState, [target]: prevState[target] + 1 }));
  };

  // handelClick = event => {
  //   const target = event.target.name;
  //   this.setState(prevState => ({ [target]: prevState[target] + 1 }));
  // };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentag = total ? +(good * 100) / +total : 0;
    return Math.round(percentag);
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const total = good + neutral + bad;
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   // const good = this.state.good;
  //   const percentag = total ? +(good * 100) / +total : 0;
  //   return Math.round(percentag);
  // };

  // const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  const keys = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={keys} handelClick={handelClick} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </>
  );
}

// export default App;
