module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};var u=true;try{e[t].call(r.exports,r,r.exports,__webpack_require__);u=false}finally{if(u)delete n[t]}r.l=true;return r.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(676)}t(__webpack_require__);return startup()}({82:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},87:function(e){e.exports=require("os")},102:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);u(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const o=i(n(747));const s=i(n(87));const a=n(82);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!o.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}o.appendFileSync(n,`${a.toCommandValue(t)}${s.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},431:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);u(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const o=i(n(87));const s=n(82);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const a="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=a+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${a}${escapeData(this.message)}`;return e}}function escapeData(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},470:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);u(t,e);return t};var o=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,u){function fulfilled(e){try{step(r.next(e))}catch(e){u(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){u(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const s=n(431);const a=n(102);const c=n(82);const f=i(n(87));const p=i(n(622));var d;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(d=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=c.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${f.EOL}${n}${f.EOL}${t}`;a.issueCommand("ENV",r)}else{s.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){a.issueCommand("PATH",e)}else{s.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${p.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return n}return n.trim()}t.getInput=getInput;function getMultilineInput(e,t){const n=getInput(e,t).split("\n").filter(e=>e!=="");return n}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const n=["true","True","TRUE"];const r=["false","False","FALSE"];const u=getInput(e,t);if(n.includes(u))return true;if(r.includes(u))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(f.EOL);s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){s.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=d.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){s.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+f.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return o(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},622:function(e){e.exports=require("path")},676:function(e,t,n){"use strict";n.r(t);var r=n(470);var u=n.n(r);var i=n(747);var o=n.n(i);var s=n(868);var a=n.n(s);const c=/\d+-[A-Z]+(?!-?[a-zA-Z]{1,10})/g;const f=`${process.env.HOME}/.jira.d/`;const p=`${process.env.HOME}/jira/`;try{const e=Object(r.getInput)("search-string");Object(r.info)(`Searching ${e}`);const t=(Object(s.reverse)(e)||"").match(c)||[];if(t.length>1){throw new Error("More than one Jira issue was identified, only one allowed.")}if(t.length===0){throw new Error("No Jira issue was identified.")}const n=Object(s.reverse)(t[0]);Object(r.info)(`Found: ${n}`);Object(r.setOutput)("issue-key",`${n}`);Object(r.info)(`Creating Jira config.yml files at ${f} and ${p}`);try{Object(i.mkdirSync)(f,{recursive:true});Object(i.mkdirSync)(p,{recursive:true});Object(i.appendFileSync)(`${f}config.yml`,`issue: ${n}\r\n`);Object(i.appendFileSync)(`${p}config.yml`,`issue: ${n}\r\n`)}catch(e){Object(r.setFailed)(e.message)}}catch(e){Object(r.setFailed)(e.message)}},747:function(e){e.exports=require("fs")},868:function(e,t,n){e=n.nmd(e);(function(n){var r=true&&t;var u=true&&e&&e.exports==r&&e;var i=typeof global=="object"&&global;if(i.global===i||i.window===i){n=i}var o=/([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;var s=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;var a=function(e){e=e.replace(o,function(e,t,n){return a(n)+t}).replace(s,"$2$1");var t="";var n=e.length;while(n--){t+=e.charAt(n)}return t};var c={version:"0.2.0",reverse:a};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return c})}else if(r&&!r.nodeType){if(u){u.exports=c}else{for(var f in c){c.hasOwnProperty(f)&&(r[f]=c[f])}}}else{n.esrever=c}})(this)}},function(e){"use strict";!function(){e.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}}();!function(){e.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};e.d(n,"a",n);return n}}();!function(){var t=Object.prototype.hasOwnProperty;e.d=function(e,n,r){if(!t.call(e,n)){Object.defineProperty(e,n,{enumerable:true,get:r})}}}();!function(){e.nmd=function(e){e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});return e}}()});