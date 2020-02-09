import React from 'react';
import { UserData, BackgroundImage, ProfileImage, UserDetail, Name, UserName, Desc } from './styles';

export interface IUser {
  id: number
  name: string
  screen_name: string
  location: string
  description: string
  url: string
  followers_count: number
  friends_count: number
  listed_count: number
  statuses_count: number
  created_at: string
  favourites_count: number
  profile_background_image_url: string
  profile_background_image_url_https: string
  profile_image_url: string
  profile_image_url_https: string
  profile_banner_url: string
}

// @ts-ignore
export default ({ user }: IUser) => (
  <UserData>
    <BackgroundImage src={user.profile_banner_url} />
    <UserDetail>
      <ProfileImage src={user.profile_image_url_https} />
      <Name>{user.name}</Name>
      <UserName>{`@${user.screen_name}`}</UserName>
      <Desc>{user.description}</Desc>
    </UserDetail>
  </UserData>
)