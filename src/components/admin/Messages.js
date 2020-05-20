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
                {msg.name}
                {msg.email}
                {msg.subject}
                {msg.message}
                <button onClick={()=> this.props.delMsgs(msg.mid)}>x</button>
            </div>
        ))
        return (
            <div>
                {msgs}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    msg: state.msg.msgs
})

export default connect(mapStateToProps, {getMsgs, delMsgs})( Messages);
