import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

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

        if (scrollPos > 1) {
            if (navbarTronHeader.className.includes(normalClass)) {
                navbarTronHeader.className = disappearClass;
            }
        } else {
                navbarTronHeader.className = normalClass; 
        }
    }

    setMainNavShadow(scrollPos) {
        let mainNavbar = document.getElementById('main-navbar');
        let shadowClass = 'main-navbar-shadow';
        let includesClass = mainNavbar.className.includes(shadowClass);

        if (scrollPos > 168) {
            if (!includesClass) {
                mainNavbar.className += ` ${shadowClass}`;
            }
        } else {
            if (includesClass) {
                let newClassName = mainNavbar.className.replace(shadowClass, '').trim();
                mainNavbar.className = newClassName; 
            }
        }
    }

    setNavbarTronStaticShadow(scrollPos) {
        let navbarTron = document.getElementById('navbar-tron');
        let staticShadowClass = 'navbar-tron-static-shadow';
        let includesClass = navbarTron.className.includes(staticShadowClass);

        if (scrollPos >= 168) {
            if (includesClass) {
                let newClassName = navbarTron.className.replace(staticShadowClass, '').trim();
                navbarTron.className = newClassName;
            }
        } else {
            if (!includesClass) {
                navbarTron.className += ` ${staticShadowClass}`;
            }
        }
    }

    handleScroll() {
        let bodyScrollPosition = document.getElementsByTagName("body")[0].scrollTop;

        this.setMainNavShadow(bodyScrollPosition);
        this.setNavTronHeaderAnim(bodyScrollPosition);
        this.setNavbarTronStaticShadow(bodyScrollPosition);
    }

    handleLogoutClick() {
        let { logoutUser } = this.props;
        logoutUser();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.userLogin !== nextProps.userLogin ||
                this.props.navbarTitle !== nextProps.navbarTitle;
    }

    render() {
        let { userLogin, whichClassName, navbarTitle } = this.props;

        return (
            <div>
                {
                    (userLogin === '') ?
                        <Breadcrumb id="main-navbar" className={ whichClassName }>
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
                        <Breadcrumb id="main-navbar" className={ whichClassName }>
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
                <Jumbotron 
                    id="navbar-tron" 
                    className={ `${whichClassName} navbar-tron-static-shadow` }
                >
                    <h1 
                        id="navbar-tron-header" 
                        className="navbar-tron-header-appear"
                    >
                        { navbarTitle }
                    </h1>
                </Jumbotron>
            </div>
        );
    }
}

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired, 
    userLogin: PropTypes.string.isRequired, 
    whichClassName: PropTypes.string.isRequired, 
    navbarTitle: PropTypes.string.isRequired
};

export default Navigation;