import React, { Component } from 'react';
import { authCheck } from '../../actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

function withAuth(ComponentToProtect) {
  return class extends Component {
   state ={
       loading: true,
       redirect: false
   }
    componentDidMount() {
       this.props.authCheck()
    }

    

    render() {
      if (this.state.loading) {
        return null;
      }
      if (this.state.redirect) {
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}

const mapStateToProps = (state)=>({
    auth: state.auth.auth,
    loading: state.auth.loading,
    redirect: state.auth.redirect

})

export default connect(mapStateToProps, {authCheck})( withAuth)