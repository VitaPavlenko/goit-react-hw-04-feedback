import s from './FeedbackOptions.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, handelClick }) => (
  <>
    <div>
      {options.map(item => {
        return (
          <button key={item} name={item} type="button" onClick={handelClick}>
            {item}
          </button>
        );
      })}
    </div>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
