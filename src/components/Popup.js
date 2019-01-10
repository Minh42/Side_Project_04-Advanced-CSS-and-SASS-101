import React, { Component } from 'react';
import img1 from '../assets/img/nat-8.jpg';
import img2 from '../assets/img/nat-9.jpg';

class Popup extends Component {
    render() {
        return (
            <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={img1} alt="Tour photo" className="popup__img"/>
                        <img src={img2} alt="Tour photo" className="popup__img"/>
                    </div>
                    <div className="popup__right">
                        <a href="#section-tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                        <p className="popup__text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione officia eius ex dolor, commodi est nisi pariatur dignissimos incidunt modi deleniti nulla, id eveniet placeat similique sunt repellat velit autem.
                        </p>
                        <a href="#popup" className="btn btn--green">Book now</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;