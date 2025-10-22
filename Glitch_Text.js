/**
 * @name Glitch Text
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Use a Slider Control to animate glitch text from 0% to 100%.
 *
 * > [!WARNING]
 * > Not all fonts support the default characters.
 *
 * @requires Effects > Slider Control > "Posterize Time"
 *           Effects > Slider Control > "Character Offset Percentage"
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Source Text
 */
posterizeTime(effect("Posterize Time")("Slider").value);
var probability = effect("Character Offset Percentage")("Slider").value / 100;
var characters = ["░","▒","▓","<",">","/"];

var textLines = value.split("\r");
var numTextLines = textLines.length;
for (var l = 0; l < numTextLines; l++) {
    var oldLine = textLines[l];
    var newLine = getNewLine(oldLine);
    textLines[l] = newLine;
}

function getNewLine(oldLine) {
    var newLine = "";
    for (var i = 0; i < oldLine.length; i++) {
        if (random() <= probability) {
            newLine += getRandomCharacter(characters);
        } else {
            newLine += oldLine.charAt(i);
        }
    }
    return newLine;
}

function getRandomCharacter(a) {
    return a[Math.floor(random() * a.length)];
}

textLines.join("\r");
