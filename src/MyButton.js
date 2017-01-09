import React from 'react'

class MyButton extends React.Component {

  state = {
    isVisible: false,
    color: 'red'
  }

  toggleVisible(){
    this.setState({
      isVisible: !this.state.isVisible,
      color: 'blue'
    });
  }


  render() {

    const {color, isVisible} = this.state

    return (
      <div>
        <a style={{color:color}} onClick={this.toggleVisible.bind(this)}>
          Click !
        </a>

        {isVisible ?
          <p> Je suis visible </p>
          : '' }

      </div>
    )
  }
}

export default MyButton
