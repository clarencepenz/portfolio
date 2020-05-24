import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMsgs, delMsgs } from '../../actions/messageAction'

class Messages extends Component {
    componentDidMount(){
        this.props.getMsgs()
    }

    render() {
        return (
            <div>
                <h4>Messages {' '}  <span>{this.props.msg.length}</span></h4>
                <table border='1'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Subject</td>
                            <td>Message</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.msg.map(msg =>{
                                return (
                                    <tr key={msg.mid}>
                                        <td>{msg.name}</td>
                                        <td>{msg.email}</td>
                                        <td>{msg.subject}</td>
                                        <td>{msg.message}</td>
                                        <td><button onClick={()=> this.props.delMsgs(msg.mid)}>x</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    msg: state.msg.msgs
})

export default connect(mapStateToProps, {getMsgs, delMsgs})( Messages);
