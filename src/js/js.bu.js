// const username = document.querySelector('#name')
// const surrname = document.querySelector('#surrname')
// const email = document.querySelector('#email')
// const phone = document.querySelector('#phone')
// const address = document.querySelector('#address')
// const participantName = document.querySelector('#participant-name')
// const participantSurrname = document.querySelector('#participant-surrname')
// const participantEmail = document.querySelector('#participant-email')

// const sendBtn = document.querySelector('.send')
// const clearBtn = document.querySelector('.clear')
// const closeBtn = document.querySelector('.close')
// // const ulList = document.querySelector('.users ul')
// const popup = document.querySelector('.popup')
// // const xIcon = document.getElementsByClassName('.x-icon')
// const errorInfo = document.querySelector('.error-info')
// const addUserBtn = document.querySelector('.add-user')

// //

// const userDatas = document.querySelector('.user-datas')

// let participant
// let newUser
// let newMail
// let newUserMail

// const showError = (input, msg) => {
// 	const formBox = input.parentElement
// 	const errorMsg = formBox.querySelector('.error-text')
// 	formBox.classList.add('error')
// 	errorMsg.textContent = msg
// }
// const clearError = input => {
// 	const formBox = input.parentElement
// 	formBox.classList.remove('error')
// }
// const checkForm = input => {
// 	input.forEach(el => {
// 		if (el.value === '') {
// 			showError(el, el.placeholder)
// 		} else {
// 			clearError(el)
// 		}
// 	})
// }

// const checkMail = email => {
// 	const re =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	if (re.test(email.value)) {
// 		clearError(email)
// 	} else {
// 		showError(email, 'Email jest niepoprawyny')
// 	}
// }
// const checkParticipantMail = email => {
// 	const re =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	if (re.test(email.value)) {
// 		clearError(email)
// 	} else {
// 		showError(email, 'Email jest niepoprawyny')
// 	}
// }
// const countErrors = () => {
// 	const allInputs = document.querySelectorAll('.form-box')
// 	let errorCount = 0
// 	allInputs.forEach(el => {
// 		if (el.classList.contains('error')) {
// 			errorCount++
// 		}
// 	})
// 	if (errorCount === 0) {
// 		popup.classList.add('show-popup')
// 		addUser()
// 		hideError()
// 		clearForm()
// 	}
// }
// const hideError = () => {
// 	errorInfo.style.display = 'none'
// }
// const addParticipant = e => {
// 	e.preventDefault()
// 	participant = document.createElement('div')
// 	participant.classList.add('user-data')
// 	participant.innerHTML = `
// 	<div class="form-box">
// 	<label for="participant-name">Imię uczestnika:</label>
// 	<input type="text" id="participant-name" placeholder="Podaj imię uczestnika">
// 	<p class="error-text">error</p>
// </div>
// <div class="form-box">
// 	<label for="participant-surrname">Nazwisko Uczestnika:</label>
// 	<input type="text" id="participant-surrname" placeholder="Podaj nazwisko uczestnika">
// 	<p class="error-text">error</p>
// </div>
// <div class="form-box">
// 	<label for="participant-email">Email uczestnika:</label>
// 	<input type="text" id="participant-email" placeholder="Podaj email uczestnika">
// 	<p class="error-text">error</p>
// </div>`
// 	userDatas.append(participant)
// }
// // const addUser = () => {
// // 	newUser = document.createElement('li')
// // 	newUser.innerHTML = `
// // 	<p class="user-item"><span class="bolder">Imię:</span>${username.value}</p>
// // 	<p class="user-item"><span class="bolder">Nazwisko:</span>${surrname.value}</p>
// // 	<p class="user-item"><span class="bolder">Numer telefonu:</span>${phone.value}</p>
// // 	<p class="user-item"><span class="bolder">Adres Zamieszkania: </span>${address.value}</p>
// // 	<p class="user-item"><span class="bolder mail">Adres E-mail:</span>${email.value}</p>
// // 	<img class="x-icon delete" src="/dist/img/x.svg" alt="Delete user">
// // 	<div class="line"></div>
// // 	<div class="participant-box">
// // 		<p class="participant-heading">Dane uczestnika</p>
// // 		<div class="participant-data">
// // 			<p class="user-item"><span class="bolder">Imię uczestnika: </span>${participantName.value}</p>
// // 			<p class="user-item"><span class="bolder">Nazwisko uczestnika: </span>${participantSurrname.value}</p>
// // 			<p class="user-item"><span class="bolder mail">Email uczestnika: </span>${participantEmail.value}</p>
// // 		</div>
// // 	</div>
// // `
// // 	ulList.append(newUser)
// // }
// const clearForm = () => {
// 	;[
// 		username,
// 		surrname,
// 		email,
// 		phone,
// 		address,
// 		participantName,
// 		participantSurrname,
// 		participantEmail,
// 	].forEach(el => {
// 		el.value = ''
// 		clearError(el)
// 	})
// }
// const closePopup = () => {
// 	popup.classList.remove('show-popup')
// }

// const checkClick = e => {
// 	if (e.target.matches('.delete')) {
// 		deleteUser(e)
// 	} else {
// 		return
// 	}
// }
// // const deleteUser = e => {
// // 	e.target.closest('li').remove()
// // 	const allUsers = ulList.querySelectorAll('li')
// // 	if (allUsers.length === 0) {
// // 		errorInfo.style.display = 'block'
// // 	}
// // }

// const lookForMail = (mail, partMail) => {
// 	const allMails = document.querySelectorAll('.mail')
// 	allMails.forEach(el => {
// 		if (el.nextSibling.textContent === mail.value) {
// 			showError(mail, 'Podano już tego maila')
// 		} else if (el.nextSibling.textContent === partMail.value) {
// 			showError(partMail, 'Podano już tego maila')
// 		}
// 	})
// }

// clearBtn.addEventListener('click', e => {
// 	e.preventDefault()
// 	;[
// 		username,
// 		surrname,
// 		email,
// 		phone,
// 		address,
// 		participantSurrname,
// 		participantEmail,
// 		participantName,
// 	].forEach(el => {
// 		el.value = ''
// 		clearError(el)
// 	})
// })
// sendBtn.addEventListener('click', e => {
// 	e.preventDefault()
// 	checkForm([
// 		username,
// 		surrname,
// 		email,
// 		phone,
// 		address,
// 		participantName,
// 		participantSurrname,
// 		participantEmail,
// 	])
// 	checkMail(email)
// 	checkParticipantMail(participantEmail)
// 	lookForMail(email, participantEmail)
// 	countErrors()
// })
// closeBtn.addEventListener('click', e => {
// 	e.preventDefault()
// 	popup.classList.remove('show-popup')
// })
// // ulList.addEventListener('click', checkClick)
// addUserBtn.addEventListener('click', addParticipant)


// // wersja 2
// const username = document.querySelector('#name')
// const surrname = document.querySelector('#surrname')
// const email = document.querySelector('#email')
// const phone = document.querySelector('#phone')
// const address = document.querySelector('#address')
// const participantName = document.querySelector('#participant-name')
// const participantSurrname = document.querySelector('#participant-surrname')
// const participantEmail = document.querySelector('#participant-email')

// const sendBtn = document.querySelector('.send')
// const clearBtn = document.querySelector('.clear')
// const closeBtn = document.querySelector('.close')
// // const ulList = document.querySelector('.users ul')
// const popup = document.querySelector('.popup')
// const xIcon = document.querySelector('.x-icon')
// const errorInfo = document.querySelector('.error-info')
// const addUserBtn = document.querySelector('.add-user')

// //

// const userDatas = document.querySelector('.user-datas')

// let participant
// let newUser
// let newMail
// let newUserMail

// const addParticipant = e => {
// 	e.preventDefault()
// 	participant = document.createElement('div')
// 	participant.classList.add('user-data')
// 	participant.innerHTML = `
// 	  <img class="x-icon" src="/dist/img/x.svg" alt="usuń użytkownika">
// 	<div class="form-box">
// 	 <label for="participant-name">Imię uczestnika:</label>
// 								<input type="text" id="participant-name" placeholder="Podaj imię uczestnika">
// 								<p class="error-text">error</p>
// 							</div>
// 							<div class="form-box">
// 								<label for="participant-surrname">Nazwisko Uczestnika:</label>
// 								<input type="text" id="participant-surrname" placeholder="Podaj nazwisko uczestnika">
// 								<p class="error-text">error</p>
// 							</div>
// 							<div class="form-box">
// 								<label for="participant-email">Email uczestnika:</label>
// 								<input type="text" id="participant-email" placeholder="Podaj email uczestnika">
// 								<p class="error-text">error</p>
// 							</div>
// 							<div class="line"></div>`
// 	userDatas.append(participant)
// }

// const showError = (input, msg) => {
// 	const formBox = input.parentElement
// 	const errorMsg = formBox.querySelector('.error-text')
// 	formBox.classList.add('error')
// 	errorMsg.textContent = msg
// }
// const clearError = input => {
// 	const formBox = input.parentElement
// 	formBox.classList.remove('error')
// }
// const checkForm = input => {
// 	input.forEach(el => {
// 		if (el.value === '') {
// 			showError(el, el.placeholder)
// 		} else {
// 			clearError(el)
// 		}
// 	})
// }

// const checkMail = email => {
// 	const re =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	if (re.test(email.value)) {
// 		clearError(email)
// 	} else {
// 		showError(email, 'Email jest niepoprawyny')
// 	}
// }
// const checkParticipantMail = email => {
// 	const re =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	if (re.test(email.value)) {
// 		clearError(email)
// 	} else {
// 		showError(email, 'Email jest niepoprawyny')
// 	}
// }
// const countErrors = () => {
// 	const allInputs = document.querySelectorAll('.form-box')
// 	let errorCount = 0
// 	allInputs.forEach(el => {
// 		if (el.classList.contains('error')) {
// 			errorCount++
// 		}
// 	})
// 	if (errorCount === 0) {
// 		popup.classList.add('show-popup')
// 		addUser()
// 		hideError()
// 		clearForm()
// 	}
// }
// const hideError = () => {
// 	errorInfo.style.display = 'none'
// }
// const clearForm = () => {
// 	;[
// 		username,
// 		surrname,
// 		email,
// 		phone,
// 		address,
// 		participantName,
// 		participantSurrname,
// 		participantEmail,
// 	].forEach(el => {
// 		el.value = ''
// 		clearError(el)
// 	})
// }
// const closePopup = () => {
// 	popup.classList.remove('show-popup')
// }


// const deleteParticipant = e => {
// 	e.target.parentElement.remove()
// 	console.log(e.target.parentElement)
// }

// const lookForMail = (mail, partMail) => {
// 	const allMails = document.querySelectorAll('.mail')
// 	allMails.forEach(el => {
// 		if (el.nextSibling.textContent === mail.value) {
// 			showError(mail, 'Podano już tego maila')
// 		} else if (el.nextSibling.textContent === partMail.value) {
// 			showError(partMail, 'Podano już tego maila')
// 		}
// 	})
// }

// clearBtn.addEventListener('click', e => {
// 	e.preventDefault()
// 	;[
// 		username,
// 		surrname,
// 		email,
// 		phone,
// 		address,
// 		participantSurrname,
// 		participantEmail,
// 		participantName,
// 	].forEach(el => {
// 		el.value = ''
// 		clearError(el)
// 	})
// })
// sendBtn.addEventListener('click', e => {
// 	e.preventDefault()
// 	checkForm([
// 		username,
// 		surrname,
// 		email,
// 		phone,
// 		address,
// 		participantName,
// 		participantSurrname,
// 		participantEmail,
// 	])
// 	checkMail(email)
// 	checkParticipantMail(participantEmail)
// 	lookForMail(email, participantEmail)
// 	countErrors()
// })
// closeBtn.addEventListener('click', e => {
// 	e.preventDefault()
// 	popup.classList.remove('show-popup')
// })
// addUserBtn.addEventListener('click', addParticipant)
// xIcon.addEventListener('click', deleteParticipant)
