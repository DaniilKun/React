import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera " },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: " How are you" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      {dialogsElement}
      </div>
      <div className={s.messages}>
      {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
