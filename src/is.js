import { isEmpty } from '@/empty'
import { Validators } from '@/validators'
import { negate } from 'lodash-es'

export const isBasic = type => {
    return Validators.has(type)
}

export const isType = (input, type) => {
    return Validators.call(type, input)
}

export const is = (input, ...parameters) => {
    if (isEmpty(parameters)) {
        return isBasic(input)
    }

    return isType(input, parameters.shift())
}

export const not = negate(is)

export const notType = negate(isType)

export const notBasic = negate(isBasic)
