import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Users() {
    const data = useContext(UserContext);
    return (
        <div>
            {data.users.map(user => (
                <div key={user.userDoc.phone} className="card">
                    <h3>
                        {user.userDoc.name} {user.userDoc.surname}
                    </h3>
                    <img
                        src={user.userDoc.insta.profile_pic}
                        alt="Instagram profile pic"
                    />

                    <p>Instagram Posts: {user.userDoc.insta.post_number}</p>
                    <p>Instagram Likes: {user.userDoc.insta.average_like}</p>

                    <p>Tiktok videos: {user.userDoc.tiktok.videos.length}</p>
                    <p>Tiktok Likes: {user.userDoc.tiktok.hearts}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;
