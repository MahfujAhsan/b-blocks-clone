/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/BColor/BColor.js":
/*!**************************************!*\
  !*** ../Components/BColor/BColor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BColor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BColor.scss */ "../Components/BColor/BColor.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "../Components/index.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Color' (String)
 * @props value: value of color (String)
 * @props defaultColor: default color for reset color
 * @props onChange: (Function)
 * @props disableAlpha: Disable alpha of color (Boolean)
 * @return color (String)
 */






const BColor = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color:', 'bplugins'),
    value,
    onChange,
    defaultColor,
    disableAlpha = false
  } = props;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  const themeColors = wp.data.select('core/block-editor').getSettings().colors;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    className: "bPlDropdownContainer bColor",
    contentClassName: "bPlDropdownPopover bColorDropdownPopover",
    position: "top right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bColorButtonContainer"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "bColorButton",
        isPrimary: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: {
          backgroundColor: value || 'transparent'
        }
      })), defaultColor && defaultColor != state && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "bPlResetVal",
        icon: "image-rotate",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset', 'bplugins'),
        onClick: () => {
          onChange(defaultColor);
          setState(defaultColor);
        }
      }));
    },
    renderContent: _ref2 => {
      let {
        isOpen,
        onClose
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
        color: value || '',
        disableAlpha: disableAlpha,
        onChangeComplete: c => {
          onChange(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`);
          setState(c.hex);
        }
      }), themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "themeColors"
      }, themeColors.map(_ref3 => {
        let {
          color
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bColorButtonContainer"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "bColorButton",
          onClick: () => {
            onChange(color);
            setState(color);
            onClose;
          },
          "aria-expanded": isOpen,
          style: {
            backgroundColor: value ? color : 'transparent'
          }
        }));
      })));
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BColor);

/***/ }),

/***/ "../Components/BDevice/BDevice.js":
/*!****************************************!*\
  !*** ../Components/BDevice/BDevice.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BDevice_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BDevice.scss */ "../Components/BDevice/BDevice.scss");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/icons */ "../Components/utils/icons.js");

/**
 * @props device: 'desktop' (String)
 * @props onChange: (Function)
 * @props style: {} (Object)
 * @return Selected device
 */




const BDevice = _ref => {
  let {
    device = 'desktop',
    onChange,
    className = 'iconButton',
    style
  } = _ref;
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  window.addEventListener('click', () => setShow(false));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'bDevice',
    style: style
  }, !show && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    title: device[0].toUpperCase() + device.slice(1),
    onClick: event => {
      setShow(true);
      event.stopPropagation();
    }
  }, device == 'desktop' ? _utils_icons__WEBPACK_IMPORTED_MODULE_3__.desktopIcon : device == 'tablet' ? _utils_icons__WEBPACK_IMPORTED_MODULE_3__.tabletIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_3__.mobileIcon), show && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'bDevicePopup'
  }, [{
    value: 'desktop',
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_3__.desktopIcon
  }, {
    value: 'tablet',
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_3__.tabletIcon
  }, {
    value: 'mobile',
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_3__.mobileIcon
  }].map(_ref2 => {
    let {
      icon,
      value
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: value,
      className: className,
      title: value[0].toUpperCase() + value.slice(1),
      onClick: () => {
        onChange(value);
        setShow(false);
      }
    }, icon);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BDevice);

/***/ }),

/***/ "../Components/Background/Background.js":
/*!**********************************************!*\
  !*** ../Components/Background/Background.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "../Components/Background/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Background' (String)
 * @props background (required): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 */



const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;



const Background = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'bplugins'),
    value = {},
    onChange,
    defaults = {},
    isSolid = true,
    isGradient = true,
    isImage = true
  } = props;
  const defaultVal = {
    type: 'solid',
    color: '#000000b3',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)',
    image: {},
    position: 'center center',
    attachment: 'initial',
    repeat: 'no-repeat',
    size: 'cover',
    overlayColor: '#000000b3'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BtnGroup, {
      value: getValue('type'),
      onChange: val => setValue('type', val),
      options: false === isSolid ? _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes.filter(b => b.value !== 'solid') : false === isGradient ? _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes.filter(b => b.value !== 'gradient') : false === isImage ? _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes.filter(b => b.value !== 'image') : _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes
    })), 'solid' === getValue('type') && isSolid && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), 'gradient' === getValue('type') && isGradient && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      className: "mt20",
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _utils_options__WEBPACK_IMPORTED_MODULE_4__.gradients
    }), 'image' === getValue('type') && isImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: "mb5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.InlineDetailMediaUpload, {
      types: ['image'],
      value: getValue('image'),
      onChange: val => setValue('image', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalAlignmentMatrixControl, {
      value: getValue('position'),
      onChange: val => setValue('position', val)
    }), value?.position && value?.position !== getDefault('position') && resetValue('position')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attachment:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('attachment'),
      onChange: val => setValue('attachment', val),
      options: _options__WEBPACK_IMPORTED_MODULE_5__.attachments
    }), value?.attachments && value?.attachments !== getDefault('attachments') && resetValue('attachments')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('repeat'),
      onChange: val => setValue('repeat', val),
      options: _options__WEBPACK_IMPORTED_MODULE_5__.repeats
    }), value?.repeat && value?.repeat !== getDefault('repeat') && resetValue('repeat')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('size'),
      onChange: val => setValue('size', val),
      options: _options__WEBPACK_IMPORTED_MODULE_5__.sizes
    }), value?.size && value?.size !== getDefault('size') && resetValue('size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Color:', 'bplugins'),
      value: getValue('overlayColor'),
      onChange: val => setValue('overlayColor', val),
      defaultColor: getDefault('overlayColor')
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),

/***/ "../Components/Background/options.js":
/*!*******************************************!*\
  !*** ../Components/Background/options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachments: () => (/* binding */ attachments),
/* harmony export */   bgTypes: () => (/* binding */ bgTypes),
/* harmony export */   repeats: () => (/* binding */ repeats),
/* harmony export */   sizes: () => (/* binding */ sizes)
/* harmony export */ });
const bgTypes = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Gradient',
  value: 'gradient'
}, {
  label: 'Image',
  value: 'image'
}];
const attachments = [{
  label: 'Initial',
  value: 'initial'
}, {
  label: 'Scroll',
  value: 'scroll'
}, {
  label: 'Fixed',
  value: 'fixed'
}, {
  label: 'Local',
  value: 'local'
}];
const repeats = [{
  label: 'No Repeat',
  value: 'no-repeat'
}, {
  label: 'Repeat',
  value: 'repeat'
}, {
  label: 'Repeat X',
  value: 'repeat-x'
}, {
  label: 'Repeat Y',
  value: 'repeat-y'
}];
const sizes = [{
  label: 'Cover',
  value: 'cover'
}, {
  label: 'Auto',
  value: 'auto'
}, {
  label: 'Contain',
  value: 'contain'
}];

/***/ }),

/***/ "../Components/BorderControl/BorderControl.js":
/*!****************************************************!*\
  !*** ../Components/BorderControl/BorderControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Border Settings' (String)
 * @props border: { width, style, color, side, radius } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { width, style, color, side, radius } (Object)
 * @return Border Properties (Object)
 */





const BorderControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border:', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    width: '0px',
    style: 'solid',
    color: '#0000',
    side: 'all',
    radius: '0px'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width:', 'bplugins'),
      labelPosition: "left",
      value: getValue('width'),
      onChange: val => setValue('width', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)()]
    }), value?.width && value?.width !== getDefault('width') && resetValue('width')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('style'),
      onChange: val => setValue('style', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.borderStyles
    }), value?.style && value?.style !== getDefault('style') && resetValue('style')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sides:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('side'),
      onChange: val => setValue('side', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.sides
    }), value?.side && value?.side !== getDefault('side') && resetValue('side')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Radius:', 'bplugins'),
      labelPosition: "left",
      value: getValue('radius'),
      onChange: val => setValue('radius', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(50), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.perUnit)(50), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(3), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)(3)],
      isResetValueOnUnitChange: true
    }), value?.radius && value?.radius !== getDefault('radius') && resetValue('radius')))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControl);

/***/ }),

/***/ "../Components/BtnGroup/BtnGroup.js":
/*!******************************************!*\
  !*** ../Components/BtnGroup/BtnGroup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "../Components/index.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props value (String)
 * @props onChange: (Function)
 * @return Value (String)
 */



const BtnGroup = props => {
  const {
    className,
    label = '',
    value,
    onChange,
    options,
    isIcon = false,
    isTextIcon = false,
    size
  } = props;
  const Buttons = _ref => {
    let {
      className = ''
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      className: `bPlBtnGroup ${className || null}`
    }, Object.values(options).map(obj => {
      const {
        value: val,
        icon = '',
        label = '',
        def = ''
      } = obj;
      const isActive = value === val;
      const isSm = size === 'small';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        key: val,
        label: label,
        showTooltip: true,
        tooltipPosition: "top",
        icon: isIcon ? icon : null,
        variant: isActive ? 'primary' : '',
        "aria-pressed": isActive,
        isSmall: isSm,
        isMedium: !isSm,
        onClick: () => onChange(val, def && def)
      }, isTextIcon ? icon : isIcon ? '' : label);
    }));
  };
  return label ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_2__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Buttons, null)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Buttons, {
    className: className
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnGroup);

/***/ }),

/***/ "../Components/ColorControl/ColorControl.js":
/*!**************************************************!*\
  !*** ../Components/ColorControl/ColorControl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColorControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorControl.scss */ "../Components/ColorControl/ColorControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Color' (String)
 * @props value: value of color (String)
 * @props defaultColor: default color for reset color
 * @props onChange: (Function)
 * @props disableAlpha: Disable alpha of color (Boolean)
 * @return color (String)
 */





const ColorControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
    value,
    onChange,
    defaultColor,
    disableAlpha
  } = props;
  const themeColors = wp.data.select('core/block-editor').getSettings().colors;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer bPlColor",
    contentClassName: "bPlDropdownPopover bPlColorPopover",
    position: "top center",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bPlColorButtonContainer"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "bPlColorButton",
        isPrimary: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: {
          backgroundColor: value || 'transparent'
        }
      })), defaultColor && defaultColor != value && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "bPlResetVal",
        icon: "image-rotate",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'bplugins'),
        onClick: () => onChange(defaultColor)
      }));
    },
    renderContent: _ref2 => {
      let {
        isOpen,
        onClose
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        className: "bPlColorControl",
        color: value || '',
        onChangeComplete: c => {
          const alphaToHex = disableAlpha ? '' : ('0' + Math.round(c.rgb.a * 255).toString(16)).slice(-2);
          onChange(c.hex + alphaToHex);
        },
        disableAlpha: disableAlpha
      }), themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "themeColors"
      }, themeColors.map(_ref3 => {
        let {
          color
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bColorButtonContainer"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "bColorButton",
          onClick: () => {
            onChange(color);
            setState(color);
            onClose;
          },
          "aria-expanded": isOpen,
          style: {
            backgroundColor: value ? color : 'transparent'
          }
        }));
      })));
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorControl);

/***/ }),

/***/ "../Components/ColorsControl/ColorsControl.js":
/*!****************************************************!*\
  !*** ../Components/ColorsControl/ColorsControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Typography' (String)
 * @props colors (required): { color, bgType, bg, gradient } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { color, bgType, bg, gradient } (Object)
 */



const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;

// Variables


const ColorsControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors:', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    color: '#333',
    bgType: 'solid',
    bg: '#0000',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: ""
  }, label, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: getValue('color')
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: getValue('gradient' === getValue('bgType') ? 'gradient' : 'bg')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BtnGroup, {
      value: getValue('bgType'),
      onChange: val => setValue('bgType', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.bgTypes,
      size: "small"
    })), 'gradient' === getValue('bgType') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _utils_options__WEBPACK_IMPORTED_MODULE_4__.gradients
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color:', 'bplugins'),
      value: getValue('bg'),
      onChange: val => setValue('bg', val),
      defaultColor: getDefault('bg')
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorsControl);

/***/ }),

/***/ "../Components/IconControl/IconControl.js":
/*!************************************************!*\
  !*** ../Components/IconControl/IconControl.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IconControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconControl.scss */ "../Components/IconControl/IconControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _iconLists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iconLists */ "../Components/IconControl/iconLists.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Select Icon' (String)
 * @props icon (required): { class, fontSize, color } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { class, fontSize, color } (Object)
 */




const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker;




const IconControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Icon:', 'bplugins'),
    value = {},
    onChange,
    defaults = {},
    isSize = true,
    isColor = true
  } = props;
  const defaultVal = {
    class: '',
    name: '',
    fontSize: 16,
    colorType: 'solid',
    color: 'inherit',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });

  // Font family searching
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isSearching, setIsSearching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const searchIcons = _iconLists__WEBPACK_IMPORTED_MODULE_7__["default"].filter(_ref => {
    let {
      name
    } = _ref;
    return name.replace(/-/g, ' ').toLowerCase().includes(query.toLowerCase());
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `bPlIconTitle ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
    className: "mt0 mb0"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: value?.class
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bPlIconSelect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "search",
    value: query,
    onClick: () => setIsSearching(!isSearching),
    placeholder: getValue('name')?.replace(/-/g, ' ') || 'Search & Select Icon',
    onChange: e => setQuery(e.target.value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `dashicon dashicons dashicons-${isSearching ? 'arrow-up' : 'arrow-down'}`,
    onClick: () => setIsSearching(!isSearching)
  }), isSearching && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bPlIconLists"
  }, searchIcons?.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    key: item?.class,
    text: item?.name?.replace(/-/g, ' '),
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: () => {
      onChange({
        ...value,
        ['class']: item?.class,
        ['name']: item?.name
      });
      setQuery('');
      setIsSearching(false);
    },
    className: item?.class
  }))))), isSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: getValue('fontSize'),
    onChange: val => setValue('fontSize', val),
    min: 0,
    max: 400,
    step: 1,
    allowReset: true,
    resetFallbackValue: getDefault('fontSize'),
    initialPosition: getDefault('fontSize')
  })), isColor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color Type:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.BtnGroup, {
    value: getValue('colorType'),
    onChange: val => setValue('colorType', val),
    options: _utils_options__WEBPACK_IMPORTED_MODULE_6__.bgTypes,
    size: "small"
  })), 'gradient' === getValue('colorType') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
    value: getValue('gradient'),
    onChange: val => setValue('gradient', val),
    gradients: _utils_options__WEBPACK_IMPORTED_MODULE_6__.gradients
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.BColor, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color:', 'bplugins'),
    value: getValue('color'),
    onChange: val => setValue('color', val),
    defaultColor: getDefault('color')
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconControl);

/***/ }),

/***/ "../Components/IconControl/iconLists.js":
/*!**********************************************!*\
  !*** ../Components/IconControl/iconLists.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  class: '',
  name: 'no-icon'
}, {
  class: 'fab fa-500px',
  name: '500px'
}, {
  class: 'fab fa-accessible-icon',
  name: 'accessible-icon'
}, {
  class: 'fab fa-accusoft',
  name: 'accusoft'
}, {
  class: 'fab fa-acquisitions-incorporated',
  name: 'acquisitions-incorporated'
}, {
  class: 'fas fa-ad',
  name: 'ad'
}, {
  class: 'fas fa-address-book',
  name: 'address-book'
}, {
  class: 'far fa-address-book',
  name: 'address-book'
}, {
  class: 'fas fa-address-card',
  name: 'address-card'
}, {
  class: 'far fa-address-card',
  name: 'address-card'
}, {
  class: 'fas fa-adjust',
  name: 'adjust'
}, {
  class: 'fab fa-adn',
  name: 'adn'
}, {
  class: 'fab fa-adversal',
  name: 'adversal'
}, {
  class: 'fab fa-affiliatetheme',
  name: 'affiliatetheme'
}, {
  class: 'fas fa-air-freshener',
  name: 'air-freshener'
}, {
  class: 'fab fa-airbnb',
  name: 'airbnb'
}, {
  class: 'fab fa-algolia',
  name: 'algolia'
}, {
  class: 'fas fa-align-center',
  name: 'align-center'
}, {
  class: 'fas fa-align-justify',
  name: 'align-justify'
}, {
  class: 'fas fa-align-left',
  name: 'align-left'
}, {
  class: 'fas fa-align-right',
  name: 'align-right'
}, {
  class: 'fab fa-alipay',
  name: 'alipay'
}, {
  class: 'fas fa-allergies',
  name: 'allergies'
}, {
  class: 'fab fa-amazon',
  name: 'amazon'
}, {
  class: 'fab fa-amazon-pay',
  name: 'amazon-pay'
}, {
  class: 'fas fa-ambulance',
  name: 'ambulance'
}, {
  class: 'fas fa-american-sign-language-interpreting',
  name: 'american-sign-language-interpreting'
}, {
  class: 'fab fa-amilia',
  name: 'amilia'
}, {
  class: 'fas fa-anchor',
  name: 'anchor'
}, {
  class: 'fab fa-android',
  name: 'android'
}, {
  class: 'fab fa-angellist',
  name: 'angellist'
}, {
  class: 'fas fa-angle-double-down',
  name: 'angle-double-down'
}, {
  class: 'fas fa-angle-double-left',
  name: 'angle-double-left'
}, {
  class: 'fas fa-angle-double-right',
  name: 'angle-double-right'
}, {
  class: 'fas fa-angle-double-up',
  name: 'angle-double-up'
}, {
  class: 'fas fa-angle-down',
  name: 'angle-down'
}, {
  class: 'fas fa-angle-left',
  name: 'angle-left'
}, {
  class: 'fas fa-angle-right',
  name: 'angle-right'
}, {
  class: 'fas fa-angle-up',
  name: 'angle-up'
}, {
  class: 'fas fa-angry',
  name: 'angry'
}, {
  class: 'far fa-angry',
  name: 'angry'
}, {
  class: 'fab fa-angrycreative',
  name: 'angrycreative'
}, {
  class: 'fab fa-angular',
  name: 'angular'
}, {
  class: 'fas fa-ankh',
  name: 'ankh'
}, {
  class: 'fab fa-app-store',
  name: 'app-store'
}, {
  class: 'fab fa-app-store-ios',
  name: 'app-store-ios'
}, {
  class: 'fab fa-apper',
  name: 'apper'
}, {
  class: 'fab fa-apple',
  name: 'apple'
}, {
  class: 'fas fa-apple-alt',
  name: 'apple-alt'
}, {
  class: 'fab fa-apple-pay',
  name: 'apple-pay'
}, {
  class: 'fas fa-archive',
  name: 'archive'
}, {
  class: 'fas fa-archway',
  name: 'archway'
}, {
  class: 'fas fa-arrow-alt-circle-down',
  name: 'arrow-alt-circle-down'
}, {
  class: 'far fa-arrow-alt-circle-down',
  name: 'arrow-alt-circle-down'
}, {
  class: 'fas fa-arrow-alt-circle-left',
  name: 'arrow-alt-circle-left'
}, {
  class: 'far fa-arrow-alt-circle-left',
  name: 'arrow-alt-circle-left'
}, {
  class: 'fas fa-arrow-alt-circle-right',
  name: 'arrow-alt-circle-right'
}, {
  class: 'far fa-arrow-alt-circle-right',
  name: 'arrow-alt-circle-right'
}, {
  class: 'fas fa-arrow-alt-circle-up',
  name: 'arrow-alt-circle-up'
}, {
  class: 'far fa-arrow-alt-circle-up',
  name: 'arrow-alt-circle-up'
}, {
  class: 'fas fa-arrow-circle-down',
  name: 'arrow-circle-down'
}, {
  class: 'fas fa-arrow-circle-left',
  name: 'arrow-circle-left'
}, {
  class: 'fas fa-arrow-circle-right',
  name: 'arrow-circle-right'
}, {
  class: 'fas fa-arrow-circle-up',
  name: 'arrow-circle-up'
}, {
  class: 'fas fa-arrow-down',
  name: 'arrow-down'
}, {
  class: 'fas fa-arrow-left',
  name: 'arrow-left'
}, {
  class: 'fas fa-arrow-right',
  name: 'arrow-right'
}, {
  class: 'fas fa-arrow-up',
  name: 'arrow-up'
}, {
  class: 'fas fa-arrows-alt',
  name: 'arrows-alt'
}, {
  class: 'fas fa-arrows-alt-h',
  name: 'arrows-alt-h'
}, {
  class: 'fas fa-arrows-alt-v',
  name: 'arrows-alt-v'
}, {
  class: 'fab fa-artstation',
  name: 'artstation'
}, {
  class: 'fas fa-assistive-listening-systems',
  name: 'assistive-listening-systems'
}, {
  class: 'fas fa-asterisk',
  name: 'asterisk'
}, {
  class: 'fab fa-asymmetrik',
  name: 'asymmetrik'
}, {
  class: 'fas fa-at',
  name: 'at'
}, {
  class: 'fas fa-atlas',
  name: 'atlas'
}, {
  class: 'fab fa-atlassian',
  name: 'atlassian'
}, {
  class: 'fas fa-atom',
  name: 'atom'
}, {
  class: 'fab fa-audible',
  name: 'audible'
}, {
  class: 'fas fa-audio-description',
  name: 'audio-description'
}, {
  class: 'fab fa-autoprefixer',
  name: 'autoprefixer'
}, {
  class: 'fab fa-avianex',
  name: 'avianex'
}, {
  class: 'fab fa-aviato',
  name: 'aviato'
}, {
  class: 'fas fa-award',
  name: 'award'
}, {
  class: 'fab fa-aws',
  name: 'aws'
}, {
  class: 'fas fa-baby',
  name: 'baby'
}, {
  class: 'fas fa-baby-carriage',
  name: 'baby-carriage'
}, {
  class: 'fas fa-backspace',
  name: 'backspace'
}, {
  class: 'fas fa-backward',
  name: 'backward'
}, {
  class: 'fas fa-bacon',
  name: 'bacon'
}, {
  class: 'fas fa-bacteria',
  name: 'bacteria'
}, {
  class: 'fas fa-bacterium',
  name: 'bacterium'
}, {
  class: 'fas fa-bahai',
  name: 'bahai'
}, {
  class: 'fas fa-balance-scale',
  name: 'balance-scale'
}, {
  class: 'fas fa-balance-scale-left',
  name: 'balance-scale-left'
}, {
  class: 'fas fa-balance-scale-right',
  name: 'balance-scale-right'
}, {
  class: 'fas fa-ban',
  name: 'ban'
}, {
  class: 'fas fa-band-aid',
  name: 'band-aid'
}, {
  class: 'fab fa-bandcamp',
  name: 'bandcamp'
}, {
  class: 'fas fa-barcode',
  name: 'barcode'
}, {
  class: 'fas fa-bars',
  name: 'bars'
}, {
  class: 'fas fa-baseball-ball',
  name: 'baseball-ball'
}, {
  class: 'fas fa-basketball-ball',
  name: 'basketball-ball'
}, {
  class: 'fas fa-bath',
  name: 'bath'
}, {
  class: 'fas fa-battery-empty',
  name: 'battery-empty'
}, {
  class: 'fas fa-battery-full',
  name: 'battery-full'
}, {
  class: 'fas fa-battery-half',
  name: 'battery-half'
}, {
  class: 'fas fa-battery-quarter',
  name: 'battery-quarter'
}, {
  class: 'fas fa-battery-three-quarters',
  name: 'battery-three-quarters'
}, {
  class: 'fab fa-battle-net',
  name: 'battle-net'
}, {
  class: 'fas fa-bed',
  name: 'bed'
}, {
  class: 'fas fa-beer',
  name: 'beer'
}, {
  class: 'fab fa-behance',
  name: 'behance'
}, {
  class: 'fab fa-behance-square',
  name: 'behance-square'
}, {
  class: 'fas fa-bell',
  name: 'bell'
}, {
  class: 'far fa-bell',
  name: 'bell'
}, {
  class: 'fas fa-bell-slash',
  name: 'bell-slash'
}, {
  class: 'far fa-bell-slash',
  name: 'bell-slash'
}, {
  class: 'fas fa-bezier-curve',
  name: 'bezier-curve'
}, {
  class: 'fas fa-bible',
  name: 'bible'
}, {
  class: 'fas fa-bicycle',
  name: 'bicycle'
}, {
  class: 'fas fa-biking',
  name: 'biking'
}, {
  class: 'fab fa-bimobject',
  name: 'bimobject'
}, {
  class: 'fas fa-binoculars',
  name: 'binoculars'
}, {
  class: 'fas fa-biohazard',
  name: 'biohazard'
}, {
  class: 'fas fa-birthday-cake',
  name: 'birthday-cake'
}, {
  class: 'fab fa-bitbucket',
  name: 'bitbucket'
}, {
  class: 'fab fa-bitcoin',
  name: 'bitcoin'
}, {
  class: 'fab fa-bity',
  name: 'bity'
}, {
  class: 'fab fa-black-tie',
  name: 'black-tie'
}, {
  class: 'fab fa-blackberry',
  name: 'blackberry'
}, {
  class: 'fas fa-blender',
  name: 'blender'
}, {
  class: 'fas fa-blender-phone',
  name: 'blender-phone'
}, {
  class: 'fas fa-blind',
  name: 'blind'
}, {
  class: 'fas fa-blog',
  name: 'blog'
}, {
  class: 'fab fa-blogger',
  name: 'blogger'
}, {
  class: 'fab fa-blogger-b',
  name: 'blogger-b'
}, {
  class: 'fab fa-bluetooth',
  name: 'bluetooth'
}, {
  class: 'fab fa-bluetooth-b',
  name: 'bluetooth-b'
}, {
  class: 'fas fa-bold',
  name: 'bold'
}, {
  class: 'fas fa-bolt',
  name: 'bolt'
}, {
  class: 'fas fa-bomb',
  name: 'bomb'
}, {
  class: 'fas fa-bone',
  name: 'bone'
}, {
  class: 'fas fa-bong',
  name: 'bong'
}, {
  class: 'fas fa-book',
  name: 'book'
}, {
  class: 'fas fa-book-dead',
  name: 'book-dead'
}, {
  class: 'fas fa-book-medical',
  name: 'book-medical'
}, {
  class: 'fas fa-book-open',
  name: 'book-open'
}, {
  class: 'fas fa-book-reader',
  name: 'book-reader'
}, {
  class: 'fas fa-bookmark',
  name: 'bookmark'
}, {
  class: 'far fa-bookmark',
  name: 'bookmark'
}, {
  class: 'fab fa-bootstrap',
  name: 'bootstrap'
}, {
  class: 'fas fa-border-all',
  name: 'border-all'
}, {
  class: 'fas fa-border-none',
  name: 'border-none'
}, {
  class: 'fas fa-border-style',
  name: 'border-style'
}, {
  class: 'fas fa-bowling-ball',
  name: 'bowling-ball'
}, {
  class: 'fas fa-box',
  name: 'box'
}, {
  class: 'fas fa-box-open',
  name: 'box-open'
}, {
  class: 'fas fa-box-tissue',
  name: 'box-tissue'
}, {
  class: 'fas fa-boxes',
  name: 'boxes'
}, {
  class: 'fas fa-braille',
  name: 'braille'
}, {
  class: 'fas fa-brain',
  name: 'brain'
}, {
  class: 'fas fa-bread-slice',
  name: 'bread-slice'
}, {
  class: 'fas fa-briefcase',
  name: 'briefcase'
}, {
  class: 'fas fa-briefcase-medical',
  name: 'briefcase-medical'
}, {
  class: 'fas fa-broadcast-tower',
  name: 'broadcast-tower'
}, {
  class: 'fas fa-broom',
  name: 'broom'
}, {
  class: 'fas fa-brush',
  name: 'brush'
}, {
  class: 'fab fa-btc',
  name: 'btc'
}, {
  class: 'fab fa-buffer',
  name: 'buffer'
}, {
  class: 'fas fa-bug',
  name: 'bug'
}, {
  class: 'fas fa-building',
  name: 'building'
}, {
  class: 'far fa-building',
  name: 'building'
}, {
  class: 'fas fa-bullhorn',
  name: 'bullhorn'
}, {
  class: 'fas fa-bullseye',
  name: 'bullseye'
}, {
  class: 'fas fa-burn',
  name: 'burn'
}, {
  class: 'fab fa-buromobelexperte',
  name: 'buromobelexperte'
}, {
  class: 'fas fa-bus',
  name: 'bus'
}, {
  class: 'fas fa-bus-alt',
  name: 'bus-alt'
}, {
  class: 'fas fa-business-time',
  name: 'business-time'
}, {
  class: 'fab fa-buy-n-large',
  name: 'buy-n-large'
}, {
  class: 'fab fa-buysellads',
  name: 'buysellads'
}, {
  class: 'fas fa-calculator',
  name: 'calculator'
}, {
  class: 'fas fa-calendar',
  name: 'calendar'
}, {
  class: 'far fa-calendar',
  name: 'calendar'
}, {
  class: 'fas fa-calendar-alt',
  name: 'calendar-alt'
}, {
  class: 'far fa-calendar-alt',
  name: 'calendar-alt'
}, {
  class: 'fas fa-calendar-check',
  name: 'calendar-check'
}, {
  class: 'far fa-calendar-check',
  name: 'calendar-check'
}, {
  class: 'fas fa-calendar-day',
  name: 'calendar-day'
}, {
  class: 'fas fa-calendar-minus',
  name: 'calendar-minus'
}, {
  class: 'far fa-calendar-minus',
  name: 'calendar-minus'
}, {
  class: 'fas fa-calendar-plus',
  name: 'calendar-plus'
}, {
  class: 'far fa-calendar-plus',
  name: 'calendar-plus'
}, {
  class: 'fas fa-calendar-times',
  name: 'calendar-times'
}, {
  class: 'far fa-calendar-times',
  name: 'calendar-times'
}, {
  class: 'fas fa-calendar-week',
  name: 'calendar-week'
}, {
  class: 'fas fa-camera',
  name: 'camera'
}, {
  class: 'fas fa-camera-retro',
  name: 'camera-retro'
}, {
  class: 'fas fa-campground',
  name: 'campground'
}, {
  class: 'fab fa-canadian-maple-leaf',
  name: 'canadian-maple-leaf'
}, {
  class: 'fas fa-candy-cane',
  name: 'candy-cane'
}, {
  class: 'fas fa-cannabis',
  name: 'cannabis'
}, {
  class: 'fas fa-capsules',
  name: 'capsules'
}, {
  class: 'fas fa-car',
  name: 'car'
}, {
  class: 'fas fa-car-alt',
  name: 'car-alt'
}, {
  class: 'fas fa-car-battery',
  name: 'car-battery'
}, {
  class: 'fas fa-car-crash',
  name: 'car-crash'
}, {
  class: 'fas fa-car-side',
  name: 'car-side'
}, {
  class: 'fas fa-caravan',
  name: 'caravan'
}, {
  class: 'fas fa-caret-down',
  name: 'caret-down'
}, {
  class: 'fas fa-caret-left',
  name: 'caret-left'
}, {
  class: 'fas fa-caret-right',
  name: 'caret-right'
}, {
  class: 'fas fa-caret-square-down',
  name: 'caret-square-down'
}, {
  class: 'far fa-caret-square-down',
  name: 'caret-square-down'
}, {
  class: 'fas fa-caret-square-left',
  name: 'caret-square-left'
}, {
  class: 'far fa-caret-square-left',
  name: 'caret-square-left'
}, {
  class: 'fas fa-caret-square-right',
  name: 'caret-square-right'
}, {
  class: 'far fa-caret-square-right',
  name: 'caret-square-right'
}, {
  class: 'fas fa-caret-square-up',
  name: 'caret-square-up'
}, {
  class: 'far fa-caret-square-up',
  name: 'caret-square-up'
}, {
  class: 'fas fa-caret-up',
  name: 'caret-up'
}, {
  class: 'fas fa-carrot',
  name: 'carrot'
}, {
  class: 'fas fa-cart-arrow-down',
  name: 'cart-arrow-down'
}, {
  class: 'fas fa-cart-plus',
  name: 'cart-plus'
}, {
  class: 'fas fa-cash-register',
  name: 'cash-register'
}, {
  class: 'fas fa-cat',
  name: 'cat'
}, {
  class: 'fab fa-cc-amazon-pay',
  name: 'cc-amazon-pay'
}, {
  class: 'fab fa-cc-amex',
  name: 'cc-amex'
}, {
  class: 'fab fa-cc-apple-pay',
  name: 'cc-apple-pay'
}, {
  class: 'fab fa-cc-diners-club',
  name: 'cc-diners-club'
}, {
  class: 'fab fa-cc-discover',
  name: 'cc-discover'
}, {
  class: 'fab fa-cc-jcb',
  name: 'cc-jcb'
}, {
  class: 'fab fa-cc-mastercard',
  name: 'cc-mastercard'
}, {
  class: 'fab fa-cc-paypal',
  name: 'cc-paypal'
}, {
  class: 'fab fa-cc-stripe',
  name: 'cc-stripe'
}, {
  class: 'fab fa-cc-visa',
  name: 'cc-visa'
}, {
  class: 'fab fa-centercode',
  name: 'centercode'
}, {
  class: 'fab fa-centos',
  name: 'centos'
}, {
  class: 'fas fa-certificate',
  name: 'certificate'
}, {
  class: 'fas fa-chair',
  name: 'chair'
}, {
  class: 'fas fa-chalkboard',
  name: 'chalkboard'
}, {
  class: 'fas fa-chalkboard-teacher',
  name: 'chalkboard-teacher'
}, {
  class: 'fas fa-charging-station',
  name: 'charging-station'
}, {
  class: 'fas fa-chart-area',
  name: 'chart-area'
}, {
  class: 'fas fa-chart-bar',
  name: 'chart-bar'
}, {
  class: 'far fa-chart-bar',
  name: 'chart-bar'
}, {
  class: 'fas fa-chart-line',
  name: 'chart-line'
}, {
  class: 'fas fa-chart-pie',
  name: 'chart-pie'
}, {
  class: 'fas fa-check',
  name: 'check'
}, {
  class: 'fas fa-check-circle',
  name: 'check-circle'
}, {
  class: 'far fa-check-circle',
  name: 'check-circle'
}, {
  class: 'fas fa-check-double',
  name: 'check-double'
}, {
  class: 'fas fa-check-square',
  name: 'check-square'
}, {
  class: 'far fa-check-square',
  name: 'check-square'
}, {
  class: 'fas fa-cheese',
  name: 'cheese'
}, {
  class: 'fas fa-chess',
  name: 'chess'
}, {
  class: 'fas fa-chess-bishop',
  name: 'chess-bishop'
}, {
  class: 'fas fa-chess-board',
  name: 'chess-board'
}, {
  class: 'fas fa-chess-king',
  name: 'chess-king'
}, {
  class: 'fas fa-chess-knight',
  name: 'chess-knight'
}, {
  class: 'fas fa-chess-pawn',
  name: 'chess-pawn'
}, {
  class: 'fas fa-chess-queen',
  name: 'chess-queen'
}, {
  class: 'fas fa-chess-rook',
  name: 'chess-rook'
}, {
  class: 'fas fa-chevron-circle-down',
  name: 'chevron-circle-down'
}, {
  class: 'fas fa-chevron-circle-left',
  name: 'chevron-circle-left'
}, {
  class: 'fas fa-chevron-circle-right',
  name: 'chevron-circle-right'
}, {
  class: 'fas fa-chevron-circle-up',
  name: 'chevron-circle-up'
}, {
  class: 'fas fa-chevron-down',
  name: 'chevron-down'
}, {
  class: 'fas fa-chevron-left',
  name: 'chevron-left'
}, {
  class: 'fas fa-chevron-right',
  name: 'chevron-right'
}, {
  class: 'fas fa-chevron-up',
  name: 'chevron-up'
}, {
  class: 'fas fa-child',
  name: 'child'
}, {
  class: 'fab fa-chrome',
  name: 'chrome'
}, {
  class: 'fab fa-chromecast',
  name: 'chromecast'
}, {
  class: 'fas fa-church',
  name: 'church'
}, {
  class: 'fas fa-circle',
  name: 'circle'
}, {
  class: 'far fa-circle',
  name: 'circle'
}, {
  class: 'fas fa-circle-notch',
  name: 'circle-notch'
}, {
  class: 'fas fa-city',
  name: 'city'
}, {
  class: 'fas fa-clinic-medical',
  name: 'clinic-medical'
}, {
  class: 'fas fa-clipboard',
  name: 'clipboard'
}, {
  class: 'far fa-clipboard',
  name: 'clipboard'
}, {
  class: 'fas fa-clipboard-check',
  name: 'clipboard-check'
}, {
  class: 'fas fa-clipboard-list',
  name: 'clipboard-list'
}, {
  class: 'fas fa-clock',
  name: 'clock'
}, {
  class: 'far fa-clock',
  name: 'clock'
}, {
  class: 'fas fa-clone',
  name: 'clone'
}, {
  class: 'far fa-clone',
  name: 'clone'
}, {
  class: 'fas fa-closed-captioning',
  name: 'closed-captioning'
}, {
  class: 'far fa-closed-captioning',
  name: 'closed-captioning'
}, {
  class: 'fas fa-cloud',
  name: 'cloud'
}, {
  class: 'fas fa-cloud-download-alt',
  name: 'cloud-download-alt'
}, {
  class: 'fas fa-cloud-meatball',
  name: 'cloud-meatball'
}, {
  class: 'fas fa-cloud-moon',
  name: 'cloud-moon'
}, {
  class: 'fas fa-cloud-moon-rain',
  name: 'cloud-moon-rain'
}, {
  class: 'fas fa-cloud-rain',
  name: 'cloud-rain'
}, {
  class: 'fas fa-cloud-showers-heavy',
  name: 'cloud-showers-heavy'
}, {
  class: 'fas fa-cloud-sun',
  name: 'cloud-sun'
}, {
  class: 'fas fa-cloud-sun-rain',
  name: 'cloud-sun-rain'
}, {
  class: 'fas fa-cloud-upload-alt',
  name: 'cloud-upload-alt'
}, {
  class: 'fab fa-cloudflare',
  name: 'cloudflare'
}, {
  class: 'fab fa-cloudscale',
  name: 'cloudscale'
}, {
  class: 'fab fa-cloudsmith',
  name: 'cloudsmith'
}, {
  class: 'fab fa-cloudversify',
  name: 'cloudversify'
}, {
  class: 'fas fa-cocktail',
  name: 'cocktail'
}, {
  class: 'fas fa-code',
  name: 'code'
}, {
  class: 'fas fa-code-branch',
  name: 'code-branch'
}, {
  class: 'fab fa-codepen',
  name: 'codepen'
}, {
  class: 'fab fa-codiepie',
  name: 'codiepie'
}, {
  class: 'fas fa-coffee',
  name: 'coffee'
}, {
  class: 'fas fa-cog',
  name: 'cog'
}, {
  class: 'fas fa-cogs',
  name: 'cogs'
}, {
  class: 'fas fa-coins',
  name: 'coins'
}, {
  class: 'fas fa-columns',
  name: 'columns'
}, {
  class: 'fas fa-comment',
  name: 'comment'
}, {
  class: 'far fa-comment',
  name: 'comment'
}, {
  class: 'fas fa-comment-alt',
  name: 'comment-alt'
}, {
  class: 'far fa-comment-alt',
  name: 'comment-alt'
}, {
  class: 'fas fa-comment-dollar',
  name: 'comment-dollar'
}, {
  class: 'fas fa-comment-dots',
  name: 'comment-dots'
}, {
  class: 'far fa-comment-dots',
  name: 'comment-dots'
}, {
  class: 'fas fa-comment-medical',
  name: 'comment-medical'
}, {
  class: 'fas fa-comment-slash',
  name: 'comment-slash'
}, {
  class: 'fas fa-comments',
  name: 'comments'
}, {
  class: 'far fa-comments',
  name: 'comments'
}, {
  class: 'fas fa-comments-dollar',
  name: 'comments-dollar'
}, {
  class: 'fas fa-compact-disc',
  name: 'compact-disc'
}, {
  class: 'fas fa-compass',
  name: 'compass'
}, {
  class: 'far fa-compass',
  name: 'compass'
}, {
  class: 'fas fa-compress',
  name: 'compress'
}, {
  class: 'fas fa-compress-alt',
  name: 'compress-alt'
}, {
  class: 'fas fa-compress-arrows-alt',
  name: 'compress-arrows-alt'
}, {
  class: 'fas fa-concierge-bell',
  name: 'concierge-bell'
}, {
  class: 'fab fa-confluence',
  name: 'confluence'
}, {
  class: 'fab fa-connectdevelop',
  name: 'connectdevelop'
}, {
  class: 'fab fa-contao',
  name: 'contao'
}, {
  class: 'fas fa-cookie',
  name: 'cookie'
}, {
  class: 'fas fa-cookie-bite',
  name: 'cookie-bite'
}, {
  class: 'fas fa-copy',
  name: 'copy'
}, {
  class: 'far fa-copy',
  name: 'copy'
}, {
  class: 'fas fa-copyright',
  name: 'copyright'
}, {
  class: 'far fa-copyright',
  name: 'copyright'
}, {
  class: 'fab fa-cotton-bureau',
  name: 'cotton-bureau'
}, {
  class: 'fas fa-couch',
  name: 'couch'
}, {
  class: 'fab fa-cpanel',
  name: 'cpanel'
}, {
  class: 'fab fa-creative-commons',
  name: 'creative-commons'
}, {
  class: 'fab fa-creative-commons-by',
  name: 'creative-commons-by'
}, {
  class: 'fab fa-creative-commons-nc',
  name: 'creative-commons-nc'
}, {
  class: 'fab fa-creative-commons-nc-eu',
  name: 'creative-commons-nc-eu'
}, {
  class: 'fab fa-creative-commons-nc-jp',
  name: 'creative-commons-nc-jp'
}, {
  class: 'fab fa-creative-commons-nd',
  name: 'creative-commons-nd'
}, {
  class: 'fab fa-creative-commons-pd',
  name: 'creative-commons-pd'
}, {
  class: 'fab fa-creative-commons-pd-alt',
  name: 'creative-commons-pd-alt'
}, {
  class: 'fab fa-creative-commons-remix',
  name: 'creative-commons-remix'
}, {
  class: 'fab fa-creative-commons-sa',
  name: 'creative-commons-sa'
}, {
  class: 'fab fa-creative-commons-sampling',
  name: 'creative-commons-sampling'
}, {
  class: 'fab fa-creative-commons-sampling-plus',
  name: 'creative-commons-sampling-plus'
}, {
  class: 'fab fa-creative-commons-share',
  name: 'creative-commons-share'
}, {
  class: 'fab fa-creative-commons-zero',
  name: 'creative-commons-zero'
}, {
  class: 'fas fa-credit-card',
  name: 'credit-card'
}, {
  class: 'far fa-credit-card',
  name: 'credit-card'
}, {
  class: 'fab fa-critical-role',
  name: 'critical-role'
}, {
  class: 'fas fa-crop',
  name: 'crop'
}, {
  class: 'fas fa-crop-alt',
  name: 'crop-alt'
}, {
  class: 'fas fa-cross',
  name: 'cross'
}, {
  class: 'fas fa-crosshairs',
  name: 'crosshairs'
}, {
  class: 'fas fa-crow',
  name: 'crow'
}, {
  class: 'fas fa-crown',
  name: 'crown'
}, {
  class: 'fas fa-crutch',
  name: 'crutch'
}, {
  class: 'fab fa-css3',
  name: 'css3'
}, {
  class: 'fab fa-css3-alt',
  name: 'css3-alt'
}, {
  class: 'fas fa-cube',
  name: 'cube'
}, {
  class: 'fas fa-cubes',
  name: 'cubes'
}, {
  class: 'fas fa-cut',
  name: 'cut'
}, {
  class: 'fab fa-cuttlefish',
  name: 'cuttlefish'
}, {
  class: 'fab fa-d-and-d',
  name: 'd-and-d'
}, {
  class: 'fab fa-d-and-d-beyond',
  name: 'd-and-d-beyond'
}, {
  class: 'fab fa-dailymotion',
  name: 'dailymotion'
}, {
  class: 'fab fa-dashcube',
  name: 'dashcube'
}, {
  class: 'fas fa-database',
  name: 'database'
}, {
  class: 'fas fa-deaf',
  name: 'deaf'
}, {
  class: 'fab fa-deezer',
  name: 'deezer'
}, {
  class: 'fab fa-delicious',
  name: 'delicious'
}, {
  class: 'fas fa-democrat',
  name: 'democrat'
}, {
  class: 'fab fa-deploydog',
  name: 'deploydog'
}, {
  class: 'fab fa-deskpro',
  name: 'deskpro'
}, {
  class: 'fas fa-desktop',
  name: 'desktop'
}, {
  class: 'fab fa-dev',
  name: 'dev'
}, {
  class: 'fab fa-deviantart',
  name: 'deviantart'
}, {
  class: 'fas fa-dharmachakra',
  name: 'dharmachakra'
}, {
  class: 'fab fa-dhl',
  name: 'dhl'
}, {
  class: 'fas fa-diagnoses',
  name: 'diagnoses'
}, {
  class: 'fab fa-diaspora',
  name: 'diaspora'
}, {
  class: 'fas fa-dice',
  name: 'dice'
}, {
  class: 'fas fa-dice-d20',
  name: 'dice-d20'
}, {
  class: 'fas fa-dice-d6',
  name: 'dice-d6'
}, {
  class: 'fas fa-dice-five',
  name: 'dice-five'
}, {
  class: 'fas fa-dice-four',
  name: 'dice-four'
}, {
  class: 'fas fa-dice-one',
  name: 'dice-one'
}, {
  class: 'fas fa-dice-six',
  name: 'dice-six'
}, {
  class: 'fas fa-dice-three',
  name: 'dice-three'
}, {
  class: 'fas fa-dice-two',
  name: 'dice-two'
}, {
  class: 'fab fa-digg',
  name: 'digg'
}, {
  class: 'fab fa-digital-ocean',
  name: 'digital-ocean'
}, {
  class: 'fas fa-digital-tachograph',
  name: 'digital-tachograph'
}, {
  class: 'fas fa-directions',
  name: 'directions'
}, {
  class: 'fab fa-discord',
  name: 'discord'
}, {
  class: 'fab fa-discourse',
  name: 'discourse'
}, {
  class: 'fas fa-disease',
  name: 'disease'
}, {
  class: 'fas fa-divide',
  name: 'divide'
}, {
  class: 'fas fa-dizzy',
  name: 'dizzy'
}, {
  class: 'far fa-dizzy',
  name: 'dizzy'
}, {
  class: 'fas fa-dna',
  name: 'dna'
}, {
  class: 'fab fa-dochub',
  name: 'dochub'
}, {
  class: 'fab fa-docker',
  name: 'docker'
}, {
  class: 'fas fa-dog',
  name: 'dog'
}, {
  class: 'fas fa-dollar-sign',
  name: 'dollar-sign'
}, {
  class: 'fas fa-dolly',
  name: 'dolly'
}, {
  class: 'fas fa-dolly-flatbed',
  name: 'dolly-flatbed'
}, {
  class: 'fas fa-donate',
  name: 'donate'
}, {
  class: 'fas fa-door-closed',
  name: 'door-closed'
}, {
  class: 'fas fa-door-open',
  name: 'door-open'
}, {
  class: 'fas fa-dot-circle',
  name: 'dot-circle'
}, {
  class: 'far fa-dot-circle',
  name: 'dot-circle'
}, {
  class: 'fas fa-dove',
  name: 'dove'
}, {
  class: 'fas fa-download',
  name: 'download'
}, {
  class: 'fab fa-draft2digital',
  name: 'draft2digital'
}, {
  class: 'fas fa-drafting-compass',
  name: 'drafting-compass'
}, {
  class: 'fas fa-dragon',
  name: 'dragon'
}, {
  class: 'fas fa-draw-polygon',
  name: 'draw-polygon'
}, {
  class: 'fab fa-dribbble',
  name: 'dribbble'
}, {
  class: 'fab fa-dribbble-square',
  name: 'dribbble-square'
}, {
  class: 'fab fa-dropbox',
  name: 'dropbox'
}, {
  class: 'fas fa-drum',
  name: 'drum'
}, {
  class: 'fas fa-drum-steelpan',
  name: 'drum-steelpan'
}, {
  class: 'fas fa-drumstick-bite',
  name: 'drumstick-bite'
}, {
  class: 'fab fa-drupal',
  name: 'drupal'
}, {
  class: 'fas fa-dumbbell',
  name: 'dumbbell'
}, {
  class: 'fas fa-dumpster',
  name: 'dumpster'
}, {
  class: 'fas fa-dumpster-fire',
  name: 'dumpster-fire'
}, {
  class: 'fas fa-dungeon',
  name: 'dungeon'
}, {
  class: 'fab fa-dyalog',
  name: 'dyalog'
}, {
  class: 'fab fa-earlybirds',
  name: 'earlybirds'
}, {
  class: 'fab fa-ebay',
  name: 'ebay'
}, {
  class: 'fab fa-edge',
  name: 'edge'
}, {
  class: 'fab fa-edge-legacy',
  name: 'edge-legacy'
}, {
  class: 'fas fa-edit',
  name: 'edit'
}, {
  class: 'far fa-edit',
  name: 'edit'
}, {
  class: 'fas fa-egg',
  name: 'egg'
}, {
  class: 'fas fa-eject',
  name: 'eject'
}, {
  class: 'fab fa-elementor',
  name: 'elementor'
}, {
  class: 'fas fa-ellipsis-h',
  name: 'ellipsis-h'
}, {
  class: 'fas fa-ellipsis-v',
  name: 'ellipsis-v'
}, {
  class: 'fab fa-ello',
  name: 'ello'
}, {
  class: 'fab fa-ember',
  name: 'ember'
}, {
  class: 'fab fa-empire',
  name: 'empire'
}, {
  class: 'fas fa-envelope',
  name: 'envelope'
}, {
  class: 'far fa-envelope',
  name: 'envelope'
}, {
  class: 'fas fa-envelope-open',
  name: 'envelope-open'
}, {
  class: 'far fa-envelope-open',
  name: 'envelope-open'
}, {
  class: 'fas fa-envelope-open-text',
  name: 'envelope-open-text'
}, {
  class: 'fas fa-envelope-square',
  name: 'envelope-square'
}, {
  class: 'fab fa-envira',
  name: 'envira'
}, {
  class: 'fas fa-equals',
  name: 'equals'
}, {
  class: 'fas fa-eraser',
  name: 'eraser'
}, {
  class: 'fab fa-erlang',
  name: 'erlang'
}, {
  class: 'fab fa-ethereum',
  name: 'ethereum'
}, {
  class: 'fas fa-ethernet',
  name: 'ethernet'
}, {
  class: 'fab fa-etsy',
  name: 'etsy'
}, {
  class: 'fas fa-euro-sign',
  name: 'euro-sign'
}, {
  class: 'fab fa-evernote',
  name: 'evernote'
}, {
  class: 'fas fa-exchange-alt',
  name: 'exchange-alt'
}, {
  class: 'fas fa-exclamation',
  name: 'exclamation'
}, {
  class: 'fas fa-exclamation-circle',
  name: 'exclamation-circle'
}, {
  class: 'fas fa-exclamation-triangle',
  name: 'exclamation-triangle'
}, {
  class: 'fas fa-expand',
  name: 'expand'
}, {
  class: 'fas fa-expand-alt',
  name: 'expand-alt'
}, {
  class: 'fas fa-expand-arrows-alt',
  name: 'expand-arrows-alt'
}, {
  class: 'fab fa-expeditedssl',
  name: 'expeditedssl'
}, {
  class: 'fas fa-external-link-alt',
  name: 'external-link-alt'
}, {
  class: 'fas fa-external-link-square-alt',
  name: 'external-link-square-alt'
}, {
  class: 'fas fa-eye',
  name: 'eye'
}, {
  class: 'far fa-eye',
  name: 'eye'
}, {
  class: 'fas fa-eye-dropper',
  name: 'eye-dropper'
}, {
  class: 'fas fa-eye-slash',
  name: 'eye-slash'
}, {
  class: 'far fa-eye-slash',
  name: 'eye-slash'
}, {
  class: 'fab fa-facebook',
  name: 'facebook'
}, {
  class: 'fab fa-facebook-f',
  name: 'facebook-f'
}, {
  class: 'fab fa-facebook-messenger',
  name: 'facebook-messenger'
}, {
  class: 'fab fa-facebook-square',
  name: 'facebook-square'
}, {
  class: 'fas fa-fan',
  name: 'fan'
}, {
  class: 'fab fa-fantasy-flight-games',
  name: 'fantasy-flight-games'
}, {
  class: 'fas fa-fast-backward',
  name: 'fast-backward'
}, {
  class: 'fas fa-fast-forward',
  name: 'fast-forward'
}, {
  class: 'fas fa-faucet',
  name: 'faucet'
}, {
  class: 'fas fa-fax',
  name: 'fax'
}, {
  class: 'fas fa-feather',
  name: 'feather'
}, {
  class: 'fas fa-feather-alt',
  name: 'feather-alt'
}, {
  class: 'fab fa-fedex',
  name: 'fedex'
}, {
  class: 'fab fa-fedora',
  name: 'fedora'
}, {
  class: 'fas fa-female',
  name: 'female'
}, {
  class: 'fas fa-fighter-jet',
  name: 'fighter-jet'
}, {
  class: 'fab fa-figma',
  name: 'figma'
}, {
  class: 'fas fa-file',
  name: 'file'
}, {
  class: 'far fa-file',
  name: 'file'
}, {
  class: 'fas fa-file-alt',
  name: 'file-alt'
}, {
  class: 'far fa-file-alt',
  name: 'file-alt'
}, {
  class: 'fas fa-file-archive',
  name: 'file-archive'
}, {
  class: 'far fa-file-archive',
  name: 'file-archive'
}, {
  class: 'fas fa-file-audio',
  name: 'file-audio'
}, {
  class: 'far fa-file-audio',
  name: 'file-audio'
}, {
  class: 'fas fa-file-code',
  name: 'file-code'
}, {
  class: 'far fa-file-code',
  name: 'file-code'
}, {
  class: 'fas fa-file-contract',
  name: 'file-contract'
}, {
  class: 'fas fa-file-csv',
  name: 'file-csv'
}, {
  class: 'fas fa-file-download',
  name: 'file-download'
}, {
  class: 'fas fa-file-excel',
  name: 'file-excel'
}, {
  class: 'far fa-file-excel',
  name: 'file-excel'
}, {
  class: 'fas fa-file-export',
  name: 'file-export'
}, {
  class: 'fas fa-file-image',
  name: 'file-image'
}, {
  class: 'far fa-file-image',
  name: 'file-image'
}, {
  class: 'fas fa-file-import',
  name: 'file-import'
}, {
  class: 'fas fa-file-invoice',
  name: 'file-invoice'
}, {
  class: 'fas fa-file-invoice-dollar',
  name: 'file-invoice-dollar'
}, {
  class: 'fas fa-file-medical',
  name: 'file-medical'
}, {
  class: 'fas fa-file-medical-alt',
  name: 'file-medical-alt'
}, {
  class: 'fas fa-file-pdf',
  name: 'file-pdf'
}, {
  class: 'far fa-file-pdf',
  name: 'file-pdf'
}, {
  class: 'fas fa-file-powerpoint',
  name: 'file-powerpoint'
}, {
  class: 'far fa-file-powerpoint',
  name: 'file-powerpoint'
}, {
  class: 'fas fa-file-prescription',
  name: 'file-prescription'
}, {
  class: 'fas fa-file-signature',
  name: 'file-signature'
}, {
  class: 'fas fa-file-upload',
  name: 'file-upload'
}, {
  class: 'fas fa-file-video',
  name: 'file-video'
}, {
  class: 'far fa-file-video',
  name: 'file-video'
}, {
  class: 'fas fa-file-word',
  name: 'file-word'
}, {
  class: 'far fa-file-word',
  name: 'file-word'
}, {
  class: 'fas fa-fill',
  name: 'fill'
}, {
  class: 'fas fa-fill-drip',
  name: 'fill-drip'
}, {
  class: 'fas fa-film',
  name: 'film'
}, {
  class: 'fas fa-filter',
  name: 'filter'
}, {
  class: 'fas fa-fingerprint',
  name: 'fingerprint'
}, {
  class: 'fas fa-fire',
  name: 'fire'
}, {
  class: 'fas fa-fire-alt',
  name: 'fire-alt'
}, {
  class: 'fas fa-fire-extinguisher',
  name: 'fire-extinguisher'
}, {
  class: 'fab fa-firefox',
  name: 'firefox'
}, {
  class: 'fab fa-firefox-browser',
  name: 'firefox-browser'
}, {
  class: 'fas fa-first-aid',
  name: 'first-aid'
}, {
  class: 'fab fa-first-order',
  name: 'first-order'
}, {
  class: 'fab fa-first-order-alt',
  name: 'first-order-alt'
}, {
  class: 'fab fa-firstdraft',
  name: 'firstdraft'
}, {
  class: 'fas fa-fish',
  name: 'fish'
}, {
  class: 'fas fa-fist-raised',
  name: 'fist-raised'
}, {
  class: 'fas fa-flag',
  name: 'flag'
}, {
  class: 'far fa-flag',
  name: 'flag'
}, {
  class: 'fas fa-flag-checkered',
  name: 'flag-checkered'
}, {
  class: 'fas fa-flag-usa',
  name: 'flag-usa'
}, {
  class: 'fas fa-flask',
  name: 'flask'
}, {
  class: 'fab fa-flickr',
  name: 'flickr'
}, {
  class: 'fab fa-flipboard',
  name: 'flipboard'
}, {
  class: 'fas fa-flushed',
  name: 'flushed'
}, {
  class: 'far fa-flushed',
  name: 'flushed'
}, {
  class: 'fab fa-fly',
  name: 'fly'
}, {
  class: 'fas fa-folder',
  name: 'folder'
}, {
  class: 'far fa-folder',
  name: 'folder'
}, {
  class: 'fas fa-folder-minus',
  name: 'folder-minus'
}, {
  class: 'fas fa-folder-open',
  name: 'folder-open'
}, {
  class: 'far fa-folder-open',
  name: 'folder-open'
}, {
  class: 'fas fa-folder-plus',
  name: 'folder-plus'
}, {
  class: 'fas fa-font',
  name: 'font'
}, {
  class: 'fab fa-font-awesome',
  name: 'font-awesome'
}, {
  class: 'fab fa-font-awesome-alt',
  name: 'font-awesome-alt'
}, {
  class: 'fab fa-font-awesome-flag',
  name: 'font-awesome-flag'
}, {
  class: 'fab fa-fonticons',
  name: 'fonticons'
}, {
  class: 'fab fa-fonticons-fi',
  name: 'fonticons-fi'
}, {
  class: 'fas fa-football-ball',
  name: 'football-ball'
}, {
  class: 'fab fa-fort-awesome',
  name: 'fort-awesome'
}, {
  class: 'fab fa-fort-awesome-alt',
  name: 'fort-awesome-alt'
}, {
  class: 'fab fa-forumbee',
  name: 'forumbee'
}, {
  class: 'fas fa-forward',
  name: 'forward'
}, {
  class: 'fab fa-foursquare',
  name: 'foursquare'
}, {
  class: 'fab fa-free-code-camp',
  name: 'free-code-camp'
}, {
  class: 'fab fa-freebsd',
  name: 'freebsd'
}, {
  class: 'fas fa-frog',
  name: 'frog'
}, {
  class: 'fas fa-frown',
  name: 'frown'
}, {
  class: 'far fa-frown',
  name: 'frown'
}, {
  class: 'fas fa-frown-open',
  name: 'frown-open'
}, {
  class: 'far fa-frown-open',
  name: 'frown-open'
}, {
  class: 'fab fa-fulcrum',
  name: 'fulcrum'
}, {
  class: 'fas fa-funnel-dollar',
  name: 'funnel-dollar'
}, {
  class: 'fas fa-futbol',
  name: 'futbol'
}, {
  class: 'far fa-futbol',
  name: 'futbol'
}, {
  class: 'fab fa-galactic-republic',
  name: 'galactic-republic'
}, {
  class: 'fab fa-galactic-senate',
  name: 'galactic-senate'
}, {
  class: 'fas fa-gamepad',
  name: 'gamepad'
}, {
  class: 'fas fa-gas-pump',
  name: 'gas-pump'
}, {
  class: 'fas fa-gavel',
  name: 'gavel'
}, {
  class: 'fas fa-gem',
  name: 'gem'
}, {
  class: 'far fa-gem',
  name: 'gem'
}, {
  class: 'fas fa-genderless',
  name: 'genderless'
}, {
  class: 'fab fa-get-pocket',
  name: 'get-pocket'
}, {
  class: 'fab fa-gg',
  name: 'gg'
}, {
  class: 'fab fa-gg-circle',
  name: 'gg-circle'
}, {
  class: 'fas fa-ghost',
  name: 'ghost'
}, {
  class: 'fas fa-gift',
  name: 'gift'
}, {
  class: 'fas fa-gifts',
  name: 'gifts'
}, {
  class: 'fab fa-git',
  name: 'git'
}, {
  class: 'fab fa-git-alt',
  name: 'git-alt'
}, {
  class: 'fab fa-git-square',
  name: 'git-square'
}, {
  class: 'fab fa-github',
  name: 'github'
}, {
  class: 'fab fa-github-alt',
  name: 'github-alt'
}, {
  class: 'fab fa-github-square',
  name: 'github-square'
}, {
  class: 'fab fa-gitkraken',
  name: 'gitkraken'
}, {
  class: 'fab fa-gitlab',
  name: 'gitlab'
}, {
  class: 'fab fa-gitter',
  name: 'gitter'
}, {
  class: 'fas fa-glass-cheers',
  name: 'glass-cheers'
}, {
  class: 'fas fa-glass-martini',
  name: 'glass-martini'
}, {
  class: 'fas fa-glass-martini-alt',
  name: 'glass-martini-alt'
}, {
  class: 'fas fa-glass-whiskey',
  name: 'glass-whiskey'
}, {
  class: 'fas fa-glasses',
  name: 'glasses'
}, {
  class: 'fab fa-glide',
  name: 'glide'
}, {
  class: 'fab fa-glide-g',
  name: 'glide-g'
}, {
  class: 'fas fa-globe',
  name: 'globe'
}, {
  class: 'fas fa-globe-africa',
  name: 'globe-africa'
}, {
  class: 'fas fa-globe-americas',
  name: 'globe-americas'
}, {
  class: 'fas fa-globe-asia',
  name: 'globe-asia'
}, {
  class: 'fas fa-globe-europe',
  name: 'globe-europe'
}, {
  class: 'fab fa-gofore',
  name: 'gofore'
}, {
  class: 'fas fa-golf-ball',
  name: 'golf-ball'
}, {
  class: 'fab fa-goodreads',
  name: 'goodreads'
}, {
  class: 'fab fa-goodreads-g',
  name: 'goodreads-g'
}, {
  class: 'fab fa-google',
  name: 'google'
}, {
  class: 'fab fa-google-drive',
  name: 'google-drive'
}, {
  class: 'fab fa-google-pay',
  name: 'google-pay'
}, {
  class: 'fab fa-google-play',
  name: 'google-play'
}, {
  class: 'fab fa-google-plus',
  name: 'google-plus'
}, {
  class: 'fab fa-google-plus-g',
  name: 'google-plus-g'
}, {
  class: 'fab fa-google-plus-square',
  name: 'google-plus-square'
}, {
  class: 'fab fa-google-wallet',
  name: 'google-wallet'
}, {
  class: 'fas fa-gopuram',
  name: 'gopuram'
}, {
  class: 'fas fa-graduation-cap',
  name: 'graduation-cap'
}, {
  class: 'fab fa-gratipay',
  name: 'gratipay'
}, {
  class: 'fab fa-grav',
  name: 'grav'
}, {
  class: 'fas fa-greater-than',
  name: 'greater-than'
}, {
  class: 'fas fa-greater-than-equal',
  name: 'greater-than-equal'
}, {
  class: 'fas fa-grimace',
  name: 'grimace'
}, {
  class: 'far fa-grimace',
  name: 'grimace'
}, {
  class: 'fas fa-grin',
  name: 'grin'
}, {
  class: 'far fa-grin',
  name: 'grin'
}, {
  class: 'fas fa-grin-alt',
  name: 'grin-alt'
}, {
  class: 'far fa-grin-alt',
  name: 'grin-alt'
}, {
  class: 'fas fa-grin-beam',
  name: 'grin-beam'
}, {
  class: 'far fa-grin-beam',
  name: 'grin-beam'
}, {
  class: 'fas fa-grin-beam-sweat',
  name: 'grin-beam-sweat'
}, {
  class: 'far fa-grin-beam-sweat',
  name: 'grin-beam-sweat'
}, {
  class: 'fas fa-grin-hearts',
  name: 'grin-hearts'
}, {
  class: 'far fa-grin-hearts',
  name: 'grin-hearts'
}, {
  class: 'fas fa-grin-squint',
  name: 'grin-squint'
}, {
  class: 'far fa-grin-squint',
  name: 'grin-squint'
}, {
  class: 'fas fa-grin-squint-tears',
  name: 'grin-squint-tears'
}, {
  class: 'far fa-grin-squint-tears',
  name: 'grin-squint-tears'
}, {
  class: 'fas fa-grin-stars',
  name: 'grin-stars'
}, {
  class: 'far fa-grin-stars',
  name: 'grin-stars'
}, {
  class: 'fas fa-grin-tears',
  name: 'grin-tears'
}, {
  class: 'far fa-grin-tears',
  name: 'grin-tears'
}, {
  class: 'fas fa-grin-tongue',
  name: 'grin-tongue'
}, {
  class: 'far fa-grin-tongue',
  name: 'grin-tongue'
}, {
  class: 'fas fa-grin-tongue-squint',
  name: 'grin-tongue-squint'
}, {
  class: 'far fa-grin-tongue-squint',
  name: 'grin-tongue-squint'
}, {
  class: 'fas fa-grin-tongue-wink',
  name: 'grin-tongue-wink'
}, {
  class: 'far fa-grin-tongue-wink',
  name: 'grin-tongue-wink'
}, {
  class: 'fas fa-grin-wink',
  name: 'grin-wink'
}, {
  class: 'far fa-grin-wink',
  name: 'grin-wink'
}, {
  class: 'fas fa-grip-horizontal',
  name: 'grip-horizontal'
}, {
  class: 'fas fa-grip-lines',
  name: 'grip-lines'
}, {
  class: 'fas fa-grip-lines-vertical',
  name: 'grip-lines-vertical'
}, {
  class: 'fas fa-grip-vertical',
  name: 'grip-vertical'
}, {
  class: 'fab fa-gripfire',
  name: 'gripfire'
}, {
  class: 'fab fa-grunt',
  name: 'grunt'
}, {
  class: 'fab fa-guilded',
  name: 'guilded'
}, {
  class: 'fas fa-guitar',
  name: 'guitar'
}, {
  class: 'fab fa-gulp',
  name: 'gulp'
}, {
  class: 'fas fa-h-square',
  name: 'h-square'
}, {
  class: 'fab fa-hacker-news',
  name: 'hacker-news'
}, {
  class: 'fab fa-hacker-news-square',
  name: 'hacker-news-square'
}, {
  class: 'fab fa-hackerrank',
  name: 'hackerrank'
}, {
  class: 'fas fa-hamburger',
  name: 'hamburger'
}, {
  class: 'fas fa-hammer',
  name: 'hammer'
}, {
  class: 'fas fa-hamsa',
  name: 'hamsa'
}, {
  class: 'fas fa-hand-holding',
  name: 'hand-holding'
}, {
  class: 'fas fa-hand-holding-heart',
  name: 'hand-holding-heart'
}, {
  class: 'fas fa-hand-holding-medical',
  name: 'hand-holding-medical'
}, {
  class: 'fas fa-hand-holding-usd',
  name: 'hand-holding-usd'
}, {
  class: 'fas fa-hand-holding-water',
  name: 'hand-holding-water'
}, {
  class: 'fas fa-hand-lizard',
  name: 'hand-lizard'
}, {
  class: 'far fa-hand-lizard',
  name: 'hand-lizard'
}, {
  class: 'fas fa-hand-middle-finger',
  name: 'hand-middle-finger'
}, {
  class: 'fas fa-hand-paper',
  name: 'hand-paper'
}, {
  class: 'far fa-hand-paper',
  name: 'hand-paper'
}, {
  class: 'fas fa-hand-peace',
  name: 'hand-peace'
}, {
  class: 'far fa-hand-peace',
  name: 'hand-peace'
}, {
  class: 'fas fa-hand-point-down',
  name: 'hand-point-down'
}, {
  class: 'far fa-hand-point-down',
  name: 'hand-point-down'
}, {
  class: 'fas fa-hand-point-left',
  name: 'hand-point-left'
}, {
  class: 'far fa-hand-point-left',
  name: 'hand-point-left'
}, {
  class: 'fas fa-hand-point-right',
  name: 'hand-point-right'
}, {
  class: 'far fa-hand-point-right',
  name: 'hand-point-right'
}, {
  class: 'fas fa-hand-point-up',
  name: 'hand-point-up'
}, {
  class: 'far fa-hand-point-up',
  name: 'hand-point-up'
}, {
  class: 'fas fa-hand-pointer',
  name: 'hand-pointer'
}, {
  class: 'far fa-hand-pointer',
  name: 'hand-pointer'
}, {
  class: 'fas fa-hand-rock',
  name: 'hand-rock'
}, {
  class: 'far fa-hand-rock',
  name: 'hand-rock'
}, {
  class: 'fas fa-hand-scissors',
  name: 'hand-scissors'
}, {
  class: 'far fa-hand-scissors',
  name: 'hand-scissors'
}, {
  class: 'fas fa-hand-sparkles',
  name: 'hand-sparkles'
}, {
  class: 'fas fa-hand-spock',
  name: 'hand-spock'
}, {
  class: 'far fa-hand-spock',
  name: 'hand-spock'
}, {
  class: 'fas fa-hands',
  name: 'hands'
}, {
  class: 'fas fa-hands-helping',
  name: 'hands-helping'
}, {
  class: 'fas fa-hands-wash',
  name: 'hands-wash'
}, {
  class: 'fas fa-handshake',
  name: 'handshake'
}, {
  class: 'far fa-handshake',
  name: 'handshake'
}, {
  class: 'fas fa-handshake-alt-slash',
  name: 'handshake-alt-slash'
}, {
  class: 'fas fa-handshake-slash',
  name: 'handshake-slash'
}, {
  class: 'fas fa-hanukiah',
  name: 'hanukiah'
}, {
  class: 'fas fa-hard-hat',
  name: 'hard-hat'
}, {
  class: 'fas fa-hashtag',
  name: 'hashtag'
}, {
  class: 'fas fa-hat-cowboy',
  name: 'hat-cowboy'
}, {
  class: 'fas fa-hat-cowboy-side',
  name: 'hat-cowboy-side'
}, {
  class: 'fas fa-hat-wizard',
  name: 'hat-wizard'
}, {
  class: 'fas fa-hdd',
  name: 'hdd'
}, {
  class: 'far fa-hdd',
  name: 'hdd'
}, {
  class: 'fas fa-head-side-cough',
  name: 'head-side-cough'
}, {
  class: 'fas fa-head-side-cough-slash',
  name: 'head-side-cough-slash'
}, {
  class: 'fas fa-head-side-mask',
  name: 'head-side-mask'
}, {
  class: 'fas fa-head-side-virus',
  name: 'head-side-virus'
}, {
  class: 'fas fa-heading',
  name: 'heading'
}, {
  class: 'fas fa-headphones',
  name: 'headphones'
}, {
  class: 'fas fa-headphones-alt',
  name: 'headphones-alt'
}, {
  class: 'fas fa-headset',
  name: 'headset'
}, {
  class: 'fas fa-heart',
  name: 'heart'
}, {
  class: 'far fa-heart',
  name: 'heart'
}, {
  class: 'fas fa-heart-broken',
  name: 'heart-broken'
}, {
  class: 'fas fa-heartbeat',
  name: 'heartbeat'
}, {
  class: 'fas fa-helicopter',
  name: 'helicopter'
}, {
  class: 'fas fa-highlighter',
  name: 'highlighter'
}, {
  class: 'fas fa-hiking',
  name: 'hiking'
}, {
  class: 'fas fa-hippo',
  name: 'hippo'
}, {
  class: 'fab fa-hips',
  name: 'hips'
}, {
  class: 'fab fa-hire-a-helper',
  name: 'hire-a-helper'
}, {
  class: 'fas fa-history',
  name: 'history'
}, {
  class: 'fab fa-hive',
  name: 'hive'
}, {
  class: 'fas fa-hockey-puck',
  name: 'hockey-puck'
}, {
  class: 'fas fa-holly-berry',
  name: 'holly-berry'
}, {
  class: 'fas fa-home',
  name: 'home'
}, {
  class: 'fab fa-hooli',
  name: 'hooli'
}, {
  class: 'fab fa-hornbill',
  name: 'hornbill'
}, {
  class: 'fas fa-horse',
  name: 'horse'
}, {
  class: 'fas fa-horse-head',
  name: 'horse-head'
}, {
  class: 'fas fa-hospital',
  name: 'hospital'
}, {
  class: 'far fa-hospital',
  name: 'hospital'
}, {
  class: 'fas fa-hospital-alt',
  name: 'hospital-alt'
}, {
  class: 'fas fa-hospital-symbol',
  name: 'hospital-symbol'
}, {
  class: 'fas fa-hospital-user',
  name: 'hospital-user'
}, {
  class: 'fas fa-hot-tub',
  name: 'hot-tub'
}, {
  class: 'fas fa-hotdog',
  name: 'hotdog'
}, {
  class: 'fas fa-hotel',
  name: 'hotel'
}, {
  class: 'fab fa-hotjar',
  name: 'hotjar'
}, {
  class: 'fas fa-hourglass',
  name: 'hourglass'
}, {
  class: 'far fa-hourglass',
  name: 'hourglass'
}, {
  class: 'fas fa-hourglass-end',
  name: 'hourglass-end'
}, {
  class: 'fas fa-hourglass-half',
  name: 'hourglass-half'
}, {
  class: 'fas fa-hourglass-start',
  name: 'hourglass-start'
}, {
  class: 'fas fa-house-damage',
  name: 'house-damage'
}, {
  class: 'fas fa-house-user',
  name: 'house-user'
}, {
  class: 'fab fa-houzz',
  name: 'houzz'
}, {
  class: 'fas fa-hryvnia',
  name: 'hryvnia'
}, {
  class: 'fab fa-html5',
  name: 'html5'
}, {
  class: 'fab fa-hubspot',
  name: 'hubspot'
}, {
  class: 'fas fa-i-cursor',
  name: 'i-cursor'
}, {
  class: 'fas fa-ice-cream',
  name: 'ice-cream'
}, {
  class: 'fas fa-icicles',
  name: 'icicles'
}, {
  class: 'fas fa-icons',
  name: 'icons'
}, {
  class: 'fas fa-id-badge',
  name: 'id-badge'
}, {
  class: 'far fa-id-badge',
  name: 'id-badge'
}, {
  class: 'fas fa-id-card',
  name: 'id-card'
}, {
  class: 'far fa-id-card',
  name: 'id-card'
}, {
  class: 'fas fa-id-card-alt',
  name: 'id-card-alt'
}, {
  class: 'fab fa-ideal',
  name: 'ideal'
}, {
  class: 'fas fa-igloo',
  name: 'igloo'
}, {
  class: 'fas fa-image',
  name: 'image'
}, {
  class: 'far fa-image',
  name: 'image'
}, {
  class: 'fas fa-images',
  name: 'images'
}, {
  class: 'far fa-images',
  name: 'images'
}, {
  class: 'fab fa-imdb',
  name: 'imdb'
}, {
  class: 'fas fa-inbox',
  name: 'inbox'
}, {
  class: 'fas fa-indent',
  name: 'indent'
}, {
  class: 'fas fa-industry',
  name: 'industry'
}, {
  class: 'fas fa-infinity',
  name: 'infinity'
}, {
  class: 'fas fa-info',
  name: 'info'
}, {
  class: 'fas fa-info-circle',
  name: 'info-circle'
}, {
  class: 'fab fa-innosoft',
  name: 'innosoft'
}, {
  class: 'fab fa-instagram',
  name: 'instagram'
}, {
  class: 'fab fa-instagram-square',
  name: 'instagram-square'
}, {
  class: 'fab fa-instalod',
  name: 'instalod'
}, {
  class: 'fab fa-intercom',
  name: 'intercom'
}, {
  class: 'fab fa-internet-explorer',
  name: 'internet-explorer'
}, {
  class: 'fab fa-invision',
  name: 'invision'
}, {
  class: 'fab fa-ioxhost',
  name: 'ioxhost'
}, {
  class: 'fas fa-italic',
  name: 'italic'
}, {
  class: 'fab fa-itch-io',
  name: 'itch-io'
}, {
  class: 'fab fa-itunes',
  name: 'itunes'
}, {
  class: 'fab fa-itunes-note',
  name: 'itunes-note'
}, {
  class: 'fab fa-java',
  name: 'java'
}, {
  class: 'fas fa-jedi',
  name: 'jedi'
}, {
  class: 'fab fa-jedi-order',
  name: 'jedi-order'
}, {
  class: 'fab fa-jenkins',
  name: 'jenkins'
}, {
  class: 'fab fa-jira',
  name: 'jira'
}, {
  class: 'fab fa-joget',
  name: 'joget'
}, {
  class: 'fas fa-joint',
  name: 'joint'
}, {
  class: 'fab fa-joomla',
  name: 'joomla'
}, {
  class: 'fas fa-journal-whills',
  name: 'journal-whills'
}, {
  class: 'fab fa-js',
  name: 'js'
}, {
  class: 'fab fa-js-square',
  name: 'js-square'
}, {
  class: 'fab fa-jsfiddle',
  name: 'jsfiddle'
}, {
  class: 'fas fa-kaaba',
  name: 'kaaba'
}, {
  class: 'fab fa-kaggle',
  name: 'kaggle'
}, {
  class: 'fas fa-key',
  name: 'key'
}, {
  class: 'fab fa-keybase',
  name: 'keybase'
}, {
  class: 'fas fa-keyboard',
  name: 'keyboard'
}, {
  class: 'far fa-keyboard',
  name: 'keyboard'
}, {
  class: 'fab fa-keycdn',
  name: 'keycdn'
}, {
  class: 'fas fa-khanda',
  name: 'khanda'
}, {
  class: 'fab fa-kickstarter',
  name: 'kickstarter'
}, {
  class: 'fab fa-kickstarter-k',
  name: 'kickstarter-k'
}, {
  class: 'fas fa-kiss',
  name: 'kiss'
}, {
  class: 'far fa-kiss',
  name: 'kiss'
}, {
  class: 'fas fa-kiss-beam',
  name: 'kiss-beam'
}, {
  class: 'far fa-kiss-beam',
  name: 'kiss-beam'
}, {
  class: 'fas fa-kiss-wink-heart',
  name: 'kiss-wink-heart'
}, {
  class: 'far fa-kiss-wink-heart',
  name: 'kiss-wink-heart'
}, {
  class: 'fas fa-kiwi-bird',
  name: 'kiwi-bird'
}, {
  class: 'fab fa-korvue',
  name: 'korvue'
}, {
  class: 'fas fa-landmark',
  name: 'landmark'
}, {
  class: 'fas fa-language',
  name: 'language'
}, {
  class: 'fas fa-laptop',
  name: 'laptop'
}, {
  class: 'fas fa-laptop-code',
  name: 'laptop-code'
}, {
  class: 'fas fa-laptop-house',
  name: 'laptop-house'
}, {
  class: 'fas fa-laptop-medical',
  name: 'laptop-medical'
}, {
  class: 'fab fa-laravel',
  name: 'laravel'
}, {
  class: 'fab fa-lastfm',
  name: 'lastfm'
}, {
  class: 'fab fa-lastfm-square',
  name: 'lastfm-square'
}, {
  class: 'fas fa-laugh',
  name: 'laugh'
}, {
  class: 'far fa-laugh',
  name: 'laugh'
}, {
  class: 'fas fa-laugh-beam',
  name: 'laugh-beam'
}, {
  class: 'far fa-laugh-beam',
  name: 'laugh-beam'
}, {
  class: 'fas fa-laugh-squint',
  name: 'laugh-squint'
}, {
  class: 'far fa-laugh-squint',
  name: 'laugh-squint'
}, {
  class: 'fas fa-laugh-wink',
  name: 'laugh-wink'
}, {
  class: 'far fa-laugh-wink',
  name: 'laugh-wink'
}, {
  class: 'fas fa-layer-group',
  name: 'layer-group'
}, {
  class: 'fas fa-leaf',
  name: 'leaf'
}, {
  class: 'fab fa-leanpub',
  name: 'leanpub'
}, {
  class: 'fas fa-lemon',
  name: 'lemon'
}, {
  class: 'far fa-lemon',
  name: 'lemon'
}, {
  class: 'fab fa-less',
  name: 'less'
}, {
  class: 'fas fa-less-than',
  name: 'less-than'
}, {
  class: 'fas fa-less-than-equal',
  name: 'less-than-equal'
}, {
  class: 'fas fa-level-down-alt',
  name: 'level-down-alt'
}, {
  class: 'fas fa-level-up-alt',
  name: 'level-up-alt'
}, {
  class: 'fas fa-life-ring',
  name: 'life-ring'
}, {
  class: 'far fa-life-ring',
  name: 'life-ring'
}, {
  class: 'fas fa-lightbulb',
  name: 'lightbulb'
}, {
  class: 'far fa-lightbulb',
  name: 'lightbulb'
}, {
  class: 'fab fa-line',
  name: 'line'
}, {
  class: 'fas fa-link',
  name: 'link'
}, {
  class: 'fab fa-linkedin',
  name: 'linkedin'
}, {
  class: 'fab fa-linkedin-in',
  name: 'linkedin-in'
}, {
  class: 'fab fa-linode',
  name: 'linode'
}, {
  class: 'fab fa-linux',
  name: 'linux'
}, {
  class: 'fas fa-lira-sign',
  name: 'lira-sign'
}, {
  class: 'fas fa-list',
  name: 'list'
}, {
  class: 'fas fa-list-alt',
  name: 'list-alt'
}, {
  class: 'far fa-list-alt',
  name: 'list-alt'
}, {
  class: 'fas fa-list-ol',
  name: 'list-ol'
}, {
  class: 'fas fa-list-ul',
  name: 'list-ul'
}, {
  class: 'fas fa-location-arrow',
  name: 'location-arrow'
}, {
  class: 'fas fa-lock',
  name: 'lock'
}, {
  class: 'fas fa-lock-open',
  name: 'lock-open'
}, {
  class: 'fas fa-long-arrow-alt-down',
  name: 'long-arrow-alt-down'
}, {
  class: 'fas fa-long-arrow-alt-left',
  name: 'long-arrow-alt-left'
}, {
  class: 'fas fa-long-arrow-alt-right',
  name: 'long-arrow-alt-right'
}, {
  class: 'fas fa-long-arrow-alt-up',
  name: 'long-arrow-alt-up'
}, {
  class: 'fas fa-low-vision',
  name: 'low-vision'
}, {
  class: 'fas fa-luggage-cart',
  name: 'luggage-cart'
}, {
  class: 'fas fa-lungs',
  name: 'lungs'
}, {
  class: 'fas fa-lungs-virus',
  name: 'lungs-virus'
}, {
  class: 'fab fa-lyft',
  name: 'lyft'
}, {
  class: 'fab fa-magento',
  name: 'magento'
}, {
  class: 'fas fa-magic',
  name: 'magic'
}, {
  class: 'fas fa-magnet',
  name: 'magnet'
}, {
  class: 'fas fa-mail-bulk',
  name: 'mail-bulk'
}, {
  class: 'fab fa-mailchimp',
  name: 'mailchimp'
}, {
  class: 'fas fa-male',
  name: 'male'
}, {
  class: 'fab fa-mandalorian',
  name: 'mandalorian'
}, {
  class: 'fas fa-map',
  name: 'map'
}, {
  class: 'far fa-map',
  name: 'map'
}, {
  class: 'fas fa-map-marked',
  name: 'map-marked'
}, {
  class: 'fas fa-map-marked-alt',
  name: 'map-marked-alt'
}, {
  class: 'fas fa-map-marker',
  name: 'map-marker'
}, {
  class: 'fas fa-map-marker-alt',
  name: 'map-marker-alt'
}, {
  class: 'fas fa-map-pin',
  name: 'map-pin'
}, {
  class: 'fas fa-map-signs',
  name: 'map-signs'
}, {
  class: 'fab fa-markdown',
  name: 'markdown'
}, {
  class: 'fas fa-marker',
  name: 'marker'
}, {
  class: 'fas fa-mars',
  name: 'mars'
}, {
  class: 'fas fa-mars-double',
  name: 'mars-double'
}, {
  class: 'fas fa-mars-stroke',
  name: 'mars-stroke'
}, {
  class: 'fas fa-mars-stroke-h',
  name: 'mars-stroke-h'
}, {
  class: 'fas fa-mars-stroke-v',
  name: 'mars-stroke-v'
}, {
  class: 'fas fa-mask',
  name: 'mask'
}, {
  class: 'fab fa-mastodon',
  name: 'mastodon'
}, {
  class: 'fab fa-maxcdn',
  name: 'maxcdn'
}, {
  class: 'fab fa-mdb',
  name: 'mdb'
}, {
  class: 'fas fa-medal',
  name: 'medal'
}, {
  class: 'fab fa-medapps',
  name: 'medapps'
}, {
  class: 'fab fa-medium',
  name: 'medium'
}, {
  class: 'fab fa-medium-m',
  name: 'medium-m'
}, {
  class: 'fas fa-medkit',
  name: 'medkit'
}, {
  class: 'fab fa-medrt',
  name: 'medrt'
}, {
  class: 'fab fa-meetup',
  name: 'meetup'
}, {
  class: 'fab fa-megaport',
  name: 'megaport'
}, {
  class: 'fas fa-meh',
  name: 'meh'
}, {
  class: 'far fa-meh',
  name: 'meh'
}, {
  class: 'fas fa-meh-blank',
  name: 'meh-blank'
}, {
  class: 'far fa-meh-blank',
  name: 'meh-blank'
}, {
  class: 'fas fa-meh-rolling-eyes',
  name: 'meh-rolling-eyes'
}, {
  class: 'far fa-meh-rolling-eyes',
  name: 'meh-rolling-eyes'
}, {
  class: 'fas fa-memory',
  name: 'memory'
}, {
  class: 'fab fa-mendeley',
  name: 'mendeley'
}, {
  class: 'fas fa-menorah',
  name: 'menorah'
}, {
  class: 'fas fa-mercury',
  name: 'mercury'
}, {
  class: 'fas fa-meteor',
  name: 'meteor'
}, {
  class: 'fab fa-microblog',
  name: 'microblog'
}, {
  class: 'fas fa-microchip',
  name: 'microchip'
}, {
  class: 'fas fa-microphone',
  name: 'microphone'
}, {
  class: 'fas fa-microphone-alt',
  name: 'microphone-alt'
}, {
  class: 'fas fa-microphone-alt-slash',
  name: 'microphone-alt-slash'
}, {
  class: 'fas fa-microphone-slash',
  name: 'microphone-slash'
}, {
  class: 'fas fa-microscope',
  name: 'microscope'
}, {
  class: 'fab fa-microsoft',
  name: 'microsoft'
}, {
  class: 'fas fa-minus',
  name: 'minus'
}, {
  class: 'fas fa-minus-circle',
  name: 'minus-circle'
}, {
  class: 'fas fa-minus-square',
  name: 'minus-square'
}, {
  class: 'far fa-minus-square',
  name: 'minus-square'
}, {
  class: 'fas fa-mitten',
  name: 'mitten'
}, {
  class: 'fab fa-mix',
  name: 'mix'
}, {
  class: 'fab fa-mixcloud',
  name: 'mixcloud'
}, {
  class: 'fab fa-mixer',
  name: 'mixer'
}, {
  class: 'fab fa-mizuni',
  name: 'mizuni'
}, {
  class: 'fas fa-mobile',
  name: 'mobile'
}, {
  class: 'fas fa-mobile-alt',
  name: 'mobile-alt'
}, {
  class: 'fab fa-modx',
  name: 'modx'
}, {
  class: 'fab fa-monero',
  name: 'monero'
}, {
  class: 'fas fa-money-bill',
  name: 'money-bill'
}, {
  class: 'fas fa-money-bill-alt',
  name: 'money-bill-alt'
}, {
  class: 'far fa-money-bill-alt',
  name: 'money-bill-alt'
}, {
  class: 'fas fa-money-bill-wave',
  name: 'money-bill-wave'
}, {
  class: 'fas fa-money-bill-wave-alt',
  name: 'money-bill-wave-alt'
}, {
  class: 'fas fa-money-check',
  name: 'money-check'
}, {
  class: 'fas fa-money-check-alt',
  name: 'money-check-alt'
}, {
  class: 'fas fa-monument',
  name: 'monument'
}, {
  class: 'fas fa-moon',
  name: 'moon'
}, {
  class: 'far fa-moon',
  name: 'moon'
}, {
  class: 'fas fa-mortar-pestle',
  name: 'mortar-pestle'
}, {
  class: 'fas fa-mosque',
  name: 'mosque'
}, {
  class: 'fas fa-motorcycle',
  name: 'motorcycle'
}, {
  class: 'fas fa-mountain',
  name: 'mountain'
}, {
  class: 'fas fa-mouse',
  name: 'mouse'
}, {
  class: 'fas fa-mouse-pointer',
  name: 'mouse-pointer'
}, {
  class: 'fas fa-mug-hot',
  name: 'mug-hot'
}, {
  class: 'fas fa-music',
  name: 'music'
}, {
  class: 'fab fa-napster',
  name: 'napster'
}, {
  class: 'fab fa-neos',
  name: 'neos'
}, {
  class: 'fas fa-network-wired',
  name: 'network-wired'
}, {
  class: 'fas fa-neuter',
  name: 'neuter'
}, {
  class: 'fas fa-newspaper',
  name: 'newspaper'
}, {
  class: 'far fa-newspaper',
  name: 'newspaper'
}, {
  class: 'fab fa-nimblr',
  name: 'nimblr'
}, {
  class: 'fab fa-node',
  name: 'node'
}, {
  class: 'fab fa-node-js',
  name: 'node-js'
}, {
  class: 'fas fa-not-equal',
  name: 'not-equal'
}, {
  class: 'fas fa-notes-medical',
  name: 'notes-medical'
}, {
  class: 'fab fa-npm',
  name: 'npm'
}, {
  class: 'fab fa-ns8',
  name: 'ns8'
}, {
  class: 'fab fa-nutritionix',
  name: 'nutritionix'
}, {
  class: 'fas fa-object-group',
  name: 'object-group'
}, {
  class: 'far fa-object-group',
  name: 'object-group'
}, {
  class: 'fas fa-object-ungroup',
  name: 'object-ungroup'
}, {
  class: 'far fa-object-ungroup',
  name: 'object-ungroup'
}, {
  class: 'fab fa-octopus-deploy',
  name: 'octopus-deploy'
}, {
  class: 'fab fa-odnoklassniki',
  name: 'odnoklassniki'
}, {
  class: 'fab fa-odnoklassniki-square',
  name: 'odnoklassniki-square'
}, {
  class: 'fas fa-oil-can',
  name: 'oil-can'
}, {
  class: 'fab fa-old-republic',
  name: 'old-republic'
}, {
  class: 'fas fa-om',
  name: 'om'
}, {
  class: 'fab fa-opencart',
  name: 'opencart'
}, {
  class: 'fab fa-openid',
  name: 'openid'
}, {
  class: 'fab fa-opera',
  name: 'opera'
}, {
  class: 'fab fa-optin-monster',
  name: 'optin-monster'
}, {
  class: 'fab fa-orcid',
  name: 'orcid'
}, {
  class: 'fab fa-osi',
  name: 'osi'
}, {
  class: 'fas fa-otter',
  name: 'otter'
}, {
  class: 'fas fa-outdent',
  name: 'outdent'
}, {
  class: 'fab fa-page4',
  name: 'page4'
}, {
  class: 'fab fa-pagelines',
  name: 'pagelines'
}, {
  class: 'fas fa-pager',
  name: 'pager'
}, {
  class: 'fas fa-paint-brush',
  name: 'paint-brush'
}, {
  class: 'fas fa-paint-roller',
  name: 'paint-roller'
}, {
  class: 'fas fa-palette',
  name: 'palette'
}, {
  class: 'fab fa-palfed',
  name: 'palfed'
}, {
  class: 'fas fa-pallet',
  name: 'pallet'
}, {
  class: 'fas fa-paper-plane',
  name: 'paper-plane'
}, {
  class: 'far fa-paper-plane',
  name: 'paper-plane'
}, {
  class: 'fas fa-paperclip',
  name: 'paperclip'
}, {
  class: 'fas fa-parachute-box',
  name: 'parachute-box'
}, {
  class: 'fas fa-paragraph',
  name: 'paragraph'
}, {
  class: 'fas fa-parking',
  name: 'parking'
}, {
  class: 'fas fa-passport',
  name: 'passport'
}, {
  class: 'fas fa-pastafarianism',
  name: 'pastafarianism'
}, {
  class: 'fas fa-paste',
  name: 'paste'
}, {
  class: 'fab fa-patreon',
  name: 'patreon'
}, {
  class: 'fas fa-pause',
  name: 'pause'
}, {
  class: 'fas fa-pause-circle',
  name: 'pause-circle'
}, {
  class: 'far fa-pause-circle',
  name: 'pause-circle'
}, {
  class: 'fas fa-paw',
  name: 'paw'
}, {
  class: 'fab fa-paypal',
  name: 'paypal'
}, {
  class: 'fas fa-peace',
  name: 'peace'
}, {
  class: 'fas fa-pen',
  name: 'pen'
}, {
  class: 'fas fa-pen-alt',
  name: 'pen-alt'
}, {
  class: 'fas fa-pen-fancy',
  name: 'pen-fancy'
}, {
  class: 'fas fa-pen-nib',
  name: 'pen-nib'
}, {
  class: 'fas fa-pen-square',
  name: 'pen-square'
}, {
  class: 'fas fa-pencil-alt',
  name: 'pencil-alt'
}, {
  class: 'fas fa-pencil-ruler',
  name: 'pencil-ruler'
}, {
  class: 'fab fa-penny-arcade',
  name: 'penny-arcade'
}, {
  class: 'fas fa-people-arrows',
  name: 'people-arrows'
}, {
  class: 'fas fa-people-carry',
  name: 'people-carry'
}, {
  class: 'fas fa-pepper-hot',
  name: 'pepper-hot'
}, {
  class: 'fab fa-perbyte',
  name: 'perbyte'
}, {
  class: 'fas fa-percent',
  name: 'percent'
}, {
  class: 'fas fa-percentage',
  name: 'percentage'
}, {
  class: 'fab fa-periscope',
  name: 'periscope'
}, {
  class: 'fas fa-person-booth',
  name: 'person-booth'
}, {
  class: 'fab fa-phabricator',
  name: 'phabricator'
}, {
  class: 'fab fa-phoenix-framework',
  name: 'phoenix-framework'
}, {
  class: 'fab fa-phoenix-squadron',
  name: 'phoenix-squadron'
}, {
  class: 'fas fa-phone',
  name: 'phone'
}, {
  class: 'fas fa-phone-alt',
  name: 'phone-alt'
}, {
  class: 'fas fa-phone-slash',
  name: 'phone-slash'
}, {
  class: 'fas fa-phone-square',
  name: 'phone-square'
}, {
  class: 'fas fa-phone-square-alt',
  name: 'phone-square-alt'
}, {
  class: 'fas fa-phone-volume',
  name: 'phone-volume'
}, {
  class: 'fas fa-photo-video',
  name: 'photo-video'
}, {
  class: 'fab fa-php',
  name: 'php'
}, {
  class: 'fab fa-pied-piper',
  name: 'pied-piper'
}, {
  class: 'fab fa-pied-piper-alt',
  name: 'pied-piper-alt'
}, {
  class: 'fab fa-pied-piper-hat',
  name: 'pied-piper-hat'
}, {
  class: 'fab fa-pied-piper-pp',
  name: 'pied-piper-pp'
}, {
  class: 'fab fa-pied-piper-square',
  name: 'pied-piper-square'
}, {
  class: 'fas fa-piggy-bank',
  name: 'piggy-bank'
}, {
  class: 'fas fa-pills',
  name: 'pills'
}, {
  class: 'fab fa-pinterest',
  name: 'pinterest'
}, {
  class: 'fab fa-pinterest-p',
  name: 'pinterest-p'
}, {
  class: 'fab fa-pinterest-square',
  name: 'pinterest-square'
}, {
  class: 'fas fa-pizza-slice',
  name: 'pizza-slice'
}, {
  class: 'fas fa-place-of-worship',
  name: 'place-of-worship'
}, {
  class: 'fas fa-plane',
  name: 'plane'
}, {
  class: 'fas fa-plane-arrival',
  name: 'plane-arrival'
}, {
  class: 'fas fa-plane-departure',
  name: 'plane-departure'
}, {
  class: 'fas fa-plane-slash',
  name: 'plane-slash'
}, {
  class: 'fas fa-play',
  name: 'play'
}, {
  class: 'fas fa-play-circle',
  name: 'play-circle'
}, {
  class: 'far fa-play-circle',
  name: 'play-circle'
}, {
  class: 'fab fa-playstation',
  name: 'playstation'
}, {
  class: 'fas fa-plug',
  name: 'plug'
}, {
  class: 'fas fa-plus',
  name: 'plus'
}, {
  class: 'fas fa-plus-circle',
  name: 'plus-circle'
}, {
  class: 'fas fa-plus-square',
  name: 'plus-square'
}, {
  class: 'far fa-plus-square',
  name: 'plus-square'
}, {
  class: 'fas fa-podcast',
  name: 'podcast'
}, {
  class: 'fas fa-poll',
  name: 'poll'
}, {
  class: 'fas fa-poll-h',
  name: 'poll-h'
}, {
  class: 'fas fa-poo',
  name: 'poo'
}, {
  class: 'fas fa-poo-storm',
  name: 'poo-storm'
}, {
  class: 'fas fa-poop',
  name: 'poop'
}, {
  class: 'fas fa-portrait',
  name: 'portrait'
}, {
  class: 'fas fa-pound-sign',
  name: 'pound-sign'
}, {
  class: 'fas fa-power-off',
  name: 'power-off'
}, {
  class: 'fas fa-pray',
  name: 'pray'
}, {
  class: 'fas fa-praying-hands',
  name: 'praying-hands'
}, {
  class: 'fas fa-prescription',
  name: 'prescription'
}, {
  class: 'fas fa-prescription-bottle',
  name: 'prescription-bottle'
}, {
  class: 'fas fa-prescription-bottle-alt',
  name: 'prescription-bottle-alt'
}, {
  class: 'fas fa-print',
  name: 'print'
}, {
  class: 'fas fa-procedures',
  name: 'procedures'
}, {
  class: 'fab fa-product-hunt',
  name: 'product-hunt'
}, {
  class: 'fas fa-project-diagram',
  name: 'project-diagram'
}, {
  class: 'fas fa-pump-medical',
  name: 'pump-medical'
}, {
  class: 'fas fa-pump-soap',
  name: 'pump-soap'
}, {
  class: 'fab fa-pushed',
  name: 'pushed'
}, {
  class: 'fas fa-puzzle-piece',
  name: 'puzzle-piece'
}, {
  class: 'fab fa-python',
  name: 'python'
}, {
  class: 'fab fa-qq',
  name: 'qq'
}, {
  class: 'fas fa-qrcode',
  name: 'qrcode'
}, {
  class: 'fas fa-question',
  name: 'question'
}, {
  class: 'fas fa-question-circle',
  name: 'question-circle'
}, {
  class: 'far fa-question-circle',
  name: 'question-circle'
}, {
  class: 'fas fa-quidditch',
  name: 'quidditch'
}, {
  class: 'fab fa-quinscape',
  name: 'quinscape'
}, {
  class: 'fab fa-quora',
  name: 'quora'
}, {
  class: 'fas fa-quote-left',
  name: 'quote-left'
}, {
  class: 'fas fa-quote-right',
  name: 'quote-right'
}, {
  class: 'fas fa-quran',
  name: 'quran'
}, {
  class: 'fab fa-r-project',
  name: 'r-project'
}, {
  class: 'fas fa-radiation',
  name: 'radiation'
}, {
  class: 'fas fa-radiation-alt',
  name: 'radiation-alt'
}, {
  class: 'fas fa-rainbow',
  name: 'rainbow'
}, {
  class: 'fas fa-random',
  name: 'random'
}, {
  class: 'fab fa-raspberry-pi',
  name: 'raspberry-pi'
}, {
  class: 'fab fa-ravelry',
  name: 'ravelry'
}, {
  class: 'fab fa-react',
  name: 'react'
}, {
  class: 'fab fa-reacteurope',
  name: 'reacteurope'
}, {
  class: 'fab fa-readme',
  name: 'readme'
}, {
  class: 'fab fa-rebel',
  name: 'rebel'
}, {
  class: 'fas fa-receipt',
  name: 'receipt'
}, {
  class: 'fas fa-record-vinyl',
  name: 'record-vinyl'
}, {
  class: 'fas fa-recycle',
  name: 'recycle'
}, {
  class: 'fab fa-red-river',
  name: 'red-river'
}, {
  class: 'fab fa-reddit',
  name: 'reddit'
}, {
  class: 'fab fa-reddit-alien',
  name: 'reddit-alien'
}, {
  class: 'fab fa-reddit-square',
  name: 'reddit-square'
}, {
  class: 'fab fa-redhat',
  name: 'redhat'
}, {
  class: 'fas fa-redo',
  name: 'redo'
}, {
  class: 'fas fa-redo-alt',
  name: 'redo-alt'
}, {
  class: 'fas fa-registered',
  name: 'registered'
}, {
  class: 'far fa-registered',
  name: 'registered'
}, {
  class: 'fas fa-remove-format',
  name: 'remove-format'
}, {
  class: 'fab fa-renren',
  name: 'renren'
}, {
  class: 'fas fa-reply',
  name: 'reply'
}, {
  class: 'fas fa-reply-all',
  name: 'reply-all'
}, {
  class: 'fab fa-replyd',
  name: 'replyd'
}, {
  class: 'fas fa-republican',
  name: 'republican'
}, {
  class: 'fab fa-researchgate',
  name: 'researchgate'
}, {
  class: 'fab fa-resolving',
  name: 'resolving'
}, {
  class: 'fas fa-restroom',
  name: 'restroom'
}, {
  class: 'fas fa-retweet',
  name: 'retweet'
}, {
  class: 'fab fa-rev',
  name: 'rev'
}, {
  class: 'fas fa-ribbon',
  name: 'ribbon'
}, {
  class: 'fas fa-ring',
  name: 'ring'
}, {
  class: 'fas fa-road',
  name: 'road'
}, {
  class: 'fas fa-robot',
  name: 'robot'
}, {
  class: 'fas fa-rocket',
  name: 'rocket'
}, {
  class: 'fab fa-rocketchat',
  name: 'rocketchat'
}, {
  class: 'fab fa-rockrms',
  name: 'rockrms'
}, {
  class: 'fas fa-route',
  name: 'route'
}, {
  class: 'fas fa-rss',
  name: 'rss'
}, {
  class: 'fas fa-rss-square',
  name: 'rss-square'
}, {
  class: 'fas fa-ruble-sign',
  name: 'ruble-sign'
}, {
  class: 'fas fa-ruler',
  name: 'ruler'
}, {
  class: 'fas fa-ruler-combined',
  name: 'ruler-combined'
}, {
  class: 'fas fa-ruler-horizontal',
  name: 'ruler-horizontal'
}, {
  class: 'fas fa-ruler-vertical',
  name: 'ruler-vertical'
}, {
  class: 'fas fa-running',
  name: 'running'
}, {
  class: 'fas fa-rupee-sign',
  name: 'rupee-sign'
}, {
  class: 'fab fa-rust',
  name: 'rust'
}, {
  class: 'fas fa-sad-cry',
  name: 'sad-cry'
}, {
  class: 'far fa-sad-cry',
  name: 'sad-cry'
}, {
  class: 'fas fa-sad-tear',
  name: 'sad-tear'
}, {
  class: 'far fa-sad-tear',
  name: 'sad-tear'
}, {
  class: 'fab fa-safari',
  name: 'safari'
}, {
  class: 'fab fa-salesforce',
  name: 'salesforce'
}, {
  class: 'fab fa-sass',
  name: 'sass'
}, {
  class: 'fas fa-satellite',
  name: 'satellite'
}, {
  class: 'fas fa-satellite-dish',
  name: 'satellite-dish'
}, {
  class: 'fas fa-save',
  name: 'save'
}, {
  class: 'far fa-save',
  name: 'save'
}, {
  class: 'fab fa-schlix',
  name: 'schlix'
}, {
  class: 'fas fa-school',
  name: 'school'
}, {
  class: 'fas fa-screwdriver',
  name: 'screwdriver'
}, {
  class: 'fab fa-scribd',
  name: 'scribd'
}, {
  class: 'fas fa-scroll',
  name: 'scroll'
}, {
  class: 'fas fa-sd-card',
  name: 'sd-card'
}, {
  class: 'fas fa-search',
  name: 'search'
}, {
  class: 'fas fa-search-dollar',
  name: 'search-dollar'
}, {
  class: 'fas fa-search-location',
  name: 'search-location'
}, {
  class: 'fas fa-search-minus',
  name: 'search-minus'
}, {
  class: 'fas fa-search-plus',
  name: 'search-plus'
}, {
  class: 'fab fa-searchengin',
  name: 'searchengin'
}, {
  class: 'fas fa-seedling',
  name: 'seedling'
}, {
  class: 'fab fa-sellcast',
  name: 'sellcast'
}, {
  class: 'fab fa-sellsy',
  name: 'sellsy'
}, {
  class: 'fas fa-server',
  name: 'server'
}, {
  class: 'fab fa-servicestack',
  name: 'servicestack'
}, {
  class: 'fas fa-shapes',
  name: 'shapes'
}, {
  class: 'fas fa-share',
  name: 'share'
}, {
  class: 'fas fa-share-alt',
  name: 'share-alt'
}, {
  class: 'fas fa-share-alt-square',
  name: 'share-alt-square'
}, {
  class: 'fas fa-share-square',
  name: 'share-square'
}, {
  class: 'far fa-share-square',
  name: 'share-square'
}, {
  class: 'fas fa-shekel-sign',
  name: 'shekel-sign'
}, {
  class: 'fas fa-shield-alt',
  name: 'shield-alt'
}, {
  class: 'fas fa-shield-virus',
  name: 'shield-virus'
}, {
  class: 'fas fa-ship',
  name: 'ship'
}, {
  class: 'fas fa-shipping-fast',
  name: 'shipping-fast'
}, {
  class: 'fab fa-shirtsinbulk',
  name: 'shirtsinbulk'
}, {
  class: 'fas fa-shoe-prints',
  name: 'shoe-prints'
}, {
  class: 'fab fa-shopify',
  name: 'shopify'
}, {
  class: 'fas fa-shopping-bag',
  name: 'shopping-bag'
}, {
  class: 'fas fa-shopping-basket',
  name: 'shopping-basket'
}, {
  class: 'fas fa-shopping-cart',
  name: 'shopping-cart'
}, {
  class: 'fab fa-shopware',
  name: 'shopware'
}, {
  class: 'fas fa-shower',
  name: 'shower'
}, {
  class: 'fas fa-shuttle-van',
  name: 'shuttle-van'
}, {
  class: 'fas fa-sign',
  name: 'sign'
}, {
  class: 'fas fa-sign-in-alt',
  name: 'sign-in-alt'
}, {
  class: 'fas fa-sign-language',
  name: 'sign-language'
}, {
  class: 'fas fa-sign-out-alt',
  name: 'sign-out-alt'
}, {
  class: 'fas fa-signal',
  name: 'signal'
}, {
  class: 'fas fa-signature',
  name: 'signature'
}, {
  class: 'fas fa-sim-card',
  name: 'sim-card'
}, {
  class: 'fab fa-simplybuilt',
  name: 'simplybuilt'
}, {
  class: 'fas fa-sink',
  name: 'sink'
}, {
  class: 'fab fa-sistrix',
  name: 'sistrix'
}, {
  class: 'fas fa-sitemap',
  name: 'sitemap'
}, {
  class: 'fab fa-sith',
  name: 'sith'
}, {
  class: 'fas fa-skating',
  name: 'skating'
}, {
  class: 'fab fa-sketch',
  name: 'sketch'
}, {
  class: 'fas fa-skiing',
  name: 'skiing'
}, {
  class: 'fas fa-skiing-nordic',
  name: 'skiing-nordic'
}, {
  class: 'fas fa-skull',
  name: 'skull'
}, {
  class: 'fas fa-skull-crossbones',
  name: 'skull-crossbones'
}, {
  class: 'fab fa-skyatlas',
  name: 'skyatlas'
}, {
  class: 'fab fa-skype',
  name: 'skype'
}, {
  class: 'fab fa-slack',
  name: 'slack'
}, {
  class: 'fab fa-slack-hash',
  name: 'slack-hash'
}, {
  class: 'fas fa-slash',
  name: 'slash'
}, {
  class: 'fas fa-sleigh',
  name: 'sleigh'
}, {
  class: 'fas fa-sliders-h',
  name: 'sliders-h'
}, {
  class: 'fab fa-slideshare',
  name: 'slideshare'
}, {
  class: 'fas fa-smile',
  name: 'smile'
}, {
  class: 'far fa-smile',
  name: 'smile'
}, {
  class: 'fas fa-smile-beam',
  name: 'smile-beam'
}, {
  class: 'far fa-smile-beam',
  name: 'smile-beam'
}, {
  class: 'fas fa-smile-wink',
  name: 'smile-wink'
}, {
  class: 'far fa-smile-wink',
  name: 'smile-wink'
}, {
  class: 'fas fa-smog',
  name: 'smog'
}, {
  class: 'fas fa-smoking',
  name: 'smoking'
}, {
  class: 'fas fa-smoking-ban',
  name: 'smoking-ban'
}, {
  class: 'fas fa-sms',
  name: 'sms'
}, {
  class: 'fab fa-snapchat',
  name: 'snapchat'
}, {
  class: 'fab fa-snapchat-ghost',
  name: 'snapchat-ghost'
}, {
  class: 'fab fa-snapchat-square',
  name: 'snapchat-square'
}, {
  class: 'fas fa-snowboarding',
  name: 'snowboarding'
}, {
  class: 'fas fa-snowflake',
  name: 'snowflake'
}, {
  class: 'far fa-snowflake',
  name: 'snowflake'
}, {
  class: 'fas fa-snowman',
  name: 'snowman'
}, {
  class: 'fas fa-snowplow',
  name: 'snowplow'
}, {
  class: 'fas fa-soap',
  name: 'soap'
}, {
  class: 'fas fa-socks',
  name: 'socks'
}, {
  class: 'fas fa-solar-panel',
  name: 'solar-panel'
}, {
  class: 'fas fa-sort',
  name: 'sort'
}, {
  class: 'fas fa-sort-alpha-down',
  name: 'sort-alpha-down'
}, {
  class: 'fas fa-sort-alpha-down-alt',
  name: 'sort-alpha-down-alt'
}, {
  class: 'fas fa-sort-alpha-up',
  name: 'sort-alpha-up'
}, {
  class: 'fas fa-sort-alpha-up-alt',
  name: 'sort-alpha-up-alt'
}, {
  class: 'fas fa-sort-amount-down',
  name: 'sort-amount-down'
}, {
  class: 'fas fa-sort-amount-down-alt',
  name: 'sort-amount-down-alt'
}, {
  class: 'fas fa-sort-amount-up',
  name: 'sort-amount-up'
}, {
  class: 'fas fa-sort-amount-up-alt',
  name: 'sort-amount-up-alt'
}, {
  class: 'fas fa-sort-down',
  name: 'sort-down'
}, {
  class: 'fas fa-sort-numeric-down',
  name: 'sort-numeric-down'
}, {
  class: 'fas fa-sort-numeric-down-alt',
  name: 'sort-numeric-down-alt'
}, {
  class: 'fas fa-sort-numeric-up',
  name: 'sort-numeric-up'
}, {
  class: 'fas fa-sort-numeric-up-alt',
  name: 'sort-numeric-up-alt'
}, {
  class: 'fas fa-sort-up',
  name: 'sort-up'
}, {
  class: 'fab fa-soundcloud',
  name: 'soundcloud'
}, {
  class: 'fab fa-sourcetree',
  name: 'sourcetree'
}, {
  class: 'fas fa-spa',
  name: 'spa'
}, {
  class: 'fas fa-space-shuttle',
  name: 'space-shuttle'
}, {
  class: 'fab fa-speakap',
  name: 'speakap'
}, {
  class: 'fab fa-speaker-deck',
  name: 'speaker-deck'
}, {
  class: 'fas fa-spell-check',
  name: 'spell-check'
}, {
  class: 'fas fa-spider',
  name: 'spider'
}, {
  class: 'fas fa-spinner',
  name: 'spinner'
}, {
  class: 'fas fa-splotch',
  name: 'splotch'
}, {
  class: 'fab fa-spotify',
  name: 'spotify'
}, {
  class: 'fas fa-spray-can',
  name: 'spray-can'
}, {
  class: 'fas fa-square',
  name: 'square'
}, {
  class: 'far fa-square',
  name: 'square'
}, {
  class: 'fas fa-square-full',
  name: 'square-full'
}, {
  class: 'fas fa-square-root-alt',
  name: 'square-root-alt'
}, {
  class: 'fab fa-squarespace',
  name: 'squarespace'
}, {
  class: 'fab fa-stack-exchange',
  name: 'stack-exchange'
}, {
  class: 'fab fa-stack-overflow',
  name: 'stack-overflow'
}, {
  class: 'fab fa-stackpath',
  name: 'stackpath'
}, {
  class: 'fas fa-stamp',
  name: 'stamp'
}, {
  class: 'fas fa-star',
  name: 'star'
}, {
  class: 'far fa-star',
  name: 'star'
}, {
  class: 'fas fa-star-and-crescent',
  name: 'star-and-crescent'
}, {
  class: 'fas fa-star-half',
  name: 'star-half'
}, {
  class: 'far fa-star-half',
  name: 'star-half'
}, {
  class: 'fas fa-star-half-alt',
  name: 'star-half-alt'
}, {
  class: 'fas fa-star-of-david',
  name: 'star-of-david'
}, {
  class: 'fas fa-star-of-life',
  name: 'star-of-life'
}, {
  class: 'fab fa-staylinked',
  name: 'staylinked'
}, {
  class: 'fab fa-steam',
  name: 'steam'
}, {
  class: 'fab fa-steam-square',
  name: 'steam-square'
}, {
  class: 'fab fa-steam-symbol',
  name: 'steam-symbol'
}, {
  class: 'fas fa-step-backward',
  name: 'step-backward'
}, {
  class: 'fas fa-step-forward',
  name: 'step-forward'
}, {
  class: 'fas fa-stethoscope',
  name: 'stethoscope'
}, {
  class: 'fab fa-sticker-mule',
  name: 'sticker-mule'
}, {
  class: 'fas fa-sticky-note',
  name: 'sticky-note'
}, {
  class: 'far fa-sticky-note',
  name: 'sticky-note'
}, {
  class: 'fas fa-stop',
  name: 'stop'
}, {
  class: 'fas fa-stop-circle',
  name: 'stop-circle'
}, {
  class: 'far fa-stop-circle',
  name: 'stop-circle'
}, {
  class: 'fas fa-stopwatch',
  name: 'stopwatch'
}, {
  class: 'fas fa-stopwatch-20',
  name: 'stopwatch-20'
}, {
  class: 'fas fa-store',
  name: 'store'
}, {
  class: 'fas fa-store-alt',
  name: 'store-alt'
}, {
  class: 'fas fa-store-alt-slash',
  name: 'store-alt-slash'
}, {
  class: 'fas fa-store-slash',
  name: 'store-slash'
}, {
  class: 'fab fa-strava',
  name: 'strava'
}, {
  class: 'fas fa-stream',
  name: 'stream'
}, {
  class: 'fas fa-street-view',
  name: 'street-view'
}, {
  class: 'fas fa-strikethrough',
  name: 'strikethrough'
}, {
  class: 'fab fa-stripe',
  name: 'stripe'
}, {
  class: 'fab fa-stripe-s',
  name: 'stripe-s'
}, {
  class: 'fas fa-stroopwafel',
  name: 'stroopwafel'
}, {
  class: 'fab fa-studiovinari',
  name: 'studiovinari'
}, {
  class: 'fab fa-stumbleupon',
  name: 'stumbleupon'
}, {
  class: 'fab fa-stumbleupon-circle',
  name: 'stumbleupon-circle'
}, {
  class: 'fas fa-subscript',
  name: 'subscript'
}, {
  class: 'fas fa-subway',
  name: 'subway'
}, {
  class: 'fas fa-suitcase',
  name: 'suitcase'
}, {
  class: 'fas fa-suitcase-rolling',
  name: 'suitcase-rolling'
}, {
  class: 'fas fa-sun',
  name: 'sun'
}, {
  class: 'far fa-sun',
  name: 'sun'
}, {
  class: 'fab fa-superpowers',
  name: 'superpowers'
}, {
  class: 'fas fa-superscript',
  name: 'superscript'
}, {
  class: 'fab fa-supple',
  name: 'supple'
}, {
  class: 'fas fa-surprise',
  name: 'surprise'
}, {
  class: 'far fa-surprise',
  name: 'surprise'
}, {
  class: 'fab fa-suse',
  name: 'suse'
}, {
  class: 'fas fa-swatchbook',
  name: 'swatchbook'
}, {
  class: 'fab fa-swift',
  name: 'swift'
}, {
  class: 'fas fa-swimmer',
  name: 'swimmer'
}, {
  class: 'fas fa-swimming-pool',
  name: 'swimming-pool'
}, {
  class: 'fab fa-symfony',
  name: 'symfony'
}, {
  class: 'fas fa-synagogue',
  name: 'synagogue'
}, {
  class: 'fas fa-sync',
  name: 'sync'
}, {
  class: 'fas fa-sync-alt',
  name: 'sync-alt'
}, {
  class: 'fas fa-syringe',
  name: 'syringe'
}, {
  class: 'fas fa-table',
  name: 'table'
}, {
  class: 'fas fa-table-tennis',
  name: 'table-tennis'
}, {
  class: 'fas fa-tablet',
  name: 'tablet'
}, {
  class: 'fas fa-tablet-alt',
  name: 'tablet-alt'
}, {
  class: 'fas fa-tablets',
  name: 'tablets'
}, {
  class: 'fas fa-tachometer-alt',
  name: 'tachometer-alt'
}, {
  class: 'fas fa-tag',
  name: 'tag'
}, {
  class: 'fas fa-tags',
  name: 'tags'
}, {
  class: 'fas fa-tape',
  name: 'tape'
}, {
  class: 'fas fa-tasks',
  name: 'tasks'
}, {
  class: 'fas fa-taxi',
  name: 'taxi'
}, {
  class: 'fab fa-teamspeak',
  name: 'teamspeak'
}, {
  class: 'fas fa-teeth',
  name: 'teeth'
}, {
  class: 'fas fa-teeth-open',
  name: 'teeth-open'
}, {
  class: 'fab fa-telegram',
  name: 'telegram'
}, {
  class: 'fab fa-telegram-plane',
  name: 'telegram-plane'
}, {
  class: 'fas fa-temperature-high',
  name: 'temperature-high'
}, {
  class: 'fas fa-temperature-low',
  name: 'temperature-low'
}, {
  class: 'fab fa-tencent-weibo',
  name: 'tencent-weibo'
}, {
  class: 'fas fa-tenge',
  name: 'tenge'
}, {
  class: 'fas fa-terminal',
  name: 'terminal'
}, {
  class: 'fas fa-text-height',
  name: 'text-height'
}, {
  class: 'fas fa-text-width',
  name: 'text-width'
}, {
  class: 'fas fa-th',
  name: 'th'
}, {
  class: 'fas fa-th-large',
  name: 'th-large'
}, {
  class: 'fas fa-th-list',
  name: 'th-list'
}, {
  class: 'fab fa-the-red-yeti',
  name: 'the-red-yeti'
}, {
  class: 'fas fa-theater-masks',
  name: 'theater-masks'
}, {
  class: 'fab fa-themeco',
  name: 'themeco'
}, {
  class: 'fab fa-themeisle',
  name: 'themeisle'
}, {
  class: 'fas fa-thermometer',
  name: 'thermometer'
}, {
  class: 'fas fa-thermometer-empty',
  name: 'thermometer-empty'
}, {
  class: 'fas fa-thermometer-full',
  name: 'thermometer-full'
}, {
  class: 'fas fa-thermometer-half',
  name: 'thermometer-half'
}, {
  class: 'fas fa-thermometer-quarter',
  name: 'thermometer-quarter'
}, {
  class: 'fas fa-thermometer-three-quarters',
  name: 'thermometer-three-quarters'
}, {
  class: 'fab fa-think-peaks',
  name: 'think-peaks'
}, {
  class: 'fas fa-thumbs-down',
  name: 'thumbs-down'
}, {
  class: 'far fa-thumbs-down',
  name: 'thumbs-down'
}, {
  class: 'fas fa-thumbs-up',
  name: 'thumbs-up'
}, {
  class: 'far fa-thumbs-up',
  name: 'thumbs-up'
}, {
  class: 'fas fa-thumbtack',
  name: 'thumbtack'
}, {
  class: 'fas fa-ticket-alt',
  name: 'ticket-alt'
}, {
  class: 'fab fa-tiktok',
  name: 'tiktok'
}, {
  class: 'fas fa-times',
  name: 'times'
}, {
  class: 'fas fa-times-circle',
  name: 'times-circle'
}, {
  class: 'far fa-times-circle',
  name: 'times-circle'
}, {
  class: 'fas fa-tint',
  name: 'tint'
}, {
  class: 'fas fa-tint-slash',
  name: 'tint-slash'
}, {
  class: 'fas fa-tired',
  name: 'tired'
}, {
  class: 'far fa-tired',
  name: 'tired'
}, {
  class: 'fas fa-toggle-off',
  name: 'toggle-off'
}, {
  class: 'fas fa-toggle-on',
  name: 'toggle-on'
}, {
  class: 'fas fa-toilet',
  name: 'toilet'
}, {
  class: 'fas fa-toilet-paper',
  name: 'toilet-paper'
}, {
  class: 'fas fa-toilet-paper-slash',
  name: 'toilet-paper-slash'
}, {
  class: 'fas fa-toolbox',
  name: 'toolbox'
}, {
  class: 'fas fa-tools',
  name: 'tools'
}, {
  class: 'fas fa-tooth',
  name: 'tooth'
}, {
  class: 'fas fa-torah',
  name: 'torah'
}, {
  class: 'fas fa-torii-gate',
  name: 'torii-gate'
}, {
  class: 'fas fa-tractor',
  name: 'tractor'
}, {
  class: 'fab fa-trade-federation',
  name: 'trade-federation'
}, {
  class: 'fas fa-trademark',
  name: 'trademark'
}, {
  class: 'fas fa-traffic-light',
  name: 'traffic-light'
}, {
  class: 'fas fa-trailer',
  name: 'trailer'
}, {
  class: 'fas fa-train',
  name: 'train'
}, {
  class: 'fas fa-tram',
  name: 'tram'
}, {
  class: 'fas fa-transgender',
  name: 'transgender'
}, {
  class: 'fas fa-transgender-alt',
  name: 'transgender-alt'
}, {
  class: 'fas fa-trash',
  name: 'trash'
}, {
  class: 'fas fa-trash-alt',
  name: 'trash-alt'
}, {
  class: 'far fa-trash-alt',
  name: 'trash-alt'
}, {
  class: 'fas fa-trash-restore',
  name: 'trash-restore'
}, {
  class: 'fas fa-trash-restore-alt',
  name: 'trash-restore-alt'
}, {
  class: 'fas fa-tree',
  name: 'tree'
}, {
  class: 'fab fa-trello',
  name: 'trello'
}, {
  class: 'fas fa-trophy',
  name: 'trophy'
}, {
  class: 'fas fa-truck',
  name: 'truck'
}, {
  class: 'fas fa-truck-loading',
  name: 'truck-loading'
}, {
  class: 'fas fa-truck-monster',
  name: 'truck-monster'
}, {
  class: 'fas fa-truck-moving',
  name: 'truck-moving'
}, {
  class: 'fas fa-truck-pickup',
  name: 'truck-pickup'
}, {
  class: 'fas fa-tshirt',
  name: 'tshirt'
}, {
  class: 'fas fa-tty',
  name: 'tty'
}, {
  class: 'fab fa-tumblr',
  name: 'tumblr'
}, {
  class: 'fab fa-tumblr-square',
  name: 'tumblr-square'
}, {
  class: 'fas fa-tv',
  name: 'tv'
}, {
  class: 'fab fa-twitch',
  name: 'twitch'
}, {
  class: 'fab fa-twitter',
  name: 'twitter'
}, {
  class: 'fab fa-twitter-square',
  name: 'twitter-square'
}, {
  class: 'fab fa-typo3',
  name: 'typo3'
}, {
  class: 'fab fa-uber',
  name: 'uber'
}, {
  class: 'fab fa-ubuntu',
  name: 'ubuntu'
}, {
  class: 'fab fa-uikit',
  name: 'uikit'
}, {
  class: 'fab fa-umbraco',
  name: 'umbraco'
}, {
  class: 'fas fa-umbrella',
  name: 'umbrella'
}, {
  class: 'fas fa-umbrella-beach',
  name: 'umbrella-beach'
}, {
  class: 'fab fa-uncharted',
  name: 'uncharted'
}, {
  class: 'fas fa-underline',
  name: 'underline'
}, {
  class: 'fas fa-undo',
  name: 'undo'
}, {
  class: 'fas fa-undo-alt',
  name: 'undo-alt'
}, {
  class: 'fab fa-uniregistry',
  name: 'uniregistry'
}, {
  class: 'fab fa-unity',
  name: 'unity'
}, {
  class: 'fas fa-universal-access',
  name: 'universal-access'
}, {
  class: 'fas fa-university',
  name: 'university'
}, {
  class: 'fas fa-unlink',
  name: 'unlink'
}, {
  class: 'fas fa-unlock',
  name: 'unlock'
}, {
  class: 'fas fa-unlock-alt',
  name: 'unlock-alt'
}, {
  class: 'fab fa-unsplash',
  name: 'unsplash'
}, {
  class: 'fab fa-untappd',
  name: 'untappd'
}, {
  class: 'fas fa-upload',
  name: 'upload'
}, {
  class: 'fab fa-ups',
  name: 'ups'
}, {
  class: 'fab fa-usb',
  name: 'usb'
}, {
  class: 'fas fa-user',
  name: 'user'
}, {
  class: 'far fa-user',
  name: 'user'
}, {
  class: 'fas fa-user-alt',
  name: 'user-alt'
}, {
  class: 'fas fa-user-alt-slash',
  name: 'user-alt-slash'
}, {
  class: 'fas fa-user-astronaut',
  name: 'user-astronaut'
}, {
  class: 'fas fa-user-check',
  name: 'user-check'
}, {
  class: 'fas fa-user-circle',
  name: 'user-circle'
}, {
  class: 'far fa-user-circle',
  name: 'user-circle'
}, {
  class: 'fas fa-user-clock',
  name: 'user-clock'
}, {
  class: 'fas fa-user-cog',
  name: 'user-cog'
}, {
  class: 'fas fa-user-edit',
  name: 'user-edit'
}, {
  class: 'fas fa-user-friends',
  name: 'user-friends'
}, {
  class: 'fas fa-user-graduate',
  name: 'user-graduate'
}, {
  class: 'fas fa-user-injured',
  name: 'user-injured'
}, {
  class: 'fas fa-user-lock',
  name: 'user-lock'
}, {
  class: 'fas fa-user-md',
  name: 'user-md'
}, {
  class: 'fas fa-user-minus',
  name: 'user-minus'
}, {
  class: 'fas fa-user-ninja',
  name: 'user-ninja'
}, {
  class: 'fas fa-user-nurse',
  name: 'user-nurse'
}, {
  class: 'fas fa-user-plus',
  name: 'user-plus'
}, {
  class: 'fas fa-user-secret',
  name: 'user-secret'
}, {
  class: 'fas fa-user-shield',
  name: 'user-shield'
}, {
  class: 'fas fa-user-slash',
  name: 'user-slash'
}, {
  class: 'fas fa-user-tag',
  name: 'user-tag'
}, {
  class: 'fas fa-user-tie',
  name: 'user-tie'
}, {
  class: 'fas fa-user-times',
  name: 'user-times'
}, {
  class: 'fas fa-users',
  name: 'users'
}, {
  class: 'fas fa-users-cog',
  name: 'users-cog'
}, {
  class: 'fas fa-users-slash',
  name: 'users-slash'
}, {
  class: 'fab fa-usps',
  name: 'usps'
}, {
  class: 'fab fa-ussunnah',
  name: 'ussunnah'
}, {
  class: 'fas fa-utensil-spoon',
  name: 'utensil-spoon'
}, {
  class: 'fas fa-utensils',
  name: 'utensils'
}, {
  class: 'fab fa-vaadin',
  name: 'vaadin'
}, {
  class: 'fas fa-vector-square',
  name: 'vector-square'
}, {
  class: 'fas fa-venus',
  name: 'venus'
}, {
  class: 'fas fa-venus-double',
  name: 'venus-double'
}, {
  class: 'fas fa-venus-mars',
  name: 'venus-mars'
}, {
  class: 'fas fa-vest',
  name: 'vest'
}, {
  class: 'fas fa-vest-patches',
  name: 'vest-patches'
}, {
  class: 'fab fa-viacoin',
  name: 'viacoin'
}, {
  class: 'fab fa-viadeo',
  name: 'viadeo'
}, {
  class: 'fab fa-viadeo-square',
  name: 'viadeo-square'
}, {
  class: 'fas fa-vial',
  name: 'vial'
}, {
  class: 'fas fa-vials',
  name: 'vials'
}, {
  class: 'fab fa-viber',
  name: 'viber'
}, {
  class: 'fas fa-video',
  name: 'video'
}, {
  class: 'fas fa-video-slash',
  name: 'video-slash'
}, {
  class: 'fas fa-vihara',
  name: 'vihara'
}, {
  class: 'fab fa-vimeo',
  name: 'vimeo'
}, {
  class: 'fab fa-vimeo-square',
  name: 'vimeo-square'
}, {
  class: 'fab fa-vimeo-v',
  name: 'vimeo-v'
}, {
  class: 'fab fa-vine',
  name: 'vine'
}, {
  class: 'fas fa-virus',
  name: 'virus'
}, {
  class: 'fas fa-virus-slash',
  name: 'virus-slash'
}, {
  class: 'fas fa-viruses',
  name: 'viruses'
}, {
  class: 'fab fa-vk',
  name: 'vk'
}, {
  class: 'fab fa-vnv',
  name: 'vnv'
}, {
  class: 'fas fa-voicemail',
  name: 'voicemail'
}, {
  class: 'fas fa-volleyball-ball',
  name: 'volleyball-ball'
}, {
  class: 'fas fa-volume-down',
  name: 'volume-down'
}, {
  class: 'fas fa-volume-mute',
  name: 'volume-mute'
}, {
  class: 'fas fa-volume-off',
  name: 'volume-off'
}, {
  class: 'fas fa-volume-up',
  name: 'volume-up'
}, {
  class: 'fas fa-vote-yea',
  name: 'vote-yea'
}, {
  class: 'fas fa-vr-cardboard',
  name: 'vr-cardboard'
}, {
  class: 'fab fa-vuejs',
  name: 'vuejs'
}, {
  class: 'fas fa-walking',
  name: 'walking'
}, {
  class: 'fas fa-wallet',
  name: 'wallet'
}, {
  class: 'fas fa-warehouse',
  name: 'warehouse'
}, {
  class: 'fab fa-watchman-monitoring',
  name: 'watchman-monitoring'
}, {
  class: 'fas fa-water',
  name: 'water'
}, {
  class: 'fas fa-wave-square',
  name: 'wave-square'
}, {
  class: 'fab fa-waze',
  name: 'waze'
}, {
  class: 'fab fa-weebly',
  name: 'weebly'
}, {
  class: 'fab fa-weibo',
  name: 'weibo'
}, {
  class: 'fas fa-weight',
  name: 'weight'
}, {
  class: 'fas fa-weight-hanging',
  name: 'weight-hanging'
}, {
  class: 'fab fa-weixin',
  name: 'weixin'
}, {
  class: 'fab fa-whatsapp',
  name: 'whatsapp'
}, {
  class: 'fab fa-whatsapp-square',
  name: 'whatsapp-square'
}, {
  class: 'fas fa-wheelchair',
  name: 'wheelchair'
}, {
  class: 'fab fa-whmcs',
  name: 'whmcs'
}, {
  class: 'fas fa-wifi',
  name: 'wifi'
}, {
  class: 'fab fa-wikipedia-w',
  name: 'wikipedia-w'
}, {
  class: 'fas fa-wind',
  name: 'wind'
}, {
  class: 'fas fa-window-close',
  name: 'window-close'
}, {
  class: 'far fa-window-close',
  name: 'window-close'
}, {
  class: 'fas fa-window-maximize',
  name: 'window-maximize'
}, {
  class: 'far fa-window-maximize',
  name: 'window-maximize'
}, {
  class: 'fas fa-window-minimize',
  name: 'window-minimize'
}, {
  class: 'far fa-window-minimize',
  name: 'window-minimize'
}, {
  class: 'fas fa-window-restore',
  name: 'window-restore'
}, {
  class: 'far fa-window-restore',
  name: 'window-restore'
}, {
  class: 'fab fa-windows',
  name: 'windows'
}, {
  class: 'fas fa-wine-bottle',
  name: 'wine-bottle'
}, {
  class: 'fas fa-wine-glass',
  name: 'wine-glass'
}, {
  class: 'fas fa-wine-glass-alt',
  name: 'wine-glass-alt'
}, {
  class: 'fab fa-wix',
  name: 'wix'
}, {
  class: 'fab fa-wizards-of-the-coast',
  name: 'wizards-of-the-coast'
}, {
  class: 'fab fa-wodu',
  name: 'wodu'
}, {
  class: 'fab fa-wolf-pack-battalion',
  name: 'wolf-pack-battalion'
}, {
  class: 'fas fa-won-sign',
  name: 'won-sign'
}, {
  class: 'fab fa-wordpress',
  name: 'wordpress'
}, {
  class: 'fab fa-wordpress-simple',
  name: 'wordpress-simple'
}, {
  class: 'fab fa-wpbeginner',
  name: 'wpbeginner'
}, {
  class: 'fab fa-wpexplorer',
  name: 'wpexplorer'
}, {
  class: 'fab fa-wpforms',
  name: 'wpforms'
}, {
  class: 'fab fa-wpressr',
  name: 'wpressr'
}, {
  class: 'fas fa-wrench',
  name: 'wrench'
}, {
  class: 'fas fa-x-ray',
  name: 'x-ray'
}, {
  class: 'fab fa-xbox',
  name: 'xbox'
}, {
  class: 'fab fa-xing',
  name: 'xing'
}, {
  class: 'fab fa-xing-square',
  name: 'xing-square'
}, {
  class: 'fab fa-y-combinator',
  name: 'y-combinator'
}, {
  class: 'fab fa-yahoo',
  name: 'yahoo'
}, {
  class: 'fab fa-yammer',
  name: 'yammer'
}, {
  class: 'fab fa-yandex',
  name: 'yandex'
}, {
  class: 'fab fa-yandex-international',
  name: 'yandex-international'
}, {
  class: 'fab fa-yarn',
  name: 'yarn'
}, {
  class: 'fab fa-yelp',
  name: 'yelp'
}, {
  class: 'fas fa-yen-sign',
  name: 'yen-sign'
}, {
  class: 'fas fa-yin-yang',
  name: 'yin-yang'
}, {
  class: 'fab fa-yoast',
  name: 'yoast'
}, {
  class: 'fab fa-youtube',
  name: 'youtube'
}, {
  class: 'fab fa-youtube-square',
  name: 'youtube-square'
}, {
  class: 'fab fa-zhihu',
  name: 'zhihu'
}]);

/***/ }),

/***/ "../Components/ImageControl/ImageControl.js":
/*!**************************************************!*\
  !*** ../Components/ImageControl/ImageControl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeImageData: () => (/* binding */ ChangeImageData),
/* harmony export */   ImageEditControl: () => (/* binding */ ImageEditControl),
/* harmony export */   ImageHolderControl: () => (/* binding */ ImageHolderControl),
/* harmony export */   ImagePlaceholder: () => (/* binding */ ImagePlaceholder)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ImageControl_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageControl.scss */ "../Components/ImageControl/ImageControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/functions */ "../Components/utils/functions.js");









const ImageHolderControl = props => {
  const {
    className,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image:', 'bplugins'),
    value = {},
    onChange
  } = props;
  const onImageSelect = _ref => {
    let {
      id,
      url,
      alt,
      title
    } = _ref;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editImageHolder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mediaControl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ['image'],
    value: value?.id,
    onSelect: onImageSelect,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return !value.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "btnControl"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "upload",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload', 'bplugins'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "btnControl"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "controls-repeat",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "exit",
        onClick: () => onChange({}),
        className: "btnRed"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'bplugins')));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: value?.url,
    alt: value?.alt || value?.title
  })));
};
const ChangeImageData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, props) => {
  const {
    value
  } = props;
  return {
    image: value?.id ? select('core').getMedia(value?.id) : null,
    imageSizes: select('core/block-editor').getSettings().imageSizes
  };
})(props => {
  const {
    className,
    value = {},
    onChange,
    image,
    imageSizes
  } = props;
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, value?.url && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(value?.url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alt Text (Alternative Text):', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: value?.alt,
    onChange: val => setValue('alt', val)
  })), value?.id && 0 !== (0,_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getImageSizes)(image, imageSizes)?.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: value?.url,
    onChange: val => setValue('url', val),
    options: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getImageSizes)(image, imageSizes)
  })));
});
const ImageEditControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image:', 'bplugins'),
    value = {},
    onChange
  } = props;
  const onImageSelect = _ref3 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref3;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return value?.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ['image'],
    value: value?.id,
    onSelect: onImageSelect,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        label: label,
        icon: "format-image",
        onClick: open
      });
    }
  })));
};
const ImagePlaceholder = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Image:', 'bplugins'),
    icon = 'format-image',
    value = {},
    onChange,
    noticeOperations,
    noticeUI
  } = props;
  const onImageSelect = _ref5 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref5;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    labels: {
      title: label
    },
    icon: icon,
    allowedTypes: ['image'],
    accept: "image/*",
    onSelect: onImageSelect,
    onSelectURL: val => onChange({
      ...value,
      id: null,
      url: val,
      alt: '',
      title: ''
    }),
    onError: val => noticeOperations.createErrorNotice(val),
    notices: noticeUI
  });
});

/***/ }),

/***/ "../Components/Label/Label.js":
/*!************************************!*\
  !*** ../Components/Label/Label.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Label = props => {
  const {
    className = 'mt20 mb5',
    htmlFor,
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `bPlLabel ${className}`,
    htmlFor: htmlFor
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ "../Components/MediaControl/MediaControl.js":
/*!**************************************************!*\
  !*** ../Components/MediaControl/MediaControl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BplMediaPlaceholder: () => (/* binding */ BplMediaPlaceholder),
/* harmony export */   InlineDetailMediaUpload: () => (/* binding */ InlineDetailMediaUpload),
/* harmony export */   InlineMediaUpload: () => (/* binding */ InlineMediaUpload),
/* harmony export */   MediaEditControl: () => (/* binding */ MediaEditControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _MediaControl_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaControl.scss */ "../Components/MediaControl/MediaControl.scss");







const InlineMediaUpload = props => {
  const {
    className,
    label = '',
    value,
    types = ['image'],
    onChange,
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter URL', 'bplugins')
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: `bplInlineMediaUpload`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: value,
    onChange: val => onChange(val),
    placeholder: placeholder
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: types,
    onSelect: val => onChange(val.url),
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "button button-primary",
        onClick: open,
        icon: 'upload'
      });
    }
  }))));
};
const InlineDetailMediaUpload = props => {
  const {
    className,
    label = '',
    value = {},
    types = ['image'],
    onChange,
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter URL', 'bplugins')
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: `bplInlineMediaUpload`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: value?.url,
    onChange: url => onChange({
      id: null,
      url,
      alt: '',
      title: ''
    }),
    placeholder: placeholder
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: types,
    onSelect: _ref2 => {
      let {
        id,
        url,
        alt,
        title
      } = _ref2;
      return onChange({
        id,
        url,
        alt,
        title
      });
    },
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "button button-primary",
        onClick: open,
        icon: 'upload'
      });
    }
  }))));
};
const BplMediaPlaceholder = props => {
  const {
    onChange,
    icon = 'format-image',
    type = 'image',
    typeName = '',
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Paste or type a video URL', 'bplugins')
  } = props;
  const [mediaSource, setMediaSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
    className: "bplMediaPlaceholder",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Upload ${typeName || type}`, 'bplugins'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Upload a ${typeName || type} or paste/write ${typeName || type} url to get started.`, 'bplugins'),
    icon: icon
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: [type],
    onSelect: val => onChange(val),
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        isPrimary: true,
        onClick: open
      }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Upload', 'bplugins'), " ");
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "bplUrlInput"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Or', 'bplugins'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'bplugins'),
    placeholder: placeholder,
    onChange: src => setMediaSource(src.target.value),
    value: mediaSource
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply', 'bplugins'),
    type: "submit",
    onClick: e => {
      e.preventDefault();
      onChange({
        id: null,
        url: mediaSource,
        alt: '',
        title: ''
      });
      setMediaSource('');
    },
    isPrimary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply', 'bplugins'))));
};
const MediaEditControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit Image:', 'bplugins'),
    icon = 'format-image',
    types = ['image'],
    value = {},
    onChange
  } = props;
  const onFileSelect = _ref5 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref5;
    return onChange({
      id,
      url,
      alt,
      title
    });
  };
  return value?.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: types,
    value: value?.id,
    onSelect: onFileSelect,
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        label: label,
        icon: icon,
        onClick: open
      });
    }
  })));
};

/***/ }),

/***/ "../Components/MultiShadowControl/MultiShadowControl.js":
/*!**************************************************************!*\
  !*** ../Components/MultiShadowControl/MultiShadowControl.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/icons */ "../Components/utils/icons.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Shadow' (String)
 * @props value: [{hOffset, vOffset, blur, spreed, color, isInset}] (Array)
 * @props onChange: (Function)
 * @props defaults (optional): [{hOffset, vOffset, blur, spreed, color, isInset}] (Array)
 * @return Shadow Properties (Array)
 */







const MultiShadowControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow', 'bplugins'),
    value,
    onChange,
    type = 'box',
    defaults = [],
    produce
  } = props;
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const defaultVal = [{
    hOffset: '0px',
    vOffset: '0px',
    blur: '0px',
    spreed: '0px',
    color: '#7090b0',
    isInset: false
  }];
  const shadow = (value?.length ? value : null) || (defaults?.length ? defaults : null) || defaultVal;
  const getDefault = property => defaults?.[activeIndex]?.[property] || defaultVal[0][property];
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => updateShadow(property, getDefault(property))
  });
  const updateShadow = (property, val) => {
    const newShadow = produce(shadow, draft => {
      draft[activeIndex][property] = val;
    });
    onChange(newShadow);
  };
  const duplicateShadow = e => {
    e.preventDefault();
    onChange([...shadow.slice(0, activeIndex), {
      ...shadow[activeIndex]
    }, ...shadow.slice(activeIndex)]);
    setActiveIndex(activeIndex + 1);
  };
  const removeShadow = e => {
    e.preventDefault();
    onChange([...shadow.slice(0, activeIndex), ...shadow.slice(activeIndex + 1)]);
    setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
  };
  const {
    hOffset = '',
    vOffset = '',
    blur = '',
    spreed = '',
    color = '',
    isInset = false
  } = shadow[activeIndex] || {};
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "edit",
        onClick: () => {
          onToggle(), setActiveIndex(0);
        },
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 1 < shadow.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: "mt5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.BtnGroup, {
      value: activeIndex,
      onChange: val => setActiveIndex(val),
      options: shadow.map((_, index) => ({
        label: index + 1 + '',
        value: index
      })) || [{
        label: 1,
        value: 0
      }]
    })), null !== activeIndex && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal Offset:', 'bplugins'),
      labelPosition: "left",
      value: hOffset,
      onChange: val => updateShadow('hOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
    }), hOffset && hOffset !== getDefault('hOffset') && resetValue('hOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Offset:', 'bplugins'),
      labelPosition: "left",
      value: vOffset,
      onChange: val => updateShadow('vOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
    }), vOffset && vOffset !== getDefault('vOffset') && resetValue('vOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur:', 'bplugins'),
      labelPosition: "left",
      value: blur,
      onChange: val => updateShadow('blur', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
    }), blur && blur !== getDefault('blur') && resetValue('blur')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur cannot be negative value!', 'bplugins')), 'box' === type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spreed:', 'bplugins'),
      labelPosition: "left",
      value: spreed,
      onChange: val => updateShadow('spreed', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
    }), spreed && spreed !== getDefault('spreed') && resetValue('spreed')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color:', 'bplugins'),
      value: color,
      onChange: val => updateShadow('color', val),
      defaultColor: getDefault('color')
    }), 'box' === type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Inset?', 'bplugins'),
      checked: isInset,
      onChange: val => updateShadow('isInset', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "itemAction mt20"
    }, 1 < shadow?.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "removeItem",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove', 'bplugins'),
      onClick: removeShadow
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
      icon: "no"
    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "duplicateItem",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duplicate', 'bplugins'),
      onClick: duplicateShadow
    }, _utils_icons__WEBPACK_IMPORTED_MODULE_6__.gearIcon, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duplicate', 'bplugins')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "addItem"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add New Shadow', 'bplugins'),
      onClick: () => onChange([...shadow, defaultVal[0]])
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
      icon: "plus"
    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add New Shadow', 'bplugins'))))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiShadowControl);

/***/ }),

/***/ "../Components/SelectPureControl/SelectPureControl.js":
/*!************************************************************!*\
  !*** ../Components/SelectPureControl/SelectPureControl.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _SelectPureControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectPureControl.scss */ "../Components/SelectPureControl/SelectPureControl.scss");

/**
 * @props className (optional): 'mt20' (String)
 * @props value: selectedOptions (Array)
 * @props onChange: (Function)
 * @props defaults (optional): { width, height, style, color } (Array)
 * @return Separator Properties (Object)
 */





const SelectPureControl = props => {
  const {
    className = '',
    label = '',
    value,
    onChange,
    options = [],
    SelectPure
  } = props;
  const selectPureEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectPureEl.current) {
      selectPureEl.current.innerHTML = '';
      new SelectPure(selectPureEl.current, {
        value,
        onChange: val => onChange(val),
        options,
        multiple: true,
        autocomplete: true,
        icon: 'closeIcon',
        classNames: {
          select: 'bplSelectPure',
          multiselect: 'selectMultiple',
          label: 'selectLabel',
          selectedLabel: 'selectSelectedLabel',
          dropdown: 'selectOptions',
          dropdownShown: 'selectOptionsOpened',
          autocompleteInput: 'selectAutocomplete',
          option: 'selectOption',
          selectedOption: 'selectOptionSelected',
          optionDisabled: 'selectOptionDisabled',
          optionHidden: 'selectOptionHidden',
          placeholder: 'selectPlaceholder',
          placeholderHidden: 'selectPlaceholderHidden'
        }
      });
    }
  }, [selectPureEl]);
  return label ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: selectPureEl
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    ref: selectPureEl
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectPureControl);

/***/ }),

/***/ "../Components/SeparatorControl/SeparatorControl.js":
/*!**********************************************************!*\
  !*** ../Components/SeparatorControl/SeparatorControl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Separator' (String)
 * @props separator: { width, height, style, color } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { width, height, style, color } (Object)
 * @return Separator Properties (Object)
 */





const SeparatorControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Separator', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    width: '50%',
    height: '2px',
    style: 'solid',
    color: '#bbb'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width:', 'bplugins'),
      labelPosition: "left",
      value: getValue('width'),
      onChange: val => setValue('width', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(50), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.perUnit)(25), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(3)],
      isResetValueOnUnitChange: true
    }), value?.width && value?.width !== getDefault('width') && resetValue('width')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height:', 'bplugins'),
      labelPosition: "left",
      value: getValue('height'),
      onChange: val => setValue('height', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(3), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.height && value?.height !== getDefault('height') && resetValue('height')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('style'),
      onChange: val => setValue('style', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.borderStyles
    }), value?.style && value?.style !== getDefault('style') && resetValue('style')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeparatorControl);

/***/ }),

/***/ "../Components/ShadowControl/ShadowControl.js":
/*!****************************************************!*\
  !*** ../Components/ShadowControl/ShadowControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Box Shadow' (String)
 * @props shadow: { hOffset, vOffset, blur, spreed, color, isInset } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { hOffset, vOffset, blur, spreed, color, isInset } (Object)
 * @return Shadow Properties (Object)
 */





const ShadowControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    type: 'box',
    hOffset: '0px',
    vOffset: '0px',
    blur: '0px',
    spreed: '0px',
    color: '#7090b0',
    isInset: false
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal Offset:', 'bplugins'),
      labelPosition: "left",
      value: getValue('hOffset'),
      onChange: val => setValue('hOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.hOffset && value?.hOffset !== getDefault('hOffset') && resetValue('hOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical Offset:', 'bplugins'),
      labelPosition: "left",
      value: getValue('vOffset'),
      onChange: val => setValue('vOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.vOffset && value?.vOffset !== getDefault('vOffset') && resetValue('vOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur:', 'bplugins'),
      labelPosition: "left",
      value: getValue('blur'),
      onChange: val => setValue('blur', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.blur && value?.blur !== getDefault('blur') && resetValue('blur')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur cannot be negative value!', 'bplugins')), 'box' === getValue('type') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spreed:', 'bplugins'),
      labelPosition: "left",
      value: getValue('spreed'),
      onChange: val => setValue('spreed', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.spreed && value?.spreed !== getDefault('spreed') && resetValue('spreed')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), 'box' === getValue('type') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Inset?', 'bplugins'),
      checked: getValue('isInset'),
      onChange: val => setValue('isInset', val)
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShadowControl);

/***/ }),

/***/ "../Components/SpaceControl/SpaceControl.js":
/*!**************************************************!*\
  !*** ../Components/SpaceControl/SpaceControl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpaceControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpaceControl.scss */ "../Components/SpaceControl/SpaceControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/icons */ "../Components/utils/icons.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Space' (String)
 * @props space (required): {side, vertical, horizontal, top, right, bottom, left} (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { side, vertical, horizontal, top, right, bottom, left } (Object)
 */







const SpaceControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space:', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    side: 2,
    vertical: '0px',
    horizontal: '0px',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const getIntVal = property => parseInt(getValue(property)?.replace(/([a-z])+/g, ''));

  // Check if space property and value are equals to defaults or defaultVal
  const isObject = object => object != null && typeof object === 'object';
  const triCompare = (main, defaults, defaultVal) => {
    const mainAllKeys = Object.keys(main || {});
    const mainKeys = mainAllKeys.filter(arr => arr !== 'styles');
    const equalSpecific = (main, defaults) => {
      const mainKeys = Object.keys(main);
      for (const key of mainKeys) {
        const mainVal = main[key];
        const defaultVal = defaults[key];
        const areObjects = isObject(mainVal) && isObject(defaultVal);
        if (areObjects && !equalSpecific(mainVal, defaultVal) || !areObjects && mainVal !== defaultVal) {
          return false;
        }
      }
      return true;
    };
    for (const key of mainKeys) {
      const mainSingle = main[key];
      const defaultsSingle = defaults[key];
      const defaultValSingle = defaultVal[key];
      const areObjects1 = isObject(mainSingle) && isObject(defaultsSingle);
      const areObjects2 = isObject(mainSingle) && isObject(defaultValSingle);
      if (!defaultsSingle) {
        if (areObjects2 && !equalSpecific(mainSingle, defaultValSingle) || !areObjects2 && mainSingle !== defaultValSingle) {
          return false;
        }
      } else {
        if (areObjects1 && !equalSpecific(mainSingle, defaultsSingle) || !areObjects1 && mainSingle !== defaultsSingle) {
          return false;
        }
      }
    }
    return true;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `bPlSpaceControl ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: `bPlBtnGroup`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical, Horizontal', 'bplugins'),
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "side2",
    isSmall: true,
    isMedium: false,
    isPrimary: 2 === getValue('side'),
    "aria-pressed": 2 === getValue('side'),
    onClick: () => onChange({
      ...value,
      ['side']: 2,
      ['vertical']: `${(getIntVal('top') + getIntVal('bottom')) / 2}px`,
      ['horizontal']: `${(getIntVal('left') + getIntVal('right')) / 2}px`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "scrollIcon"
  }, _utils_icons__WEBPACK_IMPORTED_MODULE_6__.scrollIcon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sideScrollIcon"
  }, _utils_icons__WEBPACK_IMPORTED_MODULE_6__.scrollIcon))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top, Right, Bottom, Left', 'bplugins'),
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSmall: true,
    isMedium: false,
    isPrimary: 4 === getValue('side'),
    "aria-pressed": 4 === getValue('side'),
    onClick: () => onChange({
      ...value,
      ['side']: 4,
      ['top']: getValue('vertical'),
      ['right']: getValue('horizontal'),
      ['bottom']: getValue('vertical'),
      ['left']: getValue('horizontal')
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-up-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-right-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-down-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-left-alt"
  })))), !triCompare(value, defaults, defaultVal) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => {
      const obj = {
        side: getDefault('side'),
        vertical: getDefault('vertical'),
        horizontal: getDefault('horizontal'),
        top: getDefault('top'),
        right: getDefault('right'),
        bottom: getDefault('bottom'),
        left: getDefault('left')
      };
      onChange({
        ...value,
        ...obj
      });
    }
  })), 2 === getValue('side') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "twoColumn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Bottom:', 'bplugins'),
    labelPosition: "top",
    value: getValue('vertical'),
    onChange: val => setValue('vertical', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left Right:', 'bplugins'),
    labelPosition: "top",
    value: getValue('horizontal'),
    onChange: val => setValue('horizontal', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  })), 4 === getValue('side') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "fourColumn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top:', 'bplugins'),
    labelPosition: "top",
    value: getValue('top'),
    onChange: val => setValue('top', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right:', 'bplugins'),
    labelPosition: "top",
    value: getValue('right'),
    onChange: val => setValue('right', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom:', 'bplugins'),
    labelPosition: "top",
    value: getValue('bottom'),
    onChange: val => setValue('bottom', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left:', 'bplugins'),
    labelPosition: "top",
    value: getValue('left'),
    onChange: val => setValue('left', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpaceControl);

/***/ }),

/***/ "../Components/Typography/Typography.js":
/*!**********************************************!*\
  !*** ../Components/Typography/Typography.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Typography_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typography.scss */ "../Components/Typography/Typography.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _fontLists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fontLists */ "../Components/Typography/fontLists.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options */ "../Components/Typography/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Typography' (String)
 * @props typography (required): {fontFamily, fontWeight, fontSize, fontStyle, textTransform, textDecoration, lineHeight, letterSpace} (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { fontFamily, fontWeight, fontSize, fontStyle, textTransform, textDecoration, lineHeight, letterSpace } (Object)
 */









const Typography = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography:', 'bplugins'),
    value,
    onChange,
    defaults = {},
    isFamily = true,
    produce
  } = props;
  const defaultVal = {
    fontFamily: 'Default',
    fontCategory: 'sans-serif',
    fontWeight: 400,
    isUploadFont: true,
    fontSize: {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle: 'normal',
    textTransform: 'none',
    textDecoration: 'auto',
    lineHeight: '135%',
    letterSpace: '0px'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => undefined === value?.[property] ? getDefault(property) : value?.[property];
  // const setValue = (property, val) => onChange({ ...value, [property]: val });
  const resetValue = property => value?.[property] && value?.[property] !== getDefault(property) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });

  // Font family searching
  const [device, setDevice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('desktop');
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isSearching, setIsSearching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const searchFonts = _fontLists__WEBPACK_IMPORTED_MODULE_7__["default"].filter(_ref => {
    let {
      family
    } = _ref;
    return family.toLowerCase().includes(query.toLowerCase());
  });

  // Get Font weights
  const fontWeights = () => {
    const currentFontWeights = _fontLists__WEBPACK_IMPORTED_MODULE_7__["default"].find(font => font.family === getValue('fontFamily'))?.variants;
    let weights = [];
    currentFontWeights?.map(weight => weights?.push({
      label: weight,
      value: weight
    }));
    return 0 === weights.length ? [400] : weights;
  };
  const setValue = (property, val, otherProperty) => {
    const newTypo = produce(value, draft => {
      if (otherProperty) {
        draft[property] = {
          ...draft[property],
          [otherProperty]: val
        };
      } else {
        draft[property] = val;
      }
    });
    onChange(newTypo);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "admin-customizer",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isFamily ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "bPlTypoFontTitle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Family:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Weight:', 'bplugins'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "bPlTypoFont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bPlTypoFontSelect"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "search",
      value: query,
      onClick: () => setIsSearching(!isSearching),
      placeholder: getValue('fontFamily') || 'Search Font',
      onChange: e => setQuery(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicon dashicons dashicons-${isSearching ? 'arrow-up' : 'arrow-down'} `,
      onClick: () => setIsSearching(!isSearching)
    }), isSearching && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "bPlTypoFontLists"
    }, searchFonts?.map(font => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: font?.family,
      onClick: () => {
        onChange({
          ...value,
          ['fontFamily']: font?.family,
          ['fontCategory']: font?.category || 'sans-serif',
          ['fontWeight']: 400,
          ['fontVariant']: 400
        });
        setQuery('');
        setIsSearching(false);
      }
    }, font?.family)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      value: getValue('fontVariant'),
      onChange: val => {
        onChange({
          ...value,
          ['fontWeight']: parseInt(val?.replace('00i', '00')),
          ['fontVariant']: val
        });
      },
      options: fontWeights()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      className: "mt10",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Upload Google Font', 'bplugins'),
      checked: getValue('isUploadFont'),
      onChange: val => setValue('isUploadFont', val)
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Weight:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      value: getValue('fontWeight'),
      onChange: val => setValue('fontWeight', val),
      options: fontWeights()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.BDevice, {
      device: device,
      onChange: val => setDevice(val)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      value: getValue('fontSize')?.[device] || getValue('fontSize'),
      onChange: val => setValue('fontSize', val, device),
      min: 0,
      max: 120,
      step: 1,
      allowReset: true,
      resetFallbackValue: getDefault('fontSize')?.[device] || getDefault('fontSize'),
      initialPosition: getDefault('fontSize')?.[device] || getDefault('fontSize')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      value: getValue('fontStyle'),
      onChange: val => setValue('fontStyle', val),
      options: _options__WEBPACK_IMPORTED_MODULE_8__.fontStyles
    }), resetValue('fontStyle')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: "mt5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Transform:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.BtnGroup, {
      value: getValue('textTransform'),
      onChange: val => setValue('textTransform', val),
      options: _options__WEBPACK_IMPORTED_MODULE_8__.textTransforms,
      isTextIcon: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Decoration:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      value: getValue('textDecoration'),
      onChange: val => setValue('textDecoration', val),
      options: _options__WEBPACK_IMPORTED_MODULE_8__.textDecorations
    }), resetValue('textDecoration')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line Height:', 'bplugins'),
      labelPosition: "left",
      value: getValue('lineHeight'),
      onChange: val => setValue('lineHeight', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(24), (0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.perUnit)(135), (0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(2), (0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)(2)],
      isResetValueOnUnitChange: true
    }), resetValue('lineHeight')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter Spacing:', 'bplugins'),
      labelPosition: "left",
      value: getValue('letterSpace'),
      onChange: val => setValue('letterSpace', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
    }), resetValue('letterSpace')))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "../Components/Typography/fontLists.js":
/*!*********************************************!*\
  !*** ../Components/Typography/fontLists.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  family: 'Default',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'ABeeZee',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Abel',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Abhaya Libre',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Abril Fatface',
  variants: [400],
  category: 'display'
}, {
  family: 'Aclonica',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Acme',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Actor',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Adamina',
  variants: [400],
  category: 'serif'
}, {
  family: 'Advent Pro',
  variants: [100, 200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Aguafina Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Akaya Kanadaka',
  variants: [400],
  category: 'display'
}, {
  family: 'Akaya Telivigala',
  variants: [400],
  category: 'display'
}, {
  family: 'Akronim',
  variants: [400],
  category: 'display'
}, {
  family: 'Aladin',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Alata',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Alatsi',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Aldrich',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Alef',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Alegreya',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Alegreya SC',
  variants: [400, '400i', 500, '500i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Alegreya Sans',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Alegreya Sans SC',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Aleo',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Alex Brush',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Alfa Slab One',
  variants: [400],
  category: 'display'
}, {
  family: 'Alice',
  variants: [400],
  category: 'serif'
}, {
  family: 'Alike',
  variants: [400],
  category: 'serif'
}, {
  family: 'Alike Angular',
  variants: [400],
  category: 'serif'
}, {
  family: 'Allan',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Allerta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Allerta Stencil',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Allura',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Almarai',
  variants: [300, 400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Almendra',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Almendra Display',
  variants: [400],
  category: 'display'
}, {
  family: 'Almendra SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Amarante',
  variants: [400],
  category: 'display'
}, {
  family: 'Amaranth',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Amatic SC',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Amethysta',
  variants: [400],
  category: 'serif'
}, {
  family: 'Amiko',
  variants: [400, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Amiri',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Amita',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Anaheim',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Andada',
  variants: [400],
  category: 'serif'
}, {
  family: 'Andika',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Andika New Basic',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Angkor',
  variants: [400],
  category: 'display'
}, {
  family: 'Annie Use Your Telescope',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Anonymous Pro',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Antic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Antic Didone',
  variants: [400],
  category: 'serif'
}, {
  family: 'Antic Slab',
  variants: [400],
  category: 'serif'
}, {
  family: 'Anton',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Antonio',
  variants: [100, 200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Arapey',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Arbutus',
  variants: [400],
  category: 'display'
}, {
  family: 'Arbutus Slab',
  variants: [400],
  category: 'serif'
}, {
  family: 'Architects Daughter',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Archivo',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Archivo Black',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Archivo Narrow',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Aref Ruqaa',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Arima Madurai',
  variants: [100, 200, 300, 400, 500, 700, 800, 900],
  category: 'display'
}, {
  family: 'Arimo',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Arizonia',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Armata',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Arsenal',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Artifika',
  variants: [400],
  category: 'serif'
}, {
  family: 'Arvo',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Arya',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Asap',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Asap Condensed',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Asar',
  variants: [400],
  category: 'serif'
}, {
  family: 'Asset',
  variants: [400],
  category: 'display'
}, {
  family: 'Assistant',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Astloch',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Asul',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Athiti',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Atma',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Atomic Age',
  variants: [400],
  category: 'display'
}, {
  family: 'Aubrey',
  variants: [400],
  category: 'display'
}, {
  family: 'Audiowide',
  variants: [400],
  category: 'display'
}, {
  family: 'Autour One',
  variants: [400],
  category: 'display'
}, {
  family: 'Average',
  variants: [400],
  category: 'serif'
}, {
  family: 'Average Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Averia Gruesa Libre',
  variants: [400],
  category: 'display'
}, {
  family: 'Averia Libre',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Averia Sans Libre',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Averia Serif Libre',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'B612',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'B612 Mono',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Bad Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Bahiana',
  variants: [400],
  category: 'display'
}, {
  family: 'Bahianita',
  variants: [400],
  category: 'display'
}, {
  family: 'Bai Jamjuree',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Ballet',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Baloo 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Bhai 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Bhaina 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Chettan 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Da 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Paaji 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Tamma 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Tammudu 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Thambi 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Balsamiq Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Balthazar',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bangers',
  variants: [400],
  category: 'display'
}, {
  family: 'Barlow',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Barlow Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Barlow Semi Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Barriecito',
  variants: [400],
  category: 'display'
}, {
  family: 'Barrio',
  variants: [400],
  category: 'display'
}, {
  family: 'Basic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Baskervville',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Battambang',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Baumans',
  variants: [400],
  category: 'display'
}, {
  family: 'Bayon',
  variants: [400],
  category: 'display'
}, {
  family: 'Be Vietnam',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Bebas Neue',
  variants: [400],
  category: 'display'
}, {
  family: 'Belgrano',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bellefair',
  variants: [400],
  category: 'serif'
}, {
  family: 'Belleza',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Bellota',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Bellota Text',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'BenchNine',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Benne',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bentham',
  variants: [400],
  category: 'serif'
}, {
  family: 'Berkshire Swash',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Beth Ellen',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Bevan',
  variants: [400],
  category: 'display'
}, {
  family: 'Big Shoulders Display',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Inline Display',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Inline Text',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Stencil Display',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Stencil Text',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Text',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Bigelow Rules',
  variants: [400],
  category: 'display'
}, {
  family: 'Bigshot One',
  variants: [400],
  category: 'display'
}, {
  family: 'Bilbo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Bilbo Swash Caps',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'BioRhyme',
  variants: [200, 300, 400, 700, 800],
  category: 'serif'
}, {
  family: 'BioRhyme Expanded',
  variants: [200, 300, 400, 700, 800],
  category: 'serif'
}, {
  family: 'Biryani',
  variants: [200, 300, 400, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Bitter',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Black And White Picture',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Black Han Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Black Ops One',
  variants: [400],
  category: 'display'
}, {
  family: 'Blinker',
  variants: [100, 200, 300, 400, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Bodoni Moda',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Bokor',
  variants: [400],
  category: 'display'
}, {
  family: 'Bonbon',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Boogaloo',
  variants: [400],
  category: 'display'
}, {
  family: 'Bowlby One',
  variants: [400],
  category: 'display'
}, {
  family: 'Bowlby One SC',
  variants: [400],
  category: 'display'
}, {
  family: 'Brawler',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bree Serif',
  variants: [400],
  category: 'serif'
}, {
  family: 'Brygada 1918',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Bubblegum Sans',
  variants: [400],
  category: 'display'
}, {
  family: 'Bubbler One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Buda',
  variants: [300, 400],
  category: 'display'
}, {
  family: 'Buenard',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Bungee',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Hairline',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Inline',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Outline',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Shade',
  variants: [400],
  category: 'display'
}, {
  family: 'Butcherman',
  variants: [400],
  category: 'display'
}, {
  family: 'Butterfly Kids',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Cabin',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Cabin Condensed',
  variants: [400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Cabin Sketch',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Caesar Dressing',
  variants: [400],
  category: 'display'
}, {
  family: 'Cagliostro',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cairo',
  variants: [200, 300, 400, 600, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Caladea',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Calistoga',
  variants: [400],
  category: 'display'
}, {
  family: 'Calligraffitti',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Cambay',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Cambo',
  variants: [400],
  category: 'serif'
}, {
  family: 'Candal',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cantarell',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Cantata One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Cantora One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Capriola',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cardo',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Carme',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Carrois Gothic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Carrois Gothic SC',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Carter One',
  variants: [400],
  category: 'display'
}, {
  family: 'Castoro',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Catamaran',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Caudex',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Caveat',
  variants: [400, 500, 600, 700],
  category: 'handwriting'
}, {
  family: 'Caveat Brush',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Cedarville Cursive',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ceviche One',
  variants: [400],
  category: 'display'
}, {
  family: 'Chakra Petch',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Changa',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Changa One',
  variants: [400, '400i'],
  category: 'display'
}, {
  family: 'Chango',
  variants: [400],
  category: 'display'
}, {
  family: 'Charm',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Charmonman',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Chathura',
  variants: [100, 300, 400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Chau Philomene One',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Chela One',
  variants: [400],
  category: 'display'
}, {
  family: 'Chelsea Market',
  variants: [400],
  category: 'display'
}, {
  family: 'Chenla',
  variants: [400],
  category: 'display'
}, {
  family: 'Cherry Cream Soda',
  variants: [400],
  category: 'display'
}, {
  family: 'Cherry Swash',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Chewy',
  variants: [400],
  category: 'display'
}, {
  family: 'Chicle',
  variants: [400],
  category: 'display'
}, {
  family: 'Chilanka',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Chivo',
  variants: [300, '300i', 400, '400i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Chonburi',
  variants: [400],
  category: 'display'
}, {
  family: 'Cinzel',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Cinzel Decorative',
  variants: [400, 700, 900],
  category: 'display'
}, {
  family: 'Clicker Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Coda',
  variants: [400, 800],
  category: 'display'
}, {
  family: 'Coda Caption',
  variants: [400, 800],
  category: 'sans-serif'
}, {
  family: 'Codystar',
  variants: [300, 400],
  category: 'display'
}, {
  family: 'Coiny',
  variants: [400],
  category: 'display'
}, {
  family: 'Combo',
  variants: [400],
  category: 'display'
}, {
  family: 'Comfortaa',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Comic Neue',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'handwriting'
}, {
  family: 'Coming Soon',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Commissioner',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Concert One',
  variants: [400],
  category: 'display'
}, {
  family: 'Condiment',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Content',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Contrail One',
  variants: [400],
  category: 'display'
}, {
  family: 'Convergence',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cookie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Copse',
  variants: [400],
  category: 'serif'
}, {
  family: 'Corben',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Cormorant',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Cormorant Garamond',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Cormorant Infant',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Cormorant SC',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Cormorant Unicase',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Cormorant Upright',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Courgette',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Courier Prime',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Cousine',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Coustard',
  variants: [400, 900],
  category: 'serif'
}, {
  family: 'Covered By Your Grace',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Crafty Girls',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Creepster',
  variants: [400],
  category: 'display'
}, {
  family: 'Crete Round',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Crimson Pro',
  variants: [200, 300, 400, 500, 600, 700, 800, 900, '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Crimson Text',
  variants: [400, '400i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Croissant One',
  variants: [400],
  category: 'display'
}, {
  family: 'Crushed',
  variants: [400],
  category: 'display'
}, {
  family: 'Cuprum',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Cute Font',
  variants: [400],
  category: 'display'
}, {
  family: 'Cutive',
  variants: [400],
  category: 'serif'
}, {
  family: 'Cutive Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'DM Mono',
  variants: [300, '300i', 400, '400i', 500, '500i'],
  category: 'monospace'
}, {
  family: 'DM Sans',
  variants: [400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'DM Serif Display',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'DM Serif Text',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Damion',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Dancing Script',
  variants: [400, 500, 600, 700],
  category: 'handwriting'
}, {
  family: 'Dangrek',
  variants: [400],
  category: 'display'
}, {
  family: 'Darker Grotesque',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'David Libre',
  variants: [400, 500, 700],
  category: 'serif'
}, {
  family: 'Dawning of a New Day',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Days One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dekko',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Dela Gothic One',
  variants: [400],
  category: 'display'
}, {
  family: 'Delius',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Delius Swash Caps',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Delius Unicase',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Della Respira',
  variants: [400],
  category: 'serif'
}, {
  family: 'Denk One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Devonshire',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Dhurjati',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Didact Gothic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Diplomata',
  variants: [400],
  category: 'display'
}, {
  family: 'Diplomata SC',
  variants: [400],
  category: 'display'
}, {
  family: 'Do Hyeon',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dokdo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Domine',
  variants: [400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Donegal One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Doppio One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dorsa',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dosis',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'DotGothic16',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dr Sugiyama',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Duru Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dynalight',
  variants: [400],
  category: 'display'
}, {
  family: 'EB Garamond',
  variants: [400, 500, 600, 700, 800, '400i', '500i', '600i', '700i', '800i'],
  category: 'serif'
}, {
  family: 'Eagle Lake',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'East Sea Dokdo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Eater',
  variants: [400],
  category: 'display'
}, {
  family: 'Economica',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Eczar',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'El Messiri',
  variants: [400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Electrolize',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Elsie',
  variants: [400, 900],
  category: 'display'
}, {
  family: 'Elsie Swash Caps',
  variants: [400, 900],
  category: 'display'
}, {
  family: 'Emblema One',
  variants: [400],
  category: 'display'
}, {
  family: 'Emilys Candy',
  variants: [400],
  category: 'display'
}, {
  family: 'Encode Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Expanded',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Semi Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Semi Expanded',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Engagement',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Englebert',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Enriqueta',
  variants: [400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Epilogue',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Erica One',
  variants: [400],
  category: 'display'
}, {
  family: 'Esteban',
  variants: [400],
  category: 'serif'
}, {
  family: 'Euphoria Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ewert',
  variants: [400],
  category: 'display'
}, {
  family: 'Exo',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Exo 2',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Expletus Sans',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'display'
}, {
  family: 'Fahkwang',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Fanwood Text',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Farro',
  variants: [300, 400, 500, 700],
  category: 'sans-serif'
}, {
  family: 'Farsan',
  variants: [400],
  category: 'display'
}, {
  family: 'Fascinate',
  variants: [400],
  category: 'display'
}, {
  family: 'Fascinate Inline',
  variants: [400],
  category: 'display'
}, {
  family: 'Faster One',
  variants: [400],
  category: 'display'
}, {
  family: 'Fasthand',
  variants: [400],
  category: 'serif'
}, {
  family: 'Fauna One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Faustina',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Federant',
  variants: [400],
  category: 'display'
}, {
  family: 'Federo',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Felipa',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Fenix',
  variants: [400],
  category: 'serif'
}, {
  family: 'Finger Paint',
  variants: [400],
  category: 'display'
}, {
  family: 'Fira Code',
  variants: [300, 400, 500, 600, 700],
  category: 'monospace'
}, {
  family: 'Fira Mono',
  variants: [400, 500, 700],
  category: 'monospace'
}, {
  family: 'Fira Sans',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Fira Sans Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Fira Sans Extra Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Fjalla One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Fjord One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Flamenco',
  variants: [300, 400],
  category: 'display'
}, {
  family: 'Flavors',
  variants: [400],
  category: 'display'
}, {
  family: 'Fondamento',
  variants: [400, '400i'],
  category: 'handwriting'
}, {
  family: 'Fontdiner Swanky',
  variants: [400],
  category: 'display'
}, {
  family: 'Forum',
  variants: [400],
  category: 'display'
}, {
  family: 'Francois One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Frank Ruhl Libre',
  variants: [300, 400, 500, 700, 900],
  category: 'serif'
}, {
  family: 'Fraunces',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Freckle Face',
  variants: [400],
  category: 'display'
}, {
  family: 'Fredericka the Great',
  variants: [400],
  category: 'display'
}, {
  family: 'Fredoka One',
  variants: [400],
  category: 'display'
}, {
  family: 'Freehand',
  variants: [400],
  category: 'display'
}, {
  family: 'Fresca',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Frijole',
  variants: [400],
  category: 'display'
}, {
  family: 'Fruktur',
  variants: [400],
  category: 'display'
}, {
  family: 'Fugaz One',
  variants: [400],
  category: 'display'
}, {
  family: 'GFS Didot',
  variants: [400],
  category: 'serif'
}, {
  family: 'GFS Neohellenic',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Gabriela',
  variants: [400],
  category: 'serif'
}, {
  family: 'Gaegu',
  variants: [300, 400, 700],
  category: 'handwriting'
}, {
  family: 'Gafata',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Galada',
  variants: [400],
  category: 'display'
}, {
  family: 'Galdeano',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Galindo',
  variants: [400],
  category: 'display'
}, {
  family: 'Gamja Flower',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Gayathri',
  variants: [100, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Gelasio',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Gentium Basic',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Gentium Book Basic',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Geo',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Geostar',
  variants: [400],
  category: 'display'
}, {
  family: 'Geostar Fill',
  variants: [400],
  category: 'display'
}, {
  family: 'Germania One',
  variants: [400],
  category: 'display'
}, {
  family: 'Gidugu',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Gilda Display',
  variants: [400],
  category: 'serif'
}, {
  family: 'Girassol',
  variants: [400],
  category: 'display'
}, {
  family: 'Give You Glory',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Glass Antiqua',
  variants: [400],
  category: 'display'
}, {
  family: 'Glegoo',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Gloria Hallelujah',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Goblin One',
  variants: [400],
  category: 'display'
}, {
  family: 'Gochi Hand',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Goldman',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Gorditas',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Gothic A1',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Gotu',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Goudy Bookletter 1911',
  variants: [400],
  category: 'serif'
}, {
  family: 'Graduate',
  variants: [400],
  category: 'display'
}, {
  family: 'Grand Hotel',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Grandstander',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'display'
}, {
  family: 'Gravitas One',
  variants: [400],
  category: 'display'
}, {
  family: 'Great Vibes',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Grenze',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Grenze Gotisch',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Griffy',
  variants: [400],
  category: 'display'
}, {
  family: 'Gruppo',
  variants: [400],
  category: 'display'
}, {
  family: 'Gudea',
  variants: [400, '400i', 700],
  category: 'sans-serif'
}, {
  family: 'Gugi',
  variants: [400],
  category: 'display'
}, {
  family: 'Gupter',
  variants: [400, 500, 700],
  category: 'serif'
}, {
  family: 'Gurajada',
  variants: [400],
  category: 'serif'
}, {
  family: 'Habibi',
  variants: [400],
  category: 'serif'
}, {
  family: 'Hachi Maru Pop',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Halant',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Hammersmith One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Hanalei',
  variants: [400],
  category: 'display'
}, {
  family: 'Hanalei Fill',
  variants: [400],
  category: 'display'
}, {
  family: 'Handlee',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Hanuman',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Happy Monkey',
  variants: [400],
  category: 'display'
}, {
  family: 'Harmattan',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Headland One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Heebo',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Henny Penny',
  variants: [400],
  category: 'display'
}, {
  family: 'Hepta Slab',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Herr Von Muellerhoff',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Hi Melody',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Hind',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Guntur',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Madurai',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Siliguri',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Vadodara',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Holtwood One SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Homemade Apple',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Homenaje',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'IBM Plex Mono',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'IBM Plex Sans',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'IBM Plex Sans Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'IBM Plex Serif',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'IM Fell DW Pica',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell DW Pica SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell Double Pica',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell Double Pica SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell English',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell English SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell French Canon',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell French Canon SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell Great Primer',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell Great Primer SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Ibarra Real Nova',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Iceberg',
  variants: [400],
  category: 'display'
}, {
  family: 'Iceland',
  variants: [400],
  category: 'display'
}, {
  family: 'Imbue',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Imprima',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Inconsolata',
  variants: [200, 300, 400, 500, 600, 700, 800, 900],
  category: 'monospace'
}, {
  family: 'Inder',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Indie Flower',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Inika',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Inknut Antiqua',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Inria Sans',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Inria Serif',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Inter',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Irish Grover',
  variants: [400],
  category: 'display'
}, {
  family: 'Istok Web',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Italiana',
  variants: [400],
  category: 'serif'
}, {
  family: 'Italianno',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Itim',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Jacques Francois',
  variants: [400],
  category: 'serif'
}, {
  family: 'Jacques Francois Shadow',
  variants: [400],
  category: 'display'
}, {
  family: 'Jaldi',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'JetBrains Mono',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'monospace'
}, {
  family: 'Jim Nightshade',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Jockey One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Jolly Lodger',
  variants: [400],
  category: 'display'
}, {
  family: 'Jomhuria',
  variants: [400],
  category: 'display'
}, {
  family: 'Jomolhari',
  variants: [400],
  category: 'serif'
}, {
  family: 'Josefin Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, '100i', '200i', '300i', '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Josefin Slab',
  variants: [100, 200, 300, 400, 500, 600, 700, '100i', '200i', '300i', '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Jost',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Joti One',
  variants: [400],
  category: 'display'
}, {
  family: 'Jua',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Judson',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Julee',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Julius Sans One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Junge',
  variants: [400],
  category: 'serif'
}, {
  family: 'Jura',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Just Another Hand',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Just Me Again Down Here',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'K2D',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Kadwa',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Kalam',
  variants: [300, 400, 700],
  category: 'handwriting'
}, {
  family: 'Kameron',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Kanit',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Kantumruy',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Karantina',
  variants: [300, 400, 700],
  category: 'display'
}, {
  family: 'Karla',
  variants: [200, 300, 400, 500, 600, 700, 800, '200i', '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'sans-serif'
}, {
  family: 'Karma',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Katibeh',
  variants: [400],
  category: 'display'
}, {
  family: 'Kaushan Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Kavivanar',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Kavoon',
  variants: [400],
  category: 'display'
}, {
  family: 'Kdam Thmor',
  variants: [400],
  category: 'display'
}, {
  family: 'Keania One',
  variants: [400],
  category: 'display'
}, {
  family: 'Kelly Slab',
  variants: [400],
  category: 'display'
}, {
  family: 'Kenia',
  variants: [400],
  category: 'display'
}, {
  family: 'Khand',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Khmer',
  variants: [400],
  category: 'display'
}, {
  family: 'Khula',
  variants: [300, 400, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Kirang Haerang',
  variants: [400],
  category: 'display'
}, {
  family: 'Kite One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Kiwi Maru',
  variants: [300, 400, 500],
  category: 'serif'
}, {
  family: 'Knewave',
  variants: [400],
  category: 'display'
}, {
  family: 'KoHo',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kodchasan',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kosugi',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Kosugi Maru',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Kotta One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Koulen',
  variants: [400],
  category: 'display'
}, {
  family: 'Kranky',
  variants: [400],
  category: 'display'
}, {
  family: 'Kreon',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Kristi',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Krona One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Krub',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kufam',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'display'
}, {
  family: 'Kulim Park',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kumar One',
  variants: [400],
  category: 'display'
}, {
  family: 'Kumar One Outline',
  variants: [400],
  category: 'display'
}, {
  family: 'Kumbh Sans',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Kurale',
  variants: [400],
  category: 'serif'
}, {
  family: 'La Belle Aurore',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lacquer',
  variants: [400],
  category: 'display'
}, {
  family: 'Laila',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Lakki Reddy',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lalezar',
  variants: [400],
  category: 'display'
}, {
  family: 'Lancelot',
  variants: [400],
  category: 'display'
}, {
  family: 'Langar',
  variants: [400],
  category: 'display'
}, {
  family: 'Lateef',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lato',
  variants: [100, '100i', 300, '300i', 400, '400i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'League Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Leckerli One',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ledger',
  variants: [400],
  category: 'serif'
}, {
  family: 'Lekton',
  variants: [400, '400i', 700],
  category: 'sans-serif'
}, {
  family: 'Lemon',
  variants: [400],
  category: 'display'
}, {
  family: 'Lemonada',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Lexend',
  variants: [100, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Lexend Deca',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Exa',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Giga',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Mega',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Peta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Tera',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Zetta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Libre Barcode 128',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 128 Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39 Extended',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39 Extended Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39 Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode EAN13 Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Baskerville',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Libre Caslon Display',
  variants: [400],
  category: 'serif'
}, {
  family: 'Libre Caslon Text',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Libre Franklin',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Life Savers',
  variants: [400, 700, 800],
  category: 'display'
}, {
  family: 'Lilita One',
  variants: [400],
  category: 'display'
}, {
  family: 'Lily Script One',
  variants: [400],
  category: 'display'
}, {
  family: 'Limelight',
  variants: [400],
  category: 'display'
}, {
  family: 'Linden Hill',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Literata',
  variants: [200, 300, 400, 500, 600, 700, 800, 900, '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Liu Jian Mao Cao',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Livvic',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Lobster',
  variants: [400],
  category: 'display'
}, {
  family: 'Lobster Two',
  variants: [400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Londrina Outline',
  variants: [400],
  category: 'display'
}, {
  family: 'Londrina Shadow',
  variants: [400],
  category: 'display'
}, {
  family: 'Londrina Sketch',
  variants: [400],
  category: 'display'
}, {
  family: 'Londrina Solid',
  variants: [100, 300, 400, 900],
  category: 'display'
}, {
  family: 'Long Cang',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lora',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Love Ya Like A Sister',
  variants: [400],
  category: 'display'
}, {
  family: 'Loved by the King',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lovers Quarrel',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Luckiest Guy',
  variants: [400],
  category: 'display'
}, {
  family: 'Lusitana',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Lustria',
  variants: [400],
  category: 'serif'
}, {
  family: 'M PLUS 1p',
  variants: [100, 300, 400, 500, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'M PLUS Rounded 1c',
  variants: [100, 300, 400, 500, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Ma Shan Zheng',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Macondo',
  variants: [400],
  category: 'display'
}, {
  family: 'Macondo Swash Caps',
  variants: [400],
  category: 'display'
}, {
  family: 'Mada',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Magra',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Maiden Orange',
  variants: [400],
  category: 'display'
}, {
  family: 'Maitree',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Major Mono Display',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Mako',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Mali',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'handwriting'
}, {
  family: 'Mallanna',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Mandali',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Manjari',
  variants: [100, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Manrope',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mansalva',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Manuale',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Marcellus',
  variants: [400],
  category: 'serif'
}, {
  family: 'Marcellus SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Marck Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Margarine',
  variants: [400],
  category: 'display'
}, {
  family: 'Markazi Text',
  variants: [400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Marko One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Marmelad',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Martel',
  variants: [200, 300, 400, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Martel Sans',
  variants: [200, 300, 400, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Marvel',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Mate',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Mate SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Maven Pro',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'McLaren',
  variants: [400],
  category: 'display'
}, {
  family: 'Meddon',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'MedievalSharp',
  variants: [400],
  category: 'display'
}, {
  family: 'Medula One',
  variants: [400],
  category: 'display'
}, {
  family: 'Meera Inimai',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Megrim',
  variants: [400],
  category: 'display'
}, {
  family: 'Meie Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Merienda',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Merienda One',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Merriweather',
  variants: [300, '300i', 400, '400i', 700, '700i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Merriweather Sans',
  variants: [300, 400, 500, 600, 700, 800, '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'sans-serif'
}, {
  family: 'Metal',
  variants: [400],
  category: 'display'
}, {
  family: 'Metal Mania',
  variants: [400],
  category: 'display'
}, {
  family: 'Metamorphous',
  variants: [400],
  category: 'display'
}, {
  family: 'Metrophobic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Michroma',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Milonga',
  variants: [400],
  category: 'display'
}, {
  family: 'Miltonian',
  variants: [400],
  category: 'display'
}, {
  family: 'Miltonian Tattoo',
  variants: [400],
  category: 'display'
}, {
  family: 'Mina',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Miniver',
  variants: [400],
  category: 'display'
}, {
  family: 'Miriam Libre',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Mirza',
  variants: [400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Miss Fajardose',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mitr',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Modak',
  variants: [400],
  category: 'display'
}, {
  family: 'Modern Antiqua',
  variants: [400],
  category: 'display'
}, {
  family: 'Mogra',
  variants: [400],
  category: 'display'
}, {
  family: 'Molengo',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Molle',
  variants: [400, '400i'],
  category: 'handwriting'
}, {
  family: 'Monda',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Monofett',
  variants: [400],
  category: 'display'
}, {
  family: 'Monoton',
  variants: [400],
  category: 'display'
}, {
  family: 'Monsieur La Doulaise',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Montaga',
  variants: [400],
  category: 'serif'
}, {
  family: 'Montez',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Montserrat',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Montserrat Alternates',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Montserrat Subrayada',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Moul',
  variants: [400],
  category: 'display'
}, {
  family: 'Moulpali',
  variants: [400],
  category: 'display'
}, {
  family: 'Mountains of Christmas',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Mouse Memoirs',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Mr Bedfort',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mr Dafoe',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mr De Haviland',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mrs Saint Delafield',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mrs Sheppards',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mukta',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mukta Mahee',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mukta Malar',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mukta Vaani',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mulish',
  variants: [200, 300, 400, 500, 600, 700, 800, 900, '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'MuseoModerno',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Mystery Quest',
  variants: [400],
  category: 'display'
}, {
  family: 'NTR',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Nanum Brush Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Nanum Gothic',
  variants: [400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Nanum Gothic Coding',
  variants: [400, 700],
  category: 'monospace'
}, {
  family: 'Nanum Myeongjo',
  variants: [400, 700, 800],
  category: 'serif'
}, {
  family: 'Nanum Pen Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Nerko One',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Neucha',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Neuton',
  variants: [200, 300, 400, '400i', 700, 800],
  category: 'serif'
}, {
  family: 'New Rocker',
  variants: [400],
  category: 'display'
}, {
  family: 'New Tegomin',
  variants: [400],
  category: 'serif'
}, {
  family: 'News Cycle',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Newsreader',
  variants: [200, 300, 400, 500, 600, 700, 800, '200i', '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'serif'
}, {
  family: 'Niconne',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Niramit',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Nixie One',
  variants: [400],
  category: 'display'
}, {
  family: 'Nobile',
  variants: [400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Nokora',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Norican',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Nosifer',
  variants: [400],
  category: 'display'
}, {
  family: 'Notable',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Nothing You Could Do',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Noticia Text',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Noto Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Noto Sans HK',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans JP',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans KR',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans SC',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans TC',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Serif',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Noto Serif JP',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Noto Serif KR',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Noto Serif SC',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Noto Serif TC',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Nova Cut',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Flat',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Nova Oval',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Round',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Script',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Slim',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Square',
  variants: [400],
  category: 'display'
}, {
  family: 'Numans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Nunito',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Nunito Sans',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Odibee Sans',
  variants: [400],
  category: 'display'
}, {
  family: 'Odor Mean Chey',
  variants: [400],
  category: 'display'
}, {
  family: 'Offside',
  variants: [400],
  category: 'display'
}, {
  family: 'Oi',
  variants: [400],
  category: 'display'
}, {
  family: 'Old Standard TT',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Oldenburg',
  variants: [400],
  category: 'display'
}, {
  family: 'Oleo Script',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Oleo Script Swash Caps',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Open Sans',
  variants: [300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Open Sans Condensed',
  variants: [300, '300i', 400, 700],
  category: 'sans-serif'
}, {
  family: 'Oranienbaum',
  variants: [400],
  category: 'serif'
}, {
  family: 'Orbitron',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Oregano',
  variants: [400, '400i'],
  category: 'display'
}, {
  family: 'Orelega One',
  variants: [400],
  category: 'display'
}, {
  family: 'Orienta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Original Surfer',
  variants: [400],
  category: 'display'
}, {
  family: 'Oswald',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Over the Rainbow',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Overlock',
  variants: [400, '400i', 700, '700i', 900, '900i'],
  category: 'display'
}, {
  family: 'Overlock SC',
  variants: [400],
  category: 'display'
}, {
  family: 'Overpass',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Overpass Mono',
  variants: [300, 400, 600, 700],
  category: 'monospace'
}, {
  family: 'Ovo',
  variants: [400],
  category: 'serif'
}, {
  family: 'Oxanium',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Oxygen',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Oxygen Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'PT Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'PT Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'PT Sans Caption',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'PT Sans Narrow',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'PT Serif',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'PT Serif Caption',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Pacifico',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Padauk',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Palanquin',
  variants: [100, 200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Palanquin Dark',
  variants: [400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Pangolin',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Paprika',
  variants: [400],
  category: 'display'
}, {
  family: 'Parisienne',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Passero One',
  variants: [400],
  category: 'display'
}, {
  family: 'Passion One',
  variants: [400, 700, 900],
  category: 'display'
}, {
  family: 'Pathway Gothic One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Patrick Hand',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Patrick Hand SC',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Pattaya',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Patua One',
  variants: [400],
  category: 'display'
}, {
  family: 'Pavanam',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Paytone One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Peddana',
  variants: [400],
  category: 'serif'
}, {
  family: 'Peralta',
  variants: [400],
  category: 'display'
}, {
  family: 'Permanent Marker',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Petit Formal Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Petrona',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Philosopher',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Piazzolla',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Piedra',
  variants: [400],
  category: 'display'
}, {
  family: 'Pinyon Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Pirata One',
  variants: [400],
  category: 'display'
}, {
  family: 'Plaster',
  variants: [400],
  category: 'display'
}, {
  family: 'Play',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Playball',
  variants: [400],
  category: 'display'
}, {
  family: 'Playfair Display',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Playfair Display SC',
  variants: [400, '400i', 700, '700i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Podkova',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Poiret One',
  variants: [400],
  category: 'display'
}, {
  family: 'Poller One',
  variants: [400],
  category: 'display'
}, {
  family: 'Poly',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Pompiere',
  variants: [400],
  category: 'display'
}, {
  family: 'Pontano Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Poor Story',
  variants: [400],
  category: 'display'
}, {
  family: 'Poppins',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Port Lligat Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Port Lligat Slab',
  variants: [400],
  category: 'serif'
}, {
  family: 'Potta One',
  variants: [400],
  category: 'display'
}, {
  family: 'Pragati Narrow',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Prata',
  variants: [400],
  category: 'serif'
}, {
  family: 'Preahvihear',
  variants: [400],
  category: 'display'
}, {
  family: 'Press Start 2P',
  variants: [400],
  category: 'display'
}, {
  family: 'Pridi',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Princess Sofia',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Prociono',
  variants: [400],
  category: 'serif'
}, {
  family: 'Prompt',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Prosto One',
  variants: [400],
  category: 'display'
}, {
  family: 'Proza Libre',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Public Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Puritan',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Purple Purse',
  variants: [400],
  category: 'display'
}, {
  family: 'Quando',
  variants: [400],
  category: 'serif'
}, {
  family: 'Quantico',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Quattrocento',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Quattrocento Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Questrial',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Quicksand',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Quintessential',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Qwigley',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Racing Sans One',
  variants: [400],
  category: 'display'
}, {
  family: 'Radley',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Rajdhani',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Rakkas',
  variants: [400],
  category: 'display'
}, {
  family: 'Raleway',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Raleway Dots',
  variants: [400],
  category: 'display'
}, {
  family: 'Ramabhadra',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ramaraja',
  variants: [400],
  category: 'serif'
}, {
  family: 'Rambla',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Rammetto One',
  variants: [400],
  category: 'display'
}, {
  family: 'Ranchers',
  variants: [400],
  category: 'display'
}, {
  family: 'Rancho',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ranga',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Rasa',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Rationale',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ravi Prakash',
  variants: [400],
  category: 'display'
}, {
  family: 'Recursive',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Red Hat Display',
  variants: [400, '400i', 500, '500i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Red Hat Text',
  variants: [400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Red Rose',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Redressed',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Reem Kufi',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Reenie Beanie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Reggae One',
  variants: [400],
  category: 'display'
}, {
  family: 'Revalia',
  variants: [400],
  category: 'display'
}, {
  family: 'Rhodium Libre',
  variants: [400],
  category: 'serif'
}, {
  family: 'Ribeye',
  variants: [400],
  category: 'display'
}, {
  family: 'Ribeye Marrow',
  variants: [400],
  category: 'display'
}, {
  family: 'Righteous',
  variants: [400],
  category: 'display'
}, {
  family: 'Risque',
  variants: [400],
  category: 'display'
}, {
  family: 'Roboto',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Roboto Condensed',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Roboto Mono',
  variants: [100, 200, 300, 400, 500, 600, 700, '100i', '200i', '300i', '400i', '500i', '600i', '700i'],
  category: 'monospace'
}, {
  family: 'Roboto Slab',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Rochester',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Rock Salt',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'RocknRoll One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Rokkitt',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Romanesco',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ropa Sans',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Rosario',
  variants: [300, 400, 500, 600, 700, '300i', '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Rosarivo',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Rouge Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Rowdies',
  variants: [300, 400, 700],
  category: 'display'
}, {
  family: 'Rozha One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Rubik',
  variants: [300, 400, 500, 600, 700, 800, 900, '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Rubik Mono One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ruda',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Rufina',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Ruge Boogie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ruluko',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Rum Raisin',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ruslan Display',
  variants: [400],
  category: 'display'
}, {
  family: 'Russo One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ruthie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Rye',
  variants: [400],
  category: 'display'
}, {
  family: 'Sacramento',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sahitya',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Sail',
  variants: [400],
  category: 'display'
}, {
  family: 'Saira',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Saira Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Saira Extra Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Saira Semi Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Saira Stencil One',
  variants: [400],
  category: 'display'
}, {
  family: 'Salsa',
  variants: [400],
  category: 'display'
}, {
  family: 'Sanchez',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Sancreek',
  variants: [400],
  category: 'display'
}, {
  family: 'Sansita',
  variants: [400, '400i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Sansita Swashed',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Sarabun',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Sarala',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Sarina',
  variants: [400],
  category: 'display'
}, {
  family: 'Sarpanch',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Satisfy',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sawarabi Gothic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Sawarabi Mincho',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Scada',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Scheherazade',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Schoolbell',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Scope One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Seaweed Script',
  variants: [400],
  category: 'display'
}, {
  family: 'Secular One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Sedgwick Ave',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sedgwick Ave Display',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sen',
  variants: [400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Sevillana',
  variants: [400],
  category: 'display'
}, {
  family: 'Seymour One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Shadows Into Light',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Shadows Into Light Two',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Shanti',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Share',
  variants: [400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Share Tech',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Share Tech Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Shippori Mincho',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Shippori Mincho B1',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Shojumaru',
  variants: [400],
  category: 'display'
}, {
  family: 'Short Stack',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Shrikhand',
  variants: [400],
  category: 'display'
}, {
  family: 'Siemreap',
  variants: [400],
  category: 'display'
}, {
  family: 'Sigmar One',
  variants: [400],
  category: 'display'
}, {
  family: 'Signika',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Signika Negative',
  variants: [300, 400, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Simonetta',
  variants: [400, '400i', 900, '900i'],
  category: 'display'
}, {
  family: 'Single Day',
  variants: [400],
  category: 'display'
}, {
  family: 'Sintony',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Sirin Stencil',
  variants: [400],
  category: 'display'
}, {
  family: 'Six Caps',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Skranji',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Slabo 13px',
  variants: [400],
  category: 'serif'
}, {
  family: 'Slabo 27px',
  variants: [400],
  category: 'serif'
}, {
  family: 'Slackey',
  variants: [400],
  category: 'display'
}, {
  family: 'Smokum',
  variants: [400],
  category: 'display'
}, {
  family: 'Smythe',
  variants: [400],
  category: 'display'
}, {
  family: 'Sniglet',
  variants: [400, 800],
  category: 'display'
}, {
  family: 'Snippet',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Snowburst One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sofadi One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sofia',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Solway',
  variants: [300, 400, 500, 700, 800],
  category: 'serif'
}, {
  family: 'Song Myung',
  variants: [400],
  category: 'serif'
}, {
  family: 'Sonsie One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sora',
  variants: [100, 200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Sorts Mill Goudy',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Source Code Pro',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'monospace'
}, {
  family: 'Source Sans Pro',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Source Serif Pro',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Space Grotesk',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Space Mono',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Spartan',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Special Elite',
  variants: [400],
  category: 'display'
}, {
  family: 'Spectral',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'serif'
}, {
  family: 'Spectral SC',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'serif'
}, {
  family: 'Spicy Rice',
  variants: [400],
  category: 'display'
}, {
  family: 'Spinnaker',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Spirax',
  variants: [400],
  category: 'display'
}, {
  family: 'Squada One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sree Krushnadevaraya',
  variants: [400],
  category: 'serif'
}, {
  family: 'Sriracha',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Srisakdi',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Staatliches',
  variants: [400],
  category: 'display'
}, {
  family: 'Stalemate',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Stalinist One',
  variants: [400],
  category: 'display'
}, {
  family: 'Stardos Stencil',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Stick',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Stint Ultra Condensed',
  variants: [400],
  category: 'display'
}, {
  family: 'Stint Ultra Expanded',
  variants: [400],
  category: 'display'
}, {
  family: 'Stoke',
  variants: [300, 400],
  category: 'serif'
}, {
  family: 'Strait',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Stylish',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Sue Ellen Francisco',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Suez One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Sulphur Point',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Sumana',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Sunflower',
  variants: [300, 400, 500, 700],
  category: 'sans-serif'
}, {
  family: 'Sunshiney',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Supermercado One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sura',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Suranna',
  variants: [400],
  category: 'serif'
}, {
  family: 'Suravaram',
  variants: [400],
  category: 'serif'
}, {
  family: 'Suwannaphum',
  variants: [400],
  category: 'display'
}, {
  family: 'Swanky and Moo Moo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Syncopate',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Syne',
  variants: [400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Syne Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Syne Tactile',
  variants: [400],
  category: 'display'
}, {
  family: 'Tajawal',
  variants: [200, 300, 400, 500, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Tangerine',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Taprom',
  variants: [400],
  category: 'display'
}, {
  family: 'Tauri',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Taviraj',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Teko',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Telex',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Tenali Ramakrishna',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Tenor Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Text Me One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Texturina',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Thasadith',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'The Girl Next Door',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Tienne',
  variants: [400, 700, 900],
  category: 'serif'
}, {
  family: 'Tillana',
  variants: [400, 500, 600, 700, 800],
  category: 'handwriting'
}, {
  family: 'Timmana',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Tinos',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Titan One',
  variants: [400],
  category: 'display'
}, {
  family: 'Titillium Web',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 900],
  category: 'sans-serif'
}, {
  family: 'Tomorrow',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Trade Winds',
  variants: [400],
  category: 'display'
}, {
  family: 'Train One',
  variants: [400],
  category: 'display'
}, {
  family: 'Trirong',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Trispace',
  variants: [100, 200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Trocchi',
  variants: [400],
  category: 'serif'
}, {
  family: 'Trochut',
  variants: [400, '400i', 700],
  category: 'display'
}, {
  family: 'Truculenta',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Trykker',
  variants: [400],
  category: 'serif'
}, {
  family: 'Tulpen One',
  variants: [400],
  category: 'display'
}, {
  family: 'Turret Road',
  variants: [200, 300, 400, 500, 700, 800],
  category: 'display'
}, {
  family: 'Ubuntu',
  variants: [300, '300i', 400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Ubuntu Condensed',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ubuntu Mono',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Ultra',
  variants: [400],
  category: 'serif'
}, {
  family: 'Uncial Antiqua',
  variants: [400],
  category: 'display'
}, {
  family: 'Underdog',
  variants: [400],
  category: 'display'
}, {
  family: 'Unica One',
  variants: [400],
  category: 'display'
}, {
  family: 'UnifrakturCook',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'UnifrakturMaguntia',
  variants: [400],
  category: 'display'
}, {
  family: 'Unkempt',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Unlock',
  variants: [400],
  category: 'display'
}, {
  family: 'Unna',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'VT323',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Vampiro One',
  variants: [400],
  category: 'display'
}, {
  family: 'Varela',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Varela Round',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Varta',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Vast Shadow',
  variants: [400],
  category: 'display'
}, {
  family: 'Vesper Libre',
  variants: [400, 500, 700, 900],
  category: 'serif'
}, {
  family: 'Viaoda Libre',
  variants: [400],
  category: 'display'
}, {
  family: 'Vibes',
  variants: [400],
  category: 'display'
}, {
  family: 'Vibur',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Vidaloka',
  variants: [400],
  category: 'serif'
}, {
  family: 'Viga',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Voces',
  variants: [400],
  category: 'display'
}, {
  family: 'Volkhov',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Vollkorn',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Vollkorn SC',
  variants: [400, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Voltaire',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Waiting for the Sunrise',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Wallpoet',
  variants: [400],
  category: 'display'
}, {
  family: 'Walter Turncoat',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Warnes',
  variants: [400],
  category: 'display'
}, {
  family: 'Wellfleet',
  variants: [400],
  category: 'display'
}, {
  family: 'Wendy One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Wire One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Work Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Xanh Mono',
  variants: [400, '400i'],
  category: 'monospace'
}, {
  family: 'Yanone Kaffeesatz',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Yantramanav',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Yatra One',
  variants: [400],
  category: 'display'
}, {
  family: 'Yellowtail',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Yeon Sung',
  variants: [400],
  category: 'display'
}, {
  family: 'Yeseva One',
  variants: [400],
  category: 'display'
}, {
  family: 'Yesteryear',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Yrsa',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Yusei Magic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'ZCOOL KuaiLe',
  variants: [400],
  category: 'display'
}, {
  family: 'ZCOOL QingKe HuangYou',
  variants: [400],
  category: 'display'
}, {
  family: 'ZCOOL XiaoWei',
  variants: [400],
  category: 'serif'
}, {
  family: 'Zen Dots',
  variants: [400],
  category: 'display'
}, {
  family: 'Zeyada',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Zhi Mang Xing',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Zilla Slab',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Zilla Slab Highlight',
  variants: [400, 700],
  category: 'display'
}]);

/***/ }),

/***/ "../Components/Typography/options.js":
/*!*******************************************!*\
  !*** ../Components/Typography/options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontStyles: () => (/* binding */ fontStyles),
/* harmony export */   textDecorations: () => (/* binding */ textDecorations),
/* harmony export */   textTransforms: () => (/* binding */ textTransforms)
/* harmony export */ });
const fontStyles = [{
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Italic',
  value: 'italic'
}, {
  label: 'Oblique',
  value: 'oblique'
}];
const textTransforms = [{
  label: 'None',
  value: 'none',
  icon: 'NO'
}, {
  label: 'Capitalize',
  value: 'capitalize',
  icon: 'Aa'
}, {
  label: 'Uppercase',
  value: 'uppercase',
  icon: 'AA'
}, {
  label: 'Lowercase',
  value: 'lowercase',
  icon: 'aa'
}];
const textDecorations = [{
  label: 'Default',
  value: 'auto'
}, {
  label: 'Underline',
  value: 'underline'
}, {
  label: 'Overline',
  value: 'overline'
}, {
  label: 'Line Through',
  value: 'line-through'
}, {
  label: 'None',
  value: 'none'
}];

/***/ }),

/***/ "../Components/index.js":
/*!******************************!*\
  !*** ../Components/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BColor: () => (/* reexport safe */ _BColor_BColor__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   BDevice: () => (/* reexport safe */ _BDevice_BDevice__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Background: () => (/* reexport safe */ _Background_Background__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   BorderControl: () => (/* reexport safe */ _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   BplMediaPlaceholder: () => (/* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.BplMediaPlaceholder),
/* harmony export */   BtnGroup: () => (/* reexport safe */ _BtnGroup_BtnGroup__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ChangeImageData: () => (/* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ChangeImageData),
/* harmony export */   ColorControl: () => (/* reexport safe */ _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   ColorsControl: () => (/* reexport safe */ _ColorsControl_ColorsControl__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   IconControl: () => (/* reexport safe */ _IconControl_IconControl__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   ImageEditControl: () => (/* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ImageEditControl),
/* harmony export */   ImageHolderControl: () => (/* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ImageHolderControl),
/* harmony export */   ImagePlaceholder: () => (/* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ImagePlaceholder),
/* harmony export */   InlineDetailMediaUpload: () => (/* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.InlineDetailMediaUpload),
/* harmony export */   InlineMediaUpload: () => (/* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.InlineMediaUpload),
/* harmony export */   Label: () => (/* reexport safe */ _Label_Label__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   MediaEditControl: () => (/* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.MediaEditControl),
/* harmony export */   MultiShadowControl: () => (/* reexport safe */ _MultiShadowControl_MultiShadowControl__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   SelectPureControl: () => (/* reexport safe */ _SelectPureControl_SelectPureControl__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   SeparatorControl: () => (/* reexport safe */ _SeparatorControl_SeparatorControl__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   ShadowControl: () => (/* reexport safe */ _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   SpaceControl: () => (/* reexport safe */ _SpaceControl_SpaceControl__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Typography: () => (/* reexport safe */ _Typography_Typography__WEBPACK_IMPORTED_MODULE_17__["default"])
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../Components/style.scss");
/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label/Label */ "../Components/Label/Label.js");
/* harmony import */ var _Background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Background/Background */ "../Components/Background/Background.js");
/* harmony import */ var _BColor_BColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BColor/BColor */ "../Components/BColor/BColor.js");
/* harmony import */ var _BDevice_BDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BDevice/BDevice */ "../Components/BDevice/BDevice.js");
/* harmony import */ var _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BorderControl/BorderControl */ "../Components/BorderControl/BorderControl.js");
/* harmony import */ var _BtnGroup_BtnGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BtnGroup/BtnGroup */ "../Components/BtnGroup/BtnGroup.js");
/* harmony import */ var _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColorControl/ColorControl */ "../Components/ColorControl/ColorControl.js");
/* harmony import */ var _ColorsControl_ColorsControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ColorsControl/ColorsControl */ "../Components/ColorsControl/ColorsControl.js");
/* harmony import */ var _IconControl_IconControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconControl/IconControl */ "../Components/IconControl/IconControl.js");
/* harmony import */ var _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageControl/ImageControl */ "../Components/ImageControl/ImageControl.js");
/* harmony import */ var _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MediaControl/MediaControl */ "../Components/MediaControl/MediaControl.js");
/* harmony import */ var _MultiShadowControl_MultiShadowControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MultiShadowControl/MultiShadowControl */ "../Components/MultiShadowControl/MultiShadowControl.js");
/* harmony import */ var _SelectPureControl_SelectPureControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SelectPureControl/SelectPureControl */ "../Components/SelectPureControl/SelectPureControl.js");
/* harmony import */ var _SeparatorControl_SeparatorControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SeparatorControl/SeparatorControl */ "../Components/SeparatorControl/SeparatorControl.js");
/* harmony import */ var _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadowControl/ShadowControl */ "../Components/ShadowControl/ShadowControl.js");
/* harmony import */ var _SpaceControl_SpaceControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SpaceControl/SpaceControl */ "../Components/SpaceControl/SpaceControl.js");
/* harmony import */ var _Typography_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Typography/Typography */ "../Components/Typography/Typography.js");




















/***/ }),

/***/ "../Components/utils/functions.js":
/*!****************************************!*\
  !*** ../Components/utils/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBoxValue: () => (/* binding */ getBoxValue),
/* harmony export */   getImageSizes: () => (/* binding */ getImageSizes),
/* harmony export */   tabController: () => (/* binding */ tabController)
/* harmony export */ });
const getBoxValue = object => Object.values(object).join(' ');
const getImageSizes = (image, imageSizes) => {
  if (!image) return [];
  let options = [];
  const sizes = image.media_details.sizes;
  for (const key in sizes) {
    const imageSize = imageSizes.find(s => s.slug === key);
    if (imageSize) {
      options.push({
        label: imageSize.name,
        value: sizes[key].source_url
      });
    }
  }
  return options;
};
const tabController = () => {
  setTimeout(() => {
    const panelBodies = document.querySelectorAll('.components-panel__body-title button');
    panelBodies.forEach(item => {
      item.addEventListener('click', clickEveryItem);
    });
    function clickEveryItem() {
      this.removeEventListener('click', clickEveryItem);
      panelBodies.forEach(item => {
        if (item.getAttribute('aria-expanded') === 'true' && !item.isEqualNode(this)) {
          item.click();
        }
      });
      setTimeout(() => {
        this.addEventListener('click', clickEveryItem);
      }, 500);
    }
  }, 500);
};

/***/ }),

/***/ "../Components/utils/getCSS.js":
/*!*************************************!*\
  !*** ../Components/utils/getCSS.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS)
/* harmony export */ });
const getBackgroundCSS = function (bg) {
  let isSolid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let isGradient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let isImage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '#0000',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '#0000',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = function (icon) {
  let isSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let isColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = function (value) {
  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'box';
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = shadow => {
  const {
    type = 'box',
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = function (selector, typo) {
  let isFamily = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${`font-size: ${desktopFontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		@media (max-width: 768px) {
			${selector}{
				${`font-size: ${tabletFontSize}px;`}
			}
		}
		@media (max-width: 576px) {
			${selector}{
				${`font-size: ${mobileFontSize}px;`}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = function () {
  let val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.values(val).join(' ');
};

/***/ }),

/***/ "../Components/utils/icons.js":
/*!************************************!*\
  !*** ../Components/utils/icons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desktopIcon: () => (/* binding */ desktopIcon),
/* harmony export */   gearIcon: () => (/* binding */ gearIcon),
/* harmony export */   mobileIcon: () => (/* binding */ mobileIcon),
/* harmony export */   scrollIcon: () => (/* binding */ scrollIcon),
/* harmony export */   tabletIcon: () => (/* binding */ tabletIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const color = '#4527a4';
const desktopIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 548.172 548.172"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: color,
  d: "M534.75 49.965c-8.945-8.945-19.694-13.422-32.261-13.422H45.681c-12.562 0-23.313 4.477-32.264 13.422C4.471 58.913 0 69.663 0 82.226v310.633c0 12.566 4.471 23.315 13.417 32.265 8.951 8.945 19.702 13.414 32.264 13.414h155.318c0 7.231-1.524 14.661-4.57 22.269-3.044 7.614-6.09 14.273-9.136 19.981-3.042 5.715-4.565 9.897-4.565 12.56 0 4.948 1.807 9.24 5.424 12.847 3.615 3.621 7.898 5.435 12.847 5.435h146.179c4.949 0 9.233-1.813 12.848-5.435 3.62-3.606 5.427-7.898 5.427-12.847 0-2.468-1.526-6.611-4.571-12.415-3.046-5.801-6.092-12.566-9.134-20.267-3.046-7.71-4.569-15.085-4.569-22.128h155.318c12.56 0 23.309-4.469 32.254-13.414 8.949-8.949 13.422-19.698 13.422-32.265V82.226c.003-12.563-4.474-23.313-13.423-32.261zm-23.123 269.803c0 2.475-.903 4.613-2.711 6.424-1.81 1.804-3.952 2.707-6.427 2.707H45.681c-2.473 0-4.615-.903-6.423-2.707-1.807-1.817-2.712-3.949-2.712-6.424V82.226c0-2.475.902-4.615 2.712-6.423 1.809-1.805 3.951-2.712 6.423-2.712h456.815c2.471 0 4.617.904 6.42 2.712 1.808 1.809 2.711 3.949 2.711 6.423v237.542z"
}));
const tabletIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: color,
  d: "M394.667 0H117.333C87.936 0 64 23.936 64 53.333v405.333C64 488.064 87.936 512 117.333 512h277.333C424.064 512 448 488.064 448 458.667V53.333C448 23.936 424.064 0 394.667 0zM256 480c-11.755 0-21.333-9.579-21.333-21.333s9.579-21.333 21.333-21.333 21.333 9.579 21.333 21.333S267.755 480 256 480zm149.333-64c0 5.888-4.779 10.667-10.667 10.667H117.333c-5.888 0-10.667-4.779-10.667-10.667V53.333c0-5.888 4.779-10.667 10.667-10.667h277.333c5.888 0 10.667 4.779 10.667 10.667V416z"
}));
const mobileIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 503.604 503.604"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: color,
  d: "M337.324 0H167.192c-28.924 0-53.5 23.584-53.5 52.5v398.664c0 28.916 24.056 52.44 52.98 52.44l170.412-.184c28.92 0 52.58-23.528 52.58-52.448l.248-398.5C389.908 23.452 366.364 0 337.324 0zM227.68 31.476h49.36c4.336 0 7.868 3.52 7.868 7.868 0 4.348-3.532 7.868-7.868 7.868h-49.36a7.865 7.865 0 01-7.868-7.868 7.865 7.865 0 017.868-7.868zm-29.66 2.504c2.916-2.912 8.224-2.952 11.136 0a7.973 7.973 0 012.324 5.588c0 2.048-.864 4.088-2.324 5.548-1.452 1.46-3.504 2.32-5.548 2.32-2.084 0-4.088-.86-5.588-2.32-1.452-1.456-2.28-3.5-2.28-5.548-.004-2.088.828-4.132 2.28-5.588zm52.752 454.028c-12.984 0-23.544-10.568-23.544-23.548 0-12.984 10.56-23.548 23.544-23.548s23.544 10.564 23.544 23.548c0 12.98-10.564 23.548-23.544 23.548zm114.716-63.1H141.232V74.756h224.256v350.152z"
}));
const scrollIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 14,
  height: 14,
  viewBox: "0 0 330 330"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M100.606 229.393c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l75 75A14.954 14.954 0 00165 330a14.95 14.95 0 0010.606-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0L180 278.787V51.212l49.394 49.394A14.95 14.95 0 00240 105a14.95 14.95 0 0010.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-75-75c-5.857-5.858-15.355-5.858-21.213 0l-75 75c-5.858 5.857-5.858 15.355 0 21.213 5.857 5.857 15.355 5.857 21.213 0L150 51.212v227.574l-49.394-49.393z"
}));
const gearIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  viewBox: "0 0 430.848 430.848"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M286.244,249.537l10.992-45.639c0.035-0.143,0.071-0.285,0.109-0.428c2.909-10.867,11.469-19.426,22.339-22.338 l33.347-8.936c-5.472-6.525-13.678-10.682-22.839-10.682h-9.837c-2.511-7.895-5.7-15.59-9.515-22.957l6.96-6.959 c11.622-11.623,11.622-30.535,0-42.156L296.76,68.4c-5.631-5.629-13.117-8.73-21.079-8.73c-7.961,0-15.447,3.102-21.078,8.732 l-6.96,6.959c-7.369-3.814-15.064-7.004-22.956-9.516V56.01c0-16.436-13.372-29.807-29.808-29.807h-29.758 c-16.436,0-29.808,13.371-29.808,29.807v9.836c-7.893,2.512-15.588,5.701-22.957,9.516l-6.96-6.961 c-5.631-5.629-13.117-8.73-21.078-8.73c-7.961,0-15.447,3.102-21.079,8.732L42.2,89.443c-11.622,11.621-11.622,30.533,0,42.156 l6.959,6.959c-3.815,7.367-7.004,15.063-9.515,22.957h-9.837C13.372,161.516,0,174.887,0,191.324v29.758 c0,16.436,13.372,29.807,29.808,29.807h9.837c2.511,7.895,5.7,15.588,9.515,22.957l-6.96,6.959 c-11.623,11.623-11.623,30.533,0,42.158l21.041,21.039c5.632,5.631,13.118,8.732,21.079,8.732s15.447-3.102,21.077-8.732 l6.96-6.959c7.366,3.815,15.061,7.002,22.957,9.514v9.838c0,16.436,13.372,29.809,29.808,29.809h25.809 c-2.388-5.691-3.644-11.852-3.645-18.209c-0.002-12.572,4.892-24.391,13.781-33.279L286.244,249.537z M180,286.201 c-44.112,0-80-35.887-80-79.998c0-44.113,35.888-80.002,80-80.002s80,35.889,80,80.002C260,250.314,224.112,286.201,180,286.201z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M425.267,218.734l-0.319-0.32c-0.939-0.941-2.189-1.428-3.541-1.469c-1.326,0-2.598,0.525-3.536,1.465l-21.596,21.596 c-3.304,3.305-7.699,5.125-12.375,5.125c-4.676,0-9.072-1.82-12.379-5.129c-3.307-3.305-5.128-7.701-5.128-12.377 c0.001-4.676,1.821-9.072,5.126-12.377l21.596-21.596c0.939-0.939,1.465-2.213,1.464-3.539c-0.001-1.328-0.53-2.6-1.47-3.537 l-0.314-0.313c-3.605-3.605-8.399-5.592-13.499-5.592c-1.665,0-3.325,0.219-4.936,0.65l-44.348,11.885 c-6.568,1.76-11.741,6.932-13.498,13.496c-0.011,0.041-0.021,0.08-0.031,0.121l-11.817,49.063l-87.667,87.666 c-6.528,6.527-10.122,15.207-10.121,24.44c0.002,9.232,3.598,17.91,10.126,24.439l2.088,2.088 c6.528,6.529,15.209,10.125,24.443,10.125h0c9.231,0,17.909-3.594,24.437-10.121l87.667-87.666l49.061-11.816 c0.041-0.01,0.082-0.022,0.122-0.031c6.563-1.758,11.735-6.928,13.497-13.496l11.883-44.352 C431.959,230.598,430.066,223.535,425.267,218.734z M257.26,368.406c-1.888,1.889-4.399,2.93-7.071,2.93 c-2.671,0-5.183-1.041-7.072-2.932c-1.887-1.885-2.928-4.397-2.928-7.068c-0.001-2.672,1.041-5.185,2.931-7.072 c1.886-1.887,4.398-2.928,7.069-2.928c2.672,0,5.184,1.041,7.072,2.93c1.887,1.885,2.928,4.396,2.928,7.068 C260.189,364.006,259.148,366.518,257.26,368.406z M316.194,305.935L274.82,347.31c-1.416,1.416-3.3,2.197-5.303,2.197 c-2.003,0-3.887-0.781-5.303-2.197c-1.417-1.416-2.197-3.299-2.197-5.303s0.78-3.887,2.197-5.303l41.374-41.375 c1.417-1.418,3.3-2.197,5.303-2.197s3.887,0.779,5.303,2.197c1.417,1.416,2.197,3.299,2.197,5.303S317.611,304.519,316.194,305.935 z"
}));

/***/ }),

/***/ "../Components/utils/options.js":
/*!**************************************!*\
  !*** ../Components/utils/options.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bgTypes: () => (/* binding */ bgTypes),
/* harmony export */   borderStyles: () => (/* binding */ borderStyles),
/* harmony export */   emUnit: () => (/* binding */ emUnit),
/* harmony export */   gradients: () => (/* binding */ gradients),
/* harmony export */   perUnit: () => (/* binding */ perUnit),
/* harmony export */   pxUnit: () => (/* binding */ pxUnit),
/* harmony export */   remUnit: () => (/* binding */ remUnit),
/* harmony export */   sides: () => (/* binding */ sides),
/* harmony export */   vhUnit: () => (/* binding */ vhUnit),
/* harmony export */   vwUnit: () => (/* binding */ vwUnit)
/* harmony export */ });
const borderStyles = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Dashed',
  value: 'dashed'
}, {
  label: 'Dotted',
  value: 'dotted'
}, {
  label: 'Double',
  value: 'double'
}, {
  label: 'Groove',
  value: 'groove'
}, {
  label: 'Inset',
  value: 'inset'
}, {
  label: 'Outset',
  value: 'outset'
}, {
  label: 'Ridge',
  value: 'ridge'
}];
const pxUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'px',
    label: 'px',
    default: def
  };
};
const perUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: '%',
    label: '%',
    default: def
  };
};
const emUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'em',
    label: 'em',
    default: def
  };
};
const remUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'rem',
    label: 'rem',
    default: def
  };
};
const vwUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'vw',
    label: 'vw',
    default: def
  };
};
const vhUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'vh',
    label: 'vh',
    default: def
  };
};
const sides = [{
  value: 'all',
  label: 'All Sides'
}, {
  value: 'top',
  label: 'Top'
}, {
  value: 'right',
  label: 'Right'
}, {
  value: 'bottom',
  label: 'Bottom'
}, {
  value: 'left',
  label: 'Left'
}, {
  value: 'topRight',
  label: 'Top Right'
}, {
  value: 'topBottom',
  label: 'Top Bottom'
}, {
  value: 'topLeft',
  label: 'Top Left'
}, {
  value: 'topRightBottom',
  label: 'Top Right Bottom'
}, {
  value: 'topRightLeft',
  label: 'Top Right Left'
}, {
  value: 'topBottomLeft',
  label: 'Top Bottom Left'
}, {
  value: 'rightBottom',
  label: 'Right Bottom'
}, {
  value: 'rightLeft',
  label: 'Right Left'
}, {
  value: 'rightBottomLeft',
  label: 'Right Bottom Left'
}, {
  value: 'bottomLeft',
  label: 'Bottom Left'
}];
const gradients = [{
  name: 'Daisy Bush to Fuchsia Blue',
  gradient: 'linear-gradient(135deg, #4527a4, #8344c5)',
  slug: 'daisy-bush-to-fuchsia-blue'
}, {
  name: 'Reddish Orange to Yellowish Orange',
  gradient: 'linear-gradient(135deg, #fe6601, #fbb040)',
  slug: 'reddish-orange-to-yellowish-orange'
}, {
  name: 'Tuft Bush to Carnation Pink',
  gradient: 'linear-gradient(135deg, #fed1c7, #fe8dc6)',
  slug: 'tuft-bush-to-carnation-pink'
}, {
  name: 'Golden Fizz to Yellow Orange',
  gradient: 'linear-gradient(135deg, #f9ed32, #fbb040)',
  slug: 'golden-fizz-to-yellow-orange'
}, {
  name: 'Light Electric Violet to Electric Violet',
  gradient: 'linear-gradient(135deg, #e100ff, #7f00ff)',
  slug: 'light-electric-violet-to-electric-violet'
}, {
  name: 'Hot Pink to Violet Red',
  gradient: 'linear-gradient(135deg, #ff7db8, #ee2a7b)',
  slug: 'hot-pink-to-violet-red'
}, {
  name: 'Spring Green to Azure Radiance',
  gradient: 'linear-gradient(135deg, #00ff8f, #00a1ff)',
  slug: 'spring-green-to-azure-radiance'
}];
const bgTypes = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Gradient',
  value: 'gradient'
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components */ "../Components/index.js");
/* harmony import */ var _Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/utils/getCSS */ "../Components/utils/getCSS.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");








function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    content,
    description,
    align,
    textColor,
    backgroundColor,
    padding,
    margin,
    border
  } = attributes;
  const onChangeContent = newContent => {
    setAttributes({
      content: newContent
    });
  };
  const onChangeDescription = newDescription => {
    setAttributes({
      description: newDescription
    });
  };
  const onChangeAlign = newAlign => {
    setAttributes({
      align: newAlign
    });
  };
  const onChangeTextColor = newColor => {
    setAttributes({
      textColor: newColor
    });
  };
  const onChangeBackgroundColor = newColor => {
    setAttributes({
      backgroundColor: newColor
    });
  };
  const onChangePadding = newPadding => {
    setAttributes({
      padding: newPadding
    });
  };
  const onChangeMargin = newMargin => {
    setAttributes({
      margin: newMargin
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const mailSl = `.wp-block-bbc-info#block-${clientId}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: align,
    onChange: onChangeAlign
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info Box Settings', 'b-blocks-clone')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'b-blocks-clone'),
    values: margin,
    onChange: onChangeMargin,
    unites: [],
    allowReset: true,
    sides: ['top', 'bottom']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'b-blocks-clone'),
    values: padding,
    onChange: onChangePadding,
    unites: ['px', 'em', 'rem'],
    allowReset: false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_5__.BorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border:', 'text-domain'),
    value: border,
    onChange: val => setAttributes({
      border: val
    }),
    defaults: {
      radius: '5px'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'b-blocks-clone'),
    initialOpen: true,
    colorSettings: [{
      value: textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'b-blocks-clone')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'b-blocks-clone'),
    initialOpen: true,
    colorSettings: [{
      value: backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'b-blocks-clone')
    }]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    style: {
      backgroundColor: backgroundColor,
      padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
      margin: `${margin.top} ${margin.bottom}`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
					${mailSl}{
						${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_6__.getBorderCSS)(border)}
					}
				`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h3",
    value: content,
    allowedFormats: ['core/bold', 'core/italic', 'core/link'],
    onChange: onChangeContent,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info Box Title', 'b-blocks-clone'),
    style: {
      textAlign: align,
      color: textColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: description,
    allowedFormats: ['core/italic', 'core/link', 'core/bold'],
    onChange: onChangeDescription,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info Box Description', 'b-blocks-clone'),
    style: {
      textAlign: align
    }
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  return null;
  // const blockProps = useBlockProps.save();
  // return (
  // 	<div { ...blockProps }>
  // 		<RichText.Content />
  // 	</div>
  // );
}

/***/ }),

/***/ "../Components/BColor/BColor.scss":
/*!****************************************!*\
  !*** ../Components/BColor/BColor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/BDevice/BDevice.scss":
/*!******************************************!*\
  !*** ../Components/BDevice/BDevice.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/ColorControl/ColorControl.scss":
/*!****************************************************!*\
  !*** ../Components/ColorControl/ColorControl.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/IconControl/IconControl.scss":
/*!**************************************************!*\
  !*** ../Components/IconControl/IconControl.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/ImageControl/ImageControl.scss":
/*!****************************************************!*\
  !*** ../Components/ImageControl/ImageControl.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/MediaControl/MediaControl.scss":
/*!****************************************************!*\
  !*** ../Components/MediaControl/MediaControl.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/SelectPureControl/SelectPureControl.scss":
/*!**************************************************************!*\
  !*** ../Components/SelectPureControl/SelectPureControl.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/SpaceControl/SpaceControl.scss":
/*!****************************************************!*\
  !*** ../Components/SpaceControl/SpaceControl.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/Typography/Typography.scss":
/*!************************************************!*\
  !*** ../Components/Typography/Typography.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/style.scss":
/*!********************************!*\
  !*** ../Components/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bbc/info","title":"Info","description":"Display information in box style.","category":"bBlocksClone","icon":"lightbulb","supports":{"html":false},"attributes":{"content":{"type":"string","default":"Info Box Title"},"description":{"type":"string","default":"This content area describes info box descriptions or details."},"align":{"type":"string","default":"center"},"textColor":{"type":"string"},"backgroundColor":{"type":"string"},"padding":{"type":"object","default":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}},"margin":{"type":"object","default":{"top":"10px","bottom":"10px"}},"border":{"type":"object","default":{"radius":"5px"}}},"textdomain":"b-blocks-clone","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkb_blocks_clone"] = globalThis["webpackChunkb_blocks_clone"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map