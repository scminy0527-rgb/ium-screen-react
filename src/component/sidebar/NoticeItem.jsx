import React from 'react';
import styled from 'styled-components';
import { colors, fonts, radius } from '../../styles/theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.bgSection};
  border-radius: ${radius.input};
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const Badge = styled.div`
  background: ${colors.primary};
  color: ${colors.textWhite};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  letter-spacing: -0.2px;
  text-align: center;
  padding: 4px 5px;
  border-radius: 4px;
  flex-shrink: 0;
  white-space: nowrap;
`;

const Title = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
`;

const DateText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  text-align: right;
  margin: 0;
  flex-shrink: 0;
  white-space: nowrap;
`;

const NoticeItem = ({ title = '공지 제목', date = '3/8' }) => {
  return (
    <Wrapper>
      <LeftArea>
        <Badge>공</Badge>
        <Title>{title}</Title>
      </LeftArea>
      <DateText>{date}</DateText>
    </Wrapper>
  );
};

export default NoticeItem;
