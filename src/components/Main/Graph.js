
const RiskConvert = ({risk}) => {
  return <div className={`risk ${risk}`}></div>
}

const Graph = ({logData, onRowClick}) => {

  const TotalAnomalies = (anomalies) =>{
    return anomalies.reduce((sum,curr)=>{
      const value = Object.values(curr)[0];
      return sum+value;
    },0)
  }

  return (
    <div className='graphtable'>
        <div className='graph'>
        <table>
          <tbody>
          <tr>
            <th>Risk</th>
            <th>AnomaliName</th>
            <th>Type</th>
            <th>Status</th>
            <th>Techniques</th>
            <th>LastModified</th>
            <th>NumOfAnomalies</th>
          </tr> 
          {logData.map((data, index) => (
                <tr key={index} onClick={()=>onRowClick(data)}>
                  <td>{<RiskConvert risk={data.Risk} />}</td>
                  <td>{data.AnomaliName}</td>
                  <td>{data.Type}</td>
                  <td>{data.Status}</td>
                  <td>{data.Techniques}</td>
                  <td>{data.LastModified}</td>
                  <td>{TotalAnomalies(data.Anomalies)}</td>
                </tr>
              ))}
          </tbody>
        </table>      
        </div>
    </div>
  )
}

export default Graph