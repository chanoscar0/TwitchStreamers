var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var { ALL_TALENT } = require('./data.js');

// GraphQL schema
var schema = buildSchema(`
type Query {
    influencer(id: Int!): Influencer
    influencers: [Influencer]
},
type Influencer {
    id: Int
    handle: String
    avatar: String
    twitchId: Int
    twitchFollowers: Int
    twitchViewers: Int
    twitchUrl: String
    twitterFollowers: Int
    twitterLink: String
    youtubeSubscribers: Int
    youtubeLink: String
}
`);

function getInfluencer(args) {
    const { id } = args;
    const result = ALL_TALENT.filter(inf => {
        return inf.id == id;
    })[0];
    return result;
}

function getInfluencers() {
    return ALL_TALENT;
}

const transform = (obj) => {
    const {id, handle, avatar, youtube_account, twitter_account, twitch_accounts} = obj;
    return {
        id,
        handle,
        avatar,
        twitchViewers: obj.influence_performance_score,
        twitchFollowers: obj.influence_following_score,
        twitchId:obj.twitch_accounts[0].id,
        twitchUrl: `https://twitch.tv/${obj.twitch_accounts[0].slug}`,
        twitterFollowers: twitter_account.followers,
        twitterLink: `https://twitter.com/${twitter_account.screen_name}`,
        youtubeSubscribers: youtube_account.subscribers,
        youtubeLink: `https://youtube.com/channel/${youtube_account.youtube_id}`,
    };
}

var root = {
    influencer: getInfluencer,
    influencers: getInfluencers
};

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GraphQL
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
})); 

// REST
app.get('/influencers', (req, res) => {
    return res.json(ALL_TALENT.map(({id, handle, avatar, twitchViewers}) => ({
        id, handle, avatar, twitchViewers
    })));
})
app.get('/influencers/:id', (req, res) => {
   var id = req.params.id;
   return res.json(getInfluencer({id}));
});

app.listen(4000, () => console.log('GraphQL running on localhost:4000/graphql'));