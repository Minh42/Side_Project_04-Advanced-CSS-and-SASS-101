import React, { Component } from 'react';
import person1 from '../assets/img/nat-8.jpg';
import person2 from '../assets/img/nat-9.jpg';
import video1 from '../assets/img/video.mp4';
import video2 from '../assets/img/video.webm';

class Stories extends Component {
    render() {
        return (
            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video1} type="video/mp4"/>
                        <source src={video2} type="video/webm"/>
                        Your browser is not supported!
                    </video>
                </div>
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person1} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">
                                Mary Smith
                            </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                I had the best week ever with my family
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur corporis iste reprehenderit, cum dicta autem tempore ducimus, minima alias magnam voluptatem delectus sunt incidunt! Itaque quis ratione et culpa! cum dicta autem tempore ducimus, minima alias magnam voluptatem delectus sunt!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person2} alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">
                                Jack Wilson
                            </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Wow! My life is completely different now
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur corporis iste reprehenderit, cum dicta autem tempore ducimus, minima alias magnam voluptatem delectus sunt incidunt! Itaque quis ratione et culpa! cum dicta autem tempore ducimus, minima alias magnam voluptatem delectus sunt!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn-text">Read all stories &rarr;</a>
                </div>
            </section>
        )
    }

}

export default Stories;