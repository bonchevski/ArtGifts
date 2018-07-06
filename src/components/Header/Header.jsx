import React, {Component} from 'react';
import './Header.css';
import BigNav from '../Navigation/Desktop/BigNav';

class Header extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
                <BigNav />
            </header>

        );
    }
}
export default Header;