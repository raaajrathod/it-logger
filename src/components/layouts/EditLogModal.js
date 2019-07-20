import React, {useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "") {
      M.toast({html: "Please Enter Message "});
    } else if (tech === "") {
      M.toast({html: "Please Select Technician "});
    } else {
      // M.Modal.getInstance('#add-modal').close();

      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id='edit-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>

        <div className='row noBottomMargin'>
          <div className='col s12 input-field'>
            <input
              type='text'
              name='message'
              id='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row noBottomMargin'>
          <div className='col s6 input-field'>
            <select
              className='browser-default'
              name='tech'
              id='tech'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Jon Doe'>Jon Doe</option>
            </select>
          </div>
          <div className='col s6 input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  name='attention'
                  value={attention}
                  checked={attention}
                  onChange={e => setAttention(e.target.checked)}
                />
                <span>Immediate Attention Required ? </span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default EditLogModal;
