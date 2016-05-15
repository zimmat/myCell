var search = require('../search');
var assert = require('assert');

var dataInfo = ["Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”",
"Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”",
"Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”",
"Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”"];

var appsInfo = ["Walter sent: “Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.”",
"Jesse sent: “Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk, LankedOn.”",
"Saul sent: “I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.”",
"Gus sent: “I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.”"]

var dataMap =[ { name: 'Walter', data: 67 },{ name: 'Gus', data: 150 },{ name: 'Saul', data: 283 },{ name: 'Jesse', data: 300 } ]
var appMap = { Walter: [ 'Faceblock', 'Instantgam' ],
  Jesse: [ 'Faceblock', 'Instantgam', 'Tooter', 'Snaptalk', 'LankedOn' ],
  Saul: [ 'Faceblock', 'Instantgam', 'LankedOn' ],
  Gus: [ 'Instantgam', 'Tooter' ] }


var apps = ["Faceblock","Instantgam","Tooter","Snaptalk","LankedOn"];

describe('search kata', function(){
  it('should return data map', function(){
    assert.deepEqual(search.getData(dataInfo),[ { name: 'Walter', data: 67 },
  { name: 'Gus', data: 150 },
  { name: 'Saul', data: 283 },
  { name: 'Jesse', data: 300 } ]
);
  });
  it('should return Who uses the most data',function(){
    assert.equal(search.mostData(dataMap),'Jesse');
  });
  it('should return Who uses the least data', function(){
    assert.equal(search.leastData(dataMap),'Walter');
  });
  it('should return array of objects', function(){
    assert.deepEqual(search.getApps(appsInfo,apps),{Walter:["Faceblock","Instantgam"],
  Jesse:["Faceblock","Instantgam","Tooter","Snaptalk","LankedOn"],Saul:["Faceblock","Instantgam","LankedOn"],
Gus:["Instantgam","Tooter"]});
  });
  it('should return Who uses the most apps',function(){
    assert.equal(search.mostApps(appMap),'Jesse');
  });
  it('should return who uses Faceblock',function(){
    assert.deepEqual(search.withFaceblock(appMap),["Walter","Jesse","Saul"]);
  })
  it('should return who does not use Faceblock',function(){
    assert.equal(search.withoutFaceblock(appMap),"Gus");
  });
});
