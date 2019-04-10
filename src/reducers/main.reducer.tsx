import { combineReducers } from "redux"
import { postReducer } from "./post.reducer"
import { i18nState} from "redux-i18n"
import { reducer as formReducer} from "redux-form"
import storage from "redux-persist/lib/storage"
import { AsyncStorage } from "react-native";
import { translateReducer } from "./translation.reducer";


const appReducer = combineReducers({
    i18nState,
    form: formReducer,
    postReducer: postReducer,
    translateReducer: translateReducer
})

const rootReduer = (state: any, action: any) => {
    Object.keys(state).forEach(key => {
        if ( key !==  ('translateReducer' || 'form' || 'i18nState')){
            storage.removeItem(`persist:${key}`);
        }
    })
    AsyncStorage.clear()
    state = {
        translateReducer: state.translateReducer,
        form: state.form,
        i18nState: state.i18nState
    }
    return appReducer(state, action)
}

export default rootReducer
