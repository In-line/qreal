/* Copyright 2015 QReal Research Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */

// For easy writing of scripts
// ---------------------------
init();
var mainWindow;
var ui;
var utils;
var keyboard;
var palette;
var hints;
var scene;
var cursor;
// For easy writing of scripts
// ---------------------------

var menuEdit = ui.getMenu("menuEdit");
assert(menuEdit != null);

utils.activateMenu(menuEdit);
api.wait(200);

var actionUndo = ui.getActionInMenu(menuEdit, "actionUndo");
checkAction(actionUndo, false, false, false);
expect(!ui.isSubMenuInMenu(menuEdit, actionUndo));

var actionRedo = ui.getActionInMenu(menuEdit, "actionRedo");
checkAction(actionRedo, false, false, false);
expect(!ui.isSubMenuInMenu(menuEdit, actionRedo));

var actionFind = ui.getActionInMenu(menuEdit, "actionFind");
checkAction(actionFind, false, false, false);
expect(!ui.isSubMenuInMenu(menuEdit, actionFind));
