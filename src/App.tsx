import { useState } from 'react'
import CreateEmployee from './pages/CreateEmployee'
import Employees from './pages/Employees'
import './styles/App.sass'

export type Employee = {
	firstName: string
	lastName: string
	dateOfBirth: string
	startDate: string
	department: string
	street: string
	city: string
	state: string
	zipCode: string
}

export default () => {
	const [employees, setEmployees] = useState<Array<Employee>>([])
	const [page, setPage] = useState<String>('Home')

	return <>{page === 'Home' ? <CreateEmployee setPage={setPage} setEmployees={setEmployees} /> : <Employees setPage={setPage} employees={employees} />}</>
}
