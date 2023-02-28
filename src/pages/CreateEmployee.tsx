import type { Employee } from '../App'
import { useState, ChangeEvent } from 'react'
import Modal from '../components/Modal'
import SelectMenu from '../components/SelectMenu'
import { stateOptions, departmentOptions } from '../data/data.json'
import DataInput from '../components/DataInput'

type PropsType = {
	setPage: (page: String) => void
	setEmployees: (setEmployees: (prev: Array<Employee>) => Array<Employee>) => void
}

export default ({ setPage, setEmployees }: PropsType) => {
	const [employee, setEmployee] = useState<Employee>({ firstName: '', lastName: '', dateOfBirth: '', startDate: '', department: departmentOptions[0], street: '', city: '', state: stateOptions[0].value, zipCode: '' })
	const [modalOpened, setModalOpened] = useState<boolean>(false)
	const [errorModalOpened, setErrorModalOpened] = useState<boolean>(false)

	const saveEmployee = () => {
		if (!Object.values(employee).every((field) => field !== '')) {
			return setErrorModalOpened(true)
		}
		setEmployees((prev: Array<Employee>) => [...prev, employee])
		setModalOpened(true)
	}

	const handleCloseModal = () => {
		setModalOpened(false)
		setErrorModalOpened(false)
	}

	const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setEmployee((prev) => {
			return { ...prev, [name]: value }
		})
	}

	return (
		<>
			<div className='title'>
				<h1>HRnet</h1>
			</div>
			<div className='container'>
				<a href='#' onClick={() => setPage('Employees')}>
					View Current Employees
				</a>
				<h2>Create Employee</h2>
				<form action='#' id='create-employee'>
					<DataInput id='first-name' type='text' name='firstName' label='First Name' onChange={handleInputChange} />
					<DataInput id='last-name' type='text' name='lastName' label='Last Name' onChange={handleInputChange} />

					<DataInput id='date-of-birth' type='date' name='dateOfBirth' label='Date of Birth' onChange={handleInputChange} />
					<DataInput id='start-date' type='date' name='startDate' label='Start Date' onChange={handleInputChange} />

					<fieldset className='address'>
						<legend>Address</legend>

						<DataInput id='street' type='text' name='street' label='Street' onChange={handleInputChange} />
						<DataInput id='city' type='text' name='city' label='City' onChange={handleInputChange} />

						<SelectMenu id='state' name='state' label='State' data={stateOptions} onChange={handleInputChange} />

						<DataInput id='zip-code' type='text' name='zipCode' label='Zip Code' onChange={handleInputChange} />
					</fieldset>

					<SelectMenu id='department' name='department' label='Department' data={departmentOptions} onChange={handleInputChange} />
				</form>

				<button onClick={saveEmployee}>Save</button>
			</div>
			<Modal opened={modalOpened} onClose={handleCloseModal} content='Employee Created!' btnText='Close' />
			<Modal opened={errorModalOpened} onClose={handleCloseModal} content='Please fill all the fields' btnText='Close' />
		</>
	)
}
