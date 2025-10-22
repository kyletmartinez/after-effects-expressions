/**
 * @name Format Number With Commas
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Cnvert any number to a comma-separated string. Maintains decimals as needed.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

/**
 * @property Source Text
 */
function numberWithCommas(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
