import PropTypes from 'prop-types';
import defaultImages from '../../Default-avatar.jpg';
import { Container, Card, Info, List, ListSpam } from './Profile.module';

export const Profile = ({
  avatar = defaultImages,
  username,
  location,
  tag,
  key,
  stats: { followers, views, likes },
}) => {
  return (
    <Container className="">
      <Card className="description">
        <img src={avatar} alt="User avatar" class="avatar" width="120" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>

        <Info className="stats">
          <List>
            <ListSpam className="label">Followers</ListSpam>
            <span className="quantity">{followers}</span>
          </List>
          <List>
            <ListSpam className="label">Views</ListSpam>
            <span className="quantity"> {views}</span>
          </List>
          <List>
            <ListSpam className="label">Likes</ListSpam>
            <span className="quantity"> {likes}</span>
          </List>
        </Info>
      </Card>
    </Container>
  );
};

// eslint-disable-next-line react/no-typos
Profile.PropTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
};
