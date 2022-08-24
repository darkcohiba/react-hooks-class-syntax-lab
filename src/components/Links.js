import React from "react";

// function Links(props) {
//   return (
//     <div>
//       <h3>Links</h3>
//       <a href={props.github}>{props.github}</a>
//       <a href={props.linkedin}>{props.linkedin}</a>
//     </div>
//   );
// }



class Link extends React.PureComponent {
  render() {
    return(
    <div>
      <h3>Links</h3>
      <a href={this.props.github}>{this.props.github}</a>
      <a href={this.props.linkedin}>{this.props.linkedin}</a>
    </div>
    )}
}

export default Links;
