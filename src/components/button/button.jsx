import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.module.scss';

export const Button = ({
    name, theme, type, size, children, disabled, onClick,
}) => (
    <button
        name={name}
        type={type}
        className={classNames([styles.button, styles[theme], styles[size]])}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    theme: PropTypes.oneOf(['orange', 'whiteSolid', 'whiteOutline']).isRequired,
    size: PropTypes.oneOf(['medium', 'small']),
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    name: 'button',
    type: 'button',
    children: 'Button Text',
    size: 'medium',
    disabled: false,
    onClick: null,
};
