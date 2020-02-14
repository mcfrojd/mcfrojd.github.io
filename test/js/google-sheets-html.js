/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1oe8WKRm92M5r1C5AuDedT1Grt7eG4cC6D8rMjg7Bmz4&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L, M, N, X, Y  label A "Plats", B "Spelare", C "01", D "02", E "03", F "04", G "05", H "06", I "07", J "08", K "09", L "10", M "11", N "12", X "Topp 8", Y "Antal Spelade"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
