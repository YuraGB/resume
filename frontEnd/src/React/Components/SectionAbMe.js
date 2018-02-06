import React from 'react';
import PropTypes from 'prop-types';

export const SectionAbMe = ({aboutMe, err}) => {
   
    return(
        <section className="tab plForFtr">
            {
                !aboutMe.map?
                    (
                        Object.keys(aboutMe).map(( element, key) => {

                            return(
                                <ul key={key}><h3>{element}:</h3>
                                    {   aboutMe[element].map?
                                        aboutMe[element].map((e, key) =>(
                                            <li key={key}>{e};</li>
                                        )): Object.keys(aboutMe[element]).map((e, key) => (
                                            <li key={key}><a href={aboutMe[element][e]} target="_blank">{e};</a></li>
                                        ))}
                                </ul>
                            );})
                    ):
                    err?(()=>(
                        <section className="error">
                            <img src={err.img} alt="Error"/>
                            <h2>{err.text}</h2>
                        </section>))():[]}

        </section>
    );
};


SectionAbMe.propTypes = {
    aboutMe: PropTypes.array,
    err: PropTypes.object
};