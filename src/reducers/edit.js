const _toogle_title = (flags, index) => {
    const newFlags = Object.assign({}, flags, {isTitleEditing:true, focusIndex: index})
    return newFlags
}

const _toogle_content = (flags, index) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:true, focusIndex: index})
    return newFlags
}

const _toogle_tag = (flags, index) => {
    const newFlags = Object.assign({}, flags, {isTagEditing:true, focusIndex: index})
    return newFlags
}

const _update_content = (flags) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:false, isTitleEditing: false, isTagEditing:false})
    return newFlags
}

const _update_title = (flags) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:false, isTitleEditing: false, isTagEditing:false})
    return newFlags
}

const _update_tag = (flags) => {
    const newFlags = Object.assign({}, flags, {isContentEditing:false, isTitleEditing: false, isTagEditing:false})
    return newFlags
}

function edit(state = {isContentEditing:false, isTitleEditing: false, isTagEditing:false, focusIndex: -1}, action){
  switch(action.type){
    case 'UPDATE_TITLE':
      return _update_title(state)
    case 'UPDATE_CONTENT':
      return _update_content(state)
    case 'UPDATE_TAG':
      return _update_tag(state)
    case 'TOOGLE_TITLE':
      return _toogle_title(state, action.idx)
    case 'TOOGLE_CONTENT':
      return _toogle_content(state, action.idx)
    case 'TOOGLE_TAG':
      return _toogle_tag(state, action.idx)
    default:
      return state
  }
}

export default edit