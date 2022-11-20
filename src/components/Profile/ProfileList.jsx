import { Profile } from './Profile';

export const ProfileList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Profile
          username={item.username}
          tag={item.tag}
          location={item.location}
          // avatar={item.avatar}
          stats={item.stats}
        />
      ))}
    </div>
  );
};

// export default ProfileList;
