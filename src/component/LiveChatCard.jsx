import React from 'react';
import styled from 'styled-components';
import { colors, fonts, radius, shadows } from '../styles/theme';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  border-radius: ${radius.card};
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: ${shadows.cardHover};
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 110px;
  background: ${colors.gradientCard};
  flex-shrink: 0;
`;

const CardBody = styled.div`
  background: ${colors.bgCard};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LiveBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${colors.liveBg};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  width: fit-content;
`;

const LiveDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.live};
  flex-shrink: 0;
`;

const LiveText = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.live};
  white-space: nowrap;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const RoomTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.xxl};
  color: ${colors.textMain};
  margin: 0;
  line-height: 1;
`;

const RoomDescription = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textSub};
  margin: 8px 0 0 0;
  line-height: 24px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 0;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  font-size: ${fonts.size.sm};
`;

const ParticipantLabel = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  color: ${colors.textMain};
`;

const ParticipantCount = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  color: ${colors.primary};
  margin-left: 4px;
`;

const JoinButton = styled.button`
  background: ${colors.primaryLight};
  color: ${colors.primary};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  border: none;
  border-radius: ${radius.sm};
  padding: 6px 16px;
  cursor: pointer;
  white-space: nowrap;
  line-height: normal;

  &:hover {
    background: #dde3ff;
  }
`;

const LiveChatCard = ({
  title = '수어 학습 질문방',
  description = '수어 학습 중 궁금한 점을 함께 해결해요. 초보자도 편하게!',
  participantCount = '00',
  isLive = true,
  onJoin,
}) => {
  return (
    <Card>
      <CardHeader />
      <CardBody>
        <InfoArea>
          {isLive && (
            <LiveBadge>
              <LiveDot />
              <LiveText>라이브</LiveText>
            </LiveBadge>
          )}
          <RoomTitle style={{ marginTop: isLive ? '8px' : '0' }}>{title}</RoomTitle>
          <RoomDescription>{description}</RoomDescription>
        </InfoArea>
        <Divider />
        <BottomRow>
          <ParticipantInfo>
            <ParticipantLabel>참여 중</ParticipantLabel>
            <ParticipantCount>{participantCount}명</ParticipantCount>
          </ParticipantInfo>
          <JoinButton onClick={onJoin}>참여하기</JoinButton>
        </BottomRow>
      </CardBody>
    </Card>
  );
};

export default LiveChatCard;
