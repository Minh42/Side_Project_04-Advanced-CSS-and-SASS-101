import React, { Component } from 'react';
import logo1x from '../assets/img/logo-green-1x.png';
import logo2x from '../assets/img/logo-green-2x.png';
import logoS1x from '../assets/img/logo-green-small-1x.png';
import logoS2x from '../assets/img/logo-green-small-2x.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <picture className="footer__logo">
                        <source srcSet={`${logoS1x} 1x, ${logoS2x} 2x`} media="(max-width: 37.5em)"/>
                        <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Full logo"/>
                    </picture>
                </div>
                <div class="row">
                    <div class="col-1-of-2">
                        <div class="footer__navigation">
                            <ul class="footer__list">
                                <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1-of-2">
                        <p class="footer__copyright">
                            Built by <a href="#" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                            Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                            and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                            Schmedtmann, is of course highly appreciated!
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;