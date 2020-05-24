//Create a class and give it a name (UserCard).
//By extending the HTMLElement class we can inherit it's properties
class UserCard extends HTMLElement {

	//Automatically runs code inside contructor()
	constructor() {

		//Inherits properties of parent class (HTMLElement)
		super()

		//Now we have access to HTML tag properties such as innerHTML

		//Assign text to the element
		this.innerHTML = "Wessel Smit"

		this.addEventListener('click', () => {
			alert('you clicked my custom element')
		})
	}
}

//Define the custom element in the CustomElements list
//Link the custom element tag-name (user-card) to the class (UserCard)
window.customElements.define('user-card', UserCard)







// const shadowDOM = document.getElementById('example')

// shadowDOM.attachShadow({
// 	mode: 'open'
// })

// shadowDOM.shadowRoot.innerHTML = `
// 	<p>Paragraph in Shadow DOM</p>
// 	<button>Button in Shadow DOM</button>
// `








// console.log("All paragraphs found:", document.querySelectorAll('p'))

const users = [{
	firstname: "John",
	surname: "Doe"
}, {
	firstname: "Anne",
	surname: "Smith"
}, {
	firstname: "Dan",
	surname: "Evans"
}]

const template = document.querySelector('template')

function userCards() {
	users.forEach(user => {
		const card = document.importNode(template.content, true)

		const firstName = card.querySelector('.firstname')
		firstName.textContent = user.firstName

		console.log(card)
	})
}

userCards()