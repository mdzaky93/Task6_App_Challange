#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("add", "Penjumlahan")
.argument("[angka...]", "Isikan angka")
.action(({ logger, args }) => {
    const addAngka = args.angka.reduce((a,b) => a + b, 0)
    logger.info(addAngka)
})

.command("subtract", "Pengurangan")
.argument("[angka...]", "Isikan angka")
.action(({ logger, args }) => {
    const subAngka = args.angka.reduce((a,b) => a - b)
    logger.info(subAngka)
})

.command("multiply", "Perkalian")
.argument("[angka...]", "Isikan angka")
.action(({ logger, args }) => {
    const multiplyAngka = args.angka.reduce((a,b) => a * b)
    logger.info(multiplyAngka)
})

.command("divide", "Pembagian")
.argument("[angka...]", "Isikan angka")
.action(({ logger, args }) => {
    const divAngka = args.angka.reduce((a,b) => a / b)
    logger.info(divAngka)
})

program.run()