import { Link } from "react-router-dom";
import { FilteredUsersContext } from "../context/FilteredUsersContext";
import { useContext } from "react";

function Users() {
    const { filteredUsers } = useContext(FilteredUsersContext);
    return (
        <div className="users-container">
            {filteredUsers.map(user => (
                <div key={user.userDoc.phone} className="card">
                    <h3>{user.userDoc.insta.username}</h3>
                    <img
                        src={user.userDoc.insta.profile_pic}
                        alt="Instagram profile pic"
                    />

                    <p>Instagram Posts: {user.userDoc.insta.post_number}</p>
                    <p>Instagram Likes: {user.userDoc.insta.average_like}</p>

                    <p>Tiktok videos: {user.userDoc.tiktok.videos.length}</p>
                    <p>Tiktok Likes: {user.userDoc.tiktok.hearts}</p>

                    <h2>
                        <Link className="link" to={`/${user.userDoc.phone}`}>
                            User Detailes
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default Users;
