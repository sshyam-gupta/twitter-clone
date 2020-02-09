import styled from 'styled-components';
import { color, font, mixin, media } from '../../../shared/utils/styles';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  border: 1px solid ${color.borderLight};
  border-top: 0;

  &:hover {
    background: ${color.backgroundLight};
  }
`

export const ProfileIcon = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  margin: 0 5px;

  ${media.Tablet`
    height: 60px;
    width: 60px;
    border-radius: 30px;
  `};
  ${media.Phablet`
    height: 40px;
    width: 40px;
    border-radius: 20px;
  `};
`

export const MediaImage = styled.img`
  width: 100%;
  margin: 10px 0;
  border-radius: 15px;
  opacity: 0.8;
  object-fit: cover;
`

export const TweetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`

export const UserInfo = styled.div`
  display: flex;
`

export const UserName = styled.p`
  color: ${color.textLight};
`

export const Name = styled.p`
  ${font.bold};
  margin-right: 5px;
`
export const TweetText = styled.span`
  white-space: pre-line;
  ${font.size(14)}
`

export const HashTag = styled.span`
  ${mixin.link("#1b95e0")};
  ${font.size(14)}
`

export const HashContainer =styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;

  span {
    margin-right: 5px;
  }
`

export default {}