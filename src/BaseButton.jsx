import React from 'react';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const BaseButton = ({ minutes, seconds, completed }) => {
  if (!completed) {
    return (
      <>
        <span> 付款時間剩下15分鐘</span>
        <br />
        <Button variant="primary">
          {minutes}:{seconds}
        </Button>
      </>
    );
  } else {
    return (
      <>
        <span>請重新配對</span>
        <br />
        <Button disabled variant="secondary">
          超過時間
        </Button>
      </>
    );
  }
};

export default BaseButton;
