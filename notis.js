const askPermissionButton = document.querySelector('#askPermissionButton')
const showNotificationButton = document.querySelector('#showNotificationButton')
const hideNotificationButton = document.querySelector('#hideNotificationButton')
const messageParagraph = document.querySelector('#message')

const state = {
	notis: null
}

console.log('Hello world');
if( 'Notification' in window ) {
	console.log('Vi har Notification');
	
	/* Detta är inte som respons till något användaren gjort - BAD PRACTICE
	Notification.requestPermission().then(result => {
		console.log('Får vi använda notiser? ', result);
	})
	*/
	askPermissionButton.addEventListener('click', () => {
		Notification.requestPermission().then(result => {
			console.log('Får vi använda notiser? ', result);
			// Svaret kan vara: granted, denied, default
		})
	})

	showNotificationButton.addEventListener('click', () => {
		let random = Math.floor(Math.random() * 15 - 5)
		let message = ''
		if( random > 0 ) message = `Bussen går om ${random} minuter.`
		else if( random === 0 ) message = 'Bussen går nu!!'
		else message = `Du missade bussen med ${-random} minuter.`

		state.notis = new Notification(message, {
			body: message, image: 'nedladdning.png'
		})
		
		state.notis.addEventListener('click', event => {
			console.log('click', event);
			messageParagraph.innerHTML = `Du klickade på notisen med texten: <br>` + event.target.body
		})
		state.notis.addEventListener('close', () => {  console.log('close'); })
		state.notis.addEventListener('error', () => {  console.log('error'); })
		state.notis.addEventListener('show', () => {  console.log('show'); })
		// messageParagraph
	})

	hideNotificationButton.addEventListener('click', () => {
		if( state.notis ) state.notis.close()
		// Nyare syntax: state.notis?.close()
		// För att kunna klicka flera gånger måste state.notis vara en array
	})
}
