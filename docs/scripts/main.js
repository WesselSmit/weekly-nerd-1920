//Change github icon on hover
const github = document.getElementById('github')

github.addEventListener('mouseover', () => github.src = "docs/media/images/github_logo_blue.svg")
github.addEventListener('mouseout', () => github.src = "docs/media/images/github_logo_black.svg")