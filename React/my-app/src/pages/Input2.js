import React, { useState } from 'react';

function Input2() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });
    //setInputs를 이용해야 상태관리가 가능하다, 
    //useState : 두개이상 관리

    const { name, email, tel } = inputs;
    //이렇게 빼와야 밑에 value 값에서 사용가능하다.

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value
        })

    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id='name' value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id='email' value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id='tel' value={tel} onChange={onChange} />
            </div>
            <p>이름:{name}</p>
            <p>이메일:{email}</p>
            <p>전화번호:{tel}</p>
        </div>
    )
}

export default Input2;