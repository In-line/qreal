API.loadPluginGuiFacade("qRealRobots.RobotsPlugin");
var mainWindow = guiFacade.mainWindow();//Rename to 'ui'
hintAPI.addHint("Добро пожаловать в среду визуального программирования QReal:Robots!", 1300, mainWindow);//hintAPI -> 'ui'
API.wait(1500);
hintAPI.addHint("Сейчас мы нарисуем одну диаграмму за вас, чтобы показать, как все работает.", 1300, mainWindow);
API.wait(1500);
var newDiagram = guiFacade.widget("QToolButton", "actionNew_Diagram");
hintAPI.addHint("Сперва создадим новую диаграмму...", 2000, mainWindow);
cursor.moveTo(newDiagram, 1000);
cursor.leftButtonPress(newDiagram);
cursor.leftButtonRelease(newDiagram, 400);
initNodes = sceneAPI.nodeList("RobotsDiagram", "InitialNode");
var init = initNodes[0];
var mainScene = guiFacade.sceneViewport();
hintAPI.addHint("Добавим пару блоков из палитры на сцену...", 1000, mainWindow);
var engF = paletteAPI.dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikV6EnginesForward", 500, 150, 275);
var sonar = paletteAPI.dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikWaitForSonarDistance",  500, 250, 275);
hintAPI.addHint("Отредактируем их свойства...", 3000, mainWindow);
var propertyEditor = guiFacade.propertyEditor();
var prop1 = guiFacade.propertyRect("Считанное значение");
var prop = guiFacade.propertyRect("Расстояние");
cursor.moveToRect(prop1, 1000);
cursor.leftButtonPress(propertyEditor);
cursor.leftButtonRelease(propertyEditor, 400); 	
var val = guiFacade.property("QComboBox", "Считанное значение");
cursor.leftButtonPress(val);
cursor.leftButtonRelease(val, 50);
API.pickComboBoxItem(val, "меньше", 1000);
cursor.moveToRect(prop, 1000);
cursor.leftButtonPress(propertyEditor);
cursor.leftButtonRelease(propertyEditor);
keyboard.type("10", 1000);
hintAPI.addHint("Еще пару блоков...", 5000, mainWindow);
var engB = paletteAPI.dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikV6EnginesBackward", 2000, 350, 275);
var beep = paletteAPI.dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikSadSmile", 2000, 450, 275);
var timer = paletteAPI.dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/Timer", 2000, 350, 100);
hintAPI.addHint("Теперь нарисуем связи между блоками на сцене...", 5000, mainWindow);
sceneAPI.drawLink(init, engF, 1000);
sceneAPI.drawLink(engF, sonar, 1000);
sceneAPI.drawLink(sonar, engB, 1000);
sceneAPI.drawLink(engB, beep, 1000);
sceneAPI.drawLink(beep, timer, 1000);
sceneAPI.drawLink(timer, engF, 1000);
hintAPI.addHint("Добавим роботу сенсор расстояния...", 2000, mainWindow);
var sensors = guiFacade.widget("QComboBox", "Port A1 DeviceConfig");
cursor.moveTo(sensors, 1000);
cursor.leftButtonPress(sensors);
cursor.leftButtonRelease(sensors, 300);
API.pickComboBoxItem(sensors, "Инфракрасный сенсор", 1000);
var open2DModel = guiFacade.pluginActionToolButton("show2dModelTrik");
hintAPI.addHint("Можно посмотреть, что получилось.", 3000, mainWindow);
cursor.moveTo(open2DModel, 3000);
cursor.leftButtonPress(open2DModel);
cursor.leftButtonRelease(open2DModel, 500);
var widget = pluginGuiFacade.d2ModelWidget();
API.changeWindow(widget);
hintAPI.addHint("Осталось нарисовать препятствие для робота...", 3000, widget);
var wall = pluginGuiFacade.widget("QPushButton", "wallButton");
cursor.moveTo(wall, 1000);
cursor.leftButtonPress(wall);
cursor.leftButtonRelease(wall);
var scene = pluginGuiFacade.d2ModelSceneViewport();
cursor.sceneMoveTo(scene, 2000, 400, 0);
cursor.rightButtonPress(scene);
cursor.sceneMoveTo(scene, 1000, 400, 400);
cursor.rightButtonRelease(scene);
hintAPI.addHint("А теперь, запуск!", 5000, widget);
var run = pluginGuiFacade.widget("QPushButton", "runButton");
cursor.moveTo(run, 1000);
cursor.leftButtonPress(run);
cursor.leftButtonRelease(run);