
import {parseXML} from "../src/";
import {catalogXml} from "./docs";

describe("XML Parser", () => {
  it("can parse a simple XML without errors", () => {
    const lexAndParseResult = parseXML(catalogXml);
    expect(lexAndParseResult.lexErrors.length).toBe(0);
    expect(lexAndParseResult.parseErrors.length).toBe(0);
  })
})
