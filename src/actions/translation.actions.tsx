import { translationConstants } from '../constants/translation.constants';
import * as types from '../types/translation.types';



export const addTranslate = (translate: object): types.IActionAddTranslate => {
    return {
        type: translationConstants.ADD_TRANSLATE,
        translate
    };
}

export const addTranslateOutsideComponent = (translate: object): types.IActionAddTranslateOutsideComponent => {
    return {
        type: translationConstants.ADD_TRANSLATE_OUTSIDE_COMPONENT,
        translate
    }
}