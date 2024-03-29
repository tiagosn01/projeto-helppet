import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding: 24px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 24 : 24}px;
  background: #0f2417;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #e2dcdc;
  margin-left: 16px;
`;

export const ProfileButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const InstitutionContainer = styled.View`
  background: #416e4b;
  border-radius: 10px;
  padding: 26px 14px;
  margin-top: 28px;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: center;
`;

export const InstitutionAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const InstitutionInfo = styled.View`
  margin-left: 22px;
`;

export const InstitutionName = styled.Text`
  margin-left: -22px;
  align-self: center;
  font-family: 'RobotoSlab-Medium';
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #e2dcdc;
`;

export const InstitutionDetail = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const InstitutionDetailText = styled.Text`
  margin: 0 12px;
  color: #d5ccb3;
`;

export const ListsTitle = styled.Text`
  margin-top: 24px;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #e2dcdc;
  margin-bottom: 10px;
`;

export const InstitutionAdmin = styled.View`
  padding: 0 24px 0;
`;

export const InstitutionTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #e2dcdc;
  margin-top: 24px;
  margin-bottom: 10px;
  padding: 0 24px 0;
`;

export const AnimalContainer = styled.TouchableOpacity`
  background: #416e4b;
  border-radius: 10px;
  padding: 18px 16px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const AnimalName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
  margin-bottom: 2px;
  font-size: 18px;
  color: #e2dcdc;
`;

export const AnimalDetail = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const AnimalDetailText = styled.Text`
  margin: 0 16px;
  color: #d5ccb3;
`;

export const DrawView = styled.View`
  border-bottom-color: gray;
  border-bottom-width: 1px;
  margin: 0 24px 0;
  padding: 14px 0 8px;
`;

export const ContainerButton = styled.View`
  padding: 10px 24px;
`;

export const DrawVertical = styled.View`
  border-left-color: gray;
  border-left-width: 1px;
  width: 2px;
  height: 70px;
`;
