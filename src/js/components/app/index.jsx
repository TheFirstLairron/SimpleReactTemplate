import React from "react";
import CSSModules from 'react-css-modules';

import styles from './styles.css'

class App extends React.Component {
    render() {
        return(
            <div styleName="container">Centered Text</div>
        );
    }    
}

export default CSSModules(App, styles);