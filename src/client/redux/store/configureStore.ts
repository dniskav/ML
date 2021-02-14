import { createStore, compose, applyMiddleware, Store } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import { IApplicationState } from '../types';

export default function configureStore(initialState: IApplicationState): Store<IApplicationState> {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(thunk));
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}
