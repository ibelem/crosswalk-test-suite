define(function(requre, exports, module){return function toolAnnotation_tpl(it) {
var out='<div class="tools"> <input class="pen cur" type="button"/> <input class="text"  type="button"/> <input class="line"  type="button"/> <input class="rectangle" type="button"/> <input class="ellipse" type="button"/>     <input class="eraser" type="button"/> <input class="exit" type="button"/>  <label class="color">颜色：</label> <input class="red" type="button"/> <input class="green" type="button"/> <input class="blue" type="button"/> <label class="width">粗细：</label> <input class="lineWidth" type="text" value="2"/> <label class="range">[1,50]</label></div><canvas class="canvas" id="canvas" width="944" height="668"></canvas><input class="input-text" type="text"/><script src="app/plugins/toolAnnotation/lib/easel.js"></script><script src="app/plugins/toolAnnotation/lib/ShapeExtend.js"></script><script src="app/plugins/toolAnnotation/lib/TextExtend.js"></script>';return out;
};});