PlayersList = new Mongo.Collection('players');

//Client side code
if(Meteor.isClient){
  //Helper functions attached to leaderboard template
  Template.leaderboard.helpers = ({
    'player' : function(){
      return PlayersList.find();
    }
  })

}

//Server side code
if(Meteor.isServer){


}
