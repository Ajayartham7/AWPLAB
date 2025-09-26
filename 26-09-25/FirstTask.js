function FirstTask() {
  const onClickBtn=()=>{
    console.log("Button Clicked")
  }
  
  return (
    <div>
      <button onClick={onClickBtn}>Click</button>
    </div>
  );
}

export default FirstTask;
