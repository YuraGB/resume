import React from 'react';

export const SectionAbMe = ({aboutMe}) => (
    <section className="tab plForFtr">
        {
            aboutMe?(
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
            ):[]
        }

    </section>
);