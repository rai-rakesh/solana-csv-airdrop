import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import ConnectToPhantom from './components/ConnectToPhantom';
import { transfer,executeInst, getTokenDetails } from './helpers/Airdrop'; 
import * as web3 from "@solana/web3.js";
import ReactDropZone from './components/ReactDropZone';
import TokenTable from './components/TokenTable';
import { Button } from '@material-ui/core';
import { state } from './State';
import ResultTable from './components/ResultTable';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/scale.css';
import { ProgressBarUI } from './components/ProgressBarUI';


function App() {

  const [tokenDisplay,setTokenDisplay] = useState("hidden");
  const [resultDisplay,setResultDisplay] = useState("hidden");
  const[selectedToken,setSelectedToken]=useState("");
  

  function WDetailBtnClick() {
     setTokenDisplay("block");
  }
  
  
  function RDetailBtnClick() {
    setResultDisplay("block");
 }

  return (
    <div className="App h-full pt-6 pb-72">
      <div className="float-right pr-4 font-sans">
    <ConnectToPhantom />
    </div>
    {/* <button onClick={() => executeInst((window as any).solana,state.connection)} >Instruction</button> */}
    {/* <a onClick={WDetailBtnClick} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded inline-flex items-center rounded-full cursor-pointer mt-4 shadow-2xl">
          Token in Wallet</a>
    {/* <button onClick={() => WDetailBtnClick() }>Wallte Details</button> */}
    {/* <a onClick={RDetailBtnClick} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded inline-flex items-center rounded-full cursor-pointer mt-4 shadow-2xl">
          Token in Wallet</a> */} 
    {/* <button onClick={() => RDetailBtnClick() }>Result Table</button> */}
    <div className={'fixed z-10 flex justify-center items-center w-20 left-1/2 pr-24 pt-24 ' + tokenDisplay }>
    <TokenTable selectToken={setSelectedToken} />
    <div className="fixed w-full text-center bottom-1 pb-20">
        <Button onClick={() => setTokenDisplay("hidden")}>Select</Button>
      </div>
    </div>
    <div className={'fixed z-10 flex justify-center items-center w-20 left-1/2 pr-24 pt-24 ' + resultDisplay }>
    <ResultTable trigger={true} >
    </ResultTable>
    <div className="fixed w-full text-center bottom-1 pb-20">
        <Button onClick={() => setResultDisplay("hidden")}>Select</Button>
      </div>
    </div>
    
    <div className="h-5/6 w-4/12 bg-gray-200 rounded-md cursor-pointer focus:outline-none items-center shadow-2xl ml-96 mt-24 p-5">
    <a onClick={WDetailBtnClick} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded inline-flex cursor-pointer mt-4 m-2 shadow-2xl">Token in Wallet</a>
    {/* <span className="text-sm">Selected Token:</span> */}
      <Tippy animation={'scale'} theme={'material'} interactive={true} followCursor={true} content={<div className="text-xs">{selectedToken}</div>} >
    <div className="text-sm pl-24">Selected Token : {selectedToken.substring(0,5)+".."+selectedToken.substring(selectedToken.length-5,selectedToken.length-1)}</div>
    </Tippy>
    <div className="mb-2 flex text-xs">
     
    </div>
   <ReactDropZone /> 
   <div>{state.result}</div>
   <a onClick={RDetailBtnClick} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded inline-flex cursor-pointer mt-4 ml-36 mb-5 mshadow-2xl">
          Result Table</a>
   </div>
    </div>
  );
}

export default App;