import React from 'react';

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
  MediaImage
} from './style';
import { parse } from '../../../shared/utils/parseText';
import { customHistory } from '../../../App/Routes';

const PATTERN = /^((http|https):\/\/)/;

export interface IHashTag {
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
  extended_entities?: {
    media?: {
      media_url: string
      media_url_https: string
      url: string
      display_url: string
      expanded_url: string
      type: 'photo' | 'video'
    }[]
  }
}

export default ({ tweet }: { tweet: ITweet }) => {
  const handleHashTagClick = (link: string, e: any) => {
    e.preventDefault();
    if(PATTERN.test(link)) {
      window.open(link, "_blank")
      return
    }

    link = link.replace(/[#|@]/g, "")
    customHistory.push(`/user/${link}`);
  };

  return (
    <Container key={tweet.id} to={`/tweet/${tweet.id}`}>
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
                onClick={(e) => handleHashTagClick(hashtag?.text, e)}
                key={index}>{`#${hashtag?.text}`}</HashTag>
            ),
          )}
        </HashContainer>
        <TweetText>{parse(tweet.text, handleHashTagClick)}</TweetText>
        {tweet.extended_entities?.media && <div>
          <MediaImage src={tweet.extended_entities?.media?.[0].media_url_https} />
        </div>}
      </TweetWrapper>
    </Container>
  );
};
