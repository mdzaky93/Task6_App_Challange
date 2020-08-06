#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("ip-external", "Data IP Luar")
.action(({ logger}) => {
    let extIP = require('ext-ip')();

    extIP.on("ip", ip => {
        logger.info(ip)
    });
    
    extIP.on("err", err => {
        logger.info(err)
    });
    
    extIP();
})

program.run()