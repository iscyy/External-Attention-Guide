(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{397:function(t,s,a){t.exports=a.p+"assets/img/repvgg.81a02a39.png"},418:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("h3",{attrs:{id:"_1-repvgg-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-repvgg-usage"}},[t._v("#")]),t._v(" 1. RepVGG Usage")]),t._v(" "),s("h4",{attrs:{id:"_1-1-paper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-paper"}},[t._v("#")]),t._v(" 1.1. Paper")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://arxiv.org/abs/2101.03697",target:"_blank",rel:"noopener noreferrer"}},[t._v('"RepVGG: Making VGG-style ConvNets Great Again"'),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_1-2-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-overview"}},[t._v("#")]),t._v(" 1.2. Overview")]),t._v(" "),s("p",[s("img",{attrs:{src:a(397),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"_1-3-usage-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-usage-code"}},[t._v("#")]),t._v(" 1.3. Usage Code")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repvgg "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" RepBlock\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrepblock"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RepBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrepblock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("repblock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrepblock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_switch_to_deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nout2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("repblock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'difference between vgg and repvgg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);