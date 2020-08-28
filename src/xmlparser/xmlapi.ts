import { xmlLexer } from "./xmllexer";
import { xmlParser } from "./xmlparser";
import { CstNode, ILexingError, IRecognitionException } from "chevrotain";

export interface CSTResult {
    cst: CstNode;
    lexErrors: ILexingError[];
    parseErrors: IRecognitionException[];
}

export function parseXML(xmlText: string): CSTResult {
    const lexResult = xmlLexer.tokenize(xmlText)
    // setting a new input will RESET the parser instance's state.
    xmlParser.input = lexResult.tokens
    // any top level rule may be used as an entry point
    const cst = xmlParser.document()

    return {
        cst: cst,
        lexErrors: lexResult.errors,
        parseErrors: xmlParser.errors
    }
}