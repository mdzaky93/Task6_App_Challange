#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("Lower", "Ubah menjadi kecil")
.argument("<lower>", "Isikan Kalimat")
.action(({ logger, args }) => {
  logger.info(args.lower.toLowerCase())
})

.command("Upper", "Ubah menjadi besar")
.argument("<upper>", "Isikan Kalimat")
.action(({ logger, args }) => {
  logger.info(args.upper.toUpperCase())
})

.command("Capital", "Ubah huruf depan menjadi besar")
.argument("<capital>", "Isikan Kalimat")
.action(({ logger, args }) => {
  logger.info(args.capital.toLowerCase() .replace(/\b\w/g, (letter) => letter.toUpperCase()))
})

program.run()