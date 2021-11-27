import { connect } from 'react-redux';

import Counter from '../Counter/Counter.js';

import { 
  ACTION_ADD_COUNTER, 
  ACTION_RESET_ALL_COUNTERS, 
  ACTION_CHANGE_EVERY 
} from '../../ducks/counters';

import { 
  WrappersHeader,
  WrappersList
} from './styles.js';

const CounterWrapper = ({ counters, addCounter, resetCounters, increaseEven }) => {
  const countersManaging = (e) => {
    /* checks e.target.tagName, in case e.target.tagName is "button", 
    it uses ACTIONs to add one more counter or to reset all counters*/

    if (e.target.tagName.toLowerCase() !== 'button') return;

    if (e.target.id === 'reset') {
      resetAllCounters();
    } else if (e.target.id === 'add') {
      addNewCounter();
    }
  }

  const resetAllCounters = () => {
    /* uses ACTION_RESET_ALL_COUNTERS to reset all counters; is used in countersManaging() */

    resetCounters(true);
  }

  const addNewCounter = () => {
    /* uses .concat () to copy the array of counters, checks each counter, 
    if it's an even number, increments its value; uses ACTION_ADD_COUNTER to add a new counter;
    uses ACTION_CHANGE_EVERY to increment value; is used in countersManaging() */

    const countersArr = counters.concat();
    countersArr.map((item) => {
      if (item.count % 2 === 0 && item.count !== 0) {
        item.count = item.count + 1;
      }; 
    })
    increaseEven(countersArr);

    const newCounter = {
      id: new Date().getTime(),
      count: 0,
    }
    addCounter(newCounter);
  }

  const countSum = () => {
    /* counts and returns sum of counts' counts */
    let sum = 0;
    if (counters.length === 0) return 0;
    counters.map((item) => {
      sum += item.count;
    })
    return sum;
  }
  
  return (
    <div>
      <WrappersHeader>
        <h1>Количество счётчиков: {counters.length}</h1>
        <h2>Сумма значений всех счётчиков: {countSum()}</h2>
        <div onClick={countersManaging}>
          <button id="reset">Reset</button>
          <button id="add">Add Counter</button>
        </div>
      </WrappersHeader>
      <WrappersList>
        {counters.map((item) => <Counter id={item.id} key={item.id} />)}
      </WrappersList>
    </div>
  );
}

const mapStateToProps = ({ counters }) => ({
  counters: counters.counters,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: (value) => dispatch(ACTION_ADD_COUNTER(value)),
  resetCounters: (value) => dispatch(ACTION_RESET_ALL_COUNTERS(value)),
  increaseEven: (value) => dispatch(ACTION_CHANGE_EVERY(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterWrapper);