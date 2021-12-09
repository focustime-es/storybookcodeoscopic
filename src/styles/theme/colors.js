import tokens from '../../../tokens/parent/json/color'
import tokensProject from '../../../tokens/project/json/color'

const colors = {
  primary: {
    light: tokensProject.color.primaryLight.value,
    main: tokensProject.color.primaryMain.value,
    dark: tokensProject.color.primaryDark.value
  },
  neutral: {
    percent00: tokens.color.neutral00.value,
    percent05: tokens.color.neutral05.value,
    percent20: tokens.color.neutral20.value,
    percent40: tokens.color.neutral40.value,
    percent80: tokens.color.neutral80.value
  },
  alert: {
    success: tokens.color.alertSuccess.value,
    warning: tokens.color.alertWarning.value,
    error: tokens.color.alertError.value
  }
}

export default colors
