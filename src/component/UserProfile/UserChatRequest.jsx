import styled from "styled-components";
import theme from "../../styles/theme";

const UserChatRequest = ({ onChatStart }) => {
  return (
    <Card>
      <SectionLabel>해당 유저와 이야기 하기</SectionLabel>
      <Divider />
      <ChatButton onClick={onChatStart}>1:1 채팅 시작하기</ChatButton>
    </Card>
  );
};

export default UserChatRequest;

const Card = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 12px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 312px;
  box-sizing: border-box;
`;

const SectionLabel = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  letter-spacing: -0.24px;
  line-height: 20px;
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.GRAYSCALE[8]};
  flex-shrink: 0;
`;

const ChatButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid ${theme.PALETTE.primary.main};
  background: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  letter-spacing: -0.28px;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;
