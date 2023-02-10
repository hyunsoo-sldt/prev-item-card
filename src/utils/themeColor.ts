import { theme } from 'antd';

export const ThemeProvider = () => {
    const { token } = theme.useToken();
    return token;
};
