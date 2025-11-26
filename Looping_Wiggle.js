/**
 * @name Looping Wiggle
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Loop a wiggle over a set period of seconds. Originally provided by Dan Ebberts.
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

var frequency = 1;
var amplitude = 100;
var loopTime = 3; // seconds

var t = time % loopTime;
var wiggle1 = wiggle(frequency, amplitude, 1, 0.5, t);
var wiggle2 = wiggle(frequency, amplitude, 1, 0.5, t - loopTime);

linear(t, 0, loopTime, wiggle1, wiggle2);
