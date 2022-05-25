#!/usr/bin/env node
const program = require("commander");
const check = require("../commands/check");

program
  .version("1.0")
  .command("check")
  .option(
    "--coin <type>",
    "Check coin price (Bitcoin, ethereum, dogecoin)",
    "bitcoin"
  )
  .action((cmd) => {
    check.price(cmd);
  });

program.parse(process.argv);
