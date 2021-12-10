import tokens from '../../../tokens/parent/json/typography'

const typography = {
  global: {
    family: "'Open Sans'"
  },
  heading: {
    big: {
      fontSize: tokens.typography.headingBig.fontSize.value,
      lineHeight: tokens.typography.headingBig.lineHeight.value,
      fontWeight: tokens.typography.headingBig.fontWeight.value
    },
    normal: {
      fontSize: tokens.typography.headingNormal.fontSize.value,
      lineHeight: tokens.typography.headingNormal.lineHeight.value,
      fontWeight: tokens.typography.headingNormal.fontWeight.value
    },
    small: {
      fontSize: tokens.typography.headingSmall.fontSize.value,
      lineHeight: tokens.typography.headingSmall.lineHeight.value,
      fontWeight: tokens.typography.headingSmall.fontWeight.value
    }
  },
  body: {
    normal: {
      fontSize: tokens.typography.bodyNormal.fontSize.value,
      lineHeight: tokens.typography.bodyNormal.lineHeight.value
    },
    buttonlg: {
      fontSize: tokens.typography.bodyButtonlg.fontSize.value,
      lineHeight: tokens.typography.bodyButtonlg.lineHeight.value,
      fontWeight: tokens.typography.bodyButtonlg.fontWeight.value
    },
    buttonmd: {
      fontSize: tokens.typography.bodyButtonmd.fontSize.value,
      lineHeight: tokens.typography.bodyButtonmd.lineHeight.value,
      fontWeight: tokens.typography.bodyButtonmd.fontWeight.value
    },
    buttonsm: {
      fontSize: tokens.typography.bodyButtonsm.fontSize.value,
      lineHeight: tokens.typography.bodyButtonsm.lineHeight.value,
      fontWeight: tokens.typography.bodyButtonsm.fontWeight.value
    }
  }
}

export default typography
