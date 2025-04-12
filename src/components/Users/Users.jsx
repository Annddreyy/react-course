import React from "react";
import User from "./User/User";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURL: 'https://avatars.mds.yandex.net/i?id=549ed7bef29f8aa39b548c072eb57f0b3fdf287c-4589186-images-thumbs&n=13', followed: true, fullName: 'Andrey P.', status: 'женат', location: { city: 'Penza', country: 'Russia' } },
            { id: 2, photoURL: 'https://avatars.mds.yandex.net/i?id=549ed7bef29f8aa39b548c072eb57f0b3fdf287c-4589186-images-thumbs&n=13', followed: false, fullName: 'Andrey P.', status: 'женат', location: { city: 'Penza', country: 'Russia' } },
            { id: 3, photoURL: 'https://avatars.mds.yandex.net/i?id=549ed7bef29f8aa39b548c072eb57f0b3fdf287c-4589186-images-thumbs&n=13', followed: true, fullName: 'Andrey P.', status: 'женат', location: { city: 'Penza', country: 'Russia' } },
            { id: 4, photoURL: 'https://avatars.mds.yandex.net/i?id=549ed7bef29f8aa39b548c072eb57f0b3fdf287c-4589186-images-thumbs&n=13', followed: false, fullName: 'Andrey P.', status: 'женат', location: { city: 'Penza', country: 'Russia' } }
        ])
    }
    let users = props.users.map( user => 
                                <User 
                                fullName={user.fullName} 
                                photoURL={user.photoURL}
                                status={user.status}
                                city={user.location.city}
                                country={user.location.country}
                                followed={user.followed}
                                id={user.id}
                                follow={props.follow}
                                unfollow={props.unfollow} />);
    return (
        <div>
            { users }
        </div>
    )
}

export default Users;