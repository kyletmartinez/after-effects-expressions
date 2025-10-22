/**
 * @name Trigger Animation With Markers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @license This expression is provided "as is," without warranty of any kind, expressed or
 * implied. In no event shall the author be held liable for any damages arising in any way from the
 * use of this expression.
 */

var n = 0;
if (marker.numKeys > 0) {
    n = marker.nearestKey(time).index;
    if (marker.key(n).time > time) {
        n--;
    }
}

if (n == 0) {
    0;
} else {
    var m = marker.key(n);
    try {
        sourceMarker = source.marker.key(m.comment);
        var oldStart = sourceMarker.time;
        var oldDuration = sourceMarker.duration;
        var newStart = m.time;
        var newDuration = m.duration;
        if (m.duration == 0) {
            oldDuration = source.duration - sourceMarker.time;
            if (source.marker.numKeys > sourceMarker.index) {
                oldDuration = source.marker.key(sourceMarker.index + 1).time - sourceMarker.time;
            }
            newDuration = oldDuration;
        }
        var oldEnd = oldStart + oldDuration;
        var newEnd = newStart + newDuration;
        linear(time, newStart, newEnd, oldStart, oldEnd);
    } catch (err) {
        0;
    }
}