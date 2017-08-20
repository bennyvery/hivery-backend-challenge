.PHONY: default install

export DEBUG=True
export APP_HOST='127.0.0.1'

default:
	echo "\n"
	echo "Local examples:"
	echo "	make install	#Will install python libraries and MongoDB from scratch."
	echo "	make start-mongo	#Will start MongoDB."
	echo "\n"

install: mongo-install install-npm

mongo-install:
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
	echo "deb [ arch=amd64,arm64,ppc64el,s390x ] http://repo.mongodb.com/apt/ubuntu xenial/mongodb-enterprise/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
	sudo apt-get update
	sudo apt-get install -y mongodb-enterprise
	sudo service mongod start
	mongoimport --jsonArray --db paranuara --collection companies --file ./resources/companies.json
	mongoimport --jsonArray --db paranuara --collection people --file ./resources/people.json
	mongoimport --jsonArray --db paranuara --collection food --file ./resources/food.json

install-npm:
	sudo apt-get -y install npm nodejs-legacy

start-mongo:
	test -S /tmp/mongodb-27017.sock || sudo service mongod start
