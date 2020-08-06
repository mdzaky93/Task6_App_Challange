#!/usr/bin/env node

const { program } = require("@caporal/core")

program
.command("obfuscate", "Enkripsi data")
.argument("<obfuscate>", "Isikan Kata")
.action(({ logger, args }) => {

    function NewObject(prefix)
    {
        var count=0;
        this.info=function(args)
        {
              count++;
              alert(prefix+args);
        }
        this.GetCount=function()
        {
              return count;
        }
    }
    var obj=new NewObject("Message : ");
    obj.info(args);

    logger.info(args.obfuscate)
})

program.run()