import React from 'react';
import { useNavigate } from 'react-router-dom';

type LogoProps = {};

const Logo = (props: LogoProps) => {
    const navigate = useNavigate();
    return (
        <img
            onClick={() => navigate('/')}
            src="img/logo_ICDT.png"
            alt="icdt로고"
            height={38}
            style={{
                margin: '12px 0 12px 24px',
                cursor: 'pointer',
            }}
        />
    );
};

export default Logo;
