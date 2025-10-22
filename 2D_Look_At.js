/**
 * @name 2D Look-At
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Cause one layer to always rotate towards another layer.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Rotation
 */
var a = thisComp.layer(1).toComp(thisComp.layer(1).transform.anchorPoint);
var b = thisComp.layer(2).toComp(thisComp.layer(2).transform.anchorPoint);
value + radiansToDegrees(Math.atan2(a[1] - b[1], a[0] - b[0]));
