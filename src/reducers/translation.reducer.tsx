import { Reducer } from 'redux';
import { TranslationType } from '../types/translation.types';
import { translationConstants } from '../constants/translation.constants';

export interface TranslateState {
    translate: object;
    translateOutsideComponent: object;
}

const initialState: TranslateState = {
    translate: {},
    translateOutsideComponent: {},
};

export const translateReducer: Reducer<TranslateState, TranslationType> = (state = initialState, action: TranslationType) => {
    switch (action.type) {

        case translationConstants.ADD_TRANSLATE:
            return { ...state, translate: action.translate };

        case translationConstants.ADD_TRANSLATE_OUTSIDE_COMPONENT:
            return { ...state, translateOutsideComponent: action.translate };

        default:
            return state;
    }
}