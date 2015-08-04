#!/bin/bash

#orig="file:////Applications/Justinmind.app/Contents/Resources/Java"
orig="file:\/\/\/\/Applications\/Justinmind.app\/Contents\/Resources\/Java"


for i in `find .`
do
if [ -f $i ]
then
    result=`echo $i | grep 'git'`

    if [ -z $result ]; then
	#echo $i
        #grep -q $orig $i
	#if [ $? -eq 0 ]; then
	#    echo $i
	#fi
        sed -i -e s/$orig/'..\/..'/ $i
    fi
fi
done
