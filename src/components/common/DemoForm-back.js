import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

/*eslint-disable */
/*const dateCheckClusterField = ({ id, input, name, fieldValue, dateFormat, headLabel, value, fmsTexts }) => (

  <DateInformation
      checkBoxChecked={true}
      id={id}
      stateVarName="ischeckBoxChecked"
      isValid={true}
      fieldValue={fieldValue}
      dateFormat={dateFormat}
      checkValue={false}
      value={value}
      isValidated={true}
      isDisabledDatePicker={false}
      onChange={(value) => {
          return input.onChange(value);
        }}
      name={name}
      headLabel={headLabel}
      fmsTexts={fmsTexts}
  />
);*/
class DemoForm extends Component {

/*eslint-enable */

  static propTypes = {
    id: PropTypes.bool,
    input: PropTypes.object,
    name: PropTypes.string,
    fieldValue: PropTypes.string,
    diseaseInformationForm: PropTypes.object,
    fms: PropTypes.object,
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      ...this.props.demoForm
    };
  }

  componentDidMount(){
    this.props.initialize(this.props.demoForm);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="stb-form-inline diseaseForm">
        <p>
          <label >Hurray Form Loaded</label>
        </p>
        <div>
          /*<Field
            value=""
            fieldValue={this.state.dateOfInjury}
            dateFormat="DD/MM/YYYY"
            checkValue={false}
            component={dateCheckClusterField}
            name="dateOfInjury"
            id="dateOfInjury"
            headLabel={this.getFmsText('injury.textbox.label', this.props.fms.texts)}
            fmsTexts={this.props.fms.texts}
          />*/
        </div>
        <div>
          <label>First Name</label>
          <div>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
            <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

/*eslint-disable */
DemoForm = reduxForm({
  form: 'DemoForm'
})(DemoForm);
/*eslint-enable */
export default DemoForm;
