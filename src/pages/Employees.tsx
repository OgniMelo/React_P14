import DataTable from '../components/DataTable'
import type { Employee } from '../App'

type PropsType = {
	setPage: (page: String) => void
	employees: Array<Employee>
}

const columns = [
	{ title: 'First Name', data: 'firstName' },
	{ title: 'Last Name', data: 'lastName' },
	{ title: 'Start Date', data: 'startDate' },
	{ title: 'Department', data: 'department' },
	{ title: 'Date of Birth', data: 'dateOfBirth' },
	{ title: 'Street', data: 'street' },
	{ title: 'City', data: 'city' },
	{ title: 'State', data: 'state' },
	{ title: 'Zip Code', data: 'zipCode' },
]

export default ({ setPage, employees }: PropsType) => {
	return (
		<>
			<div id='employee-div' className='container'>
				<h1>Current Employees</h1>
				<DataTable data={employees} columns={columns} />
				<a href='#' onClick={() => setPage('Home')}>
					Home
				</a>
			</div>
		</>
	)
}
