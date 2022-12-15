import PropTypes from 'prop-types';
import {
  WrappedProfile,
  ImgWrapper,
  Img,
  Name,
  Description,
  Tag,
  Loction,
  Stats,
  Li,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <WrappedProfile>
      <Description>
        <ImgWrapper>
          <Img src={avatar} alt="User avatar" />
        </ImgWrapper>
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Loction>{location}</Loction>
      </Description>

      <Stats>
        <Li>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </Li>
        <Li>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </Li>
        <Li>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </Li>
      </Stats>
    </WrappedProfile>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
