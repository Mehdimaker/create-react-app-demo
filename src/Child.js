import React from 'react'

class Child extends React.Component {

  render() {
    const { color, height, title } = this.props;

    return (
      <div>

        <h4>{title}</h4>

        <p style={{ color: color, height: height, border:'2px dashed red'}}>
          {this.props.description}
        </p>

      </div>
    )
  }

}

Child.propTypes = {
  color: React.PropTypes.string,
  height: React.PropTypes.number,
};

Child.defaultProps = {
  color: 'purple',
  height: 150
};

export default Child
