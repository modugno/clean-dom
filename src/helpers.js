/**
* Helpers.js
* @description Helpers to CleanDOM
*/
export class Helpers {
    
    /**
    * Treat element
    * @param {NodeElement|HTMLElement|String} selector Selector or Node Element
    */
    _treatElement(selector) {

        // defines the element type
        let element;

        // selector
        if (typeof selector === 'string') {
            element = document.querySelectorAll(selector);
            
        // html element
        } else if (selector.nodeType && selector.nodeType === 1) {
            return selector;
        
        // document element
        } else if (selector.nodeType && selector.nodeType === 9) {
            return document.body;
        }
        
        if (!element) {
            return document.body;
        }

        if (element.length == 0) {
            return undefined;
        }
        
        return (element.length > 1) ? element : element[0];
    }

    _cssValidation(values) {
        if (!values.length) {
            throw new Error('The CSS method needs a parameter');
        } else if (values.length > 2) {
            throw new Error('The CSS method has many parameters');
        }
    }

    /**
     * Clear . from class, and # from ID
     * 
     * @param {String} selector 
     */
    _clearClassAndIdName(selector) {
        selector = selector.replace('.', '');
        selector = selector.replace('#', '');
        return selector;
    }
}