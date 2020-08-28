var chev = require("chevrotain");
var xjk = require("../dist/xmljsonkit");

var orderedCatalogXml =
'<?xml version="1.0"?>\n' +
"<catalog>\n" +
'   <book id="bk101">\n' +
"      Before author<author>Gambardella, Matthew</author>\n" +
"      <title>XML Developer's Guide</title>\n" +
"      <genre>Computer</genre>\n" +
"      <price>  44.95  </price>after price<publish_date>2000-10-01</publish_date>\n" +
"      <description>An in-depth look at creating applications \n" +
"      with XML.</description>Last</book>\n" +
'   <book id="bk102">\n' +
"      <author>Ralls, Kim</author>\n" +
"      <title>Midnight Rain</title>\n" +
"      <genre>Fantasy</genre>\n" +
"      <price>5.95</price>\n" +
"      <publish_date>2000-12-16</publish_date>\n" +
"      <description>A former architect battles corporate zombies, \n" +
"      an evil sorceress, and her own childhood to become queen \n" +
"      of the world.</description>\n" +
"   </book>\n"+
"</catalog>";

const result = xjk.orderedxml2json(orderedCatalogXml, "book");
const books = result.catalog.book;
var book = books[0];
console.log(JSON.stringify(book,null,2));