const Results = (props) => {
    console.log('Results props: ', props)
    return (
        <table className="results">
            <tbody>
                <tr>
                    <td>Date</td>
                    <td>{props.countryData.date.slice(0, 10)}</td>
                </tr>
                <tr>
                    <td>New Confirmed</td>
                    <td>{props.countryData.newConfirmed.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Total Confirmed</td>
                    <td>{props.countryData.totalConfirmed.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>New Deaths</td>
                    <td>{props.countryData.newDeaths.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Total Deaths</td>
                    <td>{props.countryData.totalDeaths.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Results;