import * as React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Box from '../../../theme/Box';
import TextRestyle from '../../../theme/TextRestyle';
import numeral from 'numeral';
import {Platform, StyleSheet} from 'react-native';
export type IPostIteractionButtonProps = {
  icon: React.ReactNode;
  onPress: () => void;
  counter?: number;
};

const styles = StyleSheet.create({
  text: {
    position: 'relative',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    textShadowRadius: Platform.OS === 'ios' ? 0 : 2,
  },
});

const PostIteractionButtonMemo: React.FC<IPostIteractionButtonProps> = ({
  icon,
  onPress,
  counter,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box>
        <Box
          height={50}
          width={40}
          justifyContent="center"
          alignItems={'center'}>
          {icon && icon}
        </Box>
        {counter ? (
          <TextRestyle
            style={styles.text}
            textAlign={'center'}
            lineHeight={14}
            color="postDescription"
            variant="paragraph">
            {numeral(Number(counter)).format('0a')}
          </TextRestyle>
        ) : null}
      </Box>
    </TouchableOpacity>
  );
};

function arePropsEqual(
  prevProps: IPostIteractionButtonProps,
  nextProps: IPostIteractionButtonProps,
) {
  return (
    prevProps.icon === nextProps.icon && prevProps.counter === nextProps.counter
  );
}
const PostIteractionButton = React.memo(
  PostIteractionButtonMemo,
  arePropsEqual,
);
export {PostIteractionButton};
