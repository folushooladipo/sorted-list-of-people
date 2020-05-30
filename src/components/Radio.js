import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
    constructor() {
        super();

        this.state = {
            currentSortParam: null
        };
    }

    onChange(sortParam) {
        this.setState({ currentSortParam: sortParam });
        this.props.setSortParam(sortParam);
    }

    render() {
        return (
            <div className='radioButtons'>
                <div
                    className='left'
                    onClick={() => this.onChange('name')}
                >
                    <input
                        type='radio'
                        readOnly
                        checked={this.state.currentSortParam === 'name'}
                    />
                    <label>&nbsp;&nbsp;Sort by name</label>
                </div>
                <div
                    className='right'
                    onClick={() => this.onChange('age')}
                >
                    <input
                        type='radio'
                        readOnly
                        checked={this.state.currentSortParam === 'age'}
                    />
                    <label>&nbsp;&nbsp;Sort by age</label>
                </div>
            </div>
        );

    }
}

Radio.propTypes = {
	setSortParam: PropTypes.func.isRequired
};

export default Radio;
