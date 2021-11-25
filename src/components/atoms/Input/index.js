import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.styles'

const Input = ({disabled, onClick, placeholder}) => (
  <input
    css={styles}
    disabled={disabled}
    onClick={onClick && onClick()}
    placeholder={placeholder}
  >
  </input>
)

Input.displayName = 'Input'

Input.propTypes = {
  placeholder: PropTypes.string,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  /** Click event */
  onClick: PropTypes.func
}

export default Input
