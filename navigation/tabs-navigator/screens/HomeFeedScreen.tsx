import React from 'react';
import {View} from 'react-native';

export type IHomeFeedScreenProps = {};

const HomeFeedScreen: React.FC<IHomeFeedScreenProps> = ({}) => {
  return <View style={{flex: 1, backgroundColor: 'pink'}} />;
};

export {HomeFeedScreen};
