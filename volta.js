window.Conf = {
    options: {
        run: false,
        render: {
            attr: ["volta", "vt"],
            sub_strings: /^(align-content-(.*)|align-items-(.*)|align-self-(.*)|animation-(.*)|animation-delay-(.*)|animation-direction-(.*)|animation-duration-(.*)|animation-fill-mode-(.*)|animation-iteration-count-(.*)|animation-name-(.*)|animation-timing-function-(.*)|animation-play-state-(.*)|background-(.*)|background-attachment-(.*)|background-color-(.*)|background-image-(.*)|background-position-(.*)|background-repeat-(.*)|background-clip-(.*)|background-origin-(.*)|background-size-(.*)|backface-visibility-(.*)|border-(.*)|border-bottom-(.*)|border-bottom-color-(.*)|border-bottom-left-radius-(.*)|border-bottom-right-radius-(.*)|border-bottom-style-(.*)|border-bottom-width-(.*)|border-collapse-(.*)|border-color-(.*)|border-image-(.*)|border-image-outset-(.*)|border-image-repeat-(.*)|border-image-slice-(.*)|border-image-source-(.*)|border-image-width-(.*)|border-left-(.*)|border-left-color-(.*)|border-left-style-(.*)|border-left-width-(.*)|border-radius-(.*)|border-right-(.*)|border-right-color-(.*)|border-right-style-(.*)|border-right-width-(.*)|border-spacing-(.*)|border-style-(.*)|border-top-(.*)|border-top-color-(.*)|border-top-left-radius-(.*)|border-top-right-radius-(.*)|border-top-style-(.*)|border-top-width-(.*)|border-width-(.*)|bottom-(.*)|box-decoration-break-(.*)|box-shadow-(.*)|box-sizing-(.*)|caption-side-(.*)|clear-(.*)|clip-(.*)|color-(.*)|column-count-(.*)|column-fill-(.*)|column-gap-(.*)|column-rule-(.*)|column-rule-color-(.*)|column-rule-style-(.*)|column-rule-width-(.*)|columns-(.*)|column-span-(.*)|column-width-(.*)|content-(.*)|counter-increment-(.*)|counter-reset-(.*)|cursor-(.*)|direction-(.*)|display-(.*)|empty-cells-(.*)|filter-(.*)|flex-(.*)|flex-basis-(.*)|flex-direction-(.*)|flex-flow-(.*)|flex-grow-(.*)|flex-shrink-(.*)|flex-wrap-(.*)|float-(.*)+|css-float-(.*)|font-(.*)|font-family-(.*)|font-size-(.*)|font-style-(.*)|font-variant-(.*)|font-weight-(.*)|font-size-adjust-(.*)|font-stretch-(.*)|hanging-punctuation-(.*)|height-(.*)|hyphens-(.*)|icon-(.*)|image-orientation-(.*)|justify-content-(.*)|left-(.*)|letter-spacing-(.*)|line-height-(.*)|list-style-(.*)|list-style-image-(.*)|list-style-position-(.*)|list-style-type-(.*)|margin-(.*)|margin-bottom-(.*)|margin-left-(.*)|margin-right-(.*)|margin-top-(.*)|max-height-(.*)|max-width-(.*)|min-height-(.*)|min-width-(.*)|nav-down-(.*)|nav-index-(.*)|nav-left-(.*)|nav-right-(.*)|nav-up-(.*)|opacity-(.*)|order-(.*)|orphans-(.*)|outline-(.*)|outline-color-(.*)|outline-offset-(.*)|outline-style-(.*)|outline-width-(.*)|overflow-(.*)|overflow-x-(.*)|overflow-y-(.*)|padding-(.*)|padding-bottom-(.*)|padding-left-(.*)|padding-right-(.*)|padding-top-(.*)|page-break-after-(.*)|page-break-before-(.*)|page-break-inside-(.*)|perspective-(.*)|perspective-origin-(.*)|position-(.*)|quotes-(.*)|resize-(.*)|right-(.*)|table-layout-(.*)|tab-size-(.*)|text-align-(.*)|text-align-last-(.*)|text-decoration-(.*)|text-decoration-color-(.*)|text-decoration-line-(.*)|text-decoration-style-(.*)|text-indent-(.*)|text-justify-(.*)|text-overflow-(.*)|text-shadow-(.*)|text-transform-(.*)|top-(.*)|transform-(.*)|transform-origin-(.*)|transform-style-(.*)|transition-(.*)|transition-property-(.*)|transition-duration-(.*)|transition-timing-function-(.*)|transition-delay-(.*)|unicode-bidi-(.*)|vertical-align-(.*)|visibility-(.*)|white-space-(.*)|width-(.*)|word-break-(.*)|word-spacing-(.*)|word-wrap-(.*)|widows-(.*)|z-index-(.*)|(.*))$/,
            sizes: /^(px|pt|em|rem|vw|vh|vmin|vmax)$/,
            prefix: /^(-moz-(.*)|-webkit-(.*)|-o-(.*)|-ms-(.*))$/,
            calculate: /^(-surround-(.*)|-mnemonic-(.*))$/,
            selectors: "*",
            size: "px",
            return: false,
            replace:{
                "align-content":"alignContent",
                "align-items":"alignItems",
                "align-self":"alignSelf",
                "animation":"animation",
                "animation-delay":"animationDelay",
                "animation-direction":"animationDirection",
                "animation-duration":"animationDuration",
                "animation-fill-mode":"animationFillMode",
                "animation-iteration-count":"animationIterationCount",
                "animation-name":"animationName",
                "animation-timing-function":"animationTimingFunction",
                "animation-play-state":"animationPlayState",
                "background":"background",
                "background-attachment":"backgroundAttachment",
                "background-color":"backgroundColor",
                "background-image":"backgroundImage",
                "background-position":"backgroundPosition",
                "background-repeat":"backgroundRepeat",
                "background-clip":"backgroundClip",
                "background-origin":"backgroundOrigin",
                "background-size":"backgroundSize",
                "backface-visibility":"backfaceVisibility",
                "border":"border",
                "border-bottom":"borderBottom",
                "border-bottom-color":"borderBottomColor",
                "border-bottom-left-radius":"borderBottomLeftRadius",
                "border-bottom-right-radius":"borderBottomRightRadius",
                "border-bottom-style":"borderBottomStyle",
                "border-bottom-width":"borderBottomWidth",
                "border-collapse":"borderCollapse",
                "border-color":"borderColor",
                "border-image":"borderImage",
                "border-image-outset":"borderImageOutset",
                "border-image-repeat":"borderImageRepeat",
                "border-image-slice":"borderImageSlice",
                "border-image-source":"borderImageSource",
                "border-image-width":"borderImageWidth",
                "border-left":"borderLeft",
                "border-left-color":"borderLeftColor",
                "border-left-style":"borderLeftStyle",
                "border-left-width":"borderLeftWidth",
                "border-radius":"borderRadius",
                "border-right":"borderRight",
                "border-right-color":"borderRightColor",
                "border-right-style":"borderRightStyle",
                "border-right-width":"borderRightWidth",
                "border-spacing":"borderSpacing",
                "border-style":"borderStyle",
                "border-top":"borderTop",
                "border-top-color":"borderTopColor",
                "border-top-left-radius":"borderTopLeftRadius",
                "border-top-right-radius":"borderTopRightRadius",
                "border-top-style":"borderTopStyle",
                "border-top-width":"borderTopWidth",
                "border-width":"borderWidth",
                "bottom":"bottom",
                "box-decoration-break":"boxDecorationBreak",
                "box-shadow":"boxShadow",
                "box-sizing":"boxSizing",
                "caption-side":"captionSide",
                "clear":"clear",
                "clip":"clip",
                "color":"color",
                "column-count":"columnCount",
                "column-fill":"columnFill",
                "column-gap":"columnGap",
                "column-rule":"columnRule",
                "column-rule-color":"columnRuleColor",
                "column-rule-style":"columnRuleStyle",
                "column-rule-width":"columnRuleWidth",
                "columns":"columns",
                "column-span":"columnSpan",
                "column-width":"columnWidth",
                "content":"content",
                "counter-increment":"counterIncrement",
                "counter-reset":"counterReset",
                "float":"cssFloat",
                "cursor":"cursor",
                "direction":"direction",
                "display":"display",
                "empty-cells":"emptyCells",
                "filter":"filter",
                "flex":"flex",
                "flex-basis":"flexBasis",
                "flex-direction":"flexDirection",
                "flex-flow":"flexFlow",
                "flex-grow":"flexGrow",
                "flex-shrink":"flexShrink",
                "flex-wrap":"flexWrap",
                "css-float":"cssFloat",
                "font":"font",
                "font-family":"fontFamily",
                "font-size":"fontSize",
                "font-style":"fontStyle",
                "font-variant":"fontVariant",
                "font-weight":"fontWeight",
                "font-size-adjust":"fontSizeAdjust",
                "font-stretch":"fontStretch",
                "hanging-punctuation":"hangingPunctuation",
                "height":"height",
                "hyphens":"hyphens",
                "icon":"icon",
                "image-orientation":"imageOrientation",
                "justify-content":"justifyContent",
                "left":"left",
                "letter-spacing":"letterSpacing",
                "line-height":"lineHeight",
                "list-style":"listStyle",
                "list-style-image":"listStyleImage",
                "list-style-position":"listStylePosition",
                "list-style-type":"listStyleType",
                "margin":"margin",
                "margin-bottom":"marginBottom",
                "margin-left":"marginLeft",
                "margin-right":"marginRight",
                "margin-top":"marginTop",
                "max-height":"maxHeight",
                "max-width":"maxWidth",
                "min-height":"minHeight",
                "min-width":"minWidth",
                "nav-down":"navDown",
                "nav-index":"navIndex",
                "nav-left":"navLeft",
                "nav-right":"navRight",
                "nav-up":"navUp",
                "opacity":"opacity",
                "order":"order",
                "orphans":"orphans",
                "outline":"outline",
                "outline-color":"outlineColor",
                "outline-offset":"outlineOffset",
                "outline-style":"outlineStyle",
                "outline-width":"outlineWidth",
                "overflow":"overflow",
                "overflow-x":"overflowX",
                "overflow-y":"overflowY",
                "padding":"padding",
                "padding-bottom":"paddingBottom",
                "padding-left":"paddingLeft",
                "padding-right":"paddingRight",
                "padding-top":"paddingTop",
                "page-break-after":"pageBreakAfter",
                "page-break-before":"pageBreakBefore",
                "page-break-inside":"pageBreakInside",
                "perspective":"perspective",
                "perspective-origin":"perspectiveOrigin",
                "position":"position",
                "quotes":"quotes",
                "resize":"resize",
                "right":"right",
                "table-layout":"tableLayout",
                "tab-size":"tabSize",
                "text-align":"textAlign",
                "text-align-last":"textAlignLast",
                "text-decoration":"textDecoration",
                "text-decoration-color":"textDecorationColor",
                "text-decoration-line":"textDecorationLine",
                "text-decoration-style":"textDecorationStyle",
                "text-indent":"textIndent",
                "text-justify":"textJustify",
                "text-overflow":"textOverflow",
                "text-shadow":"textShadow",
                "text-transform":"textTransform",
                "top":"top",
                "transform":"transform",
                "transform-origin":"transformOrigin",
                "transform-style":"transformStyle",
                "transition":"transition",
                "transition-property":"transitionProperty",
                "transition-duration":"transitionDuration",
                "transition-timing-function":"transitionTimingFunction",
                "transition-delay":"transitionDelay",
                "unicode-bidi":"unicodeBidi",
                "vertical-align":"verticalAlign",
                "visibility":"visibility",
                "white-space":"whiteSpace",
                "width":"width",
                "word-break":"wordBreak",
                "word-spacing":"wordSpacing",
                "word-wrap":"wordWrap",
                "widows":"widows",
                "z-index":"zIndex"
            }
        },
        resize: {
            elements: "",
            size: "px",
            compressor: 1
        },
        vlog: {
            return: 'background-inherit color-#C12127'
        },
        is_mobile: {
            devices: 'Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini'
        },
        hider: {
            elements: {}
        }
    }
};

(function() {

    this.Volta = (function() {
        function Volta() {
            this.props = {
                sizeDivs: {}
            };
            return this;
        }

        /**
         Render
         */
        Volta.render = function(options) {
            var _returned = [];
            var _options = options;
            this.options = copyObj(options,'render');
            function handler(options) {
                var ds = (_options.return ? [0] : document.querySelectorAll(options.selectors));
                for (var i = 0; i < ds.length; i++) {
                    var p = (!_options.return ? ds[i].className.split(' ') : (_options.return).split(' '));
                    if(!_options.return) {
                        for (var key in ds[i].attributes) {
                            if (typeof ds[i].attributes[key] == "object") {
                                if(options.attr.indexOf(ds[i].attributes[key].name) != -1) {
                                    var va = ds[i].attributes[key].value.replace('{', '').replace('}', '').replace('}', '').replace(/(?:\r\n|\r|\n)/g, ' ').split(' ');
                                    for (var ids in va)
                                        va[ids] != "" ? p.push(va[ids]) : "";
                                }
                            }
                        }
                    }
                    for (var id in p) {
                        var pref = false;
                        var h = p[id].split("-");
                        if(h[1] != null) p[id] = (h[1].match(options.prefix) ? (h.splice(2,h.length)).join('-') : p[id]);
                        if (p[id].toLowerCase().match(options.sub_strings) || pref) {
                            var m = p[id].toLowerCase().split('-');
                            var gk, lk = '';
                            var yu = '';
                            for (var n in m) {
                                lk = (lk == '') ? m[n] : lk+ '-' +m[n];
                                if(lk.toLowerCase().match(options.sub_strings)) {
                                    if(options.replace[lk]) {
                                        gk = lk;
                                        yu = options.replace[lk];
                                    }
                                }
                            }
                            if (m[m.length-1].match(options.sizes)) {
                                options.size = m[m.length-1];
                                m = m.splice(0,m.length-1);
                            }
                            m[0] = (gk != '') ? gk : m[0];
                            var hj = '';
                            for (var i_ = 0; i_ < m.length; i_++) {
                                if(i_ != 0 && gk) {
                                    if(i_ != 0 && gk.indexOf(m[i_]) !== -1) {} else {
                                        hj += '-' + m[i_] + (m[i_] % 1 === 0 ? options.size :'')
                                    }
                                }
                            }
                            if(!_options.return) {
                                ds[i].style[yu] = hj.substr(1);
                            } else {
                                _returned.push(Object.keys(options.replace).filter(function(key) {return options.replace[key] === options.replace[m[0]]})[0] + ': ' + hj.substr(1));
                            }
                        }
                        options = copyObj(_options,'render');
                    }
                }
                return (_options.return ? _returned : '');
            }
            return handler(this.options);
        };

        /**
         Resize
         */
        Volta.resize = function(options) {
            this.options = copyObj(options,'resize');
            function render(obj,options) {
                for(var index in obj.props.sizeDivs) {
                    obj.props.sizeDivs[index].ds.style.fontSize = obj.props.sizeDivs[index].sz * (window.innerWidth/(window.screen.availWidth - (window.outerWidth - window.innerWidth)))*options.compressor+options.size;
                }
            }
            function handler(options) {
                var Obj = new Volta();
                var ds = document.querySelectorAll(options.elements);
                for (var i = 0; i < ds.length; i++)
                    Obj.props.sizeDivs[i] = {ds:ds[i],sz:parseFloat(document.defaultView.getComputedStyle(ds[i],null).getPropertyValue('font-size'))};
                render(Obj,options);
                window.addEventListener('resize', function(){
                    render(Obj,options);
                }, true);
            }
            handler(this.options);
        }

        /**
         Console log
         */
        Volta.vlog = function(mess,options) {
            this.options = copyObj({return: options},'vlog');
            function handler(mess,options) {
                (typeof mess != 'string') ? console.log(mess) : console.log('%c'+mess, Volta.render(options).join(';'));
            }
            handler(mess,this.options);
        }








        /**
         Detect mobile
         */
        Volta.is_mobile = function(options) {
            this.options = copyObj(options,'is_mobile');
            function handler(options) {
                var is_mo = false;
                if(new RegExp("/"+options.devices+"/i").test(navigator.userAgent))
                    is_mo = true;
                return is_mo;
            }
            return handler(this.options);
        }

        /**
         Hide elements
         */
        Volta.hider = function(options) {
            this.options = copyObj(options,'hider');
            function handler(options) {
                var is_mo = Volta.is_mobile();
                //console.log(is_mo)
                for(var option in options.elements) {
                    var el = (document.getElementById(option) === null) ? document.getElementsByClassName(option) : document.getElementById(option);




                    console.log(option)
                    console.log(el)


                    for (it = 0; it < el.length; it++) {

                        console.log(el[it])


                        el[it].style.display = 'none';
                    }





                    /*




                    if(options.elements[option] && is_mo) {
                        console.log(option)
                        console.log(options.elements[option])
                        el.style.display = "none";
                    }

*/






                }

            }
            handler(this.options);
        }







        /**
         * Custom functions
         */
        function copyObj(obj,name) {
            window.Conf.options.run = true; // state
            if (!obj) obj = {};
            var obj2 = {};
            for (var opt in Conf.options[name]) {
                obj2[opt] = obj[opt] ? obj[opt] : Conf.options[name][opt];
            }
            return obj2;
        }

        return Volta;
    })();

}).call();
if(typeof vlog != 'function'){
    window.vlog = function(mess,options){Volta.vlog(mess,options)};
}
document.onreadystatechange = function(){
    if(!window.Conf.options.run) {
        Volta.render({});
    }
}