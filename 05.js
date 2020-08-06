#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("random","membuat random string")
.option("--length <length>","Panjang Character", {
	default: "32",
})
.option("--letters [letters]","Set hanya random alphabet saja", {
	default: "true",
})
.option("--numbers [numbers]","Set hanya random numeric saja" , {
	default: "true",
})
.option("--uppercase","Set hanya random alphabet untuk uppercase saja")
.option("--lowercase","Set hanya random alphabet untuk lowercase saja")
.cast(false)
.action( ({logger, options}) => {
	const length = Number(options.length);
	let isLettersInclude = (options.letters == 'true');
	let isNumbersInclude = (options.numbers == 'true');
	let isUppercaseOnly = (options.uppercase == true );
	let isLowercaseOnly = (options.lowercase == true );
	// logger.info("%s", options);
	// logger.info("%s %s %s %s", isLettersInclude, isNumbersInclude, isUppercaseOnly, isLowercaseOnly);
	
	if(!isLettersInclude){
		isNumbersInclude = true;
	}

	if(!isNumbersInclude){
		isLettersInclude = true;
	}

	if(isUppercaseOnly){
		isLowercaseOnly = false;
	}

	if(isLowercaseOnly){
		isUppercaseOnly = false;
	}

	const alphalowercase = "abcdefghijklmnopqrstuvwxyz";
	const alphauppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numeric = "0123456789";

	let chars = '';

	if(isLettersInclude && isNumbersInclude && isUppercaseOnly ){
		chars += numeric + alphauppercase;
	}else if(isLettersInclude && isNumbersInclude && isLowercaseOnly ){
		chars += numeric + alphalowercase;
	}else if(!isLettersInclude && isNumbersInclude){
		chars += numeric;
	}else if(isLettersInclude && !isNumbersInclude){
		if(isUppercaseOnly){
			chars +=alphauppercase;
		}

		if(isLowercaseOnly){
			chars +=alphalowercase;
		}

		if(!isUppercaseOnly && !isLowercaseOnly){
			chars +=alphalowercase+alphauppercase;
		}
	}else{
		chars += numeric+alphalowercase+alphauppercase;
	}

	let result = '';
	for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

	// logger.info("%s", chars);
	// logger.info("%s", options);
	// logger.info("%s %s %s %s", isLettersInclude, isNumbersInclude, isUppercaseOnly, isLowercaseOnly);
	console.log("%s", result);
})

program.run()