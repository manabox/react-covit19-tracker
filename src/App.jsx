import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import countriesJson from './countries.json';
import TopPage from './pages/TopPage'
import WorldPage from './pages/WorldPage';
import './App.css'

function App() {
  // Loading
  const [loading, setLoading] = useState(false);

  /*
    country = option で選択した国のslugが保存される
    setCountry = state にデータを書き込んだり操作する仕組み
  */
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newDeaths: '',
    totalDeaths: ''
  });

  // World Data
  const [allCountriesData, setAllCountriesData] = useState([]);

  // Each country
  const getCountryData = () => {
    setLoading(true); // Start loading

    fetch(`https://api.covid19api.com/country/${country}`)
    // res = response. fetchで取得したデータはJSON形式じゃないのでjson()でJSON形式に変換する
    .then(res => res.json())
    .then(data => {
      setCountryData({
        date: data[data.length - 1].Date,
        newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
        totalConfirmed: data[data.length - 1].Confirmed,
        newDeaths: data[data.length - 1].Deaths - data[data.length - 2].Deaths,
        totalDeaths: data[data.length - 1].Deaths
      });
      setLoading(false); // End of loading
    })
    .catch(err => alert('Error!'))
  }

  /*
    World data をコンポーネントが表示されたタイミングで表示
    useEffect = コンポーネントが表示・非表示、stateの変更された時の操作を指定
    [] = useEffectが何度も実行されるのを止める
  */
  useEffect(()=>{
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => setAllCountriesData(data.Countries))
    .catch(err => alert('Error!'))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              getCountryData={getCountryData}
              countryData={countryData}
              loading={loading}
            />
          }
        />
        <Route
          exact path="/world"
          element={<WorldPage
                    allCountriesData={allCountriesData}
                  />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
