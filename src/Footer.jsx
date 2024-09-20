function Footer(){
  //You can use plain JavaScript inside the function in JSX.
  //However, to use javascript inside the return statement, you'll need to enclose it in curly braces. That is why {} to define a new date object in the return statements below.
  return(
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Website name</p>
    </footer>
  );
}
export default Footer