/**
 * RegExp Type Predicate. True and Type Cast if obj == RegExp
 * @param obj 
 */
export function isRegExp( obj: any ) : obj is RegExp {
    return obj && (Object.prototype.toString.call(obj) === '[object RegExp]');
}