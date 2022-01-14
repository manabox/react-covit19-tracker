const Results = ({countryData}) => {
    const { date, newConfirmed, totalConfirmed, newDeaths, totalDeaths } = countryData;
    return (
        <table className="results">
            <tbody>
                <tr>
                    <td>Date</td>
                    <td>{date.slice(0, 10)}</td>
                </tr>
                <tr>
                    <td>New Confirmed</td>
                    <td>{newConfirmed.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Total Confirmed</td>
                    <td>{totalConfirmed.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>New Deaths</td>
                    <td>{newDeaths.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Total Deaths</td>
                    <td>{totalDeaths.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Results;