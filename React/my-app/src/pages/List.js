import React from 'react';

const User = ({ userData }) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )

}

//멀티데이터, 다중데이터 출력 / 사용자목록 출력 등등
const UserList = () => {
    const users = [
        { id: 1, email: 'ryu@gamil.com', name: '유재석' },
        { id: 2, email: 'kim@gamil.com', name: '김종국' },
        { id: 3, email: 'ha@gamil.com', name: '하하' },
        { id: 4, email: 'song@gamil.com', name: '송지효' },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (<User userData={user} key={index} />))}
            </tbody>
        </table>
    )
}

export default UserList;