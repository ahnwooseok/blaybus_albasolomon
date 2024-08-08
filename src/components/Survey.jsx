import React, { useState } from 'react';

const Survey = () => {
    // 폼 상태 관리
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');

    // 폼 제출 함수
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 제출할 데이터
        const surveyData = {
            name,
            gender,
            age,
        };

        try {
            // 서버로 데이터 전송
            const response = await fetch('https://your-api-endpoint.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(surveyData),
            });

            if (response.ok) {
                setMessage('제출이 성공적으로 완료되었습니다!');
                setName(''); // 제출 후 폼 초기화
                setGender('');
                setAge('');
            } else {
                setMessage('제출에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            setMessage('서버와의 통신 중 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <h1>설문조사</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        이름:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        성별:
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">선택</option>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                            <option value="other">기타</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        나이:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            min="0"
                        />
                    </label>
                </div>
                <button type="submit">제출</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Survey;
