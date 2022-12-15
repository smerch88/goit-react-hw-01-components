import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload Stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
