import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.props.enterHandler(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            {type: event.target.value},
            () => this.props.enterHandler(this.state.search, this.state.type)
        );
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={event => this.setState({search: event.target.value})}
                        onKeyUp={this.handleEnter}
                    />
                    <button
                        className="btn"
                        onClick={() => this.props.enterHandler(this.state.search, this.state.type)}>
                        Search
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Search;