/**
 * @name Remove Hair Space
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Use a Text Animator to hide a Hair Space character. Useful when using additional
 * text animators (or a preset like Text Array) to animate word-by-word but you have a compound
 * word that you want to animate separately.
 *
 * @requires Text Animator
 *           Range Selector
 *               Advanced > Units: Index
 *           Tracking Amount: -15
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Range Selector > Start
 */
var idx = thisComp.layer(thisLayer.index).text.sourceText.value.indexOf("\u200A");
idx >= 0 ? idx : 0;

/**
 * @property Range Selector > End
 */
var idx = thisComp.layer(thisLayer.index).text.sourceText.value.indexOf("\u200A");
idx >= 0 ? idx + 1 : 0;
