function Food(){
  const food1 = 'Orange';
  const food2 = 'Banana'; 
  //You can use plain JavaScript inside the function in JSX.
  //However, to use javascript inside the return statement, you'll need to enclose it in curly braces.
  return(
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}
export default Food