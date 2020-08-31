(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chevrotain"));
	else if(typeof define === 'function' && define.amd)
		define(["chevrotain"], factory);
	else if(typeof exports === 'object')
		exports["xmljsonkit"] = factory(require("chevrotain"));
	else
		root["xmljsonkit"] = factory(root["chevrotain"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_chevrotain__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./isregexp */ "./src/isregexp.ts"), exports);
__exportStar(__webpack_require__(/*! ./xmlparser */ "./src/xmlparser/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./jsonvisitor */ "./src/jsonvisitor/index.ts"), exports);


/***/ }),

/***/ "./src/isregexp.ts":
/*!*************************!*\
  !*** ./src/isregexp.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegExp = void 0;
/**
 * RegExp Type Predicate. True and Type Cast if obj == RegExp
 * @param obj
 */
function isRegExp(obj) {
    return obj && (Object.prototype.toString.call(obj) === '[object RegExp]');
}
exports.isRegExp = isRegExp;


/***/ }),

/***/ "./src/jsonvisitor/index.ts":
/*!**********************************!*\
  !*** ./src/jsonvisitor/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./jsonvisitor */ "./src/jsonvisitor/jsonvisitor.ts"), exports);
__exportStar(__webpack_require__(/*! ./orderedjsonvisitor */ "./src/jsonvisitor/orderedjsonvisitor.ts"), exports);


/***/ }),

/***/ "./src/jsonvisitor/jsonvisitor.ts":
/*!****************************************!*\
  !*** ./src/jsonvisitor/jsonvisitor.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.xml2json = exports.visitXMLResult = exports.xmlToJsonVisitor = exports.XMLToJsonVistor = exports.convertNumeric = exports.BaseXMLVisitor = void 0;
const xmlparser_1 = __webpack_require__(/*! ../xmlparser */ "./src/xmlparser/index.ts");
exports.BaseXMLVisitor = xmlparser_1.xmlParser.getBaseCstVisitorConstructor();
function convertNumeric(value) {
    if (value) {
        var numeric = Number(value);
        if (!isNaN(numeric)) {
            return numeric;
        }
    }
    return value;
}
exports.convertNumeric = convertNumeric;
class XMLToJsonVistor extends exports.BaseXMLVisitor {
    constructor(cvt = convertNumeric, attrPreix = "_", textProperty = "#text") {
        super();
        this.cvt = cvt;
        this.attrPreix = attrPreix;
        this.textProperty = textProperty;
        //not necessary in production and interferes with cvt
        //this.validateVisitor();
    }
    setValue(param, name, elem) {
        if (param[name]) {
            if (Array.isArray(param[name])) {
                param[name] = [...param[name], elem];
            }
            else {
                param[name] = [param[name], elem];
            }
        }
        else {
            param[name] = elem;
        }
    }
    visitAll(cst, param) {
        if (!cst) {
            return param;
        }
        if (Array.isArray(cst)) {
            for (var idx = 0; idx < cst.length; idx++) {
                var node = cst[idx];
                this[node.name](node.children, param);
            }
            return param;
        }
        return this[cst.name](cst.children, param);
    }
    document(cst, param) {
        const doc = {};
        this.visitAll(cst.prolog, doc);
        this.visitAll(cst.element, doc);
        this.visitAll(cst.misc, doc);
        return doc;
    }
    prolog(cst, param) {
        var prolog = param.prolog = {};
        this.visitAll(cst.attribute, prolog);
        return param;
    }
    content(cst, param) {
        var content = param;
        if (cst.Name) {
            param[cst.Name[0].image] = content;
        }
        this.visitAll(cst.content, content);
        this.visitAll(cst.chardata, content);
        this.visitAll(cst.element, content);
        return param;
    }
    element(cst, param) {
        const name = (cst.Name) ? cst.Name[0].image : null;
        var elem = {};
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
            this.setValue(param, name, elem);
        }
        return elem;
    }
    reference(cst, param) {
        return param;
    }
    attribute(cst, param) {
        if (cst.Name) {
            var names = cst.Name;
            var values = cst.STRING;
            var max = Math.min(names.length, values.length);
            for (var idx = 0; idx < max; idx++) {
                var name = this.attrPreix + names[idx].image;
                var value = values[idx].image;
                if (value.length > 1 && value.startsWith('"')) {
                    value = value.substr(1, value.length - 2);
                    param[name] = this.cvt(value);
                }
                else {
                    param[name] = value;
                }
            }
        }
        return param;
    }
    chardata(cst, param) {
        if (param) {
            if (cst.TEXT) {
                var text = cst.TEXT;
                var result = "";
                for (var idx = 0; idx < text.length; idx++) {
                    result += text[idx].image;
                }
                param[this.textProperty] = result;
            }
        }
        return param;
    }
    misc(cst, param) {
        return param;
    }
}
exports.XMLToJsonVistor = XMLToJsonVistor;
exports.xmlToJsonVisitor = new XMLToJsonVistor();
function visitXMLResult(cstResult, vistor = exports.xmlToJsonVisitor) {
    if (!cstResult || !cstResult.cst || cstResult.lexErrors.length > 0 || cstResult.parseErrors.length > 0) {
        return null;
    }
    const json = vistor.visit(cstResult.cst);
    return json;
}
exports.visitXMLResult = visitXMLResult;
function xml2json(xmlText) {
    return visitXMLResult(xmlparser_1.parseXML(xmlText), exports.xmlToJsonVisitor);
}
exports.xml2json = xml2json;


/***/ }),

/***/ "./src/jsonvisitor/orderedjsonvisitor.ts":
/*!***********************************************!*\
  !*** ./src/jsonvisitor/orderedjsonvisitor.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.orderedxml2json = exports.OrderedXMLToJsonVistor = exports.ORDERED_PROPERTY = void 0;
const xmlparser_1 = __webpack_require__(/*! ../xmlparser */ "./src/xmlparser/index.ts");
const jsonvisitor_1 = __webpack_require__(/*! ./jsonvisitor */ "./src/jsonvisitor/jsonvisitor.ts");
exports.ORDERED_PROPERTY = "__elements";
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
class OrderedXMLToJsonVistor extends jsonvisitor_1.XMLToJsonVistor {
    constructor(ordered = new Set(), cvt = jsonvisitor_1.convertNumeric, attrPrefix = "_", textProperty = "#text") {
        super(cvt, attrPrefix, textProperty);
        this.ordered = ordered;
    }
    /**
     * Order contents if __elements defined.
     * @param cst
     * @param param
     */
    content(cst, param) {
        var content = param;
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
        var cdata = (cst.chardata ? cst.chardata : []);
        var elems = (cst.element ? cst.element : []);
        var cdataIdx = 0;
        var elemsIdx = 0;
        var cdatum = (cdataIdx < cdata.length) ? cdata[cdataIdx] : null;
        var elem = (elemsIdx < elems.length) ? elems[elemsIdx] : null;
        var ordered = content.__elements;
        while (cdatum || elem) {
            if (cdatum) {
                if (elem &&
                    (elem.location.startOffset < cdatum.location.startOffset)) {
                    var childElem = {};
                    this.visit(elem, childElem);
                    ordered.push(childElem);
                    elem = (++elemsIdx < elems.length) ? elems[elemsIdx] : null;
                }
                else {
                    /**
                     * Sometimes CDATA is ignored, so don't keep it.
                     */
                    var data = this.visit(cdatum, {});
                    if (data[this.textProperty]) {
                        ordered.push(data);
                    }
                    cdatum = (++cdataIdx < cdata.length) ? cdata[cdataIdx] : null;
                }
            }
            else if (elem) {
                var childElem = {};
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
    element(cst, param) {
        const name = (cst.Name) ? cst.Name[0].image : null;
        var elem = {};
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
exports.OrderedXMLToJsonVistor = OrderedXMLToJsonVistor;
/**
 * Convert XML to JSON but specific elements by name are constructed
 * as an array to preserve element order within the document.
 * @param xmlText xml document
 * @param orderedElements element names to construct as ordered array
 */
function orderedxml2json(xmlText, ...orderedElements) {
    const ordered = new Set(orderedElements);
    return jsonvisitor_1.visitXMLResult(xmlparser_1.parseXML(xmlText), new OrderedXMLToJsonVistor(ordered));
}
exports.orderedxml2json = orderedxml2json;


/***/ }),

/***/ "./src/xmlparser/index.ts":
/*!********************************!*\
  !*** ./src/xmlparser/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./xmllexer */ "./src/xmlparser/xmllexer.ts"), exports);
__exportStar(__webpack_require__(/*! ./xmlparser */ "./src/xmlparser/xmlparser.ts"), exports);
__exportStar(__webpack_require__(/*! ./xmlapi */ "./src/xmlparser/xmlapi.ts"), exports);


/***/ }),

/***/ "./src/xmlparser/xmlapi.ts":
/*!*********************************!*\
  !*** ./src/xmlparser/xmlapi.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseXML = void 0;
const xmllexer_1 = __webpack_require__(/*! ./xmllexer */ "./src/xmlparser/xmllexer.ts");
const xmlparser_1 = __webpack_require__(/*! ./xmlparser */ "./src/xmlparser/xmlparser.ts");
function parseXML(xmlText) {
    const lexResult = xmllexer_1.xmlLexer.tokenize(xmlText);
    // setting a new input will RESET the parser instance's state.
    xmlparser_1.xmlParser.input = lexResult.tokens;
    // any top level rule may be used as an entry point
    const cst = xmlparser_1.xmlParser.document();
    return {
        cst: cst,
        lexErrors: lexResult.errors,
        parseErrors: xmlparser_1.xmlParser.errors
    };
}
exports.parseXML = parseXML;


/***/ }),

/***/ "./src/xmlparser/xmllexer.ts":
/*!***********************************!*\
  !*** ./src/xmlparser/xmllexer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlLexer = exports.createToken = exports.tokensDictionary = exports.tokensArray = exports.isTokenType = void 0;
const chevrotain_1 = __webpack_require__(/*! chevrotain */ "chevrotain");
const isregexp_1 = __webpack_require__(/*! ../isregexp */ "./src/isregexp.ts");
// A little mini DSL for easier lexer definition.
var fragments = {};
const f = fragments;
function FRAGMENT(name, def) {
    fragments[name] = typeof def === "string" ? def : def.source;
}
function isTokenType(arg) {
    return arg && arg.PATTERN;
}
exports.isTokenType = isTokenType;
function makePattern(strings, ...args) {
    let combined = "";
    for (let i = 0; i < strings.length; i++) {
        combined += strings[i];
        if (i < args.length) {
            let pattern = args[i];
            // if a TokenType was passed
            if (isTokenType(pattern)) {
                if (typeof pattern.PATTERN == "string") {
                    combined += `(?:${pattern.PATTERN})`;
                }
                else if (isregexp_1.isRegExp(pattern.PATTERN)) {
                    combined += `(?:${pattern.PATTERN.source})`;
                }
            }
            else {
                combined += `(?:${pattern})`;
            }
        }
    }
    return new RegExp(combined);
}
exports.tokensArray = [];
exports.tokensDictionary = {};
function createToken(options) {
    const newTokenType = chevrotain_1.createToken(options);
    exports.tokensArray.push(newTokenType);
    exports.tokensDictionary[options.name] = newTokenType;
    return newTokenType;
}
exports.createToken = createToken;
FRAGMENT("NameStartChar", "([a-zA-Z]|\\u2070-\\u218F|\\u2C00-\\u2FEF|\\u3001-\\uD7FF|\\uF900-\\uFDCF|\\uFDF0-\\uFFFD)");
FRAGMENT("NameChar", makePattern `${f.NameStartChar}|-|_|\\.|\\d|\\u00B7||[\\u0300-\\u036F]|[\\u203F-\\u2040]`);
FRAGMENT("Name", makePattern `${f.NameStartChar}(${f.NameChar})*`);
const Comment = createToken({
    name: "Comment",
    pattern: /<!--.*?-->/,
    // A Comment may span multiple lines.
    line_breaks: true
});
const CData = createToken({ name: "CData", pattern: /<!\[CDATA\[.*?]]>/ });
const DTD = createToken({
    name: "DTD",
    pattern: /<!.*?>/,
    group: chevrotain_1.Lexer.SKIPPED
});
const EntityRef = createToken({
    name: "EntityRef",
    pattern: makePattern `&${f.Name};`
});
const CharRef = createToken({
    name: "CharRef",
    pattern: /&#\d+;|&#x[a-fA-F0-9]/
});
const SEA_WS = createToken({
    name: "SEA_WS",
    pattern: /( |\t|\n|\r\n)+/
});
const XMLDeclOpen = createToken({
    name: "XMLDeclOpen",
    pattern: /<\?xml[ \t\r\n]/,
    push_mode: "INSIDE"
});
const SLASH_OPEN = createToken({
    name: "SLASH_OPEN",
    pattern: /<\//,
    push_mode: "INSIDE"
});
const OPEN = createToken({ name: "OPEN", pattern: /</, push_mode: "INSIDE" });
const PROCESSING_INSTRUCTION = createToken({
    name: "PROCESSING_INSTRUCTION",
    pattern: makePattern `<\\?${f.Name}.*\\?>`
});
const TEXT = createToken({ name: "TEXT", pattern: /[^<&]+/ });
const CLOSE = createToken({ name: "CLOSE", pattern: />/, pop_mode: true });
const SPECIAL_CLOSE = createToken({
    name: "SPECIAL_CLOSE",
    pattern: /\?>/,
    pop_mode: true
});
const SLASH_CLOSE = createToken({
    name: "SLASH_CLOSE",
    pattern: /\/>/,
    pop_mode: true
});
const SLASH = createToken({ name: "SLASH", pattern: /\// });
const STRING = createToken({
    name: "STRING",
    pattern: /"[^<"]*"|'[^<']*'/
});
const EQUALS = createToken({ name: "EQUALS", pattern: /=/ });
const Name = createToken({ name: "Name", pattern: makePattern `${f.Name}` });
const S = createToken({
    name: "S",
    pattern: /[ \t\r\n]/,
    group: chevrotain_1.Lexer.SKIPPED
});
const xmlLexerDefinition = {
    defaultMode: "OUTSIDE",
    modes: {
        OUTSIDE: [
            Comment,
            CData,
            DTD,
            EntityRef,
            CharRef,
            SEA_WS,
            XMLDeclOpen,
            SLASH_OPEN,
            OPEN,
            PROCESSING_INSTRUCTION,
            TEXT
        ],
        INSIDE: [CLOSE, SPECIAL_CLOSE, SLASH_CLOSE, SLASH, EQUALS, STRING, Name, S]
    }
};
exports.xmlLexer = new chevrotain_1.Lexer(xmlLexerDefinition, {
    // Reducing the amount of position tracking can provide a small performance boost (<10%)
    // Likely best to keep the full info for better error position reporting and
    // to expose "fuller" ITokens from the Lexer.
    positionTracking: "full",
    ensureOptimizations: false,
    // TODO: inspect definitions for XML line terminators
    lineTerminatorCharacters: ["\n"],
    lineTerminatorsPattern: /\n|\r\n/g
});


/***/ }),

/***/ "./src/xmlparser/xmlparser.ts":
/*!************************************!*\
  !*** ./src/xmlparser/xmlparser.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlParser = void 0;
const chevrotain_1 = __webpack_require__(/*! chevrotain */ "chevrotain");
const xmllexer_1 = __webpack_require__(/*! ./xmllexer */ "./src/xmlparser/xmllexer.ts");
class Xml_parser extends chevrotain_1.CstParser {
    constructor() {
        super(xmllexer_1.tokensDictionary, { nodeLocationTracking: "full" });
        this.document = this.RULE("document", () => {
            this.OPTION(() => {
                this.SUBRULE(this.prolog);
            });
            this.MANY(() => {
                this.SUBRULE(this.misc);
            });
            this.SUBRULE(this.element);
            this.MANY2(() => {
                this.SUBRULE2(this.misc);
            });
        });
        this.prolog = this.RULE("prolog", () => {
            this.CONSUME(xmllexer_1.tokensDictionary.XMLDeclOpen);
            this.MANY(() => {
                this.SUBRULE(this.attribute);
            });
            this.CONSUME(xmllexer_1.tokensDictionary.SPECIAL_CLOSE);
        });
        this.content = this.RULE("content", () => {
            this.OPTION(() => {
                this.SUBRULE(this.chardata);
            });
            this.MANY(() => {
                this.OR([
                    { ALT: () => this.SUBRULE(this.element) },
                    { ALT: () => this.SUBRULE(this.reference) },
                    { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.CData) },
                    { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.PROCESSING_INSTRUCTION) },
                    { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.Comment) }
                ]);
                this.OPTION2(() => {
                    this.SUBRULE2(this.chardata);
                });
            });
        });
        this.element = this.RULE("element", () => {
            this.CONSUME(xmllexer_1.tokensDictionary.OPEN);
            this.CONSUME(xmllexer_1.tokensDictionary.Name);
            this.MANY(() => {
                this.SUBRULE(this.attribute);
            });
            this.OR([
                {
                    ALT: () => {
                        this.CONSUME(xmllexer_1.tokensDictionary.CLOSE, { LABEL: "START_CLOSE" });
                        this.SUBRULE(this.content);
                        this.CONSUME(xmllexer_1.tokensDictionary.SLASH_OPEN);
                        this.CONSUME2(xmllexer_1.tokensDictionary.Name, { LABEL: "END_NAME" });
                        this.CONSUME2(xmllexer_1.tokensDictionary.CLOSE, { LABEL: "END" });
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(xmllexer_1.tokensDictionary.SLASH_CLOSE);
                    }
                }
            ]);
        });
        this.reference = this.RULE("reference", () => {
            this.OR([
                { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.EntityRef) },
                { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.CharRef) }
            ]);
        });
        this.attribute = this.RULE("attribute", () => {
            this.CONSUME(xmllexer_1.tokensDictionary.Name);
            this.CONSUME(xmllexer_1.tokensDictionary.EQUALS);
            this.CONSUME(xmllexer_1.tokensDictionary.STRING);
        });
        this.chardata = this.RULE("chardata", () => {
            this.MANY(() => {
                this.OR([
                    { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.TEXT) },
                    { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.SEA_WS) }
                ]);
            });
        });
        this.misc = this.RULE("misc", () => {
            this.OR([
                { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.Comment) },
                { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.PROCESSING_INSTRUCTION) },
                { ALT: () => this.CONSUME(xmllexer_1.tokensDictionary.SEA_WS) }
            ]);
        });
        this.performSelfAnalysis();
    }
}
// Re-use the same parser instance
exports.xmlParser = new Xml_parser();


/***/ }),

/***/ "chevrotain":
/*!*****************************!*\
  !*** external "chevrotain" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_chevrotain__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94bWxqc29ua2l0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly94bWxqc29ua2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3htbGpzb25raXQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veG1sanNvbmtpdC8uL3NyYy9pc3JlZ2V4cC50cyIsIndlYnBhY2s6Ly94bWxqc29ua2l0Ly4vc3JjL2pzb252aXNpdG9yL2luZGV4LnRzIiwid2VicGFjazovL3htbGpzb25raXQvLi9zcmMvanNvbnZpc2l0b3IvanNvbnZpc2l0b3IudHMiLCJ3ZWJwYWNrOi8veG1sanNvbmtpdC8uL3NyYy9qc29udmlzaXRvci9vcmRlcmVkanNvbnZpc2l0b3IudHMiLCJ3ZWJwYWNrOi8veG1sanNvbmtpdC8uL3NyYy94bWxwYXJzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veG1sanNvbmtpdC8uL3NyYy94bWxwYXJzZXIveG1sYXBpLnRzIiwid2VicGFjazovL3htbGpzb25raXQvLi9zcmMveG1scGFyc2VyL3htbGxleGVyLnRzIiwid2VicGFjazovL3htbGpzb25raXQvLi9zcmMveG1scGFyc2VyL3htbHBhcnNlci50cyIsIndlYnBhY2s6Ly94bWxqc29ua2l0L2V4dGVybmFsIFwiY2hldnJvdGFpblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUksQ0FBRSxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDUixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDeEMsQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILFNBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDSixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dCQUNyRCxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7YUFDeEMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBcEdDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtJQUM5QixDQUFDO0NBb0dKO0FBRUQsa0NBQWtDO0FBQ3JCLGlCQUFTLEdBQUcsSUFBSSxVQUFVLEVBQUU7Ozs7Ozs7Ozs7OztBQy9HekMsd0QiLCJmaWxlIjoieG1sanNvbmtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNoZXZyb3RhaW5cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2hldnJvdGFpblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4bWxqc29ua2l0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2hldnJvdGFpblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wieG1sanNvbmtpdFwiXSA9IGZhY3Rvcnkocm9vdFtcImNoZXZyb3RhaW5cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jaGV2cm90YWluX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2lzcmVnZXhwXCI7XG5leHBvcnQgKiBmcm9tIFwiLi94bWxwYXJzZXJcIlxuZXhwb3J0ICogZnJvbSBcIi4vanNvbnZpc2l0b3JcIiIsIi8qKlxuICogUmVnRXhwIFR5cGUgUHJlZGljYXRlLiBUcnVlIGFuZCBUeXBlIENhc3QgaWYgb2JqID09IFJlZ0V4cFxuICogQHBhcmFtIG9iaiBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVnRXhwKCBvYmo6IGFueSApIDogb2JqIGlzIFJlZ0V4cCB7XG4gICAgcmV0dXJuIG9iaiAmJiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nKTtcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9qc29udmlzaXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vb3JkZXJlZGpzb252aXNpdG9yXCI7XG4iLCJpbXBvcnQgeyBDc3ROb2RlLCBJVG9rZW4gfSBmcm9tIFwiY2hldnJvdGFpblwiO1xuaW1wb3J0IHsgeG1sUGFyc2VyLCBDU1RSZXN1bHQsIHBhcnNlWE1MIH0gZnJvbSBcIi4uL3htbHBhcnNlclwiO1xuXG5leHBvcnQgY29uc3QgQmFzZVhNTFZpc2l0b3IgPSB4bWxQYXJzZXIuZ2V0QmFzZUNzdFZpc2l0b3JDb25zdHJ1Y3RvcigpO1xuXG5cbnR5cGUgVmlzaXRGeCA9IChub2RlOiBhbnksIHBhcmFtOiBhbnkpID0+IGFueTtcbnR5cGUgQ29udmVydGVyID0gKHZhbHVlOnN0cmluZyApID0+IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnROdW1lcmljKHZhbHVlOnN0cmluZyApIDogYW55IHtcbiAgICBpZiggdmFsdWUgKXtcbiAgICAgICAgdmFyIG51bWVyaWMgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiggIWlzTmFOKG51bWVyaWMpICl7XG4gICAgICAgICAgICByZXR1cm4gbnVtZXJpYztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBjbGFzcyBYTUxUb0pzb25WaXN0b3IgZXh0ZW5kcyBCYXNlWE1MVmlzaXRvciB7XG4gICAgY29uc3RydWN0b3IoIHB1YmxpYyBjdnQgPSBjb252ZXJ0TnVtZXJpYywgcHVibGljIGF0dHJQcmVpeCA9IFwiX1wiLCBwdWJsaWMgdGV4dFByb3BlcnR5ID0gXCIjdGV4dFwiKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vbm90IG5lY2Vzc2FyeSBpbiBwcm9kdWN0aW9uIGFuZCBpbnRlcmZlcmVzIHdpdGggY3Z0XG4gICAgICAgIC8vdGhpcy52YWxpZGF0ZVZpc2l0b3IoKTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSggcGFyYW06YW55LCBuYW1lOnN0cmluZywgZWxlbTphbnkgKSB7XG4gICAgICAgIGlmIChwYXJhbVtuYW1lXSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1bbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1bbmFtZV0gPSBbLi4ucGFyYW1bbmFtZV0sIGVsZW1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbVtuYW1lXSA9IFtwYXJhbVtuYW1lXSwgZWxlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbVtuYW1lXSA9IGVsZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdEFsbChjc3Q6IGFueSwgcGFyYW06IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghY3N0KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3N0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgY3N0Lmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNzdFtpZHhdIGFzIENzdE5vZGU7XG4gICAgICAgICAgICAgICAgKCh0aGlzIGFzIGFueSlbbm9kZS5uYW1lXSBhcyBWaXNpdEZ4KShub2RlLmNoaWxkcmVuLCBwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgodGhpcyBhcyBhbnkpW2NzdC5uYW1lXSBhcyBWaXNpdEZ4KShjc3QuY2hpbGRyZW4sIHBhcmFtKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudChjc3Q6IGFueSwgcGFyYW0/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZG9jOiBhbnkgPSB7fVxuICAgICAgICB0aGlzLnZpc2l0QWxsKGNzdC5wcm9sb2csIGRvYyk7XG4gICAgICAgIHRoaXMudmlzaXRBbGwoY3N0LmVsZW1lbnQsIGRvYyk7XG4gICAgICAgIHRoaXMudmlzaXRBbGwoY3N0Lm1pc2MsIGRvYyk7XG4gICAgICAgIHJldHVybiBkb2M7XG4gICAgfVxuXG4gICAgcHJvbG9nKGNzdDogYW55LCBwYXJhbT86IGFueSkge1xuICAgICAgICB2YXIgcHJvbG9nID0gcGFyYW0hLnByb2xvZyA9IHt9O1xuICAgICAgICB0aGlzLnZpc2l0QWxsKGNzdC5hdHRyaWJ1dGUsIHByb2xvZyk7XG4gICAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9XG5cbiAgICBjb250ZW50KGNzdDogYW55LCBwYXJhbT86IGFueSkge1xuICAgICAgICB2YXIgY29udGVudCA9IHBhcmFtITtcbiAgICAgICAgaWYgKGNzdC5OYW1lKSB7XG4gICAgICAgICAgICBwYXJhbVtjc3QuTmFtZVswXS5pbWFnZV0gPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaXRBbGwoY3N0LmNvbnRlbnQsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLnZpc2l0QWxsKGNzdC5jaGFyZGF0YSwgY29udGVudCk7XG4gICAgICAgIHRoaXMudmlzaXRBbGwoY3N0LmVsZW1lbnQsIGNvbnRlbnQgKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cblxuICAgIGVsZW1lbnQoY3N0OiBhbnksIHBhcmFtPzogYW55KSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAoY3N0Lk5hbWUpP2NzdC5OYW1lWzBdLmltYWdlOm51bGw7XG4gICAgICAgIHZhciBlbGVtOiBhbnkgPSB7fTtcbiAgICAgICAgdGhpcy52aXNpdEFsbChjc3QuYXR0cmlidXRlLCBlbGVtKTtcbiAgICAgICAgdGhpcy52aXNpdEFsbChjc3QuY29udGVudCwgZWxlbSk7XG4gICAgICAgIHZhciBla2V5cyA9IE9iamVjdC5rZXlzKGVsZW0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29sbGFwc2UgdmFsdWUgdG8gdGV4dCBpZiBvbmx5IHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGVrZXlzLmxlbmd0aCA9PSAxICYmIGVrZXlzWzBdID09IHRoaXMudGV4dFByb3BlcnR5KSB7XG4gICAgICAgICAgICBlbGVtID0gdGhpcy5jdnQoZWxlbVt0aGlzLnRleHRQcm9wZXJ0eV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKCBwYXJhbSwgbmFtZSwgZWxlbSApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIHJlZmVyZW5jZShjc3Q6IGFueSwgcGFyYW0/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cblxuICAgIGF0dHJpYnV0ZShjc3Q6IGFueSwgcGFyYW0/OiBhbnkpIHtcbiAgICAgICAgaWYgKGNzdC5OYW1lKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXMgPSBjc3QuTmFtZSBhcyBJVG9rZW5bXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjc3QuU1RSSU5HIGFzIElUb2tlbltdO1xuICAgICAgICAgICAgdmFyIG1heCA9IE1hdGgubWluKG5hbWVzLmxlbmd0aCwgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBtYXg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmF0dHJQcmVpeCArIG5hbWVzW2lkeF0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2lkeF0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEgJiYgdmFsdWUuc3RhcnRzV2l0aCgnXCInKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0hW25hbWVdID0gdGhpcy5jdnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSFbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cblxuICAgIGNoYXJkYXRhKGNzdDogYW55LCBwYXJhbT86IGFueSkge1xuICAgICAgICBpZiAocGFyYW0pIHtcbiAgICAgICAgICAgIGlmIChjc3QuVEVYVCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gY3N0LlRFWFQ7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yKCB2YXIgaWR4ID0gMDsgaWR4IDwgdGV4dC5sZW5ndGg7IGlkeCsrICl7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0ZXh0W2lkeF0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtW3RoaXMudGV4dFByb3BlcnR5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgfVxuXG4gICAgbWlzYyhjc3Q6IGFueSwgcGFyYW0/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciB4bWxUb0pzb25WaXNpdG9yID0gbmV3IFhNTFRvSnNvblZpc3RvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRYTUxSZXN1bHQoY3N0UmVzdWx0OiBDU1RSZXN1bHQsIHZpc3RvciA9IHhtbFRvSnNvblZpc2l0b3IpOiBhbnkge1xuICAgIGlmICghY3N0UmVzdWx0IHx8ICFjc3RSZXN1bHQuY3N0IHx8IGNzdFJlc3VsdC5sZXhFcnJvcnMubGVuZ3RoID4gMCB8fCBjc3RSZXN1bHQucGFyc2VFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QganNvbiA9IHZpc3Rvci52aXNpdChjc3RSZXN1bHQuY3N0KTtcbiAgICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtbDJqc29uKHhtbFRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB2aXNpdFhNTFJlc3VsdChwYXJzZVhNTCh4bWxUZXh0KSwgeG1sVG9Kc29uVmlzaXRvcik7XG59IiwiaW1wb3J0IHsgcGFyc2VYTUwgfSBmcm9tIFwiLi4veG1scGFyc2VyXCI7XG5pbXBvcnQgeyBYTUxUb0pzb25WaXN0b3IsIHZpc2l0WE1MUmVzdWx0LCBjb252ZXJ0TnVtZXJpYyB9IGZyb20gXCIuL2pzb252aXNpdG9yXCI7XG5pbXBvcnQgeyBDc3ROb2RlIH0gZnJvbSBcImNoZXZyb3RhaW5cIjtcblxuZXhwb3J0IGNvbnN0IE9SREVSRURfUFJPUEVSVFkgPSBcIl9fZWxlbWVudHNcIjtcbi8qKlxuICogT3JkZXJlZCBKU09OIHNlcmlhbGl6ZXIgY2hlY2tzIGFuIFwib3JkZXJlZFwiIHNldCBvZiBlbGVtZW50IG5hbWVzXG4gKiBmb3Igc3BlY2lmaWNhbGx5IG1haW50YWluIHRoZSBvcmRlciBvZiB0aGUgY29udGVudHMgb2YgdGhhdCBlbGVtZW50LlxuICogRm9yIGV4YW1wbGU6IGRyYXdpbmcgY29tbWFuZHMgYXJlIG9yZGVyIGRlcGVuZGVudC5cbiAqIDxwYXRoIGlkPVwiZm9vXCI+XG4gKiAgIDxtb3ZlIHg9XCIwXCIgeT1cIjBcIi8+XG4gKiAgIDxxdWFkIHgxPVwiMTAwXCIgeTE9XCIwXCIgeDI9XCIxMDBcIiB5Mj1cIjUwXCIvPlxuICogICA8cXVhZCB4MT1cIjEwMFwiIHkxPVwiMTAwXCIgeDI9XCIwXCIgeTI9XCIxMDBcIi8+XG4gKiAgIDxjbG9zZS8+XG4gKiA8L3BhdGg+XG4gKiBzaG91bGQgY3JlYXRlOlxuICogcGF0aDogeyBfaWQ9XCJmb29cIixcbiAqICAgICAgX19lbGVtZW50czpbIHsgbW92ZTogeyBfeD1cIjBcIiwgX3k9XCIwXCIgfSB9LCBcbiAqICAgICAgICAgeyBxdWFkOiB7IF94MT1cIjEwMFwiLCBfeTE9XCIwXCIsIF94Mj1cIjEwMFwiLCBfeTI9XCI1MFwiIH0gfSxcbiAqICAgICAgICAgeyBxdWFkOiB7IF94MT1cIjEwMFwiLCBfeTE9XCIxMDBcIiwgX3gyPVwiMFwiLCBfeTI9XCIxMDBcIiB9IH0sXG4gKiAgICAgICAgIHsgY2xvc2UgOiB7fSB9IF0gfVxuICovXG5leHBvcnQgY2xhc3MgT3JkZXJlZFhNTFRvSnNvblZpc3RvciBleHRlbmRzIFhNTFRvSnNvblZpc3RvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9yZGVyZWQgPSBuZXcgU2V0PHN0cmluZz4oKSwgY3Z0ID0gY29udmVydE51bWVyaWMsIGF0dHJQcmVmaXggPSBcIl9cIiwgdGV4dFByb3BlcnR5ID0gXCIjdGV4dFwiKSB7XG4gICAgICAgIHN1cGVyKGN2dCwgYXR0clByZWZpeCwgdGV4dFByb3BlcnR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcmRlciBjb250ZW50cyBpZiBfX2VsZW1lbnRzIGRlZmluZWQuXG4gICAgICogQHBhcmFtIGNzdCBcbiAgICAgKiBAcGFyYW0gcGFyYW0gXG4gICAgICovXG4gICAgY29udGVudChjc3Q6IGFueSwgcGFyYW0/OiBhbnkpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBwYXJhbSE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb3Qgb3JkZXJlZCwgdXNlIGJhc2UgYmVoYXZpb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIWNvbnRlbnQuX19lbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmNvbnRlbnQoY3N0LCBwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpdEFsbChjc3QuY29udGVudCwgY29udGVudCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWaXNpdCBDREFUQSBhbmQgRWxlbWVudHMgaW4gb3JkZXIgb2Ygb2Zmc2V0XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgY2RhdGEgPSAoY3N0LmNoYXJkYXRhP2NzdC5jaGFyZGF0YTpbXSkgYXMgQ3N0Tm9kZVtdO1xuICAgICAgICB2YXIgZWxlbXMgPSAoY3N0LmVsZW1lbnQ/Y3N0LmVsZW1lbnQ6W10pIGFzIENzdE5vZGVbXTtcbiAgICAgICAgdmFyIGNkYXRhSWR4ID0gMDtcbiAgICAgICAgdmFyIGVsZW1zSWR4ID0gMDtcbiAgICAgICAgdmFyIGNkYXR1bSA9IChjZGF0YUlkeCA8IGNkYXRhLmxlbmd0aCkgPyBjZGF0YVtjZGF0YUlkeF0gOiBudWxsO1xuICAgICAgICB2YXIgZWxlbSA9IChlbGVtc0lkeCA8IGVsZW1zLmxlbmd0aCkgPyBlbGVtc1tlbGVtc0lkeF0gOiBudWxsO1xuICAgICAgICB2YXIgb3JkZXJlZCA9IGNvbnRlbnQuX19lbGVtZW50cztcbiAgICAgICAgd2hpbGUgKGNkYXR1bSB8fCBlbGVtKSB7XG4gICAgICAgICAgICBpZiAoY2RhdHVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0gJiZcbiAgICAgICAgICAgICAgICAgICAgKGVsZW0ubG9jYXRpb24hLnN0YXJ0T2Zmc2V0IDwgY2RhdHVtLmxvY2F0aW9uIS5zdGFydE9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkRWxlbTphbnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpdChlbGVtLCBjaGlsZEVsZW0pO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goY2hpbGRFbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9ICgrK2VsZW1zSWR4IDwgZWxlbXMubGVuZ3RoKSA/IGVsZW1zW2VsZW1zSWR4XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFNvbWV0aW1lcyBDREFUQSBpcyBpZ25vcmVkLCBzbyBkb24ndCBrZWVwIGl0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnZpc2l0KGNkYXR1bSwge30pO1xuICAgICAgICAgICAgICAgICAgICBpZiggZGF0YVt0aGlzLnRleHRQcm9wZXJ0eV0gKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZGF0dW0gPSAoKytjZGF0YUlkeCA8IGNkYXRhLmxlbmd0aCkgPyBjZGF0YVtjZGF0YUlkeF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRFbGVtOmFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2l0KGVsZW0sIGNoaWxkRWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChjaGlsZEVsZW0pO1xuICAgICAgICAgICAgICAgIGVsZW0gPSAoKytlbGVtc0lkeCA8IGVsZW1zLmxlbmd0aCkgPyBlbGVtc1tlbGVtc0lkeF0gOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBlbGVtZW50Lk5hbWUgaW4gb3JkZXJlZCwgdGhlbiB0aGlzIGVsZW1lbnQgYm9keSBpcyBhbiBBcnJheVxuICAgICAqIGFuZCBub3QgYW4gb2JqZWN0LlxuICAgICAqIEBwYXJhbSBjc3QgXG4gICAgICogQHBhcmFtIHBhcmFtIFxuICAgICAqL1xuICAgIGVsZW1lbnQoY3N0OiBhbnksIHBhcmFtPzogYW55KSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAoY3N0Lk5hbWUpID8gY3N0Lk5hbWVbMF0uaW1hZ2UgOiBudWxsO1xuICAgICAgICB2YXIgZWxlbTogYW55ID0ge307XG4gICAgICAgIHRoaXMudmlzaXRBbGwoY3N0LmF0dHJpYnV0ZSwgZWxlbSk7XG4gICAgICAgIGlmICh0aGlzLm9yZGVyZWQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICBlbGVtLl9fZWxlbWVudHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2l0QWxsKGNzdC5jb250ZW50LCBlbGVtKTtcbiAgICAgICAgdmFyIGVrZXlzID0gT2JqZWN0LmtleXMoZWxlbSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xsYXBzZSB2YWx1ZSB0byB0ZXh0IGlmIG9ubHkgcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZWtleXMubGVuZ3RoID09IDEgJiYgZWtleXNbMF0gPT0gdGhpcy50ZXh0UHJvcGVydHkpIHtcbiAgICAgICAgICAgIGVsZW0gPSB0aGlzLmN2dChlbGVtW3RoaXMudGV4dFByb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUocGFyYW0sIG5hbWUsIGVsZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnQgWE1MIHRvIEpTT04gYnV0IHNwZWNpZmljIGVsZW1lbnRzIGJ5IG5hbWUgYXJlIGNvbnN0cnVjdGVkXG4gKiBhcyBhbiBhcnJheSB0byBwcmVzZXJ2ZSBlbGVtZW50IG9yZGVyIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG4gKiBAcGFyYW0geG1sVGV4dCB4bWwgZG9jdW1lbnRcbiAqIEBwYXJhbSBvcmRlcmVkRWxlbWVudHMgZWxlbWVudCBuYW1lcyB0byBjb25zdHJ1Y3QgYXMgb3JkZXJlZCBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJlZHhtbDJqc29uKHhtbFRleHQ6IHN0cmluZywgLi4ub3JkZXJlZEVsZW1lbnRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG9yZGVyZWQgPSBuZXcgU2V0PHN0cmluZz4ob3JkZXJlZEVsZW1lbnRzKTtcbiAgICByZXR1cm4gdmlzaXRYTUxSZXN1bHQocGFyc2VYTUwoeG1sVGV4dCksIG5ldyBPcmRlcmVkWE1MVG9Kc29uVmlzdG9yKG9yZGVyZWQpKTtcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi94bWxsZXhlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4veG1scGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi94bWxhcGlcIjsiLCJpbXBvcnQgeyB4bWxMZXhlciB9IGZyb20gXCIuL3htbGxleGVyXCI7XG5pbXBvcnQgeyB4bWxQYXJzZXIgfSBmcm9tIFwiLi94bWxwYXJzZXJcIjtcbmltcG9ydCB7IENzdE5vZGUsIElMZXhpbmdFcnJvciwgSVJlY29nbml0aW9uRXhjZXB0aW9uIH0gZnJvbSBcImNoZXZyb3RhaW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDU1RSZXN1bHQge1xuICAgIGNzdDogQ3N0Tm9kZTtcbiAgICBsZXhFcnJvcnM6IElMZXhpbmdFcnJvcltdO1xuICAgIHBhcnNlRXJyb3JzOiBJUmVjb2duaXRpb25FeGNlcHRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWE1MKHhtbFRleHQ6IHN0cmluZyk6IENTVFJlc3VsdCB7XG4gICAgY29uc3QgbGV4UmVzdWx0ID0geG1sTGV4ZXIudG9rZW5pemUoeG1sVGV4dClcbiAgICAvLyBzZXR0aW5nIGEgbmV3IGlucHV0IHdpbGwgUkVTRVQgdGhlIHBhcnNlciBpbnN0YW5jZSdzIHN0YXRlLlxuICAgIHhtbFBhcnNlci5pbnB1dCA9IGxleFJlc3VsdC50b2tlbnNcbiAgICAvLyBhbnkgdG9wIGxldmVsIHJ1bGUgbWF5IGJlIHVzZWQgYXMgYW4gZW50cnkgcG9pbnRcbiAgICBjb25zdCBjc3QgPSB4bWxQYXJzZXIuZG9jdW1lbnQoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3N0OiBjc3QsXG4gICAgICAgIGxleEVycm9yczogbGV4UmVzdWx0LmVycm9ycyxcbiAgICAgICAgcGFyc2VFcnJvcnM6IHhtbFBhcnNlci5lcnJvcnNcbiAgICB9XG59IiwiXG5pbXBvcnQgeyBjcmVhdGVUb2tlbiBhcyBjcmVhdGVUb2tlbk9yZywgTGV4ZXIsIFRva2VuVHlwZSwgSVRva2VuQ29uZmlnIH0gZnJvbSBcImNoZXZyb3RhaW5cIjtcbmltcG9ydCB7IGlzUmVnRXhwIH0gZnJvbSBcIi4uL2lzcmVnZXhwXCI7XG5cbi8vIEEgbGl0dGxlIG1pbmkgRFNMIGZvciBlYXNpZXIgbGV4ZXIgZGVmaW5pdGlvbi5cbnZhciBmcmFnbWVudHM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge31cbmNvbnN0IGYgPSBmcmFnbWVudHNcblxuZnVuY3Rpb24gRlJBR01FTlQobmFtZTogc3RyaW5nLCBkZWY6IGFueSkge1xuICAgIGZyYWdtZW50c1tuYW1lXSA9IHR5cGVvZiBkZWYgPT09IFwic3RyaW5nXCIgPyBkZWYgOiBkZWYuc291cmNlXG59XG5cbmV4cG9ydCB0eXBlIFBhdHRlcm5UeXBlID0gVG9rZW5UeXBlIHwgc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlblR5cGUoYXJnOiBhbnkpOiBhcmcgaXMgVG9rZW5UeXBlIHtcbiAgICByZXR1cm4gYXJnICYmIGFyZy5QQVRURVJOO1xufVxuXG5mdW5jdGlvbiBtYWtlUGF0dGVybihzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4uYXJnczogUGF0dGVyblR5cGVbXSkge1xuICAgIGxldCBjb21iaW5lZCA9IFwiXCJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29tYmluZWQgKz0gc3RyaW5nc1tpXVxuICAgICAgICBpZiAoaSA8IGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IGFyZ3NbaV1cbiAgICAgICAgICAgIC8vIGlmIGEgVG9rZW5UeXBlIHdhcyBwYXNzZWRcbiAgICAgICAgICAgIGlmIChpc1Rva2VuVHlwZShwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0dGVybi5QQVRURVJOID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tYmluZWQgKz0gYCg/OiR7cGF0dGVybi5QQVRURVJOfSlgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1JlZ0V4cChwYXR0ZXJuLlBBVFRFUk4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkICs9IGAoPzoke3BhdHRlcm4uUEFUVEVSTi5zb3VyY2V9KWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkICs9IGAoPzoke3BhdHRlcm59KWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChjb21iaW5lZClcbn1cblxuZXhwb3J0IGNvbnN0IHRva2Vuc0FycmF5OiBUb2tlblR5cGVbXSA9IFtdXG5leHBvcnQgY29uc3QgdG9rZW5zRGljdGlvbmFyeTogeyBbbmFtZTogc3RyaW5nXTogVG9rZW5UeXBlIH0gPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW4ob3B0aW9uczogSVRva2VuQ29uZmlnKSB7XG4gICAgY29uc3QgbmV3VG9rZW5UeXBlID0gY3JlYXRlVG9rZW5Pcmcob3B0aW9ucylcbiAgICB0b2tlbnNBcnJheS5wdXNoKG5ld1Rva2VuVHlwZSlcbiAgICB0b2tlbnNEaWN0aW9uYXJ5W29wdGlvbnMubmFtZV0gPSBuZXdUb2tlblR5cGVcbiAgICByZXR1cm4gbmV3VG9rZW5UeXBlXG59XG5cbkZSQUdNRU5UKFxuICAgIFwiTmFtZVN0YXJ0Q2hhclwiLFxuICAgIFwiKFthLXpBLVpdfFxcXFx1MjA3MC1cXFxcdTIxOEZ8XFxcXHUyQzAwLVxcXFx1MkZFRnxcXFxcdTMwMDEtXFxcXHVEN0ZGfFxcXFx1RjkwMC1cXFxcdUZEQ0Z8XFxcXHVGREYwLVxcXFx1RkZGRClcIlxuKVxuXG5GUkFHTUVOVChcbiAgICBcIk5hbWVDaGFyXCIsXG4gICAgbWFrZVBhdHRlcm5gJHtmLk5hbWVTdGFydENoYXJ9fC18X3xcXFxcLnxcXFxcZHxcXFxcdTAwQjd8fFtcXFxcdTAzMDAtXFxcXHUwMzZGXXxbXFxcXHUyMDNGLVxcXFx1MjA0MF1gXG4pXG5cbkZSQUdNRU5UKFwiTmFtZVwiLCBtYWtlUGF0dGVybmAke2YuTmFtZVN0YXJ0Q2hhcn0oJHtmLk5hbWVDaGFyfSkqYClcblxuY29uc3QgQ29tbWVudCA9IGNyZWF0ZVRva2VuKHtcbiAgICBuYW1lOiBcIkNvbW1lbnRcIixcbiAgICBwYXR0ZXJuOiAvPCEtLS4qPy0tPi8sXG4gICAgLy8gQSBDb21tZW50IG1heSBzcGFuIG11bHRpcGxlIGxpbmVzLlxuICAgIGxpbmVfYnJlYWtzOiB0cnVlXG59KVxuXG5jb25zdCBDRGF0YSA9IGNyZWF0ZVRva2VuKHsgbmFtZTogXCJDRGF0YVwiLCBwYXR0ZXJuOiAvPCFcXFtDREFUQVxcWy4qP11dPi8gfSlcblxuY29uc3QgRFREID0gY3JlYXRlVG9rZW4oe1xuICAgIG5hbWU6IFwiRFREXCIsXG4gICAgcGF0dGVybjogLzwhLio/Pi8sXG4gICAgZ3JvdXA6IExleGVyLlNLSVBQRURcbn0pXG5cbmNvbnN0IEVudGl0eVJlZiA9IGNyZWF0ZVRva2VuKHtcbiAgICBuYW1lOiBcIkVudGl0eVJlZlwiLFxuICAgIHBhdHRlcm46IG1ha2VQYXR0ZXJuYCYke2YuTmFtZX07YFxufSlcblxuY29uc3QgQ2hhclJlZiA9IGNyZWF0ZVRva2VuKHtcbiAgICBuYW1lOiBcIkNoYXJSZWZcIixcbiAgICBwYXR0ZXJuOiAvJiNcXGQrO3wmI3hbYS1mQS1GMC05XS9cbn0pXG5cbmNvbnN0IFNFQV9XUyA9IGNyZWF0ZVRva2VuKHtcbiAgICBuYW1lOiBcIlNFQV9XU1wiLFxuICAgIHBhdHRlcm46IC8oIHxcXHR8XFxufFxcclxcbikrL1xufSlcblxuY29uc3QgWE1MRGVjbE9wZW4gPSBjcmVhdGVUb2tlbih7XG4gICAgbmFtZTogXCJYTUxEZWNsT3BlblwiLFxuICAgIHBhdHRlcm46IC88XFw/eG1sWyBcXHRcXHJcXG5dLyxcbiAgICBwdXNoX21vZGU6IFwiSU5TSURFXCJcbn0pXG5cbmNvbnN0IFNMQVNIX09QRU4gPSBjcmVhdGVUb2tlbih7XG4gICAgbmFtZTogXCJTTEFTSF9PUEVOXCIsXG4gICAgcGF0dGVybjogLzxcXC8vLFxuICAgIHB1c2hfbW9kZTogXCJJTlNJREVcIlxufSlcblxuY29uc3QgT1BFTiA9IGNyZWF0ZVRva2VuKHsgbmFtZTogXCJPUEVOXCIsIHBhdHRlcm46IC88LywgcHVzaF9tb2RlOiBcIklOU0lERVwiIH0pXG5cbmNvbnN0IFBST0NFU1NJTkdfSU5TVFJVQ1RJT04gPSBjcmVhdGVUb2tlbih7XG4gICAgbmFtZTogXCJQUk9DRVNTSU5HX0lOU1RSVUNUSU9OXCIsXG4gICAgcGF0dGVybjogbWFrZVBhdHRlcm5gPFxcXFw/JHtmLk5hbWV9LipcXFxcPz5gXG59KVxuXG5jb25zdCBURVhUID0gY3JlYXRlVG9rZW4oeyBuYW1lOiBcIlRFWFRcIiwgcGF0dGVybjogL1tePCZdKy8gfSlcblxuY29uc3QgQ0xPU0UgPSBjcmVhdGVUb2tlbih7IG5hbWU6IFwiQ0xPU0VcIiwgcGF0dGVybjogLz4vLCBwb3BfbW9kZTogdHJ1ZSB9KVxuXG5jb25zdCBTUEVDSUFMX0NMT1NFID0gY3JlYXRlVG9rZW4oe1xuICAgIG5hbWU6IFwiU1BFQ0lBTF9DTE9TRVwiLFxuICAgIHBhdHRlcm46IC9cXD8+LyxcbiAgICBwb3BfbW9kZTogdHJ1ZVxufSlcblxuY29uc3QgU0xBU0hfQ0xPU0UgPSBjcmVhdGVUb2tlbih7XG4gICAgbmFtZTogXCJTTEFTSF9DTE9TRVwiLFxuICAgIHBhdHRlcm46IC9cXC8+LyxcbiAgICBwb3BfbW9kZTogdHJ1ZVxufSlcblxuY29uc3QgU0xBU0ggPSBjcmVhdGVUb2tlbih7IG5hbWU6IFwiU0xBU0hcIiwgcGF0dGVybjogL1xcLy8gfSlcblxuY29uc3QgU1RSSU5HID0gY3JlYXRlVG9rZW4oe1xuICAgIG5hbWU6IFwiU1RSSU5HXCIsXG4gICAgcGF0dGVybjogL1wiW148XCJdKlwifCdbXjwnXSonL1xufSlcblxuY29uc3QgRVFVQUxTID0gY3JlYXRlVG9rZW4oeyBuYW1lOiBcIkVRVUFMU1wiLCBwYXR0ZXJuOiAvPS8gfSlcblxuY29uc3QgTmFtZSA9IGNyZWF0ZVRva2VuKHsgbmFtZTogXCJOYW1lXCIsIHBhdHRlcm46IG1ha2VQYXR0ZXJuYCR7Zi5OYW1lfWAgfSlcblxuY29uc3QgUyA9IGNyZWF0ZVRva2VuKHtcbiAgICBuYW1lOiBcIlNcIixcbiAgICBwYXR0ZXJuOiAvWyBcXHRcXHJcXG5dLyxcbiAgICBncm91cDogTGV4ZXIuU0tJUFBFRFxufSlcblxuY29uc3QgeG1sTGV4ZXJEZWZpbml0aW9uID0ge1xuICAgIGRlZmF1bHRNb2RlOiBcIk9VVFNJREVcIixcblxuICAgIG1vZGVzOiB7XG4gICAgICAgIE9VVFNJREU6IFtcbiAgICAgICAgICAgIENvbW1lbnQsXG4gICAgICAgICAgICBDRGF0YSxcbiAgICAgICAgICAgIERURCxcbiAgICAgICAgICAgIEVudGl0eVJlZixcbiAgICAgICAgICAgIENoYXJSZWYsXG4gICAgICAgICAgICBTRUFfV1MsXG4gICAgICAgICAgICBYTUxEZWNsT3BlbixcbiAgICAgICAgICAgIFNMQVNIX09QRU4sXG4gICAgICAgICAgICBPUEVOLFxuICAgICAgICAgICAgUFJPQ0VTU0lOR19JTlNUUlVDVElPTixcbiAgICAgICAgICAgIFRFWFRcbiAgICAgICAgXSxcbiAgICAgICAgSU5TSURFOiBbQ0xPU0UsIFNQRUNJQUxfQ0xPU0UsIFNMQVNIX0NMT1NFLCBTTEFTSCwgRVFVQUxTLCBTVFJJTkcsIE5hbWUsIFNdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgeG1sTGV4ZXIgPSBuZXcgTGV4ZXIoeG1sTGV4ZXJEZWZpbml0aW9uLCB7XG4gICAgLy8gUmVkdWNpbmcgdGhlIGFtb3VudCBvZiBwb3NpdGlvbiB0cmFja2luZyBjYW4gcHJvdmlkZSBhIHNtYWxsIHBlcmZvcm1hbmNlIGJvb3N0ICg8MTAlKVxuICAgIC8vIExpa2VseSBiZXN0IHRvIGtlZXAgdGhlIGZ1bGwgaW5mbyBmb3IgYmV0dGVyIGVycm9yIHBvc2l0aW9uIHJlcG9ydGluZyBhbmRcbiAgICAvLyB0byBleHBvc2UgXCJmdWxsZXJcIiBJVG9rZW5zIGZyb20gdGhlIExleGVyLlxuICAgIHBvc2l0aW9uVHJhY2tpbmc6IFwiZnVsbFwiLFxuICAgIGVuc3VyZU9wdGltaXphdGlvbnM6IGZhbHNlLFxuXG4gICAgLy8gVE9ETzogaW5zcGVjdCBkZWZpbml0aW9ucyBmb3IgWE1MIGxpbmUgdGVybWluYXRvcnNcbiAgICBsaW5lVGVybWluYXRvckNoYXJhY3RlcnM6IFtcIlxcblwiXSxcbiAgICBsaW5lVGVybWluYXRvcnNQYXR0ZXJuOiAvXFxufFxcclxcbi9nXG59KVxuIiwiaW1wb3J0IHsgQ3N0UGFyc2VyIH0gZnJvbSBcImNoZXZyb3RhaW5cIjtcblxuaW1wb3J0IHsgdG9rZW5zRGljdGlvbmFyeSBhcyB0IH0gZnJvbSBcIi4veG1sbGV4ZXJcIjtcblxuY2xhc3MgWG1sX3BhcnNlciBleHRlbmRzIENzdFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHQsIHsgbm9kZUxvY2F0aW9uVHJhY2tpbmc6IFwiZnVsbFwiIH0pXG4gICAgICAgIHRoaXMucGVyZm9ybVNlbGZBbmFseXNpcygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQgPSB0aGlzLlJVTEUoXCJkb2N1bWVudFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuT1BUSU9OKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU1VCUlVMRSh0aGlzLnByb2xvZylcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLk1BTlkoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TVUJSVUxFKHRoaXMubWlzYylcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLlNVQlJVTEUodGhpcy5lbGVtZW50KVxuXG4gICAgICAgIHRoaXMuTUFOWTIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TVUJSVUxFMih0aGlzLm1pc2MpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBwcm9sb2cgPSB0aGlzLlJVTEUoXCJwcm9sb2dcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLkNPTlNVTUUodC5YTUxEZWNsT3BlbilcbiAgICAgICAgdGhpcy5NQU5ZKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU1VCUlVMRSh0aGlzLmF0dHJpYnV0ZSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5DT05TVU1FKHQuU1BFQ0lBTF9DTE9TRSlcbiAgICB9KTtcblxuICAgIGNvbnRlbnQgPSB0aGlzLlJVTEUoXCJjb250ZW50XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5PUFRJT04oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TVUJSVUxFKHRoaXMuY2hhcmRhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5NQU5ZKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuT1IoW1xuICAgICAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLlNVQlJVTEUodGhpcy5lbGVtZW50KSB9LFxuICAgICAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLlNVQlJVTEUodGhpcy5yZWZlcmVuY2UpIH0sXG4gICAgICAgICAgICAgICAgeyBBTFQ6ICgpID0+IHRoaXMuQ09OU1VNRSh0LkNEYXRhKSB9LFxuICAgICAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLkNPTlNVTUUodC5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OKSB9LFxuICAgICAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLkNPTlNVTUUodC5Db21tZW50KSB9XG4gICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICB0aGlzLk9QVElPTjIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuU1VCUlVMRTIodGhpcy5jaGFyZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gdGhpcy5SVUxFKFwiZWxlbWVudFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuQ09OU1VNRSh0Lk9QRU4pXG4gICAgICAgIHRoaXMuQ09OU1VNRSh0Lk5hbWUpXG4gICAgICAgIHRoaXMuTUFOWSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNVQlJVTEUodGhpcy5hdHRyaWJ1dGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5PUihbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQUxUOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ09OU1VNRSh0LkNMT1NFLCB7IExBQkVMOiBcIlNUQVJUX0NMT1NFXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TVUJSVUxFKHRoaXMuY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DT05TVU1FKHQuU0xBU0hfT1BFTilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DT05TVU1FMih0Lk5hbWUsIHsgTEFCRUw6IFwiRU5EX05BTUVcIiB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNPTlNVTUUyKHQuQ0xPU0UsIHsgTEFCRUw6IFwiRU5EXCIgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEFMVDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNPTlNVTUUodC5TTEFTSF9DTE9TRSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgfSk7XG5cbiAgICByZWZlcmVuY2UgPSB0aGlzLlJVTEUoXCJyZWZlcmVuY2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLk9SKFtcbiAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLkNPTlNVTUUodC5FbnRpdHlSZWYpIH0sXG4gICAgICAgICAgICB7IEFMVDogKCkgPT4gdGhpcy5DT05TVU1FKHQuQ2hhclJlZikgfVxuICAgICAgICBdKVxuICAgIH0pO1xuXG4gICAgYXR0cmlidXRlID0gdGhpcy5SVUxFKFwiYXR0cmlidXRlXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5DT05TVU1FKHQuTmFtZSlcbiAgICAgICAgdGhpcy5DT05TVU1FKHQuRVFVQUxTKVxuICAgICAgICB0aGlzLkNPTlNVTUUodC5TVFJJTkcpXG4gICAgfSk7XG5cbiAgICBjaGFyZGF0YSA9IHRoaXMuUlVMRShcImNoYXJkYXRhXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5NQU5ZKCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLk9SKFtcbiAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLkNPTlNVTUUodC5URVhUKSB9LFxuICAgICAgICAgICAgeyBBTFQ6ICgpID0+IHRoaXMuQ09OU1VNRSh0LlNFQV9XUykgfVxuICAgICAgICBdKTsgfVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgbWlzYyA9IHRoaXMuUlVMRShcIm1pc2NcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLk9SKFtcbiAgICAgICAgICAgIHsgQUxUOiAoKSA9PiB0aGlzLkNPTlNVTUUodC5Db21tZW50KSB9LFxuICAgICAgICAgICAgeyBBTFQ6ICgpID0+IHRoaXMuQ09OU1VNRSh0LlBST0NFU1NJTkdfSU5TVFJVQ1RJT04pIH0sXG4gICAgICAgICAgICB7IEFMVDogKCkgPT4gdGhpcy5DT05TVU1FKHQuU0VBX1dTKSB9XG4gICAgICAgIF0pXG4gICAgfSk7XG59XG5cbi8vIFJlLXVzZSB0aGUgc2FtZSBwYXJzZXIgaW5zdGFuY2VcbmV4cG9ydCBjb25zdCB4bWxQYXJzZXIgPSBuZXcgWG1sX3BhcnNlcigpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2hldnJvdGFpbl9fOyJdLCJzb3VyY2VSb290IjoiIn0=