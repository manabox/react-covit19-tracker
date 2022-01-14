const Card = ({allCountriesData}) => {
    return (
        <div className="flex">
            {allCountriesData.map((singleData, index) =>
                <table key={index} className="results">
                    <tbody>
                        <tr>
                            <td colSpan="2" className="tdcenter">
                                <h2>{singleData.Country}</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>New Confirmed</td>
                            <td>{singleData.NewConfirmed.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Total Confirmed</td>
                            <td>{singleData.TotalConfirmed.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Card;