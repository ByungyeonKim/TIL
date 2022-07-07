import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';

function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;
