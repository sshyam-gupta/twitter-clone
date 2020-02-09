import React from 'react';
import { useHistory } from 'react-router-dom';

import { IUser } from '../UserData';
import {
  ProfileIcon,
  Container,
  TweetWrapper,
  UserInfo,
  UserName,
  Name,
  TweetText,
  HashTag,
  HashContainer,
} from './style';

const RULE = /((?:#|@)\w+|http\S+)/

interface IHashTag {
  text: string;
}

interface ITweet {
  id: number;
  created_at: string;
  text: string;
  truncated: boolean;
  source: string;
  user: IUser;
  retweeted_status: ITweet;
  retweet_count: number;
  favorite_count: number;
  entities: {
    hashtags: IHashTag[];
    user_mentions: {
      screen_name: string;
      name: string;
      id: number;
    };
  };
}

export default ({ tweet }: { tweet: ITweet }) => {
  console.log('tweet', tweet);
  const history = useHistory();

  const handleHashTagClick = (link: string) => {
    link = link.replace(/[#|@]/g, "")
    console.log(link)
    history.push(`/user/${link}`);
  };

  const parse = (value: string) => {
    return value.split(RULE).map(chunk => {
      return chunk.match(RULE) ? (
        <HashTag onClick={() => handleHashTagClick(chunk)}>{chunk}</HashTag>
      ) : (
        chunk
      );
    });
  };

  return (
    <Container key={tweet.id}>
      <div>
        <ProfileIcon src={tweet.user.profile_image_url_https} />
      </div>
      <TweetWrapper>
        <UserInfo>
          <Name>{tweet.user.name}</Name>
          <UserName>{`@${tweet.user.screen_name}`}</UserName>
        </UserInfo>
        <HashContainer>
          {tweet.entities.hashtags?.map?.(
            (hashtag: IHashTag, index: number) => (
              <HashTag
                onClick={() => handleHashTagClick(hashtag?.text)}
                key={index}>{`#${hashtag?.text}`}</HashTag>
            ),
          )}
        </HashContainer>
        <TweetText>{parse(tweet.text)}</TweetText>
      </TweetWrapper>
    </Container>
  );
};
