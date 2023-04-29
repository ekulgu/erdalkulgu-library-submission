import React, { FC } from 'react';
import { Button as ThemedButton } from '@material-ui/core';
import { GlobalThemeContext } from './Theme';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    style?: object;
}

export const Button: FC<ButtonProps> = ({ label, onClick, style }) => {
    return (
        <GlobalThemeContext.Consumer>
            {({ theme }) => (
                <ThemedButton
                    onClick={onClick}
                    style={{
                        ...style,
                        backgroundColor: theme.backgroundColor,
                        color: theme.textColor
                    }}
                >
                    {label}
                </ThemedButton>
            )}
        </GlobalThemeContext.Consumer>
    );
};
