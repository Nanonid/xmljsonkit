xmljsonkit
==
XML to JSON parser library with ordered elements.

**xmljsonkit** is a XML to JSON parser library that is built on the fast and extensible [Chevrotain](https://sap.github.io/chevrotain/docs/) parser.

**xmljsonkit** is a small extenion of the [Chevrotain Example XML Parser](https://github.com/SAP/chevrotain/tree/master/examples/grammars/xml) with a JSON Concrete Syntax Tree (CST) visitor that can be extended for special XML syntax or JSON handling.

Values that are simple strings will be converted to numbers, if possible.
The conversion process is configurable.

Simple string text values will be promoted from objects to string property values for more convinient JSON handling.

```typescript
  "<genre>Computer</genre>" => { genre:"Computer" }
  "<price>  44.95  </price>" => { price: 44.95 }
```

There are two parsers:
1. xml2json which does simple JSON object translation.
2. orderedxml2json which extends xml2json for maintaining order of elements.

The XML Lexer, Parser, and JSON Visitor are all easily extended or changed to meet your exact JSON translation requirements.

Ordered XML Parsing
---

Sometimes order of elements is critical, for example with the XML represents a graphical format with serialized operations that must be executed in order.

For example, these shapes or stencils have path commands which must be executed in order. Other **xml2json** libraries do *NOT* maintain order, but **xmljsonkit** orderedxml2json does maintain order.

orderedxml2json takes a list of property names that require ordered array handling, and only builds the **__elements** ordered array for that elements contents.

```xml
<shapes>
	<shape name="or" aspect="variable">
		<background>
			<path>
				<move x="0" y="0"/>
				<quad x1="100" y1="0" x2="100" y2="50"/>
				<quad x1="100" y1="100" x2="0" y2="100"/>
				<close/>
			</path>
		</background>
		<foreground>
			<fillstroke/>
		</foreground>
	</shape>
</shapes>
```
Creates JSON with the correct order in a reserved array property called **__elements**.

```typescript
    const ORDERD_PROPERTY = "__elements";
    var shapes = result.shapes.shape as any[];
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
```

Emedded text between elements is also preserved.

```xml
<catalog>
  <book id="bk101">
Before author<author>Gambardella, Matthew</author>
  <title>XML Developer's Guide</title>
  <genre>Computer</genre>
  <price>  44.95  </price>after price<publish_date>2000-10-01</publish_date>
  <description>An in-depth look at creating applications
with XML.</description>Last</book>
```
Maintains the correct order of text and XML elements.

```typescript
    const ORDERD_PROPERTY = "__elements";
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
```