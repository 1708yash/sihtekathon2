import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ComponentNavigationProps } from '../utils/types';
import DetailCard from '../components/DetailCard';

export default function NewsOverview(props: ComponentNavigationProps) {
   const {title,description,content,image_url } = props?.route?.params;
  return (
   <DetailCard content={content} image_url={image_url} title={title} description={description } />
  );
};

const styles = StyleSheet.create({})