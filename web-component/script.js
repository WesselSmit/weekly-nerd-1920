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
			alert('a')
		})
	}
}

//Define the custom element in the CustomElements list
//Link the custom element tag-name (user-card) to the class (UserCard)
window.customElements.define('user-card', UserCard)