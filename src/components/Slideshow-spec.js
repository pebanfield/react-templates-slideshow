/**
 * Slideshow-spec
 */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {Slideshow} from 'src/components/Slideshow';

describe('Slideshow component', () => {
  it('should something', () => {
    const hello = TestUtils.renderIntoDocument(<Hello/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Hello world!');
  });
});