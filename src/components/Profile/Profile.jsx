import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileTopContainer}>
        <div className={css.profileImgContainer}>
          <img className={css.profileImg} src={image} alt={name} />
        </div>
        <div className={css.profileInfoContainer}>
          <p className={css.name}>{name}</p>
          <p className={css.ptaglctn}>@{tag}</p>
          <p className={css.ptaglctn}>{location}</p>
        </div>
      </div>

      <ul className={css.profileFooterContainer}>
        <li className={css.profileLi}>
          <span>Followers</span>
          <span className={css.stat}>{stats.followers}</span>
        </li>
        <li className={css.profileLi}>
          <span>Views</span>
          <span className={css.stat}>{stats.views}</span>
        </li>
        <li className={css.profileLi}>
          <span>Likes</span>
          <span className={css.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
