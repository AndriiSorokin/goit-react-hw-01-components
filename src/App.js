import './App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json'
import statistic from './data/statistical-data.json'
import Statistics from './components/Statistics/Statistics';
function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics value={statistic} />
      </>
  );
}

export default App;
