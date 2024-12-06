import Profile from "./Profile/Profile";
import users from "../userData.json"
import friends from "../friends.json"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"





const App = () => { 
  return (
    <div>
      <Profile person={users}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
      </div>
  );
};

export default App;