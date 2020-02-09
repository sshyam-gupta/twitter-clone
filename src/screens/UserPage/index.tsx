import React from 'react'
import { useParams } from 'react-router-dom'
import UserData from './UserData';
import Tweet from './Tweet';
import ApiService from '../../shared/utils/services/ApiService';
import { wrapException } from '../../shared/utils/hooks/useApi';

const UserPage = () => {
  const { userId } = useParams();
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      setIsLoading(true);
      ApiService.getUserTimeline(userId)
      .then((response: any) => {
        setData(response)
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.error(wrapException(err))
        setIsLoading(false);
      })

  }, [userId]);

  if(isLoading) {
    return <div>Loading</div>
  }

  return (
    <section>
      {data && data?.[0] && (
        <>
        {/*
        // @ts-ignore */}
          <UserData user={data?.[0]?.user} />
          {data.map((tweet: any, index: number) => <Tweet key={tweet.id || index} tweet={tweet} />)}
        </>
      )}
    </section>
  )
}

export default UserPage;