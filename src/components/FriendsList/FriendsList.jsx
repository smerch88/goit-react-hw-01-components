import PropTypes from 'prop-types';
import styles from './Friendslist.module.css';
import FriendslistItem from '../FriendListItem/FriendListItem';

const Friendslist = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendslistItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
export default Friendslist;

Friendslist.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
