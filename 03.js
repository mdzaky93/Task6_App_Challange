#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("palindrome", "Cek kata Palindrom atau bukan")
.argument("<palindrome>", "Isikan kata")
.action(({ logger, args }) => {

      var str1 = args.palindrome.toLowerCase().replace(/\s/g, '').replace(
        /[^a-zA-Z 0-9]/gi, "");
    
      var str2 = args.palindrome.toLowerCase().replace(/\s/g, '').replace(
        /[^a-zA-Z 0-9]/gi, "").split("").reverse().join("");

      if (logger.info(str1 == str2)) 
      {
        logger.info("Is Palindrome? Yes")
      }else if (logger.info(str1 != str2)) 
      {
        logger.info("Is Palindrome? No")
      }
})


program.run()