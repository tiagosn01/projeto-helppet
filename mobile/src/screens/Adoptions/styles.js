import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  padding: 0 18px 10px;
  flex: 1;
`;

export const ContainerForm = styled.View`
  flex-direction: row;
  max-width: 80%;
  margin-bottom: 10px;
`;

export const ButtonForm = styled(TouchableOpacity)`
  background: #fff;
  width: 56px;
  height: 56px;
  border-radius: 26px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerAdoptions = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  background: #e2dcdc;
  margin-bottom: 10px;
`;

export const AdoptionList = styled(FlatList)`
  padding: 0 0 40px;
  height: 480px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #e2dcdc;
  font-family: 'RobotoSlab-Medium';
  margin: 44px 0 34px;
`;
export const AdoptionDetail = styled.View`
  flex-direction: row;
`;

export const TextTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 6px;
`;

export const DeleteButton = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 5px;
`;
