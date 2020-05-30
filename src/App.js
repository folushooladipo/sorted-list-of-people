import React, { Component } from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            parameterForSorting: null
        };
    }

    updateSortingParameter(sortParam) {
        this.setState({ parameterForSorting: sortParam });
    }

    render() {
        return (
            <div className='container-fluid'>
                <center>
                    <h1>Birthday Records</h1>
                </center>
                <Radio setSortParam={sortParam => this.updateSortingParameter(sortParam)} />
                <Table sortParameter={this.state.parameterForSorting} />
            </div>
        );
    }
}

export default App;
