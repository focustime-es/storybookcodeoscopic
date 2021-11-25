import {css} from 'styled-components'

export default css`
  align-items: center;
  border-radius: 4px;
  display: flex;
  font-size: ${props => props.theme.typography.body.normal.fontSize};
  line-height: ${props => props.theme.typography.body.normal.lineHeight};
  font-family: inherit;
  outline: none;
  border: 1px solid transparent;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.neutral.percent00};
  color: ${props => props.theme.colors.neutral.percent100};
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
  box-shadow: ${props => props.theme.shadows.sm};
  margin-bottom: 10px;

  &::placeholder{
    color: ${props => props.theme.colors.neutral.percent20};
  }
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.neutral.percent05};
  }

  &:active {
    box-shadow: 0 0 4px ${props => props.theme.colors.primary.light};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.neutral.percent05};

  }

`
