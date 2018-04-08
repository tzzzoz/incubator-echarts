var _number = require("../../util/number");

var parsePercent = _number.parsePercent;

var _util = require("zrender/lib/core/util");

var retrieve2 = _util.retrieve2;

function calculateCandleWidth(seriesModel, data) {
  var baseAxis = seriesModel.getBaseAxis();
  var extent;
  var bandWidth = baseAxis.type === 'category' ? baseAxis.getBandWidth() : (extent = baseAxis.getExtent(), Math.abs(extent[1] - extent[0]) / data.count());
  var barMaxWidth = parsePercent(retrieve2(seriesModel.get('barMaxWidth'), bandWidth), bandWidth);
  var barMinWidth = parsePercent(retrieve2(seriesModel.get('barMinWidth'), 1), bandWidth);
  var barWidth = seriesModel.get('barWidth');
  return barWidth != null ? parsePercent(barWidth, bandWidth) // Put max outer to ensure bar visible in spite of overlap.
  : Math.max(Math.min(bandWidth / 2, barMaxWidth), barMinWidth);
}

exports.calculateCandleWidth = calculateCandleWidth;