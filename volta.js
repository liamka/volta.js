window.Conf = {
    options: {
        render: {
            sub_strings: /^(color-(.*)+|float-(.*)+|font-\d+|margin-\d+|marginleft-\d+|marginbottom-\d+|margin-top-(.*)+|padding-\d+|padding-top-\d+|td-(.*)+|transform-(.*)+|display-(.*)+|border-radius-(.*)+|width-\d+)$/,
            selectors: "div, ul, li, span, p, section, aside, header, footer",
            size: "px",
            replace:{
                font:"fontSize",
                float:"cssFloat",
                marginleft:"marginLeft",
                marginbottom:"marginBottom",
                "margin-top":"marginTop",
                "padding-top":"paddingTop",
                "text-decoration":"textDecoration",
                "border-radius":"borderRadius"
            }
        },
        resize: {
            elements: "",
            size: "px",
            compressor: 1
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
            this.options = copyObj(options,'render');
            function handler(options) {
                var ds = document.querySelectorAll(options.selectors);
                for (var i = 0; i < ds.length; i++) {
                    var p = ds[i].className.split(' ');
                    for (var id in p) {
                        if (p[id].toLowerCase().match(options.sub_strings)) {
                            var m = p[id].toLowerCase().split('-');
                            for (var i_ = 0; i_ < m.length; i_++) {
                                if((m.length - 1) == i_) {
                                    m[1] = m[i_];
                                }
                            }
                            ds[i].style[(m[0] in options.replace) ? m[0] = options.replace[m[0]]:m[0]] = m[1] + (m[1] % 1 === 0 ? options.size :'');
                        }
                    }
                }
            }
            handler(this.options);
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
         * Custom functions
         */
        function copyObj(obj,name) {
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