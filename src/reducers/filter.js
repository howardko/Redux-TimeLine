
function filter(state = [], action){
  switch(action.type){
    case 'FILTER_TAGS':
      return action.tags
    default:
      return state
  }
}

export default filter