import { ChangeEvent } from 'react'

type PropsType = {
	id: string
	type: 'text' | 'number' | 'date'
	name: string
	label: string
	onChange: ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => void
}

export default ({ id, type, name, label, onChange }: PropsType) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} name={name} onChange={onChange} />
		</>
	)
}
