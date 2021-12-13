import './components/Header'
import './App.css';
import Header from './components/Header';
// import CollectionCard from './components/CollectionCard';
import PunkList from './components/PunkList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)


  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x52B771C87237F4087DBA889A03fBC8113D37974B&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])


  return (
   <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />   
          <PunkList
            punkListData={punkListData} 
            setSelectedPunk={setSelectedPunk} 
          />
          </>
        )
      }

   </div>
   
  );
}

export default App;


