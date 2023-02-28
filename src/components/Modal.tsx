import { useEffect, useRef } from 'react'

type PropsType = {
	opened: boolean
	onClose: () => void
	content: string
	btnText: string
}

export default ({ opened, onClose, content, btnText }: PropsType) => {
	const modal = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (opened) {
			modal.current!.showModal()
		}
	}, [opened])

	return (
		<dialog ref={modal} id='confirmation' className='modal'>
			{content}
			<form method='dialog' onSubmit={onClose}>
				<button>{btnText}</button>
			</form>
		</dialog>
	)
}
