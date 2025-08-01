import Header from './components/Header/App';
import Skills from './components/Skills/App';

import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

import './App.css'

function App() {
  useEffect(() => {
    toast("Este site está em desenvolvimento", {
        hideProgressBar: true,
        closeButton: false,
        position: "bottom-right",
        style: {
            color: "#000",
            marginBottom: "7px",
            fontSize: "18px"
        }
    })
  },[])

  return (
    <>
    <ToastContainer/>
    <Header/>
    <Skills/>
    </>
  )
}

export default App
