var Dispatcher = require('../dispatcher/Dispatcher');

var WebAPIUtils = require('../utils/WebAPIUtils');

var GroupConstants = require('../constants/GroupConstants');

var ActionTypes = GroupConstants.ActionTypes;


module.exports.receiveGroups = function (rawGroups) {
  Dispatcher.dispatch({
    type: ActionTypes.RECEIVE_RAW_GROUPS,
    rawGroups: rawGroups
  })
};

module.exports.updateSelectedGroup = function (groupId) {
  Dispatcher.dispatch({
    type: ActionTypes.UPDATE_SELECTED_GROUP,
    groupId: groupId
  });
};

module.exports.createGroup = function (group) {
  Dispatcher.dispatch({
    type: ActionTypes.CREATE_GROUP,
    group: group
  });
  WebAPIUtils.createGroup(group);
};

module.exports.receiveCreatedGroup = function (createdGroup) {
  Dispatcher.dispatch({
    type: ActionTypes.RECEIVE_RAW_CREATED_GROUP,
    rawGroup: createdGroup
  });
};


// module.exports = {

//   receiveGroups (rawGroups) {
//     Dispatcher.dispatch({
//       type: ActionTypes.RECEIVE_RAW_GROUPS,
//       rawGroups: rawGroups
//     })
//   },

//   updateSelectedGroup (groupId) {
//     Dispatcher.dispatch({
//       type: ActionTypes.UPDATE_SELECTED_GROUP,
//       groupId: groupId
//     });
//   },

//   createGroup (group) {
//     Dispatcher.dispatch({
//       type: ActionTypes.CREATE_GROUP,
//       group: group
//     });
//     WebAPIUtils.createGroup(group);
//   },

//   receiveCreatedGroup (createdGroup) {
//     Dispatcher.dispatch({
//       type: ActionTypes.RECEIVE_RAW_CREATED_GROUP,
//       rawGroup: createdGroup
//     });
//   }

// };