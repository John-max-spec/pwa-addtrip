
import { useState, useEffect } from "react";

function Form(props) {
  const [name, setName] = useState('');
  const [addition,setAddition] = useState(false);

useEffect(() => { // ß Add this
 if (addition) {
 console.log("useEffect detected addition");
 props.geoFindMe();
 setAddition(false);
 }
 });


function handleSubmit(event) {
  event.preventDefault();
  
  // 在此处添加 console.log 输出
  console.log("Form submitted with name:", name);
  
  if (name.trim()) { // 确保任务名称不为空
    props.addTask(name); // 添加任务
    setAddition(true); // 设置 addition 状态为 true
    setName(""); // 清空输入框
  }
}

  function handleChange(event) {
    setName(event.target.value);
  }






  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
