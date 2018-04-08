var ComponentModel = require("../model/Component");

var ComponentView = require("../view/Component");

var _sourceHelper = require("../data/helper/sourceHelper");

var detectSourceFormat = _sourceHelper.detectSourceFormat;

var _sourceType = require("../data/helper/sourceType");

var SERIES_LAYOUT_BY_COLUMN = _sourceType.SERIES_LAYOUT_BY_COLUMN;

/**
 * This module is imported by echarts directly.
 *
 * Notice:
 * Always keep this file exists for backward compatibility.
 * Because before 4.1.0, dataset is an optional component,
 * some users may import this module manually.
 */
ComponentModel.extend({
  type: 'dataset',

  /**
   * @protected
   */
  defaultOption: {
    // 'row', 'column'
    seriesLayoutBy: SERIES_LAYOUT_BY_COLUMN,
    // null/'auto': auto detect header, see "module:echarts/data/helper/sourceHelper"
    sourceHeader: null,
    dimensions: null,
    source: null
  },
  optionUpdated: function () {
    detectSourceFormat(this);
  }
});
ComponentView.extend({
  type: 'dataset'
});