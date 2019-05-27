import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Message from './../components/Message/Notifications'

class MessageContainer extends Component {
    render() {
        var {message} = this.props;
        return (
            <div>
                <Message message={message}/>
            </div>
        )
    }
}
MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps)(MessageContainer)