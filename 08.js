#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("headlines","Mendapatkan Headline dari kompas")
.action( ({logger}) => {
	const cheerio = require('cheerio');
	const puppeteer = require('puppeteer');

	const url = 'https://www.kompas.com/';
	let myBrowser;
	let newsHeadlines = [];

	puppeteer
	 .launch()
	 .then(browser => {
	 	myBrowser = browser;
	 	return myBrowser.newPage();
	 })
	 .then(page => {
	   return page.goto(url).then(function() {
	     return page.content();
	   });
	 })
	 .then(html => {
	   const $ = cheerio.load(html);

	   let titles = []
	   $('h2.headline__big__title').each(function() {
	   		titles.push($(this).text());
	   });
	   $('h2.headline__thumb__title').each(function() {
	     	titles.push($(this).text());
	   });

	   let urls = []
	   $('a.headline__big__link').each(function() {
	   		urls.push($(this).attr('href'));
	   });

	   $('a.headline__thumb__link').each(function() {
	   		urls.push($(this).attr('href'));
	   });

	   for(i in titles){
	   		newsHeadlines.push({title: titles[i], url: urls[i]});
	   }

	   // console.log(newsHeadlines);

	   for(headline of newsHeadlines){
	   	console.log(`Title: ${headline.title}`);
	   	console.log(`URL: ${headline.url}`);
	   	console.log();
	   }

	   myBrowser.close();
	 })
	 .catch(console.error);
})

program.run()