/**
 * @name Text Reveal
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Use a Slider Control instead of a Text Animator to animate the reveal of text.
 * Useful when you want to animate text appearing but also need to affect the dimensions of a the
 * bounding box.
 *
 * @requires Effects > Slider Control > "Text Reveal"
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Sourch Text
 */
var revealAmount = effect("Text Reveal")("Slider");
var fullText = text.sourceText;
var totalChars = fullText.length;
var charsToShow = Math.floor((revealAmount / 100) * totalChars);
fullText.substring(0, charsToShow);
