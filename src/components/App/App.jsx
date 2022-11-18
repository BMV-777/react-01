// import '../../App.css';
import user from '../../user.json';
import { GlobalStyle } from '../Global/GlobalStyle';
// import { Profile } from '../Profile/Profile';
import { ProfileList } from '../Profile/ProfileList';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ProfileList items={user} />
    </div>
  );
}

export default App;

// {user.map((use) => (
//   <Profile
//     username={use.username}
//     tag={use.tag}
//     location={use.location}
//     avatar={use.avatar}
//     stats={use.stats}
//   />
// ))}
