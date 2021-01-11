const debounce = (func, wait, immediate) => {
  let timeout

  return (...args) => {
    const context = this

    const later = () => {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, wait || 200)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

export const expandChildStyle = (child, style) =>
  Object.assign(Object.assign({}, child.props.style), style)

export default debounce
