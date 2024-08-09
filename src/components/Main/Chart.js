import React, { useEffect, useState } from 'react';
import PieChart, { Legend, Series, Label, Connector,Size } from 'devextreme-react/pie-chart';

const Chart = ({ singleLogData }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (singleLogData && singleLogData.Anomalies) {
      // Transform the anomalies data to the format needed by the PieChart
      const transformedData = singleLogData.Anomalies.map((anomaly) => {
        const key = Object.keys(anomaly)[0];
        return { argument: key, value: anomaly[key] };
      });
      setChartData(transformedData);
    }
  }, [singleLogData]);

  const customizeLabel = (point) => {
    return `${point.argumentText}: ${point.valueText}`;
  };

  return (
    <div className='charttable'>
      <div className='left'>
        Forest: %76, <br></br>
        KNN: %84,   <br></br>
        RNN: %66,   <br></br>
        Most accurate model is KNN with 84 accuracy.
      </div>
      <div className='right'>
        {chartData.length > 0 && (
          <PieChart
            title="Distribution of Anomalies"
            dataSource={chartData}
            type="pie"
          >
            <Size
                    height={300}
                    width={500}
                />
            <Legend
              orientation="horizontal"
              itemTextPosition="right"
              horizontalAlignment="left"
              verticalAlignment="bottom"
              columnCount={2}
            />
            <Series argumentField="argument" valueField="value">
              <Label
                visible={true}
                position="outside"
                customizeText={customizeLabel}
              >
                <Connector visible={true} width={1} />
              </Label>
            </Series>
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default Chart;
