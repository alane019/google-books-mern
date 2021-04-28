import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

//Button click displays toast message temporarily. 
const ButtonToastTemp  = (props) => {
  const { buttonLabel } = props;
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}> Saved </ToastHeader>
        <ToastBody>
        </ToastBody>
      </Toast>
    </div>
  );
}

export default ButtonToastTemp;