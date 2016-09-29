
/*
Copyright 2016 Resin.io

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
var capitanoCommands,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

capitanoCommands = ['resin-cli', 'resin-toolbox'];

module.exports = function(command) {
  if ((command == null) || __indexOf.call(capitanoCommands, command) < 0) {
    throw new Error("Invalid resin-sync capitano command '" + command + "'. Available commands are: " + capitanoCommands);
  }
  return require("./" + command);
};