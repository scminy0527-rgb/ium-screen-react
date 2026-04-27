import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(67, 89, 252, 0.18);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 110px;
  background: ${theme.GRADIENT.lightBlue};
  flex-shrink: 0;
`;

const CardBody = styled.div`
  background: ${theme.PALETTE.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LiveBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: #e8f9e9;
  border-radius: 100px;
  padding: 4px 8px;
  width: fit-content;
`;

const LiveDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${theme.PALETTE.secondary.main};
  flex-shrink: 0;
`;

const LiveText = styled.span`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h12};
  color: ${theme.PALETTE.secondary.main};
  white-space: nowrap;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const RoomTitle = styled.p`
  font-weight: ${theme.FONT_WEIGHT.medium};
  font-size: ${theme.FONT_SIZE.h7};
  color: ${theme.TEXT_COLOR.basic};
  margin: 0;
  line-height: 1;
`;

const RoomDescription = styled.p`
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  margin: 8px 0 0 0;
  line-height: 24px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${theme.GRAYSCALE[8]};
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
  font-size: ${theme.FONT_SIZE.h11};
`;

const ParticipantLabel = styled.span`
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
`;

const ParticipantCount = styled.span`
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  margin-left: 4px;
`;

const JoinButton = styled.button`
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h11};
  border: none;
  border-radius: 10px;
  padding: 6px 16px;
  cursor: pointer;
  white-space: nowrap;
  line-height: normal;

  &:hover {
    background: #dde3ff;
  }
`;

const LiveChatCard = ({
  title = "수어 학습 질문방",
  description = "수어 학습 중 궁금한 점을 함께 해결해요. 초보자도 편하게!",
  participantCount = "00",
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
          <RoomTitle style={{ marginTop: isLive ? "8px" : "0" }}>
            {title}
          </RoomTitle>
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
