import React, {Component} from 'react';

class Header extends Component {
    render() {

        return (

            <div className="header container">
                <button className="fa fa-bars menu__button float-left" />
                <h2 className="header_title">FAROTA</h2>
                <button className="fa fa-ellipsis-h more__button float-right" />
            </div>

        );
    }
}

export default Header;