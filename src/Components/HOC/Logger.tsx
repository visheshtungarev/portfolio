import React from 'react'

function LogProps(Component:React.FunctionComponent) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps:any) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
      componentDidMount(){
        console.log('new props:', this.props);
      }
  
      render() {
        return <Component {...this.props} />;
      }
    }
  
    return LogProps;
  }
  export default LogProps;