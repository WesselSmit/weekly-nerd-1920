//Change github icon on hover
const github = document.getElementById('github')

github.addEventListener('mouseover', () => github.src = "src/media/images/github_logo_blue.svg")
github.addEventListener('mouseout', () => github.src = "src/media/images/github_logo_black.svg")



//Show detail page of clicked article
const articles = document.querySelectorAll('article')

articles.forEach(article => {
	article.addEventListener('click', () => {
		const transitionEl = document.getElementById('page-transition')

		transitionEl.classList.add('show')
		setElementPosition(transitionEl, article)



		// transitionEl.addEventListener('animationend', () => transitionEl.classList.remove('show'))
	})
})

function setElementPosition(element, article) {
	const card = article.getBoundingClientRect()

	element.style.top = ((card.height / 2) - 10) + card.top + "px"
	element.style.left = ((card.width / 2) - 5) + card.left + "px"
}