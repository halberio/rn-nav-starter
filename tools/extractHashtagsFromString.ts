import {mentionRegEx} from 'react-native-controlled-mentions';

export function extractHashtagsFromString(str: string) {
  return str.match(/#\w+/g) || [];
}

export function extractTagsFromString(str: string) {
  return str.match(mentionRegEx) || [];
}
