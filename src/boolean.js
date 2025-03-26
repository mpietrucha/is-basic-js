import { isBoolean, negate } from 'lodash-es'

export { isBoolean }

export const notBoolean = negate(isBoolean)
