import { XMLToJsonVistor, convertNumeric } from "./jsonvisitor";
export declare const ORDERED_PROPERTY = "__elements";
/**
 * Ordered JSON serializer checks an "ordered" set of element names
 * for specifically maintain the order of the contents of that element.
 * For example: drawing commands are order dependent.
 * <path id="foo">
 *   <move x="0" y="0"/>
 *   <quad x1="100" y1="0" x2="100" y2="50"/>
 *   <quad x1="100" y1="100" x2="0" y2="100"/>
 *   <close/>
 * </path>
 * should create:
 * path: { _id="foo",
 *      __elements:[ { move: { _x="0", _y="0" } },
 *         { quad: { _x1="100", _y1="0", _x2="100", _y2="50" } },
 *         { quad: { _x1="100", _y1="100", _x2="0", _y2="100" } },
 *         { close : {} } ] }
 */
export declare class OrderedXMLToJsonVistor extends XMLToJsonVistor {
    ordered: Set<string>;
    constructor(ordered?: Set<string>, cvt?: typeof convertNumeric, attrPrefix?: string, textProperty?: string);
    /**
     * Order contents if __elements defined.
     * @param cst
     * @param param
     */
    content(cst: any, param?: any): any;
    /**
     * If element.Name in ordered, then this element body is an Array
     * and not an object.
     * @param cst
     * @param param
     */
    element(cst: any, param?: any): any;
}
/**
 * Convert XML to JSON but specific elements by name are constructed
 * as an array to preserve element order within the document.
 * @param xmlText xml document
 * @param orderedElements element names to construct as ordered array
 */
export declare function orderedxml2json(xmlText: string, ...orderedElements: string[]): any;
//# sourceMappingURL=orderedjsonvisitor.d.ts.map