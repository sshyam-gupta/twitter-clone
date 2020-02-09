import React from 'react'
import data from './data'
import { Container, UserData, Retweeted, UserDetails, HashTag, TweetText } from './styles'
import { ProfileIcon, UserName, Name, HashContainer, MediaImage } from '../UserPage/Tweet/style'
import { IHashTag } from '../UserPage/Tweet'
import { customHistory } from '../../App/Routes'
import { parse } from '../../shared/utils/parseText'
const PATTERN = /^((http|https):\/\/)/;

const TweetPage = (props: any) => {
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
    <Container>
      <Retweeted>{data[0].user.name} Retweeted</Retweeted>
      <UserData>
        <div>
          <ProfileIcon src={data[0].retweeted_status.user.profile_image_url_https} />
        </div>
        <UserDetails>
          <Name>{data[0].retweeted_status.user.name}</Name>
          <UserName>@{data[0].retweeted_status.user.screen_name}</UserName>
        </UserDetails>
      </UserData>
      <HashContainer>
        {data[0].retweeted_status.entities.hashtags?.map?.(
          (hashtag: IHashTag, index: number) => (
            <HashTag
              onClick={(e) => handleHashTagClick(hashtag?.text, e)}
              key={index}>{`#${hashtag?.text}`}</HashTag>
          ),
        )}
        <TweetText>{parse(data[0].text, handleHashTagClick)}</TweetText>
        {/*
          // @ts-ignore */}
        {data[0].retweeted_status?.extended_entities?.media ? <div>
          {/*
          // @ts-ignore */}
          <MediaImage src={data[0].retweeted_status?.extended_entities?.media?.[0].media_url_https} />
        </div> : null}
      </HashContainer>
    </Container>
  )
}

export default TweetPage