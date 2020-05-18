const CustomStockChart = props => {
    const { data } = props;
    const massagedData = data.map(massageData);
    const from = new Date(data[0].date);
    const to = new Date(data[data.length - 1].date);
    return ( /* ... */ );
  };
  