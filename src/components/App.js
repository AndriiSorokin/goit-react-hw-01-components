import './App.css';
import user from '../data/user.json'
import statistic from '../data/statistical-data.json'
import friends from '../data/friends.json'
import transaction from '../data/transactions.json'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transaction from './Transaction/Transaction';
function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics value={statistic} />
      <FriendList friends={friends} />
      <Transaction items ={transaction} />
      </>
  );
}

export default App;
