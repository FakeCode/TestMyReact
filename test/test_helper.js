//jsdom is a library, which immulate a dom and html in command line or terminal
import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

//Set up resting environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
//exact window.document
const $ = jquery(window);

chaiJquery(chai, chai.util, $);

//Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componentInstance =  TestUtils.renderIntoDocument(<ComponentClass /> );

  return $(ReactDOM.findDOMNode(componentInstance));
}

export {renderComponent, expect};

