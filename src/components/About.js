import React, { Component } from 'react';
import photo1 from '../assets/img/nat-1-large.jpg';
import photo2 from '../assets/img/nat-2-large.jpg';
import photo3 from '../assets/img/nat-3-large.jpg';

class About extends Component {
    render() {
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You're going to fall in love with nature
                        </h3>
                        <p className="paragraph">
                            ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio possimus, sint saepe beatae nemo enim eius, tempore incidunt iste vero nostrum quisquam ipsam sed, commodi laboriosam aliquid eligendi ratione?
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventures like you never have before
                        </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis similique facilis ullam quia 
                        </p>
                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={photo1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={photo2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={photo3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;