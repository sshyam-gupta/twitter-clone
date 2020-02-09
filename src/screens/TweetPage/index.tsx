import React from 'react'
import _ from 'lodash';
import { Container, UserData, Retweeted, UserDetails, HashTag, TweetText } from './styles'
import { ProfileIcon, UserName, Name, HashContainer, MediaImage } from '../UserPage/Tweet/style'
import { IHashTag } from '../UserPage/Tweet'
import { customHistory } from '../../App/Routes'
import { parse } from '../../shared/utils/parseText'
import ApiService from '../../shared/utils/services/ApiService'
import { wrapException } from '../../shared/utils/hooks/useApi';

import { useParams } from 'react-router-dom'
const PATTERN = /^((http|https):\/\/)/;

const TweetPage = () => {
  const { tweetId } = useParams();
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    ApiService.getTweet(tweetId)
      .then((response: any) => {
        setData(response)
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.error(wrapException(err))
        setIsLoading(false);
      })

  }, [tweetId]);

  if (isLoading) {
    return <div>Loading</div>
  }

  const handleHashTagClick = (link: string, e: any) => {
    e.preventDefault();
    if (PATTERN.test(link)) {
      window.open(link, "_blank")
      return
    }

    link = link.replace(/[#|@]/g, "")
    customHistory.push(`/user/${link}`);
  };

  return (
    <Container>
      {!_.isEmpty(data) && (
        <>
          {/*
        // @ts-ignore */}
          <Retweeted>{data.user.name} Retweeted</Retweeted>
          <UserData>
            <div>
              {/*
        // @ts-ignore */}
              <ProfileIcon src={data.user.profile_image_url_https} />
            </div>
            <UserDetails>
              {/*
        // @ts-ignore */}
              <Name>{data.user.name}</Name>
              {/*
        // @ts-ignore */}
              <UserName>@{data.user.screen_name}</UserName>
            </UserDetails>
          </UserData>
          <HashContainer>
            {/*
        // @ts-ignore */}
            {data.entities.hashtags?.map?.(
              (hashtag: IHashTag, index: number) => (
                <HashTag
                  onClick={(e) => handleHashTagClick(hashtag?.text, e)}
                  key={index}>{`#${hashtag?.text}`}</HashTag>
              ),
            )}
            {/*
        // @ts-ignore */}
            <TweetText>{parse(data.text, handleHashTagClick)}</TweetText>
            {/*
          // @ts-ignore */}
            {data?.extended_entities?.media ? <div>
              {/*
          // @ts-ignore */}
              <MediaImage src={data?.extended_entities?.media?.[0].media_url_https} />
            </div> : null}
          </HashContainer>
        </>
      )}
    </Container>
  )
}

export default TweetPage