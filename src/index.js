/**
 * @author Guilherme Modugno
 * @description CleanDOM is a library for easy manipulation of gift and events
 * @version 1.0
 * 
 */
class CleanDOM {

  constructor(selector) {
    this.element = this._treatElement(selector);
    
  }

  /**
   * Treat element
   * @param {NodeElement|HTMLElement|String} selector Selector or Node Element
   */
  _treatElement(selector) {
    const element = document.querySelectorAll(selector);

    if (element.length == 0) {
      return undefined;
    }

    return (element.length > 1) ? element : element[0];
  }
}

const cleanDOM = (selector) => new CleanDOM(selector);