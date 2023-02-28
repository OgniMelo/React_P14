import { ChangeEvent } from 'react'

type PropsType = {
	id: string
	name: string
	label: string
	data: Array<string> | Array<{ option: string; value: string }>
	onChange: ({ target: { name, value } }: ChangeEvent<HTMLSelectElement>) => void
}

export default ({ id, name, label, data, onChange }: PropsType) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<select id={id} name={name} onChange={onChange}>
				{data.map((data, index) => (
					<option key={index} value={typeof data === 'string' ? data : data.value}>
						{typeof data === 'string' ? data : data.option}
					</option>
				))}
			</select>
		</>
	)
}
