const username = document.querySelector('#name')
const surrname = document.querySelector('#surrname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const address = document.querySelector('#address')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const closeBtn = document.querySelector('.close')
const ulList = document.querySelector('.users ul')
const popup = document.querySelector('.popup')
const xIcon = document.getElementsByClassName('.x-icon')

let newUser

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
const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}
const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{2,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Email jest niepoprawyny')
	}
}
const countErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		popup.classList.add('show-popup')
		addUser()
		clearForm()
	}
}

const addUser = () => {
	newUser = document.createElement('li')
	newUser.innerHTML = `<p class="user-item"><span class="bolder">Imię:</span>${username.value}</p>
	<p class="user-item"><span class="bolder">Nazwisko:</span>${surrname.value}</p>
	
	<p class="user-item"><span class="bolder">Numer telefonu:</span>${phone.value}</p>
	<p class="user-item"><span class="bolder">Adres Zamieszkania: </span>${address.value}</p>
	<p class="user-item"><span class="bolder">Adres E-mail:</span>${email.value}</p>
	<img class="x-icon delete" src="/dist/img/x.svg" alt="Delete user">`
	ulList.append(newUser)
}
const clearForm = () => {
	;[username, surrname, email, phone, address].forEach(el => {
		el.value = ''
		clearError(el)
	})
}
const closePopup = () => {
	popup.classList.remove('show-popup')
}

const deleteUser = e => {
	if (e.target.matches('.delete')) {
		e.target.closest('li').remove()
	} else {
		return
	}
}

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	;[username, surrname, email, phone, address].forEach(el => {
		el.value = ''
		clearError(el)
	})
})
sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, surrname, email, phone, address])
	checkMail(email)
	countErrors()
})
closeBtn.addEventListener('click', e => {
	e.preventDefault()
	popup.classList.remove('show-popup')
})
ulList.addEventListener('click', deleteUser)
