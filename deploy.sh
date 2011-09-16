#!/usr/bin/env sh

set -e

url="$*"

mkdir fixtures

./js2tiddler plugins/ServerSideSavingPlugin.js > fixtures/ServerSideSavingPlugin.json
./js2tiddler plugins/jquery-json.js > fixtures/jquery-json.json
./js2tiddler plugins/jquery-couch.js > fixtures/jquery-couch.json
./js2tiddler plugins/CouchDBAdaptor.js > fixtures/CouchdbAdaptor.json
./js2tiddler plugins/CouchDBConfig.js > fixtures/CouchdbConfig.json

couchapp pushdocs fixtures $url

couchapp push $url

rm fixtures/* && rmdir fixtures
