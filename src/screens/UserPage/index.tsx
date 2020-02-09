import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from './data';
import UserData from './UserData';
import Tweet from './Tweet';

const UserPage = (props: any) => {
  const { userId } = useParams();
  const [data, setData] = React.useState(DATA);

  return (
    <section>
      {data && (
        <>
          {/*
          // @ts-ignore */}
          <UserData user={data[0].user} />
          {/*
          // @ts-ignore */}
          {data.map((tweet, index) => <Tweet key={tweet.id} tweet={tweet} index={index} />)}
        </>
      )}
    </section>
  )
}

export default UserPage;