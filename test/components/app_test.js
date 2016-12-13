import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//Use describe to group together similar tests
//below 'test the App Component' string is only for report
describe('App', () => {
let component;
    //run beforeEach function before any test run
    beforeEach(() => {
    //create an instance of App
    component = renderComponent(App);
    });
    //Use 'it' to test a single attribute of a target or specific
    it('shows the correct text', () => {

    //Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('My first test');

    });

});