const _toogle_title = (flags, index) => {
    const newFlags = Object.assign({}, flags, {isTitleEditing:true, focusIndex: index})
    return newFlags
}

const _toogle_content = (flags, index) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:true, focusIndex: index})
    return newFlags
}

const _update_content = (flags) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:false, isTitleEditing: false})
    return newFlags
}

const _update_title = (flags) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:false, isTitleEditing: false})
    return newFlags
}

function edit(state = {isContentEditing:false, isTitleEditing: false, focusIndex: -1}, action){
  switch(action.type){
    case 'UPDATE_TITLE':
      return _update_title(state)
    case 'UPDATE_CONTENT':
      return _update_content(state)
    case 'TOOGLE_TITLE':
      return _toogle_title(state, action.idx)
    case 'TOOGLE_CONTENT':
      return _toogle_content(state, action.idx)
    default:
      return state
  }
}

export default edit