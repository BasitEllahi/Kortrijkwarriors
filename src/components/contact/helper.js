import { notify } from 'react-notify-toast'
import { colors } from '../../style-utils'

export const encodeForm = data => {
  const formData = new FormData()

  /* eslint-disable no-restricted-syntax */
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export const success = () => {
  notify.show('Succesvol verzonden, We nemen zo snel mogelijk contact met u op.', 'custom', 5000, {
    background: colors.main,
    text: '${colors.customWhite}',
  })
}

export const errors = e =>
  notify.show(e.message, 'custom', 5000, {
    background: colors.secondAlt,
    text: '${colors.customWhite}',
  })
