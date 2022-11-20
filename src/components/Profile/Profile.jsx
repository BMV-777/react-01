import PropTypes from 'prop-types';
// import defaultImages from '../../Default-avatar.jpg';
import Rita from '../../Rita.JPG';
import {
  Container,
  Card,
  Info,
  List,
  ListSpam,
  Spam,
  Img,
} from './Profile.module';
import '../../styled.css';

export const Profile = ({
  avatar = Rita,
  username,
  location,
  tag,
  key,
  stats: { followers, views, likes },
}) => {
  return (
    <Container className="">
      <Card className="description">
        <Img
          src={avatar}
          alt="User avatar"
          class="avatar"
          width="110"
          height="110"
        />
        <p className="name">
          <b>{username}</b>
        </p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>

        <Info className="stats">
          <List>
            <ListSpam className="label">Followers</ListSpam>
            <Spam className="quantity">
              <b>{followers}</b>
            </Spam>
          </List>
          <List>
            <ListSpam className="label">Views</ListSpam>
            <Spam className="quantity">
              <b>{views}</b>
            </Spam>
          </List>
          <List>
            <ListSpam className="label">Likes</ListSpam>
            <Spam className="quantity">
              <b>{likes}</b>
            </Spam>
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
