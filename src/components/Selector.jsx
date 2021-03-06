const Selector = ({setCountry, countriesJson}) => {
    return (
        <div className="selector">
            {/*
                e = イベントパラメター。ユーザーの操作で発生したイベントの情報が入ってる。
            */}
            <select onChange={(e)=>setCountry(e.target.value)}>
                {/*
                    Jsonのデータをmapで解体して取り出す
                    mapにはkeyが必要
                    通し番号(index)が自動的につくのでそれを使う
                */}
                {countriesJson.map((country, index) => 
                    <option
                        key={index}
                        value={country.Slug}
                    >
                        {country.Country}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Selector;