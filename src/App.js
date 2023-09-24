import React , {Component} from 'react';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { RouterProvider,  createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';





const router= createHashRouter([

{path: '', element: <Layout /> , children:[

{index:true, element: <Home /> },
{path: 'home', element: <Home /> },
{path: 'about', element: <About /> },
{path: 'portfolio', element: <Portfolio /> },
{path: 'contact', element: <Contact /> },
{path: '*', element:  <div className='d-flex vh-100 justify-content-center align-items-center '>

 <h1> Not found  </h1>
 </div>
},

] },




])

export default class App extends Component {
  render(){
    return <>

    <RouterProvider  router={router}/>
    
    </>
  }
}


