import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { FilteredUsersContext } from "../context/FilteredUsersContext";
import { User } from "./Filter";
import {
    FaInstagram,
    FaTiktok,
    FaHome,
    FaInfo,
    FaRegMoneyBillAlt,
} from "react-icons/fa";

function UserDetailes() {
    const { filteredUsers } = useContext(FilteredUsersContext);
    const { pathname } = useLocation();

    let currentUser: User | undefined = undefined;

    for (let x of filteredUsers) {
        if (pathname.slice(1) === x.userDoc.insta.username) {
            currentUser = x;
        }
    }

    return (
        <div>
            {currentUser && (
                <>
                    <h1>{currentUser.userDoc.insta.username}</h1>
                    <img
                        src={currentUser.userDoc.insta.profile_pic}
                        alt="Instagram profile pic"
                        className="img-in-details"
                    />
                    <div className="details-container">
                        <div className="ig-details">
                            <h3 className="flex--items-center">
                                <FaInstagram />
                                Instagram Details
                            </h3>
                            <p>
                                <span className="opacity-50">
                                    Last Scrape:{" "}
                                </span>
                                <span>
                                    {currentUser.userDoc.insta.last_scrape.toDateString()}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Full Name: </span>
                                <span>
                                    {currentUser.userDoc.insta.full_name}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Biography: </span>
                                <span>
                                    {currentUser.userDoc.insta.biography}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Followers: </span>
                                <span>
                                    {currentUser.userDoc.insta.followers}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Following: </span>
                                <span>
                                    {currentUser.userDoc.insta.following}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">
                                    Average Like:
                                </span>
                                <span>
                                    {currentUser.userDoc.insta.average_like}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">
                                    Total Posts:{" "}
                                </span>
                                <span>
                                    {
                                        currentUser.userDoc.insta.shared_posts
                                            .length
                                    }
                                </span>
                            </p>
                        </div>

                        <div className="tiktok-details">
                            <h3 className="flex--items-center">
                                <FaTiktok />
                                Tiktok Details
                            </h3>
                            <p>
                                <span className="opacity-50">Username: </span>
                                <span>
                                    {currentUser.userDoc.tiktok.username}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">
                                    Last Scrape:{" "}
                                </span>
                                <span>
                                    {currentUser.userDoc.tiktok.last_scrape.toDateString()}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Followers: </span>
                                <span>
                                    {currentUser.userDoc.tiktok.followers}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Following: </span>
                                <span>
                                    {currentUser.userDoc.tiktok.following}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Hearts: </span>
                                <span>{currentUser.userDoc.tiktok.hearts}</span>
                            </p>
                            <p>
                                <span className="opacity-50">
                                    Total Videos:{" "}
                                </span>
                                <span>
                                    {currentUser.userDoc.tiktok.videos.length}
                                </span>
                            </p>
                        </div>

                        <div className="general-details">
                            <h3 className="flex--items-center">
                                <FaInfo />
                                Genenral Details
                            </h3>
                            <p>
                                <span className="opacity-50">Name: </span>
                                <span>{currentUser.userDoc.name}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Surname: </span>
                                <span>{currentUser.userDoc.surname}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Gender: </span>
                                <span>{currentUser.userDoc.gender}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Age: </span>
                                <span>{currentUser.userDoc.age}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Email: </span>
                                <span>{currentUser.userDoc.email}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Phone: </span>
                                <span>{currentUser.userDoc.phone}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Country: </span>
                                <span>{currentUser.userDoc.country}</span>
                            </p>
                            <p>
                                <span className="opacity-50">
                                    Device Info:{" "}
                                </span>
                                <span>{currentUser.userDoc.deviceInfo}</span>
                            </p>
                        </div>

                        <div className="money-details">
                            <h3 className="flex--items-center">
                                <FaRegMoneyBillAlt />
                                Money Details
                            </h3>
                            <p>
                                <span className="opacity-50">
                                    Papara Account No:{" "}
                                </span>
                                <span>
                                    {currentUser.userDoc.money.paparaAccountNo}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Current: </span>
                                <span>{currentUser.userDoc.money.current}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Currency: </span>
                                <span>
                                    {currentUser.userDoc.money.currency}
                                </span>
                            </p>
                            <p>
                                <span className="opacity-50">Papara ID: </span>
                                <span>{currentUser.userDoc.money.id}</span>
                            </p>
                            <p>
                                <span className="opacity-50">City: </span>
                                <span>{currentUser.userDoc.money.city}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Name: </span>
                                <span>{currentUser.userDoc.money.name}</span>
                            </p>
                            <p>
                                <span className="opacity-50">Surname: </span>
                                <span>{currentUser.userDoc.money.surname}</span>
                            </p>
                        </div>
                    </div>
                </>
            )}

            <h2 className="flex--items-center">
                <Link to="/">Home </Link> <FaHome />
            </h2>
        </div>
    );
}

export default UserDetailes;
