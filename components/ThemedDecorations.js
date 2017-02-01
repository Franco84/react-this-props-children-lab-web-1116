
const React = require('react')

class ThemedDecorations extends React.Component {
  render() {
    const newClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>{newClassName}</div>
    )}}

module.exports = ThemedDecorations
