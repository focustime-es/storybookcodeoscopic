import {css} from 'styled-components'

export default css`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: ${props => props.theme.typography.body.buttonlg.fontSize};
  font-weight: ${props => props.theme.typography.body.buttonlg.fontWeight};
  line-height: ${props => props.theme.typography.body.buttonlg.lineHeight};
  box-shadow: ${props => props.theme.shadows.sm};
  font-family: inherit;
  outline: none;
  border: 1px solid transparent;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.neutral.percent00};
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.primary.light};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.primary.light};
   }

   
  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.colors.neutral.percent00};
      border-color: ${props.theme.colors.neutral.percent20};
      color: ${props.theme.colors.neutral.percent80};

      &:hover,
      &:active {
        background-color: ${props.theme.colors.neutral.percent00};
        border-color: ${props => props.theme.colors.primary.light};
        color: ${props.theme.colors.primary.light};
      }

      &:disabled {        
        color: ${props.theme.colors.neutral.percent40};
        background-color: ${props.theme.colors.neutral.percent05};
        border-color: ${props.theme.colors.neutral.percent20};
      }
    `}
  

  ${props =>
    props.link &&
    css`
      background-color: transparent;
      color:  ${props => props.theme.colors.primary.main};
      box-shadow: none;
      &:hover,
      &:active {
        background-color: ${props.theme.colors.neutral.percent05};
      }

      &:disabled {
          background-color: ${props.theme.colors.neutral.percent00};
          color: ${props => props.theme.colors.neutral.percent20};
     
      }
    `}
    ${props =>
      props.size === 'sm' &&
      css`
        font-size: ${props => props.theme.typography.body.buttonsm.fontSize};
        line-height: ${props => props.theme.typography.body.buttonsm.lineHeight};
        font-weight: ${props => props.theme.typography.body.buttonsm.fontWeight};
        padding: 2px ${props => props.theme.spacing.xxs};
      `}
      
    ${props =>
      props.size === 'md' &&
      css`
        font-size: ${props => props.theme.typography.body.buttonmd.fontSize};
        line-height: ${props => props.theme.typography.body.buttonmd.lineHeight};
        font-weight: ${props => props.theme.typography.body.buttonmd.fontWeight};
        padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.xs};
      `}

      ${props =>
        props.dangerous &&
        css`
          background-color: ${props.theme.colors.alert.error};
          border-color: ${props.theme.colors.alert.error};
          color: ${props.theme.colors.neutral.percent00};
    
          &:hover,
          &:active {
            background-color: ${props.theme.colors.alert.error};
          border-color: ${props.theme.colors.alert.error};
          color: ${props.theme.colors.neutral.percent00};
          }
    
          &:disabled {        
            color: ${props.theme.colors.neutral.percent40};
            background-color: ${props.theme.colors.neutral.percent05};
            border-color: ${props.theme.colors.neutral.percent20};
          }
        `}
        
        ${props =>
          props.secondary &&
          props.dangerous &&
          css`  
          background-color: ${props.theme.colors.neutral.percent00};
          border-color: ${props.theme.colors.alert.error};
          color: ${props.theme.colors.alert.error};


          &:hover,
          &:active {
            background-color: ${props.theme.colors.neutral.percent00};
            color: ${props.theme.colors.alert.error};
          }

          &:disabled {        
            color: ${props.theme.colors.neutral.percent40};
            background-color: ${props.theme.colors.neutral.percent05};
            border-color: ${props.theme.colors.neutral.percent20};
          }

          `}

          ${props =>
            props.link &&
            props.dangerous &&
            css`
              background-color: transparent;
              border: none;
              color:  ${props => props.theme.colors.alert.error};
              box-shadow: none;
              &:hover,
              &:active {
                background-color: ${props.theme.colors.neutral.percent05};
              color:  ${props => props.theme.colors.alert.error};

              }
        
              &:disabled {
                  background-color: ${props.theme.colors.neutral.percent00};
                  color: ${props => props.theme.colors.neutral.percent20};
             
              }
            `}
      
`
