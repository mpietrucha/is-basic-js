import { isNumber, negate } from 'lodash-es'

export { isNumber }

export const notNumber = negate(isNumber)
