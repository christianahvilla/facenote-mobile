import { Action } from 'redux';
import { translationConstants } from '../constants/translation.constants';

export interface IActionAddTranslate extends Action {
    type: translationConstants.ADD_TRANSLATE,
    translate: object
}

export interface IActionAddTranslateOutsideComponent extends Action {
    type: translationConstants.ADD_TRANSLATE_OUTSIDE_COMPONENT;
    translate: object;
}

export type TranslationType = IActionAddTranslate | IActionAddTranslateOutsideComponent;