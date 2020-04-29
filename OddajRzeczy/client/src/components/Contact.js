import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <Fragment>
            <section className="contact" id='contact'>
                <div className="contact-form">
                    <div className="contact-form-title"><span>Skontaktuj sie z nami</span></div>
                    <div className="contact-form-logo"></div>
                    <form className="contact-form-inputs">
                        <div className="form-group-upper">
                            <div>
                                <p>Wpisz swoje imie</p>
                                <input type="text"/>
                            </div>
                            <div>
                                <p>Wpisz swój email</p>
                                <input type="email"/>
                            </div>
                        </div>
                        <div className="form-group-lower">
                            <p>Wpisz swoja wiadomość</p>
                            <textarea></textarea>
                        </div>
                        <input type="submit" value="Wyslij" className="btn btn-primary"/>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

Contact.propTypes = {

}

export default Contact;
