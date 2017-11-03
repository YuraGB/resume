import React from 'react';

export const SectionHobbies = ({hobbies}) => {
    return(
        <section className="tab hobbies">
            <h2>{hobbies.title}</h2>
            {  hobbies.list ?
                (   <table>
                    <tbody>
                    {hobbies.list.map( (hobby, key) =>
                        (
                            <tr key={key}>
                                <td>
                                    <img src={hobby.picture} alt=""/>
                                </td>
                                <td>
                                    <ul >
                                        <li><h3>Hobby: <em>{hobby.name}</em></h3></li>
                                        <li><h4><em>{hobby.text}</em></h4></li>
                                        <li><h4>Period: <em>{hobby.period}</em></h4></li>
                                        { hobby.language?(<li><h4>language: <em>{hobby.language}</em></h4></li>):
                                            hobby.favorite?(<li><h4>favorite: <em>{hobby.favorite}</em></h4></li>):
                                                hobby.frameworks?(<li><h4>frameworks/libraries: <em>{hobby.frameworks}</em></h4></li>):<br/>}
                                    </ul>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>):[]}

        </section>

    );
};