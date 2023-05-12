import Chartbar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valuesArray = props.dataPoints.map((data) => {
    return data.value;
  });

  const totalMax = Math.max(...valuesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
