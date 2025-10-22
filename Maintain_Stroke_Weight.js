/**
 * @name Maintain Stroke Weight
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Maintain the visual weight of a stroke regardless of layer scale.
 *
 * > [!TIP]
 * > Typically used with Stroke Width but can be used with any property.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Stroke Width
 */
var s = length(toComp([0,0]),toComp([0.7071,0.7071])); (s) ? value / s : 0;
