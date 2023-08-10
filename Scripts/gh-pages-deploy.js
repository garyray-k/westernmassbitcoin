/* eslint-disable */
 (async () => {
  let execa = await import('execa');
  let { existsSync, writeFile } = await import('fs')
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = existsSync("dist") ? "dist" : "build";
    const website = 'westermassbitcoin.com';
    writeFile(`${folderName}/CNAME`, website, err => {
      if (err) {
        console.error(err);
      }
      console.log(`CNAME file created: ${website}`);
    });
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    await execa("echo", ["westermassbitcoin.com", ">", "CNAME"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
