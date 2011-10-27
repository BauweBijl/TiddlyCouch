function(doc) {
	if(doc.title && doc.tags == "content") {
	emit(new Date(doc.created), doc);
	}
}

