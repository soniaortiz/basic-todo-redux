import React from 'react'
import { connect } from 'react-redux'
import { addTodo, getList } from '../actions/actions'


class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: ''
        }
    }

    handleClick = (e) => {
        this.props.addTodo(this.state.activity)
        // this.props.getList()
        this.setState({
            activity: ''
        })
    }

    handleInput = ({ target }) => {
        this.setState({
            activity: target.value
        })
    }
    render() {
        return <div>
            <input
                value={this.state.activity}
                onChange={
                    this.handleInput
                } />
            <button
                onClick={this.handleClick}
            >add</button>

        </div>
    }
}

export default connect(null, {
    addTodo,
    getList
})(AddTodo)
