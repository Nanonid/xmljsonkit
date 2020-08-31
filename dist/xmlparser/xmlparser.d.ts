import { CstParser } from "chevrotain";
declare class Xml_parser extends CstParser {
    constructor();
    document: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    prolog: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    content: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    element: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    reference: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    attribute: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    chardata: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
    misc: (idxInCallingRule?: number | undefined, ...args: any[]) => import("chevrotain").CstNode;
}
export declare const xmlParser: Xml_parser;
export {};
//# sourceMappingURL=xmlparser.d.ts.map