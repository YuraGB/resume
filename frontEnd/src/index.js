import "../style/index.css";
//import { reactRenderMainBody, reactRenderHeader } from "./React/index";
import  './Animation/animation';

import React from 'react';
import  ReactDOM  from 'react-dom';
import { HeaderComponent, Footer, BodyComponent, store } from "./React/Main";
import { Provider } from 'react-redux';


ReactDOM.render(
	<Provider store={store}>
		<BodyComponent/>
	</Provider>, document.querySelector('main')
);

ReactDOM.render(
	<Provider store={store}>
		<HeaderComponent/>
	</Provider>, document.querySelector('header')
);


ReactDOM.render(
	<Footer/>, document.querySelector('footer')
);

