const headingg = React.createElement('h2', {id:'heading'}, 'Hello World! from React');
console.log(heading) //object
const roott = ReactDOM.createRoot(document.getElementById('root'));
roott.render(headingg); // it is responsible for taking the object and convert it into h2 tag