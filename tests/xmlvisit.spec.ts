import {catalogXml} from "./docs";
import {parseXML, orderedxml2json} from "../src";
import {visitXMLResult} from "../src"
import {xml2json} from "../src";
import {readFileSync} from "fs";

const shapesfile = "./tests/stencils.xml";

describe("XML Json Visitor", () => {
  it("visitXMLResult Catalog without errors and elements array in order", () => {   
    const result = visitXMLResult(parseXML(catalogXml));
    expect(result).toBeDefined();
    expect(result.catalog).toBeDefined();
    expect(Array.isArray(result.catalog.book)).toBeTruthy();
    const books = result.catalog.book;
    expect(books.length).toBe(12);
    for( var idx = 0; idx < books.length; idx++ ){
      const book = books[idx];
      var id:string = ((idx < 9) ? "bk10" : "bk1") + (idx+1);
      expect(book._id).toBe(id);
      expect(typeof book.author).toBe("string");
    }
  });

  it(`xml2json Shapes ${shapesfile} without errors`, () => {   
    const shapes = readFileSync(shapesfile, { encoding: "utf8", flag: "r" });
    const result = xml2json(shapes);
    expect(result).toBeDefined();
  });
});
