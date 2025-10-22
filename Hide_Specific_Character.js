/**
 * @name Hide Specific Character
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Use with a Text Animator to hide of all instances of a specific character.
 *
 * > [!TIP]
 * > Can easily be inverted with "===" instead of "!==".
 *
 * @requires Text Animator
 *           Expression Selector
 *           Opacity: 0%
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Expression Selector > Amount
 */
(text.sourceText.substr(textIndex - 1, 1) !== "%") ? 0 : 100;
