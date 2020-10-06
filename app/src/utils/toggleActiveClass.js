export const toggleActiveClass = (e, element) => {
   const elements = document.querySelectorAll(element)
   elements.forEach(element => element.classList.remove("active"))
   e.target.classList.add("active")
}