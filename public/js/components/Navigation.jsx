import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';

import '../../sass/navigation.scss';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    setNavTronHeaderAnim(scrollPos) {
        let navbarTronHeader = document.getElementById('navbar-tron-header');
        let normalClass = 'navbar-tron-header-appear';
        let disappearClass = 'navbar-tron-header-disappear';

        console.log(scrollPos)
        if (scrollPos > 1) {
            if (navbarTronHeader.className.includes(normalClass)) {
                // navbarTronHeader.className += ` ${disappearClass}`;
                navbarTronHeader.className = disappearClass;
            }
        } else {
                navbarTronHeader.className = normalClass; 
        }
    }

    setMainNavShadow(scrollPos) {
        let mainNavbar = document.getElementById('main-navbar');
        let shadowClass = 'main-navbar-shadow';

        if (scrollPos > 168) {
            if (!mainNavbar.className.includes(shadowClass)) {
                mainNavbar.className += ` ${shadowClass}`;
            }
        } else {
            if (mainNavbar.className.includes(shadowClass)) {
                let newClassName = mainNavbar.className.replace(shadowClass, '').trim();
                mainNavbar.className = newClassName; 
            }
        }
    }

    handleScroll() {
        let bodyScrollPosition = document.getElementsByTagName("body")[0].scrollTop;

        this.setMainNavShadow(bodyScrollPosition);
        this.setNavTronHeaderAnim(bodyScrollPosition);
    }

    handleLogoutClick() {
        let { logoutUser } = this.props;
        logoutUser();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.userLogin !== nextProps.userLogin;
    }

    render() {
        let { userLogin } = this.props;

        return (
            <div>
                {
                    (userLogin === '') ?
                        <Breadcrumb id="main-navbar" ref="fixedNav">
                            <Breadcrumb.Item >
                                <Link to="/login">
                                    LOGIN
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Link to="/signup">
                                    SIGN UP
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb> :
                        <Breadcrumb id="main-navbar" ref="fixedNav">
                            <Breadcrumb.Item >
                                <Link to="/notepad">
                                    { userLogin.toUpperCase() }
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item onClick={this.handleLogoutClick} >
                                <Link to="/login">
                                    LOGOUT
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                }
                <Jumbotron id="navbar-tron">
                    <h1 
                        id="navbar-tron-header" 
                        className="navbar-tron-header-appear"
                    >
                        Welcome!
                    </h1>
                </Jumbotron>
            </div>
        );
    }
}

Navigation.propTypes = {
    // value: PropTypes.string.isRequired
};

export default Navigation;