import React, { Component } from 'react'

class TitleEditForm extends Component {

  render() {
    const { title, onTitleUpdate } = this.props
    let titleField: any = null
    return (
      <div>
        <input
          type="text"
          defaultValue={title}
          ref={el => { titleField = el }}
          autoFocus
          onBlur={(e) => {
              onTitleUpdate(titleField.value)
            }
          }
          onKeyPress={(e) => {
            if (titleField.value.trim()
                && e.key === 'Enter') {
                  e.preventDefault();  
                  onTitleUpdate(titleField.value)
              }
            }
          }
        />
      </div>
    )
  }
}

export default TitleEditForm