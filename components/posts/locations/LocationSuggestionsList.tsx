import {useTheme} from '@shopify/restyle';
import * as React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Box from '../../../theme/Box';
import {Theme, theme} from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {},
  btn: {
    marginRight: theme.spacing.s,
  },

  itemText: {
    color: 'grey',
  },
});

export type ILocationSuggestionsListProps = {
  onSelectItem: (v: string) => void;
};

const LocationSuggestionsList: React.FC<ILocationSuggestionsListProps> = ({
  onSelectItem,
}) => {
  const {spacing} = useTheme<Theme>();
  const {locationsSuggestions} = useSelector(
    (state: RootState) => state.locationsReducer,
  );
  const renderItem = React.useCallback(
    ({item}: any) => {
      return (
        <TouchableOpacity
          accessible={false}
          onPress={() => onSelectItem(item)}
          style={styles.btn}>
          <Box
            borderRadius={'xs'}
            backgroundColor={'inputBackgroundColor'}
            paddingVertical="xs"
            paddingHorizontal={'s'}>
            <Text accessible={false} style={styles.itemText}>
              {item}
            </Text>
          </Box>
        </TouchableOpacity>
      );
    },
    [onSelectItem],
  );

  const contentContainerStyle: StyleProp<ViewStyle> = React.useMemo(() => {
    return {
      paddingHorizontal: spacing.m,
    };
  }, [spacing.m]);
  return (
    <FlatList
      contentContainerStyle={contentContainerStyle}
      showsHorizontalScrollIndicator={false}
      data={locationsSuggestions}
      horizontal
      renderItem={renderItem}
    />
  );
};

export {LocationSuggestionsList};
