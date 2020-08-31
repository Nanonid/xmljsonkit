import { CSTResult } from "../xmlparser";
export declare const BaseXMLVisitor: new (...args: any[]) => import("chevrotain").ICstVisitor<any, any>;
export declare function convertNumeric(value: string): any;
export declare class XMLToJsonVistor extends BaseXMLVisitor {
    cvt: typeof convertNumeric;
    attrPreix: string;
    textProperty: string;
    constructor(cvt?: typeof convertNumeric, attrPreix?: string, textProperty?: string);
    setValue(param: any, name: string, elem: any): void;
    visitAll(cst: any, param: any): any;
    document(cst: any, param?: any): any;
    prolog(cst: any, param?: any): any;
    content(cst: any, param?: any): any;
    element(cst: any, param?: any): any;
    reference(cst: any, param?: any): any;
    attribute(cst: any, param?: any): any;
    chardata(cst: any, param?: any): any;
    misc(cst: any, param?: any): any;
}
export declare var xmlToJsonVisitor: XMLToJsonVistor;
export declare function visitXMLResult(cstResult: CSTResult, vistor?: XMLToJsonVistor): any;
export declare function xml2json(xmlText: string): any;
//# sourceMappingURL=jsonvisitor.d.ts.map