/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { __assign, __awaiter, __extends, __generator } from "tslib";
import { MDCFoundation } from '../base/foundation';
import { cssClasses, SortValue, strings } from './constants';
var MDCDataTableFoundation = /** @class */ (function (_super) {
    __extends(MDCDataTableFoundation, _super);
    function MDCDataTableFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCDataTableFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassAtRowIndex: function () { return undefined; },
                getAttributeByHeaderCellIndex: function () { return ''; },
                getHeaderCellCount: function () { return 0; },
                getHeaderCellElements: function () { return []; },
                getRowCount: function () { return 0; },
                getRowElements: function () { return []; },
                getRowIdAtIndex: function () { return ''; },
                getRowIndexByChildElement: function () { return 0; },
                getSelectedRowCount: function () { return 0; },
                getTableBodyHeight: function () { return ''; },
                getTableHeaderHeight: function () { return ''; },
                isCheckboxAtRowIndexChecked: function () { return false; },
                isHeaderRowCheckboxChecked: function () { return false; },
                isRowsSelectable: function () { return false; },
                notifyRowSelectionChanged: function () { return undefined; },
                notifySelectedAll: function () { return undefined; },
                notifySortAction: function () { return undefined; },
                notifyUnselectedAll: function () { return undefined; },
                registerHeaderRowCheckbox: function () { return undefined; },
                registerRowCheckboxes: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassAtRowIndex: function () { return undefined; },
                removeClassNameByHeaderCellIndex: function () { return undefined; },
                setAttributeAtRowIndex: function () { return undefined; },
                setAttributeByHeaderCellIndex: function () { return undefined; },
                setClassNameByHeaderCellIndex: function () { return undefined; },
                setHeaderRowCheckboxChecked: function () { return undefined; },
                setHeaderRowCheckboxIndeterminate: function () { return undefined; },
                setProgressIndicatorStyles: function () { return undefined; },
                setRowCheckboxCheckedAtIndex: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     * Use this if registering checkbox is synchronous.
     */
    MDCDataTableFoundation.prototype.layout = function () {
        if (this.adapter_.isRowsSelectable()) {
            this.adapter_.registerHeaderRowCheckbox();
            this.adapter_.registerRowCheckboxes();
            this.setHeaderRowCheckboxState_();
        }
    };
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     * Use this if registering checkbox is asynchronous.
     */
    MDCDataTableFoundation.prototype.layoutAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.adapter_.isRowsSelectable()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.adapter_.registerHeaderRowCheckbox()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adapter_.registerRowCheckboxes()];
                    case 2:
                        _a.sent();
                        this.setHeaderRowCheckboxState_();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return Returns array of row elements.
     */
    MDCDataTableFoundation.prototype.getRows = function () {
        return this.adapter_.getRowElements();
    };
    /**
     * @return Array of header cell elements.
     */
    MDCDataTableFoundation.prototype.getHeaderCells = function () {
        return this.adapter_.getHeaderCellElements();
    };
    /**
     * Sets selected row ids. Overwrites previously selected rows.
     * @param rowIds Array of row ids that needs to be selected.
     */
    MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
            var isSelected = false;
            if (rowId && rowIds.indexOf(rowId) >= 0) {
                isSelected = true;
            }
            this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
            this.selectRowAtIndex_(rowIndex, isSelected);
        }
        this.setHeaderRowCheckboxState_();
    };
    /**
     * @return Returns array of all row ids.
     */
    MDCDataTableFoundation.prototype.getRowIds = function () {
        var rowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            rowIds.push(this.adapter_.getRowIdAtIndex(rowIndex));
        }
        return rowIds;
    };
    /**
     * @return Returns array of selected row ids.
     */
    MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
        var selectedRowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            if (this.adapter_.isCheckboxAtRowIndexChecked(rowIndex)) {
                selectedRowIds.push(this.adapter_.getRowIdAtIndex(rowIndex));
            }
        }
        return selectedRowIds;
    };
    /**
     * Handles header row checkbox change event.
     */
    MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
        var isHeaderChecked = this.adapter_.isHeaderRowCheckboxChecked();
        for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
            this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
            this.selectRowAtIndex_(rowIndex, isHeaderChecked);
        }
        if (isHeaderChecked) {
            this.adapter_.notifySelectedAll();
        }
        else {
            this.adapter_.notifyUnselectedAll();
        }
    };
    /**
     * Handles change event originated from row checkboxes.
     */
    MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
        var rowIndex = this.adapter_.getRowIndexByChildElement(event.target);
        if (rowIndex === -1) {
            return;
        }
        var selected = this.adapter_.isCheckboxAtRowIndexChecked(rowIndex);
        this.selectRowAtIndex_(rowIndex, selected);
        this.setHeaderRowCheckboxState_();
        var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
        this.adapter_.notifyRowSelectionChanged({ rowId: rowId, rowIndex: rowIndex, selected: selected });
    };
    /**
     * Handles sort action on sortable header cell.
     */
    MDCDataTableFoundation.prototype.handleSortAction = function (eventData) {
        var columnId = eventData.columnId, columnIndex = eventData.columnIndex, headerCell = eventData.headerCell;
        // Reset sort attributes / classes on other header cells.
        for (var index = 0; index < this.adapter_.getHeaderCellCount(); index++) {
            if (index === columnIndex) {
                continue;
            }
            this.adapter_.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED);
            this.adapter_.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter_.setAttributeByHeaderCellIndex(index, strings.ARIA_SORT, SortValue.NONE);
        }
        // Set appropriate sort attributes / classes on target header cell.
        this.adapter_.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED);
        var currentSortValue = this.adapter_.getAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT);
        var sortValue = SortValue.NONE;
        // Set to descending if sorted on ascending order.
        if (currentSortValue === SortValue.ASCENDING) {
            this.adapter_.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter_.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.DESCENDING);
            sortValue = SortValue.DESCENDING;
            // Set to ascending if sorted on descending order.
        }
        else if (currentSortValue === SortValue.DESCENDING) {
            this.adapter_.removeClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter_.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
            sortValue = SortValue.ASCENDING;
        }
        else {
            // Set to ascending by default when not sorted.
            this.adapter_.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
            sortValue = SortValue.ASCENDING;
        }
        this.adapter_.notifySortAction({
            columnId: columnId,
            columnIndex: columnIndex,
            headerCell: headerCell,
            sortValue: sortValue,
        });
    };
    /**
     * Shows progress indicator blocking only the table body content when in
     * loading state.
     */
    MDCDataTableFoundation.prototype.showProgress = function () {
        var height = this.adapter_.getTableBodyHeight();
        var top = this.adapter_.getTableHeaderHeight();
        this.adapter_.setProgressIndicatorStyles({
            height: height,
            top: top,
        });
        this.adapter_.addClass(cssClasses.IN_PROGRESS);
    };
    /**
     * Hides progress indicator when data table is finished loading.
     */
    MDCDataTableFoundation.prototype.hideProgress = function () {
        this.adapter_.removeClass(cssClasses.IN_PROGRESS);
    };
    /**
     * Updates header row checkbox state based on number of rows selected.
     */
    MDCDataTableFoundation.prototype.setHeaderRowCheckboxState_ = function () {
        if (this.adapter_.getSelectedRowCount() === this.adapter_.getRowCount()) {
            this.adapter_.setHeaderRowCheckboxChecked(true);
            this.adapter_.setHeaderRowCheckboxIndeterminate(false);
        }
        else if (this.adapter_.getSelectedRowCount() === 0) {
            this.adapter_.setHeaderRowCheckboxIndeterminate(false);
            this.adapter_.setHeaderRowCheckboxChecked(false);
        }
        else {
            this.adapter_.setHeaderRowCheckboxIndeterminate(true);
            this.adapter_.setHeaderRowCheckboxChecked(false);
        }
    };
    /**
     * Sets the attributes of row element based on selection state.
     */
    MDCDataTableFoundation.prototype.selectRowAtIndex_ = function (rowIndex, selected) {
        if (selected) {
            this.adapter_.addClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
            this.adapter_.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'true');
        }
        else {
            this.adapter_.removeClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
            this.adapter_.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'false');
        }
    };
    return MDCDataTableFoundation;
}(MDCFoundation));
export { MDCDataTableFoundation };
//# sourceMappingURL=foundation.js.map