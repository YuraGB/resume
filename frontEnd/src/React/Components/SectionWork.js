import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


export class SectionWork extends PureComponent {
	constructor (props) {
		super(props)
	}
	
	render() {
		const {work, err} = this.props;
		
		return(
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
		)
	}
}

SectionWork.propTypes = {
	err: PropTypes.array,
	work: PropTypes.object
};