import { connect } from 'react-redux';

import { 
  ACTION_CHANGE_COUNTER, 
  ACTION_DELETE_COUNTER, 
  ACTION_CHANGE_EVERY 
} from '../../ducks/counters';

import { 
  CounterBody, 
  TextWrapper, 
  ButtonsWrapper, 
  ButtonCount,
  RemoveButton 
} from './styles.js';

const Counter = ({ id, counters, changeCounter, removeCounter, increaseEven }) => {
  const currentCounter = counters.find((item) => Number(id) === Number(item.id));

  const changeCount = (e) => {
    /* changeCount checks e.target.tagName, in case e.target.tagName is "button", 
    it's checks e.target.id and uses ACTIONS to change redux state */

    if (e.target.tagName.toLowerCase() !== 'button') return;

    const dataToChange = {id: currentCounter.id, count: currentCounter.count}

    if (e.target.id === "decrease" && currentCounter.count > 0) {
      dataToChange.count -= 1; 
    } else if (e.target.id === "increase") {
      dataToChange.count += 1; 
    } else if (e.target.id === "reset") {
      dataToChange.count = 0; 
    }
    changeCounter(dataToChange);
  }

  const removeCurrentCount = () => {
    /* uses .concat () to copy the array of counters, checks each counter, 
    if it's not an even number, decrements its value; uses ACTION_DELETE_COUNTER to remove the counter */

    const countersArr = counters.concat();
    countersArr.map((item) => {
      if (item.count % 2 === 1) {
        item.count = item.count - 1;
      }; 
    })
    increaseEven(countersArr);
    removeCounter(currentCounter.id);
  }

  return (
    <CounterBody>
      <TextWrapper>
        <h1>{currentCounter.count}</h1>
      </TextWrapper>
      <div>
        <ButtonsWrapper onClick={changeCount}>
          <ButtonCount id="decrease">-</ButtonCount>
          <button id="reset">Reset</button>
          <ButtonCount id="increase">+</ButtonCount>
        </ButtonsWrapper>
        <RemoveButton onClick={removeCurrentCount}>Remove</RemoveButton>
      </div>
    </CounterBody>
  );
}

const mapStateToProps = ({ counters }) => ({
  counters: counters.counters,
});

const mapDispatchToProps = (dispatch) => ({
  changeCounter: (value) => dispatch(ACTION_CHANGE_COUNTER(value)),
  removeCounter: (value) => dispatch(ACTION_DELETE_COUNTER(value)),
  increaseEven: (value) => dispatch(ACTION_CHANGE_EVERY(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);