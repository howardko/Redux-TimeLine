const _load_user = (user, displayName, email, photoURL, uid, token) => {
    const newUser = Object.assign({}, user, {displayName, email, photoURL, uid, token, signedIn: true})
    return newUser
}

const _sign_out = (user) => {
    const newUser = Object.assign({}, user, {displayName: '', email: '', photoURL: '', uid: '', token: '', signedIn: false})
    return newUser
}

function user(state = {displayName: '', email: '', photoURL: '', uid: '', token: '', signedIn: false}, action){
  switch(action.type){
    case 'LOAD_USER':
      return _load_user(state, action.displayName, action.email, action.photoURL, action.uid, action.token)
    case 'SIGN_IN':
      return _load_user(state, action.displayName, action.email, action.photoURL, action.uid, action.token)
    case 'SIGN_OUT':
      return _sign_out(state)
    default:
      return state
  }
}

export default user