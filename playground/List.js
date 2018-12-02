import React, {Component} from 'react';


class List extends  Component {
    
    render(){
        const tasks = ['take out trash', 'shovel the driway', 'wtih the dog']

        return (
             <ol>
                 { this.props.tasks.map((task, index) => <li key = {index}> {task}</li>)}
            </ol>)
    }
}

export default List