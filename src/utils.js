export function massageData(obj) {
    return {
        Date: new Date(obj.date),
        Open: obj.open,
        Close: obj.close,
        Low: obj.low,
        High: obj.high,
    };
}

export async function fetchData(symbol, range) {
    //const url = `${serverUrl}?symbol=${symbol}&range=${range}`;
    const url = `https://stock-chart-proxy-libo.herokuapp.com?symbol=${symbol}&range=${range}`;
    
    const response = await fetch(url);
    return response.json();
}
