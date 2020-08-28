import { CstNode, IToken } from "chevrotain";
import { xmlParser, CSTResult, parseXML } from "../xmlparser";

export const BaseXMLVisitor = xmlParser.getBaseCstVisitorConstructor();


type VisitFx = (node: any, param: any) => any;
type Converter = (value:string ) => any;

export function convertNumeric(value:string ) : any {
    if( value ){
        var numeric = Number(value);
        if( !isNaN(numeric) ){
            return numeric;
        }
    }
    return value;
}

export class XMLToJsonVistor extends BaseXMLVisitor {
    constructor( public cvt = convertNumeric, public attrPreix = "_", public textProperty = "#text") {
        super();
        //not necessary in production and interferes with cvt
        //this.validateVisitor();
    }

    setValue( param:any, name:string, elem:any ) {
        if (param[name]) {
            if (Array.isArray(param[name])) {
                param[name] = [...param[name], elem];
            } else {
                param[name] = [param[name], elem];
            }
        } else {
            param[name] = elem;
        }
    }

    visitAll(cst: any, param: any): any {
        if (!cst) {
            return param;
        }
        if (Array.isArray(cst)) {
            for (var idx = 0; idx < cst.length; idx++) {
                var node = cst[idx] as CstNode;
                ((this as any)[node.name] as VisitFx)(node.children, param);
            }
            return param;
        }
        return ((this as any)[cst.name] as VisitFx)(cst.children, param);
    }

    document(cst: any, param?: any) {
        const doc: any = {}
        this.visitAll(cst.prolog, doc);
        this.visitAll(cst.element, doc);
        this.visitAll(cst.misc, doc);
        return doc;
    }

    prolog(cst: any, param?: any) {
        var prolog = param!.prolog = {};
        this.visitAll(cst.attribute, prolog);
        return param;
    }

    content(cst: any, param?: any) {
        var content = param!;
        if (cst.Name) {
            param[cst.Name[0].image] = content;
        }
        this.visitAll(cst.content, content);
        this.visitAll(cst.chardata, content);
        this.visitAll(cst.element, content );
        return param;
    }

    element(cst: any, param?: any) {
        const name = (cst.Name)?cst.Name[0].image:null;
        var elem: any = {};
        this.visitAll(cst.attribute, elem);
        this.visitAll(cst.content, elem);
        var ekeys = Object.keys(elem);
        /**
         * Collapse value to text if only property.
         */
        if (ekeys.length == 1 && ekeys[0] == this.textProperty) {
            elem = this.cvt(elem[this.textProperty]);
        }
        if (name) {            
            this.setValue( param, name, elem );
        }
        return elem;
    }

    reference(cst: any, param?: any) {
        return param;
    }

    attribute(cst: any, param?: any) {
        if (cst.Name) {
            var names = cst.Name as IToken[];
            var values = cst.STRING as IToken[];
            var max = Math.min(names.length, values.length);
            for (var idx = 0; idx < max; idx++) {
                var name = this.attrPreix + names[idx].image;
                var value = values[idx].image;
                if (value.length > 1 && value.startsWith('"')) {
                    value = value.substr(1, value.length - 2);
                    param![name] = this.cvt(value);
                }else{
                    param![name] = value;
                }
            }
        }
        return param;
    }

    chardata(cst: any, param?: any) {
        if (param) {
            if (cst.TEXT) {
                var text = cst.TEXT;
                var result = "";
                for( var idx = 0; idx < text.length; idx++ ){
                    result += text[idx].image;
                }
                param[this.textProperty] = result;
            }
        }
        return param;
    }

    misc(cst: any, param?: any) {
        return param;
    }
}

export var xmlToJsonVisitor = new XMLToJsonVistor();

export function visitXMLResult(cstResult: CSTResult, vistor = xmlToJsonVisitor): any {
    if (!cstResult || !cstResult.cst || cstResult.lexErrors.length > 0 || cstResult.parseErrors.length > 0) {
        return null;
    }
    const json = vistor.visit(cstResult.cst);
    return json;
}

export function xml2json(xmlText: string) {
    return visitXMLResult(parseXML(xmlText), xmlToJsonVisitor);
}