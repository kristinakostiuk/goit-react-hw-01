import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendListItem}>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={css.friendName}>{name}</p>
      <p
        className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
