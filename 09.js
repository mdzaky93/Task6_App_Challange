#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("convert","Mengkonversi file excel/csv")
.argument("<file1>","File jenis 1")
.argument("<file2>","File jenis 2")
.action( ({logger, args}) => {
	const fs = require('fs');
	const path = require('path');
	const convertCsvToXlsx = require('@aternus/csv-to-xlsx');
	const XLSX = require('xlsx');

	const file1 = args.file1;
	const file2 = args.file2;

	const extfile1 = file1.split('.').pop();

	if( extfile1 == 'xlsx'){
		const workBook = XLSX.readFile(file1);
		XLSX.writeFile(workBook, file2, { bookType: "csv" });
	}else if(extfile1 == 'csv'){
		if (fs.existsSync(file2)) {
		  fs.unlinkSync(file2);
		}
		let source = path.join(__dirname, file1);
		let destination = path.join(__dirname, file2);
		convertCsvToXlsx(source, destination);
	}


	// console.log(file1);
	// console.log(file2);
});


program.run();