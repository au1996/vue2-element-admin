export default {
  inserted(el) {
    const rect = el.parentNode.getBoundingClientRect()
    const parentWidth = rect.width
    const parentHeight = rect.height
    el.parentNode.style.position = 'relative'
    el.style.position = 'absolute'
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      const disx = e.pageX - el.offsetLeft
      const disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        const maxX = parentWidth - parseInt(window.getComputedStyle(el).width)
        const maxY = parentHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}
