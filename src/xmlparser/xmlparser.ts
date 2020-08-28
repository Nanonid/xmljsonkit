import { CstParser } from "chevrotain";

import { tokensDictionary as t } from "./xmllexer";

class Xml_parser extends CstParser {
    constructor() {
        super(t, { nodeLocationTracking: "full" })
        this.performSelfAnalysis()
    }

    document = this.RULE("document", () => {
        this.OPTION(() => {
            this.SUBRULE(this.prolog)
        })

        this.MANY(() => {
            this.SUBRULE(this.misc)
        })

        this.SUBRULE(this.element)

        this.MANY2(() => {
            this.SUBRULE2(this.misc)
        })
    });

    prolog = this.RULE("prolog", () => {
        this.CONSUME(t.XMLDeclOpen)
        this.MANY(() => {
            this.SUBRULE(this.attribute)
        })
        this.CONSUME(t.SPECIAL_CLOSE)
    });

    content = this.RULE("content", () => {
        this.OPTION(() => {
            this.SUBRULE(this.chardata)
        })

        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.element) },
                { ALT: () => this.SUBRULE(this.reference) },
                { ALT: () => this.CONSUME(t.CData) },
                { ALT: () => this.CONSUME(t.PROCESSING_INSTRUCTION) },
                { ALT: () => this.CONSUME(t.Comment) }
            ])

            this.OPTION2(() => {
                this.SUBRULE2(this.chardata)
            })
        })
    });

    element = this.RULE("element", () => {
        this.CONSUME(t.OPEN)
        this.CONSUME(t.Name)
        this.MANY(() => {
            this.SUBRULE(this.attribute)
        })

        this.OR([
            {
                ALT: () => {
                    this.CONSUME(t.CLOSE, { LABEL: "START_CLOSE" })
                    this.SUBRULE(this.content)
                    this.CONSUME(t.SLASH_OPEN)
                    this.CONSUME2(t.Name, { LABEL: "END_NAME" })
                    this.CONSUME2(t.CLOSE, { LABEL: "END" })
                }
            },
            {
                ALT: () => {
                    this.CONSUME(t.SLASH_CLOSE)
                }
            }
        ])
    });

    reference = this.RULE("reference", () => {
        this.OR([
            { ALT: () => this.CONSUME(t.EntityRef) },
            { ALT: () => this.CONSUME(t.CharRef) }
        ])
    });

    attribute = this.RULE("attribute", () => {
        this.CONSUME(t.Name)
        this.CONSUME(t.EQUALS)
        this.CONSUME(t.STRING)
    });

    chardata = this.RULE("chardata", () => {
        this.MANY( () => {
            this.OR([
            { ALT: () => this.CONSUME(t.TEXT) },
            { ALT: () => this.CONSUME(t.SEA_WS) }
        ]); }
        );
    });

    misc = this.RULE("misc", () => {
        this.OR([
            { ALT: () => this.CONSUME(t.Comment) },
            { ALT: () => this.CONSUME(t.PROCESSING_INSTRUCTION) },
            { ALT: () => this.CONSUME(t.SEA_WS) }
        ])
    });
}

// Re-use the same parser instance
export const xmlParser = new Xml_parser()
