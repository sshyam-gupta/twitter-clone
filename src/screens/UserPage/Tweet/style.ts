import styled from 'styled-components';
import { color, font, mixin } from '../../../shared/utils/styles';

export const Container = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  border: 1px solid ${color.borderLight};
  border-top: 0;
`

export const ProfileIcon = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  margin: 0 5px;
`

export const TweetWrapper = styled.div`
  flex-grow: 1;
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

  span {
    margin-right: 5px;
  }
`

export default {}