import './Profile.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="profile-container">
      <div className="profile-top-container">
        <div className="profile-img-container">
          <img className="profile-img" src={image} alt={name} />
        </div>
        <div className="profile-info-container">
          <p className="info name">{name}</p>
          <p className="info tag">@{tag}</p>
          <p className="info location">{location}</p>
        </div>
      </div>

      <ul className="profile-footer-container">
        <li className="profile-li">
          <span>Followers</span>
          <span className="stat">{stats.followers}</span>
        </li>
        <li className="profile-li">
          <span>Views</span>
          <span className="stat">{stats.views}</span>
        </li>
        <li className="profile-li">
          <span>Likes</span>
          <span className="stat">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
