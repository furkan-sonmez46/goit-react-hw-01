import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friendItem}>
      <div key={id}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.friendName}>{name}</p>
        <p className={`${isOnline ? css.online : css.offline}`}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
