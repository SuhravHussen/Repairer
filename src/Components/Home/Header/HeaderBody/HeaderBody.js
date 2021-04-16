import React from 'react';
import './HeaderBody.css'
import headImg from '../../../../Images/Header.png'
const HeaderBody = () => {
    return (
        <div className="header-body">
            <div className="header-body-left text-white">
                <h1>Repairer Offers The Best Home Services</h1>
                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quia possimus rem repellendus perspiciatis repellat adipisci natus ab animi, magni necessitatibus maxime maiores exercitationem sit blanditiis itaque neque error eveniet.</small><br/>
                <button className="Primary-btn"> Book NOW!</button>
            </div>
            <div className="header-body-right">
                <img src={headImg} alt=""/>
            </div>
        </div>
    );
};

export default HeaderBody;