import { Lexer, TokenType, ITokenConfig } from "chevrotain";
export declare type PatternType = TokenType | string;
export declare function isTokenType(arg: any): arg is TokenType;
export declare const tokensArray: TokenType[];
export declare const tokensDictionary: {
    [name: string]: TokenType;
};
export declare function createToken(options: ITokenConfig): TokenType;
export declare const xmlLexer: Lexer;
//# sourceMappingURL=xmllexer.d.ts.map