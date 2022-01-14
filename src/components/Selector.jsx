const Selector = (props) => {
    return (
        <div className="selector">
            {/*
                e = イベントパラメター。ユーザーの操作で発生したイベントの情報が入ってる。
            */}
            <select onChange={(e)=>props.setCountry(e.target.value)}>
                {/*
                    Jsonのデータをmapで解体して取り出す
                    mapにはkeyが必要
                    通し番号(index)が自動的につくのでそれを使う
                */}
                <option>Select a Country</option>
                {props.countriesJson.map((country, index) => 
                    <option
                        key={index}
                        value={country.Slug}
                    >
                        {country.Country}
                    </option>
                )}
            </select>
            <button onClick={props.getCountryData}>Get Data</button>
        </div>
    )
}

export default Selector;