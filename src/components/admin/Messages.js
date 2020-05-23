import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMsgs, delMsgs } from '../../actions/messageAction'

class Messages extends Component {
    componentDidMount(){
        this.props.getMsgs()
    }

    render() {
        const msgs = this.props.msg.map(msg => (
            <div key={msg.mid}>
                name: {msg.name}
                email: {msg.email}
               subject: {msg.subject}
               message: {msg.message}
                <button onClick={()=> this.props.delMsgs(msg.mid)}>x</button>
            </div>
        ))
        return (
            <div>
                <h4>Messages</h4>
                {msgs}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    msg: state.msg.msgs
})

export default connect(mapStateToProps, {getMsgs, delMsgs})( Messages);
