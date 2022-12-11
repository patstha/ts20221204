#!/bin/bash

cd /home/kushal/src/html/vite3/ts20221204;
ping -A -D -c 20 -v 8.8.8.8 > ping.txt;
date > README.markdown;
git add .;
git commit -m "add timestamp";

echo ''  >> README.markdown 2>&1;
echo '# vite Fifteen'  >> README.markdown 2>&1;
echo ''  >> README.markdown 2>&1;

echo ''  >> README.markdown 2>&1;
echo 'This project is live at [https://marketingpreference.vercel.app/](https://marketingpreference.vercel.app/) thanks to Vercel.'  >> README.markdown 2>&1;
echo ''  >> README.markdown 2>&1;

echo "\`\`\`bash"  >> README.markdown 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin add system status";
echo "System Memory"  >> README.markdown 2>&1;
free -h  >> README.markdown 2>&1;
echo "System Storage"  >> README.markdown 2>&1;
du -sh . >> README.markdown 2>&1;
git add .;
git commit -m "add system status";
echo "\`\`\`"  >> README.markdown 2>&1;
git add .;
git commit -m "end add system status";


echo "\`\`\`bash"  >> README.markdown 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin update node";
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;  # This loads NVM
source ~/.nvm/nvm.sh;
time nvm install --lts;
time nvm use --lts;
time npm install --global @vite/cli yarn;
time yarn run ng version  >> README.markdown 2>&1;
time yarn  >> README.markdown 2>&1;
echo "\`\`\`"  >> README.markdown 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "end update node";

git add .;
git commit -m "begin yarn";
time yarn;
git add .;
git commit -m "end yarn";

echo "\`\`\`bash"  >> README.markdown 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin prepare to build vite";
time yarn run build >> README.markdown 2>&1;
echo "\`\`\`"  >> README.markdown 2>&1;
git add .;
git commit -m "end prepare to build vite";

echo "\`\`\`bash" > locallog/fedoratest.md 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin prepare to unit test vite";
time yarn run test >> locallog/fedoratest.md 2>&1;
echo "\`\`\`" >> locallog/fedoratest.md 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "end prepare to unit test vite";

date  >> README.markdown 2>&1;
ping -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
time yarn version --patch  >> README.markdown 2>&1;
git add .;
git commit -m "add timestamp";
git pull --rebase origin master --strategy-option=ours;
git add .;
git commit -m "merge from remote";
git push origin master;
