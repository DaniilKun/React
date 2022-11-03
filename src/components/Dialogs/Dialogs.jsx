import React from 'react';
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
  

  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);


  let newMessageElement = React.createRef()

  let addMessage = () => {
  let text = newMessageElement.current.value
  alert(text)
}

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      {dialogsElement}
      </div>
      <div className={s.messages}>
      {messagesElements}
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add Mesaage</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
