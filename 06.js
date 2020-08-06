#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("ip", "Data IP Lokal")
.action(({ logger }) => {
    var ip = require("ip");
    logger.info(ip.address())
})

program.run()