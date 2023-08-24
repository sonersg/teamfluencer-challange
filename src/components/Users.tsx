import { Link } from "react-router-dom";
import { FilteredUsersContext } from "../context/FilteredUsersContext";
import { useContext } from "react";

function Users() {
    const { filteredUsers } = useContext(FilteredUsersContext);

    // Read and render the filtered users from "FilteredUsersContext"
    return (
        <div className="users-container">
            {filteredUsers.map(user => (
                <div key={user.userDoc.phone} className="card">
                    <h3>{user.userDoc.insta.username}</h3>
                    <img
                        src={user.userDoc.insta.profile_pic}
                        alt="Instagram profile pic"
                    />

                    <div
                        style={{
                            color: "#fff",
                            textAlign: "start",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <p>
                            <span className="opacity-50">
                                Instagram Posts:{" "}
                            </span>
                            <span>{user.userDoc.insta.post_number}</span>
                        </p>
                        <p>
                            <span className="opacity-50">
                                Instagram Likes:{" "}
                            </span>
                            <span>{user.userDoc.insta.average_like}</span>
                        </p>

                        <p>
                            <span className="opacity-50">Tiktok videos: </span>
                            <span>{user.userDoc.tiktok.videos.length}</span>
                        </p>
                        <p>
                            <span className="opacity-50">Tiktok Likes: </span>
                            <span>{user.userDoc.tiktok.hearts}</span>
                        </p>
                    </div>

                    <h2>
                        <Link
                            className="link"
                            to={`/${user.userDoc.insta.username}`}
                        >
                            User Detailes
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default Users;
