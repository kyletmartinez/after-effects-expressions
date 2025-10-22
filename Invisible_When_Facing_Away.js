/**
 * @name Invisible When Facing Away
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Hide a layer when it faces away from the camera.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Opacity
 */
(toCompVec([0, 0, 1])[2] > 0) ? value : 0
