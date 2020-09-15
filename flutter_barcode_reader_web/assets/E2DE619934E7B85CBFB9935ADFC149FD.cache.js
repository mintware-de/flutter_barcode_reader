var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.jsqrscanner;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'E2DE619934E7B85CBFB9935ADFC149FD';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {33:1, 34:1, 31:1, 30:1, 35:1, 25:1, 20:1}, $intern_2 = {3:1, 5:1}, $intern_3 = {3:1, 8:1}, $intern_4 = {3:1, 10:1, 8:1}, $intern_5 = 65535, $intern_6 = 4194303, $intern_7 = 1048575, $intern_8 = 4194304, $intern_9 = 17592186044416, $intern_10 = -9223372036854775808, $intern_11 = 524288, $intern_12 = 65536, $intern_13 = 1048576, $intern_14 = 8388608, $intern_15 = 16777216, $intern_16 = 33554432, $intern_17 = 67108864, $intern_18 = {3:1}, $intern_19 = {3:1, 22:1, 5:1}, $intern_20 = {7:1, 3:1}, $intern_21 = {14:1, 3:1, 19:1, 13:1}, $intern_22 = 0.20000000298023224, $intern_23 = {40:1}, $intern_24 = {17:1}, $intern_25 = {3:1, 52:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this), 16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 179:1, 19:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_byte(x_0){
  return x_0 << 24 >> 24;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(67, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_13(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 67);
function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setPixelSize(this$static, width_0, height){
  width_0 >= 0 && (($clinit_DOM() , this$static.element).style['width'] = width_0 + 'px' , undefined);
  height >= 0 && (($clinit_DOM() , this$static.element).style['height'] = height + 'px' , undefined);
}

function $setStyleName(this$static){
  ($clinit_DOM() , this$static.element).className = 'qrPreviewVideo';
}

defineClass(25, 1, {30:1, 25:1});
_.toString$ = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 25);
function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_2(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && $onAttach_0(this$static);
  }
}

defineClass(20, 25, $intern_1);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && isOrHasChildImpl(this.element, related)) {
        return;
      }

  }
  fireNativeEvent($clinit_DOM());
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 20);
function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = $getTabIndex(($clinit_DOM() , this$static.element));
  -1 == tabIndex && (this$static.element.tabIndex = 0 , undefined);
}

defineClass(175, 20, $intern_1);
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 175);
function $getCanvasElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $getContext2d(this$static){
  return ($clinit_DOM() , this$static.element).getContext('2d');
}

function $setCoordinateSpaceHeight(this$static, height){
  $setHeight(($clinit_DOM() , this$static.element), height);
}

function $setCoordinateSpaceWidth(this$static, width_0){
  $setWidth(($clinit_DOM() , this$static.element), width_0);
}

function Canvas_0(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  var element;
  !detector && (detector = new Canvas$CanvasElementSupportDetectedMaybe);
  element = $doc.createElement('canvas');
  if (!element.getContext) {
    return null;
  }
  return new Canvas_0(element);
}

defineClass(120, 175, $intern_1, Canvas_0);
var detector;
var Lcom_google_gwt_canvas_client_Canvas_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas', 120);
defineClass(177, 1, {});
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetector_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetector', 177);
function Canvas$CanvasElementSupportDetectedMaybe(){
}

defineClass(121, 177, {}, Canvas$CanvasElementSupportDetectedMaybe);
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetectedMaybe_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetectedMaybe', 121);
function $set(this$static, i, value_0){
  this$static[i] = value_0;
}

function $drawImage(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $getImageData(this$static, sx, sy, sw, sh){
  return this$static.getImageData(sx, sy, sw, sh);
}

function $putImageData(this$static, imagedata, x_0, y_0){
  return this$static.putImageData(imagedata, x_0, y_0);
}

function $getColorAt(this$static, x_0, y_0, offset){
  return this$static.data[4 * (x_0 + y_0 * this$static.width) + offset] || 0;
}

function $setStackTrace(stackTrace){
  var copy, i, length_0;
  length_0 = stackTrace.length;
  copy = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 182, length_0, 0, 1);
  for (i = 0; i < length_0; ++i) {
    copy[i] = throwClassCastExceptionUnlessNull(checkNotNull(stackTrace[i]));
  }
}

function Throwable(message){
  this.detailMessage = message;
  this.fillInStackTrace();
}

defineClass(8, 1, $intern_3);
_.fillInStackTrace = function fillInStackTrace(){
  captureStackTrace(this, this.detailMessage);
  return this;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_2(){
  var className, msg;
  className = $getName(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 8);
function Exception(){
  this.fillInStackTrace();
}

function Exception_0(message){
  this.detailMessage = message;
  this.fillInStackTrace();
}

defineClass(10, 8, $intern_4);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 10);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message){
  Throwable.call(this, message);
}

defineClass(15, 10, $intern_4);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 15);
defineClass(81, 15, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 81);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(37, 81, {37:1, 3:1, 10:1, 8:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 37);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(155, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 155);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 37)?dynamicCast(e, 37).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(101, 155, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 101);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(166, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 166);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(82, 166, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 82);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(167, 166, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 167);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(83, 167, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 83);
function checkArrayType(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException_0('' + errorMessage);
  }
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw new IllegalArgumentException;
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalArgument_1(expression, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format('%s > %s', errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkCriticalPositionIndexes(end, size_0){
  if (end > size_0) {
    throw new IndexOutOfBoundsException_0('toIndex: ' + end + ' > size ' + size_0);
  }
  if (3 > end) {
    throw new IllegalArgumentException_0('fromIndex: 3 > toIndex: ' + end);
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0('' + errorMessage);
  }
}

function checkPositionIndex(size_0){
  if (0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: 0, Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_2(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_1(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_2(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_1(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_1(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getTabIndex(elem){
  return elem.tabIndex < $intern_5?elem.tabIndex:-(elem.tabIndex % $intern_5) - 1;
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function fireNativeEvent(){
}

function makeCause(causes){
  var iterator;
  iterator = $iterator(new AbstractMap$1(causes.map_0));
  if (!$hasNext(iterator.val$outerIter2)) {
    return null;
  }
  return dynamicCast($next_1(iterator), 8);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.map_0.size_0;
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = $iterator(new AbstractMap$1(causes.map_0)); $hasNext(t$iterator.val$outerIter2);) {
    t = dynamicCast($next_1(t$iterator), 8);
    first?(first = false):(b.string += '; ' , b);
    $append_2(b, t.getMessage());
  }
  return b.string;
}

defineClass(109, 15, $intern_4);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 109);
defineClass(110, 109, $intern_4);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 110);
function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initDims(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDim, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDim = index_0 == count - 1;
  elementTypeCategory = isLastDim?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDim) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 37)) {
    jse = dynamicCast(e, 37);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 8)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_6;
  a1 = value_0 >> 22 & $intern_6;
  a2 = value_0 < 0?$intern_7:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function and(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN_0(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_10) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_9) {
    a2 = round_int(value_0 / $intern_9);
    value_0 -= a2 * $intern_9;
  }
  a1 = 0;
  if (value_0 >= $intern_8) {
    a1 = round_int(value_0 / $intern_8);
    value_0 -= a1 * $intern_8;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_6 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_6 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 184, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gte(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function or(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_6, m:res1 & $intern_6, h:res2 & $intern_7};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_11) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_7:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_7:0;
    res1 = negative?$intern_6:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_6, m:res1 & $intern_6, h:res2 & $intern_7};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_6, m:sum1 & $intern_6, h:sum2 & $intern_7};
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_10;
  }
  if (!gte(a, ZERO)) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_6 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_6 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function toInt(a){
  return a.l | a.m << 22;
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_6, $intern_6, 524287);
  MIN_VALUE = create0(0, 0, $intern_11);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $clinit_ExporterUtil();
  new AsyncQRCallback_ExporterImpl;
  new JsQRScanner_ExporterImpl;
  $wnd.JsQRScannerReady && $wnd.JsQRScannerReady();
}

function $getMediaElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $setAutoplay(this$static){
  ($clinit_DOM() , this$static.element).setAttribute('autoplay', '');
}

function $setSrc(this$static){
  ($clinit_DOM() , this$static.element).src = '';
}

defineClass(115, 175, $intern_1);
var Lcom_google_gwt_media_client_MediaBase_2_classLit = createForClass('com.google.gwt.media.client', 'MediaBase', 115);
function $getVideoElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function Video(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported_0(){
  var element;
  !detector_0 && (detector_0 = new Video$VideoElementSupportDetectedMaybe);
  element = $doc.createElement('video');
  if (!element.canPlayType) {
    return null;
  }
  return new Video(element);
}

defineClass(116, 115, $intern_1, Video);
var detector_0;
var Lcom_google_gwt_media_client_Video_2_classLit = createForClass('com.google.gwt.media.client', 'Video', 116);
defineClass(176, 1, {});
var Lcom_google_gwt_media_client_Video$VideoElementSupportDetector_2_classLit = createForClass('com.google.gwt.media.client', 'Video/VideoElementSupportDetector', 176);
function Video$VideoElementSupportDetectedMaybe(){
}

defineClass(117, 176, {}, Video$VideoElementSupportDetectedMaybe);
var Lcom_google_gwt_media_client_Video$VideoElementSupportDetectedMaybe_2_classLit = createForClass('com.google.gwt.media.client', 'Video/VideoElementSupportDetectedMaybe', 117);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(107, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $scan(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 107);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_12;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_11;
    case 'touchstart':
      return $intern_13;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_8;
    case 'touchcancel':
      return $intern_14;
    case 'gesturestart':
      return $intern_15;
    case 'gesturechange':
      return $intern_16;
    case 'gestureend':
      return $intern_17;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 31)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_12 && (elem.onerror = bits & $intern_12?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_11 && (elem.onpaste = bits & $intern_11?dispatchEvent_1:null);
  chMask & $intern_13 && (elem.ontouchstart = bits & $intern_13?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_8 && (elem.ontouchend = bits & $intern_8?dispatchEvent_1:null);
  chMask & $intern_14 && (elem.ontouchcancel = bits & $intern_14?dispatchEvent_1:null);
  chMask & $intern_15 && (elem.ongesturestart = bits & $intern_15?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ongesturechange = bits & $intern_16?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongestureend = bits & $intern_17?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

defineClass(174, 20, $intern_1);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 174);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_1(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_1(this$static.children, w);
  }
  return true;
}

defineClass(103, 174, $intern_1);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 103);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
}

function tryCommand(hasWidgets, c){
  var old;
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 20);
    try {
      c.execute_0(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        !caught && (caught = new HashSet);
        old = $put(caught.map_0, e, caught);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(111, 110, $intern_4, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 111);
function AttachDetachException$1(){
}

defineClass(112, 1, {}, AttachDetachException$1);
_.execute_0 = function execute(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 112);
function AttachDetachException$2(){
}

defineClass(113, 1, {}, AttachDetachException$2);
_.execute_0 = function execute_0(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 113);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

defineClass(75, 103, $intern_1);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 75);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  new HashMap;
  widgetsToDetach = new HashSet;
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_4(widgetsToDetach, widget);
  }
}

var widgetsToDetach;
function $add_1(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 20, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_0(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_1(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_0(this$static, index_0);
}

function WidgetCollection(){
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 20, 4, 0, 1);
}

defineClass(119, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 119);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(76, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 76);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie10', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message){
  Throwable.call(this, message);
}

defineClass(59, 8, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 59);
defineClass(18, 59, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 18);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 8):null);
}

defineClass(80, 18, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 80);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

defineClass(126, 1, {});
var Lcom_google_zxing_Binarizer_2_classLit = createForClass('com.google.zxing', 'Binarizer', 126);
function BinaryBitmap(binarizer){
  this.binarizer = binarizer;
}

defineClass(124, 1, {}, BinaryBitmap);
_.toString$ = function toString_3(){
  try {
    return $toString((!this.matrix && (this.matrix = $getBlackMatrix_0(this.binarizer)) , this.matrix));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 54)) {
      return '';
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_google_zxing_BinaryBitmap_2_classLit = createForClass('com.google.zxing', 'BinaryBitmap', 124);
function $clinit_ReaderException(){
  $clinit_ReaderException = emptyMethod;
  NO_TRACE = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 182, 0, 0, 1);
}

function ReaderException(){
  $clinit_ReaderException();
  Exception.call(this);
}

defineClass(64, 10, $intern_4);
_.fillInStackTrace = function fillInStackTrace_0(){
  return null;
}
;
var NO_TRACE;
var Lcom_google_zxing_ReaderException_2_classLit = createForClass('com.google.zxing', 'ReaderException', 64);
function $clinit_ChecksumException(){
  $clinit_ChecksumException = emptyMethod;
  $clinit_ReaderException();
  INSTANCE_0 = new ChecksumException;
  $setStackTrace(NO_TRACE);
}

function ChecksumException(){
  ReaderException.call(this);
}

defineClass(55, 64, {55:1, 3:1, 10:1, 8:1}, ChecksumException);
var INSTANCE_0;
var Lcom_google_zxing_ChecksumException_2_classLit = createForClass('com.google.zxing', 'ChecksumException', 55);
function $clinit_FormatException(){
  $clinit_FormatException = emptyMethod;
  $clinit_ReaderException();
  INSTANCE_1 = new FormatException;
  $setStackTrace(NO_TRACE);
}

function FormatException(){
  ReaderException.call(this);
}

defineClass(56, 64, {56:1, 3:1, 10:1, 8:1}, FormatException);
var INSTANCE_1;
var Lcom_google_zxing_FormatException_2_classLit = createForClass('com.google.zxing', 'FormatException', 56);
defineClass(125, 1, {});
_.toString$ = function toString_4(){
  var c, luminance, result, row, x_0, y_0;
  row = initDim(B_classLit, $intern_18, 0, this.width_0, 7, 1);
  result = new StringBuilder;
  for (y_0 = 0; y_0 < this.height_0; y_0++) {
    row = $getRow(this, y_0, row);
    for (x_0 = 0; x_0 < this.width_0; x_0++) {
      luminance = row[x_0] & 255;
      luminance < 64?(c = 35):luminance < 128?(c = 43):luminance < 192?(c = 46):(c = 32);
      result.string += charToString(c);
    }
    result.string += '\n';
  }
  return result.string;
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lcom_google_zxing_LuminanceSource_2_classLit = createForClass('com.google.zxing', 'LuminanceSource', 125);
function $clinit_NotFoundException(){
  $clinit_NotFoundException = emptyMethod;
  $clinit_ReaderException();
  INSTANCE_2 = new NotFoundException;
  $setStackTrace(NO_TRACE);
}

function NotFoundException(){
  ReaderException.call(this);
}

defineClass(54, 64, {54:1, 3:1, 10:1, 8:1}, NotFoundException);
var INSTANCE_2;
var Lcom_google_zxing_NotFoundException_2_classLit = createForClass('com.google.zxing', 'NotFoundException', 54);
function $putMetadata(this$static, type_0, value_0){
  !this$static.resultMetadata && (this$static.resultMetadata = new EnumMap(Lcom_google_zxing_ResultMetadataType_2_classLit));
  $put_1(this$static.resultMetadata, type_0, value_0);
}

function Result(text_0){
  Result_0.call(this, text_0, fromDouble(now_1()));
}

function Result_0(text_0){
  this.text_0 = text_0;
  this.resultMetadata = null;
}

defineClass(63, 1, {}, Result);
_.toString$ = function toString_5(){
  return this.text_0;
}
;
var Lcom_google_zxing_Result_2_classLit = createForClass('com.google.zxing', 'Result', 63);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(13, 1, {3:1, 19:1, 13:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, dynamicCast(other, 13));
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_6(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 13);
function $clinit_ResultMetadataType(){
  $clinit_ResultMetadataType = emptyMethod;
  OTHER = new ResultMetadataType('OTHER', 0);
  ORIENTATION = new ResultMetadataType('ORIENTATION', 1);
  BYTE_SEGMENTS = new ResultMetadataType('BYTE_SEGMENTS', 2);
  ERROR_CORRECTION_LEVEL = new ResultMetadataType('ERROR_CORRECTION_LEVEL', 3);
  ISSUE_NUMBER = new ResultMetadataType('ISSUE_NUMBER', 4);
  SUGGESTED_PRICE = new ResultMetadataType('SUGGESTED_PRICE', 5);
  POSSIBLE_COUNTRY = new ResultMetadataType('POSSIBLE_COUNTRY', 6);
  UPC_EAN_EXTENSION = new ResultMetadataType('UPC_EAN_EXTENSION', 7);
  PDF417_EXTRA_METADATA = new ResultMetadataType('PDF417_EXTRA_METADATA', 8);
  STRUCTURED_APPEND_SEQUENCE = new ResultMetadataType('STRUCTURED_APPEND_SEQUENCE', 9);
  STRUCTURED_APPEND_PARITY = new ResultMetadataType('STRUCTURED_APPEND_PARITY', 10);
}

function ResultMetadataType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_ResultMetadataType();
  return initValues(getClassLiteralForArray(Lcom_google_zxing_ResultMetadataType_2_classLit, 1), $intern_19, 21, 0, [OTHER, ORIENTATION, BYTE_SEGMENTS, ERROR_CORRECTION_LEVEL, ISSUE_NUMBER, SUGGESTED_PRICE, POSSIBLE_COUNTRY, UPC_EAN_EXTENSION, PDF417_EXTRA_METADATA, STRUCTURED_APPEND_SEQUENCE, STRUCTURED_APPEND_PARITY]);
}

defineClass(21, 13, {21:1, 3:1, 19:1, 13:1}, ResultMetadataType);
var BYTE_SEGMENTS, ERROR_CORRECTION_LEVEL, ISSUE_NUMBER, ORIENTATION, OTHER, PDF417_EXTRA_METADATA, POSSIBLE_COUNTRY, STRUCTURED_APPEND_PARITY, STRUCTURED_APPEND_SEQUENCE, SUGGESTED_PRICE, UPC_EAN_EXTENSION;
var Lcom_google_zxing_ResultMetadataType_2_classLit = createForEnum('com.google.zxing', 'ResultMetadataType', 21, values_0);
function ResultPoint(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function distance(pattern1, pattern2){
  return distance_0(pattern1.x_0, pattern1.y_0, pattern2.x_0, pattern2.y_0);
}

function orderBestPatterns(patterns){
  var oneTwoDistance, pointA, pointB, pointC, temp, zeroOneDistance, zeroTwoDistance, bX, bY;
  zeroOneDistance = distance(patterns[0], patterns[1]);
  oneTwoDistance = distance(patterns[1], patterns[2]);
  zeroTwoDistance = distance(patterns[0], patterns[2]);
  if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2];
  }
   else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
    pointB = patterns[1];
    pointA = patterns[0];
    pointC = patterns[2];
  }
   else {
    pointB = patterns[2];
    pointA = patterns[0];
    pointC = patterns[1];
  }
  if ((bX = pointB.x_0 , bY = pointB.y_0 , (pointC.x_0 - bX) * (pointA.y_0 - bY) - (pointC.y_0 - bY) * (pointA.x_0 - bX)) < 0) {
    temp = pointA;
    pointA = pointC;
    pointC = temp;
  }
  setCheck(patterns, 0, pointA);
  patterns[1] = pointB;
  setCheck(patterns, 2, pointC);
}

defineClass(29, 1, {29:1});
_.equals$ = function equals_1(other){
  var otherPoint;
  if (instanceOf(other, 29)) {
    otherPoint = dynamicCast(other, 29);
    return this.x_0 == otherPoint.x_0 && this.y_0 == otherPoint.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_2(){
  return 31 * floatToIntBits(this.x_0) + floatToIntBits(this.y_0);
}
;
_.toString$ = function toString_7(){
  var result;
  result = new StringBuilder;
  result.string += '(';
  $append_0(result, this.x_0);
  result.string += ',';
  $append_0(result, this.y_0);
  result.string += ')';
  return result.string;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_zxing_ResultPoint_2_classLit = createForClass('com.google.zxing', 'ResultPoint', 29);
function $flip(this$static, x_0, y_0){
  var offset;
  offset = y_0 * this$static.rowSize + ~~(x_0 / 32);
  this$static.bits[offset] ^= 1 << (x_0 & 31);
}

function $get(this$static, x_0, y_0){
  var offset;
  offset = y_0 * this$static.rowSize + ~~(x_0 / 32);
  return (this$static.bits[offset] >>> (x_0 & 31) & 1) != 0;
}

function $set_0(this$static, x_0, y_0){
  var offset;
  offset = y_0 * this$static.rowSize + ~~(x_0 / 32);
  this$static.bits[offset] |= 1 << (x_0 & 31);
}

function $setRegion(this$static, left, top_0, width_0, height){
  var bottom, offset, right, x_0, y_0;
  if (top_0 < 0 || left < 0) {
    throw new IllegalArgumentException_0('Left and top must be nonnegative');
  }
  if (height < 1 || width_0 < 1) {
    throw new IllegalArgumentException_0('Height and width must be at least 1');
  }
  right = left + width_0;
  bottom = top_0 + height;
  if (bottom > this$static.height_0 || right > this$static.width_0) {
    throw new IllegalArgumentException_0('The region must fit inside the matrix');
  }
  for (y_0 = top_0; y_0 < bottom; y_0++) {
    offset = y_0 * this$static.rowSize;
    for (x_0 = left; x_0 < right; x_0++) {
      this$static.bits[offset + ~~(x_0 / 32)] |= 1 << (x_0 & 31);
    }
  }
}

function $toString(this$static){
  var result, x_0, y_0;
  result = new StringBuilder;
  for (y_0 = 0; y_0 < this$static.height_0; y_0++) {
    for (x_0 = 0; x_0 < this$static.width_0; x_0++) {
      $append_2(result, $get(this$static, x_0, y_0)?'X ':'  ');
    }
    result.string += '\n';
  }
  return result.string;
}

function BitMatrix(dimension){
  BitMatrix_0.call(this, dimension, dimension);
}

function BitMatrix_0(width_0, height){
  if (width_0 < 1 || height < 1) {
    throw new IllegalArgumentException_0('Both dimensions must be greater than 0');
  }
  this.width_0 = width_0;
  this.height_0 = height;
  this.rowSize = ~~((width_0 + 31) / 32);
  this.bits = initDim(I_classLit, $intern_20, 0, this.rowSize * height, 7, 1);
}

defineClass(32, 1, {32:1}, BitMatrix, BitMatrix_0);
_.equals$ = function equals_2(o){
  var other;
  if (!instanceOf(o, 32)) {
    return false;
  }
  other = dynamicCast(o, 32);
  return this.width_0 == other.width_0 && this.height_0 == other.height_0 && this.rowSize == other.rowSize && equals_10(this.bits, other.bits);
}
;
_.hashCode$ = function hashCode_3(){
  var hash;
  hash = this.width_0;
  hash = 31 * hash + this.width_0;
  hash = 31 * hash + this.height_0;
  hash = 31 * hash + this.rowSize;
  hash = 31 * hash + hashCode_11(this.bits);
  return hash;
}
;
_.toString$ = function toString_8(){
  return $toString(this);
}
;
_.height_0 = 0;
_.rowSize = 0;
_.width_0 = 0;
var Lcom_google_zxing_common_BitMatrix_2_classLit = createForClass('com.google.zxing.common', 'BitMatrix', 32);
function $readBits(this$static, numBits){
  var bitsLeft, bitsToNotRead, mask, result, toRead;
  if (numBits < 1 || numBits > 32 || numBits > 8 * (this$static.bytes.length - this$static.byteOffset) - this$static.bitOffset) {
    throw new IllegalArgumentException_0('' + numBits);
  }
  result = 0;
  if (this$static.bitOffset > 0) {
    bitsLeft = 8 - this$static.bitOffset;
    toRead = numBits < bitsLeft?numBits:bitsLeft;
    bitsToNotRead = bitsLeft - toRead;
    mask = 255 >> 8 - toRead << bitsToNotRead;
    result = (this$static.bytes[this$static.byteOffset] & mask) >> bitsToNotRead;
    numBits -= toRead;
    this$static.bitOffset += toRead;
    if (this$static.bitOffset == 8) {
      this$static.bitOffset = 0;
      ++this$static.byteOffset;
    }
  }
  if (numBits > 0) {
    while (numBits >= 8) {
      result = result << 8 | this$static.bytes[this$static.byteOffset] & 255;
      ++this$static.byteOffset;
      numBits -= 8;
    }
    if (numBits > 0) {
      bitsToNotRead = 8 - numBits;
      mask = 255 >> bitsToNotRead << bitsToNotRead;
      result = result << numBits | (this$static.bytes[this$static.byteOffset] & mask) >> bitsToNotRead;
      this$static.bitOffset += numBits;
    }
  }
  return result;
}

function BitSource(bytes){
  this.bytes = bytes;
}

defineClass(150, 1, {}, BitSource);
_.bitOffset = 0;
_.byteOffset = 0;
var Lcom_google_zxing_common_BitSource_2_classLit = createForClass('com.google.zxing.common', 'BitSource', 150);
function $clinit_CharacterSetECI(){
  $clinit_CharacterSetECI = emptyMethod;
  var eci, eci$array, eci$index, eci$max, name_0, name$array, name$index, name$max, value_0, value$array, value$index, value$max;
  Cp437 = new CharacterSetECI_1('Cp437', 0, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0, 2]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, []));
  ISO8859_1 = new CharacterSetECI_1('ISO8859_1', 1, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [1, 3]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-1']));
  ISO8859_2 = new CharacterSetECI_0('ISO8859_2', 2, 4, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-2']));
  ISO8859_3 = new CharacterSetECI_0('ISO8859_3', 3, 5, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-3']));
  ISO8859_4 = new CharacterSetECI_0('ISO8859_4', 4, 6, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-4']));
  ISO8859_5 = new CharacterSetECI_0('ISO8859_5', 5, 7, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-5']));
  ISO8859_6 = new CharacterSetECI_0('ISO8859_6', 6, 8, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-6']));
  ISO8859_7 = new CharacterSetECI_0('ISO8859_7', 7, 9, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-7']));
  ISO8859_8 = new CharacterSetECI_0('ISO8859_8', 8, 10, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-8']));
  ISO8859_9 = new CharacterSetECI_0('ISO8859_9', 9, 11, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-9']));
  ISO8859_10 = new CharacterSetECI_0('ISO8859_10', 10, 12, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-10']));
  ISO8859_11 = new CharacterSetECI_0('ISO8859_11', 11, 13, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-11']));
  ISO8859_13 = new CharacterSetECI_0('ISO8859_13', 12, 15, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-13']));
  ISO8859_14 = new CharacterSetECI_0('ISO8859_14', 13, 16, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-14']));
  ISO8859_15 = new CharacterSetECI_0('ISO8859_15', 14, 17, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-15']));
  ISO8859_16 = new CharacterSetECI_0('ISO8859_16', 15, 18, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['ISO-8859-16']));
  SJIS = new CharacterSetECI_0('SJIS', 16, 20, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Shift_JIS']));
  Cp1250 = new CharacterSetECI_0('Cp1250', 17, 21, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['windows-1250']));
  Cp1251 = new CharacterSetECI_0('Cp1251', 18, 22, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['windows-1251']));
  Cp1252 = new CharacterSetECI_0('Cp1252', 19, 23, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['windows-1252']));
  Cp1256 = new CharacterSetECI_0('Cp1256', 20, 24, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['windows-1256']));
  UnicodeBigUnmarked = new CharacterSetECI_0('UnicodeBigUnmarked', 21, 25, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['UTF-16BE', 'UnicodeBig']));
  UTF8 = new CharacterSetECI_0('UTF8', 22, 26, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['UTF-8']));
  ASCII = new CharacterSetECI_1('ASCII', 23, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [27, 170]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['US-ASCII']));
  Big5 = new CharacterSetECI;
  GB18030 = new CharacterSetECI_0('GB18030', 25, 29, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['GB2312', 'EUC_CN', 'GBK']));
  EUC_KR = new CharacterSetECI_0('EUC_KR', 26, 30, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['EUC-KR']));
  VALUE_TO_ECI = new HashMap;
  NAME_TO_ECI = new HashMap;
  for (eci$array = values_1() , eci$index = 0 , eci$max = eci$array.length; eci$index < eci$max; ++eci$index) {
    eci = eci$array[eci$index];
    for (value$array = eci.values , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
      value_0 = value$array[value$index];
      $put(VALUE_TO_ECI, valueOf(value_0), eci);
    }
    $putStringValue(NAME_TO_ECI, eci.name_0 != null?eci.name_0:'' + eci.ordinal, eci);
    for (name$array = eci.otherEncodingNames , name$index = 0 , name$max = name$array.length; name$index < name$max; ++name$index) {
      name_0 = name$array[name$index];
      $putStringValue(NAME_TO_ECI, name_0, eci);
    }
  }
}

function CharacterSetECI(){
  CharacterSetECI_1.call(this, 'Big5', 24, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [28]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, []));
}

function CharacterSetECI_0(enum$name, enum$ordinal, value_0, otherEncodingNames){
  Enum.call(this, enum$name, enum$ordinal);
  this.values = initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [value_0]);
  this.otherEncodingNames = otherEncodingNames;
}

function CharacterSetECI_1(enum$name, enum$ordinal, values, otherEncodingNames){
  Enum.call(this, enum$name, enum$ordinal);
  this.values = values;
  this.otherEncodingNames = otherEncodingNames;
}

function getCharacterSetECIByValue(value_0){
  $clinit_CharacterSetECI();
  if (value_0 < 0 || value_0 >= 900) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  return dynamicCast($get_0(VALUE_TO_ECI, valueOf(value_0)), 11);
}

function values_1(){
  $clinit_CharacterSetECI();
  return initValues(getClassLiteralForArray(Lcom_google_zxing_common_CharacterSetECI_2_classLit, 1), $intern_19, 11, 0, [Cp437, ISO8859_1, ISO8859_2, ISO8859_3, ISO8859_4, ISO8859_5, ISO8859_6, ISO8859_7, ISO8859_8, ISO8859_9, ISO8859_10, ISO8859_11, ISO8859_13, ISO8859_14, ISO8859_15, ISO8859_16, SJIS, Cp1250, Cp1251, Cp1252, Cp1256, UnicodeBigUnmarked, UTF8, ASCII, Big5, GB18030, EUC_KR]);
}

defineClass(11, 13, {11:1, 3:1, 19:1, 13:1}, CharacterSetECI, CharacterSetECI_0, CharacterSetECI_1);
var ASCII, Big5, Cp1250, Cp1251, Cp1252, Cp1256, Cp437, EUC_KR, GB18030, ISO8859_1, ISO8859_10, ISO8859_11, ISO8859_13, ISO8859_14, ISO8859_15, ISO8859_16, ISO8859_2, ISO8859_3, ISO8859_4, ISO8859_5, ISO8859_6, ISO8859_7, ISO8859_8, ISO8859_9, NAME_TO_ECI, SJIS, UTF8, UnicodeBigUnmarked, VALUE_TO_ECI;
var Lcom_google_zxing_common_CharacterSetECI_2_classLit = createForEnum('com.google.zxing.common', 'CharacterSetECI', 11, values_1);
function $setOther(this$static, other){
  this$static.other = other;
}

function DecoderResult(text_0, byteSegments, ecLevel, saSequence, saParity){
  this.text_0 = text_0;
  this.byteSegments = byteSegments;
  this.ecLevel = ecLevel;
  this.structuredAppendParity = saParity;
  this.structuredAppendSequenceNumber = saSequence;
}

defineClass(129, 1, {}, DecoderResult);
_.structuredAppendParity = 0;
_.structuredAppendSequenceNumber = 0;
var Lcom_google_zxing_common_DecoderResult_2_classLit = createForClass('com.google.zxing.common', 'DecoderResult', 129);
function checkAndNudgePoints(image, points){
  var height, nudged, offset, offset0, width_0, x_0, y_0;
  width_0 = image.width_0;
  height = image.height_0;
  nudged = true;
  for (offset0 = 0; offset0 < points.length && nudged; offset0 += 2) {
    x_0 = round_int(points[offset0]);
    y_0 = round_int(points[offset0 + 1]);
    if (x_0 < -1 || x_0 > width_0 || y_0 < -1 || y_0 > height) {
      throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
    }
    nudged = false;
    if (x_0 == -1) {
      points[offset0] = 0;
      nudged = true;
    }
     else if (x_0 == width_0) {
      points[offset0] = width_0 - 1;
      nudged = true;
    }
    if (y_0 == -1) {
      points[offset0 + 1] = 0;
      nudged = true;
    }
     else if (y_0 == height) {
      points[offset0 + 1] = height - 1;
      nudged = true;
    }
  }
  nudged = true;
  for (offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
    x_0 = round_int(points[offset]);
    y_0 = round_int(points[offset + 1]);
    if (x_0 < -1 || x_0 > width_0 || y_0 < -1 || y_0 > height) {
      throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
    }
    nudged = false;
    if (x_0 == -1) {
      points[offset] = 0;
      nudged = true;
    }
     else if (x_0 == width_0) {
      points[offset] = width_0 - 1;
      nudged = true;
    }
    if (y_0 == -1) {
      points[offset + 1] = 0;
      nudged = true;
    }
     else if (y_0 == height) {
      points[offset + 1] = height - 1;
      nudged = true;
    }
  }
}

function $sampleGrid(image, dimensionX, dimensionY, transform){
  var bits, iValue, max_0, points, x_0, x0, y_0;
  if (dimensionX <= 0 || dimensionY <= 0) {
    throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  bits = new BitMatrix_0(dimensionX, dimensionY);
  points = initDim(F_classLit, $intern_18, 0, 2 * dimensionX, 7, 1);
  for (y_0 = 0; y_0 < dimensionY; y_0++) {
    max_0 = points.length;
    iValue = y_0 + 0.5;
    for (x0 = 0; x0 < max_0; x0 += 2) {
      points[x0] = ~~(x0 / 2) + 0.5;
      points[x0 + 1] = iValue;
    }
    $transformPoints(transform, points);
    checkAndNudgePoints(image, points);
    for (x_0 = 0; x_0 < max_0; x_0 += 2) {
      $get(image, round_int(points[x_0]), round_int(points[x_0 + 1])) && $set_0(bits, ~~(x_0 / 2), y_0);
    }
  }
  return bits;
}

function DetectorResult(bits, points){
  this.bits = bits;
  this.points = points;
}

defineClass(130, 1, {}, DetectorResult);
var Lcom_google_zxing_common_DetectorResult_2_classLit = createForClass('com.google.zxing.common', 'DetectorResult', 130);
function $clinit_GlobalHistogramBinarizer(){
  $clinit_GlobalHistogramBinarizer = emptyMethod;
  EMPTY = initDim(B_classLit, $intern_18, 0, 0, 7, 1);
}

function $getBlackMatrix(this$static){
  var blackPoint, height, localBuckets, localLuminances, localLuminances0, matrix, offset, pixel, right, row, source, width_0, x_0, y_0, y0;
  source = this$static.source;
  width_0 = source.width_0;
  height = source.height_0;
  matrix = new BitMatrix_0(width_0, height);
  $initArrays(this$static, width_0);
  localBuckets = this$static.buckets;
  for (y0 = 1; y0 < 5; y0++) {
    row = ~~(height * y0 / 5);
    localLuminances0 = $getRow(source, row, this$static.luminances);
    right = ~~(width_0 * 4 / 5);
    for (x_0 = ~~(width_0 / 5); x_0 < right; x_0++) {
      pixel = localLuminances0[x_0] & 255;
      ++localBuckets[pixel >> 3];
    }
  }
  blackPoint = estimateBlackPoint(localBuckets);
  localLuminances = $getMatrix(source);
  for (y_0 = 0; y_0 < height; y_0++) {
    offset = y_0 * width_0;
    for (x_0 = 0; x_0 < width_0; x_0++) {
      pixel = localLuminances[offset + x_0] & 255;
      pixel < blackPoint && $set_0(matrix, x_0, y_0);
    }
  }
  return matrix;
}

function $initArrays(this$static, luminanceSize){
  var x_0;
  this$static.luminances.length < luminanceSize && (this$static.luminances = initDim(B_classLit, $intern_18, 0, luminanceSize, 7, 1));
  for (x_0 = 0; x_0 < 32; x_0++) {
    this$static.buckets[x_0] = 0;
  }
}

function estimateBlackPoint(buckets){
  var bestValley, bestValleyScore, distanceToBiggest, firstPeak, firstPeakSize, fromFirst, maxBucketCount, numBuckets, score, secondPeak, secondPeakScore, temp, x_0, x0, x1;
  numBuckets = buckets.length;
  maxBucketCount = 0;
  firstPeak = 0;
  firstPeakSize = 0;
  for (x0 = 0; x0 < numBuckets; x0++) {
    if (buckets[x0] > firstPeakSize) {
      firstPeak = x0;
      firstPeakSize = buckets[x0];
    }
    buckets[x0] > maxBucketCount && (maxBucketCount = buckets[x0]);
  }
  secondPeak = 0;
  secondPeakScore = 0;
  for (x1 = 0; x1 < numBuckets; x1++) {
    distanceToBiggest = x1 - firstPeak;
    score = buckets[x1] * distanceToBiggest * distanceToBiggest;
    if (score > secondPeakScore) {
      secondPeak = x1;
      secondPeakScore = score;
    }
  }
  if (firstPeak > secondPeak) {
    temp = firstPeak;
    firstPeak = secondPeak;
    secondPeak = temp;
  }
  if (secondPeak - firstPeak <= ~~(numBuckets / 16)) {
    throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  bestValley = secondPeak - 1;
  bestValleyScore = -1;
  for (x_0 = secondPeak - 1; x_0 > firstPeak; x_0--) {
    fromFirst = x_0 - firstPeak;
    score = fromFirst * fromFirst * (secondPeak - x_0) * (maxBucketCount - buckets[x_0]);
    if (score > bestValleyScore) {
      bestValley = x_0;
      bestValleyScore = score;
    }
  }
  return bestValley << 3;
}

defineClass(127, 126, {});
var EMPTY;
var Lcom_google_zxing_common_GlobalHistogramBinarizer_2_classLit = createForClass('com.google.zxing.common', 'GlobalHistogramBinarizer', 127);
function $getBlackMatrix_0(this$static){
  var blackPoints, height, luminances, newMatrix, source, subHeight, subWidth, width_0;
  if (this$static.matrix) {
    return this$static.matrix;
  }
  source = this$static.source;
  width_0 = source.width_0;
  height = source.height_0;
  if (width_0 >= 40 && height >= 40) {
    luminances = $getMatrix(source);
    subWidth = width_0 >> 3;
    (width_0 & 7) != 0 && ++subWidth;
    subHeight = height >> 3;
    (height & 7) != 0 && ++subHeight;
    blackPoints = calculateBlackPoints(luminances, subWidth, subHeight, width_0, height);
    newMatrix = new BitMatrix_0(width_0, height);
    calculateThresholdForBlock(luminances, subWidth, subHeight, width_0, height, blackPoints, newMatrix);
    this$static.matrix = newMatrix;
  }
   else {
    this$static.matrix = $getBlackMatrix(this$static);
  }
  return this$static.matrix;
}

function HybridBinarizer(source){
  $clinit_GlobalHistogramBinarizer();
  this.source = source;
  this.luminances = EMPTY;
  this.buckets = initDim(I_classLit, $intern_20, 0, 32, 7, 1);
}

function calculateBlackPoints(luminances, subWidth, subHeight, width_0, height){
  var average, averageNeighborBlackPoint, blackPoints, max_0, maxXOffset, maxYOffset, min_0, offset, pixel, sum, x_0, xoffset, xx, xx0, y_0, yoffset, yy;
  blackPoints = initDims(I_classLit, [$intern_2, $intern_20], [7, 0], 7, [subHeight, subWidth], 2);
  for (y_0 = 0; y_0 < subHeight; y_0++) {
    yoffset = y_0 << 3;
    maxYOffset = height - 8;
    yoffset > maxYOffset && (yoffset = maxYOffset);
    for (x_0 = 0; x_0 < subWidth; x_0++) {
      xoffset = x_0 << 3;
      maxXOffset = width_0 - 8;
      xoffset > maxXOffset && (xoffset = maxXOffset);
      sum = 0;
      min_0 = 255;
      max_0 = 0;
      for (yy = 0 , offset = yoffset * width_0 + xoffset; yy < 8; ++yy , offset += width_0) {
        for (xx0 = 0; xx0 < 8; xx0++) {
          pixel = luminances[offset + xx0] & 255;
          sum += pixel;
          pixel < min_0 && (min_0 = pixel);
          pixel > max_0 && (max_0 = pixel);
        }
        if (max_0 - min_0 > 24) {
          for (++yy , offset += width_0; yy < 8; ++yy , offset += width_0) {
            for (xx = 0; xx < 8; xx++) {
              sum += luminances[offset + xx] & 255;
            }
          }
        }
      }
      average = sum >> 6;
      if (max_0 - min_0 <= 24) {
        average = ~~(min_0 / 2);
        if (y_0 > 0 && x_0 > 0) {
          averageNeighborBlackPoint = ~~((blackPoints[y_0 - 1][x_0] + 2 * blackPoints[y_0][x_0 - 1] + blackPoints[y_0 - 1][x_0 - 1]) / 4);
          min_0 < averageNeighborBlackPoint && (average = averageNeighborBlackPoint);
        }
      }
      blackPoints[y_0][x_0] = average;
    }
  }
  return blackPoints;
}

function calculateThresholdForBlock(luminances, subWidth, subHeight, width_0, height, blackPoints, matrix){
  var average, blackRow, left, maxXOffset, maxYOffset, sum, top_0, x_0, xoffset, y_0, yoffset, z_0;
  for (y_0 = 0; y_0 < subHeight; y_0++) {
    yoffset = y_0 << 3;
    maxYOffset = height - 8;
    yoffset > maxYOffset && (yoffset = maxYOffset);
    for (x_0 = 0; x_0 < subWidth; x_0++) {
      xoffset = x_0 << 3;
      maxXOffset = width_0 - 8;
      xoffset > maxXOffset && (xoffset = maxXOffset);
      left = x_0 < 2?2:x_0 > subWidth - 3?subWidth - 3:x_0;
      top_0 = y_0 < 2?2:y_0 > subHeight - 3?subHeight - 3:y_0;
      sum = 0;
      for (z_0 = -2; z_0 <= 2; z_0++) {
        blackRow = blackPoints[top_0 + z_0];
        sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
      }
      average = ~~(sum / 25);
      thresholdBlock(luminances, xoffset, yoffset, average, width_0, matrix);
    }
  }
}

function thresholdBlock(luminances, xoffset, yoffset, threshold, stride, matrix){
  var offset, x_0, y_0;
  for (y_0 = 0 , offset = yoffset * stride + xoffset; y_0 < 8; ++y_0 , offset += stride) {
    for (x_0 = 0; x_0 < 8; x_0++) {
      (luminances[offset + x_0] & 255) <= threshold && $set_0(matrix, xoffset + x_0, yoffset + y_0);
    }
  }
}

defineClass(128, 127, {}, HybridBinarizer);
var Lcom_google_zxing_common_HybridBinarizer_2_classLit = createForClass('com.google.zxing.common', 'HybridBinarizer', 128);
function $buildAdjoint(this$static){
  return new PerspectiveTransform(this$static.a22 * this$static.a33 - this$static.a23 * this$static.a32, this$static.a23 * this$static.a31 - this$static.a21 * this$static.a33, this$static.a21 * this$static.a32 - this$static.a22 * this$static.a31, this$static.a13 * this$static.a32 - this$static.a12 * this$static.a33, this$static.a11 * this$static.a33 - this$static.a13 * this$static.a31, this$static.a12 * this$static.a31 - this$static.a11 * this$static.a32, this$static.a12 * this$static.a23 - this$static.a13 * this$static.a22, this$static.a13 * this$static.a21 - this$static.a11 * this$static.a23, this$static.a11 * this$static.a22 - this$static.a12 * this$static.a21);
}

function $transformPoints(this$static, points){
  var a11, a12, a13, a21, a22, a23, a31, a32, a33, denominator, i, max_0, x_0, y_0;
  max_0 = points.length;
  a11 = this$static.a11;
  a12 = this$static.a12;
  a13 = this$static.a13;
  a21 = this$static.a21;
  a22 = this$static.a22;
  a23 = this$static.a23;
  a31 = this$static.a31;
  a32 = this$static.a32;
  a33 = this$static.a33;
  for (i = 0; i < max_0; i += 2) {
    x_0 = points[i];
    y_0 = points[i + 1];
    denominator = a13 * x_0 + a23 * y_0 + a33;
    points[i] = (a11 * x_0 + a21 * y_0 + a31) / denominator;
    points[i + 1] = (a12 * x_0 + a22 * y_0 + a32) / denominator;
  }
}

function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13, a23, a33){
  this.a11 = a11;
  this.a12 = a12;
  this.a13 = a13;
  this.a21 = a21;
  this.a22 = a22;
  this.a23 = a23;
  this.a31 = a31;
  this.a32 = a32;
  this.a33 = a33;
}

function quadrilateralToQuadrilateral(x1, x2, y2, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p){
  var qToS, sToQ;
  qToS = $buildAdjoint(squareToQuadrilateral(3.5, 3.5, x1, 3.5, x2, y2, 3.5, y3));
  sToQ = squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
  return new PerspectiveTransform(sToQ.a11 * qToS.a11 + sToQ.a21 * qToS.a12 + sToQ.a31 * qToS.a13, sToQ.a11 * qToS.a21 + sToQ.a21 * qToS.a22 + sToQ.a31 * qToS.a23, sToQ.a11 * qToS.a31 + sToQ.a21 * qToS.a32 + sToQ.a31 * qToS.a33, sToQ.a12 * qToS.a11 + sToQ.a22 * qToS.a12 + sToQ.a32 * qToS.a13, sToQ.a12 * qToS.a21 + sToQ.a22 * qToS.a22 + sToQ.a32 * qToS.a23, sToQ.a12 * qToS.a31 + sToQ.a22 * qToS.a32 + sToQ.a32 * qToS.a33, sToQ.a13 * qToS.a11 + sToQ.a23 * qToS.a12 + sToQ.a33 * qToS.a13, sToQ.a13 * qToS.a21 + sToQ.a23 * qToS.a22 + sToQ.a33 * qToS.a23, sToQ.a13 * qToS.a31 + sToQ.a23 * qToS.a32 + sToQ.a33 * qToS.a33);
}

function squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3){
  var a13, a23, denominator, dx1, dx2, dx3, dy1, dy2, dy3;
  dx3 = x0 - x1 + x2 - x3;
  dy3 = y0 - y1 + y2 - y3;
  if (dx3 == 0 && dy3 == 0) {
    return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0, 1);
  }
   else {
    dx1 = x1 - x2;
    dx2 = x3 - x2;
    dy1 = y1 - y2;
    dy2 = y3 - y2;
    denominator = dx1 * dy2 - dx2 * dy1;
    a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
    a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
    return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1);
  }
}

defineClass(57, 1, {}, PerspectiveTransform);
_.a11 = 0;
_.a12 = 0;
_.a13 = 0;
_.a21 = 0;
_.a22 = 0;
_.a23 = 0;
_.a31 = 0;
_.a32 = 0;
_.a33 = 0;
var Lcom_google_zxing_common_PerspectiveTransform_2_classLit = createForClass('com.google.zxing.common', 'PerspectiveTransform', 57);
function guessEncoding(bytes){
  var canBeISO88591, canBeShiftJIS, canBeUTF8, i, isoHighOther, length_0, sjisBytesLeft, sjisCurDoubleBytesWordLength, sjisCurKatakanaWordLength, sjisKatakanaChars, sjisMaxDoubleBytesWordLength, sjisMaxKatakanaWordLength, utf2BytesChars, utf3BytesChars, utf4BytesChars, utf8BytesLeft, utf8bom, value_0;
  length_0 = bytes.length;
  canBeISO88591 = true;
  canBeShiftJIS = true;
  canBeUTF8 = true;
  utf8BytesLeft = 0;
  utf2BytesChars = 0;
  utf3BytesChars = 0;
  utf4BytesChars = 0;
  sjisBytesLeft = 0;
  sjisKatakanaChars = 0;
  sjisCurKatakanaWordLength = 0;
  sjisCurDoubleBytesWordLength = 0;
  sjisMaxKatakanaWordLength = 0;
  sjisMaxDoubleBytesWordLength = 0;
  isoHighOther = 0;
  utf8bom = bytes.length > 3 && bytes[0] == -17 && bytes[1] == -69 && bytes[2] == -65;
  for (i = 0; i < length_0 && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
    value_0 = bytes[i] & 255;
    if (canBeUTF8) {
      if (utf8BytesLeft > 0) {
        (value_0 & 128) == 0?(canBeUTF8 = false):--utf8BytesLeft;
      }
       else if ((value_0 & 128) != 0) {
        if ((value_0 & 64) == 0) {
          canBeUTF8 = false;
        }
         else {
          ++utf8BytesLeft;
          if ((value_0 & 32) == 0) {
            ++utf2BytesChars;
          }
           else {
            ++utf8BytesLeft;
            if ((value_0 & 16) == 0) {
              ++utf3BytesChars;
            }
             else {
              ++utf8BytesLeft;
              (value_0 & 8) == 0?++utf4BytesChars:(canBeUTF8 = false);
            }
          }
        }
      }
    }
    canBeISO88591 && (value_0 > 127 && value_0 < 160?(canBeISO88591 = false):value_0 > 159 && (value_0 < 192 || value_0 == 215 || value_0 == 247) && ++isoHighOther);
    if (canBeShiftJIS) {
      if (sjisBytesLeft > 0) {
        value_0 < 64 || value_0 == 127 || value_0 > 252?(canBeShiftJIS = false):--sjisBytesLeft;
      }
       else if (value_0 == 128 || value_0 == 160 || value_0 > 239) {
        canBeShiftJIS = false;
      }
       else if (value_0 > 160 && value_0 < 224) {
        ++sjisKatakanaChars;
        sjisCurDoubleBytesWordLength = 0;
        ++sjisCurKatakanaWordLength;
        sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength && (sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength);
      }
       else if (value_0 > 127) {
        ++sjisBytesLeft;
        sjisCurKatakanaWordLength = 0;
        ++sjisCurDoubleBytesWordLength;
        sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength && (sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength);
      }
       else {
        sjisCurKatakanaWordLength = 0;
        sjisCurDoubleBytesWordLength = 0;
      }
    }
  }
  canBeUTF8 && utf8BytesLeft > 0 && (canBeUTF8 = false);
  canBeShiftJIS && sjisBytesLeft > 0 && (canBeShiftJIS = false);
  if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
    return 'UTF-8';
  }
  if (canBeShiftJIS && (sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
    return 'Shift_JIS';
  }
  if (canBeISO88591 && canBeShiftJIS) {
    return sjisMaxKatakanaWordLength == 2 && sjisKatakanaChars == 2 || isoHighOther * 10 >= length_0?'Shift_JIS':'ISO-8859-1';
  }
  if (canBeISO88591) {
    return 'ISO-8859-1';
  }
  if (canBeShiftJIS) {
    return 'Shift_JIS';
  }
  if (canBeUTF8) {
    return 'UTF-8';
  }
  return 'UTF-8';
}

function distance_0(aX, aY, bX, bY){
  var xDiff, yDiff;
  xDiff = aX - bX;
  yDiff = aY - bY;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function distance_1(aX, aY, bX, bY){
  var xDiff, yDiff;
  xDiff = aX - bX;
  yDiff = aY - bY;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function round_0(d){
  return round_int(d + (d < 0?-0.5:0.5));
}

function $clinit_GenericGF(){
  $clinit_GenericGF = emptyMethod;
  new GenericGF(4201, 4096, 1);
  new GenericGF(1033, 1024, 1);
  new GenericGF(67, 64, 1);
  new GenericGF(19, 16, 1);
  QR_CODE_FIELD_256 = new GenericGF(285, 256, 0);
  new GenericGF(301, 256, 1);
}

function $buildMonomial(this$static, degree, coefficient){
  var coefficients;
  if (degree < 0) {
    throw new IllegalArgumentException;
  }
  if (coefficient == 0) {
    return this$static.zero;
  }
  coefficients = initDim(I_classLit, $intern_20, 0, degree + 1, 7, 1);
  coefficients[0] = coefficient;
  return new GenericGFPoly(this$static, coefficients);
}

function $exp(this$static, a){
  return this$static.expTable[a];
}

function $inverse(this$static, a){
  if (a == 0) {
    throw new ArithmeticException;
  }
  return this$static.expTable[this$static.size_0 - this$static.logTable[a] - 1];
}

function $log(this$static, a){
  if (a == 0) {
    throw new IllegalArgumentException;
  }
  return this$static.logTable[a];
}

function $multiply(this$static, a, b){
  if (a == 0 || b == 0) {
    return 0;
  }
  return this$static.expTable[(this$static.logTable[a] + this$static.logTable[b]) % (this$static.size_0 - 1)];
}

function GenericGF(primitive, size_0, b){
  var i, i0, x_0;
  this.primitive = primitive;
  this.size_0 = size_0;
  this.generatorBase = b;
  this.expTable = initDim(I_classLit, $intern_20, 0, size_0, 7, 1);
  this.logTable = initDim(I_classLit, $intern_20, 0, size_0, 7, 1);
  x_0 = 1;
  for (i0 = 0; i0 < size_0; i0++) {
    this.expTable[i0] = x_0;
    x_0 *= 2;
    if (x_0 >= size_0) {
      x_0 ^= primitive;
      x_0 &= size_0 - 1;
    }
  }
  for (i = 0; i < size_0 - 1; i++) {
    this.logTable[this.expTable[i]] = i;
  }
  this.zero = new GenericGFPoly(this, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0]));
  this.one = new GenericGFPoly(this, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [1]));
}

defineClass(44, 1, {}, GenericGF);
_.toString$ = function toString_9(){
  return 'GF(0x' + toUnsignedRadixString(this.primitive, 16) + ',' + this.size_0 + ')';
}
;
_.generatorBase = 0;
_.primitive = 0;
_.size_0 = 0;
var QR_CODE_FIELD_256;
var Lcom_google_zxing_common_reedsolomon_GenericGF_2_classLit = createForClass('com.google.zxing.common.reedsolomon', 'GenericGF', 44);
function $addOrSubtract(this$static, other){
  var i, largerCoefficients, lengthDiff, smallerCoefficients, sumDiff, temp;
  if (this$static.field != other.field) {
    throw new IllegalArgumentException_0('GenericGFPolys do not have same GenericGF field');
  }
  if (this$static.coefficients[0] == 0) {
    return other;
  }
  if (other.coefficients[0] == 0) {
    return this$static;
  }
  smallerCoefficients = this$static.coefficients;
  largerCoefficients = other.coefficients;
  if (smallerCoefficients.length > largerCoefficients.length) {
    temp = smallerCoefficients;
    smallerCoefficients = largerCoefficients;
    largerCoefficients = temp;
  }
  sumDiff = initDim(I_classLit, $intern_20, 0, largerCoefficients.length, 7, 1);
  lengthDiff = largerCoefficients.length - smallerCoefficients.length;
  arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
  for (i = lengthDiff; i < largerCoefficients.length; i++) {
    sumDiff[i] = ($clinit_GenericGF() , smallerCoefficients[i - lengthDiff] ^ largerCoefficients[i]);
  }
  return new GenericGFPoly(this$static.field, sumDiff);
}

function $evaluateAt(this$static, a){
  var coefficient, coefficient$array, coefficient$index, coefficient$max, i, result, result0, size_0;
  if (a == 0) {
    return this$static.coefficients[this$static.coefficients.length - 1];
  }
  size_0 = this$static.coefficients.length;
  if (a == 1) {
    result0 = 0;
    for (coefficient$array = this$static.coefficients , coefficient$index = 0 , coefficient$max = coefficient$array.length; coefficient$index < coefficient$max; ++coefficient$index) {
      coefficient = coefficient$array[coefficient$index];
      result0 = ($clinit_GenericGF() , result0 ^ coefficient);
    }
    return result0;
  }
  result = this$static.coefficients[0];
  for (i = 1; i < size_0; i++) {
    result = ($clinit_GenericGF() , $multiply(this$static.field, a, result) ^ this$static.coefficients[i]);
  }
  return result;
}

function $getCoefficient(this$static, degree){
  return this$static.coefficients[this$static.coefficients.length - 1 - degree];
}

function $multiply_0(this$static, scalar){
  var i, product, size_0;
  if (scalar == 0) {
    return this$static.field.zero;
  }
  if (scalar == 1) {
    return this$static;
  }
  size_0 = this$static.coefficients.length;
  product = initDim(I_classLit, $intern_20, 0, size_0, 7, 1);
  for (i = 0; i < size_0; i++) {
    product[i] = $multiply(this$static.field, this$static.coefficients[i], scalar);
  }
  return new GenericGFPoly(this$static.field, product);
}

function $multiply_1(this$static, other){
  var aCoeff, aCoefficients, aLength, bCoefficients, bLength, i, j, product;
  if (this$static.field != other.field) {
    throw new IllegalArgumentException_0('GenericGFPolys do not have same GenericGF field');
  }
  if (this$static.coefficients[0] == 0 || other.coefficients[0] == 0) {
    return this$static.field.zero;
  }
  aCoefficients = this$static.coefficients;
  aLength = aCoefficients.length;
  bCoefficients = other.coefficients;
  bLength = bCoefficients.length;
  product = initDim(I_classLit, $intern_20, 0, aLength + bLength - 1, 7, 1);
  for (i = 0; i < aLength; i++) {
    aCoeff = aCoefficients[i];
    for (j = 0; j < bLength; j++) {
      product[i + j] = ($clinit_GenericGF() , product[i + j] ^ $multiply(this$static.field, aCoeff, bCoefficients[j]));
    }
  }
  return new GenericGFPoly(this$static.field, product);
}

function $multiplyByMonomial(this$static, degree, coefficient){
  var i, product, size_0;
  if (degree < 0) {
    throw new IllegalArgumentException;
  }
  if (coefficient == 0) {
    return this$static.field.zero;
  }
  size_0 = this$static.coefficients.length;
  product = initDim(I_classLit, $intern_20, 0, size_0 + degree, 7, 1);
  for (i = 0; i < size_0; i++) {
    product[i] = $multiply(this$static.field, this$static.coefficients[i], coefficient);
  }
  return new GenericGFPoly(this$static.field, product);
}

function GenericGFPoly(field, coefficients){
  var coefficientsLength, firstNonZero;
  if (coefficients.length == 0) {
    throw new IllegalArgumentException;
  }
  this.field = field;
  coefficientsLength = coefficients.length;
  if (coefficientsLength > 1 && coefficients[0] == 0) {
    firstNonZero = 1;
    while (firstNonZero < coefficientsLength && coefficients[firstNonZero] == 0) {
      ++firstNonZero;
    }
    if (firstNonZero == coefficientsLength) {
      this.coefficients = initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0]);
    }
     else {
      this.coefficients = initDim(I_classLit, $intern_20, 0, coefficientsLength - firstNonZero, 7, 1);
      arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
    }
  }
   else {
    this.coefficients = coefficients;
  }
}

defineClass(26, 1, {26:1}, GenericGFPoly);
_.toString$ = function toString_10(){
  var alphaPower, coefficient, degree, result;
  result = new StringBuilder;
  for (degree = this.coefficients.length - 1; degree >= 0; degree--) {
    coefficient = this.coefficients[this.coefficients.length - 1 - degree];
    if (coefficient != 0) {
      if (coefficient < 0) {
        result.string += ' - ';
        coefficient = -coefficient;
      }
       else {
        result.string.length > 0 && (result.string += ' + ' , result);
      }
      if (degree == 0 || coefficient != 1) {
        alphaPower = $log(this.field, coefficient);
        if (alphaPower == 0) {
          result.string += '1';
        }
         else if (alphaPower == 1) {
          result.string += 'a';
        }
         else {
          result.string += 'a^';
          result.string += alphaPower;
        }
      }
      if (degree != 0) {
        if (degree == 1) {
          result.string += 'x';
        }
         else {
          result.string += 'x^';
          result.string += degree;
        }
      }
    }
  }
  return result.string;
}
;
var Lcom_google_zxing_common_reedsolomon_GenericGFPoly_2_classLit = createForClass('com.google.zxing.common.reedsolomon', 'GenericGFPoly', 26);
function $decode(this$static, received, twoS){
  var errorLocations, errorMagnitudes, eval_0, i, i0, noError, omega, poly, position, sigma, sigmaOmega, syndrome, syndromeCoefficients;
  poly = new GenericGFPoly(this$static.field, received);
  syndromeCoefficients = initDim(I_classLit, $intern_20, 0, twoS, 7, 1);
  noError = true;
  for (i0 = 0; i0 < twoS; i0++) {
    eval_0 = $evaluateAt(poly, $exp(this$static.field, i0 + this$static.field.generatorBase));
    syndromeCoefficients[syndromeCoefficients.length - 1 - i0] = eval_0;
    eval_0 != 0 && (noError = false);
  }
  if (noError) {
    return;
  }
  syndrome = new GenericGFPoly(this$static.field, syndromeCoefficients);
  sigmaOmega = $runEuclideanAlgorithm(this$static, $buildMonomial(this$static.field, twoS, 1), syndrome, twoS);
  sigma = sigmaOmega[0];
  omega = sigmaOmega[1];
  errorLocations = $findErrorLocations(this$static, sigma);
  errorMagnitudes = $findErrorMagnitudes(this$static, omega, errorLocations);
  for (i = 0; i < errorLocations.length; i++) {
    position = received.length - 1 - $log(this$static.field, errorLocations[i]);
    if (position < 0) {
      throw new ReedSolomonException('Bad error location');
    }
    received[position] = ($clinit_GenericGF() , received[position] ^ errorMagnitudes[i]);
  }
}

function $findErrorLocations(this$static, errorLocator){
  var e, i, numErrors, result;
  numErrors = errorLocator.coefficients.length - 1;
  if (numErrors == 1) {
    return initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [errorLocator.coefficients[errorLocator.coefficients.length - 1 - 1]]);
  }
  result = initDim(I_classLit, $intern_20, 0, numErrors, 7, 1);
  e = 0;
  for (i = 1; i < this$static.field.size_0 && e < numErrors; i++) {
    if ($evaluateAt(errorLocator, i) == 0) {
      result[e] = $inverse(this$static.field, i);
      ++e;
    }
  }
  if (e != numErrors) {
    throw new ReedSolomonException('Error locator degree does not match number of roots');
  }
  return result;
}

function $findErrorMagnitudes(this$static, errorEvaluator, errorLocations){
  var denominator, i, j, result, s, term, termPlus1, xiInverse;
  s = errorLocations.length;
  result = initDim(I_classLit, $intern_20, 0, s, 7, 1);
  for (i = 0; i < s; i++) {
    xiInverse = $inverse(this$static.field, errorLocations[i]);
    denominator = 1;
    for (j = 0; j < s; j++) {
      if (i != j) {
        term = $multiply(this$static.field, errorLocations[j], xiInverse);
        termPlus1 = (term & 1) == 0?term | 1:term & -2;
        denominator = $multiply(this$static.field, denominator, termPlus1);
      }
    }
    result[i] = $multiply(this$static.field, $evaluateAt(errorEvaluator, xiInverse), $inverse(this$static.field, denominator));
    this$static.field.generatorBase != 0 && (result[i] = $multiply(this$static.field, result[i], xiInverse));
  }
  return result;
}

function $runEuclideanAlgorithm(this$static, a, b, R){
  var degreeDiff, denominatorLeadingTerm, dltInverse, inverse, omega, q, r, rLast, rLastLast, scale, sigma, sigmaTildeAtZero, t, tLast, tLastLast, temp;
  if (a.coefficients.length - 1 < b.coefficients.length - 1) {
    temp = a;
    a = b;
    b = temp;
  }
  rLast = a;
  r = b;
  tLast = this$static.field.zero;
  t = this$static.field.one;
  while (r.coefficients.length - 1 >= ~~(R / 2)) {
    rLastLast = rLast;
    tLastLast = tLast;
    rLast = r;
    tLast = t;
    if (r.coefficients[0] == 0) {
      throw new ReedSolomonException('r_{i-1} was zero');
    }
    r = rLastLast;
    q = this$static.field.zero;
    denominatorLeadingTerm = $getCoefficient(rLast, rLast.coefficients.length - 1);
    dltInverse = $inverse(this$static.field, denominatorLeadingTerm);
    while (r.coefficients.length - 1 >= rLast.coefficients.length - 1 && r.coefficients[0] != 0) {
      degreeDiff = r.coefficients.length - 1 - (rLast.coefficients.length - 1);
      scale = $multiply(this$static.field, $getCoefficient(r, r.coefficients.length - 1), dltInverse);
      q = $addOrSubtract(q, $buildMonomial(this$static.field, degreeDiff, scale));
      r = $addOrSubtract(r, $multiplyByMonomial(rLast, degreeDiff, scale));
    }
    t = $addOrSubtract($multiply_1(q, t), tLastLast);
    if (r.coefficients.length - 1 >= rLast.coefficients.length - 1) {
      throw new IllegalStateException_0('Division algorithm failed to reduce polynomial?');
    }
  }
  sigmaTildeAtZero = t.coefficients[t.coefficients.length - 1];
  if (sigmaTildeAtZero == 0) {
    throw new ReedSolomonException('sigmaTilde(0) was zero');
  }
  inverse = $inverse(this$static.field, sigmaTildeAtZero);
  sigma = $multiply_0(t, inverse);
  omega = $multiply_0(r, inverse);
  return initValues(getClassLiteralForArray(Lcom_google_zxing_common_reedsolomon_GenericGFPoly_2_classLit, 1), $intern_2, 26, 0, [sigma, omega]);
}

function ReedSolomonDecoder(field){
  this.field = field;
}

defineClass(123, 1, {}, ReedSolomonDecoder);
var Lcom_google_zxing_common_reedsolomon_ReedSolomonDecoder_2_classLit = createForClass('com.google.zxing.common.reedsolomon', 'ReedSolomonDecoder', 123);
function ReedSolomonException(message){
  Exception_0.call(this, message);
}

defineClass(45, 10, {45:1, 3:1, 10:1, 8:1}, ReedSolomonException);
var Lcom_google_zxing_common_reedsolomon_ReedSolomonException_2_classLit = createForClass('com.google.zxing.common.reedsolomon', 'ReedSolomonException', 45);
function $decode_0(this$static, image){
  var byteSegments, decoderResult, detectorResult, ecLevel, points, result;
  detectorResult = $detect(new Detector((!image.matrix && (image.matrix = $getBlackMatrix_0(image.binarizer)) , image.matrix)));
  decoderResult = $decode_1(this$static.decoder, detectorResult.bits);
  points = detectorResult.points;
  !!decoderResult.other && $applyMirroredCorrection(decoderResult.other, points);
  result = new Result(decoderResult.text_0);
  byteSegments = decoderResult.byteSegments;
  !!byteSegments && $putMetadata(result, ($clinit_ResultMetadataType() , BYTE_SEGMENTS), byteSegments);
  ecLevel = decoderResult.ecLevel;
  ecLevel != null && $putMetadata(result, ($clinit_ResultMetadataType() , ERROR_CORRECTION_LEVEL), ecLevel);
  if (decoderResult.structuredAppendParity >= 0 && decoderResult.structuredAppendSequenceNumber >= 0) {
    $putMetadata(result, ($clinit_ResultMetadataType() , STRUCTURED_APPEND_SEQUENCE), valueOf(decoderResult.structuredAppendSequenceNumber));
    $putMetadata(result, STRUCTURED_APPEND_PARITY, valueOf(decoderResult.structuredAppendParity));
  }
  return result;
}

function QRCodeReader(){
  this.decoder = new Decoder;
}

defineClass(118, 1, {181:1}, QRCodeReader);
var Lcom_google_zxing_qrcode_QRCodeReader_2_classLit = createForClass('com.google.zxing.qrcode', 'QRCodeReader', 118);
function $copyBit(this$static, i, j, versionBits){
  var bit;
  bit = this$static.mirror?$get(this$static.bitMatrix, j, i):$get(this$static.bitMatrix, i, j);
  return bit?versionBits << 1 | 1:versionBits << 1;
}

function $mirror(this$static){
  var x_0, y_0;
  for (x_0 = 0; x_0 < this$static.bitMatrix.width_0; x_0++) {
    for (y_0 = x_0 + 1; y_0 < this$static.bitMatrix.height_0; y_0++) {
      if ($get(this$static.bitMatrix, x_0, y_0) != $get(this$static.bitMatrix, y_0, x_0)) {
        $flip(this$static.bitMatrix, y_0, x_0);
        $flip(this$static.bitMatrix, x_0, y_0);
      }
    }
  }
}

function $readCodewords(this$static){
  var bitsRead, col, count, currentByte, dataMask, dimension, formatInfo, functionPattern, i, j, readingUp, result, resultOffset, version;
  formatInfo = $readFormatInformation(this$static);
  version = $readVersion(this$static);
  dataMask = ($clinit_DataMask() , initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_DataMask_2_classLit, 1), $intern_19, 14, 0, [DATA_MASK_000, DATA_MASK_001, DATA_MASK_010, DATA_MASK_011, DATA_MASK_100, DATA_MASK_101, DATA_MASK_110, DATA_MASK_111]))[formatInfo.dataMask];
  dimension = this$static.bitMatrix.height_0;
  $unmaskBitMatrix(dataMask, this$static.bitMatrix, dimension);
  functionPattern = $buildFunctionPattern(version);
  readingUp = true;
  result = initDim(B_classLit, $intern_18, 0, version.totalCodewords, 7, 1);
  resultOffset = 0;
  currentByte = 0;
  bitsRead = 0;
  for (j = dimension - 1; j > 0; j -= 2) {
    j == 6 && --j;
    for (count = 0; count < dimension; count++) {
      i = readingUp?dimension - 1 - count:count;
      for (col = 0; col < 2; col++) {
        if (!$get(functionPattern, j - col, i)) {
          ++bitsRead;
          currentByte <<= 1;
          $get(this$static.bitMatrix, j - col, i) && (currentByte |= 1);
          if (bitsRead == 8) {
            result[resultOffset++] = narrow_byte(currentByte);
            bitsRead = 0;
            currentByte = 0;
          }
        }
      }
    }
    readingUp = readingUp ^ true;
  }
  if (resultOffset != version.totalCodewords) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  return result;
}

function $readFormatInformation(this$static){
  var dimension, formatInfoBits1, formatInfoBits2, i, i0, j, j0, jMin;
  if (this$static.parsedFormatInfo) {
    return this$static.parsedFormatInfo;
  }
  formatInfoBits1 = 0;
  for (i0 = 0; i0 < 6; i0++) {
    formatInfoBits1 = $copyBit(this$static, i0, 8, formatInfoBits1);
  }
  formatInfoBits1 = $copyBit(this$static, 7, 8, formatInfoBits1);
  formatInfoBits1 = $copyBit(this$static, 8, 8, formatInfoBits1);
  formatInfoBits1 = $copyBit(this$static, 8, 7, formatInfoBits1);
  for (j0 = 5; j0 >= 0; j0--) {
    formatInfoBits1 = $copyBit(this$static, 8, j0, formatInfoBits1);
  }
  dimension = this$static.bitMatrix.height_0;
  formatInfoBits2 = 0;
  jMin = dimension - 7;
  for (j = dimension - 1; j >= jMin; j--) {
    formatInfoBits2 = $copyBit(this$static, 8, j, formatInfoBits2);
  }
  for (i = dimension - 8; i < dimension; i++) {
    formatInfoBits2 = $copyBit(this$static, i, 8, formatInfoBits2);
  }
  this$static.parsedFormatInfo = decodeFormatInformation(formatInfoBits1, formatInfoBits2);
  if (this$static.parsedFormatInfo) {
    return this$static.parsedFormatInfo;
  }
  throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
}

function $readVersion(this$static){
  var dimension, i, i0, ijMin, j, j0, provisionalVersion, theParsedVersion, versionBits;
  if (this$static.parsedVersion) {
    return this$static.parsedVersion;
  }
  dimension = this$static.bitMatrix.height_0;
  provisionalVersion = ~~((dimension - 17) / 4);
  if (provisionalVersion <= 6) {
    return getVersionForNumber(provisionalVersion);
  }
  versionBits = 0;
  ijMin = dimension - 11;
  for (j0 = 5; j0 >= 0; j0--) {
    for (i0 = dimension - 9; i0 >= ijMin; i0--) {
      versionBits = $copyBit(this$static, i0, j0, versionBits);
    }
  }
  theParsedVersion = decodeVersionInformation(versionBits);
  if (!!theParsedVersion && 17 + 4 * theParsedVersion.versionNumber == dimension) {
    this$static.parsedVersion = theParsedVersion;
    return theParsedVersion;
  }
  versionBits = 0;
  for (i = 5; i >= 0; i--) {
    for (j = dimension - 9; j >= ijMin; j--) {
      versionBits = $copyBit(this$static, i, j, versionBits);
    }
  }
  theParsedVersion = decodeVersionInformation(versionBits);
  if (!!theParsedVersion && 17 + 4 * theParsedVersion.versionNumber == dimension) {
    this$static.parsedVersion = theParsedVersion;
    return theParsedVersion;
  }
  throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
}

function $remask(this$static){
  var dataMask, dimension;
  if (!this$static.parsedFormatInfo) {
    return;
  }
  dataMask = ($clinit_DataMask() , initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_DataMask_2_classLit, 1), $intern_19, 14, 0, [DATA_MASK_000, DATA_MASK_001, DATA_MASK_010, DATA_MASK_011, DATA_MASK_100, DATA_MASK_101, DATA_MASK_110, DATA_MASK_111]))[this$static.parsedFormatInfo.dataMask];
  dimension = this$static.bitMatrix.height_0;
  $unmaskBitMatrix(dataMask, this$static.bitMatrix, dimension);
}

function BitMatrixParser(bitMatrix){
  var dimension;
  dimension = bitMatrix.height_0;
  if (dimension < 21 || (dimension & 3) != 1) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  this.bitMatrix = bitMatrix;
}

defineClass(133, 1, {}, BitMatrixParser);
_.mirror = false;
var Lcom_google_zxing_qrcode_decoder_BitMatrixParser_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'BitMatrixParser', 133);
function DataBlock(numDataCodewords, codewords){
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
}

function getDataBlocks(rawCodewords, version, ecLevel){
  var ecBlock, ecBlock$index, ecBlock$index0, ecBlock$max, ecBlock$max0, ecBlockArray, ecBlocks, i, i0, i1, iOffset, j, j0, j1, longerBlocksStartAt, max_0, numBlockCodewords, numCodewords, numDataCodewords, numResultBlocks, rawCodewordsOffset, result, shorterBlocksNumDataCodewords, shorterBlocksTotalCodewords, totalBlocks;
  if (rawCodewords.length != version.totalCodewords) {
    throw new IllegalArgumentException;
  }
  ecBlocks = version.ecBlocks[ecLevel.ordinal];
  totalBlocks = 0;
  ecBlockArray = ecBlocks.ecBlocks;
  for (ecBlock$index0 = 0 , ecBlock$max0 = ecBlockArray.length; ecBlock$index0 < ecBlock$max0; ++ecBlock$index0) {
    ecBlock = ecBlockArray[ecBlock$index0];
    totalBlocks += ecBlock.count;
  }
  result = initDim(Lcom_google_zxing_qrcode_decoder_DataBlock_2_classLit, $intern_2, 65, totalBlocks, 0, 1);
  numResultBlocks = 0;
  for (ecBlock$index = 0 , ecBlock$max = ecBlockArray.length; ecBlock$index < ecBlock$max; ++ecBlock$index) {
    ecBlock = ecBlockArray[ecBlock$index];
    for (i0 = 0; i0 < ecBlock.count; i0++) {
      numDataCodewords = ecBlock.dataCodewords;
      numBlockCodewords = ecBlocks.ecCodewordsPerBlock + numDataCodewords;
      result[numResultBlocks++] = new DataBlock(numDataCodewords, initDim(B_classLit, $intern_18, 0, numBlockCodewords, 7, 1));
    }
  }
  shorterBlocksTotalCodewords = result[0].codewords.length;
  longerBlocksStartAt = result.length - 1;
  while (longerBlocksStartAt >= 0) {
    numCodewords = result[longerBlocksStartAt].codewords.length;
    if (numCodewords == shorterBlocksTotalCodewords) {
      break;
    }
    --longerBlocksStartAt;
  }
  ++longerBlocksStartAt;
  shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ecCodewordsPerBlock;
  rawCodewordsOffset = 0;
  for (i1 = 0; i1 < shorterBlocksNumDataCodewords; i1++) {
    for (j0 = 0; j0 < numResultBlocks; j0++) {
      result[j0].codewords[i1] = rawCodewords[rawCodewordsOffset++];
    }
  }
  for (j1 = longerBlocksStartAt; j1 < numResultBlocks; j1++) {
    result[j1].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
  }
  max_0 = result[0].codewords.length;
  for (i = shorterBlocksNumDataCodewords; i < max_0; i++) {
    for (j = 0; j < numResultBlocks; j++) {
      iOffset = j < longerBlocksStartAt?i:i + 1;
      result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
    }
  }
  return result;
}

defineClass(65, 1, {65:1}, DataBlock);
_.numDataCodewords = 0;
var Lcom_google_zxing_qrcode_decoder_DataBlock_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'DataBlock', 65);
function $clinit_DataMask(){
  $clinit_DataMask = emptyMethod;
  DATA_MASK_000 = new DataMask$1;
  DATA_MASK_001 = new DataMask$2;
  DATA_MASK_010 = new DataMask$3;
  DATA_MASK_011 = new DataMask$4;
  DATA_MASK_100 = new DataMask$5;
  DATA_MASK_101 = new DataMask$6;
  DATA_MASK_110 = new DataMask$7;
  DATA_MASK_111 = new DataMask$8;
}

function $unmaskBitMatrix(this$static, bits, dimension){
  var i, j;
  for (i = 0; i < dimension; i++) {
    for (j = 0; j < dimension; j++) {
      this$static.isMasked(i, j) && $flip(bits, j, i);
    }
  }
}

function DataMask(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_DataMask();
  return initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_DataMask_2_classLit, 1), $intern_19, 14, 0, [DATA_MASK_000, DATA_MASK_001, DATA_MASK_010, DATA_MASK_011, DATA_MASK_100, DATA_MASK_101, DATA_MASK_110, DATA_MASK_111]);
}

defineClass(14, 13, $intern_21);
var DATA_MASK_000, DATA_MASK_001, DATA_MASK_010, DATA_MASK_011, DATA_MASK_100, DATA_MASK_101, DATA_MASK_110, DATA_MASK_111;
var Lcom_google_zxing_qrcode_decoder_DataMask_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask', 14, values_2);
function DataMask$1(){
  DataMask.call(this, 'DATA_MASK_000', 0);
}

defineClass(142, 14, $intern_21, DataMask$1);
_.isMasked = function isMasked(i, j){
  return (i + j & 1) == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$1_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/1', 142, null);
function DataMask$2(){
  DataMask.call(this, 'DATA_MASK_001', 1);
}

defineClass(143, 14, $intern_21, DataMask$2);
_.isMasked = function isMasked_0(i, j){
  return (i & 1) == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$2_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/2', 143, null);
function DataMask$3(){
  DataMask.call(this, 'DATA_MASK_010', 2);
}

defineClass(144, 14, $intern_21, DataMask$3);
_.isMasked = function isMasked_1(i, j){
  return j % 3 == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$3_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/3', 144, null);
function DataMask$4(){
  DataMask.call(this, 'DATA_MASK_011', 3);
}

defineClass(145, 14, $intern_21, DataMask$4);
_.isMasked = function isMasked_2(i, j){
  return (i + j) % 3 == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$4_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/4', 145, null);
function DataMask$5(){
  DataMask.call(this, 'DATA_MASK_100', 4);
}

defineClass(146, 14, $intern_21, DataMask$5);
_.isMasked = function isMasked_3(i, j){
  return (~~(i / 2) + ~~(j / 3) & 1) == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$5_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/5', 146, null);
function DataMask$6(){
  DataMask.call(this, 'DATA_MASK_101', 5);
}

defineClass(147, 14, $intern_21, DataMask$6);
_.isMasked = function isMasked_4(i, j){
  var temp;
  temp = i * j;
  return (temp & 1) + temp % 3 == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$6_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/6', 147, null);
function DataMask$7(){
  DataMask.call(this, 'DATA_MASK_110', 6);
}

defineClass(148, 14, $intern_21, DataMask$7);
_.isMasked = function isMasked_5(i, j){
  var temp;
  temp = i * j;
  return ((temp & 1) + temp % 3 & 1) == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$7_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/7', 148, null);
function DataMask$8(){
  DataMask.call(this, 'DATA_MASK_111', 7);
}

defineClass(149, 14, $intern_21, DataMask$8);
_.isMasked = function isMasked_6(i, j){
  return ((i + j & 1) + i * j % 3 & 1) == 0;
}
;
var Lcom_google_zxing_qrcode_decoder_DataMask$8_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'DataMask/8', 149, null);
function $clinit_DecodedBitStreamParser(){
  var charArr;
  $clinit_DecodedBitStreamParser = emptyMethod;
  ALPHANUMERIC_CHARS = (charArr = initDim(C_classLit, $intern_18, 0, 45, 7, 1) , $getChars(charArr, 0) , charArr);
}

function decode(bytes, version, ecLevel){
  $clinit_DecodedBitStreamParser();
  var bits, byteSegments, count, countHanzi, currentCharacterSetECI, fc1InEffect, mode, parityData, result, subset, symbolSequence, value_0;
  bits = new BitSource(bytes);
  result = new StringBuilder;
  byteSegments = new ArrayList_0(1);
  symbolSequence = -1;
  parityData = -1;
  try {
    currentCharacterSetECI = null;
    fc1InEffect = false;
    do {
      8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 4?(mode = ($clinit_Mode() , TERMINATOR)):(mode = forBits_0($readBits(bits, 4)));
      if (mode != ($clinit_Mode() , TERMINATOR)) {
        if (mode == FNC1_FIRST_POSITION || mode == FNC1_SECOND_POSITION) {
          fc1InEffect = true;
        }
         else if (mode == STRUCTURED_APPEND) {
          if (8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 16) {
            throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
          }
          symbolSequence = $readBits(bits, 8);
          parityData = $readBits(bits, 8);
        }
         else if (mode == ECI) {
          value_0 = parseECIValue(bits);
          currentCharacterSetECI = getCharacterSetECIByValue(value_0);
          if (!currentCharacterSetECI) {
            throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
          }
        }
         else {
          if (mode == HANZI) {
            subset = $readBits(bits, 4);
            countHanzi = $readBits(bits, $getCharacterCountBits(mode, version));
            subset == 1 && decodeHanziSegment(bits, result, countHanzi);
          }
           else {
            count = $readBits(bits, $getCharacterCountBits(mode, version));
            if (mode == NUMERIC) {
              decodeNumericSegment(bits, result, count);
            }
             else if (mode == ALPHANUMERIC) {
              decodeAlphanumericSegment(bits, result, count, fc1InEffect);
            }
             else if (mode == BYTE) {
              decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments);
            }
             else if (mode == KANJI) {
              decodeKanjiSegment(bits, result, count);
            }
             else {
              throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
            }
          }
        }
      }
    }
     while (mode != ($clinit_Mode() , TERMINATOR));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 12)) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
     else 
      throw unwrap($e0);
  }
  return new DecoderResult(result.string, byteSegments.array.length == 0?null:byteSegments, !ecLevel?null:ecLevel.name_0 != null?ecLevel.name_0:'' + ecLevel.ordinal, symbolSequence, parityData);
}

function decodeAlphanumericSegment(bits, result, count, fc1InEffect){
  var i, nextTwoCharsBits, start_0;
  start_0 = result.string.length;
  while (count > 1) {
    if (8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 11) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    nextTwoCharsBits = $readBits(bits, 11);
    $append(result, toAlphaNumericChar(~~(nextTwoCharsBits / 45)));
    $append(result, toAlphaNumericChar(nextTwoCharsBits % 45));
    count -= 2;
  }
  if (count == 1) {
    if (8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 6) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    $append(result, toAlphaNumericChar($readBits(bits, 6)));
  }
  if (fc1InEffect) {
    for (i = start_0; i < result.string.length; i++) {
      $charAt(result.string, i) == 37 && (i < result.string.length - 1 && $charAt(result.string, i + 1) == 37?(result.string = __substr(result.string, 0, i + 1) + '' + $substring(result.string, i + 1 + 1) , result):(result.string = __substr(result.string, 0, i) + '\35' + $substring(result.string, i + 1)));
    }
  }
}

function decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments){
  var encoding, i, readBytes;
  if (8 * count > 8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  readBytes = initDim(B_classLit, $intern_18, 0, count, 7, 1);
  for (i = 0; i < count; i++) {
    readBytes[i] = narrow_byte($readBits(bits, 8));
  }
  !currentCharacterSetECI?(encoding = guessEncoding(readBytes)):(encoding = currentCharacterSetECI.name_0 != null?currentCharacterSetECI.name_0:'' + currentCharacterSetECI.ordinal);
  try {
    $append_2(result, _String(readBytes, readBytes.length, encoding));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 51)) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
     else 
      throw unwrap($e0);
  }
  setCheck(byteSegments.array, byteSegments.array.length, readBytes);
}

function decodeHanziSegment(bits, result, count){
  var assembledTwoBytes, buffer, offset, twoBytes;
  if (count * 13 > 8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  buffer = initDim(B_classLit, $intern_18, 0, 2 * count, 7, 1);
  offset = 0;
  while (count > 0) {
    twoBytes = $readBits(bits, 13);
    assembledTwoBytes = ~~(twoBytes / 96) << 8 | twoBytes % 96;
    assembledTwoBytes < 959?(assembledTwoBytes += 41377):(assembledTwoBytes += 42657);
    buffer[offset] = narrow_byte(assembledTwoBytes >> 8 & 255);
    buffer[offset + 1] = narrow_byte(assembledTwoBytes & 255);
    offset += 2;
    --count;
  }
  try {
    $append_2(result, _String(buffer, buffer.length, 'GB2312'));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 51)) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
     else 
      throw unwrap($e0);
  }
}

function decodeKanjiSegment(bits, result, count){
  var assembledTwoBytes, buffer, offset, twoBytes;
  if (count * 13 > 8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  buffer = initDim(B_classLit, $intern_18, 0, 2 * count, 7, 1);
  offset = 0;
  while (count > 0) {
    twoBytes = $readBits(bits, 13);
    assembledTwoBytes = ~~(twoBytes / 192) << 8 | twoBytes % 192;
    assembledTwoBytes < 7936?(assembledTwoBytes += 33088):(assembledTwoBytes += 49472);
    buffer[offset] = narrow_byte(assembledTwoBytes >> 8);
    buffer[offset + 1] = narrow_byte(assembledTwoBytes);
    offset += 2;
    --count;
  }
  try {
    $append_2(result, _String(buffer, buffer.length, 'Shift_JIS'));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 51)) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
     else 
      throw unwrap($e0);
  }
}

function decodeNumericSegment(bits, result, count){
  var digitBits, threeDigitsBits, twoDigitsBits;
  while (count >= 3) {
    if (8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 10) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    threeDigitsBits = $readBits(bits, 10);
    if (threeDigitsBits >= 1000) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    $append(result, toAlphaNumericChar(~~(threeDigitsBits / 100)));
    $append(result, toAlphaNumericChar(~~(threeDigitsBits / 10) % 10));
    $append(result, toAlphaNumericChar(threeDigitsBits % 10));
    count -= 3;
  }
  if (count == 2) {
    if (8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 7) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    twoDigitsBits = $readBits(bits, 7);
    if (twoDigitsBits >= 100) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    $append(result, toAlphaNumericChar(~~(twoDigitsBits / 10)));
    $append(result, toAlphaNumericChar(twoDigitsBits % 10));
  }
   else if (count == 1) {
    if (8 * (bits.bytes.length - bits.byteOffset) - bits.bitOffset < 4) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    digitBits = $readBits(bits, 4);
    if (digitBits >= 10) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
    $append(result, toAlphaNumericChar(digitBits));
  }
}

function parseECIValue(bits){
  var firstByte, secondByte, secondThirdBytes;
  firstByte = $readBits(bits, 8);
  if ((firstByte & 128) == 0) {
    return firstByte & 127;
  }
  if ((firstByte & 192) == 128) {
    secondByte = $readBits(bits, 8);
    return (firstByte & 63) << 8 | secondByte;
  }
  if ((firstByte & 224) == 192) {
    secondThirdBytes = $readBits(bits, 16);
    return (firstByte & 31) << 16 | secondThirdBytes;
  }
  throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
}

function toAlphaNumericChar(value_0){
  if (value_0 >= ALPHANUMERIC_CHARS.length) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  return ALPHANUMERIC_CHARS[value_0];
}

var ALPHANUMERIC_CHARS;
function $correctErrors(this$static, codewordBytes, numDataCodewords){
  var codewordsInts, i, i0, numCodewords, numECCodewords;
  numCodewords = codewordBytes.length;
  codewordsInts = initDim(I_classLit, $intern_20, 0, numCodewords, 7, 1);
  for (i0 = 0; i0 < numCodewords; i0++) {
    codewordsInts[i0] = codewordBytes[i0] & 255;
  }
  numECCodewords = codewordBytes.length - numDataCodewords;
  try {
    $decode(this$static.rsDecoder, codewordsInts, numECCodewords);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 45)) {
      throw $clinit_ChecksumException() , $clinit_ChecksumException() , INSTANCE_0;
    }
     else 
      throw unwrap($e0);
  }
  for (i = 0; i < numDataCodewords; i++) {
    codewordBytes[i] = narrow_byte(codewordsInts[i]);
  }
}

function $decode_1(this$static, bits){
  var ce, e, fe, parser, result;
  parser = new BitMatrixParser(bits);
  fe = null;
  ce = null;
  try {
    return $decode_2(this$static, parser);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 56)) {
      e = $e0;
      fe = e;
    }
     else if (instanceOf($e0, 55)) {
      e = $e0;
      ce = e;
    }
     else 
      throw unwrap($e0);
  }
  try {
    $remask(parser);
    parser.parsedVersion = null;
    parser.parsedFormatInfo = null;
    parser.mirror = true;
    $readVersion(parser);
    $readFormatInformation(parser);
    $mirror(parser);
    result = $decode_2(this$static, parser);
    $setOther(result, new QRCodeDecoderMetaData);
    return result;
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 56) || instanceOf($e1, 55)) {
      e = $e1;
      if (fe) {
        throw fe;
      }
      if (ce) {
        throw ce;
      }
      throw e;
    }
     else 
      throw unwrap($e1);
  }
}

function $decode_2(this$static, parser){
  var codewordBytes, codewords, dataBlock, dataBlock$index, dataBlock$index0, dataBlock$max, dataBlock$max0, dataBlocks, ecLevel, i, numDataCodewords, resultBytes, resultOffset, totalBytes, version;
  version = $readVersion(parser);
  ecLevel = $readFormatInformation(parser).errorCorrectionLevel;
  codewords = $readCodewords(parser);
  dataBlocks = getDataBlocks(codewords, version, ecLevel);
  totalBytes = 0;
  for (dataBlock$index0 = 0 , dataBlock$max0 = dataBlocks.length; dataBlock$index0 < dataBlock$max0; ++dataBlock$index0) {
    dataBlock = dataBlocks[dataBlock$index0];
    totalBytes += dataBlock.numDataCodewords;
  }
  resultBytes = initDim(B_classLit, $intern_18, 0, totalBytes, 7, 1);
  resultOffset = 0;
  for (dataBlock$index = 0 , dataBlock$max = dataBlocks.length; dataBlock$index < dataBlock$max; ++dataBlock$index) {
    dataBlock = dataBlocks[dataBlock$index];
    codewordBytes = dataBlock.codewords;
    numDataCodewords = dataBlock.numDataCodewords;
    $correctErrors(this$static, codewordBytes, numDataCodewords);
    for (i = 0; i < numDataCodewords; i++) {
      resultBytes[resultOffset++] = codewordBytes[i];
    }
  }
  return decode(resultBytes, version, ecLevel);
}

function Decoder(){
  this.rsDecoder = new ReedSolomonDecoder(($clinit_GenericGF() , QR_CODE_FIELD_256));
}

defineClass(122, 1, {}, Decoder);
var Lcom_google_zxing_qrcode_decoder_Decoder_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'Decoder', 122);
function $clinit_ErrorCorrectionLevel(){
  $clinit_ErrorCorrectionLevel = emptyMethod;
  L = new ErrorCorrectionLevel('L', 0);
  M = new ErrorCorrectionLevel('M', 1);
  Q = new ErrorCorrectionLevel('Q', 2);
  H = new ErrorCorrectionLevel('H', 3);
  FOR_BITS = initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_ErrorCorrectionLevel_2_classLit, 1), $intern_19, 39, 0, [M, L, H, Q]);
}

function ErrorCorrectionLevel(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function forBits(bits){
  $clinit_ErrorCorrectionLevel();
  if (bits < 0 || bits >= FOR_BITS.length) {
    throw new IllegalArgumentException;
  }
  return FOR_BITS[bits];
}

function values_3(){
  $clinit_ErrorCorrectionLevel();
  return initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_ErrorCorrectionLevel_2_classLit, 1), $intern_19, 39, 0, [L, M, Q, H]);
}

defineClass(39, 13, {39:1, 3:1, 19:1, 13:1}, ErrorCorrectionLevel);
var FOR_BITS, H, L, M, Q;
var Lcom_google_zxing_qrcode_decoder_ErrorCorrectionLevel_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'ErrorCorrectionLevel', 39, values_3);
function $clinit_FormatInformation(){
  $clinit_FormatInformation = emptyMethod;
  FORMAT_INFO_DECODE_LOOKUP = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [21522, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [20773, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [24188, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [23371, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [17913, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [16590, 5]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [20375, 6]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [19104, 7]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [30660, 8]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [29427, 9]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [32170, 10]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [30877, 11]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [26159, 12]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [25368, 13]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [27713, 14]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [26998, 15]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [5769, 16]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [5054, 17]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [7399, 18]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6608, 19]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [1890, 20]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [597, 21]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [3340, 22]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [2107, 23]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [13663, 24]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [12392, 25]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [16177, 26]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [14854, 27]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [9396, 28]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [8579, 29]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [11994, 30]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [11245, 31])]);
}

function FormatInformation(formatInfo){
  this.errorCorrectionLevel = forBits(formatInfo >> 3 & 3);
  this.dataMask = narrow_byte(formatInfo & 7);
}

function decodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2){
  $clinit_FormatInformation();
  var formatInfo;
  formatInfo = doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
  if (formatInfo) {
    return formatInfo;
  }
  return doDecodeFormatInformation(maskedFormatInfo1 ^ 21522, maskedFormatInfo2 ^ 21522);
}

function doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2){
  var bestDifference, bestFormatInfo, bitsDifference, decodeInfo, decodeInfo$array, decodeInfo$index, decodeInfo$max, targetInfo;
  bestDifference = $intern_0;
  bestFormatInfo = 0;
  for (decodeInfo$array = FORMAT_INFO_DECODE_LOOKUP , decodeInfo$index = 0 , decodeInfo$max = decodeInfo$array.length; decodeInfo$index < decodeInfo$max; ++decodeInfo$index) {
    decodeInfo = decodeInfo$array[decodeInfo$index];
    targetInfo = decodeInfo[0];
    if (targetInfo == maskedFormatInfo1 || targetInfo == maskedFormatInfo2) {
      return new FormatInformation(decodeInfo[1]);
    }
    bitsDifference = bitCount(maskedFormatInfo1 ^ targetInfo);
    if (bitsDifference < bestDifference) {
      bestFormatInfo = decodeInfo[1];
      bestDifference = bitsDifference;
    }
    if (maskedFormatInfo1 != maskedFormatInfo2) {
      bitsDifference = bitCount(maskedFormatInfo2 ^ targetInfo);
      if (bitsDifference < bestDifference) {
        bestFormatInfo = decodeInfo[1];
        bestDifference = bitsDifference;
      }
    }
  }
  if (bestDifference <= 3) {
    return new FormatInformation(bestFormatInfo);
  }
  return null;
}

defineClass(49, 1, {49:1}, FormatInformation);
_.equals$ = function equals_3(o){
  var other;
  if (!instanceOf(o, 49)) {
    return false;
  }
  other = dynamicCast(o, 49);
  return this.errorCorrectionLevel == other.errorCorrectionLevel && this.dataMask == other.dataMask;
}
;
_.hashCode$ = function hashCode_4(){
  return this.errorCorrectionLevel.ordinal << 3 | this.dataMask;
}
;
_.dataMask = 0;
var FORMAT_INFO_DECODE_LOOKUP;
var Lcom_google_zxing_qrcode_decoder_FormatInformation_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'FormatInformation', 49);
function $clinit_Mode(){
  $clinit_Mode = emptyMethod;
  TERMINATOR = new Mode('TERMINATOR', 0, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0, 0, 0]));
  NUMERIC = new Mode('NUMERIC', 1, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [10, 12, 14]));
  ALPHANUMERIC = new Mode('ALPHANUMERIC', 2, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [9, 11, 13]));
  STRUCTURED_APPEND = new Mode('STRUCTURED_APPEND', 3, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0, 0, 0]));
  BYTE = new Mode('BYTE', 4, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [8, 16, 16]));
  ECI = new Mode('ECI', 5, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0, 0, 0]));
  KANJI = new Mode('KANJI', 6, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [8, 10, 12]));
  FNC1_FIRST_POSITION = new Mode('FNC1_FIRST_POSITION', 7, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0, 0, 0]));
  FNC1_SECOND_POSITION = new Mode('FNC1_SECOND_POSITION', 8, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [0, 0, 0]));
  HANZI = new Mode('HANZI', 9, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [8, 10, 12]));
}

function $getCharacterCountBits(this$static, version){
  var number, offset;
  number = version.versionNumber;
  number <= 9?(offset = 0):number <= 26?(offset = 1):(offset = 2);
  return this$static.characterCountBitsForVersions[offset];
}

function Mode(enum$name, enum$ordinal, characterCountBitsForVersions){
  Enum.call(this, enum$name, enum$ordinal);
  this.characterCountBitsForVersions = characterCountBitsForVersions;
}

function forBits_0(bits){
  $clinit_Mode();
  switch (bits) {
    case 0:
      return TERMINATOR;
    case 1:
      return NUMERIC;
    case 2:
      return ALPHANUMERIC;
    case 3:
      return STRUCTURED_APPEND;
    case 4:
      return BYTE;
    case 5:
      return FNC1_FIRST_POSITION;
    case 7:
      return ECI;
    case 8:
      return KANJI;
    case 9:
      return FNC1_SECOND_POSITION;
    case 13:
      return HANZI;
    default:throw new IllegalArgumentException;
  }
}

function values_4(){
  $clinit_Mode();
  return initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Mode_2_classLit, 1), $intern_19, 23, 0, [TERMINATOR, NUMERIC, ALPHANUMERIC, STRUCTURED_APPEND, BYTE, ECI, KANJI, FNC1_FIRST_POSITION, FNC1_SECOND_POSITION, HANZI]);
}

defineClass(23, 13, {23:1, 3:1, 19:1, 13:1}, Mode);
var ALPHANUMERIC, BYTE, ECI, FNC1_FIRST_POSITION, FNC1_SECOND_POSITION, HANZI, KANJI, NUMERIC, STRUCTURED_APPEND, TERMINATOR;
var Lcom_google_zxing_qrcode_decoder_Mode_2_classLit = createForEnum('com.google.zxing.qrcode.decoder', 'Mode', 23, values_4);
function $applyMirroredCorrection(this$static, points){
  var bottomLeft;
  if (!this$static.mirrored || points == null || points.length < 3) {
    return;
  }
  bottomLeft = points[0];
  setCheck(points, 0, points[2]);
  setCheck(points, 2, bottomLeft);
}

function QRCodeDecoderMetaData(){
  this.mirrored = true;
}

defineClass(132, 1, {}, QRCodeDecoderMetaData);
_.mirrored = false;
var Lcom_google_zxing_qrcode_decoder_QRCodeDecoderMetaData_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'QRCodeDecoderMetaData', 132);
function $clinit_Version(){
  $clinit_Version = emptyMethod;
  VERSION_DECODE_INFO = initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]);
  VERSIONS = initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version_2_classLit, 1), $intern_2, 9, 0, [new Version(1, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, []), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(7, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 19)])), new Version$ECBlocks(10, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 16)])), new Version$ECBlocks(13, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 13)])), new Version$ECBlocks(17, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 9)]))])), new Version(2, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 18]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(10, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 34)])), new Version$ECBlocks(16, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 28)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 22)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 16)]))])), new Version(3, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 22]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(15, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 55)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 44)])), new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 17)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 13)]))])), new Version(4, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(20, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 80)])), new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 32)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 24)])), new Version$ECBlocks(16, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 9)]))])), new Version(5, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 108)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 43)])), new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 15), new Version$ECB(2, 16)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 11), new Version$ECB(2, 12)]))])), new Version(6, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 34]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 68)])), new Version$ECBlocks(16, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 27)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 19)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 15)]))])), new Version(7, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 22, 38]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(20, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 78)])), new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 31)])), new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 14), new Version$ECB(4, 15)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 13), new Version$ECB(1, 14)]))])), new Version(8, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 24, 42]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 97)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 38), new Version$ECB(2, 39)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 18), new Version$ECB(2, 19)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 14), new Version$ECB(2, 15)]))])), new Version(9, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 46]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 116)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 36), new Version$ECB(2, 37)])), new Version$ECBlocks(20, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 16), new Version$ECB(4, 17)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 12), new Version$ECB(4, 13)]))])), new Version(10, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 28, 50]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(18, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 68), new Version$ECB(2, 69)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 43), new Version$ECB(1, 44)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 19), new Version$ECB(2, 20)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 15), new Version$ECB(2, 16)]))])), new Version(11, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 54]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(20, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 81)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 50), new Version$ECB(4, 51)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 22), new Version$ECB(4, 23)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 12), new Version$ECB(8, 13)]))])), new Version(12, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 32, 58]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 92), new Version$ECB(2, 93)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 36), new Version$ECB(2, 37)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 20), new Version$ECB(6, 21)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(7, 14), new Version$ECB(4, 15)]))])), new Version(13, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 34, 62]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 107)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(8, 37), new Version$ECB(1, 38)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(8, 20), new Version$ECB(4, 21)])), new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(12, 11), new Version$ECB(4, 12)]))])), new Version(14, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 46, 66]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 115), new Version$ECB(1, 116)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 40), new Version$ECB(5, 41)])), new Version$ECBlocks(20, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 16), new Version$ECB(5, 17)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 12), new Version$ECB(5, 13)]))])), new Version(15, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 48, 70]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(22, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(5, 87), new Version$ECB(1, 88)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(5, 41), new Version$ECB(5, 42)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(5, 24), new Version$ECB(7, 25)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 12), new Version$ECB(7, 13)]))])), new Version(16, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 50, 74]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(5, 98), new Version$ECB(1, 99)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(7, 45), new Version$ECB(3, 46)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(15, 19), new Version$ECB(2, 20)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 15), new Version$ECB(13, 16)]))])), new Version(17, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 54, 78]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 107), new Version$ECB(5, 108)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(10, 46), new Version$ECB(1, 47)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 22), new Version$ECB(15, 23)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 14), new Version$ECB(17, 15)]))])), new Version(18, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 56, 82]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(5, 120), new Version$ECB(1, 121)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(9, 43), new Version$ECB(4, 44)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 22), new Version$ECB(1, 23)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 14), new Version$ECB(19, 15)]))])), new Version(19, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 58, 86]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 113), new Version$ECB(4, 114)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 44), new Version$ECB(11, 45)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 21), new Version$ECB(4, 22)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(9, 13), new Version$ECB(16, 14)]))])), new Version(20, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 34, 62, 90]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 107), new Version$ECB(5, 108)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 41), new Version$ECB(13, 42)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(15, 24), new Version$ECB(5, 25)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(15, 15), new Version$ECB(10, 16)]))])), new Version(21, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 28, 50, 72, 94]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 116), new Version$ECB(4, 117)])), new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 42)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 22), new Version$ECB(6, 23)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(19, 16), new Version$ECB(6, 17)]))])), new Version(22, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 50, 74, 98]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 111), new Version$ECB(7, 112)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 46)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(7, 24), new Version$ECB(16, 25)])), new Version$ECBlocks(24, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(34, 13)]))])), new Version(23, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 54, 78, 102]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 121), new Version$ECB(5, 122)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 47), new Version$ECB(14, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 24), new Version$ECB(14, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(16, 15), new Version$ECB(14, 16)]))])), new Version(24, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 28, 54, 80, 106]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 117), new Version$ECB(4, 118)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 45), new Version$ECB(14, 46)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 24), new Version$ECB(16, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(30, 16), new Version$ECB(2, 17)]))])), new Version(25, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 32, 58, 84, 110]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(26, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(8, 106), new Version$ECB(4, 107)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(8, 47), new Version$ECB(13, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(7, 24), new Version$ECB(22, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(22, 15), new Version$ECB(13, 16)]))])), new Version(26, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 58, 86, 114]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(10, 114), new Version$ECB(2, 115)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(19, 46), new Version$ECB(4, 47)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(28, 22), new Version$ECB(6, 23)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(33, 16), new Version$ECB(4, 17)]))])), new Version(27, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 34, 62, 90, 118]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(8, 122), new Version$ECB(4, 123)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(22, 45), new Version$ECB(3, 46)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(8, 23), new Version$ECB(26, 24)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(12, 15), new Version$ECB(28, 16)]))])), new Version(28, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 50, 74, 98, 122]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 117), new Version$ECB(10, 118)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(3, 45), new Version$ECB(23, 46)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 24), new Version$ECB(31, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 15), new Version$ECB(31, 16)]))])), new Version(29, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 54, 78, 102, 126]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(7, 116), new Version$ECB(7, 117)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(21, 45), new Version$ECB(7, 46)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(1, 23), new Version$ECB(37, 24)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(19, 15), new Version$ECB(26, 16)]))])), new Version(30, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 52, 78, 104, 130]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(5, 115), new Version$ECB(10, 116)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(19, 47), new Version$ECB(10, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(15, 24), new Version$ECB(25, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(23, 15), new Version$ECB(25, 16)]))])), new Version(31, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 56, 82, 108, 134]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(13, 115), new Version$ECB(3, 116)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 46), new Version$ECB(29, 47)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(42, 24), new Version$ECB(1, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(23, 15), new Version$ECB(28, 16)]))])), new Version(32, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 34, 60, 86, 112, 138]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 115)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(10, 46), new Version$ECB(23, 47)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(10, 24), new Version$ECB(35, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(19, 15), new Version$ECB(35, 16)]))])), new Version(33, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 58, 86, 114, 142]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 115), new Version$ECB(1, 116)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(14, 46), new Version$ECB(21, 47)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(29, 24), new Version$ECB(19, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(11, 15), new Version$ECB(46, 16)]))])), new Version(34, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 34, 62, 90, 118, 146]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(13, 115), new Version$ECB(6, 116)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(14, 46), new Version$ECB(23, 47)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(44, 24), new Version$ECB(7, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(59, 16), new Version$ECB(1, 17)]))])), new Version(35, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 54, 78, 102, 126, 150]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(12, 121), new Version$ECB(7, 122)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(12, 47), new Version$ECB(26, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(39, 24), new Version$ECB(14, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(22, 15), new Version$ECB(41, 16)]))])), new Version(36, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 24, 50, 76, 102, 128, 154]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 121), new Version$ECB(14, 122)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(6, 47), new Version$ECB(34, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(46, 24), new Version$ECB(10, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(2, 15), new Version$ECB(64, 16)]))])), new Version(37, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 28, 54, 80, 106, 132, 158]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(17, 122), new Version$ECB(4, 123)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(29, 46), new Version$ECB(14, 47)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(49, 24), new Version$ECB(10, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(24, 15), new Version$ECB(46, 16)]))])), new Version(38, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 32, 58, 84, 110, 136, 162]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(4, 122), new Version$ECB(18, 123)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(13, 46), new Version$ECB(32, 47)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(48, 24), new Version$ECB(14, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(42, 15), new Version$ECB(32, 16)]))])), new Version(39, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 26, 54, 82, 110, 138, 166]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(20, 117), new Version$ECB(4, 118)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(40, 47), new Version$ECB(7, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(43, 24), new Version$ECB(22, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(10, 15), new Version$ECB(67, 16)]))])), new Version(40, initValues(getClassLiteralForArray(I_classLit, 1), $intern_20, 0, 7, [6, 30, 58, 86, 114, 142, 170]), initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit, 1), $intern_2, 6, 0, [new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(19, 118), new Version$ECB(6, 119)])), new Version$ECBlocks(28, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(18, 47), new Version$ECB(31, 48)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(34, 24), new Version$ECB(34, 25)])), new Version$ECBlocks(30, initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit, 1), $intern_2, 4, 0, [new Version$ECB(20, 15), new Version$ECB(61, 16)]))]))]);
}

function $buildFunctionPattern(this$static){
  var bitMatrix, dimension, i, max_0, x_0, y_0;
  dimension = 17 + 4 * this$static.versionNumber;
  bitMatrix = new BitMatrix(dimension);
  $setRegion(bitMatrix, 0, 0, 9, 9);
  $setRegion(bitMatrix, dimension - 8, 0, 8, 9);
  $setRegion(bitMatrix, 0, dimension - 8, 9, 8);
  max_0 = this$static.alignmentPatternCenters.length;
  for (x_0 = 0; x_0 < max_0; x_0++) {
    i = this$static.alignmentPatternCenters[x_0] - 2;
    for (y_0 = 0; y_0 < max_0; y_0++) {
      if (x_0 == 0 && (y_0 == 0 || y_0 == max_0 - 1) || x_0 == max_0 - 1 && y_0 == 0) {
        continue;
      }
      $setRegion(bitMatrix, this$static.alignmentPatternCenters[y_0] - 2, i, 5, 5);
    }
  }
  $setRegion(bitMatrix, 6, 9, 1, dimension - 17);
  $setRegion(bitMatrix, 9, 6, dimension - 17, 1);
  if (this$static.versionNumber > 6) {
    $setRegion(bitMatrix, dimension - 11, 0, 3, 6);
    $setRegion(bitMatrix, 0, dimension - 11, 6, 3);
  }
  return bitMatrix;
}

function Version(versionNumber, alignmentPatternCenters, ecBlocks){
  var ecBlock, ecBlock$index, ecBlock$max, ecCodewords, ecbArray, total;
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  this.ecBlocks = ecBlocks;
  total = 0;
  ecCodewords = ecBlocks[0].ecCodewordsPerBlock;
  ecbArray = ecBlocks[0].ecBlocks;
  for (ecBlock$index = 0 , ecBlock$max = ecbArray.length; ecBlock$index < ecBlock$max; ++ecBlock$index) {
    ecBlock = ecbArray[ecBlock$index];
    total += ecBlock.count * (ecBlock.dataCodewords + ecCodewords);
  }
  this.totalCodewords = total;
}

function decodeVersionInformation(versionBits){
  $clinit_Version();
  var bestDifference, bestVersion, bitsDifference, i, targetVersion;
  bestDifference = $intern_0;
  bestVersion = 0;
  for (i = 0; i < VERSION_DECODE_INFO.length; i++) {
    targetVersion = VERSION_DECODE_INFO[i];
    if (targetVersion == versionBits) {
      return getVersionForNumber(i + 7);
    }
    bitsDifference = ($clinit_FormatInformation() , bitCount(versionBits ^ targetVersion));
    if (bitsDifference < bestDifference) {
      bestVersion = i + 7;
      bestDifference = bitsDifference;
    }
  }
  if (bestDifference <= 3) {
    return getVersionForNumber(bestVersion);
  }
  return null;
}

function getProvisionalVersionForDimension(dimension){
  $clinit_Version();
  if (dimension % 4 != 1) {
    throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
  }
  try {
    return getVersionForNumber(~~((dimension - 17) / 4));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 12)) {
      throw $clinit_FormatException() , $clinit_FormatException() , INSTANCE_1;
    }
     else 
      throw unwrap($e0);
  }
}

function getVersionForNumber(versionNumber){
  $clinit_Version();
  if (versionNumber < 1 || versionNumber > 40) {
    throw new IllegalArgumentException;
  }
  return VERSIONS[versionNumber - 1];
}

defineClass(9, 1, {9:1}, Version);
_.toString$ = function toString_11(){
  return '' + this.versionNumber;
}
;
_.totalCodewords = 0;
_.versionNumber = 0;
var VERSIONS, VERSION_DECODE_INFO;
var Lcom_google_zxing_qrcode_decoder_Version_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'Version', 9);
function Version$ECB(count, dataCodewords){
  this.count = count;
  this.dataCodewords = dataCodewords;
}

defineClass(4, 1, {4:1}, Version$ECB);
_.count = 0;
_.dataCodewords = 0;
var Lcom_google_zxing_qrcode_decoder_Version$ECB_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'Version/ECB', 4);
function Version$ECBlocks(ecCodewordsPerBlock, ecBlocks){
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  this.ecBlocks = ecBlocks;
}

defineClass(6, 1, {6:1}, Version$ECBlocks);
_.ecCodewordsPerBlock = 0;
var Lcom_google_zxing_qrcode_decoder_Version$ECBlocks_2_classLit = createForClass('com.google.zxing.qrcode.decoder', 'Version/ECBlocks', 6);
function $aboutEquals(this$static, moduleSize, i, j){
  var moduleSizeDiff;
  if (abs_0(i - this$static.y_0) <= moduleSize && abs_0(j - this$static.x_0) <= moduleSize) {
    moduleSizeDiff = abs_0(moduleSize - this$static.estimatedModuleSize);
    return moduleSizeDiff <= 1 || moduleSizeDiff <= this$static.estimatedModuleSize;
  }
  return false;
}

function AlignmentPattern(posX, posY, estimatedModuleSize){
  ResultPoint.call(this, posX, posY);
  this.estimatedModuleSize = estimatedModuleSize;
}

defineClass(50, 29, {29:1, 50:1}, AlignmentPattern);
_.estimatedModuleSize = 0;
var Lcom_google_zxing_qrcode_detector_AlignmentPattern_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'AlignmentPattern', 50);
function $crossCheckVertical(this$static, startI, centerJ, maxCount, originalStateCountTotal){
  var i, image, maxI, stateCount, stateCountTotal;
  image = this$static.image;
  maxI = image.height_0;
  stateCount = this$static.crossCheckStateCount;
  stateCount[0] = 0;
  stateCount[1] = 0;
  stateCount[2] = 0;
  i = startI;
  while (i >= 0 && $get(image, centerJ, i) && stateCount[1] <= maxCount) {
    ++stateCount[1];
    --i;
  }
  if (i < 0 || stateCount[1] > maxCount) {
    return NaN;
  }
  while (i >= 0 && !$get(image, centerJ, i) && stateCount[0] <= maxCount) {
    ++stateCount[0];
    --i;
  }
  if (stateCount[0] > maxCount) {
    return NaN;
  }
  i = startI + 1;
  while (i < maxI && $get(image, centerJ, i) && stateCount[1] <= maxCount) {
    ++stateCount[1];
    ++i;
  }
  if (i == maxI || stateCount[1] > maxCount) {
    return NaN;
  }
  while (i < maxI && !$get(image, centerJ, i) && stateCount[2] <= maxCount) {
    ++stateCount[2];
    ++i;
  }
  if (stateCount[2] > maxCount) {
    return NaN;
  }
  stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
  if (5 * (stateCountTotal - originalStateCountTotal < 0?-(stateCountTotal - originalStateCountTotal):stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
    return NaN;
  }
  return $foundPatternCross(this$static, stateCount)?i - stateCount[2] - stateCount[1] / 2:NaN;
}

function $find(this$static){
  var confirmed, currentState, height, i, iGen, j, maxJ, middleI, startX, stateCount;
  startX = this$static.startX;
  height = this$static.height_0;
  maxJ = startX + this$static.width_0;
  middleI = this$static.startY + ~~(height / 2);
  stateCount = initDim(I_classLit, $intern_20, 0, 3, 7, 1);
  for (iGen = 0; iGen < height; iGen++) {
    i = middleI + ((iGen & 1) == 0?~~((iGen + 1) / 2):-~~((iGen + 1) / 2));
    stateCount[0] = 0;
    stateCount[1] = 0;
    stateCount[2] = 0;
    j = startX;
    while (j < maxJ && !$get(this$static.image, j, i)) {
      ++j;
    }
    currentState = 0;
    while (j < maxJ) {
      if ($get(this$static.image, j, i)) {
        if (currentState == 1) {
          ++stateCount[1];
        }
         else {
          if (currentState == 2) {
            if ($foundPatternCross(this$static, stateCount)) {
              confirmed = $handlePossibleCenter(this$static, stateCount, i, j);
              if (confirmed) {
                return confirmed;
              }
            }
            stateCount[0] = stateCount[2];
            stateCount[1] = 1;
            stateCount[2] = 0;
            currentState = 1;
          }
           else {
            ++stateCount[++currentState];
          }
        }
      }
       else {
        currentState == 1 && ++currentState;
        ++stateCount[currentState];
      }
      ++j;
    }
    if ($foundPatternCross(this$static, stateCount)) {
      confirmed = $handlePossibleCenter(this$static, stateCount, i, maxJ);
      if (confirmed) {
        return confirmed;
      }
    }
  }
  if (this$static.possibleCenters.array.length != 0) {
    return dynamicCast($get_1(this$static.possibleCenters, 0), 50);
  }
  throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
}

function $foundPatternCross(this$static, stateCount){
  var i, maxVariance, moduleSize;
  moduleSize = this$static.moduleSize;
  maxVariance = moduleSize / 2;
  for (i = 0; i < 3; i++) {
    if (abs_0(moduleSize - stateCount[i]) >= maxVariance) {
      return false;
    }
  }
  return true;
}

function $handlePossibleCenter(this$static, stateCount, i, j){
  var center, center$iterator, centerI, centerJ, estimatedModuleSize, point, stateCountTotal, combinedX, combinedY, combinedModuleSize;
  stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
  centerJ = j - stateCount[2] - stateCount[1] / 2;
  centerI = $crossCheckVertical(this$static, i, round_int(centerJ), 2 * stateCount[1], stateCountTotal);
  if (!isNaN(centerI)) {
    estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3;
    for (center$iterator = new AbstractList$IteratorImpl(this$static.possibleCenters); center$iterator.i < center$iterator.this$01.size_1();) {
      center = (checkCriticalElement(center$iterator.i < center$iterator.this$01.size_1()) , dynamicCast(center$iterator.this$01.get_1(center$iterator.last = center$iterator.i++), 50));
      if ($aboutEquals(center, estimatedModuleSize, centerI, centerJ)) {
        return combinedX = (center.x_0 + centerJ) / 2 , combinedY = (center.y_0 + centerI) / 2 , combinedModuleSize = (center.estimatedModuleSize + estimatedModuleSize) / 2 , new AlignmentPattern(combinedX, combinedY, combinedModuleSize);
      }
    }
    point = new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
    $add_2(this$static.possibleCenters, point);
  }
  return null;
}

function AlignmentPatternFinder(image, startX, startY, width_0, height, moduleSize){
  this.image = image;
  this.possibleCenters = new ArrayList_0(5);
  this.startX = startX;
  this.startY = startY;
  this.width_0 = width_0;
  this.height_0 = height;
  this.moduleSize = moduleSize;
  this.crossCheckStateCount = initDim(I_classLit, $intern_20, 0, 3, 7, 1);
}

defineClass(151, 1, {}, AlignmentPatternFinder);
_.height_0 = 0;
_.moduleSize = 0;
_.startX = 0;
_.startY = 0;
_.width_0 = 0;
var Lcom_google_zxing_qrcode_detector_AlignmentPatternFinder_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'AlignmentPatternFinder', 151);
function $calculateModuleSizeOneWay(this$static, pattern, otherPattern){
  var moduleSizeEst1, moduleSizeEst2;
  moduleSizeEst1 = $sizeOfBlackWhiteBlackRunBothWays(this$static, round_int(pattern.x_0), round_int(pattern.y_0), round_int(otherPattern.x_0), round_int(otherPattern.y_0));
  moduleSizeEst2 = $sizeOfBlackWhiteBlackRunBothWays(this$static, round_int(otherPattern.x_0), round_int(otherPattern.y_0), round_int(pattern.x_0), round_int(pattern.y_0));
  if (isNaN(moduleSizeEst1)) {
    return moduleSizeEst2 / 7;
  }
  if (isNaN(moduleSizeEst2)) {
    return moduleSizeEst1 / 7;
  }
  return (moduleSizeEst1 + moduleSizeEst2) / 14;
}

function $detect(this$static){
  var finder, info;
  finder = new FinderPatternFinder(this$static.image);
  info = $find_0(finder);
  return $processFinderPatternInfo(this$static, info);
}

function $findAlignmentInRegion(this$static, overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor){
  var alignmentAreaBottomY, alignmentAreaLeftX, alignmentAreaRightX, alignmentAreaTopY, alignmentFinder, allowance;
  allowance = round_int(allowanceFactor * overallEstModuleSize);
  alignmentAreaLeftX = 0 > estAlignmentX - allowance?0:estAlignmentX - allowance;
  alignmentAreaRightX = min_1(this$static.image.width_0 - 1, estAlignmentX + allowance);
  if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
    throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  alignmentAreaTopY = 0 > estAlignmentY - allowance?0:estAlignmentY - allowance;
  alignmentAreaBottomY = min_1(this$static.image.height_0 - 1, estAlignmentY + allowance);
  if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
    throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  alignmentFinder = new AlignmentPatternFinder(this$static.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize);
  return $find(alignmentFinder);
}

function $processFinderPatternInfo(this$static, info){
  var alignmentPattern, bits, bottomLeft, bottomRightX, bottomRightY, correctionToTopLeft, dimension, estAlignmentX, estAlignmentY, i, moduleSize, modulesBetweenFPCenters, points, provisionalVersion, topLeft, topRight, transform;
  topLeft = info.topLeft;
  topRight = info.topRight;
  bottomLeft = info.bottomLeft;
  moduleSize = ($calculateModuleSizeOneWay(this$static, topLeft, topRight) + $calculateModuleSizeOneWay(this$static, topLeft, bottomLeft)) / 2;
  if (moduleSize < 1) {
    throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  dimension = computeDimension(topLeft, topRight, bottomLeft, moduleSize);
  provisionalVersion = getProvisionalVersionForDimension(dimension);
  modulesBetweenFPCenters = 17 + 4 * provisionalVersion.versionNumber - 7;
  alignmentPattern = null;
  if (provisionalVersion.alignmentPatternCenters.length > 0) {
    bottomRightX = topRight.x_0 - topLeft.x_0 + bottomLeft.x_0;
    bottomRightY = topRight.y_0 - topLeft.y_0 + bottomLeft.y_0;
    correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
    estAlignmentX = round_int(topLeft.x_0 + correctionToTopLeft * (bottomRightX - topLeft.x_0));
    estAlignmentY = round_int(topLeft.y_0 + correctionToTopLeft * (bottomRightY - topLeft.y_0));
    for (i = 4; i <= 16; i <<= 1) {
      try {
        alignmentPattern = $findAlignmentInRegion(this$static, moduleSize, estAlignmentX, estAlignmentY, i);
        break;
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 54))
          throw unwrap($e0);
      }
    }
  }
  transform = createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
  bits = sampleGrid(this$static.image, transform, dimension);
  !alignmentPattern?(points = initValues(getClassLiteralForArray(Lcom_google_zxing_ResultPoint_2_classLit, 1), $intern_2, 29, 0, [bottomLeft, topLeft, topRight])):(points = initValues(getClassLiteralForArray(Lcom_google_zxing_ResultPoint_2_classLit, 1), $intern_2, 29, 0, [bottomLeft, topLeft, topRight, alignmentPattern]));
  return new DetectorResult(bits, points);
}

function $sizeOfBlackWhiteBlackRun(this$static, fromX, fromY, toX, toY){
  var dx, dy, error, realX, realY, state, steep, temp, x_0, xLimit, xstep, y_0, ystep;
  steep = (toY - fromY < 0?-(toY - fromY):toY - fromY) > (toX - fromX < 0?-(toX - fromX):toX - fromX);
  if (steep) {
    temp = fromX;
    fromX = fromY;
    fromY = temp;
    temp = toX;
    toX = toY;
    toY = temp;
  }
  dx = toX - fromX < 0?-(toX - fromX):toX - fromX;
  dy = toY - fromY < 0?-(toY - fromY):toY - fromY;
  error = ~~(-dx / 2);
  xstep = fromX < toX?1:-1;
  ystep = fromY < toY?1:-1;
  state = 0;
  xLimit = toX + xstep;
  for (x_0 = fromX , y_0 = fromY; x_0 != xLimit; x_0 += xstep) {
    realX = steep?y_0:x_0;
    realY = steep?x_0:y_0;
    if (state == 1 == $get(this$static.image, realX, realY)) {
      if (state == 2) {
        return distance_1(x_0, y_0, fromX, fromY);
      }
      ++state;
    }
    error += dy;
    if (error > 0) {
      if (y_0 == toY) {
        break;
      }
      y_0 += ystep;
      error -= dx;
    }
  }
  if (state == 2) {
    return distance_1(toX + xstep, toY, fromX, fromY);
  }
  return NaN;
}

function $sizeOfBlackWhiteBlackRunBothWays(this$static, fromX, fromY, toX, toY){
  var otherToX, otherToY, result, scale;
  result = $sizeOfBlackWhiteBlackRun(this$static, fromX, fromY, toX, toY);
  scale = 1;
  otherToX = fromX - (toX - fromX);
  if (otherToX < 0) {
    scale = fromX / (fromX - otherToX);
    otherToX = 0;
  }
   else if (otherToX >= this$static.image.width_0) {
    scale = (this$static.image.width_0 - 1 - fromX) / (otherToX - fromX);
    otherToX = this$static.image.width_0 - 1;
  }
  otherToY = round_int(fromY - (toY - fromY) * scale);
  scale = 1;
  if (otherToY < 0) {
    scale = fromY / (fromY - otherToY);
    otherToY = 0;
  }
   else if (otherToY >= this$static.image.height_0) {
    scale = (this$static.image.height_0 - 1 - fromY) / (otherToY - fromY);
    otherToY = this$static.image.height_0 - 1;
  }
  otherToX = round_int(fromX + (otherToX - fromX) * scale);
  result += $sizeOfBlackWhiteBlackRun(this$static, fromX, fromY, otherToX, otherToY);
  return result - 1;
}

function Detector(image){
  this.image = image;
}

function computeDimension(topLeft, topRight, bottomLeft, moduleSize){
  var dimension, tlblCentersDimension, tltrCentersDimension;
  tltrCentersDimension = round_0(distance_0(topLeft.x_0, topLeft.y_0, topRight.x_0, topRight.y_0) / moduleSize);
  tlblCentersDimension = round_0(distance_0(topLeft.x_0, topLeft.y_0, bottomLeft.x_0, bottomLeft.y_0) / moduleSize);
  dimension = ~~((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
  switch (dimension & 3) {
    case 0:
      ++dimension;
      break;
    case 2:
      --dimension;
      break;
    case 3:
      throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  return dimension;
}

function createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension){
  var bottomRightX, bottomRightY, dimMinusThree, sourceBottomRightX, sourceBottomRightY;
  dimMinusThree = dimension - 3.5;
  if (alignmentPattern) {
    bottomRightX = alignmentPattern.x_0;
    bottomRightY = alignmentPattern.y_0;
    sourceBottomRightX = dimMinusThree - 3;
    sourceBottomRightY = sourceBottomRightX;
  }
   else {
    bottomRightX = topRight.x_0 - topLeft.x_0 + bottomLeft.x_0;
    bottomRightY = topRight.y_0 - topLeft.y_0 + bottomLeft.y_0;
    sourceBottomRightX = dimMinusThree;
    sourceBottomRightY = dimMinusThree;
  }
  return quadrilateralToQuadrilateral(dimMinusThree, sourceBottomRightX, sourceBottomRightY, dimMinusThree, topLeft.x_0, topLeft.y_0, topRight.x_0, topRight.y_0, bottomRightX, bottomRightY, bottomLeft.x_0, bottomLeft.y_0);
}

function sampleGrid(image, transform, dimension){
  return $sampleGrid(image, dimension, dimension, transform);
}

defineClass(131, 1, {}, Detector);
var Lcom_google_zxing_qrcode_detector_Detector_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'Detector', 131);
function $aboutEquals_0(this$static, moduleSize, i, j){
  var moduleSizeDiff;
  if (abs_0(i - this$static.y_0) <= moduleSize && abs_0(j - this$static.x_0) <= moduleSize) {
    moduleSizeDiff = abs_0(moduleSize - this$static.estimatedModuleSize);
    return moduleSizeDiff <= 1 || moduleSizeDiff <= this$static.estimatedModuleSize;
  }
  return false;
}

function FinderPattern(posX, posY, estimatedModuleSize){
  FinderPattern_0.call(this, posX, posY, estimatedModuleSize, 1);
}

function FinderPattern_0(posX, posY, estimatedModuleSize, count){
  ResultPoint.call(this, posX, posY);
  this.estimatedModuleSize = estimatedModuleSize;
  this.count = count;
}

defineClass(16, 29, {29:1, 16:1}, FinderPattern, FinderPattern_0);
_.count = 0;
_.estimatedModuleSize = 0;
var Lcom_google_zxing_qrcode_detector_FinderPattern_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'FinderPattern', 16);
function $crossCheckDiagonal(this$static, startI, centerJ, maxCount, originalStateCountTotal){
  var i, maxI, maxJ, stateCount, stateCountTotal;
  stateCount = (this$static.crossCheckStateCount[0] = 0 , this$static.crossCheckStateCount[1] = 0 , this$static.crossCheckStateCount[2] = 0 , this$static.crossCheckStateCount[3] = 0 , this$static.crossCheckStateCount[4] = 0 , this$static.crossCheckStateCount);
  i = 0;
  while (startI >= i && centerJ >= i && $get(this$static.image, centerJ - i, startI - i)) {
    ++stateCount[2];
    ++i;
  }
  if (startI < i || centerJ < i) {
    return false;
  }
  while (startI >= i && centerJ >= i && !$get(this$static.image, centerJ - i, startI - i) && stateCount[1] <= maxCount) {
    ++stateCount[1];
    ++i;
  }
  if (startI < i || centerJ < i || stateCount[1] > maxCount) {
    return false;
  }
  while (startI >= i && centerJ >= i && $get(this$static.image, centerJ - i, startI - i) && stateCount[0] <= maxCount) {
    ++stateCount[0];
    ++i;
  }
  if (stateCount[0] > maxCount) {
    return false;
  }
  maxI = this$static.image.height_0;
  maxJ = this$static.image.width_0;
  i = 1;
  while (startI + i < maxI && centerJ + i < maxJ && $get(this$static.image, centerJ + i, startI + i)) {
    ++stateCount[2];
    ++i;
  }
  if (startI + i >= maxI || centerJ + i >= maxJ) {
    return false;
  }
  while (startI + i < maxI && centerJ + i < maxJ && !$get(this$static.image, centerJ + i, startI + i) && stateCount[3] < maxCount) {
    ++stateCount[3];
    ++i;
  }
  if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
    return false;
  }
  while (startI + i < maxI && centerJ + i < maxJ && $get(this$static.image, centerJ + i, startI + i) && stateCount[4] < maxCount) {
    ++stateCount[4];
    ++i;
  }
  if (stateCount[4] >= maxCount) {
    return false;
  }
  stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  return (stateCountTotal - originalStateCountTotal < 0?-(stateCountTotal - originalStateCountTotal):stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal && foundPatternCross(stateCount);
}

function $crossCheckHorizontal(this$static, startJ, centerI, maxCount, originalStateCountTotal){
  var image, j, maxJ, stateCount, stateCountTotal;
  image = this$static.image;
  maxJ = image.width_0;
  stateCount = (this$static.crossCheckStateCount[0] = 0 , this$static.crossCheckStateCount[1] = 0 , this$static.crossCheckStateCount[2] = 0 , this$static.crossCheckStateCount[3] = 0 , this$static.crossCheckStateCount[4] = 0 , this$static.crossCheckStateCount);
  j = startJ;
  while (j >= 0 && $get(image, j, centerI)) {
    ++stateCount[2];
    --j;
  }
  if (j < 0) {
    return NaN;
  }
  while (j >= 0 && !$get(image, j, centerI) && stateCount[1] <= maxCount) {
    ++stateCount[1];
    --j;
  }
  if (j < 0 || stateCount[1] > maxCount) {
    return NaN;
  }
  while (j >= 0 && $get(image, j, centerI) && stateCount[0] <= maxCount) {
    ++stateCount[0];
    --j;
  }
  if (stateCount[0] > maxCount) {
    return NaN;
  }
  j = startJ + 1;
  while (j < maxJ && $get(image, j, centerI)) {
    ++stateCount[2];
    ++j;
  }
  if (j == maxJ) {
    return NaN;
  }
  while (j < maxJ && !$get(image, j, centerI) && stateCount[3] < maxCount) {
    ++stateCount[3];
    ++j;
  }
  if (j == maxJ || stateCount[3] >= maxCount) {
    return NaN;
  }
  while (j < maxJ && $get(image, j, centerI) && stateCount[4] < maxCount) {
    ++stateCount[4];
    ++j;
  }
  if (stateCount[4] >= maxCount) {
    return NaN;
  }
  stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  if (5 * (stateCountTotal - originalStateCountTotal < 0?-(stateCountTotal - originalStateCountTotal):stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
    return NaN;
  }
  return foundPatternCross(stateCount)?j - stateCount[4] - stateCount[3] - stateCount[2] / 2:NaN;
}

function $crossCheckVertical_0(this$static, startI, centerJ, maxCount, originalStateCountTotal){
  var i, image, maxI, stateCount, stateCountTotal;
  image = this$static.image;
  maxI = image.height_0;
  stateCount = (this$static.crossCheckStateCount[0] = 0 , this$static.crossCheckStateCount[1] = 0 , this$static.crossCheckStateCount[2] = 0 , this$static.crossCheckStateCount[3] = 0 , this$static.crossCheckStateCount[4] = 0 , this$static.crossCheckStateCount);
  i = startI;
  while (i >= 0 && $get(image, centerJ, i)) {
    ++stateCount[2];
    --i;
  }
  if (i < 0) {
    return NaN;
  }
  while (i >= 0 && !$get(image, centerJ, i) && stateCount[1] <= maxCount) {
    ++stateCount[1];
    --i;
  }
  if (i < 0 || stateCount[1] > maxCount) {
    return NaN;
  }
  while (i >= 0 && $get(image, centerJ, i) && stateCount[0] <= maxCount) {
    ++stateCount[0];
    --i;
  }
  if (stateCount[0] > maxCount) {
    return NaN;
  }
  i = startI + 1;
  while (i < maxI && $get(image, centerJ, i)) {
    ++stateCount[2];
    ++i;
  }
  if (i == maxI) {
    return NaN;
  }
  while (i < maxI && !$get(image, centerJ, i) && stateCount[3] < maxCount) {
    ++stateCount[3];
    ++i;
  }
  if (i == maxI || stateCount[3] >= maxCount) {
    return NaN;
  }
  while (i < maxI && $get(image, centerJ, i) && stateCount[4] < maxCount) {
    ++stateCount[4];
    ++i;
  }
  if (stateCount[4] >= maxCount) {
    return NaN;
  }
  stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  if (5 * (stateCountTotal - originalStateCountTotal < 0?-(stateCountTotal - originalStateCountTotal):stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
    return NaN;
  }
  return foundPatternCross(stateCount)?i - stateCount[4] - stateCount[3] - stateCount[2] / 2:NaN;
}

function $find_0(this$static){
  var confirmed, currentState, done, i, iSkip, j, maxI, maxJ, patternInfo, rowSkip, stateCount;
  maxI = this$static.image.height_0;
  maxJ = this$static.image.width_0;
  iSkip = ~~(3 * maxI / 228);
  iSkip < 3 && (iSkip = 3);
  done = false;
  stateCount = initDim(I_classLit, $intern_20, 0, 5, 7, 1);
  for (i = iSkip - 1; i < maxI && !done; i += iSkip) {
    stateCount[0] = 0;
    stateCount[1] = 0;
    stateCount[2] = 0;
    stateCount[3] = 0;
    stateCount[4] = 0;
    currentState = 0;
    for (j = 0; j < maxJ; j++) {
      if ($get(this$static.image, j, i)) {
        (currentState & 1) == 1 && ++currentState;
        ++stateCount[currentState];
      }
       else {
        if ((currentState & 1) == 0) {
          if (currentState == 4) {
            if (foundPatternCross(stateCount)) {
              confirmed = $handlePossibleCenter_0(this$static, stateCount, i, j, false);
              if (confirmed) {
                iSkip = 2;
                if (this$static.hasSkipped) {
                  done = $haveMultiplyConfirmedCenters(this$static);
                }
                 else {
                  rowSkip = $findRowSkip(this$static);
                  if (rowSkip > stateCount[2]) {
                    i += rowSkip - stateCount[2] - 2;
                    j = maxJ - 1;
                  }
                }
              }
               else {
                stateCount[0] = stateCount[2];
                stateCount[1] = stateCount[3];
                stateCount[2] = stateCount[4];
                stateCount[3] = 1;
                stateCount[4] = 0;
                currentState = 3;
                continue;
              }
              currentState = 0;
              stateCount[0] = 0;
              stateCount[1] = 0;
              stateCount[2] = 0;
              stateCount[3] = 0;
              stateCount[4] = 0;
            }
             else {
              stateCount[0] = stateCount[2];
              stateCount[1] = stateCount[3];
              stateCount[2] = stateCount[4];
              stateCount[3] = 1;
              stateCount[4] = 0;
              currentState = 3;
            }
          }
           else {
            ++stateCount[++currentState];
          }
        }
         else {
          ++stateCount[currentState];
        }
      }
    }
    if (foundPatternCross(stateCount)) {
      confirmed = $handlePossibleCenter_0(this$static, stateCount, i, maxJ, false);
      if (confirmed) {
        iSkip = stateCount[0];
        this$static.hasSkipped && (done = $haveMultiplyConfirmedCenters(this$static));
      }
    }
  }
  patternInfo = $selectBestPatterns(this$static);
  orderBestPatterns(patternInfo);
  return new FinderPatternInfo(patternInfo);
}

function $findRowSkip(this$static){
  var center, center$iterator, firstConfirmedCenter, max_0;
  max_0 = this$static.possibleCenters.array.length;
  if (max_0 <= 1) {
    return 0;
  }
  firstConfirmedCenter = null;
  for (center$iterator = new AbstractList$IteratorImpl(this$static.possibleCenters); center$iterator.i < center$iterator.this$01.size_1();) {
    center = (checkCriticalElement(center$iterator.i < center$iterator.this$01.size_1()) , dynamicCast(center$iterator.this$01.get_1(center$iterator.last = center$iterator.i++), 16));
    if (center.count >= 2) {
      if (!firstConfirmedCenter) {
        firstConfirmedCenter = center;
      }
       else {
        this$static.hasSkipped = true;
        return ~~(round_int(abs_0(firstConfirmedCenter.x_0 - center.x_0) - abs_0(firstConfirmedCenter.y_0 - center.y_0)) / 2);
      }
    }
  }
  return 0;
}

function $handlePossibleCenter_0(this$static, stateCount, i, j, pureBarcode){
  var center, centerI, centerJ, estimatedModuleSize, found, index_0, point, stateCountTotal, combinedCount, combinedX, combinedY, combinedModuleSize;
  stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  centerJ = j - stateCount[4] - stateCount[3] - stateCount[2] / 2;
  centerI = $crossCheckVertical_0(this$static, i, round_int(centerJ), stateCount[2], stateCountTotal);
  if (!isNaN(centerI)) {
    centerJ = $crossCheckHorizontal(this$static, round_int(centerJ), round_int(centerI), stateCount[2], stateCountTotal);
    if (!isNaN(centerJ) && (!pureBarcode || $crossCheckDiagonal(this$static, round_int(centerI), round_int(centerJ), stateCount[2], stateCountTotal))) {
      estimatedModuleSize = stateCountTotal / 7;
      found = false;
      for (index_0 = 0; index_0 < this$static.possibleCenters.array.length; index_0++) {
        center = dynamicCast($get_1(this$static.possibleCenters, index_0), 16);
        if ($aboutEquals_0(center, estimatedModuleSize, centerI, centerJ)) {
          $set_1(this$static.possibleCenters, index_0, (combinedCount = center.count + 1 , combinedX = (center.count * center.x_0 + centerJ) / combinedCount , combinedY = (center.count * center.y_0 + centerI) / combinedCount , combinedModuleSize = (center.count * center.estimatedModuleSize + estimatedModuleSize) / combinedCount , new FinderPattern_0(combinedX, combinedY, combinedModuleSize, combinedCount)));
          found = true;
          break;
        }
      }
      if (!found) {
        point = new FinderPattern(centerJ, centerI, estimatedModuleSize);
        $add_2(this$static.possibleCenters, point);
      }
      return true;
    }
  }
  return false;
}

function $haveMultiplyConfirmedCenters(this$static){
  var average, confirmedCount, max_0, pattern, pattern$iterator, pattern$iterator0, totalDeviation, totalModuleSize;
  confirmedCount = 0;
  totalModuleSize = 0;
  max_0 = this$static.possibleCenters.array.length;
  for (pattern$iterator0 = new AbstractList$IteratorImpl(this$static.possibleCenters); pattern$iterator0.i < pattern$iterator0.this$01.size_1();) {
    pattern = (checkCriticalElement(pattern$iterator0.i < pattern$iterator0.this$01.size_1()) , dynamicCast(pattern$iterator0.this$01.get_1(pattern$iterator0.last = pattern$iterator0.i++), 16));
    if (pattern.count >= 2) {
      ++confirmedCount;
      totalModuleSize += pattern.estimatedModuleSize;
    }
  }
  if (confirmedCount < 3) {
    return false;
  }
  average = totalModuleSize / max_0;
  totalDeviation = 0;
  for (pattern$iterator = new AbstractList$IteratorImpl(this$static.possibleCenters); pattern$iterator.i < pattern$iterator.this$01.size_1();) {
    pattern = (checkCriticalElement(pattern$iterator.i < pattern$iterator.this$01.size_1()) , dynamicCast(pattern$iterator.this$01.get_1(pattern$iterator.last = pattern$iterator.i++), 16));
    totalDeviation += abs_0(pattern.estimatedModuleSize - average);
  }
  return totalDeviation <= 0.05000000074505806 * totalModuleSize;
}

function $selectBestPatterns(this$static){
  var average, center, center$iterator, i, limit, pattern, possibleCenter, possibleCenter$iterator, size_0, square, startSize, stdDev, totalModuleSize;
  startSize = this$static.possibleCenters.array.length;
  if (startSize < 3) {
    throw $clinit_NotFoundException() , $clinit_NotFoundException() , INSTANCE_2;
  }
  if (startSize > 3) {
    totalModuleSize = 0;
    square = 0;
    for (center$iterator = new AbstractList$IteratorImpl(this$static.possibleCenters); center$iterator.i < center$iterator.this$01.size_1();) {
      center = (checkCriticalElement(center$iterator.i < center$iterator.this$01.size_1()) , dynamicCast(center$iterator.this$01.get_1(center$iterator.last = center$iterator.i++), 16));
      size_0 = center.estimatedModuleSize;
      totalModuleSize += size_0;
      square += size_0 * size_0;
    }
    average = totalModuleSize / startSize;
    stdDev = Math.sqrt(square / startSize - average * average);
    sort_0(this$static.possibleCenters, new FinderPatternFinder$FurthestFromAverageComparator(average));
    limit = $intern_22 * average > stdDev?$intern_22 * average:stdDev;
    for (i = 0; i < this$static.possibleCenters.array.length && this$static.possibleCenters.array.length > 3; i++) {
      pattern = dynamicCast($get_1(this$static.possibleCenters, i), 16);
      if (abs_0(pattern.estimatedModuleSize - average) > limit) {
        this$static.possibleCenters.remove(i);
        --i;
      }
    }
  }
  if (this$static.possibleCenters.array.length > 3) {
    totalModuleSize = 0;
    for (possibleCenter$iterator = new AbstractList$IteratorImpl(this$static.possibleCenters); possibleCenter$iterator.i < possibleCenter$iterator.this$01.size_1();) {
      possibleCenter = (checkCriticalElement(possibleCenter$iterator.i < possibleCenter$iterator.this$01.size_1()) , dynamicCast(possibleCenter$iterator.this$01.get_1(possibleCenter$iterator.last = possibleCenter$iterator.i++), 16));
      totalModuleSize += possibleCenter.estimatedModuleSize;
    }
    average = totalModuleSize / this$static.possibleCenters.array.length;
    sort_0(this$static.possibleCenters, new FinderPatternFinder$CenterComparator(average));
    $clear(new AbstractList$SubList(this$static.possibleCenters, this$static.possibleCenters.array.length));
  }
  return initValues(getClassLiteralForArray(Lcom_google_zxing_qrcode_detector_FinderPattern_2_classLit, 1), $intern_2, 16, 0, [dynamicCast($get_1(this$static.possibleCenters, 0), 16), dynamicCast($get_1(this$static.possibleCenters, 1), 16), dynamicCast($get_1(this$static.possibleCenters, 2), 16)]);
}

function FinderPatternFinder(image){
  this.image = image;
  this.possibleCenters = new ArrayList;
  this.crossCheckStateCount = initDim(I_classLit, $intern_20, 0, 5, 7, 1);
}

function foundPatternCross(stateCount){
  var count, i, maxVariance, moduleSize, totalModuleSize;
  totalModuleSize = 0;
  for (i = 0; i < 5; i++) {
    count = stateCount[i];
    if (count == 0) {
      return false;
    }
    totalModuleSize += count;
  }
  if (totalModuleSize < 7) {
    return false;
  }
  moduleSize = totalModuleSize / 7;
  maxVariance = moduleSize / 2;
  return abs_0(moduleSize - stateCount[0]) < maxVariance && abs_0(moduleSize - stateCount[1]) < maxVariance && abs_0(3 * moduleSize - stateCount[2]) < 3 * maxVariance && abs_0(moduleSize - stateCount[3]) < maxVariance && abs_0(moduleSize - stateCount[4]) < maxVariance;
}

defineClass(134, 1, {}, FinderPatternFinder);
_.hasSkipped = false;
var Lcom_google_zxing_qrcode_detector_FinderPatternFinder_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'FinderPatternFinder', 134);
function $compare(this$static, center1, center2){
  var dA, dB;
  if (center2.count == center1.count) {
    dA = abs_0(center2.estimatedModuleSize - this$static.average);
    dB = abs_0(center1.estimatedModuleSize - this$static.average);
    return dA < dB?1:dA == dB?0:-1;
  }
   else {
    return center2.count - center1.count;
  }
}

function FinderPatternFinder$CenterComparator(f){
  this.average = f;
}

defineClass(136, 1, $intern_18, FinderPatternFinder$CenterComparator);
_.compare = function compare(center1, center2){
  return $compare(this, dynamicCast(center1, 16), dynamicCast(center2, 16));
}
;
_.average = 0;
var Lcom_google_zxing_qrcode_detector_FinderPatternFinder$CenterComparator_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'FinderPatternFinder/CenterComparator', 136);
function $compare_0(this$static, center1, center2){
  var dA, dB;
  dA = abs_0(center2.estimatedModuleSize - this$static.average);
  dB = abs_0(center1.estimatedModuleSize - this$static.average);
  return dA < dB?-1:dA == dB?0:1;
}

function FinderPatternFinder$FurthestFromAverageComparator(f){
  this.average = f;
}

defineClass(135, 1, $intern_18, FinderPatternFinder$FurthestFromAverageComparator);
_.compare = function compare_0(center1, center2){
  return $compare_0(this, dynamicCast(center1, 16), dynamicCast(center2, 16));
}
;
_.average = 0;
var Lcom_google_zxing_qrcode_detector_FinderPatternFinder$FurthestFromAverageComparator_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'FinderPatternFinder/FurthestFromAverageComparator', 135);
function FinderPatternInfo(patternCenters){
  this.bottomLeft = patternCenters[0];
  this.topLeft = patternCenters[1];
  this.topRight = patternCenters[2];
}

defineClass(137, 1, {}, FinderPatternInfo);
var Lcom_google_zxing_qrcode_detector_FinderPatternInfo_2_classLit = createForClass('com.google.zxing.qrcode.detector', 'FinderPatternInfo', 137);
function $getMatrix(this$static){
  var area, height, i, j, matrix, pixelByte, pixelInt, width_0;
  width_0 = this$static.width_0;
  height = this$static.height_0;
  area = width_0 * height;
  matrix = initDim(B_classLit, $intern_18, 0, area, 7, 1);
  for (i = 0; i < width_0; i++)
    for (j = 0; j < height; j++) {
      pixelInt = $getColorAt(this$static.imagedata, this$static.left + i, this$static.top_0 + j, 0);
      pixelByte = narrow_byte(pixelInt);
      matrix[i + j * width_0] = pixelByte;
    }
  return matrix;
}

function $getRow(this$static, y_0, row){
  var i, width_0, yoffset;
  if (y_0 < 0 || y_0 >= this$static.height_0) {
    throw new IllegalArgumentException_0('Requested row is outside the image: ' + y_0);
  }
  width_0 = this$static.width_0;
  (row == null || row.length < width_0) && (row = initDim(B_classLit, $intern_18, 0, width_0, 7, 1));
  yoffset = this$static.top_0 + y_0;
  for (i = 0; i < width_0; i++) {
    row[i] = $getColorAt(this$static.imagedata, this$static.left + i, yoffset, 0) << 24 >> 24;
  }
  return row;
}

function CanvasLuminanceSource(image){
  CanvasLuminanceSource_0.call(this, image, ($clinit_DOM() , image.element).width, image.element.height);
}

function CanvasLuminanceSource_0(aImage, width_0, height){
  var avg, data_0, i, sourceHeight, sourceWidth;
  this.width_0 = width_0;
  this.height_0 = height;
  sourceWidth = ($clinit_DOM() , aImage.element).width;
  sourceHeight = aImage.element.height;
  if (width_0 > sourceWidth || height > sourceHeight) {
    throw new IllegalArgumentException_0('Crop rectangle does not fit within image data.');
  }
  this.image = createIfSupported();
  $setPixelSize(this.image, sourceWidth, sourceHeight);
  $setCoordinateSpaceHeight(this.image, sourceHeight);
  $setCoordinateSpaceWidth(this.image, sourceWidth);
  this.imagedata = $getImageData(aImage.element.getContext('2d'), 0, 0, width_0, height);
  data_0 = this.imagedata.data;
  for (i = 0; i < data_0.length; i += 4) {
    if (((data_0[i + 3] || 0) & 255) == 0) {
      $set(data_0, i, 255);
      $set(data_0, i + 1, 255);
      $set(data_0, i + 2, 255);
      $set(data_0, i + 3, 255);
    }
     else {
      avg = ~~(((data_0[i] || 0) + (data_0[i + 1] || 0) + (data_0[i + 2] || 0)) / 3);
      $set(data_0, i, avg);
      $set(data_0, i + 1, avg);
      $set(data_0, i + 2, avg);
    }
  }
  $putImageData($getContext2d(this.image), this.imagedata, 0, 0);
  this.left = 0;
  this.top_0 = 0;
}

defineClass(78, 125, {}, CanvasLuminanceSource);
_.left = 0;
_.top_0 = 0;
var Lcom_google_zxing_web_CanvasLuminanceSource_2_classLit = createForClass('com.google.zxing.web', 'CanvasLuminanceSource', 78);
function $createSnapImage(this$static){
  var binarizer, h, lsource, snapImage, w;
  w = $getVideoElement(this$static.video).videoWidth;
  h = $getVideoElement(this$static.video).videoHeight;
  if (w > 0 && h > 0) {
    if (this$static.snapImageMaxSize > 0) {
      if (w > h) {
        if (this$static.snapImageMaxSize < w) {
          h = ~~(h * this$static.snapImageMaxSize / w);
          w = this$static.snapImageMaxSize;
        }
      }
       else {
        if (this$static.snapImageMaxSize < h) {
          w = ~~(w * this$static.snapImageMaxSize / h);
          h = this$static.snapImageMaxSize;
        }
      }
    }
    $setCoordinateSpaceWidth(this$static.canvas, w);
    $setCoordinateSpaceHeight(this$static.canvas, h);
    $drawImage($getCanvasElement(this$static.canvas).getContext('2d'), $getMediaElement(this$static.video), 0, 0, w, h);
    lsource = new CanvasLuminanceSource(this$static.canvas);
    binarizer = new HybridBinarizer(lsource);
    snapImage = new BinaryBitmap(binarizer);
    return snapImage;
  }
  return null;
}

function $isScanning(this$static){
  return this$static.active && this$static.attached;
}

function $onAttach_1(this$static){
  var t;
  $onAttach(this$static);
  $setSrc(this$static.video);
  try {
    $setWebcam(($clinit_DOM() , this$static.video.element), this$static);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      t = $e0;
      $reportError(this$static, t.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function $reportError(this$static, msg){
  $onSuccess(this$static.callback, new Result(msg));
}

function $resumeScanning(this$static){
  this$static.active = true;
  this$static.active && this$static.attached && $schedule(this$static.scanTimer, this$static.scanInterval);
}

function $scan(this$static){
  var bitmap, reader, reader$iterator, result;
  if (!(this$static.active && this$static.attached))
    return;
  try {
    bitmap = $createSnapImage(this$static);
    if (bitmap) {
      for (reader$iterator = new AbstractList$IteratorImpl(this$static.readers); reader$iterator.i < reader$iterator.this$01.size_1();) {
        reader = (checkCriticalElement(reader$iterator.i < reader$iterator.this$01.size_1()) , dynamicCast(reader$iterator.this$01.get_1(reader$iterator.last = reader$iterator.i++), 181));
        try {
          result = $decode_0(reader, bitmap);
          $onSuccess(this$static.callback, result);
          return;
        }
         catch ($e0) {
          $e0 = wrap($e0);
          if (!instanceOf($e0, 10))
            throw unwrap($e0);
        }
      }
    }
  }
   finally {
    this$static.active && this$static.attached && $schedule(this$static.scanTimer, this$static.scanInterval);
  }
}

function $setScanInterval(this$static, scanInterval){
  this$static.scanInterval = scanInterval;
}

function $setSnapImageMaxSize(this$static, snapImageMaxSize){
  this$static.snapImageMaxSize = snapImageMaxSize;
}

function $setWebcam(videoElement, scanner){
  function success(stream){
    scanner.videoStream = stream;
    var v = videoElement;
    function removeControls(){
      v.removeAttribute('controls');
    }

    try {
      v.srcObject = stream;
      v.setAttribute('playsinline', true);
      v.setAttribute('controls', true);
      setTimeout(removeControls);
    }
     catch (ex) {
      v.src = $wnd.URL.createObjectURL(stream);
    }
    scanner.videoAttached();
  }

  function error(ex){
    var msg = ex.message;
    scanner.reportError(msg);
  }

  var vsp = scanner.videoStreamProvider;
  if (vsp) {
    vsp().then(success)['catch'](error);
    return;
  }
  var n = $wnd.navigator;
  if (n.mediaDevices && n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia({video:{facingMode:'environment'}, audio:false}).then(success)['catch'](error);
  }
   else {
    var constraints = {audio:false, video:true};
    n.getUserMedia?n.getUserMedia(constraints, success, error):n.webkitGetUserMedia?n.webkitGetUserMedia(constraints, success, error):n.mozGetUserMedia && n.mozGetUserMedia(constraints, success, error);
  }
}

function $stopWebcam(scanner){
  if (scanner.videoStream) {
    var stream = scanner.videoStream;
    stream.stop?stream.stop():stream.getTracks && stream.getTracks().forEach(function(track){
      track.stop();
    }
    );
    scanner.videoStream = null;
  }
}

function ScannerWidget(callback, videoStreamProvider){
  this.children = new WidgetCollection;
  $setElement(this, ($clinit_DOM() , $doc.createElement('div')));
  this.video = createIfSupported_0();
  this.canvas = createIfSupported();
  this.qrReader = new QRCodeReader;
  this.readers = new ArrayList;
  this.scanInterval = 300;
  this.snapImageMaxSize = -1;
  this.active = true;
  this.callback = callback;
  this.videoStreamProvider = videoStreamProvider;
  $add_2(this.readers, this.qrReader);
  this.scanTimer = new ScannerWidget$1(this);
  $add_0(this, this.video);
  $setStyleName(this.video);
  $setAutoplay(this.video);
}

defineClass(104, 75, $intern_1);
_.onAttach = function onAttach_1(){
  $onAttach_1(this);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this);
  $stopWebcam(this);
}
;
_.reportError = function reportError(msg){
  $reportError(this, msg);
}
;
_.videoAttached = function videoAttached(){
  this.active && this.attached && $schedule(this.scanTimer, this.scanInterval);
}
;
_.active = false;
_.scanInterval = 0;
_.snapImageMaxSize = 0;
var Lcom_google_zxing_web_ScannerWidget_2_classLit = createForClass('com.google.zxing.web', 'ScannerWidget', 104);
function ScannerWidget$1(this$0){
  this.this$01 = this$0;
}

defineClass(108, 107, {}, ScannerWidget$1);
var Lcom_google_zxing_web_ScannerWidget$1_2_classLit = createForClass('com.google.zxing.web', 'ScannerWidget/1', 108);
defineClass(153, 10, $intern_4);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 153);
function UnsupportedEncodingException(msg){
  Exception_0.call(this, msg);
}

defineClass(51, 153, {3:1, 51:1, 10:1, 8:1}, UnsupportedEncodingException);
var Ljava_io_UnsupportedEncodingException_2_classLit = createForClass('java.io', 'UnsupportedEncodingException', 51);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(60, 1, {});
_.toString$ = function toString_12(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 60);
function ArithmeticException(){
  RuntimeException.call(this);
}

defineClass(70, 15, $intern_4, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 70);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(46, 15, $intern_4, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 46);
function toChars(codePoint, dst, dstIndex){
  checkCriticalArgument(codePoint >= 0 && codePoint <= 1114111);
  if (codePoint >= $intern_12) {
    dst[dstIndex++] = 55296 + (codePoint - $intern_12 >> 10 & 1023) & $intern_5;
    dst[dstIndex] = 56320 + (codePoint - $intern_12 & 1023) & $intern_5;
    return 2;
  }
   else {
    dst[dstIndex] = codePoint & $intern_5;
    return 1;
  }
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(41, 15, $intern_4, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 41);
defineClass(66, 1, {3:1, 66:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 66);
function $clinit_Double(){
  $clinit_Double = emptyMethod;
  powers = initValues(getClassLiteralForArray(D_classLit, 1), $intern_18, 0, 7, [1.3407807929942597E154, 1.157920892373162E77, 3.4028236692093846E38, 1.8446744073709552E19, 4294967296, $intern_12, 256, 16, 4, 2]);
  invPowers = initValues(getClassLiteralForArray(D_classLit, 1), $intern_18, 0, 7, [7.458340731200207E-155, 8.636168555094445E-78, 2.9387358770557188E-39, 5.421010862427522E-20, 2.3283064365386963E-10, 1.52587890625E-5, 0.00390625, 0.0625, 0.25, 0.5]);
}

function doubleToLongBits(value_0){
  $clinit_Double();
  var bit, exp_0, i, ihi, ilo, negative;
  if (isNaN_0(value_0)) {
    return {l:0, m:0, h:524160};
  }
  negative = false;
  if (value_0 == 0) {
    return 1 / value_0 == -Infinity?{l:0, m:0, h:$intern_11}:{l:0, m:0, h:0};
  }
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  if (!isFinite(value_0) && !isNaN(value_0)) {
    return negative?{l:0, m:0, h:1048320}:{l:0, m:0, h:524032};
  }
  exp_0 = 0;
  if (value_0 < 1) {
    bit = 512;
    for (i = 0; i < 10; ++i , bit >>= 1) {
      if (value_0 < invPowers[i] && exp_0 - bit >= -1023) {
        value_0 *= powers[i];
        exp_0 -= bit;
      }
    }
    if (value_0 < 1 && exp_0 - 1 >= -1023) {
      value_0 *= 2;
      --exp_0;
    }
  }
   else if (value_0 >= 2) {
    bit = 512;
    for (i = 0; i < 10; ++i , bit >>= 1) {
      if (value_0 >= powers[i]) {
        value_0 *= invPowers[i];
        exp_0 += bit;
      }
    }
  }
  exp_0 > -1023?(value_0 -= 1):(value_0 *= 0.5);
  ihi = fromDouble(value_0 * $intern_13);
  value_0 -= toDouble(ihi) * 9.5367431640625E-7;
  ilo = fromDouble(value_0 * 4503599627370496);
  ihi = or(ihi, fromInt(exp_0 + 1023 << 20));
  negative && (ihi = or(ihi, {l:0, m:512, h:0}));
  return or(shl(ihi, 32), ilo);
}

function isNaN_0(x_0){
  $clinit_Double();
  return isNaN(x_0);
}

var invPowers, powers;
function floatToIntBits(value_0){
  var bits, exp_0, l, mantissa, negative;
  if (isNaN(value_0)) {
    return 2143289344;
  }
  if (value_0 == 0) {
    return 1 / value_0 == -Infinity?-2147483648:0;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  if (!isFinite(value_0) && !isNaN(value_0)) {
    return negative?-8388608:2139095040;
  }
  l = doubleToLongBits(value_0);
  exp_0 = toInt(sub_0(and(shr(l, 52), {l:2047, m:0, h:0}), {l:1023, m:0, h:0}));
  mantissa = toInt(shr(and(l, {l:$intern_6, m:$intern_6, h:255}), 29));
  if (exp_0 <= -127) {
    mantissa = ($intern_14 | mantissa) >> -127 - exp_0 + 1;
    exp_0 = -127;
  }
  bits = negative?{l:0, m:512, h:0}:{l:0, m:0, h:0};
  bits = or(bits, fromInt(exp_0 + 127 << 23));
  bits = or(bits, fromInt(mantissa));
  return toInt(bits);
}

function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(12, 15, {3:1, 10:1, 12:1, 8:1}, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 12);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(43, 15, $intern_4, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 43);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(38, 15, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 38);
function $compareTo_0(this$static, b){
  return compare_1(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function bitCount(x_0){
  x_0 -= x_0 >> 1 & 1431655765;
  x_0 = (x_0 >> 2 & 858993459) + (x_0 & 858993459);
  x_0 = (x_0 >> 4) + x_0 & 252645135;
  x_0 += x_0 >> 8;
  x_0 += x_0 >> 16;
  return x_0 & 63;
}

function compare_1(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(36, 66, {3:1, 19:1, 36:1, 66:1}, Integer);
_.compareTo = function compareTo_0(b){
  return $compareTo_0(this, dynamicCast(b, 36));
}
;
_.equals$ = function equals_4(o){
  return instanceOf(o, 36) && dynamicCast(o, 36).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_5(){
  return this.value_0;
}
;
_.toString$ = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 36);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_2, 36, 256, 0, 1);
}

var boxedValues_0;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function min_1(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(71, 15, $intern_4, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 71);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $getChars(dst, dstBegin){
  var srcIdx;
  for (srcIdx = 0; srcIdx < 45; ++srcIdx) {
    dst[dstBegin++] = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'.charCodeAt(srcIdx);
  }
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function _String(bytes, len, charset){
  if ($equalsIgnoreCase('UTF-8', charset)) {
    return utf8ToString(bytes, len);
  }
   else if ($equalsIgnoreCase('ISO-8859-1', charset) || $equalsIgnoreCase('ISO-LATIN-1', charset)) {
    return latin1ToString(bytes, len);
  }
   else {
    throw new UnsupportedEncodingException('Charset ' + charset + ' not supported');
  }
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_2, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function compareTo_1(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return isJavaString(this$static)?compareTo_1(this$static, dynamicCastToString(other)):this$static.compareTo(other);
}

function latin1ToString(bytes, len){
  var chars, i;
  chars = initDim(C_classLit, $intern_18, 0, len, 7, 1);
  for (i = 0; i < len; ++i) {
    chars[i] = bytes[i] & 255 & $intern_5;
  }
  return __valueOf(chars, 0, chars.length);
}

function utf8ToString(bytes, len){
  var b, ch_0, charCount, chars, count, i, i0, outIdx;
  charCount = 0;
  for (i0 = 0; i0 < len;) {
    ++charCount;
    ch_0 = bytes[i0];
    if ((ch_0 & 192) == 128) {
      throw new IllegalArgumentException_0('Invalid UTF8 sequence');
    }
     else if ((ch_0 & 128) == 0) {
      ++i0;
    }
     else if ((ch_0 & 224) == 192) {
      i0 += 2;
    }
     else if ((ch_0 & 240) == 224) {
      i0 += 3;
    }
     else if ((ch_0 & 248) == 240) {
      i0 += 4;
    }
     else {
      throw new IllegalArgumentException_0('Invalid UTF8 sequence');
    }
    if (i0 > len) {
      throw new IndexOutOfBoundsException_0('Invalid UTF8 sequence');
    }
  }
  chars = initDim(C_classLit, $intern_18, 0, charCount, 7, 1);
  outIdx = 0;
  count = 0;
  for (i = 0; i < len;) {
    ch_0 = bytes[i++];
    if ((ch_0 & 128) == 0) {
      count = 1;
      ch_0 &= 127;
    }
     else if ((ch_0 & 224) == 192) {
      count = 2;
      ch_0 &= 31;
    }
     else if ((ch_0 & 240) == 224) {
      count = 3;
      ch_0 &= 15;
    }
     else if ((ch_0 & 248) == 240) {
      count = 4;
      ch_0 &= 7;
    }
     else if ((ch_0 & 252) == 248) {
      count = 5;
      ch_0 &= 3;
    }
    while (--count > 0) {
      b = bytes[i++];
      if ((b & 192) != 128) {
        throw new IllegalArgumentException_0('Invalid UTF8 sequence at ' + (i - 1) + ', byte=' + toUnsignedRadixString(b, 16));
      }
      ch_0 = ch_0 << 6 | b & 63;
    }
    outIdx += toChars(ch_0, chars, outIdx);
  }
  return __valueOf(chars, 0, chars.length);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += charToString(x_0);
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(27, 60, {179:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 27);
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkNotNull_0(src_0, 'src');
  checkNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = dynamicCast(src_0, 5);
    destArray = dynamicCast(dest, 5);
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

function UnsupportedOperationException(message){
  RuntimeException_0.call(this, message);
}

defineClass(72, 15, $intern_4, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 72);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(169, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString$ = function toString_15(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 169);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next(), 17);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(168, 1, {58:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals$ = function equals_5(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 58)) {
    return false;
  }
  otherMap = dynamicCast(obj, 58);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 17);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_12(this.entrySet());
}
;
_.size_1 = function size_1(){
  return this.entrySet().size_1();
}
;
_.toString$ = function toString_16(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 17);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_2(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append_2(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 168);
function $containsKey(this$static, key){
  return isJavaString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_0(this$static, key){
  return isJavaString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $put(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_2(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_2(this$static.hashCodeMap, null, value_0):this$static.stringMap.put(key, value_0);
}

function $remove_2(this$static, key){
  return $remove_5(this$static.hashCodeMap, key);
}

defineClass(84, 168, {58:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get_0(this, key);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 84);
defineClass(170, 169, $intern_23);
_.equals$ = function equals_6(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 40)) {
    return false;
  }
  other = dynamicCast(o, 40);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_7(){
  return hashCode_12(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 170);
function $contains(this$static, o){
  if (instanceOf(o, 17)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 17));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(68, 170, $intern_23, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 68);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_0(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , dynamicCast(this$static.current.next(), 17);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(69, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next = function next_0(){
  return $next_0(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 69);
function $clear(this$static){
  $removeRange(this$static, this$static.size_0);
}

function $removeRange(this$static, endIndex){
  var i, iter;
  iter = new AbstractList$ListIteratorImpl(this$static);
  for (i = 0; i < endIndex; ++i) {
    checkCriticalElement(iter.i < iter.this$01.size_1());
    iter.this$01.get_1(iter.last = iter.i++);
    checkState(iter.last != -1);
    iter.this$01.remove(iter.last);
    iter.i = iter.last;
    iter.last = -1;
  }
}

defineClass(171, 169, {52:1});
_.equals$ = function equals_7(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 52)) {
    return false;
  }
  other = dynamicCast(o, 52);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = new AbstractList$IteratorImpl(this); elem$iterator.i < elem$iterator.this$01.size_1();) {
    elem = (checkCriticalElement(elem$iterator.i < elem$iterator.this$01.size_1()) , elem$iterator.this$01.get_1(elem$iterator.last = elem$iterator.i++));
    elemOther = (checkCriticalElement(iterOther.i < iterOther.this$01.size_1()) , iterOther.this$01.get_1(iterOther.last = iterOther.i++));
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_13(this);
}
;
_.iterator = function iterator_3(){
  return new AbstractList$IteratorImpl(this);
}
;
_.remove = function remove(index_0){
  throw new UnsupportedOperationException('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 171);
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(24, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01.size_1();
}
;
_.next = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_1(this.last = this.i++);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 24);
function AbstractList$ListIteratorImpl(this$0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(this$0.size_0);
  this.i = 0;
}

defineClass(88, 24, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 88);
function AbstractList$SubList(wrapped, toIndex){
  checkCriticalPositionIndexes(toIndex, wrapped.array.length);
  this.wrapped = wrapped;
  this.fromIndex = 3;
  this.size_0 = toIndex - 3;
}

defineClass(89, 171, {52:1}, AbstractList$SubList);
_.get_1 = function get_2(index_0){
  checkElementIndex(index_0, this.size_0);
  return $get_1(this.wrapped, this.fromIndex + index_0);
}
;
_.remove = function remove_0(index_0){
  var result;
  checkElementIndex(index_0, this.size_0);
  result = this.wrapped.remove(this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.size_1 = function size_4(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 89);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(53, 170, $intern_23, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.size_1 = function size_5(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 53);
function $next_1(this$static){
  var entry;
  entry = $next_0(this$static.val$outerIter2);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(87, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_2(){
  return $next_1(this);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 87);
defineClass(85, 1, $intern_24);
_.equals$ = function equals_8(other){
  var entry;
  if (!instanceOf(other, 17)) {
    return false;
  }
  entry = dynamicCast(other, 17);
  return equals_11(this.key, entry.getKey()) && equals_11(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_14(this.key) ^ hashCode_14(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_17(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 85);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(86, 85, $intern_24, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 86);
defineClass(172, 1, $intern_24);
_.equals$ = function equals_9(other){
  var entry;
  if (!instanceOf(other, 17)) {
    return false;
  }
  entry = dynamicCast(other, 17);
  return equals_11(this.getKey(), entry.getKey()) && equals_11(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_14(this.getKey()) ^ hashCode_14(this.getValue());
}
;
_.toString$ = function toString_18(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 172);
function $$init(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function $add_2(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_1(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_3(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $set_1(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function ArrayList(){
  $$init(this);
}

function ArrayList_0(initialCapacity){
  $$init(this);
  checkCriticalArgument_0(initialCapacity >= 0, 'Initial capacity must not be negative');
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

defineClass(42, 171, $intern_25, ArrayList, ArrayList_0);
_.add_0 = function add_0(o){
  return $add_2(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_1(this, index_0);
}
;
_.remove = function remove_1(index_0){
  return $remove_3(this, index_0);
}
;
_.size_1 = function size_6(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 42);
function equals_10(array1, array2){
  var i;
  if (maskUndefined(array1) === maskUndefined(array2)) {
    return true;
  }
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

function hashCode_11(a){
  var e, e$index, e$max, hashCode;
  if (a == null) {
    return 0;
  }
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + e;
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, newLength, length_0, copy;
  !comp && (comp = ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  temp = (newLength = (length_0 = toIndex - fromIndex , checkCriticalArgument_1(length_0 >= 0, initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf(fromIndex), valueOf(toIndex)])) , length_0) , copy = createFrom(x_0, newLength) , arraycopy(x_0, fromIndex, copy, 0, min_1(x_0.length - fromIndex, newLength)) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function hashCode_12(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_13(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = new AbstractList$IteratorImpl(list); e$iterator.i < e$iterator.this$01.size_1();) {
    e = (checkCriticalElement(e$iterator.i < e$iterator.this$01.size_1()) , e$iterator.this$01.get_1(e$iterator.last = e$iterator.i++));
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function replaceContents(target, x_0){
  var i, size_0;
  size_0 = target.array.length;
  for (i = 0; i < size_0; i++) {
    $set_1(target, i, x_0[i]);
  }
}

function sort_0(target, c){
  var x_0;
  x_0 = cloneSubrange(target.array, target.array.length);
  mergeSort(x_0, 0, x_0.length, c);
  replaceContents(target, x_0);
}

function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function Comparators$1(){
}

defineClass(154, 1, {}, Comparators$1);
_.compare = function compare_2(o1, o2){
  checkNotNull(o1);
  checkNotNull(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(dynamicCast(o1, 19), o2);
}
;
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 154);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(114, 15, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 114);
function $put_0(this$static, key, value_0){
  $add_3(this$static.keySet, key);
  return $set_2(this$static, key.ordinal, value_0);
}

function $put_1(this$static, key, value_0){
  return $put_0(this$static, dynamicCast(key, 13), value_0);
}

function $set_2(this$static, ordinal, value_0){
  var was;
  was = this$static.values[ordinal];
  setCheck(this$static.values, ordinal, value_0);
  return was;
}

function EnumMap(type_0){
  var all;
  this.keySet = (all = dynamicCast(type_0.enumConstantsFunc && type_0.enumConstantsFunc(), 22) , new EnumSet$EnumSetImpl(all, dynamicCast(createFrom(all, all.length), 22)));
  this.values = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, this.keySet.all.length, 3, 1);
}

defineClass(138, 168, {58:1}, EnumMap);
_.containsKey = function containsKey_1(key){
  return $contains_1(this.keySet, key);
}
;
_.entrySet = function entrySet_0(){
  return new EnumMap$EntrySet(this);
}
;
_.get_0 = function get_4(k){
  return $contains_1(this.keySet, k)?this.values[dynamicCast(k, 13).ordinal]:null;
}
;
_.size_1 = function size_7(){
  return this.keySet.size_0;
}
;
var Ljava_util_EnumMap_2_classLit = createForClass('java.util', 'EnumMap', 138);
function $contains_0(this$static, o){
  if (instanceOf(o, 17)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 17));
  }
  return false;
}

function EnumMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(139, 170, $intern_23, EnumMap$EntrySet);
_.contains_0 = function contains_3(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_5(){
  return new EnumMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_8(){
  return this.this$01.keySet.size_0;
}
;
var Ljava_util_EnumMap$EntrySet_2_classLit = createForClass('java.util', 'EnumMap/EntrySet', 139);
function EnumMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.it = new EnumSet$EnumSetImpl$IteratorImpl(this.this$01.keySet);
}

defineClass(140, 1, {}, EnumMap$EntrySetIterator);
_.hasNext = function hasNext_3(){
  return $hasNext_0(this.it);
}
;
_.next = function next_3(){
  return this.key = $next_2(this.it) , new EnumMap$MapEntry(this.this$01, this.key);
}
;
var Ljava_util_EnumMap$EntrySetIterator_2_classLit = createForClass('java.util', 'EnumMap/EntrySetIterator', 140);
function EnumMap$MapEntry(this$0, key){
  this.this$01 = this$0;
  this.key = key;
}

defineClass(141, 172, $intern_24, EnumMap$MapEntry);
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return this.this$01.values[this.key.ordinal];
}
;
_.setValue = function setValue_0(value_0){
  return $set_2(this.this$01, this.key.ordinal, value_0);
}
;
var Ljava_util_EnumMap$MapEntry_2_classLit = createForClass('java.util', 'EnumMap/MapEntry', 141);
defineClass(178, 170, $intern_23);
var Ljava_util_EnumSet_2_classLit = createForClass('java.util', 'EnumSet', 178);
function $add_3(this$static, e){
  var ordinal;
  checkNotNull(e);
  ordinal = e.ordinal;
  if (!this$static.set_0[ordinal]) {
    setCheck(this$static.set_0, ordinal, e);
    ++this$static.size_0;
    return true;
  }
  return false;
}

function $contains_1(this$static, o){
  return instanceOf(o, 13) && $containsEnum(this$static, dynamicCast(o, 13));
}

function $containsEnum(this$static, e){
  return !!e && this$static.set_0[e.ordinal] == e;
}

function EnumSet$EnumSetImpl(all, set_0){
  this.all = all;
  this.set_0 = set_0;
  this.size_0 = 0;
}

defineClass(152, 178, $intern_23, EnumSet$EnumSetImpl);
_.contains_0 = function contains_4(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_6(){
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
}
;
_.size_1 = function size_9(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl', 152);
function $findNext(this$static){
  var c;
  ++this$static.i;
  for (c = this$static.this$11.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$11.set_0[this$static.i]) {
      return;
    }
  }
}

function $hasNext_0(this$static){
  return this$static.i < this$static.this$11.all.length;
}

function $next_2(this$static){
  return checkCriticalElement(this$static.i < this$static.this$11.all.length) , this$static.last = this$static.i , $findNext(this$static) , this$static.this$11.set_0[this$static.last];
}

function EnumSet$EnumSetImpl$IteratorImpl(this$1){
  this.this$11 = this$1;
  $findNext(this);
}

defineClass(79, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.hasNext = function hasNext_4(){
  return $hasNext_0(this);
}
;
_.next = function next_4(){
  return $next_2(this);
}
;
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl/IteratorImpl', 79);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this.hashCodeMap = delegate.createJsHashCodeMap();
  this.hashCodeMap.host = this;
  this.stringMap = delegate.createJsStringMap();
  this.stringMap.host = this;
  this.size_0 = 0;
  structureChanged(this);
}

defineClass(28, 84, {3:1, 58:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 28);
function $contains_2(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_4(this$static, o){
  return $remove_2(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(77, 170, {3:1, 40:1}, HashSet);
_.contains_0 = function contains_5(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_7(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_10(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_19(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 77);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_5(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(74, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 74);
function $hasNext_1(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_2, 17, 0, 0, 1);
}

defineClass(100, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_5(){
  return $hasNext_1(this);
}
;
_.next = function next_5(){
  return checkCriticalElement($hasNext_1(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 100);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(98, 74, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_0(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 98);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(99, 42, $intern_25, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove = function remove_2(index_0){
  var removed;
  return removed = dynamicCast($remove_3(this, index_0), 17) , $remove_5(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 99);
function InternalJsMapFactory(){
}

defineClass(95, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 95);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(97, 95, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 97);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(96, 95, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 96);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_3(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_3(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_6(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_3(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(61, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_5(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put = function put(key, value_0){
  return $put_3(this, key, value_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 61);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(93, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_6(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_6(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 93);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(73, 172, $intern_24, InternalJsStringMap$2);
_.getKey = function getKey_1(){
  return this.val$key2;
}
;
_.getValue = function getValue_1(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 73);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(90, 61, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_0(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_6(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put = function put_0(key, value_0){
  return $put_3(this, ':' + key, value_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 90);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(92, 42, $intern_25, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove = function remove_3(index_0){
  var removed;
  return removed = dynamicCast($remove_3(this, index_0), 17) , $remove_6(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 92);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(91, 61, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 91);
var Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(62, 15, $intern_4, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 62);
function equals_11(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_14(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Ljb_client_AsyncQRCallback_2_classLit = createForInterface('jb.client', 'AsyncQRCallback');
function $execute(this$static, a0){
  $invoke_execute(this$static.jso, a0);
}

function $export(this$static){
  if (!exported) {
    exported = true;
    $clinit_ExporterUtil();
    $addExporter(impl, Ljb_client_AsyncQRCallback_2_classLit, this$static);
    $export0(this$static);
  }
}

function $export0(this$static){
  var pkg = declarePackage('AsyncQRCallback');
  var __0, __ = this$static;
  $wnd.AsyncQRCallback = $entry(function(){
    var g, j = this, a = arguments;
    a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
    j.g = g;
    setWrapper(g, j);
    return j;
  }
  );
  __0 = $wnd.AsyncQRCallback.prototype = new Object;
  __0.execute = $entry(function(a0){
    this.g.execute_1(a0);
  }
  );
  if (pkg)
    for (p in pkg)
      $wnd.AsyncQRCallback[p] === undefined && ($wnd.AsyncQRCallback[p] = pkg[p]);
}

function $invoke_execute(closure, a0){
  closure.apply(null, [a0]);
}

function AsyncQRCallback_ExporterImpl(){
  $export(this);
}

function AsyncQRCallback_ExporterImpl_0(jso){
  $export(this);
  this.jso = jso;
}

defineClass(47, 1, {180:1, 47:1}, AsyncQRCallback_ExporterImpl, AsyncQRCallback_ExporterImpl_0);
_.equals$ = function equals_12(obj){
  return obj != null && instanceOf(obj, 47) && this.jso == dynamicCast(obj, 47).jso;
}
;
_.execute_1 = function execute_1(a0){
  $execute(this, a0);
}
;
_.isAssignable = function isAssignable(o){
  return o != null && instanceOf(o, 180);
}
;
var exported = false;
var Ljb_client_AsyncQRCallback_1ExporterImpl_2_classLit = createForClass('jb.client', 'AsyncQRCallback_ExporterImpl', 47);
function $appendTo(this$static, htmlElement){
  addTo(htmlElement, ($clinit_DOM() , this$static.element));
  $onAttach_1(this$static);
}

function $removeFrom(this$static, htmlElement){
  removeFrom(htmlElement, ($clinit_DOM() , this$static.element));
  $onDetach(this$static);
  $stopWebcam(this$static);
}

function JSScannerWidget(onSuccess, provideVideoStream){
  ScannerWidget.call(this, new ScannerCallback(onSuccess), provideVideoStream);
}

function addTo(htmlElement, scannerElement){
  htmlElement.appendChild(scannerElement);
}

function removeFrom(htmlElement, scannerElement){
  htmlElement.removeChild(scannerElement);
}

defineClass(105, 104, $intern_1, JSScannerWidget);
var Ljb_client_JSScannerWidget_2_classLit = createForClass('jb.client', 'JSScannerWidget', 105);
function JsQRScanner(onSuccess){
  JsQRScanner_0.call(this, onSuccess, null);
}

function JsQRScanner_0(onSuccess, provideVideoStream){
  this.scanner = new JSScannerWidget(onSuccess, provideVideoStream);
}

defineClass(48, 1, {48:1}, JsQRScanner, JsQRScanner_0);
_.appendTo_0 = function appendTo(htmlElement){
  $appendTo(this.scanner, htmlElement);
}
;
_.getScanInterval_0 = function getScanInterval(){
  return this.scanner.scanInterval;
}
;
_.getSnapImageMaxSize_0 = function getSnapImageMaxSize(){
  return this.scanner.snapImageMaxSize;
}
;
_.isActive_0 = function isActive(){
  return this.scanner.active;
}
;
_.isScanning_0 = function isScanning(){
  return $isScanning(this.scanner);
}
;
_.removeFrom_0 = function removeFrom_0(htmlElement){
  $removeFrom(this.scanner, htmlElement);
}
;
_.resumeScanning_0 = function resumeScanning(){
  $resumeScanning(this.scanner);
}
;
_.setScanInterval_0 = function setScanInterval(scanInterval){
  $setScanInterval(this.scanner, scanInterval);
}
;
_.setSnapImageMaxSize_0 = function setSnapImageMaxSize(snapImageMaxSize){
  $setSnapImageMaxSize(this.scanner, snapImageMaxSize);
}
;
_.stopScanning_0 = function stopScanning(){
  this.scanner.active = false;
}
;
var Ljb_client_JsQRScanner_2_classLit = createForClass('jb.client', 'JsQRScanner', 48);
function $export_0(this$static){
  if (!exported_0) {
    exported_0 = true;
    $clinit_ExporterUtil();
    $addExporter(impl, Ljb_client_JsQRScanner_2_classLit, this$static);
    $export0_0(this$static);
  }
}

function $export0_0(this$static){
  var pkg = declarePackage('JsQRScanner');
  var __0, __ = this$static;
  $wnd.JsQRScanner = $entry(function(){
    var g, j = this, a = arguments;
    a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 2?(g = ___create_0(a[0] == null?null:a[0].constructor == $wnd.AsyncQRCallback?a[0].g:new AsyncQRCallback_ExporterImpl_0(a[0]), a[1])):a.length == 1 && (g = ___create(a[0] == null?null:a[0].constructor == $wnd.AsyncQRCallback?a[0].g:new AsyncQRCallback_ExporterImpl_0(a[0])));
    j.g = g;
    setWrapper(g, j);
    return j;
  }
  );
  __0 = $wnd.JsQRScanner.prototype = new Object;
  __0.appendTo = $entry(function(a0){
    this.g.appendTo_0(a0);
  }
  );
  __0.getScanInterval = $entry(function(){
    return this.g.getScanInterval_0();
  }
  );
  __0.getSnapImageMaxSize = $entry(function(){
    return this.g.getSnapImageMaxSize_0();
  }
  );
  __0.isActive = $entry(function(){
    return this.g.isActive_0();
  }
  );
  __0.isScanning = $entry(function(){
    return this.g.isScanning_0();
  }
  );
  __0.removeFrom = $entry(function(a0){
    this.g.removeFrom_0(a0);
  }
  );
  __0.resumeScanning = $entry(function(){
    this.g.resumeScanning_0();
  }
  );
  __0.setScanInterval = $entry(function(a0){
    this.g.setScanInterval_0(a0);
  }
  );
  __0.setSnapImageMaxSize = $entry(function(a0){
    this.g.setSnapImageMaxSize_0(a0);
  }
  );
  __0.stopScanning = $entry(function(){
    this.g.stopScanning_0();
  }
  );
  if (pkg)
    for (p in pkg)
      $wnd.JsQRScanner[p] === undefined && ($wnd.JsQRScanner[p] = pkg[p]);
}

function JsQRScanner_ExporterImpl(){
  $export_0(this);
}

function ___create(a0){
  return new JsQRScanner(a0);
}

function ___create_0(a0, a1){
  return new JsQRScanner_0(a0, a1);
}

defineClass(102, 1, {}, JsQRScanner_ExporterImpl);
_.isAssignable = function isAssignable_0(o){
  return o != null && instanceOf(o, 48);
}
;
var exported_0 = false;
var Ljb_client_JsQRScanner_1ExporterImpl_2_classLit = createForClass('jb.client', 'JsQRScanner_ExporterImpl', 102);
function $onSuccess(this$static, result){
  $execute(this$static.qrCallback, result.text_0);
}

function ScannerCallback(qrCallback){
  this.qrCallback = qrCallback;
}

defineClass(106, 1, {}, ScannerCallback);
var Ljb_client_ScannerCallback_2_classLit = createForClass('jb.client', 'ScannerCallback', 106);
defineClass(173, 1, {});
var Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit = createForClass('org.timepedia.exporter.client', 'ExporterBaseImpl', 173);
function $addExporter(this$static, c, o){
  $put(this$static.exporterMap, c, o);
}

function $declarePackage(qualifiedExportName){
  var i, l, o, prefix, superPackages;
  superPackages = $split(qualifiedExportName, '\\.', 0);
  prefix = $wnd;
  i = 0;
  for (l = superPackages.length - 1; i < l; i++) {
    if (!$equals(superPackages[i], 'client')) {
      prefix[superPackages[i]] || (prefix[superPackages[i]] = {});
      prefix = getProp(prefix, superPackages[i]);
    }
  }
  o = getProp(prefix, superPackages[i]);
  return o;
}

function ExporterBaseActual(){
  this.exporterMap = new HashMap;
  new HashMap;
  new HashMap;
}

function getProp(jso, key){
  return jso != null?jso[key]:null;
}

defineClass(94, 173, {}, ExporterBaseActual);
var Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit = createForClass('org.timepedia.exporter.client', 'ExporterBaseActual', 94);
function $clinit_ExporterUtil(){
  $clinit_ExporterUtil = emptyMethod;
  impl = new ExporterBaseActual;
}

function declarePackage(qualifiedExportName){
  $clinit_ExporterUtil();
  return $declarePackage(qualifiedExportName);
}

function setWrapper(instance, wrapper){
  $clinit_ExporterUtil();
  instance['__gwtex_wrap'] = wrapper;
}

var impl;
var I_classLit = createForPrimitive('int', 'I'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', null), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 157), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 159), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 162), B_classLit = createForPrimitive('byte', 'B'), D_classLit = createForPrimitive('double', 'D'), F_classLit = createForPrimitive('float', 'F'), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Ljb_client_AsyncQRCallback_2_classLit = createForInterface('jb.client', 'AsyncQRCallback'), Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=jsqrscanner-0.js

