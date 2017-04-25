import React from 'react';
import PropTypes from 'prop-types';

//this can be slimmed down to a render method - which in turn can become a functional method.
class ZipForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitZipCode = this.submitZipCode.bind(this); //bind is a JS method that allows you to bind a particular context to a method.
    }

    submitZipCode(e) {
        const { onSubmit } = this.props; //pass down onSubmit from parent

        onSubmit(e.target.value);
    }

    render() {
        return (
            <div className="zip-form">
                <form>
                    <label htmlFor="zipCode">Zip Code</label>
                    <select onChange={this.submitZipCode}>
                        <option value="">Select A Zip</option>
                        {this.props.zips.map(zip =>
                            <option key={zip} value={zip}>{zip}</option>
                        )}
                    </select>
                </form>
            </div>
        )
    }
}

//This can be done on any level with any component that you make.
//Makes reading the code a bit easier.
//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
ZipForm.propTypes = {
    // prop : valueWeExpect
    zips: PropTypes.arrayOf(PropTypes.number).isRequired,
    onSubmit: PropTypes.func
};

//Default prop type incase you don't require your user to submit something
ZipForm.defaultProps = {
    onSubmit: () => {}
}

export default ZipForm;
