import * as React from 'react';
import {FlashList} from '@shopify/flash-list';
import {fakeData} from '../../../tools/fakeData';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import Box from '../../../theme/Box';
import usePostItemHeightWithTabbar from '../../../hooks/usePostItemHeightWithTabbar';
import {SIZES} from '../../../theme/sizes';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export type IHomeFeedScreenProps = {};

const HomeFeedScreen: NavigationFunctionComponent<IHomeFeedScreenProps> = ({
  componentId,
}) => {
  const {itemHeight} = usePostItemHeightWithTabbar();

  const renderItem = React.useCallback(
    ({item}: any) => {
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            Navigation.push(componentId, {
              component: {
                name: 'UserProfile',
                passProps: {
                  thumbnail_url: item.thumbnail_url,
                },
                options: {
                  animations: {
                    push: {
                      sharedElementTransitions: [
                        {
                          fromId: `image${item.thumbnail_url}id`,
                          toId: `image${item.thumbnail_url}Dest`,
                          duration: 200,
                          interpolation: {
                            type: 'accelerateDecelerate',
                          },
                        },
                      ],
                    },
                    pop: {
                      sharedElementTransitions: [
                        {
                          toId: `image${item.thumbnail_url}id`,
                          fromId: `image${item.thumbnail_url}Dest`,
                          duration: 200,
                          interpolation: {
                            type: 'accelerateDecelerate',
                          },
                        },
                      ],
                    },
                  },
                },
              },
            })
          }>
          <Box
            height={itemHeight}
            position="relative"
            width={SIZES.screenWidth}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              nativeID={`image${item.thumbnail_url}id`}
              style={{...StyleSheet.absoluteFillObject}}
              source={{
                uri: item.thumbnail_url,
              }}
            />
          </Box>
        </TouchableWithoutFeedback>
      );
    },
    [componentId, itemHeight],
  );

  const overrideItemLayout = React.useRef(
    ({}: any, item: any, index: number, _maxColumns: any, extraData: any) => {
      return () =>
        overrideItemLayout &&
        overrideItemLayout.current &&
        overrideItemLayout.current(
          {span: 0, size: itemHeight},
          item,
          index,
          1,
          extraData,
        );
    },
  );

  return (
    <Box flex={1}>
      <FlashList
        pagingEnabled
        contentInsetAdjustmentBehavior="never"
        automaticallyAdjustContentInsets={true}
        estimatedItemSize={itemHeight}
        renderItem={renderItem}
        data={fakeData}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        refreshing={false}
        overrideItemLayout={overrideItemLayout.current}
        estimatedFirstItemOffset={0}
        decelerationRate={0.98}
        onEndReachedThreshold={0.2}
        maintainVisibleContentPosition={{minIndexForVisible: 0}}
        overScrollMode="never"
        scrollEventThrottle={16}
        bounces={false}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export {HomeFeedScreen};
