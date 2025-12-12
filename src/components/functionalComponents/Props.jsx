const Props = (props) => {
  return (
    <div>
      <h1>This is Props statement</h1>
      <ol>
        <li>Props are:</li>
        <ul>
          <li>{props.hi}</li>
          
          <li><img src={props.img} alt="image not found" /></li>
        </ul>
      </ol>
    </div>
  );
};

export default Props;  
