import React, { useState } from 'react';
import { Steps } from 'antd';

type ResistStepProps = {};

const ResistStep = (props: ResistStepProps) => {
    const [current, setCurrent] = useState(0);

    return (
        <>
            <Steps
                style={{ height: 348 }}
                direction="vertical"
                current={current}
                items={[
                    {
                        title: '카테고리 & 브랜드 입력',
                    },
                    {
                        title: '정보 입력',
                    },
                    {
                        title: '사진입력',
                    },
                ]}
            />
            <button onClick={() => setCurrent(current + 1)}>next</button>
        </>
    );
};

export default ResistStep;
