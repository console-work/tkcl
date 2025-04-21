'use client';
import { useEffect } from 'react';
import Loader from '@/components/loader';
import {  fetchAboutDataSuccess } from '@/redux/slices/aboutSlice';
import { useDispatch, useSelector } from 'react-redux';



export default function AboutContent({data}) {

  const dispatch = useDispatch();
  const { loaded } = useSelector(state => state.about);

  useEffect(() => {
    if (!loaded && data ) {
      dispatch(fetchAboutDataSuccess(data));
    }
  }, [data, loaded, dispatch]);

  if (!loaded || !data) return <Loader />;

  return (
    <>
      
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <h3>;;;;jhsdvfhdfcudbcdus</h3>
      </div>
      
    </>
  );
}
