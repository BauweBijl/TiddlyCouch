function(head, req) {

  var path = require("vendor/couchapp/lib/path").init(req);
  var Atom = require("vendor/couchapp/lib/atom");
  var Mustache = require("vendor/couchapp/lib/mustache");

  var indexPath = path.list('tiddlywiki','tiddlers');
  var feedPath = path.list('tiddlywiki','tiddlers');

  // we load the first row to find the most recent change date
  var row = getRow();

  // generate the feed header
  var feedHeader = Atom.header({
    updated : (row ? new Date(row.value.created) : new Date()),
    title : "Tiddlers From TiddlyCouch",
    feed_id : path.absolute(indexPath),
    feed_link : path.absolute(feedPath),
  });

  // send the header to the client
  send(feedHeader);
  // loop over all rows
  if (row) {
    do {
	if (row.value.tags) {
	var html = (row.value.text);
//----//
//provides the raw tiddler text//
//var html = Mustache.escape(row.value.text);
//----//
      }
      // generate the entry for this row
      var feedEntry = Atom.entry({
	entry_id : path.absolute('/'+encodeURIComponent(req.info.db_name)+'/_design/tiddlycouch/_list/tiddlywiki/tiddlers'+'#'+encodeURIComponent(row.value.title)),
        title : row.value.title,
        content : html,
        updated : new Date(row.value.created),
        author : "Bauwe Bijl",
        alternate : path.absolute('/'+encodeURIComponent(req.info.db_name)+'/_design/tiddlycouch/_list/tiddlywiki/tiddlers'+'#'+encodeURIComponent(row.value.title))
      });
      // send the entry to client
      send(feedEntry);
    } while (row = getRow());
  }
  // close the loop after all rows are rendered
  return "</feed>";
}
