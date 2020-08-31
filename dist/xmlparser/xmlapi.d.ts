import { CstNode, ILexingError, IRecognitionException } from "chevrotain";
export interface CSTResult {
    cst: CstNode;
    lexErrors: ILexingError[];
    parseErrors: IRecognitionException[];
}
export declare function parseXML(xmlText: string): CSTResult;
//# sourceMappingURL=xmlapi.d.ts.map