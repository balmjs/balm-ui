"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2002],{32002:function(e,t,n){n.d(t,{Z:function(){return W}});var i=n(73114),o=n(70655),r=n(48315),a=n(68602),s=n(15398),l=n(78200),u=n(64008),c=n(79282),d=n(91786),h=n(43800),p=n(74507),f={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},E={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},m={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330},A=n(85099),I=n(1721),y=function(e){function t(n,i){void 0===i&&(i={});var r=e.call(this,(0,o.pi)((0,o.pi)({},t.defaultAdapter),n))||this;return r.disabled=!1,r.isMenuOpen=!1,r.useDefaultValidation=!0,r.customValidity=!0,r.lastSelectedIndex=m.UNSET_INDEX,r.clickDebounceTimeout=0,r.recentlyClicked=!1,r.leadingIcon=i.leadingIcon,r.helperText=i.helperText,r}return(0,o.ZT)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),t.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},t.prototype.setSelectedIndex=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1),e>=this.adapter.getMenuItemCount()||(e===m.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()),this.adapter.setSelectedIndex(e),t&&this.adapter.closeMenu(),n||this.lastSelectedIndex===e||this.handleChange(),this.lastSelectedIndex=e)},t.prototype.setValue=function(e,t){void 0===t&&(t=!1);var n=this.adapter.getMenuItemValues().indexOf(e);this.setSelectedIndex(n,!1,t)},t.prototype.getValue=function(){var e=this.adapter.getSelectedIndex(),t=this.adapter.getMenuItemValues();return e!==m.UNSET_INDEX?t[e]:""},t.prototype.getDisabled=function(){return this.disabled},t.prototype.setDisabled=function(e){this.disabled=e,this.disabled?(this.adapter.addClass(f.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(f.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},t.prototype.openMenu=function(){this.adapter.addClass(f.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},t.prototype.setHelperTextContent=function(e){this.helperText&&this.helperText.setContent(e)},t.prototype.layout=function(){if(this.adapter.hasLabel()){var e=this.getValue().length>0,t=this.adapter.hasClass(f.FOCUSED),n=e||t,i=this.adapter.hasClass(f.REQUIRED);this.notchOutline(n),this.adapter.floatLabel(n),this.adapter.setLabelRequired(i)}},t.prototype.layoutOptions=function(){var e=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(e,!1,!0)},t.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var e=this.getSelectedIndex(),t=e>=0?e:0;this.adapter.focusMenuItemAtIndex(t)}},t.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},t.prototype.handleMenuClosed=function(){this.adapter.removeClass(f.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},t.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(f.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},t.prototype.handleMenuItemAction=function(e){this.setSelectedIndex(e,!0)},t.prototype.handleFocus=function(){this.adapter.addClass(f.FOCUSED),this.layout(),this.adapter.activateBottomLine()},t.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},t.prototype.handleClick=function(e){this.disabled||this.recentlyClicked||(this.setClickDebounceTimeout(),this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(e),this.openMenu()))},t.prototype.handleKeydown=function(e){if(!this.isMenuOpen&&this.adapter.hasClass(f.FOCUSED)){var t=(0,I.ku)(e)===I.Fn.ENTER,n=(0,I.ku)(e)===I.Fn.SPACEBAR,i=(0,I.ku)(e)===I.Fn.ARROW_UP,o=(0,I.ku)(e)===I.Fn.ARROW_DOWN;if(!(e.ctrlKey||e.metaKey)&&(!n&&e.key&&1===e.key.length||n&&this.adapter.isTypeaheadInProgress())){var r=n?" ":e.key,a=this.adapter.typeaheadMatchItem(r,this.getSelectedIndex());return a>=0&&this.setSelectedIndex(a),void e.preventDefault()}(t||n||i||o)&&(this.openMenu(),e.preventDefault())}},t.prototype.notchOutline=function(e){if(this.adapter.hasOutline()){var t=this.adapter.hasClass(f.FOCUSED);if(e){var n=m.LABEL_SCALE,i=this.adapter.getLabelWidth()*n;this.adapter.notchOutline(i)}else t||this.adapter.closeOutline()}},t.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon&&this.leadingIcon.setAriaLabel(e)},t.prototype.setLeadingIconContent=function(e){this.leadingIcon&&this.leadingIcon.setContent(e)},t.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},t.prototype.setUseDefaultValidation=function(e){this.useDefaultValidation=e},t.prototype.setValid=function(e){this.useDefaultValidation||(this.customValidity=e),this.adapter.setSelectAnchorAttr("aria-invalid",(!e).toString()),e?(this.adapter.removeClass(f.INVALID),this.adapter.removeMenuClass(f.MENU_INVALID)):(this.adapter.addClass(f.INVALID),this.adapter.addMenuClass(f.MENU_INVALID)),this.syncHelperTextValidity(e)},t.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(f.REQUIRED)&&!this.adapter.hasClass(f.DISABLED)?this.getSelectedIndex()!==m.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},t.prototype.setRequired=function(e){e?this.adapter.addClass(f.REQUIRED):this.adapter.removeClass(f.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",e.toString()),this.adapter.setLabelRequired(e)},t.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},t.prototype.init=function(){var e=this.adapter.getAnchorElement();e&&(this.adapter.setMenuAnchorElement(e),this.adapter.setMenuAnchorCorner(l.Ns.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(f.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(f.INVALID)),this.layout(),this.layoutOptions()},t.prototype.blur=function(){this.adapter.removeClass(f.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(f.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},t.prototype.syncHelperTextValidity=function(e){if(this.helperText){this.helperText.setValidity(e);var t=this.helperText.isVisible(),n=this.helperText.getId();t&&n?this.adapter.setSelectAnchorAttr(E.ARIA_DESCRIBEDBY,n):this.adapter.removeSelectAnchorAttr(E.ARIA_DESCRIBEDBY)}},t.prototype.setClickDebounceTimeout=function(){var e=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout((function(){e.recentlyClicked=!1}),m.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},t}(A.K),C={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},T={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"},g=function(e){function t(n){return e.call(this,(0,o.pi)((0,o.pi)({},t.defaultAdapter),n))||this}return(0,o.ZT)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return T},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),t.prototype.getId=function(){return this.adapter.getAttr("id")},t.prototype.isVisible=function(){return"true"!==this.adapter.getAttr(C.ARIA_HIDDEN)},t.prototype.setContent=function(e){this.adapter.setContent(e)},t.prototype.setValidation=function(e){e?this.adapter.addClass(T.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(T.HELPER_TEXT_VALIDATION_MSG)},t.prototype.setValidationMsgPersistent=function(e){e?this.adapter.addClass(T.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(T.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},t.prototype.getIsValidation=function(){return this.adapter.hasClass(T.HELPER_TEXT_VALIDATION_MSG)},t.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(T.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},t.prototype.setValidity=function(e){if(this.adapter.hasClass(T.HELPER_TEXT_VALIDATION_MSG)){var t=this.adapter.hasClass(T.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);if(!e||t)return this.showToScreenReader(),void(e?this.adapter.removeAttr(C.ROLE):this.adapter.setAttr(C.ROLE,"alert"));this.adapter.removeAttr(C.ROLE),this.hide()}},t.prototype.showToScreenReader=function(){this.adapter.removeAttr(C.ARIA_HIDDEN)},t.prototype.hide=function(){this.adapter.setAttr(C.ARIA_HIDDEN,"true")},t}(A.K),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.attachTo=function(e){return new t(e)},Object.defineProperty(t.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),t.prototype.getDefaultFoundation=function(){var e=this;return new g({addClass:function(t){return e.root.classList.add(t)},removeClass:function(t){return e.root.classList.remove(t)},hasClass:function(t){return e.root.classList.contains(t)},getAttr:function(t){return e.root.getAttribute(t)},setAttr:function(t,n){return e.root.setAttribute(t,n)},removeAttr:function(t){return e.root.removeAttribute(t)},setContent:function(t){e.root.textContent=t}})},t}(r.B),S={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"},v=["click","keydown"],L=function(e){function t(n){var i=e.call(this,(0,o.pi)((0,o.pi)({},t.defaultAdapter),n))||this;return i.savedTabIndex=null,i.interactionHandler=function(e){i.handleInteraction(e)},i}return(0,o.ZT)(t,e),Object.defineProperty(t,"strings",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e,t;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var n=(0,o.XA)(v),i=n.next();!i.done;i=n.next()){var r=i.value;this.adapter.registerInteractionHandler(r,this.interactionHandler)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},t.prototype.destroy=function(){var e,t;try{for(var n=(0,o.XA)(v),i=n.next();!i.done;i=n.next()){var r=i.value;this.adapter.deregisterInteractionHandler(r,this.interactionHandler)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},t.prototype.setDisabled=function(e){this.savedTabIndex&&(e?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",S.ICON_ROLE)))},t.prototype.setAriaLabel=function(e){this.adapter.setAttr("aria-label",e)},t.prototype.setContent=function(e){this.adapter.setContent(e)},t.prototype.handleInteraction=function(e){var t="Enter"===e.key||13===e.keyCode;("click"===e.type||t)&&this.adapter.notifyIconAction()},t}(A.K),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.attachTo=function(e){return new t(e)},Object.defineProperty(t.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),t.prototype.getDefaultFoundation=function(){var e=this;return new L({getAttr:function(t){return e.root.getAttribute(t)},setAttr:function(t,n){return e.root.setAttribute(t,n)},removeAttr:function(t){return e.root.removeAttribute(t)},setContent:function(t){e.root.textContent=t},registerInteractionHandler:function(t,n){return e.listen(t,n)},deregisterInteractionHandler:function(t,n){return e.unlisten(t,n)},notifyIconAction:function(){return e.emit(L.strings.ICON_EVENT,{},!0)}})},t}(r.B),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.attachTo=function(e){return new t(e)},t.prototype.initialize=function(e,t,n,i,o,r){if(void 0===e&&(e=function(e){return new a.g(e)}),void 0===t&&(t=function(e){return new s.k(e)}),void 0===n&&(n=function(e){return new d.A(e)}),void 0===i&&(i=function(e){return new u.g(e)}),void 0===o&&(o=function(e){return new _(e)}),void 0===r&&(r=function(e){return new b(e)}),this.selectAnchor=this.root.querySelector(E.SELECT_ANCHOR_SELECTOR),this.selectedText=this.root.querySelector(E.SELECTED_TEXT_SELECTOR),this.hiddenInput=this.root.querySelector(E.HIDDEN_INPUT_SELECTOR),!this.selectedText)throw new Error("MDCSelect: Missing required element: The following selector must be present: '"+E.SELECTED_TEXT_SELECTOR+"'");if(this.selectAnchor.hasAttribute(E.ARIA_CONTROLS)){var l=document.getElementById(this.selectAnchor.getAttribute(E.ARIA_CONTROLS));l&&(this.helperText=r(l))}this.menuSetup(i);var c=this.root.querySelector(E.LABEL_SELECTOR);this.label=c?e(c):null;var h=this.root.querySelector(E.LINE_RIPPLE_SELECTOR);this.lineRipple=h?t(h):null;var p=this.root.querySelector(E.OUTLINE_SELECTOR);this.outline=p?n(p):null;var m=this.root.querySelector(E.LEADING_ICON_SELECTOR);m&&(this.leadingIcon=o(m)),this.root.classList.contains(f.OUTLINED)||(this.ripple=this.createRipple())},t.prototype.initialSyncWithDOM=function(){var e=this;if(this.handleFocus=function(){e.foundation.handleFocus()},this.handleBlur=function(){e.foundation.handleBlur()},this.handleClick=function(t){e.selectAnchor.focus(),e.foundation.handleClick(e.getNormalizedXCoordinate(t))},this.handleKeydown=function(t){e.foundation.handleKeydown(t)},this.handleMenuItemAction=function(t){e.foundation.handleMenuItemAction(t.detail.index)},this.handleMenuOpened=function(){e.foundation.handleMenuOpened()},this.handleMenuClosed=function(){e.foundation.handleMenuClosed()},this.handleMenuClosing=function(){e.foundation.handleMenuClosing()},this.selectAnchor.addEventListener("focus",this.handleFocus),this.selectAnchor.addEventListener("blur",this.handleBlur),this.selectAnchor.addEventListener("click",this.handleClick),this.selectAnchor.addEventListener("keydown",this.handleKeydown),this.menu.listen(l.j2.CLOSED_EVENT,this.handleMenuClosed),this.menu.listen(l.j2.CLOSING_EVENT,this.handleMenuClosing),this.menu.listen(l.j2.OPENED_EVENT,this.handleMenuOpened),this.menu.listen(c.j2.SELECTED_EVENT,this.handleMenuItemAction),this.hiddenInput){if(this.hiddenInput.value)return this.foundation.setValue(this.hiddenInput.value,!0),void this.foundation.layout();this.hiddenInput.value=this.value}},t.prototype.destroy=function(){this.selectAnchor.removeEventListener("focus",this.handleFocus),this.selectAnchor.removeEventListener("blur",this.handleBlur),this.selectAnchor.removeEventListener("keydown",this.handleKeydown),this.selectAnchor.removeEventListener("click",this.handleClick),this.menu.unlisten(l.j2.CLOSED_EVENT,this.handleMenuClosed),this.menu.unlisten(l.j2.OPENED_EVENT,this.handleMenuOpened),this.menu.unlisten(c.j2.SELECTED_EVENT,this.handleMenuItemAction),this.menu.destroy(),this.ripple&&this.ripple.destroy(),this.outline&&this.outline.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.helperText&&this.helperText.destroy(),e.prototype.destroy.call(this)},Object.defineProperty(t.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(e){this.foundation.setValue(e)},enumerable:!1,configurable:!0}),t.prototype.setValue=function(e,t){void 0===t&&(t=!1),this.foundation.setValue(e,t)},Object.defineProperty(t.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e,!0)},enumerable:!1,configurable:!0}),t.prototype.setSelectedIndex=function(e,t){void 0===t&&(t=!1),this.foundation.setSelectedIndex(e,!0,t)},Object.defineProperty(t.prototype,"disabled",{get:function(){return this.foundation.getDisabled()},set:function(e){this.foundation.setDisabled(e),this.hiddenInput&&(this.hiddenInput.disabled=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leadingIconAriaLabel",{set:function(e){this.foundation.setLeadingIconAriaLabel(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leadingIconContent",{set:function(e){this.foundation.setLeadingIconContent(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"helperTextContent",{set:function(e){this.foundation.setHelperTextContent(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useDefaultValidation",{set:function(e){this.foundation.setUseDefaultValidation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(e){this.foundation.setValid(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"required",{get:function(){return this.foundation.getRequired()},set:function(e){this.foundation.setRequired(e)},enumerable:!1,configurable:!0}),t.prototype.layout=function(){this.foundation.layout()},t.prototype.layoutOptions=function(){this.foundation.layoutOptions(),this.menu.layout(),this.menuItemValues=this.menu.items.map((function(e){return e.getAttribute(E.VALUE_ATTR)||""})),this.hiddenInput&&(this.hiddenInput.value=this.value)},t.prototype.getDefaultFoundation=function(){var e=(0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)({},this.getSelectAdapterMethods()),this.getCommonAdapterMethods()),this.getOutlineAdapterMethods()),this.getLabelAdapterMethods());return new y(e,this.getFoundationMap())},t.prototype.menuSetup=function(e){this.menuElement=this.root.querySelector(E.MENU_SELECTOR),this.menu=e(this.menuElement),this.menu.hasTypeahead=!0,this.menu.singleSelection=!0,this.menuItemValues=this.menu.items.map((function(e){return e.getAttribute(E.VALUE_ATTR)||""}))},t.prototype.createRipple=function(){var e=this,t=(0,o.pi)((0,o.pi)({},h.F.createAdapter({root:this.selectAnchor})),{registerInteractionHandler:function(t,n){e.selectAnchor.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){e.selectAnchor.removeEventListener(t,n)}});return new h.F(this.selectAnchor,new p.l(t))},t.prototype.getSelectAdapterMethods=function(){var e=this;return{getMenuItemAttr:function(e,t){return e.getAttribute(t)},setSelectedText:function(t){e.selectedText.textContent=t},isSelectAnchorFocused:function(){return document.activeElement===e.selectAnchor},getSelectAnchorAttr:function(t){return e.selectAnchor.getAttribute(t)},setSelectAnchorAttr:function(t,n){e.selectAnchor.setAttribute(t,n)},removeSelectAnchorAttr:function(t){e.selectAnchor.removeAttribute(t)},addMenuClass:function(t){e.menuElement.classList.add(t)},removeMenuClass:function(t){e.menuElement.classList.remove(t)},openMenu:function(){e.menu.open=!0},closeMenu:function(){e.menu.open=!1},getAnchorElement:function(){return e.root.querySelector(E.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(t){e.menu.setAnchorElement(t)},setMenuAnchorCorner:function(t){e.menu.setAnchorCorner(t)},setMenuWrapFocus:function(t){e.menu.wrapFocus=t},getSelectedIndex:function(){var t=e.menu.selectedIndex;return t instanceof Array?t[0]:t},setSelectedIndex:function(t){e.menu.selectedIndex=t},focusMenuItemAtIndex:function(t){e.menu.items[t].focus()},getMenuItemCount:function(){return e.menu.items.length},getMenuItemValues:function(){return e.menuItemValues},getMenuItemTextAtIndex:function(t){return e.menu.getPrimaryTextAtIndex(t)},isTypeaheadInProgress:function(){return e.menu.typeaheadInProgress},typeaheadMatchItem:function(t,n){return e.menu.typeaheadMatchItem(t,n)}}},t.prototype.getCommonAdapterMethods=function(){var e=this;return{addClass:function(t){e.root.classList.add(t)},removeClass:function(t){e.root.classList.remove(t)},hasClass:function(t){return e.root.classList.contains(t)},setRippleCenter:function(t){e.lineRipple&&e.lineRipple.setRippleCenter(t)},activateBottomLine:function(){e.lineRipple&&e.lineRipple.activate()},deactivateBottomLine:function(){e.lineRipple&&e.lineRipple.deactivate()},notifyChange:function(t){e.hiddenInput&&(e.hiddenInput.value=t);var n=e.selectedIndex;e.emit(E.CHANGE_EVENT,{value:t,index:n},!0)}}},t.prototype.getOutlineAdapterMethods=function(){var e=this;return{hasOutline:function(){return Boolean(e.outline)},notchOutline:function(t){e.outline&&e.outline.notch(t)},closeOutline:function(){e.outline&&e.outline.closeNotch()}}},t.prototype.getLabelAdapterMethods=function(){var e=this;return{hasLabel:function(){return!!e.label},floatLabel:function(t){e.label&&e.label.float(t)},getLabelWidth:function(){return e.label?e.label.getWidth():0},setLabelRequired:function(t){e.label&&e.label.setRequired(t)}}},t.prototype.getNormalizedXCoordinate=function(e){var t=e.target.getBoundingClientRect();return(this.isTouchEvent(e)?e.touches[0].clientX:e.clientX)-t.left},t.prototype.isTouchEvent=function(e){return Boolean(e.touches)},t.prototype.getFoundationMap=function(){return{helperText:this.helperText?this.helperText.foundationForSelect:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForSelect:void 0}},t}(r.B),D=n(62268),N=n(63816),V=n(85946),x=n(29221),R=n(68713),M=n(42361),k=n(42818),B=n(95586),w=n(5522),P=n(39311);const F=["aria-required","aria-disabled","aria-controls","aria-describedby"],U=(0,i.createElementVNode)("span",{class:"mdc-select__ripple"},null,-1),H=["textContent"],q=(0,i.createElementVNode)("span",{class:"mdc-select__selected-text-container"},[(0,i.createElementVNode)("span",{class:"mdc-select__selected-text"})],-1),j={class:"mdc-select__dropdown-icon"},X=(0,i.createElementVNode)("svg",{class:"mdc-select__dropdown-icon-graphic",viewBox:"7 10 10 5",focusable:"false"},[(0,i.createElementVNode)("polygon",{class:"mdc-select__dropdown-icon-inactive",stroke:"none","fill-rule":"evenodd",points:"7 10 12 15 17 10"}),(0,i.createElementVNode)("polygon",{class:"mdc-select__dropdown-icon-active",stroke:"none","fill-rule":"evenodd",points:"7 15 12 10 17 15"})],-1),G=["data-value","aria-selected","aria-disabled"],$=["textContent"],Z={TYPES:{filled:0,outlined:1},cssClasses:{icon:"mdc-select__icon"},EVENTS:{CHANGE:"update:modelValue",SELECTED:"selected"},DEFAULT_SELECTED_INDEX:-1},K={name:"UiSelect",customOptions:{UI_GLOBAL:w.Z,UI_SELECT:Z,deprecatedListClassNameMap:P.Yc}};var W=Object.assign(K,{props:{type:{type:[String,Number],default:0},outlined:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:""},options:{type:Array,default:()=>[]},optionFormat:{type:Object,default:()=>B.A},defaultLabel:{type:String,default:""},defaultValue:{type:[String,Number],default:""},...x.U,label:{type:String,default:""},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},fullwidth:{type:Boolean,default:!1},withLeadingIcon:{type:Boolean,default:!1},...R.KI,inside:{type:Boolean,default:!1}},emits:[Z.EVENTS.CHANGE,Z.EVENTS.SELECTED],setup(e,t){let{emit:n}=t;const o=e,r=(0,i.useSlots)(),a=((0,i.getCurrentInstance)().parent,(0,i.ref)(null)),s=(0,i.reactive)({$select:null,currentOptions:[],selectedValue:o.modelValue}),{currentOptions:l,selectedValue:u}=(0,i.toRefs)(s),{materialIcon:c}=(0,x.J)(o),d=(0,i.computed)((()=>(0,k.Z)(o,Z.TYPES,"outlined"))),h=(0,i.computed)((()=>!!(c.value||o.withLeadingIcon||r.icon))),p=(0,i.computed)((()=>!(o.label||r.default))),f=(0,i.computed)((()=>({"mdc-select":!0,"mdc-select--filled":!d.value,"mdc-select--outlined":d.value,"mdc-select--fullwidth":o.fullwidth,"mdc-select--with-leading-icon":h.value,"mdc-select--no-label":p.value,"mdc-select--required":o.required,"mdc-select--disabled":o.disabled,"mdc-select--in-dialog":o.inside}))),m=(0,i.computed)((()=>["mdc-select__menu","mdc-menu","mdc-menu-surface",{"mdc-menu-surface--fullwidth":o.fullwidth}]));function A(){let e=[...arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.options];if(o.defaultLabel){let t={};t[o.optionFormat.label]=o.defaultLabel,t[o.optionFormat.value]=o.defaultValue||" ",e.unshift(t)}s.currentOptions=e,(0,i.nextTick)((()=>{s.$select.layoutOptions(),I()}))}function I(){let e=Z.DEFAULT_SELECTED_INDEX+1;for(let t=0,n=s.currentOptions.length;t<n;t++){if(s.currentOptions[t][o.optionFormat.value]===s.selectedValue){e=t;break}}e>Z.DEFAULT_SELECTED_INDEX&&(s.$select.selectedIndex=e)}function y(){o.inside&&s.$select.menu.open&&(s.$select.menu.open=!1)}return(0,i.onBeforeMount)((()=>(0,B.C)("<ui-select>",o.optionFormat))),(0,i.onMounted)((()=>{s.$select=new O(a.value),o.helperTextId&&R.CQ.set(`${o.helperTextId}-previous`,s.$select),s.$select.listen(E.CHANGE_EVENT,(e=>{let{detail:t}=e;(0,i.nextTick)((()=>{if(o.defaultLabel?s.currentOptions.length>1:s.currentOptions.length){const e=function(e){let t=o.options[e];if(o.defaultLabel){let n={};n[o.optionFormat.value]=" "===o.defaultValue?"":o.defaultValue,n[o.optionFormat.label]=o.defaultLabel,t=0===e?n:o.options[e-1]}return{index:e,value:t[o.optionFormat.value],label:t[o.optionFormat.label]}}(t.index);n(Z.EVENTS.CHANGE,e.value),n(Z.EVENTS.SELECTED,e)}}))})),o.inside&&(s.$select.menu.quickOpen=!0),A(),(0,i.watch)((()=>o.modelValue),(e=>{s.selectedValue=e,I()})),(0,i.watch)((()=>o.options),(e=>A(e)),{deep:!0}),(0,i.watch)((()=>o.disabled),(e=>{s.$select&&(s.$select.disabled=e)}))})),(t,n)=>((0,i.openBlock)(),(0,i.createElementBlock)("div",{ref_key:"select",ref:a,class:(0,i.normalizeClass)((0,i.unref)(f))},[(0,i.createElementVNode)("div",{class:"mdc-select__anchor",role:"button","aria-haspopup":"listbox","aria-required":e.required,"aria-disabled":e.disabled,"aria-controls":t.helperTextId,"aria-describedby":t.helperTextId},[(0,i.unref)(d)?((0,i.openBlock)(),(0,i.createBlock)(V.Z,{key:0,"has-label":!(0,i.unref)(p)},{default:(0,i.withCtx)((()=>[(0,i.createVNode)(D.Z,null,{default:(0,i.withCtx)((()=>[(0,i.renderSlot)(t.$slots,"default",{},(()=>[(0,i.createTextVNode)((0,i.toDisplayString)(e.label),1)]))])),_:3})])),_:3},8,["has-label"])):((0,i.openBlock)(),(0,i.createElementBlock)(i.Fragment,{key:1},[U,(0,i.unref)(p)?(0,i.createCommentVNode)("",!0):((0,i.openBlock)(),(0,i.createBlock)(D.Z,{key:0},{default:(0,i.withCtx)((()=>[(0,i.renderSlot)(t.$slots,"default",{},(()=>[(0,i.createTextVNode)((0,i.toDisplayString)(e.label),1)]))])),_:3}))],64)),(0,i.renderSlot)(t.$slots,"icon",{iconClass:Z.cssClasses.icon},(()=>[(0,i.unref)(c)?((0,i.openBlock)(),(0,i.createElementBlock)("i",{key:0,class:(0,i.normalizeClass)((0,i.unref)(w.Z).getMaterialIconClass(Z.cssClasses.icon)),textContent:(0,i.toDisplayString)((0,i.unref)(c))},null,10,H)):(0,i.createCommentVNode)("",!0)])),q,(0,i.createElementVNode)("span",j,[(0,i.renderSlot)(t.$slots,"dropdown-icon",{},(()=>[X]))]),(0,i.unref)(d)?(0,i.createCommentVNode)("",!0):((0,i.openBlock)(),(0,i.createBlock)(N.Z,{key:2}))],8,F),(0,i.createElementVNode)("div",{class:(0,i.normalizeClass)((0,i.unref)(m))},[(0,i.createElementVNode)("div",{class:"mdc-drawer-scrim",onClick:y}),(0,i.createElementVNode)("ul",{class:(0,i.normalizeClass)((0,i.unref)(P.Yc)["mdc-list"]),role:"listbox"},[((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)((0,i.unref)(l),((t,n)=>((0,i.openBlock)(),(0,i.createElementBlock)("li",{key:n,class:(0,i.normalizeClass)([(0,i.unref)(P.Yc)["mdc-list-item"],...(0,i.unref)(M.p)({selected:t[e.optionFormat.value]===(0,i.unref)(u),disabled:t.disabled})]),"data-value":t[e.optionFormat.value],"aria-selected":t[e.optionFormat.value]===(0,i.unref)(u),"aria-disabled":t.disabled,role:"option"},[(0,i.createElementVNode)("span",{class:(0,i.normalizeClass)((0,i.unref)(P.Yc)["mdc-list-item__ripple"])},null,2),t[e.optionFormat.label]?((0,i.openBlock)(),(0,i.createElementBlock)("span",{key:0,class:(0,i.normalizeClass)((0,i.unref)(P.Yc)["mdc-list-item__text"]),textContent:(0,i.toDisplayString)(t[e.optionFormat.label])},null,10,$)):(0,i.createCommentVNode)("",!0)],10,G)))),128))],2)],2)],2))}})}}]);