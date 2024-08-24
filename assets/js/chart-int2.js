$(document).ready(function(){
	'use strict';

	Highcharts.chart('work-traffic-chart', {
		colors: ['#509EFF', '#47E1EB', '#236BFE', '#FF3890', '#8D65EA', '#203BC9'],
	    chart: {
	        type: 'variablepie',
	        backgroundColor: 'rgba(0,0,0,0)'
	    },
	    title: {
	        text: null
	    },
	    tooltip: {
	        // headerFormat: '',
	        // pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
	        //     'Area (square km): <b>{point.y}</b><br/>' +
	        //     'Population density (people per square km): <b>{point.z}</b><br/>'
	    },
	    credits: {
	    	enabled: false
	    },
	    series: [{
	        minPointSize: 0,
	        innerSize: '60%',
	        zMin: 0,
	        name: 'Work Traffic Stats',
	        data: [{
	            name: 'SEO Optimization',
	            y: 300000,
	            z: 92.9
	        }, {
	            name: 'SEO Web Development',
	            y: 500000,
	            z: 92.9
	        }, {
	            name: 'PPC Analysis',
	            y: 150000,
	            z: 92.9
	        }, {
	            name: 'Mobile Advertising',
	            y: 750000,
	            z: 92.9
	        }, {
	            name: 'Marketing Consulting',
	            y: 70000,
	            z: 92.9
	        }, {
	            name: 'Remarketing',
	            y: 250000,
	            z: 92.9
	        }]
	    }]
	});
});