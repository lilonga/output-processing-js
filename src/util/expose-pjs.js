function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}

const funcs = [
	
//Structure',
'exit',
'loop',
'noLoop',
'popStyle',
'redraw',
'size',
//Environment',
'cursor',
'frameRate',
'noCursor',

//Shape',
'arc',
'ellipse',
'line',
'point',
'quad',
'rect',
'triangle',
//Curves',
'bezier',
'bezierDetail',
'bezierPoint',
'bezierTangent',
'curve',
'curveDetail',
'curvePoint',
'curveTangent',
'curveTightness',

'box',
'sphere',
'sphereDetail',

'ellipseMode',
'noSmooth',
'rectMode',
'smooth',
'strokeCap',
'strokeJoin',
'strokeWeight',
//Vertex',
'beginShape',
'bezierVertex',
'curveVertex',
'endShape',
'texture',
'textureMode',
'vertex',

'loadShape',
'shape',
'shapeMode',

//Transform',
'applyMatrix',
'popMatrix',
'printMatrix',
'pushMatrix',
'resetMatrix',
'rotate',
'rotateX',
'rotateY',
'rotateZ',
'scale',
'translate',

//Color',
//Setting',
'background',
'colorMode',
'fill',
'noFill',
'noStroke',
'stroke',
//Creating & Reading',
'alpha',
'blendColor',
'blue',
'brightness',
'color',
'green',
'hue',
'lerpColor',
'red',
'saturation',

//Typography',
//PFont',
//Loading & Displaying',
'createFont',
'loadFont',
'text',
'textFont',
//Attributes',
'textAlign',
'textLeading',
'textMode',
'textSize',
'textWidth',
//Metrics',
'textAscent',
'textDescent',

//Calculation',
'abs',
'ceil',
'constrain',
'dist',
'exp',
'floor',
'lerp',
'log',
'mag',
'map',
'max',
'min',
'norm',
'pow',
'round',
'sq',
'sqrt',
//Trigonometry',
'acos',
'asin',
'atan',
'atan2',
'cos',
'degrees',
'radians',
'sin',
'tan',
//Random',
'noise',
'noiseDetail',
'noiseSeed',
'random',
'randomSeed',


]
const vars = [
'frameRate',
'focused',
'online',
'screen',
'width',
'frameCount',
'height',
]

const defs = funcs
	.map(func => `var ${func} = p.${func}.bind(p) \n`)
	// .push("\n")
	.join("\n")

export default defs