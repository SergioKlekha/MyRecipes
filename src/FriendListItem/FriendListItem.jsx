import css from "./FriendListItem.module.css"
import clsx from "clsx";


const FriendListItem = ({avatar, name, isOnline}) => {
    
    const statusChange = clsx(css.status, isOnline ? css.ifOnline : css.ifOffline);


    return (
        <div className={css.block}>
            <img    src={avatar} 
                    alt={name} 
                    width="48" />

            <p className={css.text}>{name}</p>

            <p className={statusChange}>{isOnline ? "online" : "offline"}</p>
        </div>
    );
};


export default FriendListItem;