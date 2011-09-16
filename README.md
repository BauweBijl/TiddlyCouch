## TiddlyCouch : Bauwe Bijl Version

TiddlyCouch lets you serve a TiddlyWiki from CouchDB and read and write individual tiddlers to the database. Each tiddler is saved as a separate document.
It consists of a couchapp and some TiddlyWiki plugins.

This TiddlyCouch version is created by Bauwe Bijl

* Linux compatible (debugged conversion)
* Linux version of deploy.sh
* fixture magic : temporary creation of fixtures folder
* minor fixes

[Working Version Bauwe Bijl](http://bijl.iriscouch.com/bijl-ctw/_design/tiddlycouch/index.html)

older versions:

[Basic Idea](https://github.com/saqimtiaz/TiddlyCouch)

[Improved Version Unclephil](http://tc.unclephil.net)


## Deploying

Option 1: empty replicatables (info and howto inside):

[empty vanilla TiddlyWiki](http://bijl.iriscouch.com/empty-ctw/_design/tiddlycouch/_list/tiddlywiki/tiddlers)

[empty MineralTheme](http://bijl.iriscouch.com/mineral-empty-ctw/_design/tiddlycouch/_list/tiddlywiki/tiddlers)

[empty Phil version](http://bijl.iriscouch.com/phil-empty-ctw/_design/tiddlycouch/_list/tiddlywiki/tiddlers)


Option 2: install [couchapp](http://github.com/couchapp/couchapp), checkout this repository and run "./deploy URL-for-your-database"

