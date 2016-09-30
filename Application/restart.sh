forever restart -l gyb.log -a server.js
if [ $? == 1 ]
then
forever start -l gyb.log -a server.js
fi
