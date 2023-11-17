import React, { useState } from 'react'
import "./styles.css";
import DropboxChooser from 'react-dropbox-chooser'

const APP_KEY = 	"pbyi0adbw1orpgd"
export default function App() {

  const [url,setUrl] = useState("")
  function handleSuccess(files){
    console.log (files)
  }
  return (
    <div className="App">
    <h3>Upload a File</h3>
    <br/><br/>
    <div className="container">
      <DropboxChooser appKey= {APP_KEY}
        success={handleSuccess}
        cancel={() => console.log ("closed")}
        multiselect ={true}
        >

        </DropboxChooser>
        <br/><br/>
        

    </div>
    </div>
  );
}
