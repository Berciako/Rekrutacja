const username = document.querySelector('#name')
const surrname = document.querySelector('#surrname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const address = document.querySelector('#address')
const participantName = document.querySelector('#participant-name')
const participantSurrname = document.querySelector('#participant-surrname')
const participantEmail = document.querySelector('#participant-email')

const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup')
const errorInfo = document.querySelector('.error-info')
const addUserBtn = document.querySelector('.add-user')
const userDatas = document.querySelector('.user-datas')

//



// DODAWANIE UCZESTNIKÓW

let participant
let allInputs
let allMails = document.getElementsByClassName('mail')


const addParticipant = e => {
	e.preventDefault()
	participant = document.createElement('div')
	participant.classList.add('user-data')
	participant.innerHTML = `
	  <img class="x-icon" src="/dist/img/x.svg" alt="usuń użytkownika">
	<div class="form-box">
	 <label for="participant-name">Imię uczestnika:</label>
								<input type="text" id="participant-name" placeholder="Podaj imię uczestnika">
								<p class="error-text">error</p>
							</div>
							<div class="form-box">
								<label for="participant-surrname">Nazwisko Uczestnika:</label>
								<input type="text" id="participant-surrname" placeholder="Podaj nazwisko uczestnika">
								<p class="error-text">error</p>
							</div>
							<div class="form-box">
								<label for="participant-email">Email uczestnika:</label>
								<input type="text" id="participant-email" class="mail" placeholder="Podaj email uczestnika">
								<p class="error-text">error</p>
							</div>
							<div class="line"></div>`
	userDatas.append(participant)
}

//

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

// Mail

const checkMail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	Array.from(allMails).forEach(el => {
		if (re.test(el.value)) {
			clearError(el)
		} else {
			showError(el, 'Email jest niepoprawyny')
		}
	})
}

//

const countErrors = () => {
	const formBoxes = document.querySelectorAll('.form-box')
	let errorCount = 0
	formBoxes.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		popup.classList.add('show-popup')
		hideError()
		clearForm()
	}
}

const hideError = () => {
	errorInfo.style.display = 'none'
}

const clearForm = () => {
	allInputs.forEach(el => {
		el.value = ''
		clearError(el)
	})
}

const closePopup = () => {
	popup.classList.remove('show-popup')
}

// USUWANIE UCZESTNIKÓW

const checkClick = e => {
	if (e.target.matches('img')) {
		deleteParticipant(e)
	} else {
		return
	}
}

const deleteParticipant = e => {
	e.target.closest('div').remove()
}

//

// Mail Checker

const lookForMail = () => {
	let testMails = [...document.getElementsByClassName('mail')].map(item => item.value)
	testMails.forEach(el =>{
		if(testMails.includes(el.value, el)){
			console.log('istnieje');
		} else{
			console.log('nie istnieje');
		}
	})
}

//
clearBtn.addEventListener('click', e => {
	e.preventDefault()
	allInputs = document.querySelectorAll('.form-box input')
	allInputs.forEach(el => {
		el.value = ''
		clearError(el)
	})
})

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	allInputs = document.querySelectorAll('.form-box input')
	allInputs.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
	checkMail()
	lookForMail()
	countErrors()
})

closeBtn.addEventListener('click', e => {
	e.preventDefault()
	popup.classList.remove('show-popup')
})

addUserBtn.addEventListener('click', addParticipant)
userDatas.addEventListener('click', checkClick)
