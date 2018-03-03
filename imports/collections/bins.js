import { Mongo } from 'meteor/mongo';

//executes on both client and server. When it executes on server, only then data 
//persistence will occur
Meteor.methods(
    {
        'bins.insert': function () {
            return Bins.insert({ 
                createdAt: new Date(),
                content: '',
                sharedWith: [],
                ownerId: this.userId 
                //ID of user that is currently signed in. 
                //https://docs.meteor.com/api/methods.html#DDPCommon-MethodInvocation-userId
             })
        },
        'bins.remove': function(bin){
            return Bins.remove(bin);
        }
    });

export const Bins = new Mongo.Collection('bins'); 
