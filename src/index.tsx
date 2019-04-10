import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persist, store } from './config/store';
import RootRoutes from './config/route';
import I18n from 'redux-i18n';
import RNLanguages from 'react-native-languages';
import { translations } from './translations';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainerComponent } from 'react-navigation';
import NavigationService from './services/navigation.service';

export interface AppState {
    systemLanguage: string
}
export interface AppProps {
}
/** main app class */
export default class App extends Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            systemLanguage: RNLanguages.language.substr(0, 2)
        };
    }
    componentDidMount() {
        //SplashScreen.hide();
    }
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persist}>
                    <I18n translations={translations} initialLang={this.state.systemLanguage} fallbackLang="en">
                        <Root>
                            <RootRoutes
                                ref={(navigatorRef: NavigationContainerComponent) => {
                                    if (navigatorRef) {
                                        NavigationService.setContainer(navigatorRef);
                                    }
                                }} />
                        </Root>
                    </I18n>
                </PersistGate>
            </Provider>
        );
    }
}