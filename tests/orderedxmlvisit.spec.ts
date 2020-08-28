import {orderedCatalogXml} from "./docs";
import {orderedxml2json, ORDERED_PROPERTY} from "../src";
import {readFileSync} from "fs";

const shapesfile = "./tests/stencils.xml";

describe("Ordered XML Json Visitor", () => {
  it("orderedxml2json Catalog book in order with CDATA", () => {   
    const result = orderedxml2json(orderedCatalogXml, "book");
    expect(result).toBeDefined();
    expect(result.catalog).toBeDefined();
    expect(Array.isArray(result.catalog.book)).toBeTruthy();
    const books = result.catalog.book;
    expect(books.length).toBe(2);
    var book = books[0];
    expect(book._id).toBe("bk101");
    expect(book.__elements).toBeDefined();
    var bookProps:any[] = book.__elements;
    expect(bookProps.length).toBe(9);
    expect(bookProps[0]["#text"]).toBe("Before author");
    expect(bookProps[1].author).toBe("Gambardella, Matthew");
    expect(bookProps[4].price).toBe(44.95);
    expect(bookProps[5]["#text"]).toBe("after price");
    expect(bookProps[6].publish_date).toBe("2000-10-01");
    expect(bookProps[8]["#text"]).toBe("Last");
  });


  it(`orderedxml2json Shapes ${shapesfile} path in order`, () => {   
    const shapesXML = readFileSync(shapesfile, { encoding: "utf8", flag: "r" });
    const result = orderedxml2json(shapesXML, "path");
    expect(result).toBeDefined();

    expect(Array.isArray(result.shapes?.shape)).toBeTruthy();
    var shapes = result.shapes.shape as any[];
    expect(shapes.length).toBe(3);
    var shape = shapes[0];
    expect(shape._name).toBe("or");
    expect(shape.background).toBeDefined();
    expect(shape.background.path).toBeDefined();
    expect(shape.background.path.__elements).toBeDefined();
    var path = shape.background.path.__elements as any[];
    expect(path.length).toBe(4);
    expect(path[0]).toEqual({move: { _x:0, _y:0}});
    expect(path[1]).toEqual({quad: { _x1:100, _y1:0, _x2:100, _y2:50}});
    expect(path[2]).toEqual({quad: { _x1:100, _y1:100, _x2:0, _y2:100}});
    expect(path[3]).toEqual({close: {}});
  });
});

