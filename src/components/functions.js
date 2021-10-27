/**
 * Toggle className (toggleClassName) of element with className (elementClassName)
 * @param {string} elementClassName 
 * @param {string} toggleClassName 
 * @returns void
 */
export const toggleElementClass = ( elementClassName, toggleClassName ) => {
  const element = document.querySelector(`.${elementClassName}`);
  element.classList.toggle(toggleClassName);
}