import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

// This list doesn't change. So it's better for it to be initialized outside the
// component than for it to be initialized every time the Table component
// is mounted.
const LIST_OF_PEOPLE = [
	{
		name: "John Sina",
		birth: "11/30/2011"
	}, {
		name: "Barcy Washington",
		birth: "09/16/1992"
	}, {
		name: "Peter Parker",
		birth: "01/16/1992"
	}, {
		name: "Jimmy Shergil",
		birth: "12/12/2001"
	}, {
		name: "Alexander Alfred",
		birth: "02/09/1891"
	}, {
		name: "Krishna Gupta",
		birth: "12/01/1982"
	}, {
		name: "Sania Mirza",
		birth: "11/30/2011"
	}, {
		name: "Lata Pathak",
		birth: "10/31/1999"
	}
];

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sortedListOfPeople: LIST_OF_PEOPLE
		};
	}

	componentDidUpdate(oldProps) {
		const { sortParameter } = this.props;
		const oldSortParameter = oldProps.sortParameter;
		if (sortParameter && oldSortParameter !== sortParameter) {
			const sortedListOfPeople = LIST_OF_PEOPLE;
			if (sortParameter === 'name') {
				sortedListOfPeople.sort(this.compareNames);
			} else {
				sortedListOfPeople.sort(this.compareDates);
			}

			this.setState({ sortedListOfPeople });
		}
	}

	compareDates(person1, person2) {
		const person1Birthday = new Date(person1.birth);
		const person2Birthday = new Date(person2.birth);
		return person1Birthday.getTime() - person2Birthday.getTime();
	}

	compareNames(person1, person2) {
		const person1Name = person1.name;
		const person2Name = person2.name;
		if (person1Name < person2Name) {
			return -1;
		} else if (person1Name > person2Name) {
			return 1;
		} else {
			return 0;
		}
	}

	renderPeople() {
		const renderedListOfPeople = this.state.sortedListOfPeople.map(person => (
			<tr key={person.name}>
				<td>{person.name}</td>
				<td>{person.birth}</td>
			</tr>
		))

		return renderedListOfPeople
	}

	render() {
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{this.renderPeople()}
					</tbody>
				</table>
			</div>
		);

	}
}

Table.propTypes = {
	sortParameter: PropTypes.oneOfType([
		PropTypes.string,
		null
	]).isRequired
};

export default Table;
