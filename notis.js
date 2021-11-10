const askPermissionButton = document.querySelector('#askPermissionButton')
const denyPermissionButton = document.querySelector('#denyPermissionButton')

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
		})
	})
}
