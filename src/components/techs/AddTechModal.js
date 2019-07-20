import React, {useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "") {
      M.toast({html: "Please Enter First Name "});
    } else if (lastName === "") {
      M.toast({html: "Please Enter Last Name "});
    } else {
      // M.Modal.getInstance('#add-modal').close();

      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id='tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add Technician </h4>

        <div className='row noBottomMargin'>
          <div className='col s6 input-field'>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
          <div className='col s6 input-field'>
            <input
              type='text'
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='row noBottomMargin'>
        <div className='col s12 input-field' style={{paddingLeft: "35px"}}>
          <a
            href='#!'
            className='waves-effect btn blue white-text'
            onClick={onSubmit}>
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal;
