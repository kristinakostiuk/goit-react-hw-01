import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  status: { followers, views, likes },
}) {
  return (
    <div className={css.cardContainer}>
      <div className={css.userInfo}>
        <img className={css.userImg} src={avatar} alt="User avatar" />
        <p className={css.cardText}>{username}</p>
        <p className={css.cardText}>@{tag}</p>
        <p className={css.cardText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
