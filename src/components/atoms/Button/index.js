import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.styles'

const Button = ({disabled, secondary, link, onClick, dangerous, children, size}) => (
  <button
    css={styles}
    disabled={disabled}
    dangerous={dangerous}
    secondary={secondary}
    size={size}
    link={link}
    onClick={onClick && onClick()}
  >
    {children}
  </button>
)

Button.displayName = 'Button'

Button.propTypes = {
  /** Content to be included in the button */
  children: PropTypes.node.isRequired,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  /** This Boolean attribute prevents the user from interacting with the button */
  dangerous: PropTypes.bool,
  /** This Boolean attribute to display secondary button variation */
  secondary: PropTypes.bool,
  /** This Boolean attribute to display ghost button variation */
  link: PropTypes.bool,
    /** Click event */
  onClick: PropTypes.func
}

export default Button
