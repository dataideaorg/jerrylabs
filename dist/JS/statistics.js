const bar_graph_container = document.querySelector('.bar-graph-container')
const pie_chart_container = document.querySelector('.pie-chart-container')

const uri = "https://jerrylabs.herokuapp.com/computers"

const displayGraphs = async () => {
    //fetch windows computers
    const windows_response =  await fetch(uri+"?q=window")
    const windows_computers = await windows_response.json()

    //fetch mac computers
    const mac_response =  await fetch(uri+"?q=mac")
    const mac_computers = await mac_response.json()

    //bar graph of count of computers by operating systems
    var trace1 = {
        x: ['windows', 'mac', 'other'],
        y: [windows_computers.length, mac_computers.length, 0],
        type: 'bar',
    }

    var data1 = [trace1]

    var layout1 = {
        title: 'Count of computers by Operating System',
        showLegend: true
    }

    Plotly.newPlot(bar_graph_container, data1, layout1, {scrollZoom: true})

    //pie chart of computers by operating system
    var trace2 = {
        values: [windows_computers.length, mac_computers.length, 0],
                labels: ['windows', 'mac', 'other'],
                type: 'pie'
    }

    var data2 = [trace2]

    var layout2 = {
        title: 'Share of computers by Operating System',
        showLegend: true
    }

    Plotly.newPlot(pie_chart_container, data2, layout2, {scrollZoom: true})


}

window.addEventListener('DOMContentLoaded', () => displayGraphs())