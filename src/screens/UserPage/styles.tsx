import styled from "styled-components"
import { media, font, color } from '../../shared/utils/styles';

export const UserData = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.borderLight};
  border-top: 0;
`

export const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
`

export const ProfileImage = styled.img`
  object-fit: cover;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: absolute;
  top: -60px;
  border: 3px solid;
  ${media.Tablet`
  
  height: 80px;
    width: 80px;
    top: -40px;
  `};
  ${media.Phablet`
  height: 60px;
  width: 60px;
  top: -30px;
  `};
`

export const UserDetail = styled.div`
  position: relative;
  padding: 15px;
  padding-top: 70px;
  ${media.Tablet`
    padding-top: 50px;
  `};
  ${media.Phablet`
    padding-top: 40px;
  `};
`

export const UserName = styled.p`
  color: ${color.textLight};
`

export const Name = styled.p`
  ${font.bold};
`

export const Desc = styled.p`
  ${font.size(13)};
  padding-top: 5px;
`

export default {}