import * as React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import TextRestyle from '../../../theme/TextRestyle';
import {palette} from '../../../theme/theme';

const styles = StyleSheet.create({
  shadowText: {
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0.25,
  },
});

interface IPostDescriptionTextProps extends React.PropsWithChildren {
  children: string;
  mentionHashtagPress: (e: string) => void;
  mentionHashtagColor?: string;
  style?: StyleProp<TextStyle>;
  ellipsizeMode?: 'tail' | 'middle' | 'head';
}

const PostDescriptionTextMemo: React.FC<IPostDescriptionTextProps> = ({
  children,
  mentionHashtagPress,
  mentionHashtagColor = palette.lightBlue,
  style,
  ellipsizeMode,
}) => {
  const prepareText = React.useCallback(
    (
      text: string,
      mentionHashtagPressFn: (e: string) => void,
      mentionHashtagColorPrepare: string,
    ) => {
      const result = [];

      let mentList = children.match(/[@#][a-z0-9_\\.]+/gi);
      if (mentList == null) {
        return [text];
      } else {
        for (const ment of mentList) {
          result.push(text.substring(0, text.indexOf(ment)));
          result.push(
            <Mention
              key={ment}
              mentionHashtagColor={mentionHashtagColorPrepare}
              mentionHashtagPress={mentionHashtagPressFn}
              text={ment}
            />,
          );
          text = text.substring(text.indexOf(ment) + ment.length, text.length);
        }
        if (text.length > 0) {
          result.push(text);
        }
        return result;
      }
    },
    [children],
  );
  return (
    <TextRestyle
      marginTop={'s'}
      variant="postDescription"
      numberOfLines={2}
      style={[style, styles.shadowText]}
      ellipsizeMode={ellipsizeMode}>
      {prepareText(children, mentionHashtagPress, mentionHashtagColor)}
    </TextRestyle>
  );
};

interface IMentionProps {
  text: string;
  mentionHashtagPress: (e: string) => void;
  mentionHashtagColor: string;
}
const Mention: React.FC<IMentionProps> = ({
  mentionHashtagColor,
  text,
  mentionHashtagPress,
}) => {
  return (
    <TextRestyle
      variant="postDescription"
      style={{
        color: mentionHashtagColor,
      }}
      onPress={() => {
        if (mentionHashtagPress) {
          mentionHashtagPress(text);
        }
      }}>
      {text}
    </TextRestyle>
  );
};

function arePropsEqual(
  prevProps: IPostDescriptionTextProps,
  nextProps: IPostDescriptionTextProps,
) {
  return (
    prevProps.children === nextProps.children &&
    prevProps.ellipsizeMode === nextProps.ellipsizeMode &&
    prevProps.mentionHashtagColor === nextProps.mentionHashtagColor &&
    JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style)
  );
}

const PostDescriptionText = React.memo(PostDescriptionTextMemo, arePropsEqual);
export default PostDescriptionText;
