exports.getData = function(string){
  var data = string.map(function(str){
    return{
      name: str.match(/\w+/).join(),
      data: Number(str.match(/\d+/))
    };
  });
  data.sort(function(a ,b){
    return a.data - b.data;
  });
  return data;
};

exports.mostData = function(info){
  var maxDataUser = " ";
  var max = 0;
  info.forEach(function(userData){
    if(userData.data > max){
      max = userData.data;
      maxDataUser = userData.name;
    };
  });
  return maxDataUser;
};

exports.leastData = function(myData){
  var minDataUser = " ";
  var min = 10000;
  myData.forEach(function(userData){
    if(userData.data < min){
      min = userData.data;
      minDataUser = userData.name;
    };
  });
  return minDataUser;
};
exports.getApps = function(appString,apps){
  var userApps = [];
  appString.forEach(function(str){
    userApps.push(str.match(/\w+/g));
  });
  var obj = {};
  userApps.forEach(function(appsArray){
  apps.forEach(function(string){
  appsArray.forEach(function(app){
  if(app == string){
  if(!obj.hasOwnProperty(appsArray[0])){
  obj[appsArray[0]] = [app];
    }else{  obj[appsArray[0]].push(app);
    };
  };

});

    });

  });
return obj;
}
exports.mostApps = function(apps){
  var max = 0;
  var maxUser = " ";
  for(var keys in apps){
    if(apps[keys].length > max){
      max = apps[keys].length;
      console.log(max);
      maxUser = keys;
    };

  }
  return maxUser;
}

exports.withFaceblock = function(apps){
  var faceblockUsers = [];
  var fbUsers = "";
  for(var keys in apps){
    var users = apps[keys];
    if(apps[keys].hasOwnProperty('Faceblock')){

fbUsers = keys
      faceblockUsers.push(fbUsers);
    };

  }
  console.log(faceblockUsers);
  return faceblockUsers;
}

exports.withoutFaceblock = function(apps){

}
