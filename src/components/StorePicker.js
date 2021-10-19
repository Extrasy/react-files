import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        // 1. Stop the store from submitting
        event.preventDefault();
        // 2. get the text from that input
        
    }
    render() {
        return (
        <Fragment>
        { /*comment- fragment tag allows for sibling elements */ }
        <h2>Please Enter a Store</h2>
        <form className="store-selector" onSubmit={this.goToStore}>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
            <button type="submit">Visit Store</button>
        </form>
        </Fragment>
        );
    }
}

export default StorePicker;