/**
 * @name Offset Posterize Time
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Using posterizeTime(fps) in an expression will always start counting frames from
 * the first frame in the composition. Use this replacement to instead start counting frames from
 * the In Point of a layer.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

var fps = 3;
var offset = time - inPoint;
var posterizedOffset = Math.floor(offset * fps) / fps;
var posterizedTime = posterizedOffset + inPoint;
valueAtTime(posterizedTime);
