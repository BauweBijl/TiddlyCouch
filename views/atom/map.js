function(doc) {
//full atom control: in newtiddler macro ->fields:"atom:publish"<-// 
//	if(doc.fields.atom == "publish") {
//"creator" is the unique key for tiddlers created after couchapp deployment//
	if(doc.creator) {
	emit(new Date(doc.created), doc);
	}
}
