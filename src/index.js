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
    
    /**
    * Add or return value from inputs
    * 
    * @param {string} value 
    */
    val(value = null) {
        if (value) {
            this.element.value = value;
            return this;
        }
        
        return this.element.value;
    }
    
    /**
    * Set or get attribute
    * 
    * @param {string} attribute 
    * @param {string} value 
    */
    attr(attribute, value) {
        if (value) {
            this.element.setAttribute(attribute, value);
            return this;
        }
        
        return this.element.getAttribute(attribute);
    }
    
    /**
    * Remove attribute
    * 
    * @param {string} attribute 
    */
    removeAttr(attribute) {
        this.element.removeAttribute(attribute);
        return this;
    }
    
    /**
    * Show element
    */
    show() {
        this.element.style.display = 'block';
        return this;
    }
    
    /**
    * Hide element
    */
    hide() {
        this.element.style.display = 'none';
        return this;
    }
    
    /**
    * Add style in element
    * 
    * @param {string|object} values 
    */
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
        
        return this;
        
    }
    
    /**
    * Add class in element
    * 
    * @param {string} className 
    */
    addClass(className) {
        this.element.classList.add(className);
        return this;
    }
    
    /**
    * Remove class from element
    * @param {string} className 
    */
    removeClass(className) {
        if (this.hasClass(className)) {
            this.element.classList.remove(className);
        }

        return this;
    }
    
    /**
    * Check if exist class in element
    * 
    * @param {string} className 
    */
    hasClass(className) {
        return (this.element.classList.contains(className));
    }
    
    /**
    * Toggle class in element
    * 
    * @param {string} className 
    */
    toggleClass(className) {
        this.element.classList.toggle(className);
        return this;
    }
    
    /**
    * Append html in element
    * 
    * @param {string} content 
    */
    html(content = null) {
        if (content) {
            this.element.innerHTML = content;
            return this;
        }
        
        return this.element.innerHTML;
    }
    
    /**
    * Append text in element
    * 
    * @param {string} content 
    */
    text(content = null) {
        if (content) {
            this.element.textContent = content;
            return this;
        }
        
        return this.element.textContent;
    }
    
    /**
    * Append content at the end in element
    * 
    * @param {string} content 
    */
    append(content = null) {
        if (content) {
            this.element.innerHTML += content;
            return this;
        }
        
        return this.element.innerHTML;
    }
    
    /**
    * Append content at the beginning in element
    * 
    * @param {string} content 
    */
    prepend(content = null) {
        if (content) {
            this.element.innerHTML = content + this.element.innerHTML;
            return this;
        }
        
        return this.element.innerHTML;
    }
    
    /**
     * Get Parent Node
     * 
     * @param {String} nodeSelector
     */
    parents(nodeSelector = null) {

        if (!nodeSelector) {
            return this.element.parentNode;
        }

        let current = document.querySelector(nodeSelector)
               list = [];

        target = this._clearClassAndIdName(target);
        
        // each all parents nodes with target, and returns
        while (current.parentNode != undefined && current.parentNode != document.documentElement) {
          current = current.parentNode;
          
          if (current.parentNode.classList.contains(target) || current.id === target) {
            return current.parentNode;
          }
        }
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