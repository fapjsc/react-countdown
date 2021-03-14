import Countdown from 'react-countdown';
import test from './renderer';

function App() {
  return (
    <div className="p-4 mx-auto">
      <Countdown date={Date.now() + 3000} renderer={test} />
    </div>
  );
}

export default App;
