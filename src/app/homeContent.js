'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataSuccess } from '@/redux/slices/homeSlice';
import Loader from '@/components/loader';

export default function HomeContent({ data }) {
  const dispatch = useDispatch();
  const { loaded } = useSelector(state => state.home);

  useEffect(() => {
    if (!loaded && data) {
      dispatch(fetchHomeDataSuccess(data));
    }
  }, [data, loaded, dispatch]);

  if (!loaded) return <Loader />;

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h3>jhsdvfhdfcudbcdus</h3>
    </main>
  );
}
