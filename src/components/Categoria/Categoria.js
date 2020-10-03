import React, { Component } from 'react'
import './styles.css'

export default class Categoria extends Component {

    state = {
        categoria: ''
    }

    componentDidMount(){
        const {categoria} = this.props;

        this.setState({categoria})
    }

    render() {
        return (
            <div className={`tag-cat ${this.state.categoria}`}>
                {this.state.categoria
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
            </div>
        )
    }
}
