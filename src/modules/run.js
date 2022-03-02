import { exec } from "child_process";

const execute = async function (cmd, fn) {
  await exec(cmd, (error, stdout, stderr) => {
    //fn(stdout);
    if (error && stderr) {
      fn(error, stderr);
    }
  });
};

const run = async function (romDir) {
  const emulator = "mupen64plus";
  const homeDir = "~/";
  const path = `${homeDir}'${romDir}'`;
  const cmd = `${emulator} ${path}`;

  await execute(cmd, console.log);
};

export default run;
