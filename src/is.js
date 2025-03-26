import { isEmpty } from '@/empty'
import { Validators } from '@/validators'
import { useNegate } from '@mpietrucha/function'

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

export const not = useNegate(is)

export const notType = useNegate(isType)

export const notBasic = useNegate(isBasic)
