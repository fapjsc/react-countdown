import React from 'react';
import Completionist from './Completionist';

import Countdown from 'react-countdown';

import BaseButton from './BaseButton';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const test = ({ key, minutes, seconds, completed }) => {
  if (!completed) {
    return (
      <>
        <span>
          {minutes}:{seconds}
        </span>
        <br />
        <Completionist />
        <br />
        <Button variant="primary">完成付款</Button>
      </>
    );
  } else {
    // Render a countdown
    return (
      <>
        <Countdown date={Date.now() + 3000} renderer={BaseButton} />
      </>
    );
  }
};

export default test;
