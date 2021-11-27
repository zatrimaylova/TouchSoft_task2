import CounterWrapper from './components/CounterWrapper/CounterWrapper.js';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <CounterWrapper />
      </div>
    </>
  );
}

export default App;