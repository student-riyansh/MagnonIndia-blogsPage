$(document).ready(function(){
	'use strict';

	Highcharts.chart('stat-chart', {
		colors: ['#f0f4fd', '#ff470f'],
	    chart: {
	    },
	    title: {
	        text: null,
	    },
	    subtitle: {
	        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	        align: 'right',
	    },
	    xAxis: [{
	        categories: ['January', 'February', 'March', 'April', 'May'],
	        gridLineColor: '#f0f4fd',
	        gridLineDashStyle: 'longdash'
	    }],
	    yAxis: [{ // Primary yAxis
	    	gridLineColor: '#f0f4fd',
	    	gridLineDashStyle: 'longdash',
	        labels: {
	            style: {
	                color: Highcharts.getOptions().colors[1]
	            }
	        },
	        title: {
	            text: null,
	            style: {
	                color: Highcharts.getOptions().colors[1]
	            }
	        }
	    }, { // Secondary yAxis
	        title: {
	            text: null,
	            style: {
	                color: Highcharts.getOptions().colors[0]
	            }
	        },
	    }],
	    credits: {
	    	enabled: false
	    },
	    series: [{
	        name: null,
	        type: 'line',
	        yAxis: 1,
	        data: [49.9, 71.5, 106.4, 129.2, 144.0]

	    }, {
	        name: null,
	        type: 'line',
	        data: [7.0, 6.9, 9.5, 14.5, 18.2]
	    }]
	});
	
	Highcharts.chart('stat-chart2', {
		colors: ['#f0f4fd', '#ff470f'],
	    chart: {
	    },
	    title: {
	        text: null,
	    },
	    subtitle: {
	        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	        align: 'right',
	    },
	    xAxis: [{
	        categories: ['January', 'February', 'March', 'April', 'May'],
	        gridLineColor: '#f0f4fd',
	        gridLineDashStyle: 'longdash'
	    }],
	    yAxis: [{ // Primary yAxis
	    	gridLineColor: '#f0f4fd',
	    	gridLineDashStyle: 'longdash',
	        labels: {
	            style: {
	                color: Highcharts.getOptions().colors[1]
	            }
	        },
	        title: {
	            text: null,
	            style: {
	                color: Highcharts.getOptions().colors[1]
	            }
	        }
	    }, { // Secondary yAxis
	        title: {
	            text: null,
	            style: {
	                color: Highcharts.getOptions().colors[0]
	            }
	        },
	    }],
	    credits: {
	    	enabled: false
	    },
	    series: [{
	        name: null,
	        type: 'line',
	        yAxis: 1,
	        data: [49.9, 71.5, 106.4, 129.2, 144.0]

	    }, {
	        name: null,
	        type: 'line',
	        data: [7.0, 6.9, 9.5, 14.5, 18.2]
	    }]
	});
});