import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>

    )
}

const Dialogs = (props) => {

let dialogsData = [
    {id:1, name: 'Dima'},
    {id:2, name: 'Andrey'},
    {id:3, name: 'Sasha'},
    {id:4, name: 'Sveta'},
    {id:5, name: 'Viktor'},
    {id:6, name: 'Valera '},
]

let messageData = [
    {id:1, message:'Hi'},
    {id:1, message:' How are you'},
    {id:1, message:'Yo'},
    {id:1, message:'Yo'},
    {id:1, message:'Yo'},
]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name= {dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name= {dialogsData[1].name} id={dialogsData[1].id} />

        
      </div>
      <div className={s.messages}>
        <Message message = {messageData[0].message} />
        <Message message = {messageData[1].message} />

        
      </div>
    </div>
  );
};

export default Dialogs;
