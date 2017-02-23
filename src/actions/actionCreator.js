import database, {storage, auth, authProvider} from '../database'

export function fetchPosts() {
    return (dispatch) => {
        return database.ref('/posts').once('value', function(snapshot) {
            let posts = []
            snapshot.forEach(function(childSnapshot) {
                  let post = childSnapshot.val()
                  posts.push(post);
            })
            dispatch({
              type: "FETCH_POSTS_SUCCESS",
              posts
            })
          }
        )
    }
  }

export function addPost(post){
  return (dispatch) => {
      let files = post.photos
      let storageRef = storage.ref()
      let newPost = Object.assign({}, post)
      return Promise.all( files.map( (file) => {
            let metadata = {
                'contentType': file.type
             };
            return storageRef.child('images/' + file.name).put(file, metadata)
              .then(function(snapshot) {
                const url = snapshot.metadata.downloadURLs[0];
                return { url: url, file_name: file.name }
                })
            }
          )
        )
        .then((photos) => {
            const photo_urls = photos.map((photo) => photo.url)
            const file_names = photos.map((photo) => photo.file_name)
            newPost = Object.assign(newPost, {photo_urls: photo_urls, file_names: file_names})
            delete newPost.photos;

            var updates = {};
            updates['/posts/' + newPost.id] = newPost;
            return database.ref().update(updates)
          }
        )
        .then(() => dispatch({
          type: "ADD_POST_SUCCESS",
          post: newPost
        }))
      }
}

export function removePost(idx, postId, file_names){
    let posts = []
    return (dispatch) => {
      return database.ref('/posts/' + postId).remove()
        .then(() => dispatch({
          type: 'REMOVE_POST',
          idx,
        }))
        .then(
          () => {
              if(file_names){
                let storageRef = storage.ref()
                return Promise.all( file_names.map( (name) => {
                      return storageRef.child('images/' + name).delete()
                    }
                  )
                )
              }
              else Promise.resolve(true)
          }
        )
        .then(() => {
            return database.ref('/posts').once('value', function(snapshot) {
              snapshot.forEach(function(childSnapshot) {
                let post = childSnapshot.val()
                posts.push(post);
              })
                dispatch({
                    type: "LOAD_TAGS",
                    posts
                })
            })
          } 
        )
    }
}

export function updateTitle(idx, postId, post, title){
    const updated = Object.assign({}, post, {title: title})
    return (dispatch) => {
        var updates = {};
        updates['/posts/' + updated.id] = updated;
        return database.ref().update(updates)
          .then((result) => dispatch({
            type: 'UPDATE_TITLE',
            idx,
            title
          }))
    }
}

export function updateContent(idx, postId, post, content){
    const updated = Object.assign({}, post, {content: content})
    return (dispatch) => {
        var updates = {};
        updates['/posts/' + updated.id] = updated;
        return database.ref().update(updates)
          .then((result) => dispatch({
            type: 'UPDATE_CONTENT',
            idx,
            content
          }))
    }
}

export function updateTag(idx, postId, post, tags){
    const updated = Object.assign({}, post, {tags: tags})
    return (dispatch) => {
        var updates = {};
        updates['/posts/' + updated.id] = updated;
        return database.ref().update(updates)
          .then((posts) => dispatch({
            type: 'UPDATE_TAG',
            idx,
            tags
          }))
    }
}

export function toogleTitle(idx){
  return {
    type: 'TOOGLE_TITLE',
    idx
  }
}

export function toogleContent(idx){
  return {
    type: 'TOOGLE_CONTENT',
    idx
  }
}

export function toogleTag(idx){
  return {
    type: 'TOOGLE_TAG',
    idx
  }
}

export function removeTag(tag){
  return {
    type: 'REMOVE_TAG',
    tag
  }
}

export function addTags(tags){
  return {
    type: 'ADD_TAGS',
    tags
  }
}

export function loadTags() {
    return (dispatch) => {
        return database.ref('/posts').once('value', function(snapshot) {
            let posts = []
            snapshot.forEach(function(childSnapshot) {
              let post = childSnapshot.val()
              posts.push(post);
            })
            dispatch({
              type: "LOAD_TAGS",
              posts
            })
          }
        )
    };
  }

  export function removeImage(post, file_index){

    const updated = Object.assign({}, post)
    const file_name = updated.file_names[file_index]
    delete updated.file_names[file_index]
    delete updated.photo_urls[file_index]
    return (dispatch) => {
        var updates = {};
        updates['/posts/' + post.id] = updated;
        return database.ref().update(updates)
        .then(
          () => storage.ref('/images/' + file_name).delete()
        )
        .then(() => dispatch({
          type: 'REMOVE_IMAGE',
          postId: post.id,
          file_index
        }))
    };
}

export function login(){
    return (dispatch) => {
        auth.signInWithPopup(authProvider).then(function(result) {
          const token = result.credential.accessToken;
          const user = result.user;
          dispatch({
            type: 'SIGN_IN',
            token,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
          })
        }).catch(function(error) {
          console.error(error)
        })
    }
}

export function logout(){
    return (dispatch) => {
      auth.signOut()
      .then(() => dispatch({
            type: 'SIGN_OUT'
        }))
    }
}

export function loadUser(user){
  return {
    type: 'LOAD_USER',
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      token: ""
  }
}