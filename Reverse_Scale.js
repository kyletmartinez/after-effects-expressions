/**
 * @name Reverse Scale
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Likely should be called "Invert Scale" instead of "Reverse Scale" but I digress.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Scale
 */
var m = 100 / thisComp.layer(1).transform.scale[0];
value * m;
