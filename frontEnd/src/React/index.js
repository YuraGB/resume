import React from 'react';
import  ReactDOM  from 'react-dom';
import { HeaderComponent, Footer, BodyComponent, store } from "./Main";
import { Router, Route, IndexRedirect, browserHistory  } from "react-router";
import { Provider } from 'react-redux';


export const reactRenderMainBody = (() => {
    return ReactDOM.render(
    <Provider store={store}>
        <BodyComponent/>
    </Provider>, document.querySelector('main')
    );
})();

export const reactRenderHeader = (() => {
    return ReactDOM.render(
        <Provider store={store}>
            <HeaderComponent/>
        </Provider>, document.querySelector('header')
    );
})();

export const FooterElement = (() => {
    return ReactDOM.render(
        <Footer/>, document.querySelector('footer')
    );
})();