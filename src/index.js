import { Helpers } from './helpers';
/**
* index.js
* @author Guilherme Modugno
* @description CleanDOM is a library for easy manipulation of gift and events
* @version 1.0
* 
*/
class CleanDOM extends Helpers {
    
    constructor(selector) {
        super();
        this.element = this._treatElement(selector);
    }
    
    val(value = null) {

        if (value) {
            this.element.value = value;
            return this;
        }

        return this.element.value;
    }
    
    attr(attribute, value) {
        
        if (value) {
            this.element.setAttribute(attribute, value);
        }

        return this.element.getAttribute(attribute);
    }

    removeAttr(attribute) {
        this.element.removeAttribute(attribute);
    }
    
    show() {
        this.element.style.display = 'block';
    }
    
    hide() {
        this.element.style.display = 'none';
    }
    
    css(...values) {
                
        // validation
        this._cssValidation(values);

        if (values.length == 2) {
            this.element.style[values[0]] = values[1];

        } else if (values.length == 1) {
           
            values = values.shift();

            let prop;
            for (prop in values) {
                this.element.style[prop] = values[prop];
            }
        }

    }
    
    addClass() {
        
    }
    
    removeClass() {
        
    }
    
    hasClass() {
        
    }
    
    toggleClass() {
        
    }
    
    html() {
        
    }
    
    text() {
        
    }
    
    append() {
        
    }
    
    parents() {
        
    }
    
    children() {
        
    }
    
    find() {
        
    }
    
    remove() {
        
    }
    
    
}

/**
* Export method to use cleanDOM
* @param {NodeElement|HTMLElement|String} selector Selector or Node Element
*/
export const cleanDOM = (selector) => new CleanDOM(selector);