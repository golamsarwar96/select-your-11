/* eslint-disable no-unused-vars */
import Header from "./components/Header"
import Banner from "./components/Banner"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Available from "./components/Available/Available"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {   

  const notify = () => toast("Free Credit Added.");
  const notEnoughCoin = () => toast("Not Enough Coin. Claim Free Credit");
  const maxSelected = () => toast("Already Selected 6 Players");
  const alreadySelected = () => toast("Player Already Selected");
  const gotoAvailable = () =>  toast("Press Available Section");

  const [toAvailable,setToAvailable] = useState(true);

  const showAvailable = (state) =>{
    gotoAvailable();
  } 

  // add coin state
  const [freeCredit, setFreeCredit] = useState(0);

  //update coin state
  const [updateCoin,  setUpdateCoin] = useState(0);


  const handleUpdateCoin = (price)=>{
    setUpdateCoin(price);
  }
  
  // available and selected button state
  const [isActive, setIsActive] = useState({
    available : "true",
    status: "Available"
  })

  //Select player state
  const[selectedPlayer,setSelectedPlayer] = useState([])


  //choose player button handle
  const handleSelectedPlayer = (player)=>{
    const isExist = selectedPlayer.find((p)=> p.player_id == player.player_id);
    //coin validation
   if(freeCredit<=0){
    notEnoughCoin();
   }
   else{
      //How many seleted validation
     if((selectedPlayer.length)+1<=6){
      //Already selected validation
      if(isExist){
        alreadySelected();
      }
      else{
        handleUpdateCoin(player.player_price);
        const newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer);
      }
    }else{
      maxSelected();
    }
   }
  }

  //Handle Delete Button
  const handleDeletePlayer = (id)=>{
    const deletedPlayer =  selectedPlayer.filter((p)=> p.player_id !== id);
    setSelectedPlayer(deletedPlayer);
  }

  //Availavle and selected handler 
  const handleAvailableBtn = (status)=>{
    if(status === "available"){
      setIsActive({
        available : true,
        status: "Available"
      })
    }
    else{
      setIsActive({
        available : false,
        status: "Selected"
      })
    }
  }
  // add coin button handler
  const handleFreeCredit = ()=>{
    const credit = 1000000000;
    setFreeCredit(freeCredit+credit);    
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Navbar Section */}
      <Header freeCredit={freeCredit} updateCoin={updateCoin}></Header>
      {/* Banner Section */}
      <Banner handleFreeCredit={handleFreeCredit} notify={notify}></Banner>
      {/* Available Section */}
      <Available showAvailable={showAvailable} toAvailable={toAvailable} handleAvailableBtn={handleAvailableBtn} handleSelectedPlayer={handleSelectedPlayer} isActive={isActive} selectedPlayer={selectedPlayer} handleDeletePlayer={handleDeletePlayer}></Available>
      {/* <Players  isActive={isActive}></Players> */}
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default App
