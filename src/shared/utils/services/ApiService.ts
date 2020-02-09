import CachedService from './CachedService';

/**
 * Base class for communicating with jsonplaceholder.typicode.com
 *
 * All the requests are cached given this is a demo app
 *
 * @class ApiService
 * @extends {CachedService}
 */
class ApiService extends CachedService {
  constructor() {
    super('https://api.twitter.com/1.1');
  }

  loadTrendingTweets(woeid = 2282863) {
    return this.GET(`/trends/place.json?id=${woeid}`);
  }

  getUserTimeline(userId = "timesofindia") {
    return this.GET(`/statuses/user_timeline.json`, {
      "screen_name": userId,
      "count": 10
    });
  }

  getTweet(tweetId = "1226557433926963200") {
    return this.GET(`/statuses/retweets/${tweetId}`);
  }

  searchTweets(value = "#DelhiExitPolls") {
    return this.GET(`/search/tweets.json`, {
      q: `from:${value}`,
      result_type: "mixed",
      count: 3
    });
  }
}

export default new ApiService();