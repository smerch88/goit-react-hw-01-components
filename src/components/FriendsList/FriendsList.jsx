import PropTypes from 'prop-types';
import styles from './Friendslist.module.css';

const Friendslist = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(user => (
        <li className={styles.item} key={user.id}>
          <span
            className={user.isOnline ? styles.online : styles.offline}
          ></span>
          <img
            className={styles.avatar}
            src={user.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{user.name}</p>
        </li>
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
