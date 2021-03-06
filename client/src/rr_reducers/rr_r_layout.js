// state argument isn't app state, only the state this reducer is
// responsible for.

export default function(state = null, action) {
    switch (action.type) {
      case 'LAYOUT_CHANGE':
        console.log("LAYOUT_CHANGE", action.payload.target.id)

    var layout = state
    var e = action.payload

    if(e.target.id.split("-")[1] === "Left") {
      console.log("LEFT Toggle");
      layout = layout.left ? { left: false, right: false, foot: false, head: false } : { left: true, right: false, foot: false, head: false } 
    } else if (e.target.id.split("-")[1] === "Right") {
      console.log("Right toggle")
      layout = layout.right ? { left: false, right: false, foot: false, head: false } : { left: false, right: true, foot: false, head: false } 
    } else if (e.target.id.split("-")[1] === "Foot") {
      console.log("foot Toggle")
      layout = layout.foot ? { left: false, right: false, foot: false, head: false } : { left: false, right: false, foot: true, head: false } 
    } else if (e.target.id.split("-")[1] === "Head") {
      console.log("head Toggle")
      layout = layout.head ? { left: false, right: false, foot: false, head: false } : { left: false, right: false, foot: false, head: true } 
    }
    return layout


      case 'SOFT_RESET':
        return {
          right: false,
          foot: false
        }
      case '@@redux/INIT':
        return {
          right: false,
          foot: false,
          left: false,
          head: false,
          fullscreen: false
        }
      default:
        return {
          right: false,
          foot: false,
          left: false,
          head: false,
          fullscreen: false
        }
    }
  }