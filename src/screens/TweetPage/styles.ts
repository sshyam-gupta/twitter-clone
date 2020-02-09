import { color, font } from './../../shared/utils/styles';
import styled from 'styled-components';
import { HashTag as THashTag, TweetText as TTweetText } from '../UserPage/Tweet/style'


export const Container = styled.article`
  padding: 15px;
  border: 1px solid ${color.borderLight};
  border-top: 0;
`

export const Retweeted = styled.div`
  color: ${color.textLight};
  ${font.size(14)}
  margin-bottom: 10px;
`

export const UserData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const UserProfile = styled.img`

`

export const UserDetails = styled.div`

`

export const HashTag = styled(THashTag)`
  ${font.size(20)};
`

export const TweetText = styled(TTweetText)`
  ${font.size(20)};
  margin-top: 10px;

  span {
    ${font.size(20)};
  }
`