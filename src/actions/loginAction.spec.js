import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './loginAction';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('Actions', () => {

  it('should return login as true', function() {
    const loginData = {
      'username' : 'andysenclave',
      'password' : 'password'
    };
    const expectedOutput = true;
    const actual = ActionCreators.validateLoginData(loginData);
    const expected = {
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      expectedOutput
    };

    addClass(element, 'test-class');

    expect(actual).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});
