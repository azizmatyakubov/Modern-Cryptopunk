import './components/Header'
import './App.css';
import Header from './components/Header';
// import CollectionCard from './components/CollectionCard';
import PunkList from './components/PunkList'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [punkListData, setPunkListData] = useState([])

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
      {/* <CollectionCard id={0} name={'Bandana'} traits={[{'value': 7}]} image={'https://nftlabs.mypinata.cloud/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4'}  /> */}
      <PunkList punkListData={punkListData} />
   </div>
   
  );
}

export default App;
