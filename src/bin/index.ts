#! /usr/bin/env node

import { exec } from "child_process";

exec(`ttsc ${process.argv.slice(2).join(" ") ?? ""}`, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }

    console.log(stdout);
    console.error(stderr);
})