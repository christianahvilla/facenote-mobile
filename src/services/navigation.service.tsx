import { NavigationActions, StackActions, NavigationContainerComponent } from 'react-navigation';
import { NavigationParams } from 'react-navigation';

let _container: NavigationContainerComponent;

const setContainer = (container: NavigationContainerComponent) => {
    _container = container;
}

const reset = (routeName: string, params?: NavigationParams) => {
    _container.dispatch(
        StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params,
                })
            ]
        })
    );
}

export default {
    setContainer,
    reset,
}