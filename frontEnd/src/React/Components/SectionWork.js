import React from 'react';
import PropTypes from 'prop-types';

export const SectionWork = ({work, err}) => {
  return (
      <section className="tab work">
          {work.title?(<h2>{work.title}</h2>):[]}
          { work.list ?
              (   <table>
                  <tbody>
                  {work.list.map( (job, key) =>
                      (
                          <tr key={key}>
                              <td>
                                  <img src={job.picture} alt=""/>
                              </td>
                              <td>
                                  <ul >
                                      <li><h3>Company: <em>{job.name}</em></h3></li>
                                      <li><h4>Period: <em>{job.period}</em></h4></li>
                                      <li><h4>Profession: <em>{job.profession}</em></h4></li>
                                      <li><br/>
                                          <a href={job.URL}>Site of the firm</a></li>

                                  </ul>
                              </td>
                          </tr>
                      )
                  )}
                  </tbody>
              </table>):

              err?(()=>(
                  <section className="error">
                    <img src={err.img} alt="Error"/>
                    <h2>{err.text}</h2>
                  </section>))():[]}
      </section>
  );
};


SectionWork.propTypes = {
	err: PropTypes.object,
    work: PropTypes.array
};