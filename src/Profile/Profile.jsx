import css from './Profile.module.css'

const Profile = ({ person: {username, tag, location, avatar , stats: {followers, views, likes}}}) => {

    return (
    <div className={css.block}>
        <img    src={avatar} 
                alt={username} 
                className={css.image}/>
                
        <p className={css.nameText}>{username}</p>
        <p className={css.tagText}>@{tag}</p>
        <p className={css.locationText}>{location}</p>
    <div className={css.blockList}>
        <ul className={css.list}>
            <li className={css.items}>
                <span>followers</span>
                    {followers}</li>
            <li className={css.items}>
                <span>views</span>
                    {views}</li>
            <li className={css.items}>
                <span>likes</span>
                    {likes}</li>
        </ul>
        </div>
    </div>
    );
};


export default Profile;