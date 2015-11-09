import { ReactDOM } from 'react-dom';
import Homepage from './components/Homepage.jsx';

var mountNode = document.getElementById("content");
ReactDOM.render(new Homepage({}), mountNode);
