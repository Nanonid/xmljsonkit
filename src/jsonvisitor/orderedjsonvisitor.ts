import { parseXML } from "../xmlparser";
import { XMLToJsonVistor, visitXMLResult, convertNumeric } from "./jsonvisitor";
import { CstNode } from "chevrotain";

export const ORDERED_PROPERTY = "__elements";
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
export class OrderedXMLToJsonVistor extends XMLToJsonVistor {
    constructor(public ordered = new Set<string>(), cvt = convertNumeric, attrPrefix = "_", textProperty = "#text") {
        super(cvt, attrPrefix, textProperty);
    }

    /**
     * Order contents if __elements defined.
     * @param cst 
     * @param param 
     */
    content(cst: any, param?: any) {
        var content = param!;
        /**
         * Not ordered, use base behavior.
         */
        if (!content.__elements) {
            return super.content(cst, param);
        }
        this.visitAll(cst.content, content);
        /**
         * Visit CDATA and Elements in order of offset
         */
        var cdata = (cst.chardata?cst.chardata:[]) as CstNode[];
        var elems = (cst.element?cst.element:[]) as CstNode[];
        var cdataIdx = 0;
        var elemsIdx = 0;
        var cdatum = (cdataIdx < cdata.length) ? cdata[cdataIdx] : null;
        var elem = (elemsIdx < elems.length) ? elems[elemsIdx] : null;
        var ordered = content.__elements;
        while (cdatum || elem) {
            if (cdatum) {
                if (elem &&
                    (elem.location!.startOffset < cdatum.location!.startOffset)) {
                    var childElem:any = {};
                    this.visit(elem, childElem);
                    ordered.push(childElem);
                    elem = (++elemsIdx < elems.length) ? elems[elemsIdx] : null;
                } else {
                    /**
                     * Sometimes CDATA is ignored, so don't keep it.
                     */
                    var data = this.visit(cdatum, {});
                    if( data[this.textProperty] ){
                        ordered.push(data);
                    }
                    cdatum = (++cdataIdx < cdata.length) ? cdata[cdataIdx] : null;
                }
            } else if (elem) {
                    var childElem:any = {};
                    this.visit(elem, childElem);
                    ordered.push(childElem);
                elem = (++elemsIdx < elems.length) ? elems[elemsIdx] : null;
            }
        }
        return param;
    }

    /**
     * If element.Name in ordered, then this element body is an Array
     * and not an object.
     * @param cst 
     * @param param 
     */
    element(cst: any, param?: any) {
        const name = (cst.Name) ? cst.Name[0].image : null;
        var elem: any = {};
        this.visitAll(cst.attribute, elem);
        if (this.ordered.has(name)) {
            elem.__elements = [];
        }
        this.visitAll(cst.content, elem);
        var ekeys = Object.keys(elem);
        /**
         * Collapse value to text if only property.
         */
        if (ekeys.length == 1 && ekeys[0] == this.textProperty) {
            elem = this.cvt(elem[this.textProperty]);
        }
        if (name) {
            this.setValue(param, name, elem);
        }
        return elem;
    }

}

/**
 * Convert XML to JSON but specific elements by name are constructed
 * as an array to preserve element order within the document.
 * @param xmlText xml document
 * @param orderedElements element names to construct as ordered array
 */
export function orderedxml2json(xmlText: string, ...orderedElements: string[]) {
    const ordered = new Set<string>(orderedElements);
    return visitXMLResult(parseXML(xmlText), new OrderedXMLToJsonVistor(ordered));
}